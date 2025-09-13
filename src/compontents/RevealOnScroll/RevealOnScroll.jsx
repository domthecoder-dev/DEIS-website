// src/components/RevealOnScroll.js
import React, { useRef, useEffect, useState } from 'react';
import useMediaQuery from '../Hooks/useMediaQuery'; // Ensure this path is correct
import './RevealOnScroll.css';

const RevealOnScroll = ({ children, delay = 0, threshold = 0.8, className = '' }) => {
  const [hasAnimated, setHasAnimated] = useState(false); // New state to ensure it animates only once per load
  const targetRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)'); // Consistent mobile breakpoint

  useEffect(() => {
    // If not mobile, or if it has already animated, just return.
    // For desktop, we don't want any animation classes applied.
    if (!isMobile || hasAnimated) {
      return;
    }

    if (!targetRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only trigger if it's mobile and hasn't animated yet
            setTimeout(() => {
              setHasAnimated(true); // Mark as animated
            }, delay);
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    observer.observe(targetRef.current);

    // Cleanup observer on component unmount
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [delay, threshold, isMobile, hasAnimated]); // Add hasAnimated to deps

  // Render logic:
  // For mobile: apply animation classes if not yet animated, or final state if animated.
  // For desktop: render without any animation classes.
  return (
    <div
      ref={targetRef}
      className={`${className} ${isMobile && !hasAnimated ? 'reveal-on-scroll-hidden' : ''} ${isMobile && hasAnimated ? 'reveal-on-scroll-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;