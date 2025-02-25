import { position } from "@/data/home.data";

export default function AboutSection() {
    return (
        <section className="w-full py-12 md:py-14 px-4 md:px-9 bg-[--second-bg-color]" id="about">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-[24px] md:text-[32px] font-bold font-jetbrains text-white mb-3">
                        About <span className="text-[--main-color]">Me</span>
                    </h2>
                    <div className="w-16 h-1 bg-[--main-color] mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    {/* Image Column */}
                    <div className="lg:col-span-5 flex justify-center items-center animate-fadeIn">
                        <div className="p-6 overflow-hidden">
                            <img 
                                src="/images/skill.png" 
                                alt="Skills Illustration" 
                                className="w-full h-auto rounded-xl"
                            />
                        </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="lg:col-span-7 animate-fadeInUp">
                        <div className="p-4 md:p-6 h-full">
                            <div className="space-y-3">
                                <p className="text-[14px] md:text-[16px] text-gray-300 leading-relaxed font-jetbrains">
                                    Hello! I'm Surya Basak, a software developer with 4+ years of experience in mobile and web development.
                                </p>
                                
                                <p className="text-[14px] md:text-[16px] text-gray-300 leading-relaxed font-jetbrains">
                                    I create engaging mobile apps with Flutter and high-performing web applications using ReactJS and NextJS, backed by robust Django and Flask APIs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}