document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const params = new URLSearchParams(window.location.search);
  const name = params.get("name") || "Jewellery";
  const category = params.get("category") || "jewellery";
  const description = params.get("description") || "JEWELLERY";
  const price = Number(params.get("price") || 0);
  const image = params.get("image");
  const categoryNames = {
    ring: "Rings",
    earring: "Earrings",
    necklace: "Necklaces",
    bracelet: "Bracelets",
    jewellery: "Jewellery"
  };
  const categoryName = categoryNames[category] || "Jewellery";
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(price);

  document.title = name + " — Jewellery Stories";

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  };

  setText("detailName", name);
  setText("detailPrice", formattedPrice);
  setText("detailBreadcrumbName", name.toLocaleUpperCase());
  setText("detailDescription", description);
  setText("specProductName", name);
  setText("specCategory", categoryName);
  setText("specStyle", description);
  setText("specPrice", formattedPrice);

  const categoryUrl = "collection.html?category=" + encodeURIComponent(category);
  const categoryLink = document.getElementById("detailCategoryLink");
  const moreLink = document.getElementById("moreFromCategory");
  if (categoryLink) {
    categoryLink.href = categoryUrl;
    categoryLink.textContent = categoryName.toLocaleUpperCase();
  }
  if (moreLink) moreLink.href = categoryUrl;

  const detailImage = document.getElementById("detailImage");
  if (detailImage && image) {
    detailImage.style.backgroundImage = image;
  }

  const ringSizeGroup = document.getElementById("ringSizeGroup");
  if (ringSizeGroup) ringSizeGroup.hidden = category !== "ring";

  const deliveryForm = document.getElementById("deliveryForm");
  const deliveryMessage = document.getElementById("deliveryMessage");
  if (deliveryForm) {
    deliveryForm.addEventListener("submit", event => {
      event.preventDefault();
      if (!deliveryForm.reportValidity()) return;
      if (deliveryMessage) {
        deliveryMessage.textContent =
          "Pincode accepted for this demo. Delivery dates are not connected.";
      }
    });
  }

  const actionMessage = document.getElementById("detailActionMessage");
  const addToBag = document.getElementById("detailAddToBag");
  const buyNow = document.getElementById("detailBuyNow");
  if (addToBag) {
    addToBag.dataset.add = name;
    addToBag.dataset.price = String(price);
    addToBag.dataset.category = category;
  }
  if (buyNow) {
    buyNow.addEventListener("click", () => {
      if (actionMessage) {
        actionMessage.textContent = "This is a demo store, so checkout is not enabled.";
      }
    });
  }

  const wishlist = document.getElementById("detailWishlist");
  if (wishlist) {
    wishlist.dataset.wishlist = name;
    wishlist.dataset.category = category;
    wishlist.dataset.price = String(price);
    wishlist.dataset.description = description;
    wishlist.dataset.image = image || "";
    if (window.refreshWishlist) window.refreshWishlist();
  }
});
