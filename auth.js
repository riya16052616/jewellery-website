import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  window.TAVRA_SUPABASE_URL,
  window.TAVRA_SUPABASE_PUBLISHABLE_KEY
);

const accountTitle = document.querySelector("#accountTitle");
const accountIntro = document.querySelector("#accountIntro");
const accountPage = document.querySelector("[data-account-page]");
const accountPageMessage = document.querySelector("#accountPageMessage");
const accountDashboardLayout = document.querySelector(".account-dashboard-layout");
const accountForm = document.querySelector("#accountForm");
const accountEmail = document.querySelector("#accountEmail");
const accountMessage = document.querySelector("#accountMessage");
const accountLoginIntro = document.querySelector("#accountLoginIntro");
const accountPassword = document.querySelector("#accountPassword");
const authModeToggle = document.querySelector("#authModeToggle");
const forgotPasswordButton = document.querySelector("#forgotPasswordButton");
const passwordResetForm = document.querySelector("#passwordResetForm");
const newAccountPassword = document.querySelector("#newAccountPassword");
const passwordResetMessage = document.querySelector("#passwordResetMessage");
const saveNewPasswordButton = document.querySelector("#saveNewPasswordButton");
const accountLoginModal = document.querySelector("#accountLoginModal");
const accountDrawer = document.querySelector("#accountDrawer");
const openAccountLogin = document.querySelector("#openAccountLogin");
const guestAccountMenu = document.querySelector("#guestAccountMenu");
const memberAccountMenu = document.querySelector("#memberAccountMenu");
const accountUserName = document.querySelector("#accountUserName");
const accountUserContact = document.querySelector("#accountUserContact");
const editProfileButton = document.querySelector("#editProfileButton");
const accountSignOut = document.querySelector("#accountSignOut");
const accountProfile = document.querySelector("#accountProfile");
const profileForm = document.querySelector("#profileForm");
const profileEmail = document.querySelector("#profileEmail");
const profileName = document.querySelector("#profileName");
const profilePhone = document.querySelector("#profilePhone");
const profileAddress = document.querySelector("#profileAddress");
const profileMessage = document.querySelector("#profileMessage");
const profileLoadingMessage = document.querySelector("#profileLoadingMessage");
const profileSummary = document.querySelector("#profileSummary");
const profileSummaryEmail = document.querySelector("#profileSummaryEmail");
const profileSummaryName = document.querySelector("#profileSummaryName");
const profileSummaryPhone = document.querySelector("#profileSummaryPhone");
const profileSummaryAddress = document.querySelector("#profileSummaryAddress");
const saveProfileButton = document.querySelector("#saveProfileButton");
const cancelProfileEdit = document.querySelector("#cancelProfileEdit");
const editAddressButton = document.querySelector("#editAddressButton");
const addressBookName = document.querySelector("#addressBookName");
const addressBookAddress = document.querySelector("#addressBookAddress");
const addressBookPhone = document.querySelector("#addressBookPhone");
const accountWishlistItems = document.querySelector("#accountWishlistItems");
const accountOrderHistory = document.querySelector("#accountOrderHistory");
const loadOrdersButton = document.querySelector("#loadOrdersButton");
const accountOrders = document.querySelector("#accountOrders");
const accountSubmit = document.querySelector("#accountSubmit");
let isSignUpMode = false;

const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

