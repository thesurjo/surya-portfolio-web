"use client"
import { useRouter } from 'next/navigation'
import { Header, Footer } from '@/global/page';
import { TimelineSection, WhyChooseMeSection } from '@/sections/page';

export default function Service() {
  const router = useRouter()

  return (
    <main className="homepage flex min-h-screen flex-col items-center justify-between mt-16 md:mt-0">
      <Header />
      <section className="about-section w-full" id="about">
        <h2 className="heading font-bold font-jetbrains">Web Development</h2>
        <div className="about">
          <div className="about-content md:ml-10 md:w-[60%]">
            <h3 className="font-bold font-jetbrains">Empowering Your Digital Presence</h3>
            <br />
            <p className="font-jetbrains">
              In today’s digital age, having a strong online presence is crucial for any business.
              I specialize in providing top-notch web development services tailored to your unique business needs.
              With over four years of experience in the industry, I have the expertise to turn your vision into a reality,
              delivering websites and web applications that are not only visually appealing but also highly
              functional and user-friendly.
            </p>
            <br />
            <p className="font-jetbrains">
              I work closely with you to understand your business objectives and create solutions that drive results.
              Whether you’re looking to build a new website from scratch, revamp your existing site, or develop a complex web application,
              I have the skills and experience to exceed your expectations.
            </p>

            <a href={`/contact`} className="btn-outlined font-jetbrains mt-12">Get in Touch!</a>
          </div>
          <div className="about-img md:w-[40%]">
            <img src="/images/web-development.png" alt="" />
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
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Custom Website Development</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Tailored Solutions</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Responsive Design</p>
              </li>
              <li className="flex items-center mb-0">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">SEO Optimized</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Scalable Architecture</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">E-commerce Development</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Online Store Setup</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Payment Gateway Integration</p>
              </li>
              <li className="flex items-center mb-0">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Inventory Management</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Customer Management</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Content Management Systems (CMS)</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">WordPress Development</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Joomla and Drupal</p>
              </li>
              <li className="flex items-center mb-0">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Custom CMS Solutions</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Web Application Development</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Single Page Applications (SPA)</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Progressive Web Apps (PWA)</p>
              </li>
              <li className="flex items-center mb-0">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">API Integration</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Real-time Applications</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">UI/UX Design</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">User Research</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Wireframing and Prototyping</p>
              </li>
              <li className="flex items-center mb-0">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Visual Design</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Usability Testing</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Maintenance and Support</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Website Maintenance</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Security Updates</p>
              </li>
              <li className="flex items-center mb-0">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Performance Optimization</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Technical Support</p>
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
