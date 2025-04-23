# Google reCAPTCHA Integration for Next.js

This project uses Google reCAPTCHA to protect your website from spam and abuse. The implementation is configured to work correctly with Next.js server-side rendering (SSR) and static site generation (SSG).

## Setup Instructions

### 1. Register Your Site with Google reCAPTCHA

1. Go to the Google reCAPTCHA admin console: https://www.google.com/recaptcha/admin
2. Sign in with your Google account
3. Click on the "+" (Create) button
4. Fill in the form:
   - Label: Your website name (e.g., "Surya Portfolio Website")
   - reCAPTCHA type: Select "reCAPTCHA v2" with the "I'm not a robot" checkbox or "Invisible reCAPTCHA"
   - Domains: Add your domains (e.g., "suryabasak.com") and localhost for development
   - Accept the Terms of Service
   - Click "Submit"
5. You will receive two keys:
   - Site Key (for the frontend)
   - Secret Key (for the backend)

### 2. Add Environment Variables

Create or update your `.env.local` file with the following variables:

```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

For production deployment, add these environment variables to your hosting platform.

## How It Works

The implementation is designed to work with Next.js's SSR and SSG features:

1. The entire website is wrapped in a `GoogleCaptchaWrapper` component with a Suspense boundary
2. reCAPTCHA runs invisibly in the background without disrupting server rendering
3. When a form is submitted, the system gets a fresh reCAPTCHA token
4. The token is sent to the server along with the form data
5. The server verifies the token with Google before processing the form

## Using reCAPTCHA in Your Components

This implementation provides a custom hook `useReCaptcha()` to easily integrate reCAPTCHA verification into any component:

```tsx
"use client";
import { Suspense } from 'react';
import useReCaptcha from '@/hooks/useReCaptcha';

// Create a component that will be wrapped in Suspense
function MyFormContent() {
  const { getToken } = useReCaptcha();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Get a fresh reCAPTCHA token
    const recaptchaToken = await getToken();
    
    // Use the token in your API request
    const response = await fetch('/api/your-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // your form data
        recaptchaToken
      })
    });
    
    // Handle the response
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields */}
      <button type="submit">Submit</button>
    </form>
  );
}

// Loading state for Suspense
function LoadingState() {
  return <div>Loading...</div>;
}

// Export the component with Suspense
export default function MyForm() {
  return (
    <Suspense fallback={<LoadingState />}>
      <MyFormContent />
    </Suspense>
  );
}
```

## Server-Side Verification

In your API routes, use the following pattern to verify reCAPTCHA tokens:

```tsx
// app/api/your-endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { recaptchaToken, ...formData } = await req.json();
    
    // Verify reCAPTCHA token
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const verificationResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`,
      { method: 'POST' }
    );
    
    const recaptchaResult = await verificationResponse.json();
    
    if (!recaptchaResult.success) {
      return NextResponse.json(
        { message: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }
    
    // Process form data here
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error processing request' },
      { status: 500 }
    );
  }
}
```

## Legal Requirements

When using Google reCAPTCHA, you must:

1. Add the following privacy notice near your forms:

```
This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
```

2. Link to Google's Privacy Policy and Terms of Service:
   - Privacy Policy: https://policies.google.com/privacy
   - Terms of Service: https://policies.google.com/terms

## Troubleshooting

- If you see build errors about `useSearchParams()`, ensure you're using the Suspense boundary as shown in the examples
- For static site generation or SSR, ensure that your components using reCAPTCHA are wrapped in a Suspense boundary
- Add `console.log` statements in your API route to check if the reCAPTCHA verification is working
- Ensure your site key and secret key are correctly set in your environment variables
- Make sure the domains in your reCAPTCHA settings include all domains where your site is running

For more information, visit the official documentation:
- reCAPTCHA: https://developers.google.com/recaptcha/docs/verify
- Next.js with Client Components: https://nextjs.org/docs/app/building-your-application/rendering/client-components 