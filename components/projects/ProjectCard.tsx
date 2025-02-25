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
    <motion.div 
      className="group relative bg-[--second-bg-color] rounded-2xl overflow-hidden flex flex-col h-full border border-gray-800/20 hover:border-[--main-color]/30 transition-all duration-300"
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
              className="bg-black/40 backdrop-blur-md text-white/90 rounded-md px-3 py-1.5 text-xs md:text-sm font-medium font-jetbrains"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-black/40 backdrop-blur-md text-white/90 rounded-md px-3 py-1.5 text-base md:text-base font-medium font-jetbrains">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
      
      {/* Content area */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-base md:text-lg bg-[--main-color]/20 text-[--main-color] rounded-md font-semibold font-jetbrains inline-block mb-2 self-start">
          {project.category}
        </span>
        <h3 className="text-2xl md:text-2xl font-bold font-jetbrains mb-4 text-white group-hover:text-[--main-color] transition-colors duration-300">{project.title}</h3>
        <p className="text-sm md:text-base mb-6 line-clamp-3 leading-relaxed font-jetbrains text-gray-300">
          {project.description}
        </p>
        
        {/* Action button */}
        <div className="mt-auto pt-4 flex justify-between items-center">
          <div className="text-xs md:text-sm text-gray-400 font-medium font-jetbrains">
            {project.status || new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-3 text-sm md:text-base font-semibold text-[--main-color] hover:text-[--main-color]/80 transition-colors font-jetbrains"
              aria-label="View project details"
            >
              View Details <i className='bx bx-right-arrow-alt text-lg'></i>
            </Link>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm md:text-base font-semibold text-white/70 hover:text-white transition-colors font-jetbrains"
                aria-label="Visit live project"
              >
                <i className='bx bx-link-external text-lg'></i>
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[--main-color]/20 rounded-2xl pointer-events-none transition-all duration-300"></div>
    </motion.div>
  );
} 