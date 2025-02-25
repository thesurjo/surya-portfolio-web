"use client";

import { firstName, position } from "@/data/home.data";
import { socialMediaLinks } from "@/data/social.data";
import { useEffect, useRef } from "react";

export default function HomeSection() {
    const dropletRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const droplet = dropletRef.current;
        if (!droplet) return;

        // Animation for the water droplet border with space physics
        const animateDroplet = () => {
            // Simulate gentle floating in space with subtle oscillation
            const time = Date.now() / 1000;
            const floatX = Math.sin(time * 0.5) * 3; // Slower X oscillation
            const floatY = Math.cos(time * 0.3) * 2; // Even slower Y oscillation
            
            // Apply the transform to the container but not the image
            droplet.style.borderRadius = `${50 + Math.sin(time * 0.7) * 10}% ${40 + Math.cos(time * 0.6) * 10}% ${60 + Math.sin(time * 0.5) * 10}% ${30 + Math.cos(time * 0.4) * 10}% / ${30 + Math.sin(time * 0.3) * 10}% ${60 + Math.cos(time * 0.5) * 10}% ${40 + Math.sin(time * 0.6) * 10}% ${50 + Math.cos(time * 0.7) * 10}%`;
            
            // Apply a subtle rotation to simulate space drift
            droplet.style.transform = `translate(${floatX}px, ${floatY}px) rotate(${Math.sin(time * 0.2) * 2}deg)`;
            
            requestAnimationFrame(animateDroplet);
        };

        animateDroplet();
    }, []);

    return (
        <section className="w-full py-16 md:py-24 px-4 md:px-9 bg-[--bg-color]" id="home">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
                    {/* Content Side */}
                    <div className="w-full md:w-1/2 animate-fadeIn">
                        <div className="p-6 md:p-8">
                            <span className="inline-block bg-[--main-color]/20 text-[--main-color] px-4 py-1.5 rounded-full text-[14px] font-medium font-jetbrains mb-4">
                                Hey there 👋
                            </span>
                            
                            <h1 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold font-jetbrains text-white mb-3 leading-tight">
                                I'm <span className="text-[--main-color]">{firstName}</span>
                            </h1>
                            
                            <h2 className="text-[18px] md:text-[22px] font-semibold font-jetbrains text-white/90 mb-6">
                                <span className="text-[--main-color]">{position}</span>
                            </h2>
                            
                            <p className="text-[14px] md:text-[16px] text-gray-300 leading-relaxed font-jetbrains mb-8">
                                Creating dynamic digital solutions with ReactJS, NextJS, and Flutter.
                            </p>
                            
                            {/* Social Media Links */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                {socialMediaLinks.map((link, index) => (
                                    <a 
                                        key={index} 
                                        href={link.href} 
                                        aria-label={link.name} 
                                        target="_blank"
                                        className="w-10 h-10 rounded-full bg-[--background-light] flex items-center justify-center text-[--main-color] hover:bg-[--main-color] hover:text-white transition-all duration-300 hover:scale-110"
                                    >
                                        <i className={link.iconClass}></i>
                                    </a>
                                ))}
                            </div>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <a 
                                    href="/resume" 
                                    className="px-6 py-3 bg-[--main-color] text-white rounded-xl text-[14px] font-medium font-jetbrains flex items-center gap-2 hover:translate-y-[-2px] transition-transform"
                                    target="_blank"
                                >
                                    <span>Resume</span>
                                    <i className='bx bx-file'></i>
                                </a>
                                <a 
                                    href="/contact" 
                                    className="px-6 py-3 bg-transparent border border-[--main-color] text-[--main-color] rounded-xl hover:bg-[--main-color]/10 transition-all duration-300 text-[14px] font-medium font-jetbrains flex items-center gap-2 hover:translate-y-[-2px]"
                                >
                                    <span>Contact Me</span>
                                    <i className='bx bx-envelope'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 flex justify-center animate-fadeInUp">
                        <div 
                            className="space-droplet w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-2xl overflow-hidden relative transform hover:scale-[1.02] transition-all duration-500"
                            ref={dropletRef}
                        >
                            <div className="stars"></div>
                            <img 
                                src="/images/me4.jpeg" 
                                alt="Surya Basak" 
                                ref={imageRef} 
                                className="static-image object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}