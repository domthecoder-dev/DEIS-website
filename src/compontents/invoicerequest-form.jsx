import React, { useState } from 'react';
import { useCart } from '../Logic/CartContents';
import '../styles/cart-page.css'; // Assuming this stylesheet contains the form styles

export default function InvoiceRequestForm() {
  const { cartItems, total } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // ⭐ This URL MUST match the URL from your working script! ⭐
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwLVNff19XMjgMg9gLGJkbewqNA3iJlSwerS2WeK-8M5npYD3BH1RnYzBXHPIPNGAso/exec';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('Sending...');

    try {
      // Use FormData to get the name and email from the form
      const form = event.target;
      const formData = new FormData(form);
      
      // ⭐ Add the cart items and total to the FormData ⭐
      // We must stringify cartItems because FormData only accepts strings or Blobs
      formData.append('cartItems', JSON.stringify(cartItems));
      formData.append('total', total);
      formData.append('timestamp', new Date().toISOString());

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // Convert FormData to a URL-encoded string for the body
        body: new URLSearchParams(formData).toString()
      });
      
      const data = await response.text();
      setSubmitMessage('Form Submitted Successfully!');
      setIsSuccess(true);
      
      // Clear the form fields after a successful submission
      setCustomerName('');
      setCustomerEmail('');

      // Optional: Log the response from the server if needed
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
            name="customerName" // ⭐ Required for FormData ⭐
            className="form-input"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
          
          <label htmlFor="customerEmail" className="form-label">Email:</label>
          <input
            type="email"
            id="customerEmail"
            name="customerEmail" // ⭐ Required for FormData ⭐
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
