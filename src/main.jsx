import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/performance.css'

// Performance optimization imports
import { usePerformanceOptimization } from './hooks/usePerformanceOptimization.js'

// Register service worker for caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Preload critical resources
const preloadCriticalResources = () => {
  const criticalResources = [
    '/src/assets/logo.avif',
    '/src/assets/company-building.webp'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.webp') || resource.endsWith('.avif') ? 'image' : 'fetch';
    document.head.appendChild(link);
  });
};

// Performance monitoring
const initPerformanceMonitoring = () => {
  if ('performance' in window) {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime, 'ms');
            }
            if (entry.entryType === 'first-input') {
              console.log('FID:', entry.processingStart - entry.startTime, 'ms');
            }
            if (entry.entryType === 'layout-shift') {
              console.log('CLS:', entry.value);
            }
          }
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        console.warn('Performance monitoring not supported');
      }
    }
  }
};

// Initialize performance optimizations
preloadCriticalResources();
initPerformanceMonitoring();

// Remove loading screen
const removeLoadingScreen = () => {
  const loading = document.getElementById('loading');
  if (loading) {
    loading.style.opacity = '0';
    setTimeout(() => {
      loading.style.display = 'none';
    }, 300);
  }
};

// App wrapper with performance optimizations
const AppWithPerformance = () => {
  usePerformanceOptimization();
  
  React.useEffect(() => {
    removeLoadingScreen();
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithPerformance />
  </React.StrictMode>,
)
