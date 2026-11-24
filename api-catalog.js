(async () => {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const resultCount = document.getElementById("productResultCount");

  try {
    const response = await fetch("http://localhost:3000/api/products");

    if (!response.ok) {
      throw new Error("The products API returned an error.");
    }

    const products = await response.json();
    grid.replaceChildren();

    for (const product of products) {
      const categoryAliases = {
        bracelets: "bracelet",
        earrings: "earring",
        necklaces: "necklace",
        rings: "ring"
      };

      const rawCategory = (product.category || "").toLowerCase();
      const category = categoryAliases[rawCategory] || rawCategory;

      const item = document.createElement("div");
      item.className = "col-6 col-md-3 product-item";
      item.dataset.name = product.name;
      item.dataset.productId = String(product.id);
      item.dataset.category = category;
      item.dataset.price = product.price;

      const card = document.createElement("article");
      card.className = "product-card";

      const image = document.createElement("div");
      image.className = "product-image";

      if (product.image_url) {
        image.style.backgroundImage = `url("${product.image_url}")`;
      }

      const heart = document.createElement("button");
      heart.type = "button";
      heart.className = "heart";
      heart.dataset.wishlist = product.name;
      heart.setAttribute("aria-label", `Add ${product.name} to wishlist`);

      const heartIcon = document.createElement("i");
      heartIcon.className = "bi bi-heart";
      heart.append(heartIcon);

      const title = document.createElement("p");
      title.textContent = product.name;

      const categoryLabel = document.createElement("small");
      categoryLabel.textContent = category.toUpperCase();

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
      addButton.textContent = "ADD TO BAG";

      image.append(heart);
      card.append(image, title, categoryLabel, price, addButton);
      item.append(card);
      grid.append(item);
    }

    if (resultCount) {
      resultCount.textContent = `Showing ${products.length} pieces`;
    }
  } catch (error) {
    console.error("Could not load products:", error);
    if (resultCount) {
      resultCount.textContent = "Could not load jewellery. Check that the backend is running.";
    }
  }
})();