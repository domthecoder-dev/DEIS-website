import React, { useState, useEffect } from 'react';
import BackgroundImg from "../../Images/HandsCodingOnLaptop.jpg";
import "./WSUA.css";

const HeroSection3 = () => {
  const listItems = [
    <li key={1}><b>Expert Website Development:</b> Robust and scalable hard-coded websites.</li>,
    <li key={2}><b>Reliable Xneelo Hosting:</b> Fast, secure, always accessible.</li>,
    <li key={3}><b>Personalized Customization:</b> Unique designs, tailored functionalities.</li>,
    <li key={4}><b>SEO Optimization:</b> Strategic meta tags, improved search visibility.</li>,
    <li key={5}><b>Responsive Design:</b> Flawless across all devices.</li>,
    <li key={6}><b>Dedicated Customer Care:</b> Exceptional support, every step.</li>,
    <li key={7}><b>Proven Experience:</b> Over five years delivering successful solutions.</li>
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to go to next item
  const nextItem = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listItems.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with CSS transition duration
  };

  // Function to go to previous item
  const prevItem = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + listItems.length) % listItems.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Handle manual navigation
  const handleManualNavigation = () => {
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000); // Resume auto-play after 5 seconds
  };

  // Auto-play effect
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextItem();
      }, 4000); // Change item every 4 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, currentIndex, isTransitioning]);

  return (
    <div className="hero-container3">
      {/* Background image with fixed positioning */}
      <div
        className="hero-background3"
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      ></div>

      {/* Content container */}
      <div className="hero-content3">
        <h1 className="hero-title3">What Sets Us Apart?</h1>
        
        <div className="carousel-container">
          <button 
            className="nav-arrow nav-arrow-left" 
            onClick={() => {
              prevItem();
              handleManualNavigation();
            }}
            aria-label="Previous item"
          >
            ‹
          </button>
          
          <div className="carousel-item">
            {listItems[currentIndex]}
          </div>
          
          <button 
            className="nav-arrow nav-arrow-right" 
            onClick={() => {
              nextItem();
              handleManualNavigation();
            }}
            aria-label="Next item"
          >
            ›
          </button>
        </div>
        
        <div className="carousel-dots">
          {listItems.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setCurrentIndex(index);
                handleManualNavigation();
              }}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection3;