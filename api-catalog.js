(() => {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const search = document.getElementById("productSearch");
  const category = document.getElementById("categoryFilter");
  const sort = document.getElementById("sortProducts");
  const clear = document.getElementById("clearFilters");
  const resultCount = document.getElementById("productResultCount");
  const emptyMessage = document.getElementById("noProductResults");
  const headerSearchForm = document.getElementById("headerSearchForm");
  const headerSearchInput = document.getElementById("headerSearchInput");
  const newArrivalsDashboard = document.getElementById("newArrivalsDashboard");
  const labels = {
    ring: "Rings",
    rings: "Rings",
    earring: "Earrings",
    earrings: "Earrings",
    necklace: "Necklaces",
    necklaces: "Necklaces",
    bracelet: "Bracelets",
    bracelets: "Bracelets",
    diamond: "Diamond Jewellery",
    all: "All Jewellery"
  };

  let debounceTimer;
  let activeController;
  let requestNumber = 0;

  function currentFilters() {
    return {
      search: search?.value.trim() || headerSearchInput?.value.trim() || "",
      category: category?.value || "all",
      sort: sort?.value || "featured",
      view: new URLSearchParams(window.location.search).get("view") || ""
    };
  }

  function updateCollectionHeading(selectedCategory) {
    const normalized = selectedCategory.toLowerCase();
    const title = document.getElementById("collectionTitle");
    const description = document.getElementById("collectionDescription");
    const label = labels[normalized];

    if (title && label) {
      title.textContent = isNewArrivals && normalized === "all"
        ? "New Arrivals"
        : label;
    }
    if (description && label) {
      description.textContent = normalized === "all"
        ? isNewArrivals
          ? "The newest additions to the TAVRA collection."
          : "Explore pieces chosen for your everyday and special moments."
        : `Explore all ${label.toLowerCase()} in the collection.`;
    }
  }

  function normalizeCategory(value) {
    const aliases = {
      rings: "ring",
      earrings: "earring",
      necklaces: "necklace",
      bracelets: "bracelet"
    };
    const normalized = (value || "all").toLowerCase();
    return aliases[normalized] || normalized;
  }

  function renderProducts(products) {
    const categoryAliases = {
      bracelets: "bracelet",
      earrings: "earring",
      necklaces: "necklace",
      rings: "ring"
    };

    const fragment = document.createDocumentFragment();

    products.forEach((product, index) => {
      const rawCategory = (product.category || "").toLowerCase();
      const productCategory = categoryAliases[rawCategory] || rawCategory;

      const item = document.createElement("div");
      item.className = "col-6 col-md-3 product-item";
      item.dataset.name = product.name;
      item.dataset.productId = String(product.id);
      item.dataset.category = productCategory;
      item.dataset.price = String(product.price);
      item.dataset.originalIndex = String(index);

      const card = document.createElement("article");
      card.className = "product-card";

      const image = document.createElement("div");
      image.className = "product-image";
      image.setAttribute("role", "img");
      image.setAttribute("aria-label", product.name);
      if (product.image_url) {
        image.style.backgroundImage = `url("${product.image_url.replaceAll('"', "%22")}")`;
      }

      const heart = document.createElement("button");
      heart.type = "button";
      heart.className = "heart";
      heart.dataset.wishlist = product.name;
      heart.dataset.productId = String(product.id);
      heart.dataset.category = productCategory;
      heart.dataset.price = String(product.price);
      heart.dataset.description = product.description || "JEWELLERY";
      heart.dataset.image = image.style.backgroundImage;
      heart.setAttribute("aria-label", `Add ${product.name} to wishlist`);

      const heartIcon = document.createElement("i");
      heartIcon.className = "bi bi-heart";
      heart.append(heartIcon);

      const title = document.createElement("p");
      title.textContent = product.name;

      const categoryLabel = document.createElement("small");
      categoryLabel.textContent = productCategory.toUpperCase();

      const price = document.createElement("p");
      price.className = "product-price";
      price.textContent = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
      }).format(Number(product.price));

      const addButton = document.createElement("button");
      addButton.type = "button";
      addButton.className = "add-to-bag";
      addButton.dataset.add = product.name;
      addButton.dataset.productId = String(product.id);
      addButton.dataset.price = String(product.price);
      addButton.textContent = "ADD TO BAG";

      image.append(heart);
      card.append(image, title, categoryLabel, price, addButton);
      item.append(card);
      fragment.append(item);
    });

    grid.replaceChildren(fragment);
    window.refreshWishlist?.();
  }

  async function loadProducts() {
    const thisRequest = ++requestNumber;
    activeController?.abort();
    activeController = new AbortController();

    const filters = currentFilters();
    const params = new URLSearchParams({
      search: filters.search,
      category: filters.category,
      sort: filters.sort,
      view: filters.view
    });

    if (resultCount) resultCount.textContent = "Searching the collection…";
    if (emptyMessage) emptyMessage.hidden = true;

    try {
      const response = await fetch(
        `http://localhost:3000/api/products?${params.toString()}`,
        { signal: activeController.signal }
      );

      if (!response.ok) {
        throw new Error("The products API returned an error.");
      }

      const products = await response.json();
      if (thisRequest !== requestNumber) return;

      renderProducts(products);
      if (resultCount) {
        resultCount.textContent = `Showing ${products.length} pieces`;
      }
      if (emptyMessage) emptyMessage.hidden = products.length !== 0;
    } catch (error) {
      if (error.name === "AbortError") return;
      console.error("Could not load products:", error);
      if (resultCount) {
        resultCount.textContent = "Could not load jewellery. Check that the backend is running.";
      }
      if (emptyMessage) emptyMessage.hidden = true;
    }
  }

  const categoryFromUrl = new URLSearchParams(window.location.search).get("category");
  const queryParams = new URLSearchParams(window.location.search);
  const searchFromUrl = queryParams.get("search") || "";
  const isNewArrivals = queryParams.get("view") === "new-arrivals";
  if (newArrivalsDashboard) newArrivalsDashboard.hidden = !isNewArrivals;
  if (isNewArrivals) {
    const title = document.getElementById("collectionTitle");
    const description = document.getElementById("collectionDescription");
    if (title) title.textContent = "New Arrivals";
    if (description) description.textContent = "The newest additions to the TAVRA collection.";
  }
  if (category && categoryFromUrl) {
    category.value = normalizeCategory(categoryFromUrl);
  }
  if (search) search.value = searchFromUrl;
  if (headerSearchInput) headerSearchInput.value = searchFromUrl;
  updateCollectionHeading(category?.value || "all");

  headerSearchForm?.addEventListener("submit", event => {
    event.preventDefault();
    const query = headerSearchInput?.value.trim() || "";
    const url = new URL(window.location.href);
    if (query) url.searchParams.set("search", query);
    else url.searchParams.delete("search");
    history.replaceState(null, "", url);
    loadProducts();
  });

  headerSearchInput?.addEventListener("input", () => {
    if (search) search.value = headerSearchInput.value;
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(loadProducts, 250);
  });

  search?.addEventListener("input", () => {
    if (headerSearchInput) headerSearchInput.value = search.value;
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(loadProducts, 250);
  });

  category?.addEventListener("change", () => {
    const url = new URL(window.location.href);
    if (category.value === "all") url.searchParams.delete("category");
    else url.searchParams.set("category", category.value);
    history.replaceState(null, "", url);
    updateCollectionHeading(category.value);
    loadProducts();
  });

  sort?.addEventListener("change", loadProducts);

  clear?.addEventListener("click", () => {
    if (search) search.value = "";
    if (headerSearchInput) headerSearchInput.value = "";
    if (category) category.value = "all";
    if (sort) sort.value = "featured";
    const url = new URL(window.location.href);
    url.searchParams.delete("search");
    url.searchParams.delete("category");
    history.replaceState(null, "", url);
    updateCollectionHeading("all");
    loadProducts();
  });

  loadProducts();
})();
