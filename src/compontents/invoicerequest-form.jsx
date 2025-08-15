import React, { useState } from 'react';
import { useCart } from '../Logic/CartContents';
import '../styles/cart-page.css';

export default function InvoiceRequestForm() {
  const { cartItems: itemsInCart, total } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");


    const simplifiedItems = itemsInCart.map(item => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price
    }));

    try {
      const form = event.target;
      form.action = `https://formsubmit.co/c3b2341dd7554351377e17d1af07ab90`;
      form.method = "POST";

      const formData = new FormData(form);
      formData.append("_subject", `New Invoice Request from ${customerName || 'Customer'}`);
      formData.append("_captcha", "false");
      formData.append("items", JSON.stringify(simplifiedItems || []));
      formData.append("total", (total || 0).toString());

      await fetch(form.action, {
        method: form.method,
        body: formData
      });

      setIsSuccess(true);
      setSubmitMessage("✅ Invoice request sent!");

    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("❌ Failed to submit. Please try again.");
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
          {/* Note: _next field is now handled in the data object for the AJAX call */}
          <label htmlFor="customerName" className="form-label">Name:</label>
          <input
            type="text"
            id="customerName"
            name="name"
            className="form-input"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />

          <label htmlFor="customerEmail" className="form-label">Email:</label>
          <input
            type="email"
            id="customerEmail"
            name="email"
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
