# FILE: index.html
``html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Discover jewellery, crafted with care and designed for everyday moments.">
  <title>Tanishq — Wear Your Story</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <div class="announcement">
    <div class="announcement-track">
      <span>COMPLIMENTARY SHIPPING ON ORDERS ABOVE ₹25,000</span><b>•</b>
      <span>LIFETIME EXCHANGE PROMISE</span><b>•</b>
      <span>CERTIFIED GOLD &amp; DIAMONDS</span><b>•</b>
      <span>COMPLIMENTARY SHIPPING ON ORDERS ABOVE ₹25,000</span><b>•</b>
      <span>LIFETIME EXCHANGE PROMISE</span><b>•</b>
      <span>CERTIFIED GOLD &amp; DIAMONDS</span>
    </div>
  </div>

  <!-- HEADER / NAVIGATION -->
  <header class="site-header">
    <nav class="navbar navbar-expand-lg container-fluid header-inner">
      <a class="navbar-brand brand-mark" href="#home" aria-label="Home">T<span>✦</span></a>

      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#mainNav"
        aria-controls="mainNav" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-auto header-links">
          <li class="nav-item">
            <a class="nav-link" href="collection.html?category=all">NEW ARRIVALS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="collection.html?category=ring">RINGS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="collection.html?category=earring">EARRINGS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="collection.html?category=necklace">NECKLACES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="collection.html?category=bracelet">BRACELETS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="collection.html?category=all">COLLECTIONS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="story.html">OUR STORY</a>
          </li>
        </ul>
      </div>
      <div class="nav-tools">
        <button class="icon-btn" id="wishlistButton" type="button" data-bs-toggle="offcanvas" data-bs-target="#wishlistDrawer" aria-label="Open wishlist">
          <i class="bi bi-heart"></i><span class="tool-count" id="wishlistCount">0</span>
        </button>
        <button class="icon-btn" type="button" data-bs-toggle="modal"
          data-bs-target="#searchModal" aria-label="Search">
          <i class="bi bi-search"></i>
        </button>
        <button class="icon-btn" type="button" data-bs-toggle="modal"
          data-bs-target="#accountModal" aria-label="Account">
          <i class="bi bi-person"></i>
        </button>
        <button class="icon-btn bag-icon" type="button"
          data-bs-toggle="offcanvas" data-bs-target="#cartDrawer"
          aria-label="Shopping bag">
          <i class="bi bi-bag"></i>
          <span class="tool-count" id="cartCount">0</span>
        </button>
      </div>
    </nav>
  </header>

  <main>
    <!-- HERO -->
    <section id="home" class="hero">
      <div class="hero-reference-screen"></div>

      <div class="hero-copy">
        <p class="eyebrow">THE ART OF BEING YOU</p>
        <h1>Wear<br><em>your story.</em></h1>
        <p class="hero-sub">Jewellery that feels like<br>it was always yours.</p>
        <a class="pill-link" href="#collections">DISCOVER THE EDIT <span>↗</span></a>
        <div class="hero-foot">
          <span>TIMELESS BY NATURE</span>
          <span id="heroCounter">01 / 04</span>
        </div>
      </div>

      <div class="hero-image hero-image-one" role="img" aria-label="Gold jewellery"></div>
      <div class="hero-image hero-image-two" role="img" aria-label="Close-up of jewellery"></div>

      <div class="hero-controls">
        <button class="hero-prev" type="button" aria-label="Previous slide">
          <i class="bi bi-arrow-left"></i>
        </button>
        <button class="hero-next" type="button" aria-label="Next slide">
          <i class="bi bi-arrow-right"></i>
        </button>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="service-strip container-fluid">
      <div class="row g-0 text-center">
        <div class="col-6 col-md-3 service">
          <span>✧</span><strong>Made with care</strong><small>For your everyday</small>
        </div>
        <div class="col-6 col-md-3 service">
          <span>◇</span><strong>Lifetime exchange</strong><small>Peace of mind, always</small>
        </div>
        <div class="col-6 col-md-3 service">
          <span>✳</span><strong>Certified purity</strong><small>Trust in every detail</small>
        </div>
        <div class="col-6 col-md-3 service">
          <span>♧</span><strong>Personalised for you</strong><small>Make it your own</small>
        </div>
      </div>
    </section>

    <!-- COLLECTIONS -->
    <section id="collections" class="section container section-pad">
      <p class="eyebrow gold-text">A WORLD OF YOUR OWN</p>
      <h2>Find your signature.</h2>

      <div class="signature-grid">
        <a class="signature-card signature-large img-necklace" href="collection.html?category=necklace">
          <span>Necklaces <b>↗</b></span>
        </a>
        <a class="signature-card img-ring" href="collection.html?category=ring">
          <span>Rings <b>↗</b></span>
        </a>
        <a class="signature-card img-earrings" href="collection.html?category=earring">
          <span>Earrings <b>↗</b></span>
        </a>
        <a class="signature-card img-bracelet" href="collection.html?category=bracelet">
          <span>Bracelets <b>↗</b></span>
        </a>
      </div>
    </section>

    <div class="category-ribbon">
      GOLD · EVERYDAY WEAR · HIGH JEWELLERY · DIAMONDS · BRIDAL · CELEBRATIONS · HANDCRAFTED
    </div>

    <!-- PRODUCT CATALOGUE -->
    <section id="edit" class="section container section-pad">
      <div class="section-heading">
        <div>
          <p class="eyebrow gold-text">CURATED FOR YOU</p>
          <h2>The edit.</h2>
        </div>
        <a class="outline-link" href="#lookbook">VIEW LOOKBOOK ↗</a>
      </div>

      <div class="catalog-controls">
        <label class="catalog-search">
          <i class="bi bi-search" aria-hidden="true"></i>
          <input id="productSearch" type="search"
            placeholder="Search jewellery..." aria-label="Search products">
        </label>

        <label class="catalog-select">
          <span>Category</span>
          <select id="categoryFilter" aria-label="Filter by category">
            <option value="all">All jewellery</option>
            <option value="ring">Rings</option>
            <option value="earring">Earrings</option>
            <option value="necklace">Necklaces</option>
            <option value="bracelet">Bracelets</option>
            <option value="diamond">Diamonds</option>
          </select>
        </label>

        <label class="catalog-select">
          <span>Sort by</span>
          <select id="sortProducts" aria-label="Sort products">
            <option value="featured">Featured</option>
            <option value="name-asc">Name: A–Z</option>
            <option value="name-desc">Name: Z–A</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </label>

        <button id="clearFilters" class="catalog-clear" type="button">CLEAR</button>
        <p id="productResultCount" class="catalog-result-count" aria-live="polite">
          Loading jewellery…
        </p>
      </div>

      <div class="row g-3 product-grid" id="productGrid">
        <div class="col-6 col-md-3 product-item"
          data-name="Aria Eternal Ring" data-category="ring diamond">
          <article class="product-card">
            <div class="product-image product-ring">
              <button class="heart" type="button" data-wishlist="Aria Eternal Ring"
                aria-label="Add Aria Eternal Ring to wishlist">
                <i class="bi bi-heart"></i>
              </button>
            </div>
            <p>Aria Eternal Ring</p>
            <small>DIAMOND · GOLD</small>
            <button class="add-to-bag" type="button" data-add="Aria Eternal Ring">
              ADD TO BAG <i class="bi bi-arrow-up-right"></i>
            </button>
          </article>
        </div>

        <div class="col-6 col-md-3 product-item"
          data-name="The Luxe Layering Chain" data-category="necklace">
          <article class="product-card">
            <div class="product-image product-neck">
              <button class="heart" type="button" data-wishlist="The Luxe Layering Chain"
                aria-label="Add The Luxe Layering Chain to wishlist">
                <i class="bi bi-heart"></i>
              </button>
            </div>
            <p>The Luxe Layering Chain</p>
            <small>18K GOLD</small>
            <button class="add-to-bag" type="button" data-add="The Luxe Layering Chain">
              ADD TO BAG <i class="bi bi-arrow-up-right"></i>
            </button>
          </article>
        </div>

        <div class="col-6 col-md-3 product-item"
          data-name="Dainty Cluster Chain Bracelet" data-category="bracelet">
          <article class="product-card">
            <div class="product-image product-blue">
              <button class="heart" type="button" data-wishlist="Dainty Cluster Chain Bracelet"
                aria-label="Add Dainty Cluster Chain Bracelet to wishlist">
                <i class="bi bi-heart"></i>
              </button>
            </div>
            <p>Dainty Cluster Chain Bracelet</p>
            <small>DIAMOND · 14K GOLD</small>
            <button class="add-to-bag" type="button" data-add="Dainty Cluster Chain Bracelet">
              ADD TO BAG <i class="bi bi-arrow-up-right"></i>
            </button>
          </article>
        </div>

        <div class="col-6 col-md-3 product-item"
          data-name="Solitaire Luxe" data-category="ring diamond">
          <article class="product-card">
            <div class="product-image product-ring-band">
              <button class="heart" type="button" data-wishlist="Solitaire Luxe"
                aria-label="Add Solitaire Luxe to wishlist">
                <i class="bi bi-heart"></i>
              </button>
            </div>
            <p>Solitaire Luxe</p>
            <small>PLATINUM</small>
            <button class="add-to-bag" type="button" data-add="Solitaire Luxe">
              ADD TO BAG <i class="bi bi-arrow-up-right"></i>
            </button>
          </article>
        </div>

        <div class="col-6 col-md-3 product-item"
          data-name="Celeste Halo Ring" data-category="ring diamond">
          <article class="product-card">
            <div class="product-image product-ring-halo">
              <button class="heart" type="button" data-wishlist="Celeste Halo Ring"
                aria-label="Add Celeste Halo Ring to wishlist">
                <i class="bi bi-heart"></i>
              </button>
            </div>
            <p>Celeste Halo Ring</p>
            <small>DIAMOND · 18K GOLD</small>
            <button class="add-to-bag" type="button" data-add="Celeste Halo Ring">
              ADD TO BAG <i class="bi bi-arrow-up-right"></i>
            </button>
          </article>
        </div>

        <div class="col-6 col-md-3 product-item"
          data-name="Rose Gold Eternity Band" data-category="ring">
          <article class="product-card">
            <div class="product-image product-ring-gold">
              <button class="heart" type="button" data-wishlist="Rose Gold Eternity Band"
                aria-label="Add Rose Gold Eternity Band to wishlist">
                <i class="bi bi-heart"></i>
              </button>
            </div>
            <p>Rose Gold Eternity Band</p>
            <small>ROSE GOLD · 14K</small>
            <button class="add-to-bag" type="button" data-add="Rose Gold Eternity Band">
              ADD TO BAG <i class="bi bi-arrow-up-right"></i>
            </button>
          </article>
        </div>

        <div class="col-6 col-md-3 product-item"
          data-name="Emerald Muse Ring" data-category="ring diamond">
          <article class="product-card">
            <div class="product-image product-ring-emerald">
              <button class="heart" type="button" data-wishlist="Emerald Muse Ring"
                aria-label="Add Emerald Muse Ring to wishlist">
                <i class="bi bi-heart"></i>
              </button>
            </div>
            <p>Emerald Muse Ring</p>
            <small>EMERALD CUT · DIAMOND</small>
            <button class="add-to-bag" type="button" data-add="Emerald Muse Ring">
              ADD TO BAG <i class="bi bi-arrow-up-right"></i>
            </button>
          </article>
        </div>
      </div>

      <p id="noProductResults" class="catalog-empty" role="status" hidden>
        No matching jewellery found. Try another search or clear your filters.
      </p>

      <a class="banner-light" href="#craft">
        <div class="banner-light-copy">
          <p class="eyebrow">TANISHQ / EDIT</p>
          <h2>Light,<br>captured.</h2>
          <p class="banner-description">
            A quieter editorial moment from the Moonlit collection.
          </p>
          <span class="banner-cta">DISCOVER ↗</span>
        </div>
      </a>
    </section>

    <!-- OUR STORY -->
    <section id="craft" class="split-story">
      <div class="split-image" role="img" aria-label="Jewellery craftsmanship"></div>
      <div class="split-copy">
        <p class="eyebrow gold-text">OUR PROMISE</p>
        <h2>Crafted in India.<br>Designed for<br>everywhere.</h2>
        <blockquote>“A jewel should feel like<br>a memory you can wear.”</blockquote>
        <p>Thoughtful design, exceptional craftsmanship and a little everyday magic — made to become part of your story.</p>
        <a href="#stories" class="dark-button">OUR CRAFTSMANSHIP ↗</a>
      </div>
    </section>

    <!-- FEATURE -->
    <section class="dark-feature">
      <div class="dark-feature-inner">
        <div class="dark-feature-copy">
          <p class="eyebrow gold-text">CHAPTER 06 / THE MOONLIT EDIT</p>
          <h2>Light, captured in<br>gold.</h2>
          <p>A sculptural collection inspired by moonlight. Soft curves, fluid forms and diamonds that move with every gesture.</p>
          <a href="#lookbook" class="moonlit-cta">EXPLORE MOONLIT ↗</a>
        </div>
        <div class="dark-feature-image" role="img" aria-label="Gold jewellery editorial"></div>
        <div class="floating-note">
          <strong>Moonlit No.</strong>
          <span class="note-number">01</span>
          <span>18K yellow gold ·<br>diamonds</span>
        </div>
      </div>
    </section>

    <!-- LOOKBOOK -->
    <section id="lookbook" class="section container section-pad">
      <p class="eyebrow gold-text">STYLE NOTES</p>
      <h2>The jewellery lookbook.</h2>

      <div class="lookbook-grid">
        <a class="lookbook-item look-pearl" href="#stories"><span>Everyday heirlooms ↗</span></a>
        <a class="lookbook-item look-layer" href="#stories"><span>Layers of you ↗</span></a>
        <a class="lookbook-item look-gem" href="#stories"><span>Colour stories ↗</span></a>
        <a class="lookbook-item look-solitaire" href="#stories"><span>Modern classics ↗</span></a>
        <a class="lookbook-item look-gold" href="#stories"><span>Golden hour ↗</span></a>
        <a class="lookbook-item look-ice" href="#stories"><span>Pure brilliance ↗</span></a>
      </div>

      <div class="process">
        <p class="eyebrow gold-text">MADE TO MEAN MORE</p>
        <h2>From sketch to heirloom.</h2>
        <div class="row g-3">
          <div class="col-6 col-md-3 process-step">
            <span>✎</span><h3>Thoughtfully imagined</h3>
            <p>Every design starts with a feeling.</p>
          </div>
          <div class="col-6 col-md-3 process-step">
            <span>♧</span><h3>Shaped by hand</h3>
            <p>Made with patience and precision.</p>
          </div>
          <div class="col-6 col-md-3 process-step">
            <span>✦</span><h3>Set for brilliance</h3>
            <p>Details that catch the light.</p>
          </div>
          <div class="col-6 col-md-3 process-step">
            <span>♧</span><h3>Yours for always</h3>
            <p>Crafted to become a keepsake.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section id="stories" class="testimonials">
      <div class="container">
        <p class="eyebrow gold-text">WORDS TO KEEP</p>
        <h2>Stories that stay.</h2>
        <div class="row g-3">
          <div class="col-md-4">
            <article class="quote-card">
              <div>★★★★★</div>
              <p>“The little details make it feel personal. It’s become the piece I reach for every single day.”</p>
              <small>— A STORY WORTH KEEPING</small>
            </article>
          </div>
          <div class="col-md-4">
            <article class="quote-card">
              <div>★★★★★</div>
              <p>“A beautiful reminder of a moment I never want to forget. Thoughtful, timeless and entirely me.”</p>
              <small>— MADE FOR A MOMENT</small>
            </article>
          </div>
          <div class="col-md-4">
            <article class="quote-card">
              <div>★★★★★</div>
              <p>“The craftsmanship is extraordinary. I know this is something I’ll treasure for years.”</p>
              <small>— A FOREVER FAVOURITE</small>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- SOCIAL -->
    <section id="social" class="section container section-pad">
      <div class="section-heading">
        <div>
          <p class="eyebrow gold-text">A LITTLE INSPIRATION</p>
          <h2>@tanishq.jewels</h2>
        </div>
        <a class="outline-link" href="#newsletter">GET IN TOUCH ↗</a>
      </div>
      <div class="social-grid">
        <div class="social-img product-ring"></div>
        <div class="social-img product-neck"></div>
        <div class="social-img product-blue"></div>
        <div class="social-img product-diamond"></div>
        <div class="social-img img-earrings"></div>
        <div class="social-img img-bracelet"></div>
      </div>
    </section>

    <!-- VALUES -->
    <section class="section container section-pad values-section">
      <p class="eyebrow gold-text">THE DIFFERENCE</p>
      <h2>Luxury, beyond the jewel.</h2>
      <div class="row g-0 values-grid">
        <div class="col-6 col-md-3 value">
          <span>✧</span><h3>Thoughtful design</h3>
          <p>Distinctive pieces that feel like you.</p>
        </div>
        <div class="col-6 col-md-3 value">
          <span>◇</span><h3>Signature quality</h3>
          <p>Considered in every detail.</p>
        </div>
        <div class="col-6 col-md-3 value">
          <span>✦</span><h3>Trust, always</h3>
          <p>Confidence you can feel.</p>
        </div>
        <div class="col-6 col-md-3 value">
          <span>♧</span><h3>Made to last</h3>
          <p>Heirlooms for your next chapter.</p>
        </div>
      </div>
    </section>

    <!-- CLOSING FEATURE -->
    <section class="off-grid">
      <div>
        <p class="eyebrow gold-text">A DIFFERENT KIND OF BRILLIANCE</p>
        <h2>Jewellery,<br><em>off the grid.</em></h2>
        <p>For the ones who write their own rules.</p>
      </div>
      <div class="off-grid-icons">
        <span>✦<small>Made with meaning</small></span>
        <span>◇<small>Unexpected details</small></span>
        <span>♧<small>Modern heirlooms</small></span>
        <span>✧<small>Always individual</small></span>
      </div>
    </section>

    <!-- NEWSLETTER -->
    <section id="newsletter" class="newsletter container">
      <div>
        <p class="eyebrow gold-text">NOTES FROM OUR WORLD</p>
        <h2>Be first to know.</h2>
        <p>New stories, considered collections and little things worth keeping.</p>
      </div>
      <form id="newsletterForm" class="newsletter-form">
        <label class="visually-hidden" for="email">Email address</label>
        <input id="email" type="email" placeholder="Your email address" required>
        <button type="submit" aria-label="Subscribe">↗</button>
      </form>
      <p class="form-message" id="formMessage" aria-live="polite"></p>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-12 col-md-4 footer-brand">
          <a class="brand-mark" href="#home">T<span>✦</span></a>
          <p>Jewellery that holds a little piece of you. Crafted with care, made to be treasured.</p>
          <div class="social-links">
            <a href="#social" aria-label="Instagram">◎</a>
            <a href="#social" aria-label="Facebook">f</a>
            <a href="#social" aria-label="Pinterest">p</a>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <h3>EXPLORE</h3>
          <a href="collection.html?category=all">Collections</a>
          <a href="#edit">Gold jewellery</a>
          <a href="#edit">Diamond jewellery</a>
          <a href="#lookbook">Lookbook</a>
        </div>
        <div class="col-6 col-md-3">
          <h3>HELP &amp; SUPPORT</h3>
          <a href="#newsletter">Contact us</a>
          <a href="#newsletter">Shipping &amp; delivery</a>
          <a href="#newsletter">Returns &amp; exchange</a>
          <a href="#newsletter">Care guide</a>
        </div>
        <div class="col-6 col-md-3">
          <h3>ABOUT</h3>
          <a href="story.html">Our craftsmanship</a>
          <a href="story.html">Our story</a>
          <a href="#newsletter">Store locator</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Jewellery Stories. All rights reserved.</span>
        <span>Privacy · Terms · Accessibility</span>
      </div>
    </div>
  </footer>

  <!-- SEARCH MODAL -->
  <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content luxury-modal">
        <div class="modal-header">
          <h2 class="modal-title" id="searchTitle">Find your piece.</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="searchForm" class="search-form">
            <i class="bi bi-search" aria-hidden="true"></i>
            <input id="searchInput" type="search"
              placeholder="Search rings, necklaces, diamonds..."
              aria-label="Search jewellery">
            <button type="submit">SEARCH</button>
          </form>
          <p id="searchMessage" class="interaction-message" aria-live="polite">
            Try Rings, Necklaces, Bracelets or Diamonds.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- ACCOUNT MODAL -->
  <div class="modal fade" id="accountModal" tabindex="-1" aria-labelledby="accountTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content luxury-modal">
        <div class="modal-header">
          <h2 class="modal-title" id="accountTitle">Welcome back.</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Use this demo form to try the account interface.</p>
          <form id="accountForm">
            <label for="accountEmail" class="form-label">Email address</label>
            <input class="form-control mb-3" id="accountEmail" type="email"
              placeholder="you@example.com" required>
            <button class="dark-button" type="submit">
              CONTINUE <i class="bi bi-arrow-right"></i>
            </button>
            <p id="accountMessage" class="interaction-message" aria-live="polite"></p>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- CART DRAWER -->
  <div class="offcanvas offcanvas-end cart-drawer wishlist-drawer" tabindex="-1" id="wishlistDrawer" aria-labelledby="wishlistTitle">
    <div class="offcanvas-header"><h2 class="offcanvas-title" id="wishlistTitle">Your wishlist <span id="wishlistHeadingCount">(0)</span></h2><button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
    <div class="offcanvas-body"><div id="wishlistItems"><p class="empty-cart">Your wishlist is waiting for something beautiful.</p></div></div>
  </div>
  <div class="offcanvas offcanvas-end cart-drawer" tabindex="-1"
    id="cartDrawer" aria-labelledby="cartTitle">
    <div class="offcanvas-header">
      <h2 class="offcanvas-title" id="cartTitle">
        Your bag <span id="cartHeadingCount">(0)</span>
      </h2>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div id="cartItems">
        <p class="empty-cart">Your bag is waiting for something beautiful.</p>
      </div>
      <div class="cart-bottom">
        <p>This is a demo store. No payment will be collected.</p>
        <button id="checkoutButton" class="dark-button w-100" type="button">
          CONTINUE TO CHECKOUT <i class="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- TOAST MESSAGE -->
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="siteToast" class="toast" role="status" aria-live="polite" aria-atomic="true">
      <div class="toast-header">
        <i class="bi bi-stars me-2"></i>
        <strong class="me-auto">Jewellery Stories</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body" id="toastMessage">Added to your bag.</div>
    </div>
  </div>

  <button id="backToTop" class="back-to-top" type="button" aria-label="Back to top">
    <i class="bi bi-arrow-up"></i>
  </button>

  <!-- SCRIPTS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="script.js"></script>

