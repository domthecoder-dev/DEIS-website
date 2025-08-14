import React, { useState } from 'react';
import { useCart } from '../Logic/CartContents';
import '../styles/cart-page.css';

export default function InvoiceRequestForm() {
  const { cartItems: itemsInCart, total } = useCart(); // Assuming useCart returns cartItems
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxsx5CTLKSXyaMrSwi-BIby4LZAwhqq8pixfdjjg9vKNLf1yvlUzGcIJsoRn0EoSRud/exec';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = {
        name: customerName,
        email: customerEmail,
        items: JSON.stringify(itemsInCart), // Stringify the array
        total: total
      };

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setIsSuccess(true);
        setSubmitMessage('Form Submitted Successfully!');
      } else {
        throw new Error('Network response was not ok');
      }
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

      {!isSuccess ? (
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
      ) : (
        <div className="success-message">
          Thank you for your request! We'll send your invoice shortly.
        </div>
      )}
    </div>
  );
}