/* ============================================================
   GIFTS & HAMPERS HUB — APPLICATION LOGIC
   ============================================================ */

// =============================================
// PRODUCT DATA
// =============================================
const PRODUCTS = [
  // Food & Treats
  { id: 1,  name: 'Artisan Chocolate Box',   emoji: '🍫', price: 12.99, cat: 'food',    desc: 'Luxury assorted chocolates' },
  { id: 2,  name: 'Honey & Preserve Set',    emoji: '🍯', price: 9.99,  cat: 'food',    desc: 'Local honey and fruit preserves' },
  { id: 3,  name: 'Shortbread Biscuits',     emoji: '🍪', price: 7.99,  cat: 'food',    desc: 'Scottish butter shortbread' },
  { id: 4,  name: 'Artisan Cheese Board',    emoji: '🧀', price: 18.99, cat: 'food',    desc: 'Selection of 4 artisan cheeses' },
  { id: 5,  name: 'Luxury Cracker Set',      emoji: '🥨', price: 6.99,  cat: 'food',    desc: 'Premium savoury crackers' },
  { id: 6,  name: 'Truffle Collection',      emoji: '🎂', price: 15.99, cat: 'food',    desc: 'Handmade chocolate truffles' },
  { id: 7,  name: 'Dried Fruit & Nut Mix',   emoji: '🥜', price: 8.99,  cat: 'food',    desc: 'Premium mixed trail mix' },
  { id: 8,  name: 'Jam Selection',           emoji: '🫙', price: 11.99, cat: 'food',    desc: 'Three handcrafted jams' },
  // Drinks
  { id: 9,  name: 'Prosecco Miniature',      emoji: '🥂', price: 14.99, cat: 'drinks',  desc: 'Sparkling Italian Prosecco' },
  { id: 10, name: 'Red Wine Bottle',         emoji: '🍷', price: 22.99, cat: 'drinks',  desc: 'Premium Merlot selection' },
  { id: 11, name: 'Craft Beer Selection',    emoji: '🍺', price: 18.99, cat: 'drinks',  desc: '4 artisan craft beers' },
  { id: 12, name: 'Artisan Tea Collection',  emoji: '🫖', price: 12.99, cat: 'drinks',  desc: '20 premium loose-leaf teas' },
  { id: 13, name: 'Hot Cocoa Gift Set',      emoji: '☕', price: 10.99, cat: 'drinks',  desc: 'Luxury hot chocolate blend' },
  { id: 14, name: 'Coffee Bean Pouch',       emoji: '☕', price: 13.99, cat: 'drinks',  desc: 'Single-origin roasted beans' },
  // Spa & Wellness
  { id: 15, name: 'Bath Bomb Set',           emoji: '🛁', price: 14.99, cat: 'spa',     desc: 'Fizzing aromatherapy bath bombs' },
  { id: 16, name: 'Luxury Body Lotion',      emoji: '🧴', price: 16.99, cat: 'spa',     desc: 'Shea butter moisturiser' },
  { id: 17, name: 'Rose Face Mask',          emoji: '🌹', price: 9.99,  cat: 'spa',     desc: 'Hydrating rose clay mask' },
  { id: 18, name: 'Essential Oil Blend',     emoji: '💧', price: 18.99, cat: 'spa',     desc: 'Lavender & eucalyptus blend' },
  { id: 19, name: 'Bamboo Spa Headband',     emoji: '🎀', price: 6.99,  cat: 'spa',     desc: 'Soft eco-friendly headband' },
  { id: 20, name: 'Body Scrub',              emoji: '🧼', price: 12.99, cat: 'spa',     desc: 'Sugar & coconut exfoliant' },
  // Candles & Scents
  { id: 21, name: 'Soy Pillar Candle',       emoji: '🕯️', price: 16.99, cat: 'candles', desc: 'Hand-poured vanilla & amber' },
  { id: 22, name: 'Reed Diffuser',           emoji: '🌿', price: 19.99, cat: 'candles', desc: 'Jasmine & sandalwood scent' },
  { id: 23, name: 'Wax Melt Collection',     emoji: '✨', price: 8.99,  cat: 'candles', desc: '6 seasonal wax melts' },
  { id: 24, name: 'Scented Tealights Set',   emoji: '🕯️', price: 7.99,  cat: 'candles', desc: '12 fragranced tealights' },
  // Snacks
  { id: 25, name: 'Gourmet Popcorn',         emoji: '🍿', price: 6.99,  cat: 'snacks',  desc: 'Caramel & sea salt flavour' },
  { id: 26, name: 'Luxury Granola',          emoji: '🥣', price: 9.99,  cat: 'snacks',  desc: 'Honey & almond clusters' },
  { id: 27, name: 'Dark Choc Pretzels',      emoji: '🥨', price: 8.99,  cat: 'snacks',  desc: 'Sweet & salty treat' },
  { id: 28, name: 'Mixed Olives Jar',        emoji: '🍈', price: 7.99,  cat: 'snacks',  desc: 'Marinated Mediterranean olives' },
  // Flowers & Décor
  { id: 29, name: 'Dried Flower Posy',       emoji: '💐', price: 14.99, cat: 'flowers', desc: 'Everlasting dried botanicals' },
  { id: 30, name: 'Mini Succulent',          emoji: '🌵', price: 8.99,  cat: 'flowers', desc: 'Easy-care desktop succulent' },
  { id: 31, name: 'Rose Petal Confetti',     emoji: '🌸', price: 5.99,  cat: 'flowers', desc: 'Biodegradable rose petals' },
  { id: 32, name: 'Eucalyptus Bundle',       emoji: '🌿', price: 10.99, cat: 'flowers', desc: 'Fresh fragrant eucalyptus' },
  // Kids & Toys
  { id: 33, name: 'Plush Teddy Bear',        emoji: '🧸', price: 19.99, cat: 'kids',    desc: 'Super soft cuddle bear' },
  { id: 34, name: 'Baby Rattle Set',         emoji: '🎃', price: 12.99, cat: 'kids',    desc: 'BPA-free sensory rattles' },
  { id: 35, name: 'Colouring Book Set',      emoji: '📒', price: 8.99,  cat: 'kids',    desc: 'Creative colouring bundle' },
  { id: 36, name: 'Bubble Bath for Kids',    emoji: '🛁', price: 9.99,  cat: 'kids',    desc: 'Gentle fruit-scented foam' },
];