</body>
</html>
``

# FILE: collection.html
``html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Explore the jewellery collection.">
  <title>Jewellery Collection — Tanishq</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body class="collection-page">
  <div class="announcement"><div class="announcement-track">
    <span>COMPLIMENTARY SHIPPING ON ORDERS ABOVE ₹25,000</span><b>•</b>
    <span>LIFETIME EXCHANGE PROMISE</span><b>•</b>
    <span>CERTIFIED GOLD &amp; DIAMONDS</span>
  </div></div>

  <header class="site-header">
    <nav class="navbar navbar-expand-lg container-fluid header-inner">
      <a class="navbar-brand brand-mark" href="index.html" aria-label="Home">T<span>✦</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-auto header-links">
          <li class="nav-item"><a class="nav-link" href="collection.html?category=all">NEW ARRIVALS</a></li>
          <li class="nav-item"><a class="nav-link" href="collection.html?category=ring">RINGS</a></li>
          <li class="nav-item"><a class="nav-link" href="collection.html?category=earring">EARRINGS</a></li>
          <li class="nav-item"><a class="nav-link" href="collection.html?category=necklace">NECKLACES</a></li>
          <li class="nav-item"><a class="nav-link" href="collection.html?category=bracelet">BRACELETS</a></li>
          <li class="nav-item"><a class="nav-link" href="story.html">OUR STORY</a></li>
        </ul>
        <a class="outline-link" href="index.html">BACK TO HOME ↗</a>
      </div>
      <div class="nav-tools">
        <button class="icon-btn" id="wishlistButton" type="button" data-bs-toggle="offcanvas" data-bs-target="#wishlistDrawer" aria-label="Open wishlist">
          <i class="bi bi-heart"></i><span class="tool-count" id="wishlistCount">0</span>
        </button>
        <button class="icon-btn bag-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartDrawer" aria-label="Shopping bag">
          <i class="bi bi-bag"></i><span class="tool-count" id="cartCount">0</span>
        </button>
      </div>
    </nav>
  </header>

  <main>
    <section id="edit" class="section container section-pad">
      <p class="eyebrow gold-text">CURATED FOR YOU</p>
      <h1 id="collectionTitle">All Jewellery</h1>
      <p id="collectionDescription">Explore pieces chosen for your everyday and special moments.</p>

      <div class="catalog-controls">
        <label class="catalog-search">
          <i class="bi bi-search" aria-hidden="true"></i>
          <input id="productSearch" type="search" placeholder="Search jewellery..." aria-label="Search products">
        </label>
        <label class="catalog-select">
          <span>Category</span>
          <select id="categoryFilter" aria-label="Filter by category">
            <option value="all">All jewellery</option>
            <option value="ring">Rings</option>
            <option value="earring">Earrings</option>
            <option value="necklace">Necklaces</option>
            <option value="bracelet">Bracelets</option>
            <option value="diamond">Diamonds</option>
          </select>
        </label>
        <label class="catalog-select">
          <span>Sort by</span>
          <select id="sortProducts" aria-label="Sort products">
            <option value="featured">Featured</option>
            <option value="name-asc">Name: A–Z</option>
            <option value="name-desc">Name: Z–A</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </label>
        <button id="clearFilters" class="catalog-clear" type="button">CLEAR</button>
        <p id="productResultCount" class="catalog-result-count" aria-live="polite">Loading jewellery…</p>
      </div>

      <div class="row g-3 product-grid" id="productGrid"></div>
      <p id="noProductResults" class="catalog-empty" role="status" hidden>No matching jewellery found. Try another search or clear your filters.</p>
    </section>
  </main>

  <div class="offcanvas offcanvas-end cart-drawer wishlist-drawer" tabindex="-1" id="wishlistDrawer" aria-labelledby="wishlistTitle">
    <div class="offcanvas-header"><h2 class="offcanvas-title" id="wishlistTitle">Your wishlist <span id="wishlistHeadingCount">(0)</span></h2><button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
    <div class="offcanvas-body"><div id="wishlistItems"><p class="empty-cart">Your wishlist is waiting for something beautiful.</p></div></div>
  </div>
  <div class="offcanvas offcanvas-end cart-drawer" tabindex="-1" id="cartDrawer" aria-labelledby="cartTitle">
    <div class="offcanvas-header">
      <h2 class="offcanvas-title" id="cartTitle">Your bag <span id="cartHeadingCount">(0)</span></h2>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div id="cartItems"><p class="empty-cart">Your bag is waiting for something beautiful.</p></div>
      <div class="cart-bottom">
        <p>This is a demo store. No payment will be collected.</p>
        <button id="checkoutButton" class="dark-button w-100" type="button">CONTINUE TO CHECKOUT <i class="bi bi-arrow-right"></i></button>
      </div>
    </div>
  </div>
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="siteToast" class="toast" role="status" aria-live="polite" aria-atomic="true">
      <div class="toast-header"><strong class="me-auto">Jewellery Stories</strong><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button></div>
      <div class="toast-body" id="toastMessage">Added to your bag.</div>
    </div>
  </div>

  <footer class="site-footer"><div class="container footer-bottom">
    <a class="brand-mark" href="index.html">T<span>✦</span></a>
    <span>© 2026 Jewellery Stories. All rights reserved.</span>
  </div></footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
