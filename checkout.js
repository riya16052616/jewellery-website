import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  window.TAVRA_SUPABASE_URL,
  window.TAVRA_SUPABASE_PUBLISHABLE_KEY
);

const cartStorageKey = "jewelleryStoriesCart";
const checkoutForm = document.getElementById("checkoutForm");
const checkoutItems = document.getElementById("checkoutItems");
const checkoutTotal = document.getElementById("checkoutTotal");
const checkoutMessage = document.getElementById("checkoutMessage");
const customerEmailInput = document.getElementById("customerEmail");

const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

function getCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(cartStorageKey) || "[]");
    return Array.isArray(savedCart) ? savedCart : [];
  } catch {
    return [];
  }
}

function showMessage(message, isError = false) {
  checkoutMessage.textContent = message;
  checkoutMessage.style.color = isError ? "#a32626" : "#276749";
}

async function prefillAccountEmail() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error("Could not read the sign-in session:", error.message);
    return;
  }

  const email = data.session?.user?.email;
  if (email && customerEmailInput && !customerEmailInput.value) {
    customerEmailInput.value = email;
  }
}

function renderOrderSummary() {
  const cart = getCart();
  checkoutItems.replaceChildren();

  if (cart.length === 0) {
    checkoutItems.textContent = "Your bag is empty.";
    checkoutTotal.textContent = "";
    return;
  }

  let subtotal = 0;

  cart.forEach(item => {
    const quantity = Math.max(1, Number(item.quantity) || 1);
    const price = Math.max(0, Number(item.price) || 0);
    subtotal += quantity * price;

    const row = document.createElement("div");
    row.className = "checkout-item";

    const description = document.createElement("span");
    description.textContent = `${item.name} × ${quantity}`;

    const amount = document.createElement("span");
    amount.textContent = inrFormatter.format(quantity * price);

    row.append(description, amount);
    checkoutItems.append(row);
  });

  checkoutTotal.textContent = `Subtotal: ${inrFormatter.format(subtotal)}`;
}

function clearCartAfterSuccessfulPayment() {
  localStorage.removeItem(cartStorageKey);

  // Clear the same-tab fallback cart while keeping any saved wishlist.
  try {
    if (window.name.startsWith("JewelleryStoriesState:")) {
      const state = JSON.parse(
        window.name.slice("JewelleryStoriesState:".length)
      );
      state.cart = [];
      window.name = "JewelleryStoriesState:" + JSON.stringify(state);
    }
  } catch {
    // The localStorage cart was already cleared.
  }

  renderOrderSummary();
  checkoutForm.reset();
}

async function verifyPayment(orderId, paymentResponse, accessToken) {
  const response = await fetch("http://localhost:3000/api/payments/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      order_id: orderId,
      razorpay_order_id: paymentResponse.razorpay_order_id,
      razorpay_payment_id: paymentResponse.razorpay_payment_id,
      razorpay_signature: paymentResponse.razorpay_signature
    })
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Could not verify your payment.");
  }

  return result;
}

