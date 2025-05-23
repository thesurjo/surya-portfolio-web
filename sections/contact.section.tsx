import { contactLinks } from "@/data/contact.data";

export default function ContactSection() {    
    return (
        <section className="w-full py-16 px-4 md:px-8" id="contact">
            <div className="max-w-7xl mx-auto">
                {/* Section Header - Consistent with other sections */}
                <div className="text-center max-w-6xl mx-auto mb-6 animate-fadeIn">
                    <h2 className="font-bold font-jetbrains text-[28px] md:text-[40px] mb-6">
                        Contact <span className="text-[--main-color]">Me</span>
                    </h2>
                    <p className="font-jetbrains text-[14px] md:text-[16px] leading-relaxed text-opacity-90 max-w-6xl mx-auto">
                        Have a project in mind or need coding assistance? I'm here to help you bring your ideas to life with precision and creativity.
                    </p>
                </div>      
                <div className="w-20 h-1 bg-[--main-color] mx-auto rounded-full"></div>
          
                {/* Contact Content */}
                <div className="animate-fadeIn mt-12">
                    {/* Email Option */}
                    <div className="flex flex-wrap justify-center gap-6">
                            {contactLinks.map((link, index) => (
                                <a 
                                    key={index} 
                                    href={link.href} 
                                    aria-label={link.name} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-16 py-6 bg-[--second-bg-color] rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-[--main-color] transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col items-center text-center"
                                >
                                    <div className="bg-[--background-light] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                        <i className={`${link.iconClass} text-[--main-color] text-3xl`}></i>
                                    </div>
                                    <h3 className="font-bold text-[16px] md:text-[18px] mb-4 font-jetbrains">{link.name}</h3>
                                  
                                    <span className="mt-auto inline-flex items-center text-[--main-color] text-[13px]">
                                        Connect
                                        <i className="bx bx-right-arrow-alt ml-1"></i>
                                    </span>
                                </a>
                            ))}                           
                        </div>
                </div>
            </div>
        </section>
    );
}