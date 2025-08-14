// src/components/ApproachStepper.js
import React, { useState, useEffect, useRef } from 'react';
import '../styles/ApproachStepper.css'; // We'll create this CSS file next

// Data for the process steps. Centralizing data makes it cleaner.
const approachStepsData = [
  {
    id: 1,
    icon: '', // Placeholder for actual icon, e.g., SVG or image
    title: 'Discovery & Planning',
    description: 'We start by understanding your business, target audience, and goals to create a tailored strategy.'
  },
  {
    id: 2,
    icon: '',
    title: 'Design & Development',
    description: 'Our skilled team utilises the best tools – from hardcoding for ultimate control to the flexibility of WordPress and Wix – to build your vision.'
  },
  {
    id: 3,
    icon: '',
    title: 'Optimization & Launch',
    description: 'We ensure your website is fast, secure, SEO-friendly, and flawlessly launched.'
  },
  {
    id: 4,
    icon: '',
    title: 'Ongoing Support',
    description: 'Our commitment extends beyond launch, with dedicated support to help you succeed online.'
  }
];

const ApproachStepper = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Current visible step index
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null); // Reference to the actual slider DOM element

  // Effect to apply translation based on activeIndex
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
    setIsDragging(true);
    setStartX(getPositionX(event));
    setPrevTranslate(currentTranslate); // Store current position before drag
    document.body.style.userSelect = 'none'; // Disable text selection during drag
  };

  const handleDragMove = (event) => {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    const diff = currentPosition - startX;
    setCurrentTranslate(prevTranslate + diff);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    document.body.style.userSelect = ''; // Re-enable text selection

    const movedBy = currentTranslate - prevTranslate; // How much was it dragged?
    const sliderWidth = sliderRef.current.offsetWidth; // Width of one slide

    // Determine if we should move to next/prev slide based on threshold
    if (movedBy < -sliderWidth * 0.25) { // Dragged left (next slide)
      setActiveIndex(prevIndex => Math.min(prevIndex + 1, approachStepsData.length - 1));
    } else if (movedBy > sliderWidth * 0.25) { // Dragged right (previous slide)
      setActiveIndex(prevIndex => Math.max(prevIndex - 1, 0));
    } else {
      // Not enough drag, snap back to current slide
      setCurrentTranslate(prevTranslate);
    }
  };

  // Prevent default drag behavior for images etc.
  const handlePreventDefault = (e) => {
    e.preventDefault();
  };

  const goToNext = () => {
    setActiveIndex(prevIndex => Math.min(prevIndex + 1, approachStepsData.length - 1));
  };

  const goToPrev = () => {
    setActiveIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };


  return (
    <div className="approach-stepper-container">
      <div className="stepper-header">
        {approachStepsData.map((step, index) => (
          <div
            key={step.id}
            className={`step-indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="step-number">{index + 1}</span>
            <span className="step-title">{step.title.split(' ')[0]}</span> {/* Show only first word on dot */}
          </div>
        ))}
      </div>

      <div
        className="stepper-slider"
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
        {approachStepsData.map((step, index) => (
          <div key={step.id} className="approach-step-card">
            <span className="icon"></span> {/* Placeholder for actual icon */}
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      <div className="stepper-navigation">
        <button onClick={goToPrev} disabled={activeIndex === 0}>Previous</button>
        <button onClick={goToNext} disabled={activeIndex === approachStepsData.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default ApproachStepper;