import { notFound } from 'next/navigation';
import { Header, Footer } from '@/global/page';
import { projects } from '@/data/project.data';
import Image from 'next/image';
import ClientGallery from './ClientGallery';
import RelatedProjects from '@/components/projects/RelatedProjects';
import { Metadata } from 'next';

interface ProjectDetailsProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: ProjectDetailsProps): Promise<Metadata> {
    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        return {
            title: 'Project Not Found | Surya Basak',
            description: 'The requested project could not be found.'
        };
    }

    return {
        title: `${project.title} | Projects | Surya Basak`,
        description: project.fullDescription || project.description,
        openGraph: {
            title: `${project.title} | Projects | Surya Basak`,
            description: project.fullDescription || project.description,
            url: `https://suryabasak.com/projects/${project.slug}`,
            type: 'article',
            images: project.gallery?.map(img => ({
                url: img,
                width: 1200,
                height: 630,
                alt: project.title
            })) || [
                {
                    url: project.imageUrl,
                    width: 1200,
                    height: 630,
                    alt: project.title
                }
            ]
        }
    };
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />
            <section className="w-full py-8 pt-28 px-4 md:px-9 bg-[--second-bg-color]/30">
                <div className="max-w-7xl mx-auto">
                    {/* Back button */}
                    <div className="mb-6">
                        <a 
                            href="/projects"
                            className="inline-flex items-center gap-2 text-[14px] md:text-[16px] font-medium text-[--main-color] hover:text-[--main-color]/80 transition-colors font-jetbrains group"
                        >
                            <i className='bx bx-left-arrow-alt text-lg group-hover:-translate-x-1 transition-transform'></i> 
                            Back to Projects
                        </a>
                    </div>

                    {/* Google Play Store style header */}
                    <div className="bg-[--second-bg-color] rounded-2xl p-6 md:p-8 shadow-xl mb-6 border border-gray-800/20">
                        <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-start">
                            {/* Project Logo/Icon */}
                            <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border border-gray-800/20">
                                <Image 
                                    src={project.logoUrl || project.gallery?.[0] || project.imageUrl}
                                    alt={`${project.title} logo`}
                                    width={144}
                                    height={144}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Project Info */}
                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div>
                                        <h1 className="text-[22px] md:text-[24px] lg:text-[26px] font-bold font-jetbrains text-white mb-3">
                                            {project.title}
                                        </h1>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-[12px] md:text-[13px] bg-[--main-color]/20 text-[--main-color] px-3 py-1 rounded-md font-semibold font-jetbrains">
                                                {project.category}
                                            </span>
                                            {project.client && (
                                                <span className="text-[12px] md:text-[13px] text-gray-300 font-jetbrains">
                                                    Client: {project.client}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Project Link Button */}
                                    {project.link && (
                                        <div className="flex-shrink-0">
                                            <a 
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 text-[10px] md:text-[12px] font-semibold text-[--bg-color] hover:text-white transition-colors font-jetbrains bg-[--main-color] hover:bg-[--main-color]/90 px-6 py-3 rounded-lg shadow-lg"
                                            >
                                                Visit Project <i className='bx bx-link-external'></i>
                                            </a>
                                        </div>
                                    )}
                                </div>

                                {/* Technology Tags */}
                                <div className="flex flex-wrap gap-3 mt-3">
                                    {project.technologies.map((tech, index) => (
                                        <span 
                                            key={index}
                                            className="bg-[--bg-color]/50 text-white/90 rounded-md px-4 py-1.5 text-[10px] md:text-[12px] font-medium font-jetbrains border border-gray-800/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                        {/* Main Content - 8 columns on large screens */}
                        <div className="lg:col-span-8 space-y-6 md:space-y-8">
                            {/* Image Gallery */}
                            <div className="bg-[--second-bg-color] p-4 md:p-6 rounded-2xl border border-gray-800/20 shadow-xl">
                                <ClientGallery 
                                    images={project.gallery || [project.imageUrl]} 
                                    title={project.title} 
                                />
                            </div>

                            {/* Description Card */}
                            <div className="bg-[--second-bg-color] p-6 md:p-8 rounded-2xl border border-gray-800/20 shadow-xl">
                                <h2 className="text-[18px] md:text-[20px] font-bold font-jetbrains mb-5 text-white">
                                    About This Project
                                </h2>
                                <p className="text-[12px] md:text-[14px] text-gray-200 leading-relaxed font-jetbrains">
                                    {project.fullDescription || project.description}
                                </p>
                            </div>

                            {/* Features Section */}
                            {project.features && project.features.length > 0 && (
                                <div className="bg-[--second-bg-color] p-6 md:p-8 rounded-2xl border border-gray-800/20 shadow-xl">
                                    <h2 className="text-[18px] md:text-[20px] font-bold font-jetbrains mb-5 text-white">
                                        Key Features
                                    </h2>
                                    <div className="space-y-4">
                                        {project.features.map((feature, index) => (
                                            <div 
                                                key={index}
                                                className="flex items-start gap-4 p-4 rounded-xl border border-gray-800/10 hover:border-[--main-color]/30 transition-all duration-300 bg-[--bg-color]/30"
                                            >
                                                <div className="bg-[--main-color]/20 p-1 rounded-full text-[--main-color] flex-shrink-0">
                                                    <i className='bx bx-check text-lg'></i>
                                                </div>
                                                <p className="text-[12px] md:text-[14px] text-gray-200 font-jetbrains">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar - 4 columns on large screens */}
                        <div className="lg:col-span-4 space-y-6 md:space-y-8">
                            <div className="bg-[--second-bg-color] p-6 md:p-8 rounded-2xl border border-gray-800/20 shadow-xl lg:sticky lg:top-28">
                                <h2 className="text-[18px] md:text-[20px] font-bold font-jetbrains mb-5 text-white">
                                    Project Details
                                </h2>

                                {/* Project Metadata */}
                                <div className="space-y-5">
                                    {project.client && (
                                        <div className="flex items-start gap-4">
                                            <div className="bg-[--main-color]/10 text-[--main-color] rounded-full p-2.5 flex-shrink-0">
                                                <i className='bx bx-building-house text-lg'></i>
                                            </div>
                                            <div>
                                                <h3 className="text-[11px] md:text-[13px] font-medium text-gray-400 mb-1 font-jetbrains">
                                                    Client
                                                </h3>
                                                <p className="text-[11px] md:text-[13px] text-white font-jetbrains">
                                                    {project.client}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {project.duration && (
                                        <div className="flex items-start gap-4">
                                            <div className="bg-[--main-color]/10 text-[--main-color] rounded-full p-2.5 flex-shrink-0">
                                                <i className='bx bx-time text-lg'></i>
                                            </div>
                                            <div>
                                                <h3 className="text-[11px] md:text-[13px] font-medium text-gray-400 mb-1 font-jetbrains">
                                                    Duration
                                                </h3>
                                                <p className="text-[11px] md:text-[13px] text-white font-jetbrains">
                                                    {project.duration}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {project.role && (
                                        <div className="flex items-start gap-4">
                                            <div className="bg-[--main-color]/10 text-[--main-color] rounded-full p-2.5 flex-shrink-0">
                                                <i className='bx bx-user text-lg'></i>
                                            </div>
                                            <div>
                                                <h3 className="text-[11px] md:text-[13px] font-medium text-gray-400 mb-1 font-jetbrains">
                                                    My Role
                                                </h3>
                                                <p className="text-[11px] md:text-[13px] text-white font-jetbrains">
                                                    {project.role}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {project.teamSize && (
                                        <div className="flex items-start gap-4">
                                            <div className="bg-[--main-color]/10 text-[--main-color] rounded-full p-2.5 flex-shrink-0">
                                                <i className='bx bx-group text-lg'></i>
                                            </div>
                                            <div>
                                                <h3 className="text-[11px] md:text-[13px] font-medium text-gray-400 mb-1 font-jetbrains">
                                                    Team Size
                                                </h3>
                                                <p className="text-[11px] md:text-[13px] text-white font-jetbrains">
                                                    {project.teamSize}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {project.projectType && (
                                        <div className="flex items-start gap-4">
                                            <div className="bg-[--main-color]/10 text-[--main-color] rounded-full p-2.5 flex-shrink-0">
                                                <i className='bx bx-code-alt text-lg'></i>
                                            </div>
                                            <div>
                                                <h3 className="text-[11px] md:text-[13px] font-medium text-gray-400 mb-1 font-jetbrains">
                                                    Project Type
                                                </h3>
                                                <p className="text-[11px] md:text-[13px] text-white font-jetbrains">
                                                    {project.projectType}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {project.status && (
                                        <div className="flex items-start gap-4">
                                            <div className="bg-[--main-color]/10 text-[--main-color] rounded-full p-2.5 flex-shrink-0">
                                                <i className='bx bx-check-circle text-lg'></i>
                                            </div>
                                            <div>
                                                <h3 className="text-[14px] md:text-[15px] font-medium text-gray-400 mb-1 font-jetbrains">
                                                    Status
                                                </h3>
                                                <p className="text-[11px] md:text-[13px] text-white font-jetbrains">
                                                    {project.status}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Projects Section */}
                    <RelatedProjects 
                        currentProject={project}
                        allProjects={projects}
                        maxProjects={3}
                    />
                </div>
            </section>
            <Footer />
        </main>
    );
}