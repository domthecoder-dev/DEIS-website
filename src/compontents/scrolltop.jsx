// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the modern scroll-to-top solution
    // for React applications.
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Optional: for a smooth scroll animation
    });
  }, [pathname]); // This effect runs whenever the pathname (route) changes

  return null; // This component doesn't render anything visible
}

export default ScrollToTop;