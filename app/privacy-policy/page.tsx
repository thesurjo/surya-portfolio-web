import { Header, Footer } from '@/global/page';

export default function PrivacyPolicy() {
    return <>
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />
            <section className="privacy-policy w-full" id="privacy-policy">
                <h2 className="heading font-bold font-jetbrains mb-9">Privacy Policy</h2>
                <p className="font-jetbrains">
                    Welcome to my personal portfolio website. Your privacy is important to me. This Privacy Policy outlines
                    how I collect, use, and protect your personal information.
                </p>
                <br/>
                <h2 className="subheading font-bold font-jetbrains">1. Information Collection</h2>
                <p className="font-jetbrains">
                    I do not collect personal information from visitors unless it is voluntarily provided through forms
                    or other interactions. This may include, but is not limited to, your name, email address, and any
                    other details you choose to provide.
                </p>
                <br/>
                <h2 className="subheading font-bold font-jetbrains">2. Use of Information</h2>
                <p className="font-jetbrains">
                    Any personal information provided is used solely for the purpose of responding to your inquiries,
                    improving my website, or as otherwise specified at the time of collection. I do not sell or share
                    your information with third parties.
                </p>
                <br/>
                <h2 className="subheading font-bold font-jetbrains">3. Cookies</h2>
                <p className="font-jetbrains">
                    My website may use cookies to enhance your browsing experience. Cookies are small files stored on your
                    device that help me understand how you interact with my site. You can control cookie settings through
                    your browser.
                </p>
                <br/>
                <h2 className="subheading font-bold font-jetbrains">4. Data Security</h2>
                <p className="font-jetbrains">
                    I implement appropriate security measures to protect your personal information from unauthorized access,
                    alteration, or disclosure. However, please be aware that no method of transmission over the internet or
                    electronic storage is completely secure.
                </p>
                <br/>
                <h2 className="subheading font-bold font-jetbrains">5. Third-Party Links</h2>
                <p className="font-jetbrains">
                    My website may contain links to third-party websites. I am not responsible for the privacy practices or
                    content of these external sites. Please review their privacy policies before providing any personal
                    information.
                </p>
                <br/>
                <h2 className="subheading font-bold font-jetbrains">6. Changes to This Policy</h2>
                <p className="font-jetbrains">
                    I may update this Privacy Policy from time to time. Any changes will be posted on this page with an
                    updated effective date. Please check back periodically for any updates.
                </p>
                <br/>
                <h2 className="subheading font-bold font-jetbrains">7. Contact Information</h2>
                <p className="font-jetbrains">
                    If you have any questions or concerns about this Privacy Policy, please feel free to 
                    <a href="/contact" className="text-blue-500"> contact me</a>.
                </p>
            </section>
            <Footer />
        </main>
    </>;
}