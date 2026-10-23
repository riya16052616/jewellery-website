document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    Array.from(parent.querySelectorAll(selector));

  // ==========================================
  // TOAST NOTIFICATIONS
  // ==========================================

  const toastElement = $("#siteToast");
  const toastMessage = $("#toastMessage");

  function showToast(message) {
    if (toastMessage) {
      toastMessage.textContent = message;
    }

    if (toastElement && window.bootstrap) {
      bootstrap.Toast.getOrCreateInstance(toastElement, {
        delay: 2500
      }).show();
    } else {
      console.log(message);
    }
  }

  // ==========================================
  // LOOKBOOK FEEDBACK
  // ==========================================

  const feedbackModal = $("#feedbackModal");
  const feedbackTopic = $("#feedbackTopic");
  const feedbackForm = $("#lookbookFeedbackForm");
  const feedbackConfirmation = $("#feedbackConfirmation");

  if (feedbackModal && feedbackTopic) {
    feedbackModal.addEventListener("show.bs.modal", (event) => {
      const trigger = event.relatedTarget;
      feedbackTopic.textContent = trigger?.dataset.feedbackTopic || "this look";
      if (feedbackConfirmation) feedbackConfirmation.hidden = true;
    });
  }

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!feedbackForm.reportValidity()) return;
      if (feedbackConfirmation) feedbackConfirmation.hidden = false;
      feedbackForm.reset();
    });
  }

  // ==========================================
  // PRODUCT SEARCH, FILTERING AND SORTING
  // ==========================================

  const productGrid = $("#productGrid");
  const productSearch = $("#productSearch");
  const categoryFilter = $("#categoryFilter");
  const sortProducts = $("#sortProducts");
  const clearFilters = $("#clearFilters");
  const productResultCount = $("#productResultCount");
  const noProductResults = $("#noProductResults");

  const necklacePhotos = [
    "assets/necklaces/necklace-01-heart-pearl.jpg",
    "assets/necklaces/necklace-02-layered-star.jpg",
    "assets/necklaces/necklace-03-curved-diamond.jpg",
    "assets/necklaces/necklace-04-triple-drops.jpg",
    "assets/necklaces/necklace-05-floral-gold.jpg",
    "assets/necklaces/necklace-06-emerald-pear.jpg",
    "assets/necklaces/necklace-07-circle-pendant.jpg",
    "assets/necklaces/necklace-08-link-diamond.jpg",
    "assets/necklaces/necklace-09-leaf-diamond.jpg",
    "assets/necklaces/necklace-10-minimal-line.jpg",
    "assets/necklaces/necklace-11-layered-diamonds.jpg",
    "assets/necklaces/necklace-12-graduated-diamond.jpg",
    "assets/necklaces/necklace-13-petite-initial.jpg",
    "assets/necklaces/necklace-14-round-pear-diamond.jpg"
  ];
  const ringPhotos = Array.from(
    { length: 17 },
    (_, index) => `assets/rings/ring-${String(index + 1).padStart(2, "0")}.jpg`
  );
  const earringPhotos = Array.from(
    { length: 26 },
    (_, index) => `assets/earrings/earring-${String(index + 1).padStart(2, "0")}.jpg`
  );
  const braceletPhotos = Array.from(
    { length: 48 },
    (_, index) => `assets/bracelets/bracelet-${String(index + 1).padStart(2, "0")}.jpg`
  );

  // Build a larger frontend-only catalog. The existing HTML products remain
  // the first featured pieces; this fills each shop type to 40 products.
  const catalogGroups = [
    {
      category: "ring",
      prefixes: ["Luna", "Celeste", "Rose", "Aurora", "Eternal", "Willow", "Starlight", "Meadow", "Solstice", "Serene"],
      styles: ["Halo Ring", "Solitaire Ring", "Eternity Band", "Twist Ring"],
      images: ["product-ring", "product-ring-halo", "product-ring-gold", "product-ring-band", "product-ring-emerald"],
      details: ["DIAMOND · 18K GOLD", "ROSE GOLD · 14K", "22K GOLD", "PLATINUM · DIAMOND"]
    },
    {
      category: "earring",
      prefixes: ["Luna", "Celeste", "Rose", "Aurora", "Eternal", "Willow", "Starlight", "Meadow", "Solstice", "Serene"],
      styles: ["Stud Earrings", "Drop Earrings", "Hoop Earrings", "Jhumka Earrings"],
      images: ["product-diamond", "img-earrings", "product-blue"],
      details: ["18K GOLD", "DIAMOND · 18K GOLD", "22K GOLD", "GEMSTONE · GOLD"]
    },
    {
      category: "necklace",
      prefixes: ["Luna", "Celeste", "Rose", "Aurora", "Eternal", "Willow", "Starlight", "Meadow", "Solstice", "Serene"],
      styles: ["Layered Necklace", "Pendant Necklace", "Chain Necklace", "Collar Necklace"],
      images: ["product-neck"],
      details: ["18K GOLD", "DIAMOND · GOLD", "ROSE GOLD · 14K", "GEMSTONE · GOLD"]
    },
    {
      category: "bracelet",
      count: 48,
      prefixes: ["Dainty Cluster", "Colorful Gemstone", "Geometric Gold", "Heart Charm", "Diamond Tennis", "Pearl Accent", "Rose Gold", "Twisted Rope", "White Gold", "Two Tone", "Serpent", "Birthstone", "Waterdrop"],
      styles: ["Chain Bracelet", "Gem Link Bracelet", "Gold Bracelet", "Pearl Bracelet"],
      images: ["product-gold", "product-diamond", "product-blue"],
      details: ["18K GOLD", "GEMSTONE · GOLD", "DIAMOND · 14K GOLD", "PEARL · GOLD"]
    },
  ];

  if (productGrid) {
    const existingItems = $$(".product-item", productGrid);
    let nextIndex = existingItems.length;

    catalogGroups.forEach((group, groupIndex) => {
      const existingForType = existingItems.filter(item =>
        (item.dataset.category || "").split(/\s+/).includes(group.category)
      ).length;
      const names = new Set(existingItems.map(item =>
        (item.dataset.name || "").trim().toLocaleLowerCase()
      ));
      let typeCount = existingForType;
      let generatedIndex = 0;

      for (const prefix of group.prefixes) {
        for (const style of group.styles) {
          if (typeCount >= (group.count || 40)) break;

          const name = `${prefix} ${style}`;
          if (names.has(name.toLocaleLowerCase())) continue;

          const item = document.createElement("div");
          item.className = "col-6 col-md-3 product-item";
          item.dataset.name = name;
          item.dataset.category = group.category +
            ((generatedIndex + groupIndex) % 3 === 0 ? " diamond" : "");
          item.dataset.originalIndex = String(nextIndex++);

          const article = document.createElement("article");
          article.className = "product-card";

          const image = document.createElement("div");
          image.className = `product-image ${group.images[generatedIndex % group.images.length]}`;

          const heart = document.createElement("button");
          heart.type = "button";
          heart.className = "heart";
          heart.dataset.wishlist = name;
          heart.setAttribute("aria-label", `Add ${name} to wishlist`);
          const heartIcon = document.createElement("i");
          heartIcon.className = "bi bi-heart";
          heart.append(heartIcon);
          image.append(heart);

          const title = document.createElement("p");
          title.textContent = name;
          const details = document.createElement("small");
          details.textContent = group.details[generatedIndex % group.details.length];

          const addButton = document.createElement("button");
          addButton.type = "button";
          addButton.className = "add-to-bag";
          addButton.dataset.add = name;
          addButton.append(document.createTextNode("ADD TO BAG "));
          const arrow = document.createElement("i");
          arrow.className = "bi bi-arrow-up-right";
          addButton.append(arrow);

          article.append(image, title, details, addButton);
          item.append(article);
          productGrid.append(item);
          names.add(name.toLocaleLowerCase());
          typeCount += 1;
          generatedIndex += 1;
        }
      }
    });

    // Use the supplied necklace photos across the necklace products instead
    // of repeating the same remote placeholder image.
    $$(".product-item", productGrid)
      .filter(item => (item.dataset.category || "").split(/\s+/).includes("necklace"))
      .forEach((item, index) => {
        const image = $(".product-image", item);
        if (image) {
          image.style.backgroundImage =
            `url("${necklacePhotos[index % necklacePhotos.length]}")`;
        }
      });

    // Use all supplied ring photos across the ring listings.
    $$(".product-item", productGrid)
      .filter(item => (item.dataset.category || "").split(/\s+/).includes("ring"))
      .forEach((item, index) => {
        const image = $(".product-image", item);
        if (image) {
          image.style.backgroundImage =
            `url("${ringPhotos[index % ringPhotos.length]}")`;
        }
      });

    // Use all supplied earring photos across the earring listings.
    $$(".product-item", productGrid)
      .filter(item => (item.dataset.category || "").split(/\s+/).includes("earring"))
      .forEach((item, index) => {
        const image = $(".product-image", item);
        if (image) {
          image.style.backgroundImage =
            `url("${earringPhotos[index % earringPhotos.length]}")`;
        }
      });

    $$(".product-item", productGrid)
      .filter(item => (item.dataset.category || "").split(/\s+/).includes("bracelet"))
      .forEach((item, index) => {
        const image = $(".product-image", item);
        if (image && braceletPhotos[index]) image.style.backgroundImage = `url("${braceletPhotos[index]}")`;
      });
  }

  const products = productGrid
    ? $$(".product-item", productGrid)
    : [];

  const samplePrices = [20000, 25000, 32000, 39500, 50000, 65000, 80000, 100000];
  const inrFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  });

  // Assign a stable sample price to each demo item and remember product order.
  products.forEach((product, index) => {
    product.dataset.originalIndex = String(index);
    if (!product.dataset.price) {
      product.dataset.price = String(samplePrices[(index * 7 + 3) % samplePrices.length]);
    }

    if (!$(`.product-price`, product)) {
      const price = document.createElement("p");
      price.className = "product-price";
      price.textContent = inrFormatter.format(Number(product.dataset.price));
      $(".add-to-bag", product)?.before(price);
    }
  });

  // Open a dedicated detail page when the product card itself is selected.
  // Wishlist and bag buttons keep their own actions.
  function openProductDetails(product) {
    if (!product) return;

    const image = $(".product-image", product);
    const link = new URL("product.html", window.location.href);
    link.searchParams.set("name", product.dataset.name || "Jewellery");
    link.searchParams.set("category", (product.dataset.category || "jewellery").split(/\s+/)[0]);
    link.searchParams.set("price", product.dataset.price || "0");
    link.searchParams.set("description", $("small", product)?.textContent || "JEWELLERY");

    if (image) {
      const background = window.getComputedStyle(image).backgroundImage;
      if (background && background !== "none") {
        link.searchParams.set("image", background);
      }
    }

    window.location.href = link.toString();
  }

  if (productGrid) {
    products.forEach(product => {
      const card = $(".product-card", product);
      if (card) {
        card.tabIndex = 0;
        card.setAttribute("role", "link");
        card.setAttribute("aria-label", "View " + product.dataset.name + " details");
        card.style.cursor = "pointer";
      }
    });

    productGrid.addEventListener("click", event => {
      if (event.target.closest("button, a")) return;
      openProductDetails(event.target.closest(".product-item"));
    });

    productGrid.addEventListener("keydown", event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const card = event.target.closest(".product-card");
      if (!card || event.target.closest("button, a")) return;
      event.preventDefault();
      openProductDetails(card.closest(".product-item"));
    });
  }

  function filterAndSortProducts() {
    if (!productGrid) return;

    const rawQuery = (productSearch?.value || "")
      .trim()
      .toLocaleLowerCase();

    const categoryAliases = {
      rings: "ring",
      necklaces: "necklace",
      pendants: "pendant",
      bracelets: "bracelet",
      earrings: "earring",
      diamonds: "diamond"
    };

    const query = categoryAliases[rawQuery] || rawQuery;
    const category = categoryFilter?.value || "all";
    const sort = sortProducts?.value || "featured";

    const matchingProducts = [];

    products.forEach(product => {
      const name = (product.dataset.name || "")
        .toLocaleLowerCase();

      const categories = (product.dataset.category || "")
        .toLocaleLowerCase()
        .split(/\s+/)
        .filter(Boolean);

      const visibleText = product.textContent.toLocaleLowerCase();

      const searchableWords =
        `${name} ${categories.join(" ")} ${visibleText}`
          .split(/[^a-z0-9]+/)
          .filter(Boolean);

      const matchesSearch =
        query === "" ||
        searchableWords.some(word => word.startsWith(query));

      const matchesCategory =
        category === "all" ||
        categories.includes(category);

      const matches = matchesSearch && matchesCategory;

      product.hidden = !matches;

      if (matches) {
        matchingProducts.push(product);
      }
    });

    // Sort matching products.
    matchingProducts.sort((a, b) => {
      const nameA = a.dataset.name || "";
      const nameB = b.dataset.name || "";

      if (sort === "name-asc") {
        return nameA.localeCompare(nameB);
      }

      if (sort === "name-desc") {
        return nameB.localeCompare(nameA);
      }

      if (sort === "price-low") {
        return Number(a.dataset.price) - Number(b.dataset.price);
      }

      if (sort === "price-high") {
        return Number(b.dataset.price) - Number(a.dataset.price);
      }

      return (
        Number(a.dataset.originalIndex) -
        Number(b.dataset.originalIndex)
      );
    });

    // Display matching products in the selected order.
    matchingProducts.forEach(product => {
      productGrid.appendChild(product);
    });

    // Update the results counter.
    if (productResultCount) {
      productResultCount.textContent =
        `Showing ${matchingProducts.length} of ${products.length} pieces`;
    }

    // Show the empty message when no products match.
    if (noProductResults) {
      noProductResults.hidden = matchingProducts.length !== 0;
    }
  }

  // Shop category links set the catalog filter as they navigate to the grid.
  $$("[data-nav-category]").forEach(link => {
    link.addEventListener("click", () => {
      if (categoryFilter) categoryFilter.value = link.dataset.navCategory;
      if (productSearch) productSearch.value = "";
      filterAndSortProducts();
    });
  });

  // Search as the user types.
  if (productSearch) {
    productSearch.addEventListener(
      "input",
      filterAndSortProducts
    );
  }

  // Filter by category.
  if (categoryFilter) {
    categoryFilter.addEventListener(
      "change",
      filterAndSortProducts
    );
  }

  // Sort products.
  if (sortProducts) {
    sortProducts.addEventListener(
      "change",
      filterAndSortProducts
    );
  }

  // Clear all filters.
  if (clearFilters) {
    clearFilters.addEventListener("click", () => {
      if (productSearch) productSearch.value = "";
      if (categoryFilter) categoryFilter.value = "all";
      if (sortProducts) sortProducts.value = "featured";

      filterAndSortProducts();
    });
  }

  // If this is the separate collection page, open directly to the chosen category.
  const collectionCategory = new URLSearchParams(window.location.search).get("category");
  const collectionLabels = {
    all: ["All Jewellery", "Explore pieces chosen for your everyday and special moments."],
    ring: ["Rings", "Explore all rings in the collection."],
    earring: ["Earrings", "Explore all earrings in the collection."],
    necklace: ["Necklaces", "Explore all necklaces in the collection."],
    pendant: ["Pendants", "Explore all pendants in the collection."],
    bracelet: ["Bracelets", "Explore all bracelets in the collection."],
    diamond: ["Diamond Jewellery", "Explore diamond pieces from the collection."]
  };
  if (collectionCategory && collectionLabels[collectionCategory]) {
    if (categoryFilter) categoryFilter.value = collectionCategory;
    const collectionTitle = $("#collectionTitle");
    const collectionDescription = $("#collectionDescription");
    if (collectionTitle) collectionTitle.textContent = collectionLabels[collectionCategory][0];
    if (collectionDescription) collectionDescription.textContent = collectionLabels[collectionCategory][1];
  }

  // Initial catalogue display.
  filterAndSortProducts();

  // ==========================================
  // HEADER SEARCH MODAL
  // ==========================================

  const searchForm = $("#searchForm");
  const searchInput = $("#searchInput");
  const searchMessage = $("#searchMessage");
  const searchModal = $("#searchModal");

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", event => {
      event.preventDefault();

      const query = searchInput.value.trim();

      if (!query) {
        if (searchMessage) {
          searchMessage.textContent =
            "Please enter a product name or category.";
        }

        searchInput.focus();
        return;
      }

      if (productSearch) {
        productSearch.value = query;
      }

      if (categoryFilter) {
        categoryFilter.value = "all";
      }

      filterAndSortProducts();

      const visibleCount = products.filter(
        product => !product.hidden
      ).length;

      if (searchMessage) {
        searchMessage.textContent = visibleCount
          ? `${visibleCount} matching product(s) found.`
          : `No products found for "${query}".`;
      }

      if (window.bootstrap && searchModal) {
        bootstrap.Modal.getOrCreateInstance(searchModal).hide();
      }

      const editSection = $("#edit");

      if (editSection) {
        editSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }

  // ==========================================
  // HEADER CATEGORY NAVIGATION
  // ==========================================

  $$("[data-nav-category]").forEach(link => {
    link.addEventListener("click", () => {
      const category = link.dataset.navCategory;

      if (productSearch) {
        productSearch.value = "";
      }

      if (categoryFilter) {
        categoryFilter.value = category;
      }

      filterAndSortProducts();

      const editSection = $("#edit");

      if (editSection) {
        editSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // ==========================================
  // WISHLIST
  // ==========================================

  const wishlistStorageKey = "jewelleryStoriesWishlist";
  const wishlistCount = $("#wishlistCount");
  const wishlistHeadingCount = $("#wishlistHeadingCount");
  const wishlistItems = $("#wishlistItems");
  let windowState = {};
  try {
    if (window.name.startsWith("JewelleryStoriesState:")) {
      windowState = JSON.parse(window.name.slice("JewelleryStoriesState:".length)) || {};
    } else if (window.name.startsWith("JewelleryStoriesCart:")) {
      windowState.cart = JSON.parse(window.name.slice("JewelleryStoriesCart:".length)) || [];
    }
  } catch { windowState = {}; }
  let savedWishlist = [];
  try {
    savedWishlist = JSON.parse(localStorage.getItem(wishlistStorageKey) || "[]");
    if (!Array.isArray(savedWishlist)) savedWishlist = [];
  } catch { savedWishlist = []; }
  if (savedWishlist.length === 0 && Array.isArray(windowState.wishlist)) {
    savedWishlist = windowState.wishlist;
  }
  const wishlistDetails = new Map(savedWishlist.map(item => {
    const entry = typeof item === "string" ? { name: item } : item;
    return [entry.name, entry];
  }).filter(([name]) => name));
  const wishlist = new Set(wishlistDetails.keys());

  function saveWishlist() {
    const entries = Array.from(wishlistDetails.values());
    try { localStorage.setItem(wishlistStorageKey, JSON.stringify(entries)); } catch { /* Same-tab fallback below. */ }
    try {
      const currentCart = Array.from(cart.values());
      window.name = "JewelleryStoriesState:" + JSON.stringify({ cart: currentCart, wishlist: entries });
    } catch { /* Wishlist still works on this page. */ }
  }

  function renderWishlist() {
    $$("[data-wishlist]").forEach(button => {
      const name = button.dataset.wishlist;
      const saved = wishlist.has(name);
      const icon = $("i", button);

      button.classList.toggle("is-active", saved);
      button.setAttribute("aria-pressed", String(saved));

      if (icon) {
        icon.classList.toggle("bi-heart-fill", saved);
        icon.classList.toggle("bi-heart", !saved);
      }

      button.setAttribute(
        "aria-label",
        `${saved ? "Remove" : "Add"} ${name} ${
          saved ? "from" : "to"
        } wishlist`
      );
    });

    const count = wishlist.size;
    if (wishlistCount) wishlistCount.textContent = String(count);
    if (wishlistHeadingCount) wishlistHeadingCount.textContent = `(${count})`;
    if (!wishlistItems) return;
    wishlistItems.replaceChildren();
    if (count === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-cart";
      empty.textContent = "Your wishlist is waiting for something beautiful.";
      wishlistItems.appendChild(empty);
      return;
    }
    wishlistDetails.forEach(item => {
      const line = document.createElement("div");
      line.className = "wishlist-line";
      const preview = document.createElement("a");
      preview.className = "wishlist-preview";
      preview.href = makeProductUrl(item);
      preview.setAttribute("aria-label", `View ${item.name}`);
      if (item.image) preview.style.backgroundImage = item.image;
      const details = document.createElement("div");
      details.className = "wishlist-line-info";
      const link = document.createElement("a");
      link.className = "wishlist-line-name";
      link.href = makeProductUrl(item);
      link.textContent = item.name;
      const amount = document.createElement("small");
      amount.className = "wishlist-line-price";
      amount.textContent = item.price ? inrFormatter.format(Number(item.price)) : "View details";
      details.append(link, amount);
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "wishlist-remove";
      remove.textContent = "REMOVE";
      remove.addEventListener("click", () => {
        wishlist.delete(item.name);
        wishlistDetails.delete(item.name);
        saveWishlist();
        renderWishlist();
        showToast(`${item.name} removed from wishlist.`);
      });
      line.append(preview, details, remove);
      wishlistItems.appendChild(line);
    });
  }
  window.refreshWishlist = renderWishlist;

  function makeProductUrl(item) {
    const params = new URLSearchParams();
    ["name", "category", "price", "description", "image"].forEach(key => {
      if (item[key]) params.set(key, item[key]);
    });
    return `product.html?${params.toString()}`;
  }

  $$("[data-wishlist]").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.wishlist;

      if (wishlist.has(name)) {
        wishlist.delete(name);
        wishlistDetails.delete(name);
        showToast(`${name} removed from wishlist.`);
      } else {
        wishlist.add(name);
        const product = button.closest(".product-item");
        const imageElement = product && $(".product-image", product);
        const priceText = product && $("[data-price]", product)?.dataset.price;
        wishlistDetails.set(name, {
          name,
          category: button.dataset.category || (product && product.dataset.category.split(/\s+/)[0]) || "jewellery",
          price: button.dataset.price || (product && product.dataset.price) || priceText || "",
          description: button.dataset.description || (product && $("small", product)?.textContent.trim()) || "JEWELLERY",
          image: button.dataset.image || (imageElement ? getComputedStyle(imageElement).backgroundImage : "")
        });
        showToast(`${name} added to wishlist.`);
      }

      saveWishlist();
      renderWishlist();
    });
  });

  renderWishlist();

  // ==========================================
  // SHOPPING BAG
  // ==========================================

  const cartStorageKey = "jewelleryStoriesCart";
  let savedCart = [];
  try {
    savedCart = JSON.parse(localStorage.getItem(cartStorageKey) || "[]");
    if (!Array.isArray(savedCart)) savedCart = [];
  } catch {
    savedCart = [];
  }
  if (savedCart.length === 0) {
    try {
      savedCart = Array.isArray(windowState.cart) ? windowState.cart : [];
    } catch {
      savedCart = [];
    }
  }

  const cart = new Map(
    savedCart
      .filter(item => item && typeof item.name === "string")
      .map(item => [
        item.name,
        {
          name: item.name,
          quantity: Math.max(1, Number(item.quantity) || 1),
          price: Math.max(0, Number(item.price) || 0)
        }
      ])
  );
  const cartCount = $("#cartCount");
  const cartHeadingCount = $("#cartHeadingCount");
  const cartItems = $("#cartItems");
  const checkoutButton = $("#checkoutButton");

  function saveCart() {
    const serializedCart = JSON.stringify(Array.from(cart.values()));
    try {
      localStorage.setItem(cartStorageKey, serializedCart);
    } catch { /* window.name below keeps the bag during same-tab navigation */ }
    try {
      window.name = "JewelleryStoriesState:" + JSON.stringify({ cart: Array.from(cart.values()), wishlist: Array.from(wishlistDetails.values()) });
    } catch { /* The visible cart still works for this page session. */ }
  }

  function getCartQuantity() {
    let total = 0;

    cart.forEach(item => {
      total += item.quantity;
    });

    return total;
  }

  function renderCart() {
    const quantity = getCartQuantity();

    if (cartCount) {
      cartCount.textContent = String(quantity);
    }

    if (cartHeadingCount) {
      cartHeadingCount.textContent = `(${quantity})`;
    }

    if (!cartItems) return;

    cartItems.replaceChildren();

    if (cart.size === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-cart";
      empty.textContent =
        "Your bag is waiting for something beautiful.";

      cartItems.appendChild(empty);
      return;
    }

    cart.forEach(item => {
      const line = document.createElement("div");
      line.className = "cart-line";

      const details = document.createElement("div");

      const name = document.createElement("div");
      name.className = "cart-line-name";
      name.textContent = item.name;

      const amount = document.createElement("small");
      amount.textContent =
        `Quantity: ${item.quantity} · ${inrFormatter.format(item.price || 0)} each`;

      details.append(name, amount);

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "cart-line-remove";
      remove.textContent = "REMOVE";

      remove.addEventListener("click", () => {
        cart.delete(item.name);
        saveCart();
        renderCart();
        showToast(`${item.name} removed from bag.`);
      });

      line.append(details, remove);
      cartItems.appendChild(line);
    });

    const total = Array.from(cart.values()).reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const totalRow = document.createElement("div");
    totalRow.className = "cart-total";
    totalRow.textContent = `Subtotal: ${inrFormatter.format(total)}`;
    cartItems.appendChild(totalRow);
  }

  $$("[data-add]").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.add;

      if (!name) return;

      if (button.id === "detailAddToBag" && button.dataset.category === "ring" && !$("#ringSize")?.value) {
        const actionMessage = $("#detailActionMessage");
        if (actionMessage) actionMessage.textContent = "Please select a ring size first.";
        $("#ringSize")?.focus();
        return;
      }

      const product = button.closest(".product-item");
      const price = Math.max(
        0,
        Number(button.dataset.price || product?.dataset.price || 0)
      );

      if (cart.has(name)) {
        cart.get(name).quantity += 1;
      } else {
        cart.set(name, {
          name,
          quantity: 1,
          price
        });
      }

      saveCart();
      renderCart();
      showToast(`${name} added to your bag.`);
      const actionMessage = $("#detailActionMessage");
      if (actionMessage && button.id === "detailAddToBag") {
        actionMessage.textContent = `${name} added to your bag.`;
      }
    });
  });

  if (checkoutButton) {
    checkoutButton.addEventListener("click", () => {
      if (cart.size === 0) {
        showToast("Your bag is empty.");
      } else {
        showToast(
          "Demo checkout only. Payment is not configured."
        );
      }
    });
  }

  renderCart();

  // ==========================================
  // ACCOUNT FORM
  // ==========================================

  const accountForm = $("#accountForm");
  const accountEmail = $("#accountEmail");
  const accountMessage = $("#accountMessage");

  if (accountForm) {
    accountForm.addEventListener("submit", event => {
      event.preventDefault();

      if (!accountForm.reportValidity()) return;

      if (accountMessage) {
        accountMessage.textContent =
          `Demo only: no account was created for ${
            accountEmail.value.trim()
          }.`;
      }
    });
  }

  // ==========================================
  // NEWSLETTER FORM
  // ==========================================

  const newsletterForm = $("#newsletterForm");
  const emailInput = $("#email");
  const formMessage = $("#formMessage");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", event => {
      event.preventDefault();

      if (!newsletterForm.reportValidity()) return;

      const email = emailInput.value.trim();

      if (formMessage) {
        formMessage.textContent =
          `Thank you! Your demo submission used ${email}.`;
      }

      newsletterForm.reset();
    });
  }

  // ==========================================
  // HERO SLIDER
  // ==========================================

  const heroTrack = $("#heroTrack");
  const heroPrev = $(".hero-prev");
  const heroNext = $(".hero-next");
  const heroCounter = $("#heroCounter");
  const heroSlides = heroTrack ? $$(".promo-slide", heroTrack) : [];

  let currentSlide = 0;

  function renderHeroSlide() {
    if (!heroTrack || heroSlides.length === 0) return;

    const visibleSlides = window.innerWidth <= 767 ? 1 : window.innerWidth <= 991 ? 2 : 3;
    const lastPosition = Math.max(0, heroSlides.length - visibleSlides);
    currentSlide = Math.min(currentSlide, lastPosition);
    const slideWidth = heroSlides[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(heroTrack).gap) || 0;
    heroTrack.style.transform = `translateX(-${(slideWidth + gap) * currentSlide}px)`;

    if (heroCounter) {
      heroCounter.textContent =
        `${String(currentSlide + 1).padStart(2, "0")} / ${
          String(heroSlides.length).padStart(2, "0")
        }`;
    }
  }

  if (heroPrev) {
    heroPrev.addEventListener("click", () => {
      const visibleSlides = window.innerWidth <= 767 ? 1 : window.innerWidth <= 991 ? 2 : 3;
      const lastPosition = Math.max(0, heroSlides.length - visibleSlides);
      currentSlide = currentSlide <= 0 ? lastPosition : currentSlide - 1;
      renderHeroSlide();
    });
  }

  if (heroNext) {
    heroNext.addEventListener("click", () => {
      const visibleSlides = window.innerWidth <= 767 ? 1 : window.innerWidth <= 991 ? 2 : 3;
      const lastPosition = Math.max(0, heroSlides.length - visibleSlides);
      currentSlide = currentSlide >= lastPosition ? 0 : currentSlide + 1;
      renderHeroSlide();
    });
  }

  renderHeroSlide();
  window.addEventListener("resize", renderHeroSlide);

  // ==========================================
  // MOBILE NAVIGATION
  // ==========================================

  $$(".header-links .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const nav = $("#mainNav");

      if (
        nav &&
        nav.classList.contains("show") &&
        window.bootstrap
      ) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  // ==========================================
  // SCROLL REVEAL
  // ==========================================

  const revealElements = $$(
    ".signature-card, .product-item, .quote-card, .process-step, .value"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12
    });

    revealElements.forEach(element => {
      element.classList.add("reveal");
      observer.observe(element);
    });
  }

  // ==========================================
  // BACK TO TOP
  // ==========================================

  const backToTop = $("#backToTop");

  function updateBackToTop() {
    if (backToTop) {
      backToTop.classList.toggle(
        "visible",
        window.scrollY > 500
      );
    }
  }

  window.addEventListener("scroll", updateBackToTop, {
    passive: true
  });

  updateBackToTop();

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  console.log("Jewellery website loaded.");
});
