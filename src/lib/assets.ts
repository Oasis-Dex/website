/**
 * Get the correct asset path for both development and production (GitHub Pages).
 * Automatically prepends the BASE_URL for GitHub Pages subdirectory deployment.
 * 
 * @param path - The path to the asset, e.g., "/assets/image.png" or "assets/image.png"
 * @returns The full path with BASE_URL prepended
 * 
 * @example
 * ```tsx
 * import { getAssetPath } from '@/lib/assets';
 * 
 * <img src={getAssetPath('/assets/logo.svg')} alt="Logo" />
 * ```
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

