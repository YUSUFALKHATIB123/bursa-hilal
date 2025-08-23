// Image optimization utilities

// Generate responsive image sizes
export const generateImageSizes = (originalWidth, originalHeight) => {
  const sizes = [
    { width: 400, height: 300 },
    { width: 800, height: 600 },
    { width: 1200, height: 900 },
    { width: originalWidth, height: originalHeight }
  ];
  
  return sizes.filter(size => size.width <= originalWidth);
};

// Generate WebP srcset
export const generateWebPSrcSet = (originalSrc, sizes) => {
  if (!originalSrc || originalSrc.startsWith('data:')) return originalSrc;
  
  // For local images, return the original
  // In production, you'd generate WebP versions
  return originalSrc;
};

// Generate responsive srcset
export const generateSrcSet = (originalSrc, sizes) => {
  if (!originalSrc || originalSrc.startsWith('data:')) return originalSrc;
  
  // For local images, return the original
  // In production, you'd generate multiple sizes
  return originalSrc;
};

// Lazy loading threshold
export const LAZY_LOADING_THRESHOLD = 0.1;
export const LAZY_LOADING_ROOT_MARGIN = '100px 0px';

// Image placeholder generator
export const generatePlaceholder = (width = 400, height = 300, color = '#f3f4f6') => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='${color.replace('#', '%23')}'/%3E%3C/svg%3E`;
};

// Preload critical images
export const preloadImage = (src) => {
  if (!src || src.startsWith('data:')) return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

// Batch preload images
export const preloadImages = (imageUrls) => {
  imageUrls.forEach(url => preloadImage(url));
};

// Image loading priority
export const getImagePriority = (index, totalImages, criticalCount = 4) => {
  return index < criticalCount;
};

// Optimize image loading for gallery
export const optimizeGalleryLoading = (images, batchSize = 6) => {
  const criticalImages = images.slice(0, 4);
  const remainingImages = images.slice(4);
  
  // Preload critical images
  preloadImages(criticalImages);
  
  // Return batches for lazy loading
  const batches = [];
  for (let i = 0; i < remainingImages.length; i += batchSize) {
    batches.push(remainingImages.slice(i, i + batchSize));
  }
  
  return {
    critical: criticalImages,
    batches
  };
};
