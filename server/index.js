const express = require("express");
const cors = require("cors");
const pool = require("./db");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const app = express();
const PORT = 3000;

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

app.use(cors());
app.use(express.json());

async function requireSignedInUser(req, res, next) {
  const authorization = req.get("authorization") || "";
  const token = authorization.match(/^Bearer\s+(.+)$/i)?.[1];

  if (!token) {
    return res.status(401).json({
      message: "Please sign in first."
    });
  }

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_PUBLISHABLE_KEY) {
    return res.status(500).json({
      message: "Supabase auth is not configured."
    });
  }

  try {
    const response = await fetch(
      `${process.env.SUPABASE_URL}/auth/v1/user`,
      {
        headers: {
          apikey: process.env.SUPABASE_PUBLISHABLE_KEY,
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (!response.ok) {
      return res.status(401).json({
        message: "Your sign-in session is invalid or expired."
      });
    }

    const user = await response.json();

    if (!user.id) {
      return res.status(401).json({
        message: "Could not verify your account."
      });
    }

    req.user = {
      id: user.id,
      email: user.email
    };

    next();
  } catch (error) {
    console.error("Could not verify signed-in user:", error.message);

    res.status(503).json({
      message: "Could not reach Supabase Auth."
    });
  }
}

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "TAVRA API is running"
  });
});

app.get("/api/db-check", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      status: "ok",
      message: "Database connection is working",
      databaseTime: result.rows[0].now
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);

    res.status(500).json({
      status: "error",
      message: "Database connection failed"
    });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, name, category, description, price, image_url, stock
       FROM public.products
       ORDER BY created_at DESC`
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Could not load products:", error.message);

    res.status(500).json({
      message: "Could not load products"
    });
  }
});

app.get("/api/orders/mine", requireSignedInUser, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT
         o.id,
         o.total_amount,
         o.status,
         o.created_at,
         COALESCE(
           json_agg(
             json_build_object(
               'product_name', oi.product_name,
               'quantity', oi.quantity,
               'unit_price', oi.unit_price
             )
             ORDER BY oi.id
           ) FILTER (WHERE oi.id IS NOT NULL),
           '[]'::json
         ) AS items
       FROM public.orders AS o
       LEFT JOIN public.order_items AS oi ON oi.order_id = o.id
       WHERE o.user_id = $1
       GROUP BY o.id
       ORDER BY o.created_at DESC
       LIMIT 50`,
      [req.user.id]
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Could not load order history:", error.message);

    res.status(500).json({
      message: "Could not load your orders."
    });
  }
});

app.post("/api/orders", requireSignedInUser, async (req, res) => {
  const { customer_name, email, phone, shipping_address, items } = req.body;

  const validItems =
    Array.isArray(items) &&
    items.length > 0 &&
    items.length <= 30 &&
    items.every(item =>
      Number.isInteger(Number(item.product_id)) &&
      Number(item.product_id) > 0 &&
      Number.isInteger(Number(item.quantity)) &&
      Number(item.quantity) > 0 &&
      Number(item.quantity) <= 10
    );

  if (
    typeof customer_name !== "string" ||
    !customer_name.trim() ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof shipping_address !== "string" ||
    !shipping_address.trim() ||
    !validItems
  ) {
    return res.status(400).json({
      message: "Enter valid customer details and at least one valid item."
    });
  }

  const productIds = items.map(item => Number(item.product_id));

  if (new Set(productIds).size !== productIds.length) {
    return res.status(400).json({
      message: "Each product should appear only once in the order."
    });
  }

  let client;

  try {
    client = await pool.connect();
    await client.query("BEGIN");

    const productResult = await client.query(
      `SELECT id, name, price, stock
       FROM public.products
       WHERE id = ANY($1::bigint[])
       FOR UPDATE`,
      [productIds]
    );

    if (productResult.rows.length !== productIds.length) {
      throw Object.assign(new Error("One or more products were not found."), {
        statusCode: 400
      });
    }

    const productsById = new Map(
      productResult.rows.map(product => [String(product.id), product])
    );

    let totalCents = 0;

    for (const item of items) {
      const product = productsById.get(String(Number(item.product_id)));

      if (Number(product.stock) < Number(item.quantity)) {
        throw Object.assign(
          new Error(`${product.name} does not have enough stock.`),
          { statusCode: 400 }
        );
      }

      totalCents +=
        Math.round(Number(product.price) * 100) * Number(item.quantity);
    }

    const orderResult = await client.query(
      `INSERT INTO public.orders
         (user_id, customer_name, email, phone, shipping_address, total_amount)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id`,
      [
        req.user.id,
        customer_name.trim(),
        email.trim(),
        typeof phone === "string" ? phone.trim() : null,
        shipping_address.trim(),
        (totalCents / 100).toFixed(2)
      ]
    );

    const orderId = orderResult.rows[0].id;

    for (const item of items) {
      const product = productsById.get(String(Number(item.product_id)));
      const quantity = Number(item.quantity);

      await client.query(
        `INSERT INTO public.order_items
           (order_id, product_id, product_name, quantity, unit_price)
         VALUES ($1, $2, $3, $4, $5)`,
        [orderId, product.id, product.name, quantity, product.price]
      );

      await client.query(
        `UPDATE public.products
         SET stock = stock - $1
         WHERE id = $2`,
        [quantity, product.id]
      );
    }

    const paymentOrder = await razorpay.orders.create({
      amount: totalCents,
      currency: "INR",
      receipt: `TAVRA-${orderId}`,
      notes: {
        internal_order_id: String(orderId),
        user_id: req.user.id
      }
    });

    await client.query(
      `UPDATE public.orders
       SET razorpay_order_id = $1
       WHERE id = $2`,
      [paymentOrder.id, orderId]
    );

    await client.query("COMMIT");

    res.status(201).json({
      message: "Order created",
      orderId,
      totalAmount: (totalCents / 100).toFixed(2),
      razorpayOrderId: paymentOrder.id,
      amount: paymentOrder.amount,
      currency: paymentOrder.currency,
      keyId: process.env.RAZORPAY_KEY_ID
    });
  } catch (error) {
    if (client) {
      await client.query("ROLLBACK").catch(() => {});
    }

    console.error("Could not save order:", error.message);

    res.status(error.statusCode || 500).json({
      message: error.statusCode
        ? error.message
        : "Could not save order."
    });
  } finally {
    client?.release();
  }
});

