import Header from '@/global/header.global';

export default function DaylightPrivacyPolicy() {
  return (
    <main className="homepage">
      <Header />
      <section className="w-full py-32 px-4 md:px-[9%] mt-16" id="privacy-policy">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[var(--second-bg-color)] p-8 md:p-12 rounded-2xl shadow-xl">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--main-color)] font-jetbrains">
                Privacy Policy
              </h1>
              <p className="text-[1.6rem] leading-relaxed font-jetbrains opacity-90 max-w-2xl mx-auto">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-12 font-jetbrains text-[1.6rem]">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[var(--main-color)] font-jetbrains">
                  Introduction
                </h2>
                <p className="mb-4 font-jetbrains">
                  Welcome to Daylight. We are committed to protecting your personal information and your right to privacy. 
                  This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[var(--main-color)] font-jetbrains">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <p className="mb-4 font-jetbrains">We collect the following types of information:</p>
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li className="pl-2 font-jetbrains">Personal Information (name, email address)</li>
                    <li className="pl-2 font-jetbrains">Device Information (device id)</li>
                    <li className="pl-2 font-jetbrains">Usage Data (app features used, time spent)</li>
                  </ul>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[var(--main-color)] font-jetbrains">
                  How We Use Your Information
                </h2>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li className="pl-2 font-jetbrains">To provide and maintain our Service</li>
                  <li className="pl-2 font-jetbrains">To notify you about changes to our Service</li>
                  <li className="pl-2 font-jetbrains">To provide customer support</li>
                  <li className="pl-2 font-jetbrains">To gather analysis or valuable information to improve our Service</li>
                  <li className="pl-2 font-jetbrains">To detect, prevent and address technical issues</li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[var(--main-color)] font-jetbrains">
                  Data Security
                </h2>
                <p className="mb-4 font-jetbrains">
                  We implement appropriate technical and organizational security measures to protect your personal data against 
                  accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
                </p>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[var(--main-color)] font-jetbrains">
                  Data Retention
                </h2>
                <p className="mb-4 font-jetbrains">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
                  Privacy Policy. When we no longer need your data, it will be securely deleted or anonymized.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[var(--main-color)] font-jetbrains">
                  Your Rights
                </h2>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li className="pl-2 font-jetbrains">Right to access your personal data</li>
                  <li className="pl-2 font-jetbrains">Right to rectification of inaccurate data</li>
                  <li className="pl-2 font-jetbrains">Right to erasure ("right to be forgotten")</li>
                  <li className="pl-2 font-jetbrains">Right to data portability</li>
                  <li className="pl-2 font-jetbrains">Right to withdraw consent</li>
                </ul>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[var(--main-color)] font-jetbrains">
                  Children's Privacy
                </h2>
                <p className="mb-4 font-jetbrains">
                  Our Service is not intended for use by children under the age of 13. We do not knowingly collect 
                  personal information from children under 13.
                </p>
              </div>

              {/* Changes to Privacy Policy */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[var(--main-color)] font-jetbrains">
                  Changes to This Privacy Policy
                </h2>
                <p className="mb-4 font-jetbrains">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-[var(--bg-color)] p-8 rounded-xl">
                <h2 className="text-2xl font-semibold mb-6 text-[var(--main-color)] font-jetbrains">
                  Contact Us
                </h2>
                <p className="mb-4 font-jetbrains">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li className="pl-2 font-jetbrains">By email: <span className="text-[var(--main-color)]">khorchaofficial@gmail.com</span></li>
                  <li className="pl-2 font-jetbrains">Through our mobile application's support feature</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 