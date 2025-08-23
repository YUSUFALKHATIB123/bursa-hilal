import React, { useState, useEffect, useRef } from 'react';
import OptimizedImage from './OptimizedImage';
import { optimizeGalleryLoading, getImagePriority } from '../utils/imageOptimization';

const OptimizedFabricGallery = ({ 
  images, 
  category, 
  className = "", 
  columns = { sm: 1, md: 2, lg: 3, xl: 4 },
  gap = 4,
  title,
  description 
}) => {
  const [visibleImages, setVisibleImages] = useState([]);
  const [currentBatch, setCurrentBatch] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);
  const batchSize = 6;

  useEffect(() => {
    // Optimize image loading
    const { critical, batches } = optimizeGalleryLoading(images, batchSize);
    setVisibleImages(critical);
  }, [images]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoading) {
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
  }, [currentBatch, images, isLoading]);

  const loadMoreImages = () => {
    if (isLoading) return;
    
    setIsLoading(true);
    const { batches } = optimizeGalleryLoading(images, batchSize);
    
    setTimeout(() => {
      if (currentBatch < batches.length) {
        setCurrentBatch(prev => prev + 1);
        setVisibleImages(prev => [
          ...prev,
          ...batches[currentBatch]
        ]);
      }
      setIsLoading(false);
    }, 100);
  };

  const getGridCols = () => {
    return `grid-cols-${columns.sm} md:grid-cols-${columns.md} lg:grid-cols-${columns.lg} xl:grid-cols-${columns.xl}`;
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-8 ${className}`}>
      {title && (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
        </div>
      )}
      
      <div 
        ref={containerRef}
        className={`grid gap-${gap} ${getGridCols()}`}
      >
        {visibleImages.map((image, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <OptimizedImage
              src={image}
              alt={`${category} ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              priority={getImagePriority(index, visibleImages.length)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white bg-opacity-90 rounded-full p-3">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {currentBatch * batchSize < images.length && (
        <div className="flex justify-center py-8">
          <div className="flex items-center space-x-2 text-gray-500">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
            <span>Loading more {category}...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedFabricGallery;