checkoutForm.addEventListener("submit", async event => {
  event.preventDefault();
  showMessage("");

  if (!checkoutForm.reportValidity()) return;

  const cart = getCart();

  if (cart.length === 0) {
    showMessage(
      "Your bag is empty. Add a product before placing an order.",
      true
    );
    return;
  }

  if (typeof window.Razorpay !== "function") {
    showMessage(
      "Razorpay Checkout did not load. Refresh the page and try again.",
      true
    );
    return;
  }

  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    showMessage(
      "Could not check your sign-in. Please refresh and try again.",
      true
    );
    return;
  }

  const session = sessionData.session;

  if (!session) {
    showMessage(
      "Please sign in before placing your order. Go to the home page and click the account icon.",
      true
    );
    return;
  }

  const submitButton = checkoutForm.querySelector('[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = "CREATING ORDER…";

  let paymentWindowOpen = false;

  try {
    let productsByName = new Map();

    const hasMissingProductIds = cart.some(item => {
      const id = Number(item.productId);
      return !Number.isInteger(id) || id <= 0;
    });

    if (hasMissingProductIds) {
      const productsResponse = await fetch(
        "http://localhost:3000/api/products"
      );

      if (!productsResponse.ok) {
        throw new Error("Could not look up products from the database.");
      }

      const products = await productsResponse.json();
      productsByName = new Map(
        products.map(product => [product.name.trim().toLowerCase(), product])
      );
    }

    const orderItems = cart.map(item => {
      const matchedProduct = productsByName.get(
        item.name.trim().toLowerCase()
      );
      const savedId = Number(item.productId);
      const productId =
        Number.isInteger(savedId) && savedId > 0
          ? savedId
          : Number(matchedProduct?.id);

      return {
        product_id: productId,
        quantity: Number(item.quantity)
      };
    });

    if (
      orderItems.some(
        item => !Number.isInteger(item.product_id) || item.product_id <= 0
      )
    ) {
      throw new Error(
        "Could not match a bag item to a product in the database."
      );
    }

    const response = await fetch("http://localhost:3000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.access_token}`
      },
      body: JSON.stringify({
        customer_name: document
          .getElementById("customerName")
          .value.trim(),
        email: session.user.email || customerEmailInput.value.trim(),
        phone: document
          .getElementById("customerPhone")
          .value.trim(),
        shipping_address: document
          .getElementById("shippingAddress")
          .value.trim(),
        items: orderItems
      })
    });

    const order = await response.json();

    if (!response.ok) {
      throw new Error(order.message || "Could not create the order.");
    }

    if (!order.razorpayOrderId || !order.keyId || !order.amount) {
      throw new Error("The server did not return the Razorpay order details.");
    }

    submitButton.textContent = "OPENING PAYMENT…";

    const paymentOptions = {
      key: order.keyId,
      amount: order.amount,
      currency: order.currency || "INR",
      name: "TAVRA",
      description: `Order #${order.orderId}`,
      order_id: order.razorpayOrderId,
      prefill: {
        name: document.getElementById("customerName").value.trim(),
        email: session.user.email || customerEmailInput.value.trim(),
        contact: document.getElementById("customerPhone").value.trim()
      },
      theme: {
        color: "#a98550"
      },
      modal: {
        ondismiss: () => {
          paymentWindowOpen = false;
          submitButton.disabled = false;
          submitButton.textContent = "PLACE ORDER";
          showMessage(
            `Payment was cancelled. Your order #${order.orderId} is still pending. You can try again.`
          );
        }
      },
      handler: async paymentResponse => {
        submitButton.disabled = true;
        submitButton.textContent = "VERIFYING PAYMENT…";
        showMessage("Payment received. Verifying it securely…");

        try {
          await verifyPayment(
            order.orderId,
            paymentResponse,
            session.access_token
          );

          paymentWindowOpen = false;
          clearCartAfterSuccessfulPayment();
          showMessage(`Payment successful. Order #${order.orderId} is confirmed.`);
        } catch (error) {
          paymentWindowOpen = false;
          showMessage(
            `${error.message} Your bag is still saved. Contact support with order #${order.orderId} if you were charged.`,
            true
          );
        } finally {
          submitButton.disabled = false;
          submitButton.textContent = "PLACE ORDER";
        }
      }
    };

    const paymentCheckout = new window.Razorpay(paymentOptions);

    paymentCheckout.on("payment.failed", event => {
      paymentWindowOpen = false;
      submitButton.disabled = false;
      submitButton.textContent = "PLACE ORDER";
      showMessage(
        event.error?.description ||
          "Payment failed. Your bag is still saved. Please try again.",
        true
      );
    });

    paymentWindowOpen = true;
    paymentCheckout.open();
    submitButton.textContent = "PAYMENT IN PROGRESS…";
  } catch (error) {
    paymentWindowOpen = false;
    showMessage(error.message, true);
  } finally {
    if (!paymentWindowOpen) {
      submitButton.disabled = false;
      submitButton.textContent = "PLACE ORDER";
    }
  }
});

prefillAccountEmail();
renderOrderSummary();
