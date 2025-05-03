import ProjectCard from './ProjectCard';
import { Project } from './ProjectCard';

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
    // Find projects in the same category, excluding the current project
    const sameCategory = allProjects.filter(
        project => project.category === currentProject.category && project.slug !== currentProject.slug
    );

    // If we don't have enough projects from the same category, add some from other categories
    let relatedProjects = [...sameCategory];
    
    if (relatedProjects.length < maxProjects) {
        const otherProjects = allProjects.filter(
            project => project.category !== currentProject.category && project.slug !== currentProject.slug
        );
        
        // Select projects from other categories to fill the remaining slots
        const remaining = maxProjects - relatedProjects.length;
        const randomOthers = otherProjects
            .slice(0, remaining); // Take first N projects instead of random for consistent SSR
        
        relatedProjects = [...relatedProjects, ...randomOthers];
    }

    if (relatedProjects.length === 0) {
        return null;
    }

    return (
        <div className="mt-8 md:mt-12">
            <h2 className="text-[22px] md:text-[24px] font-bold font-jetbrains mb-6 text-white">
                Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((project, index) => (
                    <ProjectCard 
                        key={project.slug} 
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
}