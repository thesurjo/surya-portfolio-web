"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from './ProjectCard';
import ProjectCard from './ProjectCard';

interface RelatedProjectsProps {
  currentProject: Project;
  allProjects: Project[];
  maxProjects?: number;
}

export default function RelatedProjects({ 
  currentProject, 
  allProjects, 
  maxProjects = 3 
}: RelatedProjectsProps) {
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Find projects in the same category, excluding the current project
    const sameCategory = allProjects.filter(
      project => project.category === currentProject.category && project.slug !== currentProject.slug
    );

    // If we don't have enough projects from the same category, add some from other categories
    let related = [...sameCategory];
    
    if (related.length < maxProjects) {
      const otherProjects = allProjects.filter(
        project => project.category !== currentProject.category && project.slug !== currentProject.slug
      );
      
      // Randomly select projects from other categories to fill the remaining slots
      const remaining = maxProjects - related.length;
      const randomOthers = otherProjects
        .sort(() => 0.5 - Math.random()) // Shuffle array
        .slice(0, remaining);
      
      related = [...related, ...randomOthers];
    } else if (related.length > maxProjects) {
      // If we have too many projects from the same category, limit to maxProjects
      related = related.slice(0, maxProjects);
    }
    
    setRelatedProjects(related);
  }, [currentProject, allProjects, maxProjects]);

  // Animation variants
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

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-800/20">
      <h2 className="text-xl md:text-2xl font-bold font-jetbrains mb-6 text-white">Related Projects</h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {relatedProjects.map((project, index) => (
          <ProjectCard 
            key={index}
            project={project}
            variants={item}
          />
        ))}
      </motion.div>
    </div>
  );
} 