function showAccountState(user) {
  const isSignedIn = Boolean(user);

  if (accountTitle) {
    accountTitle.textContent = "Welcome back.";
  }

  if (accountIntro) {
    accountIntro.textContent = isSignedIn
      ? `You are signed in as ${user.email || user.phone || "your TAVRA account"}.`
      : "Sign in to your TAVRA account.";
    accountIntro.style.color = "";
  }

  if (guestAccountMenu) guestAccountMenu.hidden = isSignedIn;
  if (memberAccountMenu) memberAccountMenu.hidden = !isSignedIn;
  if (accountSignOut) accountSignOut.hidden = !isSignedIn;
  if (accountUserName && !isSignedIn) accountUserName.textContent = "Your TAVRA account";
  if (accountUserContact) {
    accountUserContact.textContent = user?.email || user?.phone || "";
  }

  if (!isSignedIn && accountOrders) {
    accountOrders.replaceChildren();
  }

  if (!isSignedIn) {
    profileForm?.reset();
    if (profileEmail) profileEmail.value = "";
    if (profileMessage) profileMessage.textContent = "";
    if (!accountPage && accountProfile) accountProfile.hidden = true;
    if (!accountPage && accountOrderHistory) accountOrderHistory.hidden = true;
  }

  if (accountPage) {
    if (accountDashboardLayout) accountDashboardLayout.hidden = !isSignedIn;
    if (accountPageMessage) {
      accountPageMessage.textContent = isSignedIn
        ? ""
        : "Please sign in to view your account. Return to the home page and choose Log in / Sign up.";
      accountPageMessage.hidden = isSignedIn;
    }
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

  const session = data.session;
  showAccountState(session?.user || null);
  if (session) {
    loadProfile(session);
    if (accountPage) activateAccountSection(new URLSearchParams(window.location.search).get("section"));
  }
}

let profileRequestNumber = 0;

async function loadProfile(session) {
  if (!session?.user) return;

  const requestNumber = ++profileRequestNumber;
  if (profileEmail) profileEmail.value = session.user.email || "";
  if (profileMessage) {
    profileMessage.textContent = "Loading your saved profile…";
    profileMessage.style.color = "";
  }

  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("full_name, phone, address")
      .eq("id", session.user.id)
      .maybeSingle();

    if (requestNumber !== profileRequestNumber) return;
    if (error) throw error;

    if (profileName) profileName.value = data?.full_name || "";
    if (profilePhone) profilePhone.value = data?.phone || session.user.phone || "";
    if (profileAddress) profileAddress.value = data?.address || "";
    if (profileSummaryEmail) profileSummaryEmail.textContent = session.user.email || "—";
    if (profileSummaryName) profileSummaryName.textContent = data?.full_name || "—";
    if (profileSummaryPhone) profileSummaryPhone.textContent = data?.phone || session.user.phone || "—";
    if (profileSummaryAddress) profileSummaryAddress.textContent = data?.address || "—";
    if (addressBookName) addressBookName.textContent = data?.full_name || "Your name";
    if (addressBookAddress) addressBookAddress.textContent = data?.address || "No saved address yet. Add one in Personal Information.";
    if (addressBookPhone) addressBookPhone.textContent = data?.phone || session.user.phone || "";
    const hasSavedProfile = Boolean(data?.full_name || data?.phone || data?.address);
    if (profileSummary) profileSummary.hidden = !hasSavedProfile;
    if (profileForm) profileForm.hidden = hasSavedProfile;
    if (editProfileButton) editProfileButton.hidden = !hasSavedProfile;
    if (cancelProfileEdit) cancelProfileEdit.hidden = !hasSavedProfile;
    if (profileLoadingMessage) profileLoadingMessage.hidden = true;
    if (accountUserName) {
      accountUserName.textContent = data?.full_name || "Your TAVRA account";
    }
    if (accountUserContact) {
      accountUserContact.textContent = session.user.email || session.user.phone || "";
    }
    if (profileMessage) profileMessage.textContent = "";
  } catch (error) {
    if (requestNumber !== profileRequestNumber) return;
    console.error("Could not load the saved profile:", error.message);
    if (profileMessage) {
      profileMessage.textContent =
        "Could not load your profile. Make sure the profiles table and its access policies are set up.";
      profileMessage.style.color = "#b42318";
    }
    if (profileLoadingMessage) profileLoadingMessage.hidden = true;
  }
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

function renderAccountWishlist() {
  if (!accountWishlistItems) return;

  let entries = [];
  try {
    entries = JSON.parse(localStorage.getItem("jewelleryStoriesWishlist") || "[]");
    if (!Array.isArray(entries)) entries = [];
  } catch {
    entries = [];
  }

  if (!entries.length && window.name.startsWith("JewelleryStoriesState:")) {
    try {
      const savedState = JSON.parse(window.name.slice("JewelleryStoriesState:".length));
      entries = Array.isArray(savedState.wishlist) ? savedState.wishlist : [];
    } catch {
      entries = [];
    }
  }

  accountWishlistItems.replaceChildren();
  if (entries.length === 0) {
    const empty = document.createElement("p");
    empty.className = "account-empty-state";
    empty.textContent = "Your wishlist is empty. Save pieces you love while browsing.";
    accountWishlistItems.append(empty);
    return;
  }

  entries.forEach(entry => {
    const item = typeof entry === "string" ? { name: entry } : entry;
    if (!item?.name) return;

    const card = document.createElement("article");
    card.className = "account-wishlist-card";
    const image = document.createElement("a");
    image.className = "account-wishlist-image";
    image.href = `product.html?${new URLSearchParams({ name: item.name, category: item.category || "jewellery" })}`;
    image.setAttribute("aria-label", `View ${item.name}`);
    if (item.image) image.style.backgroundImage = item.image;
    const name = document.createElement("a");
    name.className = "account-wishlist-name";
    name.href = image.href;
    name.textContent = item.name;
    const price = document.createElement("small");
    price.textContent = item.price ? inrFormatter.format(Number(item.price)) : "Saved to your wishlist";
    const remove = document.createElement("button");
    remove.className = "account-wishlist-remove";
    remove.type = "button";
    remove.textContent = "REMOVE";
    remove.addEventListener("click", () => {
      const remaining = entries.filter(saved => (typeof saved === "string" ? saved : saved?.name) !== item.name);
      try { localStorage.setItem("jewelleryStoriesWishlist", JSON.stringify(remaining)); } catch { /* Keep current page state. */ }
      try { window.name = "JewelleryStoriesState:" + JSON.stringify({ wishlist: remaining }); } catch { /* Keep current page state. */ }
      renderAccountWishlist();
    });
    card.append(image, name, price, remove);
    accountWishlistItems.append(card);
  });
}

function activateAccountSection(requestedSection) {
  if (!accountPage) return;
  const allowedSections = ["personal-information", "address-book", "wishlist", "order-history"];
  const sectionName = allowedSections.includes(requestedSection) ? requestedSection : "personal-information";

  document.querySelectorAll("[data-account-section]").forEach(section => {
    section.hidden = section.dataset.accountSection !== sectionName;
  });
  document.querySelectorAll("[data-account-tab]").forEach(tab => {
    const isCurrent = tab.dataset.accountTab === sectionName;
    tab.classList.toggle("active", isCurrent);
    tab.setAttribute("aria-current", isCurrent ? "page" : "false");
  });

  const url = new URL(window.location.href);
  url.searchParams.set("section", sectionName);
  window.history.replaceState({}, "", url);

  if (sectionName === "wishlist") renderAccountWishlist();
  if (sectionName === "order-history") loadMyOrders();
}

supabase.auth.onAuthStateChange((eventType, session) => {
  showAccountState(session?.user || null);
  if (session) {
    window.setTimeout(() => loadProfile(session), 0);

    if (eventType === "PASSWORD_RECOVERY") {
      if (accountTitle) accountTitle.textContent = "Choose a new password.";
      if (accountLoginIntro) accountLoginIntro.textContent = "Use a strong password you have not used before.";
      if (accountForm) accountForm.hidden = true;
      if (passwordResetForm) passwordResetForm.hidden = false;
      if (accountLoginModal && window.bootstrap) {
        bootstrap.Modal.getOrCreateInstance(accountLoginModal).show();
      }
    }

    if (eventType === "SIGNED_IN") {
      if (accountLoginModal?.classList.contains("show") && window.bootstrap) {
        bootstrap.Modal.getOrCreateInstance(accountLoginModal).hide();
      }
    }
  }
});

loadCurrentSession();

document.querySelectorAll("[data-account-tab]").forEach(tab => {
  tab.addEventListener("click", () => activateAccountSection(tab.dataset.accountTab));
});

openAccountLogin?.addEventListener("click", () => {
  const showLoginModal = () => {
    if (accountLoginModal && window.bootstrap) {
      bootstrap.Modal.getOrCreateInstance(accountLoginModal).show();
    }
  };

  if (accountDrawer?.classList.contains("show") && window.bootstrap) {
    accountDrawer.addEventListener("hidden.bs.offcanvas", showLoginModal, { once: true });
    bootstrap.Offcanvas.getOrCreateInstance(accountDrawer).hide();
  } else {
    showLoginModal();
  }
});

accountLoginModal?.addEventListener("hidden.bs.modal", () => {
  accountForm?.reset();
  passwordResetForm?.reset();
  isSignUpMode = false;
  if (accountTitle) accountTitle.textContent = "Welcome back.";
  if (accountLoginIntro) accountLoginIntro.textContent = "Sign in or create a TAVRA account with your email.";
  if (accountForm) accountForm.hidden = false;
  if (passwordResetForm) passwordResetForm.hidden = true;
  if (accountPassword) accountPassword.autocomplete = "current-password";
  if (accountSubmit) accountSubmit.textContent = "SIGN IN";
  if (authModeToggle) authModeToggle.textContent = "Create an account";
  if (forgotPasswordButton) forgotPasswordButton.hidden = false;
  if (accountMessage) {
    accountMessage.textContent = "";
    accountMessage.style.color = "";
  }
  if (passwordResetMessage) {
    passwordResetMessage.textContent = "";
    passwordResetMessage.style.color = "";
  }
});

authModeToggle?.addEventListener("click", () => {
  isSignUpMode = !isSignUpMode;
  if (accountTitle) accountTitle.textContent = isSignUpMode ? "Create your account." : "Welcome back.";
  if (accountSubmit) accountSubmit.textContent = isSignUpMode ? "CREATE ACCOUNT" : "SIGN IN";
  if (accountPassword) accountPassword.autocomplete = isSignUpMode ? "new-password" : "current-password";
  if (authModeToggle) authModeToggle.textContent = isSignUpMode ? "Back to sign in" : "Create an account";
  if (forgotPasswordButton) forgotPasswordButton.hidden = isSignUpMode;
  if (accountLoginIntro) {
    accountLoginIntro.textContent = isSignUpMode
      ? "Create your TAVRA account with your email and a password."
      : "Sign in or create a TAVRA account with your email.";
  }
  if (accountMessage) {
    accountMessage.textContent = "";
    accountMessage.style.color = "";
  }
});

forgotPasswordButton?.addEventListener("click", async () => {
  const email = accountEmail?.value.trim();
  if (!email) {
    accountMessage.textContent = "Enter your email address first, then choose Forgot password.";
    accountMessage.style.color = "#b42318";
    accountEmail?.focus();
    return;
  }

  forgotPasswordButton.disabled = true;
  accountMessage.textContent = "Sending password reset email…";
  accountMessage.style.color = "";

  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + window.location.pathname
    });
    if (error) throw error;
    accountMessage.textContent = "If an account uses that email, a password reset link is on its way.";
    accountMessage.style.color = "#137547";
  } catch (error) {
    accountMessage.textContent = error.message || "Could not send the password reset email.";
    accountMessage.style.color = "#b42318";
  } finally {
    forgotPasswordButton.disabled = false;
  }
});

