// components/LazyBackground.jsx
import { useIntersectionObserver } from './useIntersectionObserver';

const LazyBackground = ({ 
  children, 
  imageUrl, 
  className = "", 
  placeholderColor = "#f3f4f6" 
}) => {
  const [ref, isVisible] = useIntersectionObserver({
    rootMargin: '100px', // Load 100px before it enters viewport
  });

  const backgroundStyle = {
    backgroundImage: isVisible ? `url(${imageUrl})` : 'none',
    backgroundColor: isVisible ? 'transparent' : placeholderColor,
  };

  return (
    <div 
      ref={ref}
      className={className}
      style={backgroundStyle}
    >
      {children}
    </div>
  );
};

export default LazyBackground;
