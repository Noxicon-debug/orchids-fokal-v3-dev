// Image optimization utilities
export const getOptimizedImageUrl = (
  originalUrl: string, 
  width?: number, 
  height?: number, 
  quality: number = 80
): string => {
  // If it's already an optimized URL or external URL, return as is
  if (originalUrl.includes('auto=compress') || originalUrl.startsWith('https://images.pexels.com')) {
    return originalUrl;
  }

  // For Supabase images, add optimization parameters
  if (originalUrl.includes('supabase.co')) {
    const url = new URL(originalUrl);
    const params = new URLSearchParams();
    
    params.set('auto', 'compress');
    params.set('cs', 'tinysrgb');
    params.set('q', quality.toString());
    
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    
    // Add parameters to the URL
    const separator = url.search ? '&' : '?';
    return `${originalUrl}${separator}${params.toString()}`;
  }

  return originalUrl;
};

// Preload critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Generate responsive image sizes
export const getResponsiveImageSizes = (baseUrl: string) => {
  return {
    mobile: getOptimizedImageUrl(baseUrl, 480, undefined, 75),
    tablet: getOptimizedImageUrl(baseUrl, 768, undefined, 80),
    desktop: getOptimizedImageUrl(baseUrl, 1200, undefined, 85),
    large: getOptimizedImageUrl(baseUrl, 1920, undefined, 90)
  };
};

// Image loading states
export const createImageLoader = () => {
  const loadedImages = new Set<string>();
  
  return {
    isLoaded: (src: string) => loadedImages.has(src),
    markAsLoaded: (src: string) => loadedImages.add(src),
    preloadImages: async (urls: string[]) => {
      const promises = urls.map(url => preloadImage(url));
      await Promise.allSettled(promises);
      urls.forEach(url => loadedImages.add(url));
    }
  };
};