passwordResetForm?.addEventListener("submit", async event => {
  event.preventDefault();
  if (!passwordResetForm.reportValidity()) return;

  saveNewPasswordButton.disabled = true;
  passwordResetMessage.textContent = "Updating your password…";
  passwordResetMessage.style.color = "";

  try {
    const { error } = await supabase.auth.updateUser({ password: newAccountPassword.value });
    if (error) throw error;
    passwordResetMessage.textContent = "Password updated. You can now sign in with it.";
    passwordResetMessage.style.color = "#137547";
    window.setTimeout(() => {
      bootstrap.Modal.getOrCreateInstance(accountLoginModal).hide();
      bootstrap.Offcanvas.getOrCreateInstance(accountDrawer).show();
    }, 900);
  } catch (error) {
    passwordResetMessage.textContent = error.message || "Could not update your password.";
    passwordResetMessage.style.color = "#b42318";
  } finally {
    saveNewPasswordButton.disabled = false;
  }
});

editProfileButton?.addEventListener("click", () => {
  if (accountPage) {
    if (profileSummary) profileSummary.hidden = true;
    if (profileForm) profileForm.hidden = false;
    if (editProfileButton) editProfileButton.hidden = true;
    if (cancelProfileEdit) cancelProfileEdit.hidden = false;
    profileName?.focus();
    return;
  }
  if (!accountProfile) return;
  accountProfile.hidden = !accountProfile.hidden;
  if (!accountProfile.hidden) profileName?.focus();
});

