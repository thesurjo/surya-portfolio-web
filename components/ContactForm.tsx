"use client";

import { useState, Suspense } from 'react';
import useReCaptcha from '@/hooks/useReCaptcha';

// Create a ContactFormContent component that will be wrapped in Suspense
function ContactFormContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  // Use our reCAPTCHA hook
  const { getToken } = useReCaptcha();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);
    
    try {
      // Get a fresh reCAPTCHA token
      const recaptchaToken = await getToken();
      
      if (!recaptchaToken) {
        throw new Error('Could not get reCAPTCHA token. Please try again.');
      }
      
      // Send form data with reCAPTCHA token to your API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      // Success handling
      setSubmitResult({
        success: true,
        message: 'Message sent successfully!'
      });
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      // Error handling
      setSubmitResult({
        success: false,
        message: error instanceof Error ? error.message : 'An unknown error occurred'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-[--second-bg-color] border border-gray-700 focus:border-[--main-color] focus:outline-none focus:ring-1 focus:ring-[--main-color]"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-[--second-bg-color] border border-gray-700 focus:border-[--main-color] focus:outline-none focus:ring-1 focus:ring-[--main-color]"
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-[--second-bg-color] border border-gray-700 focus:border-[--main-color] focus:outline-none focus:ring-1 focus:ring-[--main-color]"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-[--second-bg-color] border border-gray-700 focus:border-[--main-color] focus:outline-none focus:ring-1 focus:ring-[--main-color]"
        />
      </div>
      
      {submitResult && (
        <div className={`p-3 rounded-lg ${submitResult.success ? 'bg-green-900/30 border border-green-700' : 'bg-red-900/30 border border-red-700'}`}>
          <p className={`text-sm ${submitResult.success ? 'text-green-400' : 'text-red-400'}`}>
            {submitResult.message}
          </p>
        </div>
      )}
      
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-[--main-color] text-[--bg-color] rounded-lg text-center font-medium hover:bg-[--main-color]/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      
      <div className="text-xs text-gray-500 text-center">
        This site is protected by reCAPTCHA and the Google{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[--main-color]">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[--main-color]">
          Terms of Service
        </a>{' '}
        apply.
      </div>
    </form>
  );
}

// Loading state for Suspense
function ContactFormLoading() {
  return <div className="animate-pulse h-96 bg-gray-800/20 rounded-lg"></div>;
}

// Main component with Suspense
export default function ContactForm() {
  return (
    <Suspense fallback={<ContactFormLoading />}>
      <ContactFormContent />
    </Suspense>
  );
} 