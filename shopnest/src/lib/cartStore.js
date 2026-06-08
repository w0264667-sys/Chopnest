import { useState, useCallback, useEffect } from 'react';
const CART_KEY = 'shopnest_cart';
function loadCart() { try { const s = localStorage.getItem(CART_KEY); return s ? JSON.parse(s) : []; } catch { return []; } }
function saveCart(items) { try { localStorage.setItem(CART_KEY, JSON.stringify(items)); } catch {} }
let cartItems = loadCart();
let listeners = new Set();
function notifyListeners() { saveCart(cartItems); listeners.forEach(fn => fn([...cartItems])); }
export function useCart() {
  const [items, setItems] = useState([...cartItems]);
  useEffect(() => { const l = n => setItems(n); listeners.add(l); return () => listeners.delete(l); }, []);
  const addToCart = useCallback((product, quantity = 1, size = '', color = '') => {
    const idx = cartItems.findIndex(i => i.product_id === product.id && i.size === size && i.color === color);
    if (idx >= 0) cartItems[idx].quantity += quantity;
    else cartItems.push({ product_id: product.id, name: product.name, price: product.sale_price || product.price, quantity, size, color, image: product.images?.[0] || '' });
    notifyListeners();
  }, []);
  const removeFromCart = useCallback(index => { cartItems.splice(index, 1); notifyListeners(); }, []);
  const updateQuantity = useCallback((index, quantity) => { if (quantity <= 0) cartItems.splice(index, 1); else cartItems[index].quantity = quantity; notifyListeners(); }, []);
  const clearCart = useCallback(() => { cartItems = []; notifyListeners(); }, []);
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const itemCount = items.reduce((s, i) => s + i.quantity, 0);
  return { items, addToCart, removeFromCart, updateQuantity, clearCart, subtotal, itemCount };
}