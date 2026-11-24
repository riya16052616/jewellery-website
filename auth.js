import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  window.TAVRA_SUPABASE_URL,
  window.TAVRA_SUPABASE_PUBLISHABLE_KEY
);

const accountTitle = document.querySelector("#accountTitle");
const accountIntro = document.querySelector("#accountIntro");
const accountForm = document.querySelector("#accountForm");
const accountEmail = document.querySelector("#accountEmail");
const accountMessage = document.querySelector("#accountMessage");
const accountSignOut = document.querySelector("#accountSignOut");
const accountOrderHistory = document.querySelector("#accountOrderHistory");
const loadOrdersButton = document.querySelector("#loadOrdersButton");
const accountOrders = document.querySelector("#accountOrders");
const accountSubmit = accountForm?.querySelector('[type="submit"]');

const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

function showAccountState(user) {
  const isSignedIn = Boolean(user);

  if (accountTitle) {
    accountTitle.textContent = isSignedIn ? "Your account." : "Welcome back.";
  }

  if (accountIntro) {
    accountIntro.textContent = isSignedIn
      ? `You are signed in as ${user.email}.`
      : "Sign in securely with an email link.";
  }

  if (accountForm) accountForm.hidden = isSignedIn;
  if (accountSignOut) accountSignOut.hidden = !isSignedIn;
  if (accountOrderHistory) accountOrderHistory.hidden = !isSignedIn;

  if (!isSignedIn && accountOrders) {
    accountOrders.replaceChildren();
  }

  if (accountMessage) {
    accountMessage.textContent = "";
    accountMessage.style.color = "";
  }
}

async function loadCurrentSession() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error("Could not read the Supabase session:", error.message);
    return;
  }

  showAccountState(data.session?.user || null);
}

function renderOrders(orders) {
  accountOrders.replaceChildren();

  if (!Array.isArray(orders) || orders.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "text-muted mb-0";
    emptyMessage.textContent = "You don’t have any orders yet.";
    accountOrders.append(emptyMessage);
    return;
  }

  orders.forEach(order => {
    const card = document.createElement("article");
    card.className = "border rounded p-3 mb-3";

    const heading = document.createElement("div");
    heading.className = "d-flex justify-content-between gap-3";

    const orderNumber = document.createElement("strong");
    orderNumber.textContent = `Order #${order.id}`;

    const status = document.createElement("span");
    status.textContent = order.status || "pending";

    heading.append(orderNumber, status);

    const date = document.createElement("p");
    date.className = "small text-muted mt-2 mb-2";
    date.textContent = order.created_at
      ? new Date(order.created_at).toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "short"
        })
      : "";

    const itemList = document.createElement("ul");
    itemList.className = "list-unstyled small mb-2";

    (Array.isArray(order.items) ? order.items : []).forEach(item => {
      const listItem = document.createElement("li");
      const quantity = Number(item.quantity) || 0;
      const price = Number(item.unit_price) || 0;

      listItem.textContent =
        `${item.product_name} × ${quantity} — ` +
        inrFormatter.format(price * quantity);

      itemList.append(listItem);
    });

    const total = document.createElement("strong");
    total.textContent =
      `Total: ${inrFormatter.format(Number(order.total_amount) || 0)}`;

    card.append(heading, date, itemList, total);
    accountOrders.append(card);
  });
}

async function loadMyOrders() {
  if (!accountOrders || !loadOrdersButton) return;

  accountOrders.textContent = "Loading your orders…";
  loadOrdersButton.disabled = true;

  try {
    const { data, error } = await supabase.auth.getSession();

    if (error) throw error;

    const session = data.session;

    if (!session) {
      throw new Error("Please sign in again to view your orders.");
    }

    const response = await fetch("http://localhost:3000/api/orders/mine", {
      headers: {
        Authorization: `Bearer ${session.access_token}`
      }
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Could not load your orders.");
    }

    renderOrders(result);
  } catch (error) {
    accountOrders.textContent =
      error.message || "Could not load your orders.";
  } finally {
    loadOrdersButton.disabled = false;
  }
}

supabase.auth.onAuthStateChange((_event, session) => {
  showAccountState(session?.user || null);
});

loadCurrentSession();

accountForm?.addEventListener("submit", async event => {
  event.preventDefault();

  if (!accountForm.reportValidity()) return;

  const email = accountEmail.value.trim();

  if (!email || !accountMessage) return;

  accountMessage.textContent = "Sending your sign-in link…";
  accountMessage.style.color = "";

  if (accountSubmit) accountSubmit.disabled = true;

  try {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin + window.location.pathname
      }
    });

    if (error) throw error;

    accountMessage.textContent = "Check your email for the sign-in link.";
    accountMessage.style.color = "#137547";
  } catch (error) {
    accountMessage.textContent =
      error.message || "Could not send the sign-in link.";
    accountMessage.style.color = "#b42318";
  } finally {
    if (accountSubmit) accountSubmit.disabled = false;
  }
});

loadOrdersButton?.addEventListener("click", loadMyOrders);

accountSignOut?.addEventListener("click", async () => {
  accountSignOut.disabled = true;

  const { error } = await supabase.auth.signOut();

  if (error && accountMessage) {
    accountMessage.textContent = error.message;
    accountMessage.style.color = "#b42318";
  }

  accountSignOut.disabled = false;
});