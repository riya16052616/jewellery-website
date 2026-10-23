
(() => {
  function initProductSearch() {
    const grid = document.getElementById("productGrid");
    if (!grid) return;

    const search = document.getElementById("productSearch");
    const category = document.getElementById("categoryFilter");
    const sort = document.getElementById("sortProducts");
    const clear = document.getElementById("clearFilters");
    const count = document.getElementById("productResultCount");
    const empty = document.getElementById("noProductResults");

    const products = Array.from(
      grid.querySelectorAll(".product-item")
    ).map((element, index) => ({
      element,
      index,
      name: (
        element.dataset.name ||
        element.querySelector(".product-card > p")?.textContent ||
        ""
      ).trim().toLowerCase(),
      categories: (element.dataset.category || "")
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean)
    }));

    const aliases = {
      rings: "ring",
      necklaces: "necklace",
      bracelets: "bracelet",
      diamonds: "diamond",
      earrings: "earring"
    };

    function normalize(value) {
      const term = value.trim().toLowerCase();
      return aliases[term] || term;
    }

    // Match whole words or word beginnings, not random substrings.
    // "ring" matches "Aria Eternal Ring", but NOT "layering".
    function nameMatches(name, query) {
      if (!query) return true;

      const words = name.split(/[^a-z0-9]+/).filter(Boolean);

      return words.some(word => word.startsWith(query));
    }

    function updateProducts() {
      const query = normalize(search?.value || "");
      const selectedCategory = category?.value || "all";
      const sortMode = sort?.value || "featured";

      const matches = products.filter(product => {
        const matchesName = nameMatches(product.name, query);

        const matchesCategory =
          selectedCategory === "all" ||
          product.categories.includes(selectedCategory);

        // Category search works too: "rings" becomes "ring".
        const matchesProductCategory =
          !query ||
          product.categories.some(item =>
            item === query || item.startsWith(query)
          );

        return (
          (matchesName || matchesProductCategory) &&
          matchesCategory
        );
      });

      matches.sort((a, b) => {
        if (sortMode === "name-asc") {
          return a.name.localeCompare(b.name);
        }

        if (sortMode === "name-desc") {
          return b.name.localeCompare(a.name);
        }

        return a.index - b.index;
      });

      // Hide all products first.
      products.forEach(product => {
        product.element.hidden = true;
        product.element.style.display = "none";
      });

      // Show and order only actual matches.
      matches.forEach(product => {
        grid.appendChild(product.element);
        product.element.hidden = false;
        product.element.style.removeProperty("display");
      });

      if (count) {
        count.textContent =
          `Showing ${matches.length} of ${products.length} pieces`;
      }

      if (empty) {
        empty.hidden = matches.length !== 0;
      }
    }

    // Remove previous listeners by replacing the controls once.
    function replaceControl(element) {
      if (!element) return null;
      const replacement = element.cloneNode(true);
      element.replaceWith(replacement);
      return replacement;
    }

    const freshSearch = replaceControl(search);
    const freshCategory = replaceControl(category);
    const freshSort = replaceControl(sort);
    const freshClear = replaceControl(clear);

    freshSearch?.addEventListener("input", updateProducts);
    freshCategory?.addEventListener("change", updateProducts);
    freshSort?.addEventListener("change", updateProducts);

    freshClear?.addEventListener("click", () => {
      if (freshSearch) freshSearch.value = "";
      if (freshCategory) freshCategory.value = "all";
      if (freshSort) freshSort.value = "featured";
      updateProducts();
    });

    updateProducts();
    console.log("Corrected product search loaded:", products.length);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProductSearch, {
      once: true
    });
  } else {
    initProductSearch();
  }
})();
