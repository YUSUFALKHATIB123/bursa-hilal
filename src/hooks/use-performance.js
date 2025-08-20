import { useEffect, useRef, useState } from 'react';

// Hook لمراقبة الأداء
export const usePerformanceMonitor = () => {
  useEffect(() => {
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Page Load Time:', entry.loadEventEnd - entry.loadEventStart, 'ms');
            console.log('DOM Content Loaded:', entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart, 'ms');
            console.log('First Paint:', entry.loadEventEnd - entry.fetchStart, 'ms');
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation'] });
      
      return () => observer.disconnect();
    }
  }, []);
};

// Hook لتحسين الصور
export const useImageOptimization = (src) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      setIsError(true);
    };
    
    img.src = src;
  }, [src]);

  return { isLoaded, isError, currentSrc };
};

// Hook لتحسين التمرير
export const useSmoothScroll = () => {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return { scrollToElement };
};

// Hook لتحسين التفاعل
export const useInteractionOptimization = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return {
    isHovered,
    isFocused,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
    handleBlur
  };
};

// Hook لتحسين الذاكرة
export const useMemoryOptimization = () => {
  const cleanupRef = useRef([]);

  const addCleanup = (cleanup) => {
    cleanupRef.current.push(cleanup);
  };

  useEffect(() => {
    return () => {
      cleanupRef.current.forEach(cleanup => cleanup());
      cleanupRef.current = [];
    };
  }, []);

  return { addCleanup };
};


