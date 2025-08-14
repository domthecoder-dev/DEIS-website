// src/components/ToolsCarousel.js
import React, { useState, useEffect, useRef } from 'react';
import '../styles/ToolsCarousel.css'; // We'll create this CSS file next

// Placeholder icons - you would replace these with actual SVG, image imports, or font-awesome classes
// For now, they'll just render as empty spans or simple text
const ToolIconHardcode = () => <span className="tool-icon">{'</>'}</span>;
const ToolIconWordPress = () => <span className="tool-icon">WP</span>;
const ToolIconWix = () => <span className="tool-icon">Wix</span>;
const ToolIconXneelo = () => <span className="tool-icon">X</span>;


// Data for the tools, including a placeholder for an icon component
const toolsData = [
  { id: 1, name: 'Hardcode', description: 'Crafting bespoke websites with pure code for ultimate control and performance.', iconComponent: ToolIconHardcode },
  { id: 2, name: 'WordPress', description: 'Leveraging the world\'s most popular CMS for flexible, scalable, and user-friendly websites.', iconComponent: ToolIconWordPress },
  { id: 3, name: 'Wix', description: 'Building stunning, intuitive websites with the drag-and-drop simplicity of Wix for quick deployment.', iconComponent: ToolIconWix },
  { id: 4, name: 'Xneelo', description: 'Providing reliable, secure, and blazing-fast web hosting to ensure your site is always online.', iconComponent: ToolIconXneelo },
];

const ToolsCarousel = ({ itemsToShow = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Calculate total number of items
  const totalItems = toolsData.length;

  // --- Carousel Navigation Logic ---
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems); // Loop back to start
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems); // Loop back to end
  };

  // --- Swiping/Dragging Logic (simplified for brevity, can be enhanced) ---
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust sensitivity
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // On mouse up, snap to the nearest "full" item if not perfectly aligned
    // This part can be complex for multi-item carousels, often handled with `scroll-snap-type` CSS or custom logic.
    // For now, we'll rely on button clicks for explicit navigation and drag for quick scrolls.
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Calculate the offset for the transform to center the active item
  // This is a simplified approach. A more robust one might calculate based on item widths.
  // For 'three showing, middle focused', we'll rely heavily on CSS positioning.
  const getTransformStyle = () => {
    // This value will be controlled primarily by CSS grid/flex and transform on individual items
    // based on their index relative to currentIndex.
    return {};
  };


  return (
    <div className="tools-carousel-wrapper">
      <div className="tools-carousel-container"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {toolsData.map((tool, index) => {
          // Calculate positions relative to the current active index for styling
          // This is a simplified example; a full-blown center-mode carousel needs careful calculation
          // of offsets and z-indexes for adjacent items.
          let positionClass = '';
          if (index === currentIndex) {
            positionClass = 'center-active';
          } else if (index === (currentIndex - 1 + totalItems) % totalItems) { // Left neighbor
            positionClass = 'left-neighbor';
          } else if (index === (currentIndex + 1) % totalItems) { // Right neighbor
            positionClass = 'right-neighbor';
          } else {
            positionClass = 'hidden-item'; // Items not visible
          }

          // In a true "three items showing, middle focused", the CSS will handle the visibility
          // and scaling based on these classes.
          return (
            <div key={tool.id} className={`tool-carousel-item ${positionClass}`}>
              {tool.iconComponent && <tool.iconComponent />} {/* Render the icon component */}
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>
          );
        })}
      </div>

      <div className="carousel-navigation">
        <button onClick={goToPrev} className="nav-button prev-button">←</button>
        <button onClick={goToNext} className="nav-button next-button">→</button>
      </div>
    </div>
  );
};

export default ToolsCarousel;