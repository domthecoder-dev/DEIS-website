// src/components/FaqItem.js
import React, { useState } from 'react';


function FaqItem({ question, answerHtml }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Function to render HTML from string (be careful with untrusted input)
  // For static content like FAQs, this is generally safe.
  const createMarkup = () => {
    return { __html: answerHtml };
  };

  return (
    <article className="faq-item">
      <h2 className="question">
        {question}
        {/* Use a button for accessibility, ensure it's functional */}
        <button className="expand-button" onClick={toggleOpen} aria-expanded={isOpen}>
          {isOpen ? '-' : '+'}
        </button>
      </h2>
      {/* Conditionally render the answer or apply a class for CSS transitions */}
      <div className={`answer ${isOpen ? 'open' : ''}`} style={{ display: isOpen ? 'block' : 'none' }}>
        {/* dangerouslySetInnerHTML allows rendering HTML strings.
            Ensure 'answerHtml' content is trusted and sanitized if it comes from an external source. */}
        <p dangerouslySetInnerHTML={createMarkup()}></p>
      </div>
    </article>
  );
}

export default FaqItem;