``

# FILE: story.html
``html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="The story and craftsmanship behind Jewellery Stories.">
  <title>Our Story — Tanishq</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="announcement"><div class="announcement-track">
    <span>THOUGHTFUL DESIGN · EXCEPTIONAL CRAFT · MADE TO BE TREASURED</span>
  </div></div>
  <header class="site-header">
    <nav class="navbar navbar-expand-lg container-fluid header-inner">
      <a class="navbar-brand brand-mark" href="index.html" aria-label="Home">T<span>✦</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-auto header-links">
          <li class="nav-item"><a class="nav-link" href="collection.html?category=all">NEW ARRIVALS</a></li>
          <li class="nav-item"><a class="nav-link" href="collection.html?category=ring">RINGS</a></li>
          <li class="nav-item"><a class="nav-link" href="collection.html?category=earring">EARRINGS</a></li>
          <li class="nav-item"><a class="nav-link" href="collection.html?category=necklace">NECKLACES</a></li>
          <li class="nav-item"><a class="nav-link" href="collection.html?category=bracelet">BRACELETS</a></li>
          <li class="nav-item"><a class="nav-link" href="story.html">OUR STORY</a></li>
        </ul>
        <a class="outline-link" href="index.html">BACK TO HOME ↗</a>
      </div>
      <div class="nav-tools">
        <button class="icon-btn" id="wishlistButton" type="button" data-bs-toggle="offcanvas" data-bs-target="#wishlistDrawer" aria-label="Open wishlist">
          <i class="bi bi-heart"></i><span class="tool-count" id="wishlistCount">0</span>
        </button>
        <button class="icon-btn bag-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartDrawer" aria-label="Shopping bag">
          <i class="bi bi-bag"></i><span class="tool-count" id="cartCount">0</span>
        </button>
      </div>
    </nav>
  </header>
  <main>
    <section class="split-story">
      <div class="split-image" role="img" aria-label="Jewellery craftsmanship"></div>
      <div class="split-copy">
        <p class="eyebrow gold-text">OUR PROMISE</p>
        <h2>Crafted in India.<br>Designed for<br>everywhere.</h2>
        <blockquote>“A jewel should feel like<br>a memory you can wear.”</blockquote>
        <p>Thoughtful design, exceptional craftsmanship and a little everyday magic — made to become part of your story.</p>
        <a href="collection.html?category=all" class="dark-button">EXPLORE THE COLLECTION ↗</a>
      </div>
    </section>
    <section class="section container section-pad">
      <p class="eyebrow gold-text">MADE TO MEAN MORE</p>
      <h2>From sketch to heirloom.</h2>
      <div class="row g-3">
        <div class="col-6 col-md-3 process-step"><span>✎</span><h3>Thoughtfully imagined</h3><p>Every design starts with a feeling.</p></div>
        <div class="col-6 col-md-3 process-step"><span>♧</span><h3>Shaped by hand</h3><p>Made with patience and precision.</p></div>
        <div class="col-6 col-md-3 process-step"><span>✦</span><h3>Set for brilliance</h3><p>Details that catch the light.</p></div>
        <div class="col-6 col-md-3 process-step"><span>♧</span><h3>Yours for always</h3><p>Crafted to become a keepsake.</p></div>
      </div>
    </section>
  </main>
  <div class="offcanvas offcanvas-end cart-drawer wishlist-drawer" tabindex="-1" id="wishlistDrawer" aria-labelledby="wishlistTitle">
    <div class="offcanvas-header"><h2 class="offcanvas-title" id="wishlistTitle">Your wishlist <span id="wishlistHeadingCount">(0)</span></h2><button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
    <div class="offcanvas-body"><div id="wishlistItems"><p class="empty-cart">Your wishlist is waiting for something beautiful.</p></div></div>
  </div>
  <div class="offcanvas offcanvas-end cart-drawer" tabindex="-1" id="cartDrawer" aria-labelledby="cartTitle">
    <div class="offcanvas-header">
      <h2 class="offcanvas-title" id="cartTitle">Your bag <span id="cartHeadingCount">(0)</span></h2>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div id="cartItems"><p class="empty-cart">Your bag is waiting for something beautiful.</p></div>
      <div class="cart-bottom">
        <p>This is a demo store. No payment will be collected.</p>
        <button id="checkoutButton" class="dark-button w-100" type="button">CONTINUE TO CHECKOUT <i class="bi bi-arrow-right"></i></button>
      </div>
    </div>
  </div>
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="siteToast" class="toast" role="status" aria-live="polite" aria-atomic="true">
      <div class="toast-header"><strong class="me-auto">Jewellery Stories</strong><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button></div>
      <div class="toast-body" id="toastMessage">Added to your bag.</div>
    </div>
  </div>
  <footer class="site-footer"><div class="container footer-bottom">
    <a class="brand-mark" href="index.html">T<span>✦</span></a>
    <span>© 2026 Jewellery Stories. All rights reserved.</span>
  </div></footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
