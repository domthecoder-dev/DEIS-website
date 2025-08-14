import React, { useState } from 'react';
import { useCart } from '../Logic/CartContents';
import { Link } from 'react-router-dom';
import '../styles/cart-page.css';
import InvoiceRequestForm from '../compontents/invoicerequest-form'; // ⭐ Imported the new component ⭐

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, getCartTotalPrice } = useCart();
  
  // ⭐ New state to control visibility of the invoice form ⭐
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);

  const handleQuantityChange = (productId, e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    } else if (newQuantity === 0) {
      // ⭐ Replaced window.confirm with a custom action and a console log ⭐
      console.log("Item quantity set to 0. Would you like to remove it?");
      removeFromCart(productId);
    }
  };

  const handleRemoveItem = (productId, productName) => {
    // ⭐ Replaced window.confirm with a custom action and a console log ⭐
    console.log(`Are you sure you want to remove "${productName}" from your cart?`);
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    // ⭐ Replaced window.confirm with a custom action and a console log ⭐
    console.log("Are you sure you want to clear your entire cart?");
    clearCart();
  };

  return (
    <div className="cart-page-container">
      <h1 className="cart-page-title">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="cart-empty-message">
          <p>Your cart is empty.</p>
          <Link to="/shop" className="continue-shopping-link">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-list">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <Link to={`/shop/${item.id}`} className="cart-item-image-link">
                  <img src={item.images[0]} alt={item.name} className="cart-item-image" />
                </Link>
                <div className="cart-item-details">
                  <Link to={`/shop/${item.id}`} className="cart-item-name-link">
                    <h2 className="cart-item-name">{item.name}</h2>
                  </Link>
                  <div className="cart-item-total-price">R{(item.price * item.quantity).toFixed(2)}</div>
                  <div className="cart-item-actions">
                    <div className="cart-item-quantity-control">
                      <label htmlFor={`quantity-${item.id}`} className="sr-only">Quantity for {item.name}</label>
                      <input
                        id={`quantity-${item.id}`}
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e)}
                        className="cart-item-quantity-input"
                      />
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id, item.name)}
                      className="cart-item-remove-button"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3 className="cart-summary-title">Order Summary</h3>
            <div className="cart-subtotal-row">
              <span>Subtotal:</span>
              <span className="cart-subtotal-price">R{getCartTotalPrice().toFixed(2)}</span>
            </div>
            
            {/* ⭐ This button now toggles the form's visibility ⭐ */}
            <button 
              onClick={() => setShowInvoiceForm(!showInvoiceForm)} 
              className="proceed-to-checkout-button"
            >
              Request an Invoice
            </button>
            
            <button
              onClick={handleClearCart}
              className="clear-cart-button"
            >
              Clear Cart
            </button>
            
            {/* ⭐ Conditionally render the new form component ⭐ */}
            {showInvoiceForm && <InvoiceRequestForm />}
          </div>
        </div>
      )}
    </div>
  );
}
