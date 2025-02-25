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

    return <>
        <section className="home w-full mt-16 md:mt-0" id="home">
            <div className="home-content md:w-[50%]">
                <h3 className="font-jetbrains md:w-[50%]">Hey there</h3>
                <h1 className="font-jetbrains">I'm {firstName}</h1>
                <h3 className="font-jetbrains">
                    <span className="font-jetbrains">
                        {position}
                    </span>
                </h3>
                <p className="font-jetbrains">
                    Transforming your vision into dynamic and efficient digital solutions.
                    I offer expertise in web and mobile app development using ReactJS, NextJS, and Flutter,
                    alongside WordPress, SEO, and social media marketing to elevate your digital presence.
                </p>
                <div className="social-media">
                    {
                        socialMediaLinks.map((link, index) => (
                            <a key={index} href={link.href} aria-label={link.name} target="_blank">
                                <i className={link.iconClass}></i>
                            </a>
                        ))
                    }
                </div>
                <div className="flex flex-wrap gap-5">
                    <a href={`/resume`} className="btn font-jetbrains" target="_blank">Resume</a>
                    <a href={`/contact`} className="btn-outlined font-jetbrains">Contact Me!</a>
                </div>
            </div>
            <div className="home-img space-droplet" ref={dropletRef}>
                <div className="stars"></div>
                <img src="images/me4.jpeg" alt="" ref={imageRef} className="static-image" />
            </div>
        </section>
    </>;
}