``

# FILE: product.html
``html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="View jewellery details and product information.">
  <title>Jewellery Details — Tanishq</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body class="product-page">
  <div class="announcement"><div class="announcement-track">
    <span>COMPLIMENTARY SHIPPING ON ORDERS ABOVE ₹25,000</span><b>•</b>
    <span>LIFETIME EXCHANGE PROMISE</span><b>•</b>
    <span>CERTIFIED GOLD &amp; DIAMONDS</span>
  </div></div>
  <header class="site-header">
    <nav class="navbar navbar-expand-lg container-fluid header-inner">
      <a class="navbar-brand brand-mark" href="index.html" aria-label="Home">T<span>✦</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-auto header-links">
          <li class="nav-item"><a class="nav-link" href="collection.html?category=all">NEW ARRIVALS</a></li>
          <li class="nav-item"><a class="nav-link" href="collection.html?category=ring">RINGS</a></li>
          <li class="nav-item"><a class="nav-link" href="collection.html?category=earring">EARRINGS</a></li>
          <li class="nav-item"><a class="nav-link" href="collection.html?category=necklace">NECKLACES</a></li>
          <li class="nav-item"><a class="nav-link" href="collection.html?category=bracelet">BRACELETS</a></li>
          <li class="nav-item"><a class="nav-link" href="story.html">OUR STORY</a></li>
        </ul>
        <a class="outline-link" href="index.html">BACK TO HOME ↗</a>
      </div>
      <div class="nav-tools">
        <button class="icon-btn" id="wishlistButton" type="button" data-bs-toggle="offcanvas" data-bs-target="#wishlistDrawer" aria-label="Open wishlist">
          <i class="bi bi-heart"></i><span class="tool-count" id="wishlistCount">0</span>
        </button>
        <button class="icon-btn bag-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartDrawer" aria-label="Shopping bag">
          <i class="bi bi-bag"></i><span class="tool-count" id="cartCount">0</span>
        </button>
      </div>
    </nav>
  </header>

  <main class="container product-detail-wrap">
    <nav class="product-breadcrumb" aria-label="Breadcrumb">
      <a href="index.html">HOME</a><span>/</span>
      <a id="detailCategoryLink" href="collection.html?category=all">JEWELLERY</a><span>/</span>
      <span id="detailBreadcrumbName">PRODUCT</span>
    </nav>

    <section class="product-detail-layout">
      <div class="detail-gallery">
        <div id="detailImage" class="detail-main-image" role="img" aria-label="Selected jewellery item"></div>
        <p class="detail-image-caption">A closer look at your selected piece</p>
      </div>

      <div class="detail-information">
        <button id="detailWishlist" class="detail-wishlist" type="button" aria-label="Add to wishlist" data-wishlist=""><i class="bi bi-heart"></i></button>
        <p class="eyebrow gold-text">MADE TO BE YOURS</p>
        <h1 id="detailName">Jewellery</h1>
        <p id="detailPrice" class="detail-price"></p>
        <p class="tax-note">Demo sample price · taxes included</p>

        <div class="detail-offer"><span>✧</span> Thoughtful design, made for everyday moments.</div>

        <form id="deliveryForm" class="delivery-check">
          <label for="pincode"><i class="bi bi-geo-alt"></i> Check delivery</label>
          <div class="delivery-input-row">
            <input id="pincode" inputmode="numeric" pattern="[0-9]{6}" maxlength="6" placeholder="Enter 6-digit pincode" aria-label="Six-digit delivery pincode" required>
            <button type="submit">CHECK</button>
          </div>
          <p id="deliveryMessage" aria-live="polite">Enter your pincode to check delivery availability.</p>
        </form>

        <p id="detailDescription" class="detail-material"></p>

        <label id="ringSizeGroup" class="ring-size-group" for="ringSize" hidden>
          <span>Ring size</span>
          <select id="ringSize">
            <option value="">Select size</option>
            <option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option>
          </select>
        </label>

        <div class="detail-actions">
          <button id="detailAddToBag" class="detail-primary" type="button" data-add="">ADD TO BAG</button>
          <button id="detailBuyNow" class="detail-secondary" type="button">BUY NOW</button>
        </div>
        <p id="detailActionMessage" class="detail-action-message" aria-live="polite">Demo store: checkout is not enabled.</p>
      </div>
    </section>

    <section class="detail-lower-grid">
      <div class="detail-specifications">
        <h2>Product details</h2>
        <dl>
          <div><dt>Product</dt><dd id="specProductName">Jewellery</dd></div>
          <div><dt>Category</dt><dd id="specCategory">Jewellery</dd></div>
          <div><dt>Style</dt><dd id="specStyle">Made for everyday moments</dd></div>
          <div><dt>Price</dt><dd id="specPrice"></dd></div>
        </dl>
        <p class="spec-note">This is a demonstration storefront. Product prices and descriptions are sample information.</p>
      </div>
      <aside class="detail-promise">
        <h2>Our promise</h2>
        <div><span>↻</span><p><strong>Lifetime exchange</strong><br>Support for the pieces you treasure.</p></div>
        <div><span>✧</span><p><strong>Considered craftsmanship</strong><br>Thoughtful details in every design.</p></div>
        <div><span>◇</span><p><strong>Complimentary shipping</strong><br>On orders above ₹25,000.</p></div>
      </aside>
    </section>

    <section class="similar-products">
      <h2>Discover more</h2>
      <p>Explore other designs from this collection.</p>
      <a id="moreFromCategory" class="outline-link" href="collection.html?category=all">VIEW COLLECTION ↗</a>
    </section>
  </main>

  <div class="offcanvas offcanvas-end cart-drawer wishlist-drawer" tabindex="-1" id="wishlistDrawer" aria-labelledby="wishlistTitle">
    <div class="offcanvas-header"><h2 class="offcanvas-title" id="wishlistTitle">Your wishlist <span id="wishlistHeadingCount">(0)</span></h2><button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
    <div class="offcanvas-body"><div id="wishlistItems"><p class="empty-cart">Your wishlist is waiting for something beautiful.</p></div></div>
  </div>
  <div class="offcanvas offcanvas-end cart-drawer" tabindex="-1" id="cartDrawer" aria-labelledby="cartTitle">
    <div class="offcanvas-header">
      <h2 class="offcanvas-title" id="cartTitle">Your bag <span id="cartHeadingCount">(0)</span></h2>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div id="cartItems"><p class="empty-cart">Your bag is waiting for something beautiful.</p></div>
      <div class="cart-bottom">
        <p>This is a demo store. No payment will be collected.</p>
        <button id="checkoutButton" class="dark-button w-100" type="button">CONTINUE TO CHECKOUT <i class="bi bi-arrow-right"></i></button>
      </div>
    </div>
  </div>
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="siteToast" class="toast" role="status" aria-live="polite" aria-atomic="true">
      <div class="toast-header"><strong class="me-auto">Jewellery Stories</strong><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button></div>
      <div class="toast-body" id="toastMessage">Added to your bag.</div>
    </div>
  </div>

  <footer class="site-footer"><div class="container footer-bottom">
    <a class="brand-mark" href="index.html">T<span>✦</span></a>
    <span>© 2026 Jewellery Stories. All rights reserved.</span>
  </div></footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="script.js"></script>
  <script src="product-detail.js"></script>
