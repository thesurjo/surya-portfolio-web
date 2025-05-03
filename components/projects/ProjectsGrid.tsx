'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import type { Project } from './ProjectCard';

interface ProjectsGridProps {
    projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
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

    if (projects.length === 0) {
        return (
            <div className="text-center py-16">
                <i className='bx bx-search text-4xl text-gray-400 mb-4'></i>
                <h3 className="text-[18px] md:text-[20px] font-jetbrains mb-2">No projects found</h3>
                <p className="text-gray-400 text-[16px]">Try adjusting your search or filter criteria</p>
            </div>
        );
    }

    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 lg:gap-10 max-w-[90rem] mx-auto"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    project={project}
                    variants={item}
                />
            ))}
        </motion.div>
    );
}