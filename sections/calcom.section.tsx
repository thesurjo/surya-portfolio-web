"use client";
import Link from 'next/link';

// Features of scheduling
const schedulingFeatures = [
    {
        title: "Direct Communication",
        description: "Connect directly with me to discuss your specific requirements and technical questions"
    },
    {
        title: "Personalized Approach",
        description: "I'll provide tailored insights based on my experience with similar projects and technologies"
    },
    {
        title: "Flexible Scheduling",
        description: "Choose a time that works for you, and I'll make myself available to discuss your needs"
    }
];

// Benefits of consultation
const consultationBenefits = [
    {
        title: "One-on-One",
        description: "Direct Developer Access",
        icon: "bx-user"
    },
    {
        title: "Technical",
        description: "Expert Guidance",
        icon: "bx-code-alt"
    },
    {
        title: "Personalized",
        description: "Custom Solutions",
        icon: "bx-bulb"
    }
];

export default function CalComSection() {
    return (
        <section className="w-full py-16 md:py-20 px-4 md:px-9" id="schedule-meeting">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 animate-fadeIn">
                    <h2 className="text-[28px] md:text-[40px] font-bold font-jetbrains mb-4">
                        <span className="text-[--main-color]">Let's</span> Connect
                    </h2>
                    <p className="font-jetbrains text-[14px] md:text-[16px] max-w-6xl mx-auto text-opacity-90 mb-6">
                        Have a project in mind or technical challenges to solve? I'm here to help. Schedule a call directly with me to discuss how I can assist with your development needs.
                    </p>
                    <div className="w-20 h-1 bg-[--main-color] mx-auto rounded-full"></div>
                </div>
                
                {/* Features Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 animate-fadeIn mb-10">
                    {schedulingFeatures.map((feature, index) => (
                        <div 
                            key={index}
                            className="group bg-[--second-bg-color] p-5 rounded-xl flex flex-col items-center justify-center text-center hover:border-[--main-color] border border-gray-700 transition-all duration-300 hover:-translate-y-1"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="w-14 h-14 flex items-center justify-center bg-[--background-light] rounded-full text-[--main-color] mb-4 group-hover:scale-110 transition-transform duration-300">
                                <i className={`bx ${index === 0 ? 'bx-chat' : index === 1 ? 'bx-code-block' : 'bx-calendar'} text-3xl`}></i>
                            </div>
                            <h3 className="text-[14px] md:text-[16px] font-medium font-jetbrains">
                                {feature.title}
                            </h3>
                            
                            <div className="mt-3 w-full">
                                <p className="text-[11px] md:text-[12px] text-gray-400 mb-3 font-jetbrains">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Cal.com Integration Section */}
                <div className="mt-4 md:mt-6 bg-[--second-bg-color] rounded-xl p-6 md:p-8 shadow-lg border border-gray-700">
                    <h3 className="text-[18px] md:text-[22px] font-bold font-jetbrains mb-6 text-center">
                        Schedule a Call With Me
                    </h3>
                    
                    {/* Benefits Grid - Similar to Why Choose Me section */}
                    <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8">
                        {consultationBenefits.map((benefit, index) => (
                            <div 
                                key={index}
                                className="bg-[--bg-color] p-5 rounded-xl border border-gray-700 text-center"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="text-[--main-color] text-[22px] md:text-[24px] font-bold mb-2 flex justify-center">
                                    <i className={`bx ${benefit.icon} text-3xl`}></i>
                                </div>
                                <div className="font-medium text-[12px] md:text-[14px] mb-1">{benefit.title}</div>
                                <div className="text-[10px] md:text-[12px] text-gray-400">{benefit.description}</div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex justify-center mt-6">
                        <Link
                            href="https://cal.com/suryabasak" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[--main-color] text-[--bg-color] rounded-full text-[14px] font-medium hover:bg-[--main-color]/90 transition-all duration-300"
                        >
                            <i className='bx bx-calendar'></i>
                            Book a Call
                        </Link>
                    </div>
                </div>
                
                {/* Powered by Notice */}
                <div className="mt-4 text-center">
                    <span className="text-[11px] md:text-[12px] text-gray-400">
                        Scheduling powered by Cal.com • I'll send you meeting details via email
                    </span>
                </div>
            </div>
        </section>
    );
} 