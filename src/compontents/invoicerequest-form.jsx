import React, { useState } from 'react';
import { useCart } from '../Logic/CartContents';
import '../styles/cart-page.css';

export default function InvoiceRequestForm() {
  const { cartItems, total } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwdjihOAW1uAl9yRlKvSPXXitIRa4yb2Wc7uxjYnpDzEqJpV94TCHs_cqA4YAMvUkGQ/exec';

  const handleSubmit = async (event) => {
  event.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage('Sending...');

  try {
    const payload = {
      customerName,
      customerEmail,
      cartItems: JSON.stringify(cartItems),
      total,
      timestamp: new Date().toISOString()
    };

    // Send as JSON (recommended)
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Change to JSON
      },
      body: JSON.stringify(payload), // Send as JSON
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json(); // Parse JSON response
    setSubmitMessage(data.message || 'Submitted Successfully!');
    setIsSuccess(data.success);

    // Reset form if successful
    if (data.success) {
      setCustomerName('');
      setCustomerEmail('');
    }

  } catch (error) {
    setSubmitMessage('Error submitting form. Please try again.');
    console.error('Error:', error);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="invoice-form-container">
      <h3 className="form-title">
        {isSuccess ? 'Thank You!' : 'Get an Invoice'}
      </h3>
      <p className="form-subtitle">
        {submitMessage || 'Fill out the form below to receive an invoice for your cart items.'}
      </p>

      {!isSuccess && (
        <form onSubmit={handleSubmit} className="invoice-form" id="invoice-form">
          <label htmlFor="customerName" className="form-label">Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            className="form-input"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
          
          <label htmlFor="customerEmail" className="form-label">Email:</label>
          <input
            type="email"
            id="customerEmail"
            name="customerEmail"
            className="form-input"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            required
          />
          
          <button type="submit" className="invoice-submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Request Invoice'}
          </button>
        </form>
      )}
    </div>
  );
}