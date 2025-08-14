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


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzf0ALeFpl1qT8o3lDV7vTmK6EOJYfAmYo5DjlAOYx3vOXubHf6NBna5_ZchQK9Y-ns/exec";

    try {
      // 1. Try with JSON first
      const jsonResponse = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: customerName,
          email: customerEmail,
          items: itemsInCart,
          total: total,
        }),
      });

      const result = await jsonResponse.json();
      console.log("JSON Response:", result);

      if (result.status === "success") {
        setIsSuccess(true);
        setSubmitMessage("Invoice requested successfully!");
        return;
      } else {
        throw new Error(result.message || "Server error");
      }

    } catch (jsonError) {
      console.log("JSON failed, trying FormData...", jsonError);

      // 2. Fallback to FormData if JSON fails
      try {
        const formData = new FormData();
        formData.append("name", customerName);
        formData.append("email", customerEmail);
        formData.append("items", JSON.stringify(itemsInCart));
        formData.append("total", total);

        const formResponse = await fetch(SCRIPT_URL, {
          method: "POST",
          body: formData,
        });

        const result = await formResponse.json();
        console.log("FormData Response:", result);

        if (result.status === "success") {
          setIsSuccess(true);
          setSubmitMessage("Invoice requested successfully!");
        } else {
          throw new Error(result.message || "FormData submission failed");
        }

      } catch (formError) {
        console.error("FormData failed:", formError);
        setSubmitMessage("Failed to submit. Please try again later.");
        setIsSuccess(false);
      }
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