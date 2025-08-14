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

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwLVNff19XMjgMg9gLGJkbewqNA3iJlSwerS2WeK-8M5npYD3BH1RnYzBXHPIPNGAso/exec';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('Sending...');

    try {
      // Create a plain JavaScript object with all the data
      const payload = {
        customerName: customerName,
        customerEmail: customerEmail,
        cartItems: JSON.stringify(cartItems),
        total: total,
        timestamp: new Date().toISOString()
      };

      // Convert the object to a URL-encoded string
      const formBody = new URLSearchParams(payload).toString();

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text();
      setSubmitMessage('Submitted Successfully!');
      setIsSuccess(true);
      
      setCustomerName('');
      setCustomerEmail('');

      console.log('Server response:', data);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('There was an error submitting your form. Please try again.');
      setIsSuccess(false);
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