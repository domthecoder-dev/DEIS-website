import React, { useState } from 'react';
import useMediaQuery from '../Hooks/useMediaQuery'; // Assuming you have this hook
import './FlipCard.css'; // We'll create this CSS next

const FlipCard = ({ frontContent, backContent, className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  // Use the same breakpoint as your CSS for consistency
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleClick = () => {
    // Only allow flipping on desktop
    if (!isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  if (isMobile) {
    // For mobile, render a simple, non-flipping card
    // The content from 'frontContent' will be primary, and 'backContent' will be styled to always be visible below it.
    return (
      <div className={`mobile-card-wrapper ${className}`}>
        <div className="mobile-card-front-content">
          {frontContent}
        </div>
        <div className="mobile-card-back-content">
          {backContent}
        </div>
      </div>
    );
  }

  // For desktop, render the flip card
  return (
    <div className={`flip-card-container ${className}`} onClick={handleClick}>
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;