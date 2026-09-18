import { useState, useEffect } from 'react';
import defaultPhotoFile from '../assets/images/rishiram_photo.jpg';
import { PHOTO_DATA_URI } from '../assets/images/photoDataUri';

// Embedded ultra-fast zero-404 photo (guaranteed to render everywhere)
export const DEFAULT_PHOTO = PHOTO_DATA_URI;
export const FALLBACK_FILE_PHOTO = defaultPhotoFile;
export { PHOTO_DATA_URI };

export function getStoredPhoto(): string {
  try {
    const saved = localStorage.getItem('rishiram_custom_photo');
    if (saved && saved.startsWith('data:image')) {
      return saved;
    }
  } catch (e) {
    // localStorage might fail in restricted environments
  }
  return DEFAULT_PHOTO;
}

export function saveCustomPhoto(dataUrl: string) {
  try {
    localStorage.setItem('rishiram_custom_photo', dataUrl);
    window.dispatchEvent(new Event('rishiram_photo_updated'));
  } catch (e) {
    console.error('Error saving photo', e);
  }
}

export function resetCustomPhoto() {
  try {
    localStorage.removeItem('rishiram_custom_photo');
    window.dispatchEvent(new Event('rishiram_photo_updated'));
  } catch (e) {
    console.error('Error resetting photo', e);
  }
}

export function useProfilePhoto(): { photoUrl: string; setPhoto: (file: File) => Promise<void>; resetPhoto: () => void } {
  const [photoUrl, setPhotoUrl] = useState<string>(getStoredPhoto());

  useEffect(() => {
    const handleUpdate = () => {
      setPhotoUrl(getStoredPhoto());
    };
    window.addEventListener('rishiram_photo_updated', handleUpdate);
    return () => window.removeEventListener('rishiram_photo_updated', handleUpdate);
  }, []);

  const setPhoto = async (file: File) => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          saveCustomPhoto(result);
          setPhotoUrl(result);
          resolve();
        } else {
          reject(new Error('Failed to read image file'));
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const resetPhoto = () => {
    resetCustomPhoto();
    setPhotoUrl(DEFAULT_PHOTO);
  };

  return { photoUrl, setPhoto, resetPhoto };
}
