"use client";

import { skillsData } from "@/data/skill.data";
import { useState } from "react";

// Define type for skill categories
type CategoryName = "All" | "Frontend" | "Mobile" | "Backend" | "CMS & Marketing" | "DevOps & Tools";

// Group skills by category
const skillCategories: Record<CategoryName, string[]> = {
    "All": ["React", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS",
        "Flutter", "Dart", "React-Native",
        "Django", "Flask", "Chalice", "PHP",
        "WordPress", "SEO", "Digital Marketing",
        "AWS", "Git", "Consulting", "Java", "Python"],
    "Frontend": ["React", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "WordPress", "Shopify"],
    "Mobile": ["Flutter", "Dart", "React-Native", "Java"],
    "Backend": ["Django", "Flask", "Chalice", "PHP"],
    "CMS & Marketing": ["WordPress", "SEO", "Digital Marketing"],
    "DevOps & Tools": ["AWS", "Git", "Consulting"]
};

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState<CategoryName>("Frontend");

    return (
        <section className="w-full py-16 px-4 md:px-9" id="skills">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 animate-fadeIn">
                    <h2 className="text-[28px] md:text-[40px] font-bold font-jetbrains mb-4">
                        My <span className="text-[--main-color]">Skills</span>
                    </h2>
                    <p className="font-jetbrains text-[14px] md:text-[16px] max-w-6xl mx-auto text-opacity-90 mb-6">
                        A collection of technologies and tools I've mastered throughout my professional journey
                    </p>
                    <div className="w-20 h-1 bg-[--main-color] mx-auto rounded-full"></div>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
                    {Object.keys(skillCategories).map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category as CategoryName)}
                            className={`px-4 py-2 rounded-full text-[12px] md:text-[14px] font-medium transition-all duration-300 ${activeCategory === category
                                ? "bg-[--main-color] text-[--bg-color]"
                                : "bg-[--second-bg-color] hover:bg-[--second-bg-color]/80"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-4 animate-fadeIn">
                    {skillsData
                        .filter(skill => skillCategories[activeCategory]?.includes(skill.name))
                        .map((skill, index) => (
                            <div
                                key={index}
                                className="group bg-[--second-bg-color] p-5 rounded-xl flex flex-col items-center justify-center text-center hover:border-[--main-color] border border-gray-700 transition-all duration-300 hover:-translate-y-1"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="w-14 h-14 flex items-center justify-center bg-[--background-light] rounded-full text-[--main-color] mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <i className={`bx ${getIconForSkill(skill.name)} text-3xl`}></i>
                                </div>
                                <h3 className="text-[12px] md:text-[12px] font-medium font-jetbrains">
                                    {skill.name}
                                </h3>                              
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}

// Helper function to get appropriate icon for each skill
function getIconForSkill(skillName: string): string {
    const iconMap: { [key: string]: string } = {
        "React": "bxl-react",
        "Next.js": "bxl-nodejs",
        "Flutter": "bxl-flutter",
        "Java": "bxl-java",
        "JavaScript": "bxl-javascript",
        "TypeScript": "bxl-typescript",
        "HTML": "bxl-html5",
        "CSS": "bxl-css3",
        "Python": "bxl-python",
        "Django": "bxl-django",
        "Flask": "bxs-flask",
        "PostgreSQL": "bxs-data",
        "WordPress": "bxl-wordpress",
        "SEO": "bx-search-alt",
        "UI/UX": "bx-palette",
        "Git": "bxl-git",
        "Docker": "bxl-docker",
        "AWS": "bxl-aws",
        "Firebase": "bxl-firebase",
        "MongoDB": "bxs-data",
        "Node.js": "bxl-nodejs",
        "Express": "bxl-nodejs",
        "Redux": "bxl-redux",
        "Tailwind CSS": "bxl-tailwind-css",
        "Bootstrap": "bxl-bootstrap",
        "Material UI": "bxl-material-design",
        "Figma": "bxl-figma",
        "Adobe XD": "bxl-adobe",
        "Photoshop": "bxl-adobe",
        "Illustrator": "bxl-adobe",
        "Dart": "bxl-flutter",
        "React-Native": "bxl-react",
        "Chalice": "bxs-cloud",
        "PHP": "bxl-php",
        "Digital Marketing": "bx-trending-up",
        "Consulting": "bx-conversation",
        "Shopify": "bxl-shopify",
    };

    // Default icon if not found in map
    return iconMap[skillName] || "bx-code-alt";
} 