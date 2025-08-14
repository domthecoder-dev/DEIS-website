import React, { useState } from 'react';
import { useCart } from '../Logic/CartContents';

export default function InvoiceRequestForm() {
  const { cartItems, total } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
      name: customerName,
      email: customerEmail,
      cartItems,
      total
    });
  };

  return (
    <div className="invoice-form-container">
      <h3 className="form-title">Get an Invoice</h3>
      <p className="form-subtitle">Fill out the form below to receive an invoice for your cart items.</p>
      <form onSubmit={handleSubmit} className="invoice-form">
        <label htmlFor="customerName" className="form-label">Name:</label>
        <input
          type="text"
          id="customerName"
          className="form-input"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        
        <label htmlFor="customerEmail" className="form-label">Email:</label>
        <input
          type="email"
          id="customerEmail"
          className="form-input"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          required
        />
        
        <button type="submit" className="invoice-submit-button">
          Request Invoice
        </button>
      </form>
    </div>
  );
}