</body>
</html>
``

# FILE: styles.css
``css
:root {
  --cream: #f7f3ed;
  --paper: #eee7dc;
  --white: #fffdf9;
  --ink: #29251f;
  --muted: #82796e;
  --gold: #a98450;
  --gold-light: #c9ad80;
  --line: #ded5c8;
  --dark: #25241f;
  --serif: "Cormorant Garamond", Georgia, serif;
  --sans: "DM Sans", Arial, sans-serif;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 90px; }
body {
  margin: 0;
  background: var(--cream);
  color: var(--ink);
  font: 14px/1.7 var(--sans);
  overflow-x: hidden;
}
button, input, select { font: inherit; }
button, a { -webkit-tap-highlight-color: transparent; }
a { color: inherit; text-decoration: none; }
button { color: inherit; }
::selection { background: var(--gold-light); color: var(--ink); }

h1, h2, h3, blockquote { font-family: var(--serif); font-weight: 400; }
h2 { margin: 0 0 30px; font-size: clamp(38px, 5vw, 62px); line-height: 1.03; letter-spacing: -1px; }
h3 { font-size: 25px; }
.eyebrow { margin: 0 0 18px; font-size: 10px; font-weight: 600; letter-spacing: 2.5px; }
.gold-text { color: var(--gold); }
.section { max-width: 1500px; }
.section-pad { padding-top: 90px; padding-bottom: 90px; }

/* Announcement and navigation */
.announcement {
  height: 31px; overflow: hidden; display: flex; align-items: center;
  background: var(--dark); color: #f6eee1;
}
.announcement-track {
  display: flex; align-items: center; justify-content: space-around;
  gap: 28px; min-width: max-content; width: 100%; padding: 0 20px;
  font-size: 9px; letter-spacing: 1.3px;
}
.announcement-track b { color: var(--gold-light); }

.site-header {
  position: sticky; top: 0; z-index: 1000;
  background: #f7f3edf5; border-bottom: 1px solid #29251f18;
  backdrop-filter: blur(12px);
}
.header-inner { min-height: 76px; padding: 0 5%; }
.brand-mark {
  display: inline-flex; align-items: center; justify-content: center;
  font: 600 43px/1 var(--serif); letter-spacing: -5px;
}
.brand-mark span { margin-left: 4px; color: var(--gold); font: 12px var(--sans); letter-spacing: 0; }
.header-links { align-items: center; gap: clamp(8px, 1.5vw, 25px); }
.header-links .nav-link {
  padding: 26px 0 !important; color: var(--ink);
  font-size: 10px; font-weight: 500; letter-spacing: 1px;
}
.header-links .nav-link:hover { color: var(--gold); }
.nav-tools { display: flex; align-items: center; gap: 19px; margin-left: 20px; }
.icon-btn {
  position: relative; display: inline-flex; align-items: center; justify-content: center;
  padding: 7px 0; border: 0; background: transparent; font-size: 19px; cursor: pointer;
}
.icon-btn:hover { color: var(--gold); }
.tool-count {
  position: absolute; top: 0; right: -10px; display: grid; place-items: center;
  width: 15px; height: 15px; border-radius: 50%; background: var(--gold);
  color: white; font-size: 9px;
}
.navbar-toggler { border: 0; border-radius: 0; box-shadow: none !important; }