cancelProfileEdit?.addEventListener("click", () => {
  if (profileForm) profileForm.hidden = true;
  if (profileSummary) profileSummary.hidden = false;
  if (editProfileButton) editProfileButton.hidden = false;
  if (cancelProfileEdit) cancelProfileEdit.hidden = true;
});

editAddressButton?.addEventListener("click", () => {
  activateAccountSection("personal-information");
  if (profileSummary && !profileSummary.hidden) editProfileButton?.click();
});

accountForm?.addEventListener("submit", async event => {
  event.preventDefault();

  if (!accountForm.reportValidity()) return;

  const email = accountEmail.value.trim();
  const password = accountPassword.value;

  if (!email || !password || !accountMessage) return;

  accountMessage.textContent = isSignUpMode ? "Creating your account…" : "Signing you in…";
  accountMessage.style.color = "";

  if (accountSubmit) accountSubmit.disabled = true;

  try {
    if (isSignUpMode) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin + window.location.pathname
        }
      });
      if (error) throw error;

      const existingAccount = data.user?.identities?.length === 0;
      accountMessage.textContent = existingAccount
        ? "This email may already have an account. Sign in or choose Forgot password."
        : data.session
          ? "Your account is ready."
          : "Account created. Check your email and confirm your address, then sign in.";
      accountMessage.style.color = "#137547";
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      accountMessage.textContent = "Signed in successfully.";
      accountMessage.style.color = "#137547";
    }
  } catch (error) {
    accountMessage.textContent =
      error.message || (isSignUpMode ? "Could not create your account." : "Could not sign in.");
    accountMessage.style.color = "#b42318";
  } finally {
    if (accountSubmit) accountSubmit.disabled = false;
  }
});

