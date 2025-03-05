"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';

// Define the Project type to match your data structure
export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  logoUrl?: string;
  link?: string;
  technologies: string[];
  fullDescription?: string;
  features?: string[];
  gallery?: string[];
  client?: string;
  duration?: string;
  role?: string;
  teamSize?: string;
  projectType?: string;
  status?: 'Completed' | 'In Progress' | 'Ongoing';
}

interface ProjectCardProps {
  project: Project;
  variants?: any; // For framer-motion animation variants
}

export default function ProjectCard({ project, variants }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div 
        className="group relative bg-[--second-bg-color] rounded-2xl overflow-hidden flex flex-col h-full border border-gray-800/20 hover:border-[--main-color]/30 transition-all duration-300 cursor-pointer"
        variants={variants}
      >
        {/* Image container with overlay */}
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[--second-bg-color] via-transparent to-transparent opacity-80"></div>
          
          {/* Technology badges positioned over image */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 max-w-[80%]">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span 
                key={idx} 
                className="bg-black/40 backdrop-blur-md text-white/90 rounded-md px-3 py-1.5 text-[10px] md:text-[10px] font-medium font-jetbrains"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="bg-black/40 backdrop-blur-md text-white/90 rounded-md px-3 py-1.5 text-[8px] md:text-[8px] font-medium font-jetbrains">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Content area */}
        <div className="p-7 flex flex-col flex-grow">
          <span className="text-[12px] md:text-[13px] bg-[--main-color]/20 text-[--main-color] rounded-md font-semibold font-jetbrains inline-block mb-1 self-start">
            {project.category}
          </span>
          <h3 className="text-[16px] md:text-[18px] font-bold font-jetbrains mb-4 text-white group-hover:text-[--main-color] transition-colors duration-300">{project.title}</h3>
          <p className="text-[11px] md:text-[12px] mb-6 line-clamp-3 leading-relaxed font-jetbrains text-gray-300">
            {project.description}
          </p>
          
          {/* Action button */}
          <div className="mt-auto pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
            <div className="text-[12px] md:text-[12px] text-gray-400 font-medium font-jetbrains">
              {project.status || new Date().getFullYear()}
            </div>
            <div 
              className="inline-flex items-center gap-3 text-[12px] md:text-[12px] font-semibold text-[--main-color] group-hover:text-[--main-color]/80 transition-colors font-jetbrains"
            >
              View Details <i className='bx bx-right-arrow-alt text-lg'></i>
            </div>
          </div>
        </div>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[--main-color]/20 rounded-2xl pointer-events-none transition-all duration-300"></div>
      </motion.div>
    </Link>
  );
} 