// =============================================
// New Horizon Studios - Shared Utilities
// =============================================
// Include this script on pages that need cart count or mobile menu.
// <script src="js/main.js"></script>

// ====================== MOBILE MENU ======================
const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
if (mobileBtn) mobileBtn.addEventListener('click', () => navLinks.classList.toggle('active'));

// ====================== SHARED CART SYSTEM ======================
// Canonical cart item shape:
// {
//   cartId: number,           // unique per line item (Date.now())
//   id: number,               // original product id
//   name: string,
//   price: number,
//   img: string,
//   selectedSize?: string,
//   selectedMaterial?: string,
//   displayName: string,      // human readable with variant
//   qty: number
// }

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

/** Returns the total number of items (respecting qty) */
function getCartItemCount() {
  return cart.reduce((sum, item) => sum + (item.qty || 1), 0);
}

function updateCartCount() {
  const countEl = document.getElementById('cartCount');
  if (countEl) {
    countEl.textContent = getCartItemCount();
  }
}

/**
 * Add an item to the cart.
 * @param {Object} product - base product (id, name, price, img, ...)
 * @param {Object} [variant] - optional { selectedSize, selectedMaterial, displayName }
 */
function addToCart(product, variant = {}) {
  const now = Date.now();

  const cartItem = {
    cartId: now,
    id: product.id,
    name: product.name,
    price: product.price,
    img: product.img,
    selectedSize: variant.selectedSize || '',
    selectedMaterial: variant.selectedMaterial || '',
    displayName: variant.displayName || product.name,
    qty: 1
  };

  cart.push(cartItem);
  saveCart();
  alert(`${cartItem.displayName} added to cart!`);
}

/** Remove a line item by its unique cartId */
function removeFromCart(cartId) {
  cart = cart.filter(item => item.cartId !== cartId);
  saveCart();
}

/** Update quantity for a specific line item */
function updateCartItemQuantity(cartId, newQty) {
  const item = cart.find(i => i.cartId === cartId);
  if (!item) return;

  item.qty = Math.max(1, parseInt(newQty, 10) || 1);
  saveCart();
}

/** Calculate total price of everything in cart */
function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);
}

/** Clear the entire cart */
function clearCart() {
  cart = [];
  localStorage.removeItem('cart');
  updateCartCount();
}

/** Get a copy of the current cart (for rendering) */
function getCart() {
  return [...cart];
}

// ====================== INIT ======================
updateCartCount();

// Make key functions available globally for inline onclick handlers
window.removeFromCart = removeFromCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.getCartTotal = getCartTotal;
window.getCart = getCart;