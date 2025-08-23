import { useEffect, useCallback } from 'react';

// Performance optimization hook
export const usePerformanceOptimization = () => {
  
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = '/src/index.css';
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.as = 'font';
    fontPreload.type = 'font/woff2';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    // Add loading="lazy" to all images that don't have it
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }, []);

  // Optimize animations
  const optimizeAnimations = useCallback(() => {
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
    }
  }, []);

  // Optimize scroll performance
  const optimizeScroll = useCallback(() => {
    // Use passive event listeners for better scroll performance
    const scrollElements = document.querySelectorAll('.scroll-container');
    scrollElements.forEach(element => {
      element.addEventListener('scroll', () => {}, { passive: true });
    });
  }, []);

  // Cleanup function
  const cleanup = useCallback(() => {
    // Remove any performance optimizations when component unmounts
    const preloadLinks = document.querySelectorAll('link[rel="preload"]');
    preloadLinks.forEach(link => link.remove());
  }, []);

  useEffect(() => {
    // Apply optimizations when component mounts
    preloadCriticalResources();
    optimizeImages();
    optimizeAnimations();
    optimizeScroll();

    // Cleanup on unmount
    return cleanup;
  }, [preloadCriticalResources, optimizeImages, optimizeAnimations, optimizeScroll, cleanup]);

  return {
    preloadCriticalResources,
    optimizeImages,
    optimizeAnimations,
    optimizeScroll,
    cleanup
  };
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '100px 0px',
    ...options
  };

  const observerRef = useCallback((node) => {
    if (node !== null) {
      const observer = new IntersectionObserver(callback, defaultOptions);
      observer.observe(node);
      
      return () => {
        observer.unobserve(node);
        observer.disconnect();
      };
    }
  }, [callback, defaultOptions]);

  return observerRef;
};

// Debounce hook for performance
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Throttle hook for performance
export const useThrottle = (callback, delay) => {
  const lastRun = useRef(Date.now());

  return useCallback((...args) => {
    if (Date.now() - lastRun.current >= delay) {
      callback(...args);
      lastRun.current = Date.now();
    }
  }, [callback, delay]);
};
