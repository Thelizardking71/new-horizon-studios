// =============================================
// New Horizon Studios - Shared Header Loader
// =============================================
// This version uses an inlined template so it works when you
// simply double-click the .html files (file:// protocol).
// It also works when served from any web server.
//
// Include this right after <body>:
//   <script src="js/header-loader.js" data-title="Gallery" data-active="gallery"></script>

(function () {
  const script = document.currentScript;

  // Determine page info
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  // Map filenames to nice titles and active keys
  const pageMap = {
    'index.html':          { title: 'Home',            active: 'home' },
    '':                    { title: 'Home',            active: 'home' },
    'gallery.html':        { title: 'Gallery',         active: 'gallery' },
    'products.html':       { title: 'Shop',            active: 'shop' },
    'about.html':          { title: 'About the Artist', active: 'about' },
    'cart.html':           { title: 'Cart',            active: 'cart' }
  };

  const pageInfo = pageMap[filename] || { title: 'New Horizon Studios', active: '' };

  // Allow data attributes to override
  const customTitle = script?.dataset?.title;
  const customActive = script?.dataset?.active;

  const pageTitle = customTitle || pageInfo.title;
  const activeKey = customActive || pageInfo.active;

  // The header template (single source of truth)
  const headerHTML = `
    <header>
      <h1 class="page-title">${pageTitle}</h1>
      <nav>
        <ul class="nav-links">
          <li><a href="index.html" data-page="home">Home</a></li>
          <li><a href="gallery.html" data-page="gallery">Gallery</a></li>
          <li><a href="products.html" data-page="shop">Shop</a></li>
          <li><a href="about.html" data-page="about">About the Artist</a></li>
          <li><a href="cart.html" data-page="cart">Cart (<span id="cartCount">0</span>)</a></li>
        </ul>
      </nav>
    </header>
  `;

  // Create and inject the header
  const temp = document.createElement('div');
  temp.innerHTML = headerHTML.trim();
  const headerEl = temp.firstElementChild;

  // Mark active nav item
  if (activeKey) {
    const activeLink = headerEl.querySelector(`a[data-page="${activeKey}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  // Insert at the very beginning of body
  if (document.body.firstChild) {
    document.body.insertBefore(headerEl, document.body.firstChild);
  } else {
    document.body.appendChild(headerEl);
  }
})();