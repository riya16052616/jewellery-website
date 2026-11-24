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
    const pincodeInput = document.getElementById("pincode");

    const addBusinessDays = (startDate, days) => {
      const date = new Date(startDate);
      let addedDays = 0;
      while (addedDays < days) {
        date.setDate(date.getDate() + 1);
        const weekday = date.getDay();
        if (weekday !== 0 && weekday !== 6) addedDays += 1;
      }
      return date;
    };

    const formatDeliveryDate = date => new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short"
    }).format(date);

    pincodeInput?.addEventListener("input", () => {
      pincodeInput.setCustomValidity("");
      if (deliveryMessage) {
        deliveryMessage.textContent = "Enter your pincode to check delivery availability.";
      }
    });

    deliveryForm.addEventListener("submit", event => {
      event.preventDefault();
      const pincode = pincodeInput?.value.trim() || "";

      if (!/^[1-9]\d{5}$/.test(pincode)) {
        if (deliveryMessage) {
          deliveryMessage.textContent = "Enter a valid 6-digit Indian PIN code.";
        }
        pincodeInput?.focus();
        return;
      }

      const earliest = formatDeliveryDate(addBusinessDays(new Date(), 5));
      const latest = formatDeliveryDate(addBusinessDays(new Date(), 7));
      if (deliveryMessage) {
        deliveryMessage.textContent =
          `Estimated delivery: ${earliest}–${latest} (5–7 working days). This is a demo estimate; courier serviceability is not connected.`;
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

  const productId = Number(params.get("productId"));
  const reviewList = document.getElementById("reviewList");
  const reviewSummary = document.getElementById("reviewSummary");
  const reviewForm = document.getElementById("reviewForm");
  const reviewMessage = document.getElementById("reviewMessage");
  const submitReview = document.getElementById("submitReview");
  const reviewApiUrl = `http://localhost:3000/api/products/${productId}/reviews`;

  function renderReviews(reviews, averageRating, reviewCount) {
    if (!reviewList) return;
    reviewList.replaceChildren();

    if (reviewSummary) {
      reviewSummary.textContent = reviewCount
        ? `${Number(averageRating).toFixed(1)} out of 5 · ${reviewCount} review${reviewCount === 1 ? "" : "s"}`
        : "No reviews yet";
    }

    if (reviews.length === 0) {
      const empty = document.createElement("p");
      empty.className = "review-empty";
      empty.textContent = "No reviews yet. Be the first to share your experience.";
      reviewList.appendChild(empty);
      return;
    }

    reviews.forEach(review => {
      const article = document.createElement("article");
      article.className = "review-card";

      const top = document.createElement("div");
      top.className = "review-card-top";

      const reviewer = document.createElement("strong");
      reviewer.textContent = review.reviewer_name;

      const date = document.createElement("time");
      const dateValue = new Date(review.created_at);
      date.dateTime = dateValue.toISOString();
      date.textContent = dateValue.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
      top.append(reviewer, date);

      const stars = document.createElement("p");
      stars.className = "review-stars";
      stars.setAttribute("aria-label", `${review.rating} out of 5 stars`);
      stars.textContent = `${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}`;

      const text = document.createElement("p");
      text.className = "review-card-text";
      text.textContent = review.review_text;

      article.append(top, stars, text);
      reviewList.appendChild(article);
    });
  }

  async function loadReviews() {
    if (!Number.isInteger(productId) || productId < 1) {
      if (reviewSummary) reviewSummary.textContent = "Reviews are available for catalog products.";
      if (reviewList) {
        reviewList.replaceChildren();
        const message = document.createElement("p");
        message.className = "review-empty";
        message.textContent = "Open this item from the collection to view or add reviews.";
        reviewList.appendChild(message);
      }
      if (reviewForm) reviewForm.hidden = true;
      return;
    }

    try {
      const response = await fetch(reviewApiUrl);
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Could not load reviews.");
      renderReviews(data.reviews || [], data.averageRating || 0, data.reviewCount || 0);
    } catch (error) {
      if (reviewSummary) reviewSummary.textContent = "Reviews are temporarily unavailable.";
      if (reviewList) {
        reviewList.replaceChildren();
        const message = document.createElement("p");
        message.className = "review-empty";
        message.textContent = "Could not load reviews. Make sure the API server is running.";
        reviewList.appendChild(message);
      }
    }
  }

  reviewForm?.addEventListener("submit", async event => {
    event.preventDefault();
    if (!reviewForm.reportValidity()) return;

    const formData = new FormData(reviewForm);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      rating: Number(formData.get("rating")),
      review: String(formData.get("review") || "").trim(),
      website: String(formData.get("website") || "").trim()
    };

    if (submitReview) {
      submitReview.disabled = true;
      submitReview.textContent = "SUBMITTING…";
    }
    if (reviewMessage) reviewMessage.textContent = "Submitting your review…";

    try {
      const response = await fetch(reviewApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Could not submit your review.");

      reviewForm.reset();
      if (reviewMessage) reviewMessage.textContent = "Thank you. Your review has been added.";
      await loadReviews();
    } catch (error) {
      if (reviewMessage) reviewMessage.textContent = error.message || "Could not submit your review.";
    } finally {
      if (submitReview) {
        submitReview.disabled = false;
        submitReview.textContent = "SUBMIT REVIEW";
      }
    }
  });

  loadReviews();
});
