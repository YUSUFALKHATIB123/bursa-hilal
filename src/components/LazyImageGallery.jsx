import React, { useState, useEffect, useRef } from 'react';
import OptimizedImage from './OptimizedImage';

const LazyImageGallery = ({ images, className = "", columns = 3, gap = 4 }) => {
  const [visibleImages, setVisibleImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const batchSize = 6; // Load 6 images at a time

  useEffect(() => {
    // Load first batch immediately
    setVisibleImages(images.slice(0, batchSize));
  }, [images]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load more images when container is visible
            loadMoreImages();
          }
        });
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [currentIndex, images]);

  const loadMoreImages = () => {
    const nextIndex = currentIndex + batchSize;
    if (nextIndex < images.length) {
      setCurrentIndex(nextIndex);
      setVisibleImages(prev => [
        ...prev,
        ...images.slice(nextIndex, nextIndex + batchSize)
      ]);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`grid gap-${gap} ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`
      }}
    >
      {visibleImages.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg">
          <OptimizedImage
            src={image.src}
            alt={image.alt || `Gallery image ${index + 1}`}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
            priority={index < 3} // First 3 images are priority
          />
        </div>
      ))}
      
      {currentIndex + batchSize < images.length && (
        <div className="col-span-full flex justify-center py-8">
          <div className="animate-pulse text-gray-500">
            Loading more images...
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImageGallery;