// =============================================
// STATE
// =============================================
let state = {
  selectedSize: null,
  selectedCapacity: 0,
  selectedBasePrice: 0,
  hamperItems: [],       // { product, qty }
  cart: [],             // { size, basePrice, items, total, message, recipient, packaging }
  activeCategory: 'all',
  searchQuery: '',
};

// =============================================
// NAVBAR SCROLL
// =============================================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 60) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// =============================================
// SMOOTH SECTION REVEAL (IntersectionObserver)
// =============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.step-card, .size-card, .occasion-card, .testimonial-card').forEach(el => {
  observer.observe(el);
});

// =============================================
// SIZE SELECTION
// =============================================
document.querySelectorAll('.select-size-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const size = btn.dataset.size;
    const capacity = parseInt(btn.dataset.capacity);
    const price = parseFloat(btn.dataset.price);
    selectSize(size, capacity, price);
  });
});

document.querySelectorAll('.size-card').forEach(card => {
  card.addEventListener('click', () => {
    const size = card.dataset.size;
    const capacity = parseInt(card.dataset.capacity);
    const price = parseFloat(card.dataset.price);
    selectSize(size, capacity, price);
  });
});

function selectSize(size, capacity, price) {
  // Update state
  state.selectedSize = size;
  state.selectedCapacity = capacity;
  state.selectedBasePrice = price;
  state.hamperItems = [];

  // Update UI — highlight selected card
  document.querySelectorAll('.size-card').forEach(c => c.classList.remove('selected'));
  document.querySelector(`[data-size="${size}"].size-card`).classList.add('selected');

  // Show items step
  const stepItems = document.getElementById('stepItems');
  stepItems.classList.remove('hidden');

  // Update badge
  const sizeLabels = { small: 'Small', medium: 'Medium', large: 'Large', xlarge: 'Extra Large' };
  document.getElementById('selectedSizeBadge').textContent = `${sizeLabels[size]} · ${capacity} items max`;

  // Update capacity display
  document.getElementById('totalSlots').textContent = capacity;
  document.getElementById('usedSlots').textContent = '0';
  document.getElementById('capacityFill').style.width = '0%';

  // Render products
  renderProducts();

  // Show summary step
  document.getElementById('stepSummary').classList.remove('hidden');

  // Update summary base price
  document.getElementById('basePrice').textContent = `GH₵${price.toFixed(2)}`;
  updateSummary();

  // Scroll to items
  setTimeout(() => {
    document.getElementById('stepItems').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 200);

  showToast(`📦 ${sizeLabels[size]} hamper selected! Now pick your items.`, '');
}

// =============================================
// PRODUCT RENDERING
// =============================================
function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    const matchesCat = state.activeCategory === 'all' || p.cat === state.activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const products = getFilteredProducts();
  grid.innerHTML = '';

  if (products.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px;">No items found. Try a different search or category.</div>`;
    return;
  }

  products.forEach((product, idx) => {
    const existing = state.hamperItems.find(i => i.product.id === product.id);
    const qty = existing ? existing.qty : 0;

    const card = document.createElement('div');
    card.className = `product-card${qty > 0 ? ' added' : ''}`;
    card.style.animationDelay = `${idx * 0.04}s`;
    card.innerHTML = `
      <span class="product-cat-label">${catLabel(product.cat)}</span>
      <div class="product-emoji">${product.emoji}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-price">GH₵${product.price.toFixed(2)}</div>
      ${qty === 0 
        ? `<button class="product-add-btn" data-id="${product.id}" id="addBtn${product.id}">+ Add to Hamper</button>`
        : `<div class="product-qty-control">
            <button class="qty-btn" data-action="dec" data-id="${product.id}" id="decBtn${product.id}">−</button>
            <span class="qty-num" id="qty${product.id}">${qty}</span>
            <button class="qty-btn" data-action="inc" data-id="${product.id}" id="incBtn${product.id}">+</button>
           </div>`
      }
    `;
    grid.appendChild(card);
  });

  // Bind events
  grid.querySelectorAll('.product-add-btn').forEach(btn => {
    btn.addEventListener('click', () => addItem(parseInt(btn.dataset.id)));
  });
  grid.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      if (btn.dataset.action === 'inc') addItem(id);
      else removeItem(id);
    });
  });
}

