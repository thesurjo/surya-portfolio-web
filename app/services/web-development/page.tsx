"use client"
import { useRouter } from 'next/navigation'
import { Header, Footer } from '@/global/page';
import { TimelineSection, WhyChooseMeSection } from '@/sections/page';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Service() {
  const router = useRouter();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const expertiseItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <main className="homepage flex min-h-screen flex-col items-center justify-between mt-16 md:mt-0">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8" id="about">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="heading font-bold font-jetbrains text-2xl md:text-4xl mb-6 text-center">Web Development</h1>
          
          <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
            <motion.div 
              className="md:w-[60%] order-2 md:order-1"
              variants={fadeIn}
            >
              <h2 className="font-bold font-jetbrains text-xl md:text-2xl mb-6">Empowering Your Digital Presence</h2>
              
              <p className="font-jetbrains text-sm md:text-base leading-relaxed mb-6 text-opacity-90">
                In today's digital age, having a strong online presence is crucial for any business.
                I specialize in providing top-notch web development services tailored to your unique business needs.
                With over four years of experience in the industry, I have the expertise to turn your vision into a reality,
                delivering websites and web applications that are not only visually appealing but also highly
                functional and user-friendly.
              </p>
              
              <p className="font-jetbrains text-sm md:text-base leading-relaxed mb-8 text-opacity-90">
                I work closely with you to understand your business objectives and create solutions that drive results.
                Whether you're looking to build a new website from scratch, revamp your existing site, or develop a complex web application,
                I have the skills and experience to exceed your expectations.
              </p>

              <motion.a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-[--main-color] text-white rounded-lg font-medium transition-all duration-300 hover:bg-opacity-90 hover:translate-y-[-2px] shadow-md font-jetbrains text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch!
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="md:w-[40%] order-1 md:order-2 mb-8 md:mb-0"
              variants={fadeIn}
            >
              <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/web-development.png" 
                  alt="Web Development" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* Expertise Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-[--second-bg-color] bg-opacity-30" id="expertise">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading font-bold font-jetbrains text-2xl md:text-4xl mb-6">
              <span className='font-jetbrains'>My</span> Expertise
            </h2>
            <p className="font-jetbrains text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-opacity-90">
              I provide tailored solutions to meet your unique needs.
              Explore how my expertise can drive your success and elevate your projects to the next level.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Custom Website Development */}
            <motion.div 
              className="bg-[--bg-color] rounded-xl p-8 shadow-lg border border-gray-700 hover:border-[--main-color] transition-all duration-300"
              variants={expertiseItem}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-[--background-light] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <i className="bx bx-code-alt text-[--main-color] text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold font-jetbrains mb-4">Custom Website Development</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Tailored Solutions</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Responsive Design</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">SEO Optimized</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Scalable Architecture</span>
                </li>
              </ul>
            </motion.div>
            
            {/* E-commerce Development */}
            <motion.div 
              className="bg-[--bg-color] rounded-xl p-8 shadow-lg border border-gray-700 hover:border-[--main-color] transition-all duration-300"
              variants={expertiseItem}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-[--background-light] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <i className="bx bx-cart text-[--main-color] text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold font-jetbrains mb-4">E-commerce Development</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Online Store Setup</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Payment Gateway Integration</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Inventory Management</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Customer Management</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Content Management Systems */}
            <motion.div 
              className="bg-[--bg-color] rounded-xl p-8 shadow-lg border border-gray-700 hover:border-[--main-color] transition-all duration-300"
              variants={expertiseItem}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-[--background-light] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <i className="bx bxl-wordpress text-[--main-color] text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold font-jetbrains mb-4">Content Management Systems</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">WordPress Development</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Joomla and Drupal</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Custom CMS Solutions</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Web Application Development */}
            <motion.div 
              className="bg-[--bg-color] rounded-xl p-8 shadow-lg border border-gray-700 hover:border-[--main-color] transition-all duration-300"
              variants={expertiseItem}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-[--background-light] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <i className="bx bx-devices text-[--main-color] text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold font-jetbrains mb-4">Web Application Development</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Single Page Applications (SPA)</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Progressive Web Apps (PWA)</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">API Integration</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Real-time Applications</span>
                </li>
              </ul>
            </motion.div>
            
            {/* UI/UX Design */}
            <motion.div 
              className="bg-[--bg-color] rounded-xl p-8 shadow-lg border border-gray-700 hover:border-[--main-color] transition-all duration-300"
              variants={expertiseItem}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-[--background-light] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <i className="bx bx-palette text-[--main-color] text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold font-jetbrains mb-4">UI/UX Design</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">User Research</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Wireframing and Prototyping</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Visual Design</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Usability Testing</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Maintenance and Support */}
            <motion.div 
              className="bg-[--bg-color] rounded-xl p-8 shadow-lg border border-gray-700 hover:border-[--main-color] transition-all duration-300"
              variants={expertiseItem}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-[--background-light] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <i className="bx bx-support text-[--main-color] text-2xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold font-jetbrains mb-4">Maintenance and Support</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Website Maintenance</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Security Updates</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Performance Optimization</span>
                </li>
                <li className="flex items-center">
                  <i className="bx bx-check-circle text-[--main-color] text-xl mr-2"></i>
                  <span className="font-jetbrains text-sm">Technical Support</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <TimelineSection />
      <WhyChooseMeSection />
      <Footer />
    </main>
  );
}