/* Hero */
.hero {
  position: relative; min-height: 620px; display: grid;
  grid-template-columns: 48% 52%; overflow: hidden; background: #e9dfd1;
}
.hero-reference-screen {
  position: absolute; inset: 0;
  background: linear-gradient(90deg, #eee5d9 0%, #eee5d9 34%, #eee5d980 52%, transparent 75%),
    radial-gradient(ellipse at 80% 45%, #c8ad8b, #e5d5c0 36%, #bda386);
}
.hero-copy { position: relative; z-index: 3; align-self: center; padding: 65px 0 80px 12%; }
.hero-copy h1 { margin: 0 0 22px; font-size: clamp(65px, 9vw, 125px); line-height: .82; letter-spacing: -4px; }
.hero-copy h1 em { color: #987449; }
.hero-sub { margin: 28px 0; color: #625749; font: 23px/1.25 var(--serif); }
.pill-link, .outline-link, .dark-button, .moonlit-cta {
  display: inline-flex; align-items: center; justify-content: space-between; gap: 20px;
  padding: 13px 18px; border: 1px solid var(--ink); background: transparent;
  font-size: 10px; font-weight: 600; letter-spacing: 1px; cursor: pointer;
  transition: background .2s, color .2s;
}
.pill-link:hover, .outline-link:hover { background: var(--ink); color: white; }
.hero-foot { display: flex; justify-content: space-between; width: min(350px, 85%); margin-top: 55px; color: #665a4a; font-size: 9px; letter-spacing: 1.4px; }
.hero-image { position: absolute; z-index: 2; background-position: center; background-size: cover; }
.hero-image-one {
  top: 0; right: 0; width: 53%; height: 100%;
  background-image: url("https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=85");
}
.hero-image-two {
  right: 37%; bottom: 9%; width: 18%; height: 35%; border: 7px solid #eee5d9;
  background-image: url("https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=600&q=85");
}
.hero-controls { position: absolute; z-index: 5; right: 5%; bottom: 25px; display: flex; gap: 8px; }
.hero-controls button {
  display: grid; place-items: center; width: 42px; height: 42px;
  border: 1px solid #ffffffa0; background: #ffffff50; cursor: pointer;
}
.hero-controls button:hover { background: white; }

/* Service strip and collection tiles */
.service-strip { padding: 24px 5%; border-bottom: 1px solid var(--line); background: var(--white); }
.service { display: flex; flex-direction: column; align-items: center; padding: 10px 5px; }
.service > span { color: var(--gold); font-size: 22px; }
.service strong { margin-top: 5px; font-size: 11px; font-weight: 500; }
.service small { color: var(--muted); font-size: 10px; }

.signature-grid {
  display: grid; grid-template-columns: 1.25fr 1fr 1fr;
  grid-template-rows: 235px 235px; gap: 15px;
}
.signature-card, .lookbook-item {
  position: relative; display: flex; align-items: flex-end; overflow: hidden;
  background-color: #e6d9c7; background-position: center; background-size: cover;
}
.signature-card::before, .lookbook-item::before {
  position: absolute; inset: 0; content: ""; background: linear-gradient(0deg, #1e1a1680, transparent 65%);
  transition: background .2s;
}
.signature-card:hover::before, .lookbook-item:hover::before { background: linear-gradient(0deg, #1e1a16a8, #1e1a160a); }
.signature-card span, .lookbook-item > span {
  position: relative; z-index: 1; width: 100%; padding: 20px; color: white; font: 25px var(--serif);
}
.signature-card span { display: flex; justify-content: space-between; }
.signature-large { grid-row: span 2; }
.img-necklace, .look-layer {
  background-image: url("https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80");
}
.img-ring, .look-solitaire {
  background-image: url("https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80");
}
.img-earrings, .look-gold {
  background-image: url("https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80");
}
.img-bracelet, .look-gem, .look-ice {
  background-image: url("assets/bracelets/bracelet-06.jpg");
}
.img-pendant {
  background-image: url("https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80");
}
.category-ribbon { padding: 18px 10px; background: var(--dark); color: #e5d6c2; font-size: 10px; letter-spacing: 2px; text-align: center; }

/* Product catalogue */
.section-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; margin-bottom: 28px; }
.section-heading h2 { margin-bottom: 0; }
.outline-link { flex-shrink: 0; margin-bottom: 4px; }

.catalog-controls { display: flex; flex-wrap: wrap; align-items: flex-end; gap: 12px; margin-bottom: 25px; }
.catalog-search {
  display: flex; flex: 1 1 220px; align-items: center; gap: 10px; min-width: 180px;
  padding: 0 13px; border: 1px solid var(--line); background: var(--white);
}
.catalog-search i { color: var(--muted); }
.catalog-search input { width: 100%; min-width: 0; padding: 12px 0; border: 0; outline: none; background: transparent; font-size: 12px; }
.catalog-select { display: flex; flex: 0 1 170px; flex-direction: column; gap: 3px; min-width: 130px; }
.catalog-select > span { color: var(--muted); font-size: 9px; letter-spacing: 1px; text-transform: uppercase; }
.catalog-select select {
  width: 100%; padding: 11px 9px; border: 1px solid var(--line); border-radius: 0;
  background: var(--white); color: var(--ink); font-size: 11px;
}
.catalog-clear { padding: 11px 15px; border: 1px solid var(--ink); background: transparent; font-size: 10px; letter-spacing: 1px; cursor: pointer; }
.catalog-clear:hover { background: var(--ink); color: white; }
.catalog-result-count { flex-basis: 100%; margin: 0; color: var(--muted); font-size: 11px; }
.product-grid { align-items: stretch; }
.product-item { min-width: 0; }
.product-item[hidden] { display: none !important; }
.product-card { height: 100%; min-width: 0; }
.product-image {
  position: relative; width: 100%; aspect-ratio: .82; min-height: 180px;
  overflow: hidden; background-color: #e8dfd2; background-position: center; background-size: cover;
}
.product-ring { background-image: url("https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=85"); }
.product-ring-halo { background-image: url("https://images.unsplash.com/photo-1562249003-f713a2af1096?auto=format&fit=crop&w=700&q=85"); }
.product-ring-gold { background-image: url("https://images.unsplash.com/photo-1567523977592-7959bc5df51e?auto=format&fit=crop&w=700&q=85"); }
.product-ring-band { background-image: url("https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&fit=crop&w=700&q=85"); }
.product-ring-emerald { background-image: url("https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&fit=crop&w=700&q=85"); }
.product-neck { background-image: url("https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=85"); }
.product-blue { background-image: url("https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=85"); }
.product-diamond { background-image: url("https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=85"); }
.heart {
  position: absolute; z-index: 2; top: 12px; right: 12px; display: grid; place-items: center;
  width: 35px; height: 35px; border: 0; border-radius: 50%; background: #fffdf9e8; font-size: 17px; cursor: pointer;
}
.heart:hover, .heart.is-active { color: #a64b48; }
.product-card > p { margin: 16px 0 3px; font: 23px/1.15 var(--serif); }
.product-card > small { display: block; color: var(--muted); font-size: 9px; letter-spacing: 1.3px; }
.product-card > .product-price { margin: 7px 0 0; color: var(--ink); font: 600 14px/1.4 var(--sans); letter-spacing: .2px; }
.add-to-bag {
  display: flex; justify-content: space-between; gap: 5px; width: 100%; margin-top: 15px;
  padding: 11px 0; border: 0; border-top: 1px solid var(--line); background: transparent;
  font-size: 9px; font-weight: 600; letter-spacing: 1px; cursor: pointer;
}
.add-to-bag:hover { color: var(--gold); }
.catalog-empty { padding: 25px 10px; color: var(--muted); text-align: center; }
.catalog-empty[hidden] { display: none !important; }

/* Editorial banner and story sections */
.banner-light {
  display: flex; align-items: center; min-height: 340px; margin-top: 80px;
  background: linear-gradient(90deg, #e5d6c3 0%, #e5d6c3ed 35%, #e5d6c340 70%),
    url("https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1400&q=85") center/cover;
}
.banner-light-copy { max-width: 430px; padding: 40px; }
.banner-light-copy h2 { margin-bottom: 15px; font-size: clamp(52px, 6vw, 80px); }
.banner-description { max-width: 260px; color: #625749; font: 19px var(--serif); }
.banner-cta { display: inline-block; margin-top: 12px; padding-bottom: 7px; border-bottom: 1px solid var(--ink); font-size: 10px; letter-spacing: 1.5px; }

.split-story { display: grid; grid-template-columns: 1fr 1fr; min-height: 560px; background: #e9dfd1; }
.split-image { min-height: 450px; background: url("https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1100&q=85") center/cover; }
.split-copy { align-self: center; max-width: 580px; padding: 60px clamp(35px, 7vw, 100px); }
.split-copy h2 { margin-bottom: 30px; font-size: clamp(48px, 5.5vw, 75px); }
.split-copy blockquote { margin: 0 0 20px; color: #826746; font-size: 28px; line-height: 1.2; }
.split-copy > p:not(.eyebrow) { max-width: 350px; color: #6d6256; font-size: 12px; }
.dark-button { margin-top: 15px; border-color: var(--dark); background: var(--dark); color: white; }
.dark-button:hover { border-color: var(--gold); background: var(--gold); color: white; }

.dark-feature { padding: 90px 6%; background: #24241f; color: #f7f1e8; }
.dark-feature-inner { position: relative; display: grid; grid-template-columns: .85fr 1.15fr; align-items: center; max-width: 1250px; min-height: 460px; margin: auto; }
.dark-feature-copy { position: relative; z-index: 2; padding: 30px 20px 30px 0; }
.dark-feature-copy h2 { font-size: clamp(48px, 6vw, 78px); }
.dark-feature-copy > p:not(.eyebrow) { max-width: 350px; color: #c4b9a9; font-size: 12px; line-height: 2; }
.moonlit-cta { margin-top: 22px; border-color: var(--gold-light); color: var(--gold-light); }
.moonlit-cta:hover { background: var(--gold-light); color: var(--dark); }
.dark-feature-image { min-height: 430px; background: url("https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1100&q=85") center/cover; }
.floating-note { position: absolute; right: -15px; bottom: 20px; display: flex; flex-direction: column; gap: 5px; min-width: 155px; padding: 20px; background: var(--cream); color: var(--ink); }
.floating-note strong { font: 24px var(--serif); }
.note-number { color: var(--gold); font: 38px var(--serif); }
.floating-note > span:last-child { color: var(--muted); font-size: 10px; }

.lookbook-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 260px; gap: 14px; }
.lookbook-item > span { font-size: 24px; }
.process { margin-top: 90px; padding-top: 60px; border-top: 1px solid var(--line); }
.process-step { padding: 20px; }
.process-step > span { color: var(--gold); font-size: 30px; }
.process-step h3 { margin: 15px 0 8px; font-size: 25px; }
.process-step p { max-width: 210px; color: var(--muted); font-size: 12px; }

.testimonials { padding: 85px 0 95px; background: #eee7dc; }
.quote-card { height: 100%; padding: 28px; border: 1px solid #ded3c3; background: #f7f3ed; }
.quote-card > div { color: var(--gold); letter-spacing: 4px; }
.quote-card p { margin: 22px 0; font: 24px/1.4 var(--serif); }
.quote-card small { color: var(--muted); font-size: 9px; letter-spacing: 1.3px; }

.social-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; }
.social-img { aspect-ratio: .8; background-color: var(--paper); background-position: center; background-size: cover; transition: opacity .2s; }
.social-img:hover { opacity: .75; }

.values-section { border-top: 1px solid var(--line); }
.values-grid { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.value { padding: 28px 22px; border-right: 1px solid var(--line); }
.value:last-child { border-right: 0; }
.value > span { color: var(--gold); font-size: 25px; }
.value h3 { margin: 15px 0 8px; font-size: 24px; }
.value p { margin-bottom: 0; color: var(--muted); font-size: 11px; }

.off-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; padding: 80px 10%; background: #dcd0bf; }
.off-grid h2 { margin-bottom: 15px; font-size: clamp(55px, 7vw, 90px); }
.off-grid h2 em { color: #987449; }
.off-grid > div > p:last-child { color: #65594c; }
.off-grid-icons { display: grid; grid-template-columns: 1fr 1fr; gap: 35px; }
.off-grid-icons > span { display: flex; flex-direction: column; gap: 12px; color: var(--gold); font-size: 28px; }
.off-grid-icons small { color: var(--ink); font-size: 11px; }

/* Newsletter and footer */
.newsletter { display: grid; grid-template-columns: 1fr minmax(240px, .8fr); gap: 15px 50px; align-items: center; padding-top: 80px; padding-bottom: 80px; }
.newsletter h2 { margin-bottom: 12px; }
.newsletter > div > p:last-child { color: var(--muted); font-size: 12px; }
.newsletter-form { display: flex; border-bottom: 1px solid var(--ink); }
.newsletter-form input { flex: 1; width: 100%; min-width: 0; padding: 15px 0; border: 0; outline: 0; background: transparent; font-size: 12px; }
.newsletter-form button { padding: 0 10px; border: 0; background: transparent; font-size: 24px; cursor: pointer; }
.form-message { grid-column: 2; margin: 0; color: var(--gold); font-size: 12px; }

.site-footer { padding: 60px 0 20px; background: #25241f; color: #f4ede3; }
.footer-brand .brand-mark { margin-bottom: 20px; }
.footer-brand > p { max-width: 280px; color: #c2b8a9; font: 21px/1.45 var(--serif); }
.social-links { display: flex; gap: 20px; margin-top: 25px; }
.social-links a { color: var(--gold-light); font-size: 20px; }
.site-footer h3 { margin: 10px 0 20px; font: 600 10px var(--sans); letter-spacing: 1.5px; }
.site-footer .col-6 > a { display: block; width: fit-content; margin: 11px 0; color: #c9c0b4; font-size: 11px; }
.site-footer .col-6 > a:hover, .social-links a:hover { color: var(--gold-light); }
.footer-bottom { display: flex; justify-content: space-between; gap: 15px; margin-top: 55px; padding-top: 20px; border-top: 1px solid #ffffff22; color: #a89f92; font-size: 10px; }

/* Keep the collection heading close to the top of category pages. */
.collection-page #edit.section-pad { padding-top: 28px; }

/* Modal, search and cart */
.luxury-modal { padding: 15px; border: 1px solid var(--line); border-radius: 0; background: var(--cream); }
.luxury-modal .modal-header { padding: 20px 15px; border-bottom: 1px solid var(--line); }
.luxury-modal .modal-title { font: 36px var(--serif); }
.luxury-modal .modal-body { padding: 25px 15px; }
.luxury-modal .modal-body > p { color: var(--muted); font-size: 12px; }
.search-form { display: flex; align-items: center; gap: 12px; border-bottom: 1px solid var(--ink); }
.search-form input { flex: 1; min-width: 0; padding: 15px 0; border: 0; outline: 0; background: transparent; }
.search-form button { padding: 10px; border: 0; background: transparent; font-size: 10px; font-weight: 600; letter-spacing: 1px; cursor: pointer; }
.interaction-message { margin-top: 15px; color: var(--gold); font-size: 12px; }
#accountForm .form-control { border: 1px solid var(--line); border-radius: 0; background: var(--white); font-size: 13px; }
#accountForm .dark-button { width: 100%; justify-content: center; }

.cart-drawer { width: min(440px, 100%); background: var(--cream); }
.cart-drawer .offcanvas-title { font: 33px var(--serif); }
.cart-drawer .offcanvas-header { padding: 25px; border-bottom: 1px solid var(--line); }
.cart-drawer .offcanvas-body { display: flex; flex-direction: column; padding: 25px; }
.empty-cart { padding: 35px 0; color: var(--muted); font: 24px var(--serif); text-align: center; }
.cart-line { display: flex; justify-content: space-between; gap: 15px; padding: 18px 0; border-bottom: 1px solid var(--line); }
.cart-line-name { font: 20px var(--serif); }
.cart-line small { display: block; margin-top: 4px; color: var(--muted); font-size: 11px; }
.cart-line-remove { align-self: center; border: 0; background: transparent; color: var(--muted); font-size: 11px; text-decoration: underline; cursor: pointer; }
.cart-total { margin-top: 18px; padding-top: 15px; border-top: 1px solid var(--line); font-weight: 600; text-align: right; }
.cart-bottom { margin-top: auto; padding-top: 25px; }
.cart-bottom > p { color: var(--muted); font-size: 11px; }
.toast { border: 1px solid var(--line); border-radius: 0; background: var(--cream); color: var(--ink); }
.toast-header { background: var(--paper); }
.back-to-top { position: fixed; right: 22px; bottom: 22px; z-index: 900; display: none; place-items: center; width: 42px; height: 42px; border: 1px solid var(--line); background: var(--cream); cursor: pointer; }
.back-to-top.visible { display: grid; }

/* Scroll reveal */
.reveal { opacity: 0; transform: translateY(16px); transition: opacity .5s ease, transform .5s ease; }
.reveal.revealed { opacity: 1; transform: translateY(0); }

/* Responsive layout */
@media (max-width: 991px) {
  .header-inner { padding: 12px 5%; }
  .navbar-collapse { padding: 12px 0 18px; }
  .header-links { align-items: stretch; gap: 0; }
  .header-links .nav-link { padding: 12px 0 !important; }
  .nav-tools { justify-content: flex-start; margin: 15px 0 0; }
  .hero { min-height: 560px; }
  .hero-copy { padding-left: 8%; }
  .hero-image-two { right: 34%; width: 21%; }
  .signature-grid { grid-template-rows: 200px 200px; }
  .split-story { min-height: 500px; }
  .split-copy { padding: 40px; }
  .lookbook-grid { grid-auto-rows: 220px; }
  .social-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 767px) {
  .section-pad { padding-top: 60px; padding-bottom: 60px; }
  h2 { font-size: 43px; }
  .announcement-track { justify-content: flex-start; gap: 20px; animation: announcement-scroll 28s linear infinite; }
  @keyframes announcement-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  .hero { display: block; min-height: 650px; }
  .hero-reference-screen { background: linear-gradient(180deg, #eee5d9 0%, #eee5d9 43%, #d9c8b1 100%); }
  .hero-copy { position: relative; z-index: 3; padding: 55px 8% 25px; }
  .hero-copy h1 { font-size: clamp(65px, 15vw, 95px); }
  .hero-sub { margin: 20px 0; font-size: 21px; }
  .hero-foot { margin-top: 28px; }
  .hero-image-one { top: auto; bottom: 0; width: 68%; height: 43%; }
  .hero-image-two { right: 56%; bottom: 9%; width: 28%; height: 25%; border-width: 4px; }
  .hero-controls { right: 5%; bottom: 15px; }

  .service-strip { padding: 18px 3%; }
  .signature-grid { grid-template-columns: 1fr 1fr; grid-template-rows: 270px 185px 185px; gap: 10px; }
  .signature-large { grid-column: span 2; grid-row: span 1; }
  .signature-card span { padding: 13px; font-size: 22px; }
  .category-ribbon { font-size: 9px; line-height: 2.2; }

  .section-heading { align-items: flex-start; }
  .section-heading h2 { font-size: 42px; }
  .catalog-controls { gap: 10px; }
  .catalog-search { flex: 1 1 100%; }
  .catalog-select { flex: 1 1 40%; min-width: 0; }
  .catalog-clear { flex: 1; }
  .product-image { min-height: 145px; }
  .product-card > p { font-size: 19px; }
  .product-card > small { font-size: 8px; }
  .heart { top: 8px; right: 8px; width: 31px; height: 31px; }
  .add-to-bag { font-size: 8px; }
  .banner-light { min-height: 290px; margin-top: 50px; }
  .banner-light-copy { padding: 25px; }
  .banner-light-copy h2 { font-size: 55px; }

  .split-story { grid-template-columns: 1fr; }
  .split-image { min-height: 330px; }
  .split-copy { padding: 50px 8%; }
  .dark-feature { padding: 60px 7%; }
  .dark-feature-inner { grid-template-columns: 1fr; }
  .dark-feature-copy { padding: 0 0 30px; }
  .dark-feature-image { min-height: 330px; }
  .floating-note { right: -5px; bottom: -20px; }

  .lookbook-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 200px; gap: 10px; }
  .lookbook-item > span { padding: 13px; font-size: 20px; }
  .process { margin-top: 60px; padding-top: 40px; }
  .process-step { padding: 12px 8px; }
  .process-step h3 { font-size: 22px; }
  .testimonials { padding: 60px 0; }
  .quote-card { padding: 23px; }
  .social-grid { grid-template-columns: repeat(3, 1fr); gap: 7px; }

  .value { padding: 20px 12px; border-bottom: 1px solid var(--line); }
  .value:nth-child(2) { border-right: 0; }
  .value h3 { font-size: 21px; }
  .off-grid { grid-template-columns: 1fr; gap: 30px; padding: 60px 8%; }
  .off-grid-icons { gap: 24px; }

  .newsletter { grid-template-columns: 1fr; gap: 20px; padding-top: 60px; padding-bottom: 60px; }
  .form-message { grid-column: 1; }
  .footer-bottom { flex-direction: column; gap: 7px; margin-top: 35px; }
}

@media (max-width: 380px) {
  .hero-copy h1 { font-size: 62px; }
  .hero { min-height: 620px; }
  .catalog-select { flex-basis: 100%; }
  .product-card > p { font-size: 17px; }
  .lookbook-grid { grid-auto-rows: 175px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
  .reveal { opacity: 1; transform: none; }
}

/* Individual jewellery product page */
.detail-card-clickable { cursor: pointer; }
.product-detail-wrap { max-width: 1420px; padding-top: 24px; padding-bottom: 80px; }
.product-breadcrumb { display: flex; flex-wrap: wrap; gap: 11px; margin: 0 0 25px; color: var(--muted); font-size: 10px; letter-spacing: 1px; }
.product-breadcrumb a:hover { color: var(--gold); }
.product-detail-layout { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(360px, .95fr); gap: clamp(35px, 6vw, 95px); align-items: start; }
.detail-gallery { min-width: 0; }
.detail-main-image { min-height: 580px; background-color: #f0efed; background-position: center; background-repeat: no-repeat; background-size: contain; }
.detail-image-caption { margin: 10px 0 0; color: var(--muted); font-size: 10px; text-align: center; }
.detail-information { position: relative; padding: 24px 0; }
.detail-information h1 { max-width: calc(100% - 48px); margin: 0 0 10px; font-size: clamp(38px, 4vw, 54px); line-height: 1.02; }
.detail-wishlist { position: absolute; top: 14px; right: 0; display: grid; width: 42px; height: 42px; place-items: center; border: 1px solid var(--line); border-radius: 50%; background: var(--white); font-size: 19px; cursor: pointer; }
.detail-wishlist.is-active { color: #a64242; }
.detail-price { margin: 0; font: 600 34px/1.25 var(--serif); }
.tax-note { margin: 0 0 16px; color: var(--muted); font-size: 11px; }
.detail-offer { margin: 18px 0; padding: 14px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); color: #61594f; font-size: 13px; }
.detail-offer span { margin-right: 8px; color: var(--gold); }
.delivery-check { margin: 18px 0; padding: 18px; background: var(--white); }
.delivery-check > label { display: block; margin-bottom: 10px; font-size: 13px; }
.delivery-check > label i { margin-right: 7px; }
.delivery-input-row { display: flex; border: 1px solid var(--line); }
.delivery-input-row input { flex: 1; min-width: 0; padding: 12px; border: 0; outline: 0; background: transparent; }
.delivery-input-row button { padding: 0 18px; border: 0; border-left: 1px solid var(--line); background: transparent; color: var(--gold); font-size: 10px; letter-spacing: 1px; cursor: pointer; }
.delivery-check > p { margin: 10px 0 0; color: var(--muted); font-size: 11px; }
.detail-material { margin: 20px 0; color: #625749; font-size: 12px; font-weight: 600; letter-spacing: .4px; }
.ring-size-group { display: flex; flex-wrap: wrap; align-items: center; gap: 14px; margin: 20px 0; color: var(--muted); font-size: 12px; }
.ring-size-group select { min-width: 150px; padding: 10px 12px; border: 1px solid var(--line); background: var(--white); }
.ring-size-group[hidden] { display: none; }
.detail-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 22px; }
.detail-actions button { min-height: 52px; padding: 12px; font-size: 11px; font-weight: 600; letter-spacing: 1px; cursor: pointer; }
.detail-primary { border: 1px solid var(--ink); background: var(--ink); color: white; }
.detail-secondary { border: 1px solid var(--gold); background: transparent; color: var(--gold); }
.detail-primary:hover { background: #51463a; }
.detail-secondary:hover { background: var(--paper); }
.detail-action-message { min-height: 20px; margin: 10px 0; color: var(--muted); font-size: 11px; }
.detail-lower-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 20px; margin-top: 65px; }
.detail-specifications, .detail-promise { padding: 24px; border: 1px solid var(--line); background: var(--white); }
.detail-specifications h2, .detail-promise h2, .similar-products h2 { margin-bottom: 20px; font-size: 32px; }
.detail-specifications dl { margin: 0; }
.detail-specifications dl > div { display: flex; justify-content: space-between; gap: 20px; padding: 12px 0; border-bottom: 1px solid var(--line); font-size: 12px; }
.detail-specifications dt { color: var(--muted); font-weight: 400; }
.detail-specifications dd { margin: 0; text-align: right; }
.spec-note { margin: 16px 0 0; color: var(--muted); font-size: 10px; }
.detail-promise > div { display: flex; gap: 13px; align-items: flex-start; padding: 12px 0; border-bottom: 1px solid var(--line); }
.detail-promise > div:last-child { border-bottom: 0; }
.detail-promise > div > span { color: var(--gold); font-size: 20px; }
.detail-promise p { margin: 0; color: var(--muted); font-size: 11px; }
.detail-promise strong { color: var(--ink); font-size: 12px; }
.similar-products { margin-top: 60px; padding: 32px; background: var(--paper); text-align: center; }
.similar-products p { color: var(--muted); font-size: 12px; }

.wishlist-line { display: flex; align-items: center; gap: 14px; padding: 14px 0; border-bottom: 1px solid var(--line); }
.wishlist-preview { width: 68px; height: 76px; flex: 0 0 68px; background-color: var(--paper); background-position: center; background-repeat: no-repeat; background-size: contain; }
.wishlist-line-info { flex: 1; min-width: 0; }
.wishlist-line-name { display: block; color: var(--ink); font: 20px/1.15 var(--serif); text-decoration: none; }
.wishlist-line-price { display: block; margin-top: 6px; color: var(--muted); font-size: 11px; }
.wishlist-remove { padding: 6px 0 6px 8px; border: 0; background: none; color: var(--muted); font-size: 9px; letter-spacing: .08em; }
.wishlist-remove:hover { color: var(--ink); }

@media (max-width: 767px) {
  .product-detail-wrap { padding-top: 16px; padding-bottom: 50px; }
  .product-detail-layout, .detail-lower-grid { grid-template-columns: 1fr; }
  .product-detail-layout { gap: 10px; }
  .detail-main-image { min-height: min(105vw, 480px); }
  .detail-information { padding-top: 10px; }
  .detail-information h1 { font-size: 40px; }
  .detail-lower-grid { margin-top: 35px; }
  .similar-products { margin-top: 35px; padding: 25px 16px; }
}
``

# FILE: script.js
``js
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
    { length: 24 },
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
      count: 24,
      prefixes: ["Dainty Cluster", "Colorful Gemstone", "Geometric Gold", "Heart Charm", "Diamond Tennis", "Pearl Accent"],
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
        if (image) image.style.backgroundImage = `url("${braceletPhotos[index % braceletPhotos.length]}")`;
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

  const heroImageOne = $(".hero-image-one");
  const heroImageTwo = $(".hero-image-two");
  const heroPrev = $(".hero-prev");
  const heroNext = $(".hero-next");
  const heroCounter = $("#heroCounter");

  const heroSlides = [
    {
      first: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=85",
      second: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=600&q=85"
    },
    {
      first: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
      second: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=85"
    },
    {
      first: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85",
      second: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=85"
    },
    {
      first: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85",
      second: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=85"
    }
  ];

  let currentSlide = 0;

  function renderHeroSlide() {
    const slide = heroSlides[currentSlide];

    if (heroImageOne) {
      heroImageOne.style.backgroundImage =
        `url("${slide.first}")`;
    }

    if (heroImageTwo) {
      heroImageTwo.style.backgroundImage =
        `url("${slide.second}")`;
    }

    if (heroCounter) {
      heroCounter.textContent =
        `${String(currentSlide + 1).padStart(2, "0")} / ${
          String(heroSlides.length).padStart(2, "0")
        }`;
    }
  }

  if (heroPrev) {
    heroPrev.addEventListener("click", () => {
      currentSlide =
        (currentSlide - 1 + heroSlides.length) %
        heroSlides.length;

      renderHeroSlide();
    });
  }

  if (heroNext) {
    heroNext.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % heroSlides.length;
      renderHeroSlide();
    });
  }

  renderHeroSlide();

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
``

# FILE: product-detail.js
``js
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
``

# FILE: product-search.js
``js

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
``

# FILE: README.md
``markdown
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
``