function catLabel(cat) {
  const map = { food: 'Food', drinks: 'Drink', spa: 'Spa', candles: 'Candle', snacks: 'Snack', flowers: 'Flora', kids: 'Kids' };
  return map[cat] || cat;
}

// =============================================
// ITEM MANAGEMENT
// =============================================
function getTotalItems() {
  return state.hamperItems.reduce((sum, i) => sum + i.qty, 0);
}

function addItem(productId) {
  if (!state.selectedSize) { showToast('⚠️ Please select a hamper size first!', 'warn'); return; }
  if (getTotalItems() >= state.selectedCapacity) {
    showToast(`🚫 Your ${state.selectedSize} hamper can hold up to ${state.selectedCapacity} items only.`, 'warn');
    return;
  }

  const product = PRODUCTS.find(p => p.id === productId);
  const existing = state.hamperItems.find(i => i.product.id === productId);
  if (existing) existing.qty += 1;
  else state.hamperItems.push({ product, qty: 1 });

  updateCapacity();
  renderProducts();
  updateSummary();
  showToast(`✅ ${product.emoji} ${product.name} added to your hamper!`, 'success');
}

function removeItem(productId) {
  const existing = state.hamperItems.find(i => i.product.id === productId);
  if (!existing) return;
  existing.qty -= 1;
  if (existing.qty <= 0) {
    state.hamperItems = state.hamperItems.filter(i => i.product.id !== productId);
  }
  updateCapacity();
  renderProducts();
  updateSummary();
}