app.post("/api/payments/verify", requireSignedInUser, async (req, res) => {
  const {
    order_id,
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature
  } = req.body;

  const internalOrderId = Number(order_id);

  if (
    !Number.isInteger(internalOrderId) ||
    internalOrderId <= 0 ||
    typeof razorpay_order_id !== "string" ||
    typeof razorpay_payment_id !== "string" ||
    typeof razorpay_signature !== "string" ||
    !/^[a-f0-9]{64}$/i.test(razorpay_signature)
  ) {
    return res.status(400).json({
      message: "Invalid payment details."
    });
  }

  try {
    const result = await pool.query(
      `SELECT id, status, total_amount, razorpay_order_id, razorpay_payment_id
       FROM public.orders
       WHERE id = $1 AND user_id = $2`,
      [internalOrderId, req.user.id]
    );

    const order = result.rows[0];

    if (!order) {
      return res.status(404).json({
        message: "Order not found."
      });
    }

    if (
      order.status === "paid" &&
      order.razorpay_payment_id === razorpay_payment_id
    ) {
      return res.json({
        message: "Payment already verified.",
        status: "paid"
      });
    }

    if (
      !order.razorpay_order_id ||
      order.razorpay_order_id !== razorpay_order_id
    ) {
      return res.status(400).json({
        message: "Payment order does not match."
      });
    }

    if (!process.env.RAZORPAY_KEY_SECRET) {
      return res.status(500).json({
        message: "Razorpay is not configured."
      });
    }

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${order.razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const expectedBuffer = Buffer.from(expectedSignature, "hex");
    const receivedBuffer = Buffer.from(razorpay_signature, "hex");

    if (
      expectedBuffer.length !== receivedBuffer.length ||
      !crypto.timingSafeEqual(expectedBuffer, receivedBuffer)
    ) {
      return res.status(400).json({
        message: "Payment signature is invalid."
      });
    }

    const payment = await razorpay.payments.fetch(razorpay_payment_id);
    const expectedAmount = Math.round(Number(order.total_amount) * 100);

    if (
      payment.order_id !== order.razorpay_order_id ||
      Number(payment.amount) !== expectedAmount ||
      payment.currency !== "INR"
    ) {
      return res.status(400).json({
        message: "Payment details do not match the order."
      });
    }

    if (payment.status !== "captured") {
      return res.status(409).json({
        message: `Payment status is ${payment.status}.`,
        status: payment.status
      });
    }

    await pool.query(
      `UPDATE public.orders
       SET status = 'paid', razorpay_payment_id = $1
       WHERE id = $2 AND user_id = $3`,
      [razorpay_payment_id, internalOrderId, req.user.id]
    );

    res.json({
      message: "Payment verified.",
      status: "paid"
    });
  } catch (error) {
    console.error("Could not verify Razorpay payment:", error.message);

    res.status(500).json({
      message: "Could not verify the payment."
    });
  }
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});