# Jewellery Stories — Bootstrap 5 responsive landing page

## Run locally

1. Extract this folder.
2. From the folder, run `python3 -m http.server 8000`.
3. Open http://localhost:8000.

## Interactive features

- Responsive Bootstrap 5 navigation with animated mobile collapse; header is not fixed/sticky.
- Search modal routes a search phrase to the most relevant page section (demo search; no product API).
- Account modal validates an email (demo only; connect authentication for real sign-in).
- Wishlist heart buttons toggle and update the count.
- Add-to-bag controls update a working demo cart drawer; items can be removed and quantities are tracked.
- Hero previous/next controls rotate through editorial images.
- Scroll-reveal and hover animations for cards, tiles, testimonials and value boxes.
- Newsletter validates an email and shows feedback (connect a mailing-list provider to persist signups).
- Back-to-top button and toast notifications.
- Respects `prefers-reduced-motion`.

Bootstrap 5.3.3 and Bootstrap Icons are loaded from CDNs, so an internet connection is needed. The cart, wishlist, search and account flows are frontend demos; connect your own API/backend for production checkout, saved customer data and product search.

## Latest reference-matched header and hero

- Announcement bar now repeats the exact three store-benefit messages from the supplied reference, with a pause-on-hover marquee.
- Header uses the supplied 30-year brand mark and screenshot-aligned labels: Collections, Jewellery, Occasions, Stories, More, Social and Contact.
- Jewellery and More dropdowns animate in with staggered link text; on mobile they expand inline inside the sliding navigation.
- The supplied hero reference is displayed at desktop sizes for a close visual match. The transparent Explore Collection and Discover the Story hit areas navigate to the corresponding sections; hero arrow controls switch to the interactive editorial slides.
- The original landing-page sections, product data, wishlist, bag, search, account, newsletter and other JavaScript behaviors are retained.


### Editorial banner asset
The `Light, captured.` banner uses the supplied image at `assets/editorial-banner.jpg`. The banner text, gradient overlay, layout, and responsive behavior remain HTML/CSS, not a screenshot.
