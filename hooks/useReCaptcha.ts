"use client";

import { useContext } from 'react';
import { ReCaptchaContext } from '../app/google-captcha-wrapper';

/**
 * Hook to access the reCAPTCHA functionality in any component
 * @returns {Object} Object containing a getToken function to get a new reCAPTCHA token
 */
export default function useReCaptcha() {
  try {
    const context = useContext(ReCaptchaContext);
    
    if (context === undefined) {
      console.warn('useReCaptcha must be used within a GoogleCaptchaWrapper');
      return { getToken: async () => null };
    }
    
    return context;
  } catch (error) {
    // Fallback for SSR or if context is not available
    console.warn('ReCaptcha context not available:', error);
    return { getToken: async () => null };
  }
} 