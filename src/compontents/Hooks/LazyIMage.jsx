// components/LazyImage.jsx
import { useIntersectionObserver } from './useIntersectionObserver';

const LazyImage = ({ src, alt, className, width, height }) => {
  const [ref, isVisible] = useIntersectionObserver({
    rootMargin: '50px', // Starts loading 50px before element enters viewport
  });

  return (
    <div ref={ref}>
      {isVisible ? (
        <img 
          src={src} 
          alt={alt} 
          className={className}
          width={width}
          height={height}
        />
      ) : (
        // Optional: Show placeholder while loading
        <div 
          className={`bg-gray-200 animate-pulse ${className}`}
          style={{ width, height }}
        />
      )}
    </div>
  );
};

export default LazyImage;