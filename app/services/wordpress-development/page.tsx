"use client"
import { useRouter } from 'next/navigation'
import { Header, Footer } from '@/global/page';
import { TimelineSection, WhyChooseMeSection } from '@/sections/page';

export default function Service() {
  const router = useRouter()

  return (
    <main className="homepage flex min-h-screen flex-col items-center justify-between">
      <Header />
      <section className="about-section w-full" id="about">
        <h2 className="heading font-bold font-jetbrains">WordPress Development</h2>
        <div className="about">
          <div className="about-content md:ml-10 md:w-[60%]">
            <h3 className="font-bold mb-3 font-jetbrains">Elevate Your Online Presence with Professional WordPress Development</h3>
            <br />
            <p className="font-jetbrains">
              In today's digital world, having a robust and visually appealing website is crucial for your business success.
              I specialize in delivering top-notch WordPress development services tailored to your unique business needs.
              With over four years of experience in the industry, I have the expertise to create stunning and highly functional WordPress websites
              that captivate your audience and drive results.
            </p>
            <br />
            <p className="font-jetbrains">
              I work closely with you to understand your business objectives and develop customized WordPress solutions that align with your goals.
              Whether you’re looking to build a new website from scratch, redesign your existing site, or add advanced functionalities,
              I have the skills and experience to exceed your expectations.
            </p>
            <a href={`/contact`} className="btn-outlined font-jetbrains mt-12">Get in Touch!</a>
          </div>
          <div className="about-img md:w-[40%]">
            <img src="/images/wordpress.png" alt="" />
          </div>
        </div>
      </section>
      <section className="services w-full" id="services">
        <h2 className="heading font-bold font-jetbrains"><span className='font-jetbrains'>My</span> Expertise</h2>
        <p className="font-jetbrains text-center mb-16 m-auto max-w-6xl">
          I provide tailored solutions to meet your unique needs.
          Explore how my expertise can drive your success and elevate your projects to the next level.
        </p>
        <div className="services-details-container">
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Custom WordPress Development</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Custom Theme Development</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Plugin Development</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Custom Post Types and Taxonomies</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Theme and Plugin Customization</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Theme Customization</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Plugin Customization</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">WooCommerce Integration</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">WordPress Maintenance and Support</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Regular Updates</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Security Monitoring</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Backup and Restore</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <TimelineSection />
      <WhyChooseMeSection />
      <Footer />
    </main>
  );
}
