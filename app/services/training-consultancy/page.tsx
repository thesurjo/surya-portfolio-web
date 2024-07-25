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
        <h2 className="heading font-bold font-jetbrains">Training & Consultancy</h2>
        <div className="about">
          <div className="about-content md:ml-10 md:w-[60%]">
            <h3 className="font-bold font-jetbrains">Unlock Your Potential with Expert Training & Consultancy</h3>
            <br />
            <p className="font-jetbrains">
              In an ever-evolving digital landscape, staying ahead of the curve is essential for success.
              I specialize in providing comprehensive training and consultancy services that empower you and your team with the skills and knowledge needed to thrive.
              With over four years of experience in the industry, I have the expertise to deliver tailored training programs and strategic consultancy
              that drive growth and innovation.
            </p>
            <br />
            <p className="font-jetbrains">
              I work closely with you to understand your specific needs and create customized solutions that deliver measurable results.
              Whether you’re looking to enhance your technical skills, improve your business processes, or develop a winning digital strategy,
              I have the skills and experience to exceed your expectations.
            </p>
            <a href={`/contact`} className="btn-outlined font-jetbrains mt-12">Get in Touch!</a>
          </div>
          <div className="about-img md:w-[40%]">
            <img src="/images/consulting.png" alt="" />
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
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Training Programs</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Web Development Training</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Mobile App Development Training</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">WordPress Development Training</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">SEO and Social Media Marketing Training</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Consultancy Services</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Project Scoping and Planning</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Technical Architecture Consultation</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Code Review and Best Practices</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Technology Stack Recommendations</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Workshops and Seminars</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Hands-On Workshops</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Industry Seminars</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Guest Lectures and Talks</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Networking Events</p>
              </li>
            </ul>
          </div>
          <div className="services-details-box">
            <h3 className="text-3xl font-bold font-jetbrains mb-6">Mentorship and Support</h3>
            <ul className="font-jetbrains list-none pl-0">
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">One-on-One Mentoring</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Technical Support</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Career Guidance</p>
              </li>
              <li className="flex items-center mb-2">
                <i className="bx bxs-circle text-white text-xl mr-4"></i>
                <p className="m-0 font-jetbrains">Project Guidance</p>
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
