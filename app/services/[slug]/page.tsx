"use client"
import { useRouter } from 'next/navigation'
import { Header, Footer } from '@/global/page';
import Image from 'next/image';
import { getServiceBySlug } from '@/data/serviceDetails';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ServiceDetail() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const serviceData = getServiceBySlug(slug);

  if (!serviceData) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between mt-16 md:mt-0">
        <Header />
        <div className="w-full py-20 px-4 text-center">
          <h1 className="text-[32px] md:text-[48px] font-bold mb-6 font-jetbrains">Service not found</h1>
          <p className="text-[16px] md:text-[18px] mb-8 font-jetbrains text-gray-400">
            The service you're looking for doesn't exist or has been moved.
          </p>
          <button 
            onClick={() => router.push('/services')}
            className="bg-[--main-color] hover:bg-[--main-color-dark] text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center mx-auto shadow-lg hover:shadow-xl"
          >
            <span className="mr-2 text-[14px] md:text-[16px]">Back to Services</span>
            <i className='bx bx-arrow-back text-[18px]'></i>
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      
      <section className="w-full py-8 pt-28 px-4 md:px-9 bg-[--second-bg-color]/30">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <div className="mb-6">
            <button 
              onClick={() => router.push('/services')}
              className="inline-flex items-center gap-2 text-[14px] md:text-[16px] font-medium text-[--main-color] hover:text-[--main-color]/80 transition-colors font-jetbrains group"
            >
              <i className='bx bx-left-arrow-alt text-lg group-hover:-translate-x-1 transition-transform'></i> Back to Services
            </button>
          </div>
          
          {/* Service Header Card */}
          <div className="bg-[--second-bg-color] rounded-2xl p-6 md:p-8 shadow-xl mb-6 border border-gray-800/20">
            <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-start">
              {/* Service Icon */}
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border border-gray-800/20 bg-[--background-light] flex items-center justify-center">
                <i className={`${serviceData.iconClass} text-[--main-color] text-6xl`}></i>
              </div>
              
              {/* Service Info */}
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-[22px] md:text-[24px] lg:text-[26px] font-bold font-jetbrains text-white mb-3">{serviceData.title}</h1>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[12px] md:text-[13px] bg-[--main-color]/20 text-[--main-color] px-3 py-1 rounded-md font-semibold font-jetbrains">
                        {serviceData.title}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-3 mt-3">
                  {serviceData.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-[--bg-color]/50 text-white/90 rounded-md px-4 py-1.5 text-[10px] md:text-[12px] font-medium font-jetbrains border border-gray-800/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Main Content - 8 columns on large screens */}
            <div className="lg:col-span-8 space-y-6 md:space-y-8">
              {/* Hero Image */}
              <div 
                className="bg-[--second-bg-color] p-20 md:p-24 rounded-2xl border border-gray-800/20 shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="relative overflow-hidden rounded-xl aspect-video">
                  <Image 
                    src={serviceData.heroImage} 
                    alt={serviceData.title}
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Description Card */}
              <div
                className="bg-[--second-bg-color] p-6 md:p-8 rounded-2xl border border-gray-800/20 shadow-xl transform hover:scale-[1.01] transition-transform duration-300"
              >
                <h2 className="text-[18px] md:text-[20px] font-bold font-jetbrains mb-5 text-white">About This Service</h2>
                <div className="space-y-4">
                  {serviceData.heroDescription.map((paragraph, index) => (
                    <p key={index} className="text-[12px] md:text-[14px] text-gray-200 leading-relaxed font-jetbrains">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Expertise Section */}
              <div 
                className="bg-[--second-bg-color] p-6 md:p-8 rounded-2xl border border-gray-800/20 shadow-xl"
              >
                <h2 className="text-[18px] md:text-[20px] font-bold font-jetbrains mb-5 text-white">My Expertise</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                  {serviceData.expertise.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-[--background-light] p-6 rounded-xl border border-gray-800/10 hover:border-[--main-color]/30 transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-[16px] font-bold font-jetbrains">{item.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {item.items.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <i className='bx bx-check-circle text-[--main-color] text-lg mt-0.5'></i>
                            <span className="text-[12px] md:text-[14px] text-gray-300 font-jetbrains">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar - 4 columns on large screens */}
            <div className="lg:col-span-4 space-y-6 md:space-y-8">
              {/* Benefits Card */}
              <div 
                className="bg-[--second-bg-color] p-6 md:p-8 rounded-2xl border border-gray-800/20 shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
              >
                <h2 className="text-[18px] md:text-[20px] font-bold font-jetbrains mb-5 text-white">Benefits</h2>
                <div className="space-y-4">
                  {serviceData.benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-[--background-light] rounded-xl border border-gray-800/10 hover:border-[--main-color]/30 transition-all duration-300"
                    >
                      <div className="bg-[--main-color]/20 text-[--main-color] p-2 rounded-lg">
                        <span className="font-bold text-[14px]">{index + 1}</span>
                      </div>
                      <p className="text-[12px] md:text-[14px] text-gray-300 font-jetbrains">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div 
                className="bg-gradient-to-br from-[--main-color] to-purple-600 p-6 md:p-8 rounded-2xl shadow-xl relative overflow-hidden group transform hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h2 className="text-[18px] md:text-[20px] font-bold font-jetbrains mb-4 text-white">Ready to Get Started?</h2>
                  <p className="text-[12px] md:text-[14px] text-white/90 font-jetbrains mb-6">
                    Let's discuss how I can help you achieve your goals with my {serviceData.title} services.
                  </p>
                  <button 
                    onClick={() => router.push('/#contact')}
                    className="w-full bg-white text-[--main-color] hover:bg-opacity-90 font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span className="text-[14px] font-jetbrains">Get in Touch</span>
                    <i className='bx bx-right-arrow-alt text-xl group-hover:translate-x-1 transition-transform'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 