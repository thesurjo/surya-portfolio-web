"use client";
import ReCAPTCHA from "react-google-recaptcha";
import React, { createContext, useRef, useState, Suspense } from "react";

// Create a context to access the reCAPTCHA token throughout the app
export const ReCaptchaContext = createContext<{
  getToken: () => Promise<string | null>;
}>({
  getToken: async () => null,
});

// Inner component that uses client-side functionality
function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isReady, setIsReady] = useState(true);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  // Function to get a fresh token when needed
  const getToken = async (): Promise<string | null> => {
    if (!recaptchaRef.current) return null;
    
    try {
      const token = await recaptchaRef.current.executeAsync();
      return token;
    } catch (error) {
      console.error("ReCAPTCHA error:", error);
      return null;
    }
  };

  return (
    <ReCaptchaContext.Provider value={{ getToken }}>
      {children}
      {isReady && (
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={siteKey}
        />
      )}
    </ReCaptchaContext.Provider>
  );
}

// Loading fallback for Suspense
function LoadingFallback() {
  return null; // Empty fallback to avoid UI shifts
}

// Main wrapper component that uses Suspense
export default function GoogleCaptchaWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ReCaptchaProvider>
        {children}
      </ReCaptchaProvider>
    </Suspense>
  );
}