function updateCapacity() {
  const used = getTotalItems();
  const total = state.selectedCapacity;
  document.getElementById('usedSlots').textContent = used;
  document.getElementById('capacityFill').style.width = `${(used / total) * 100}%`;
}

// =============================================
// SUMMARY
// =============================================
function updateSummary() {
  const itemsTotal = state.hamperItems.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  const finalTotal = state.selectedBasePrice + itemsTotal;

  document.getElementById('itemsSubtotal').textContent = `GH₵${itemsTotal.toFixed(2)}`;
  document.getElementById('finalTotal').textContent = `GH₵${finalTotal.toFixed(2)}`;

  const list = document.getElementById('selectedItemsList');
  const boxMsg = document.getElementById('hamperBoxSummary');

  if (state.hamperItems.length === 0) {
    list.innerHTML = '';
    boxMsg.innerHTML = `<p class="empty-msg">Your hamper is empty — add some items above!</p>`;
  } else {
    boxMsg.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        ${state.hamperItems.map(i => `
          <span style="background:rgba(181,25,156,0.2);border:1px solid rgba(181,25,156,0.4);
                       border-radius:8px;padding:6px 12px;font-size:13px;color:var(--text);">
            ${i.product.emoji} ${i.product.name} ${i.qty > 1 ? `×${i.qty}` : ''}
          </span>
        `).join('')}
      </div>
    `;
    list.innerHTML = state.hamperItems.map(i => `
      <div class="selected-item-row">
        <div class="item-row-left">
          <span>${i.product.emoji}</span>
          <span>${i.product.name} ${i.qty > 1 ? `×${i.qty}` : ''}</span>
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          <span class="item-row-price">GH₵${(i.product.price * i.qty).toFixed(2)}</span>
          <button class="item-remove-btn" data-id="${i.product.id}">✕</button>
        </div>
      </div>
    `).join('');
    list.querySelectorAll('.item-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        state.hamperItems = state.hamperItems.filter(i => i.product.id !== id);
        updateCapacity();
        renderProducts();
        updateSummary();
      });
    });
  }
}

// =============================================
// CATEGORY FILTER
// =============================================
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeCategory = btn.dataset.cat;
    renderProducts();
  });
});

// =============================================
// SEARCH
// =============================================
document.getElementById('searchInput').addEventListener('input', (e) => {
  state.searchQuery = e.target.value;
  renderProducts();
});

// =============================================
// ADD TO CART
// =============================================
document.getElementById('addToCartBtn').addEventListener('click', () => {
  if (!state.selectedSize) { showToast('⚠️ Please select a hamper size first!', 'warn'); return; }
  if (state.hamperItems.length === 0) { showToast('⚠️ Your hamper is empty! Add some items first.', 'warn'); return; }

  const itemsTotal = state.hamperItems.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  const finalTotal = state.selectedBasePrice + itemsTotal;
  const sizeLabels = { small: 'Small', medium: 'Medium', large: 'Large', xlarge: 'Extra Large' };
  const packaging = document.querySelector('input[name="packaging"]:checked')?.value || 'cellophane';
  const recipient = document.getElementById('recipientName').value;
  const message = document.getElementById('giftMessage').value;
  const deliveryDate = document.getElementById('deliveryDate').value;

  const hamper = {
    id: Date.now(),
    size: sizeLabels[state.selectedSize],
    basePrice: state.selectedBasePrice,
    items: [...state.hamperItems],
    total: finalTotal,
    packaging,
    recipient,
    message,
    deliveryDate,
    itemCount: state.hamperItems.reduce((s, i) => s + i.qty, 0),
  };

  state.cart.push(hamper);
  updateCartCount();
  showToast(`🎁 ${sizeLabels[state.selectedSize]} hamper added to cart! (${hamper.itemCount} items)`, 'success');
  openCart();
  renderCartItems();
});

// =============================================
// CART
// =============================================
function updateCartCount() {
  document.getElementById('cartCount').textContent = state.cart.length;
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('active');
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('active');
}

document.getElementById('cartBtn').addEventListener('click', () => { openCart(); renderCartItems(); });
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  
  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-msg">
        <span class="empty-icon">🛒</span>
        <p>Your cart is empty</p>
        <p>Start building a hamper to add items!</p>
      </div>
    `;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'block';
  container.innerHTML = state.cart.map(h => `
    <div class="cart-item-row">
      <div class="cart-item-name">🎁 ${h.size} Hamper</div>
      <div class="cart-item-detail">
        ${h.itemCount} items · ${h.packaging} packaging
        ${h.recipient ? `· For: ${h.recipient}` : ''}
        ${h.deliveryDate ? `· Delivery: ${new Date(h.deliveryDate).toLocaleDateString('en-GB', {day:'numeric',month:'short',year:'numeric'})}` : ''}
      </div>
      <div class="cart-item-footer">
        <span class="cart-item-price">GH₵${h.total.toFixed(2)}</span>
        <button class="cart-item-remove" data-id="${h.id}">Remove</button>
      </div>
    </div>
  `).join('');

  const grandTotal = state.cart.reduce((s, h) => s + h.total, 0);
  document.getElementById('cartTotal').textContent = `GH₵${grandTotal.toFixed(2)}`;

  container.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      state.cart = state.cart.filter(h => h.id !== parseInt(btn.dataset.id));
      updateCartCount();
      renderCartItems();
    });
  });
}

