"use client"
import { projects } from '@/data/project.data';
import { Header, Footer } from '@/global/page';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/projects/ProjectCard';

export default function Projects() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [isLoading, setIsLoading] = useState(true);

    // Get all unique categories
    const allCategories = Array.from(
        new Set(projects.map(project => project.category))
    ).sort();

    useEffect(() => {
        // Filter projects based on search term and selected category
        const results = projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                 project.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
            return matchesSearch && matchesCategory;
        });
        
        setFilteredProjects(results);
        setIsLoading(false);
    }, [searchTerm, selectedCategory]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />
            <section className="projects w-full py-20 pt-28 px-4 md:px-6 lg:px-8" id="project">
                <h2 className="heading font-bold font-jetbrains mb-6 text-[28px] md:text-[40px]">My<span className="font-jetbrains"> Projects</span></h2>
                <p className="font-jetbrains text-center mb-12 m-auto max-w-7xl text-[14px] md:text-[16px] leading-relaxed">
                    Welcome to my projects page! Here, you'll find a variety of mobile and web apps I've worked on, including Flutter, ReactJS, and NextJS projects, all showcasing my focus on user-friendly designs.
                </p>

                {/* Search and Filter Section - Changed to stack vertically with gap */}
                <div className="max-w-[90rem] mx-auto mb-12 flex flex-col gap-6">
                    <div className="relative w-full">
                        <input 
                            type="text" 
                            placeholder="Search projects..." 
                            className="w-full py-3 px-4 rounded-lg bg-[--second-bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[14px] md:text-[16px]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <i className='bx bx-search absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-400'></i>
                    </div>
                    
                    {/* Category filter - Centered */}
                    <div className="flex flex-col gap-2 items-center">
                        <div className="flex flex-wrap gap-2 justify-center">
                            <button 
                                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-300 font-jetbrains ${selectedCategory === null ? 'bg-[--main-color] text-[--second-bg-color]' : 'bg-[--second-bg-color] text-[--text-color] hover:bg-opacity-80'}`}
                                onClick={() => setSelectedCategory(null)}
                            >
                                All Categories
                            </button>
                            {allCategories.map((category) => (
                                <button 
                                    key={category} 
                                    className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-300 font-jetbrains ${selectedCategory === category ? 'bg-[--main-color] text-[--second-bg-color]' : 'bg-[--second-bg-color] text-[--text-color] hover:bg-opacity-80'}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="loader"></div>
                    </div>
                ) : filteredProjects.length === 0 ? (
                    <div className="text-center py-16">
                        <i className='bx bx-search text-4xl text-gray-400 mb-4'></i>
                        <h3 className="text-[18px] md:text-[20px] font-jetbrains mb-2">No projects found</h3>
                        <p className="text-gray-400 text-[16px]">Try adjusting your search or filter criteria</p>
                    </div>
                ) : (
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 lg:gap-10 max-w-[90rem] mx-auto"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {filteredProjects.map((project, index) => (
                            <ProjectCard 
                                key={index}
                                project={project}
                                variants={item}
                            />
                        ))}
                    </motion.div>
                )}
            </section>
            <Footer />
        </main>
    );
}
