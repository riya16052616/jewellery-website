(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const nav = $('#mainNav');
  const wishlist = new Set();
  const cart = new Map();

  // Mobile menu: Bootstrap provides the slide-down transition; close after navigation.
  $$('#mainNav a[href^="#"]:not(.dropdown-toggle)').forEach(link => link.addEventListener('click', () => {
    if (nav?.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(nav).hide();
  }));

  // Header icons and product controls.
  const toast = bootstrap.Toast.getOrCreateInstance($('#siteToast'), { delay: 2600 });
  const notify = message => { $('#toastMessage').textContent = message; toast.show(); };
  const updateWishlist = () => {
    $('#wishlistCount').textContent = wishlist.size;
    $$('.heart[data-wishlist]').forEach(button => {
      const active = wishlist.has(button.dataset.wishlist);
      button.classList.toggle('is-active', active);
      button.innerHTML = `<i class="bi ${active ? 'bi-heart-fill' : 'bi-heart'}"></i>`;
      button.setAttribute('aria-pressed', String(active));
    });
    $('#wishlistButton').classList.toggle('has-items', wishlist.size > 0);
  };
  $$('[data-wishlist]').forEach(button => button.addEventListener('click', event => {
    event.preventDefault(); event.stopPropagation();
    const name = button.dataset.wishlist;
    if (wishlist.has(name)) { wishlist.delete(name); notify(`${name} removed from your wishlist.`); }
    else { wishlist.add(name); notify(`${name} saved to your wishlist.`); }
    updateWishlist();
  }));
  $('#wishlistButton').addEventListener('click', () => {
    if (!wishlist.size) return notify('Tap a heart on any piece to save it here.');
    notify(`Your wishlist: ${[...wishlist].join(', ')}.`);
  });

  const updateCart = () => {
    const count = [...cart.values()].reduce((sum, item) => sum + item.qty, 0);
    $('#cartCount').textContent = count;
    $('#cartHeadingCount').textContent = `(${count})`;
    const holder = $('#cartItems'); holder.replaceChildren();
    if (!cart.size) {
      const empty = document.createElement('p'); empty.className = 'empty-cart'; empty.textContent = 'Your bag is waiting for something beautiful.'; holder.append(empty); return;
    }
    cart.forEach((item, name) => {
      const row = document.createElement('div'); row.className = 'cart-line';
      const detail = document.createElement('div'); detail.className = 'cart-line-detail';
      const title = document.createElement('strong'); title.textContent = name;
      const quantity = document.createElement('span'); quantity.textContent = `Quantity: ${item.qty}`;
      detail.append(title, quantity);
      const remove = document.createElement('button'); remove.className = 'remove-item'; remove.type = 'button'; remove.setAttribute('aria-label', `Remove ${name}`); remove.innerHTML = '<i class="bi bi-trash3"></i>';
      remove.addEventListener('click', () => { cart.delete(name); updateCart(); notify(`${name} removed from your bag.`); });
      row.append(detail, remove); holder.append(row);
    });
  };
  $$('[data-add]').forEach(button => button.addEventListener('click', event => {
    event.preventDefault();
    const name = button.dataset.add; const item = cart.get(name) || { qty: 0 };
    item.qty += 1; cart.set(name, item); updateCart(); notify(`${name} added to your bag.`);
  }));
  $('#checkoutButton').addEventListener('click', () => notify(cart.size ? 'Checkout is a demo. Connect your store backend to accept orders.' : 'Your bag is empty — find a piece you love first.'));

  // Search sends users to matching sections; this demo does not query a product database.
  $('#searchForm').addEventListener('submit', event => {
    event.preventDefault();
    const term = $('#searchInput').value.trim();
    if (!term) { $('#searchInput').focus(); return; }
    const normalized = term.toLowerCase();
    const destination = /ring|diamond|gold|pendant|necklace|earring|jewel/.test(normalized) ? '#edit' : /story|craft|made|brand/.test(normalized) ? '#craft' : '#collections';
    $('#searchMessage').textContent = `Showing the closest section for “${term}”.`;
    bootstrap.Modal.getOrCreateInstance($('#searchModal')).hide();
    setTimeout(() => document.querySelector(destination)?.scrollIntoView({ behavior: 'smooth' }), 180);
  });
  $('#accountForm').addEventListener('submit', event => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    $('#accountMessage').textContent = 'Demo sign-in form validated. Connect authentication to enable real accounts.';
  });

  // Hero slide controls rotate editorial imagery and update the slide counter.
  const hero = $('.hero');
  const heroSlides = [
    { one: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1100&q=85', two: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=80' },
    { one: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1100&q=85', two: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80' },
    { one: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1100&q=85', two: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=1000&q=80' },
    { one: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1100&q=85', two: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1000&q=80' }
  ];
  let slideIndex = 0;
  const renderSlide = direction => {
    hero.classList.add('is-interactive-slide');
    slideIndex = (slideIndex + direction + heroSlides.length) % heroSlides.length;
    const slide = heroSlides[slideIndex];
    const image = $('.hero-image-one'); const imageTwo = $('.hero-image-two');
    image.style.backgroundImage = `linear-gradient(#0002,#0002),url("${slide.one}")`;
    imageTwo.style.backgroundImage = `linear-gradient(90deg,transparent,#000),url("${slide.two}")`;
    hero.classList.remove('slide-change'); void hero.offsetWidth; hero.classList.add('slide-change');
    const counter = $('.hero-foot span:last-child'); if (counter) counter.textContent = `0${slideIndex + 1} / 0${heroSlides.length}`;
  };
  $('.hero-next').addEventListener('click', () => renderSlide(1));
  $('.hero-prev').addEventListener('click', () => renderSlide(-1));

  // Header dropdowns: Bootstrap click/tap, keyboard support, and desktop hover.
  const dropdownTriggers = $$('.nav-mega-item [data-bs-toggle="dropdown"]');
  dropdownTriggers.forEach(trigger => {
    const item = trigger.closest('.nav-mega-item');
    const menuElement = item?.querySelector('.jewellery-dropdown');
    if (!item || !menuElement) return;
    const dropdown = bootstrap.Dropdown.getOrCreateInstance(trigger, { autoClose: true });
    let closeTimer;
    const desktop = () => window.matchMedia('(min-width: 992px) and (hover: hover)').matches;
    const openOnHover = () => {
      if (!desktop()) return;
      window.clearTimeout(closeTimer);
      dropdown.show();
    };
    const closeAfterHover = () => {
      if (!desktop()) return;
      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(() => {
        if (!item.matches(':hover') && !menuElement.matches(':hover')) dropdown.hide();
      }, 180);
    };
    item.addEventListener('mouseenter', openOnHover);
    item.addEventListener('mouseleave', closeAfterHover);
    menuElement.addEventListener('mouseenter', openOnHover);
    menuElement.addEventListener('mouseleave', closeAfterHover);
    trigger.addEventListener('keydown', event => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        dropdown.show();
        menuElement.querySelector('.dropdown-item')?.focus();
      }
    });
    item.querySelectorAll('.dropdown-item').forEach(link => {
      link.addEventListener('click', () => {
        dropdown.hide();
        const navCollapse = $('#mainNav');
        if (window.matchMedia('(max-width: 991.98px)').matches && navCollapse.classList.contains('show')) {
          bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
        }
      });
    });
  });

  // Scroll reveal + back-to-top; gracefully fall back when reduced motion is preferred.
  const backToTop = $('#backToTop');
  const updateBackToTop = () => backToTop.classList.toggle('visible', window.scrollY > 500);
  window.addEventListener('scroll', updateBackToTop, { passive: true }); updateBackToTop();
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  const revealTargets = $$('.signature-card, .product-card, .banner-light, .split-copy, .dark-feature-image, .lookbook-item, .process-step, .quote-card, .social-img, .value, .off-grid-icons span');
  revealTargets.forEach(element => element.classList.add('reveal-on-scroll'));
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealTargets.forEach(element => observer.observe(element));
  } else revealTargets.forEach(element => element.classList.add('is-visible'));

  // Newsletter validates input and clearly explains that this is a frontend demo.
  $('#newsletterForm').addEventListener('submit', event => {
    event.preventDefault(); const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const email = $('#email').value.trim(); $('#formMessage').textContent = `Thank you — ${email} is validated for this demo. Connect a mailing-list service to save subscriptions.`; form.reset();
  });
})();
