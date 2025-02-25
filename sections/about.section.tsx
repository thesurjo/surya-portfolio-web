'use client';

import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer } from 'react-icons/fa';
import { position } from "@/data/home.data";

export default function AboutSection() {
    const skills = [
        { name: 'Flutter', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Django', level: 75 },
        { name: 'Flask', level: 70 }
    ];

    const stats = [
        { label: 'Years Experience', value: '4+' },
        { label: 'Projects Completed', value: '50+' },
        { label: 'Happy Clients', value: '30+' }
    ];

    return (
        <section className="w-full py-16 md:py-20 px-4 md:px-9" id="about">
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
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                    {/* Image Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 flex justify-center items-center"
                    >
                        <div className="relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[--main-color]/20 to-transparent rounded-xl"></div>
                            <img 
                                src="/images/skill.png" 
                                alt="Skills Illustration" 
                                className="w-full h-[250px] md:h-auto rounded-xl relative z-10 hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </motion.div>
                    
                    {/* Content Column */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
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
                                <h3 className="text-xl font-semibold text-white mb-4">Core Skills</h3>
                                <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className="bg-[--bg-color] p-4 rounded-lg"
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-gray-200">{skill.name}</span>
                                                <span className="text-[--main-color]">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-2">
                                                <div 
                                                    className="bg-[--main-color] h-2 rounded-full"
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
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