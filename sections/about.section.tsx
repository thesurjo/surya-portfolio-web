'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
    const skills = [
        { name: 'Flutter', icon: 'bxl-flutter' },
        { name: 'React', icon: 'bxl-react' },
        { name: 'Next.js', icon: 'bxl-nodejs' },
        { name: 'WordPress', icon: 'bxl-wordpress' },
        { name: 'Digital Marketing', icon: 'bx-trending-up' },
        { name: 'Flask', icon: 'bxs-flask' }
    ];

    return (
        <section className="w-full py-16 px-4 md:px-9" id="about">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-[28px] md:text-[40px] font-bold font-jetbrains text-white mb-3">
                        About <span className="text-[--main-color]">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-[--main-color] mx-auto rounded-full"></div>
                </motion.div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 overflow-hidden">
                    {/* Image Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="lg:col-span-5 flex justify-center items-center"
                    >
                        <div className="relative w-full max-w-[250px] md:max-w-[500px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[--main-color]/20 to-transparent rounded-xl"></div>
                            <img 
                                src="/images/skill.png" 
                                alt="Skills Illustration" 
                                className="w-full h-auto object-cover rounded-xl relative z-10 hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </motion.div>
                    
                    {/* Content Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="lg:col-span-7"
                    >
                        <div className="p-6 md:p-8 h-full space-y-6">
                            <div className="space-y-4">
                                <p className="text-[14px] md:text-[16px] text-gray-200 leading-relaxed font-jetbrains">
                                    Hello! I'm <span className="text-[--main-color] font-semibold">Surya Basak</span>, a passionate software developer with 4+ years of experience in mobile and web development.
                                </p>
                                
                                <p className="text-[14px] md:text-[16px] text-gray-300 leading-relaxed font-jetbrains">
                                    I specialize in creating engaging mobile apps with Flutter and high-performing web applications using ReactJS and NextJS, backed by robust Django and Flask APIs.
                                </p>
                            </div>

                            {/* Skills Section */}
                            <div className="mt-8">
                                <h3 className="text-2xl font-semibold text-white mb-4">Core Skills</h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            className="group bg-[--second-bg-color] px-4 py-2 rounded-full inline-flex items-center gap-2 hover:border-[--main-color] border border-gray-700 transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <i className={`bx ${skill.icon} text-lg text-[--main-color] leading-none group-hover:scale-110 transition-transform duration-300`}></i>
                                            <span className="text-[12px] md:text-[13px] font-medium font-jetbrains leading-none">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>                            
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}