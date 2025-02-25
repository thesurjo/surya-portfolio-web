"use client";

import { position } from "@/data/home.data";
import { useState } from "react";

// Define the feature categories and items
const featureCategories = [
    {
        name: "Experience",
        icon: "bx-code-block",
        features: [
            {
                title: "4+ Years Professional Experience",
                description: "Delivering high-quality solutions across various industries and technologies"
            },
            {
                title: "Mobile App Development Expert",
                description: "Specialized in Flutter and React Native for cross-platform applications"
            },
            {
                title: "Web Application Specialist",
                description: "Building responsive, high-performance web applications with modern frameworks"
            }
        ]
    },
    {
        name: "Technical Skills",
        icon: "bx-devices",
        features: [
            {
                title: "Full-Stack Development",
                description: "Proficient in HTML, CSS, JavaScript, TypeScript, and modern frameworks"
            },
            {
                title: "Backend Technologies",
                description: "Experienced with Django, Flask, PostgreSQL, and RESTful API development"
            },
            {
                title: "Cloud & DevOps",
                description: "Skilled in AWS services, CI/CD pipelines, and containerization"
            }
        ]
    },
    {
        name: "Services",
        icon: "bx-plus-circle",
        features: [
            {
                title: "CMS & Digital Marketing",
                description: "WordPress development, SEO optimization, and social media integration"
            },
            {
                title: "Training & Consultancy",
                description: "Technical guidance, code reviews, and development best practices"
            },
            {
                title: "Ongoing Support",
                description: "Maintenance, updates, and continuous improvement of your applications"
            }
        ]
    }
];

export default function WhyChooseMeSection() {
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <section className="w-full py-16 md:py-20 px-4 md:px-9 bg-[--bg-color]" id="why-choose-me">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 animate-fadeIn">
                    <h2 className="text-[28px] md:text-[40px] font-bold font-jetbrains mb-4">
                        Why <span className="text-[--main-color]">Choose Me?</span>
                    </h2>
                    <p className="font-jetbrains text-[14px] md:text-[16px] max-w-2xl mx-auto text-opacity-90 mb-6">
                        I bring a unique combination of technical expertise, creative problem-solving, and client-focused service
                    </p>
                    <div className="w-20 h-1 bg-[--main-color] mx-auto rounded-full"></div>
                </div>
                
                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
                    {featureCategories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-4 py-2 rounded-full text-[12px] md:text-[14px] font-medium transition-all duration-300 ${
                                activeTab === index
                                    ? "bg-[--main-color] text-[--bg-color]"
                                    : "bg-[--second-bg-color] hover:bg-[--second-bg-color]/80"
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 animate-fadeIn">
                    {featureCategories[activeTab].features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group bg-[--second-bg-color] p-5 rounded-xl flex flex-col items-center justify-center text-center hover:border-[--main-color] border border-gray-700 transition-all duration-300 hover:-translate-y-1"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="w-14 h-14 flex items-center justify-center bg-[--background-light] rounded-full text-[--main-color] mb-4 group-hover:scale-110 transition-transform duration-300">
                                <i className='bx bxs-check-shield text-3xl'></i>
                            </div>
                            <h3 className="text-[14px] md:text-[16px] font-medium font-jetbrains">
                                {feature.title}
                            </h3>
                            
                            <div className="mt-3 w-full">
                                <p className="text-[12px] md:text-[14px] text-gray-400 mb-3">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Stats Section */}
                <div className="mt-16 bg-[--second-bg-color] rounded-xl p-6 md:p-8 shadow-lg border border-gray-700">
                    <h3 className="text-[18px] md:text-[22px] font-bold font-jetbrains mb-6 text-center">
                        Experience & Results
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-[--bg-color] p-5 rounded-xl border border-gray-700 text-center">
                            <div className="text-[--main-color] text-[32px] md:text-[40px] font-bold mb-2">4+</div>
                            <div className="text-[12px] md:text-[14px] text-gray-400">Years Experience</div>
                        </div>
                        <div className="bg-[--bg-color] p-5 rounded-xl border border-gray-700 text-center">
                            <div className="text-[--main-color] text-[32px] md:text-[40px] font-bold mb-2">50+</div>
                            <div className="text-[12px] md:text-[14px] text-gray-400">Projects Completed</div>
                        </div>
                        <div className="bg-[--bg-color] p-5 rounded-xl border border-gray-700 text-center">
                            <div className="text-[--main-color] text-[32px] md:text-[40px] font-bold mb-2">30+</div>
                            <div className="text-[12px] md:text-[14px] text-gray-400">Satisfied Clients</div>
                        </div>
                    </div>
                </div>
                
                {/* Call to Action */}
                <div className="mt-12 text-center">
                    <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[--main-color] text-[--bg-color] rounded-full text-[14px] font-medium hover:bg-[--main-color]/90 transition-all duration-300"
                    >
                        <i className='bx bx-message-detail'></i>
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
}