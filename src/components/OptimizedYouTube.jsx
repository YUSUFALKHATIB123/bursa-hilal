import React, { useState, useRef, useEffect } from 'react';

const OptimizedYouTube = ({ 
  videoId, 
  className = "", 
  width = 560, 
  height = 315,
  title = "YouTube video",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

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

    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handlePlay = () => {
    setShowVideo(true);
    setIsLoaded(true);
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg ${className}`}
      style={{ 
        backgroundColor: '#f3f4f6',
        aspectRatio: `${width}/${height}`,
        width: '100%'
      }}
    >
      {!showVideo && isInView ? (
        // Thumbnail with play button
        <div 
          className="relative w-full h-full cursor-pointer group"
          onClick={handlePlay}
        >
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            width={width}
            height={height}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
            {title}
          </div>
        </div>
      ) : showVideo ? (
        // Embedded video
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          width={width}
          height={height}
          {...props}
        />
      ) : (
        // Loading placeholder
        <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-500">Loading video...</div>
        </div>
      )}
    </div>
  );
};

export default OptimizedYouTube;
