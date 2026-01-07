// Supabase image helper functions
export const getSupabaseImageUrl = (imagePath: string): string => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  
  if (!supabaseUrl) {
    console.warn('VITE_SUPABASE_URL not found, using fallback image');
    return 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  }
  
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  return `${supabaseUrl}/storage/v1/object/public/images/${cleanPath}`;
};

// Alternative function for when you need to handle both public and signed URLs
export const getImageUrl = (imagePath: string, isPublic: boolean = true): string => {
  if (imagePath.startsWith('http')) {
    // Already a full URL (like Pexels images)
    return imagePath;
  }
  
  if (isPublic) {
    return getSupabaseImageUrl(imagePath);
  }
  
  // For signed URLs, you would need to implement the signing logic here
  // For now, fallback to public URL
  return getSupabaseImageUrl(imagePath);
};