loadOrdersButton?.addEventListener("click", () => {
  if (accountPage) {
    loadMyOrders();
    return;
  }
  if (!accountOrderHistory) return;
  const shouldLoad = accountOrderHistory.hidden;
  accountOrderHistory.hidden = !shouldLoad;
  if (shouldLoad) loadMyOrders();
});

profileForm?.addEventListener("submit", async event => {
  event.preventDefault();

  if (!profileForm.reportValidity()) return;

  if (profileMessage) {
    profileMessage.textContent = "Saving your profile…";
    profileMessage.style.color = "";
  }
  if (saveProfileButton) saveProfileButton.disabled = true;

  try {
    const { data, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) throw sessionError;

    const user = data.session?.user;
    if (!user) throw new Error("Please sign in again to save your profile.");

    const { error } = await supabase.from("profiles").upsert(
      {
        id: user.id,
        full_name: profileName.value.trim(),
        phone: profilePhone.value.trim(),
        address: profileAddress.value.trim(),
        updated_at: new Date().toISOString()
      },
      { onConflict: "id" }
    );

    if (error) throw error;

    if (profileMessage) {
      profileMessage.textContent = "Your profile has been saved.";
      profileMessage.style.color = "#137547";
    }
    if (accountUserName) {
      accountUserName.textContent = profileName.value.trim() || "Your TAVRA account";
    }
    if (profileSummaryEmail) profileSummaryEmail.textContent = user.email || "—";
    if (profileSummaryName) profileSummaryName.textContent = profileName.value.trim() || "—";
    if (profileSummaryPhone) profileSummaryPhone.textContent = profilePhone.value.trim() || "—";
    if (profileSummaryAddress) profileSummaryAddress.textContent = profileAddress.value.trim() || "—";
    if (addressBookName) addressBookName.textContent = profileName.value.trim() || "Your name";
    if (addressBookAddress) addressBookAddress.textContent = profileAddress.value.trim() || "No saved address yet. Add one in Personal Information.";
    if (addressBookPhone) addressBookPhone.textContent = profilePhone.value.trim();
    if (accountPage) {
      if (profileSummary) profileSummary.hidden = false;
      profileForm.hidden = true;
      if (editProfileButton) editProfileButton.hidden = false;
      if (cancelProfileEdit) cancelProfileEdit.hidden = true;
    }
  } catch (error) {
    console.error("Could not save the profile:", error.message);
    if (profileMessage) {
      profileMessage.textContent =
        error.message || "Could not save your profile.";
      profileMessage.style.color = "#b42318";
    }
  } finally {
    if (saveProfileButton) saveProfileButton.disabled = false;
  }
});

accountSignOut?.addEventListener("click", async () => {
  accountSignOut.disabled = true;

  const { error } = await supabase.auth.signOut();

  if (error && accountIntro) {
    accountIntro.textContent = error.message;
    accountIntro.style.color = "#b42318";
  }

  if (!error && accountPage) {
    window.location.replace("index.html");
  }

  accountSignOut.disabled = false;
});
