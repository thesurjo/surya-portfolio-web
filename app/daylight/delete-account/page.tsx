'use client';

import Link from 'next/link';
import HomeSection from '@/sections/home.section';
import Header from '@/global/header.global';

export default function DeleteAccountInstructions() {
  return (
    <main className="homepage">
      <Header />
      <section className="w-full py-32 px-4 md:px-[9%] mt-16" id="delete-account">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[var(--second-bg-color)] p-8 md:p-12 rounded-2xl shadow-xl">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--main-color)] font-jetbrains">
                Account Deletion Guide
              </h1>
              <p className="text-[1.6rem] leading-relaxed font-jetbrains opacity-90 max-w-2xl mx-auto">
                We value your privacy and data protection rights. Here's a comprehensive guide on how to delete your Daylight account.
              </p>
            </div>

            <div className="space-y-12">
              {/* Support Contact */}
              <div className="bg-[var(--bg-color)] p-8 rounded-xl">
                <h2 className="text-2xl font-semibold mb-6 text-[var(--main-color)] font-jetbrains">
                  Option 1  : Request via Support
                </h2>
                <div className="space-y-4 font-jetbrains text-[1.6rem]">
                  <p>If you can't access your account or need assistance:</p>
                  <ol className="list-decimal list-inside space-y-4">
                    <li className="pl-2 font-jetbrains">Email us at <span className="text-[var(--main-color)]">support@daylight.com</span></li>
                    <li className="pl-2 font-jetbrains">Use the subject: "Account Deletion Request"</li>
                    <li className="pl-2 font-jetbrains">Include your registered email address</li>
                    <li className="pl-2 font-jetbrains">We'll process your request within 24-48 hours</li>
                  </ol>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="border border-[var(--main-color)] p-8 rounded-xl">
                <h2 className="text-2xl font-semibold mb-6 text-[var(--main-color)] font-jetbrains">
                  After Requesting Deletion
                </h2>
                <ul className="list-disc list-inside space-y-4 font-jetbrains text-[1.6rem]">
                  <li className="pl-2 font-jetbrains">Your account access will be suspended</li>
                  <li className="pl-2 font-jetbrains">All personal data will be permanently erased</li>
                  <li className="pl-2 font-jetbrains">You'll receive a confirmation email</li>
                  <li className="pl-2 font-jetbrains">Active subscriptions will be automatically cancelled</li>
                  <li className="pl-2 font-jetbrains">Complete data removal within 30 days</li>
                </ul>
              </div>

              {/* Data Protection Notice */}
              <div className="bg-red-500/10 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-red-500 font-jetbrains">
                  ⚠️ Important Information
                </h3>
                <div className="space-y-4 font-jetbrains text-[1.6rem] ">
                  <p className='font-jetbrains'>
                    Account deletion is permanent and irreversible. This process will remove:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li className="pl-2 font-jetbrains">Profile information</li>
                    <li className="pl-2 font-jetbrains">Activity history</li>
                    <li className="pl-2 font-jetbrains">Saved preferences</li>
                    <li className="pl-2 font-jetbrains">All associated data</li>
                  </ul>
                </div>
              </div>

              {/* Footer Links */}
              <div className="text-center pt-8">
                <p className="font-jetbrains text-[1.6rem] mb-6">
                  For more information about data handling, please read our{' '}
                  <Link href="/privacy-policy" className="text-[var(--main-color)] underline font-jetbrains">
                    Privacy Policy
                  </Link>
                </p>
                <p className="font-jetbrains text-[1.6rem] opacity-90">
                  Questions? Contact us at{' '}
                  <span className="text-[var(--main-color)] font-jetbrains">support@daylight.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 