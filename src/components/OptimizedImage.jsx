import React, { useState, useEffect, useRef } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E",
  loading = "lazy",
  sizes = "100vw",
  quality = 85,
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imageSrc, setImageSrc] = useState(placeholder);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (priority || !imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.unobserve(entry.target);
        }
      },
      {
        rootMargin: '100px 0px',
        threshold: 0.1
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // Fallback to placeholder on error
    setIsLoaded(true);
  };

  // Generate optimized image sources
  const generateImageSources = (originalSrc) => {
    if (!originalSrc || originalSrc.startsWith('data:')) return originalSrc;
    
    // For local images, we'll use the original for now
    // In production, you'd want to serve optimized versions
    return originalSrc;
  };

  // Generate WebP src if possible
  const generateWebPSrc = (originalSrc) => {
    if (!originalSrc || originalSrc.startsWith('data:')) return originalSrc;
    
    // For local images, we'll use the original for now
    // In production, you'd want to serve WebP versions
    return originalSrc;
  };

  // Generate responsive srcset
  const generateSrcSet = (originalSrc) => {
    if (!originalSrc || originalSrc.startsWith('data:')) return originalSrc;
    
    // For local images, return the original
    // In production, you'd generate multiple sizes
    return originalSrc;
  };

  useEffect(() => {
    if (isInView && src) {
      setImageSrc(generateImageSources(src));
    }
  }, [isInView, src]);

  // Check if this is a logo image
  const isLogoImage = src && (src.includes('logo') || src.includes('Logo'));
  
  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ 
        backgroundColor: isLogoImage ? 'transparent' : '#f3f4f6',
        minHeight: height || 'auto',
        aspectRatio: width && height ? `${width}/${height}` : 'auto'
      }}
    >
      {/* Placeholder/Blur */}
      {!isLoaded && !isLogoImage && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            backgroundImage: `url(${placeholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      
      {/* Main Image */}
      {isInView && (
        <picture>
          <source 
            srcSet={generateWebPSrc(src)} 
            type="image/webp" 
          />
          <img
            src={imageSrc}
            alt={alt}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            loading={loading}
            sizes={sizes}
            width={width}
            height={height}
            onLoad={handleLoad}
            onError={handleError}
            style={{
              width: '100%',
              height: '100%',
              objectFit: isLogoImage ? 'contain' : 'cover',
              objectPosition: 'center'
            }}
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;


