// src/components/Collapsible.js
import React, { useState, useRef, useEffect } from 'react'; // Added useRef, useEffect
import '../styles/Collapsible.css';

const Collapsible = ({ title, children, defaultOpen = false }) => {
  // `isOpen` now directly controls the component's state for both mobile and desktop.
  // defaultOpen can be passed as true to make it open initially.
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null); // Ref to measure content height for animation

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Effect to apply dynamic height for smooth open/close animation
  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        // When opening, set height to scrollHeight, then transition to auto
        contentRef.current.style.height = 'auto'; // Temporarily set to auto to get full scrollHeight
        const scrollHeight = contentRef.current.scrollHeight;
        contentRef.current.style.height = '0px'; // Reset for transition start
        // Force reflow
        void contentRef.current.offsetWidth;
        contentRef.current.style.height = `${scrollHeight}px`;
        // Once transition is complete, set back to auto to handle dynamic content
        const onTransitionEnd = () => {
          if (isOpen && contentRef.current) {
            contentRef.current.style.height = 'auto';
          }
          contentRef.current.removeEventListener('transitionend', onTransitionEnd);
        };
        contentRef.current.addEventListener('transitionend', onTransitionEnd);
      } else {
        // When closing, set height to current height, then transition to 0
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
        // Force reflow
        void contentRef.current.offsetWidth;
        contentRef.current.style.height = '0px';
      }
    }
  }, [isOpen]); // Only re-run when isOpen changes

  return (
    <div className="collapsible">
      <div className="collapsible-header" onClick={toggleOpen} aria-expanded={isOpen}>
        <h4 className="collapsible-title">{title}</h4>
        <span className={`collapsible-icon ${isOpen ? 'open' : ''}`}></span>
      </div>
      {/* The content wrapper will now always be controlled by height */}
      <div
        ref={contentRef}
        className={`collapsible-content-wrapper ${isOpen ? 'collapsible-content-open' : 'collapsible-content-closed'}`}
        // If content is closed, use `display: none` for screen readers and true hiding,
        // but only after the height transition is complete.
        style={{ display: isOpen || contentRef.current?.style.height === '0px' ? 'block' : 'none' }}
        onTransitionEnd={(e) => {
            // Only hide content if transition has made height 0
            if (!isOpen && e.propertyName === 'height') {
                e.currentTarget.style.display = 'none';
            }
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;