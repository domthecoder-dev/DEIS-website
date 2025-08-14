// src/hooks/useMediaQuery.js
import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    // Using addEventListener for modern browser compatibility, replacing addListener
    const listener = (event) => setMatches(event.matches);
    media.addEventListener('change', listener);

    return () => {
      // Using removeEventListener for modern browser compatibility
      media.removeEventListener('change', listener);
    };
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;