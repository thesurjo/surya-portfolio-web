"use client";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef, useState, Suspense } from "react";

// Simple ReCaptcha Provider that just loads the script without exposing hooks
function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isReady, setIsReady] = useState(true);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  return (
    <>
      {children}
      {isReady && (
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={siteKey}
        />
      )}
    </>
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
