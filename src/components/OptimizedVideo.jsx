import React, { useState, useRef, useEffect } from 'react';

const OptimizedVideo = ({ 
  src, 
  poster, 
  className = "", 
  width, 
  height, 
  autoplay = false,
  muted = true,
  loop = false,
  controls = true,
  preload = "metadata",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.unobserve(entry.target);
        }
      },
      {
        rootMargin: '200px 0px',
        threshold: 0.1
      }
    );

    observerRef.current.observe(videoRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    console.error('Video failed to load:', src);
  };

  return (
    <div 
      ref={videoRef}
      className={`relative overflow-hidden ${className}`}
      style={{ 
        backgroundColor: '#f3f4f6',
        minHeight: height || 'auto',
        aspectRatio: width && height ? `${width}/${height}` : '16/9'
      }}
    >
      {/* Placeholder */}
      {!isLoaded && poster && (
        <div 
          className="absolute inset-0 bg-gray-200"
          style={{
            backgroundImage: `url(${poster})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      
      {/* Video */}
      {isInView && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } w-full h-full object-cover`}
          autoplay={autoplay}
          muted={muted}
          loop={loop}
          controls={controls}
          preload={preload}
          onLoadedData={handleLoad}
          onError={handleError}
          width={width}
          height={height}
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedVideo;
