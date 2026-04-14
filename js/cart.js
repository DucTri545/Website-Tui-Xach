/**
 * Logic giỏ hàng - lưu trong localStorage
 * Cấu trúc: [{ id, ten, gia, mau, img, qty }]
 */
const CART_KEY = 'vascara_cart';

function getCart() {
    try {
        const data = localStorage.getItem(CART_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveCart(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    updateCartBadge();
}

function addToCart(product, qty = 1) {
    if (typeof isLoggedIn === 'function' && !isLoggedIn()) {
        return false;
    }
    const cart = getCart();
    const exist = cart.find(item => item.id === product.id);
    if (exist) {
        exist.qty += qty;
    } else {
        cart.push({
            id: product.id,
            ten: product.ten,
            gia: product.gia,
            mau: product.mau,
            img: product.album ? product.album[0] : product.img || '',
            qty: qty
        });
    }
    saveCart(cart);
    return true;
}

function removeFromCart(productId) {
    let cart = getCart().filter(item => item.id !== productId);
    saveCart(cart);
}

function getCartCount() {
    return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartBadge() {
    const count = getCartCount();
    $('.cart-count-badge').text(count);
}