// =============================================
// CHECKOUT
// =============================================
document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (state.cart.length === 0) { showToast('⚠️ Your cart is empty!', 'warn'); return; }
  const ref = 'GHH-' + Math.random().toString(36).substr(2, 8).toUpperCase();
  document.getElementById('orderRef').textContent = ref;
  document.getElementById('checkoutModal').classList.remove('hidden');
  closeCart();
  state.cart = [];
  updateCartCount();
});

document.getElementById('modalClose').addEventListener('click', () => {
  document.getElementById('checkoutModal').classList.add('hidden');
});
document.getElementById('modalDoneBtn').addEventListener('click', () => {
  document.getElementById('checkoutModal').classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =============================================
// CONTACT FORM
// =============================================
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('📧 Message sent! We\'ll be in touch shortly.', 'success');
  e.target.reset();
});

// =============================================
// TOAST
// =============================================
let toastTimeout;
function showToast(message, type = '') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.borderColor = type === 'warn' ? '#ff9800' : type === 'success' ? 'var(--accent-green)' : 'var(--border)';
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3200);
}

// =============================================
// SET MIN DATE FOR DELIVERY
// =============================================
const deliveryInput = document.getElementById('deliveryDate');
if (deliveryInput) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 2);
  deliveryInput.min = tomorrow.toISOString().split('T')[0];
}

// =============================================
// TESTIMONIAL AUTO-SCROLL
// =============================================
const track = document.getElementById('testimonialsTrack');
let scrollDir = 1;
setInterval(() => {
  if (!track) return;
  track.scrollLeft += 1 * scrollDir;
  if (track.scrollLeft >= track.scrollWidth - track.clientWidth) scrollDir = -1;
  if (track.scrollLeft <= 0) scrollDir = 1;
}, 20);

// =============================================
// ANIMATE SIZE CARDS ON SCROLL
// =============================================
const sizeCards = document.querySelectorAll('.size-card');
const sizeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${idx * 0.1}s`;
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.2 });
sizeCards.forEach(card => sizeObserver.observe(card));

// =============================================
// HERO — ANIMATE ITEM CHIPS
// =============================================
const chips = document.querySelectorAll('.item-chip');
chips.forEach((chip, idx) => {
  chip.style.animationDelay = `${idx * 0.2 + 0.5}s`;
});

console.log('🎁 Gifts & Hampers Hub loaded successfully!');
