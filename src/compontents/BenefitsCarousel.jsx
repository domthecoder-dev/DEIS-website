// src/components/BenefitsCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import useMediaQuery from './hooks/useMediaQuery.js'; // Assuming you have this hook
import '../styles/BenefitsCarousel.css'; // New CSS file for carousel specific styles

// Data for the benefits. This makes the component reusable and cleaner.
// You can move this into a separate data file if benefits are used elsewhere.
const benefitsData = [
  {
    id: 1,
    icon: '', // Placeholder for actual icon, e.g., SVG or image
    title: 'Crafted with Precision',
    description: 'We go beyond templates. Our websites are built with meticulous attention to detail, whether we are writing clean code or customising a platform to perfection.'
  },
  {
    id: 2,
    icon: '',
    title: 'Powering Your Success',
    description: 'A great website is more than just aesthetics. We focus on creating sites that are user-friendly, SEO-optimized, and designed to achieve your specific business goals.'
  },
  {
    id: 3,
    icon: '',
    title: 'Your Vision, Our Expertise',
    description: 'We listen closely to your needs and translate your vision into a compelling online reality, offering personalised solutions every step of the way.'
  }
];

const BenefitsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Current visible card index
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null); // Reference to the actual slider DOM element
  const intervalRef = useRef(null); // Reference to the auto-slide interval
  const isMobile = useMediaQuery('(max-width: 992px)'); // Use your mobile breakpoint

  // --- Auto-sliding Logic ---
  const startAutoSlide = () => {
    // Clear any existing interval to prevent multiple intervals
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % benefitsData.length);
    }, 4000); // Auto-slide every 4 seconds
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    // Only run auto-slide on mobile
    if (isMobile) {
      startAutoSlide();
      return () => stopAutoSlide(); // Cleanup on unmount or if mobile view changes
    } else {
      stopAutoSlide(); // Ensure auto-slide is off on desktop
    }
  }, [isMobile]); // Re-run effect if isMobile changes

  // --- Carousel Positioning Logic ---
  useEffect(() => {
    if (sliderRef.current) {
      // Calculate target position based on activeIndex
      const offset = -activeIndex * sliderRef.current.offsetWidth;
      setCurrentTranslate(offset); // Update translate state
    }
  }, [activeIndex]); // Recalculate if activeIndex changes

  // Apply the translation to the slider (this makes the visual slide)
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${currentTranslate}px)`;
      // Add or remove transition for smooth vs. direct movement during drag
      sliderRef.current.style.transition = isDragging ? 'none' : 'transform 0.4s ease-out';
    }
  }, [currentTranslate, isDragging]);

  // --- Dragging Logic (Touch and Mouse) ---

  const getPositionX = (event) => {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  };

  const handleDragStart = (event) => {
    stopAutoSlide(); // Stop auto-slide on user interaction
    setIsDragging(true);
    setStartX(getPositionX(event));
    setPrevTranslate(currentTranslate); // Store current position before drag
    // Disable text selection during drag
    document.body.style.userSelect = 'none';
  };

  const handleDragMove = (event) => {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const diff = currentPosition - startX;
    // Update translate based on drag difference relative to previous position
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    document.body.style.userSelect = ''; // Re-enable text selection

    const movedBy = currentTranslate - prevTranslate; // How much was it dragged?
    const sliderWidth = sliderRef.current.offsetWidth; // Width of one slide

    // Determine if we should move to next/prev slide based on threshold
    if (movedBy < -sliderWidth * 0.25) { // Dragged left (next slide)
      setActiveIndex(prevIndex => (prevIndex + 1) % benefitsData.length);
    } else if (movedBy > sliderWidth * 0.25) { // Dragged right (previous slide)
      setActiveIndex(prevIndex => (prevIndex - 1 + benefitsData.length) % benefitsData.length);
    } else {
      // Not enough drag, snap back to current slide
      setCurrentTranslate(prevTranslate);
    }

    // Resume auto-slide after a short delay
    setTimeout(startAutoSlide, 2000); // 2 seconds delay before resuming
  };

  // Prevent drag default behavior for images etc.
  const handlePreventDefault = (e) => {
    e.preventDefault();
  };


  return (
    <div className="benefits-carousel-container">
      <div
        className="benefits-carousel-slider"
        ref={sliderRef}
        // Mouse events
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd} // End drag if mouse leaves
        // Touch events
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        // Prevent default drag for some elements like images
        onDragStart={handlePreventDefault}
      >
        {benefitsData.map((benefit, index) => (
          <div key={benefit.id} className="benefit-card">
            <span className="icon"></span> {/* Placeholder for actual icon */}
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
      {/* Navigation Dots (Optional, but good for user feedback) */}
      <div className="carousel-dots">
        {benefitsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => {
              setActiveIndex(index);
              stopAutoSlide(); // Stop auto-slide on dot click
              setTimeout(startAutoSlide, 2000); // Resume after delay
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BenefitsCarousel;