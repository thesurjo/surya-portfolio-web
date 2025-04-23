# Google reCAPTCHA Integration for Next.js

This project uses Google reCAPTCHA for general site protection. The implementation is configured to work correctly with Next.js server-side rendering (SSR) and static site generation (SSG).

## Setup Instructions

### 1. Register Your Site with Google reCAPTCHA

1. Go to the Google reCAPTCHA admin console: https://www.google.com/recaptcha/admin
2. Sign in with your Google account
3. Click on the "+" (Create) button
4. Fill in the form:
   - Label: Your website name (e.g., "Surya Portfolio Website")
   - reCAPTCHA type: Select "reCAPTCHA v2" with the "Invisible reCAPTCHA" option
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
3. The Google reCAPTCHA badge is hidden via CSS since the required notice is added elsewhere

## Legal Requirements

When using Google reCAPTCHA, you must:

1. Include a reference to Google's reCAPTCHA service on your site:

```
This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
```

2. Link to Google's Privacy Policy and Terms of Service:
   - Privacy Policy: https://policies.google.com/privacy
   - Terms of Service: https://policies.google.com/terms

## Troubleshooting

- If you see build errors about `useSearchParams()`, ensure you're using the Suspense boundary as shown in the wrapper
- For static site generation or SSR, ensure that your components using reCAPTCHA are wrapped in a Suspense boundary
- Ensure your site key is correctly set in your environment variables
- Make sure the domains in your reCAPTCHA settings include all domains where your site is running

For more information, visit the official documentation:
- reCAPTCHA: https://developers.google.com/recaptcha/docs/verify
- Next.js with Client Components: https://nextjs.org/docs/app/building-your-application/rendering/client-components 