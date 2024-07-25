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
        <h2 className="heading font-bold font-jetbrains">Mobile App Development</h2>
        <div className="about">
          <div className="about-content md:ml-10 md:w-[60%]">
            <h3 className="font-bold font-jetbrains">Transform Your Business with Mobile Apps</h3>
            <br />
            <p className="font-jetbrains">
              In today’s mobile-first world, having a powerful mobile application is essential for engaging with your audience.
              I specialize in delivering top-tier mobile app development services tailored to your unique business requirements.
              With over four years of experience in the industry, I have the expertise to turn your vision into a reality,
              creating mobile applications that are not only visually appealing but also highly functional and user-friendly.
            </p>
            <br />
            <p className="font-jetbrains">
              I work closely with you to understand your business objectives and develop solutions that drive results.
              Whether you’re looking to build a new mobile app from scratch, enhance your existing app, or develop complex features,
              I have the skills and experience to exceed your expectations.
            </p>
            <a href={`/contact`} className="btn-outlined font-jetbrains mt-12">Get in Touch!</a>
          </div>
          <div className="about-img md:w-[40%]">
            <img src="/images/mobile-development.png" alt="" />
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
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Custom Mobile App Development</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Tailored Solutions</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Cross-Platform Development</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Native App Development</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">App Design</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">User Research</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">UI/UX Design</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Prototyping and Wireframing</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">App Integration and APIs</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">API Integration</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Backend Integration</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Performance Optimization</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Speed Optimization</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Memory Management</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Testing and Quality Assurance</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Functional Testing</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Usability Testing</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Bug Fixing</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Deployment and Maintenance</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">App Store Submission</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Regular Updates</p>
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
