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
        <h2 className="heading font-bold font-jetbrains">Social Media Marketing</h2>
        <div className="about">
          <div className="about-content md:ml-10 md:w-[60%]">
            <h3 className="font-bold font-jetbrains">Amplify Your Brand with Dynamic Social Media Marketing</h3>
            <br />
            <p className="font-jetbrains">
              In today’s digital era, social media is a powerful tool for connecting with your audience and building your brand.
              I specialize in delivering exceptional social media marketing services that elevate your online presence and drive engagement.
              With over four years of experience in the industry, I have the expertise to create compelling social media strategies
              that resonate with your target audience and deliver tangible results.
            </p>
            <br />
            <p className="font-jetbrains">
              I work closely with you to understand your business objectives and develop tailored social media campaigns that align with your goals.
              Whether you’re looking to increase brand awareness, boost engagement, or drive conversions,
              I have the skills and experience to exceed your expectations.
            </p>
            <a href={`/contact`} className="btn-outlined font-jetbrains mt-12">Get in Touch!</a>
          </div>
          <div className="about-img md:w-[40%]">
            <img src="/images/marketing.png" alt="" />
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
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Strategy Development</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Social Media Audits</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Audience Research</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Competitive Analysis</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Content Strategy</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Content Creation</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Graphic Design</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Video Production</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Copywriting</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Content Scheduling</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Social Media Management</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Account Setup and Optimization</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Daily Monitoring</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Engagement and Community Management</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Performance Reporting</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Advertising Campaigns</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Ad Creation and Management</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Targeted Advertising</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Budget Management</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Analytics and Optimization</p>
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
