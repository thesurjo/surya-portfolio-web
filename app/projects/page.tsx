import { projects } from '@/data/project.data';
import { Header, Footer } from '@/global/page';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects | Surya Basak',
    description: 'Explore my portfolio of mobile and web development projects, including Flutter, ReactJS, and NextJS applications.',
};

// Get all unique categories
const allCategories = Array.from(
    new Set(projects.map(project => project.category))
).sort();

export default function Projects({ 
    searchParams 
}: { 
    searchParams: { search?: string; category?: string } 
}) {
    const searchTerm = searchParams.search || '';
    const selectedCategory = searchParams.category || '';

    // Filter projects based on search term and selected category
    const filteredProjects = projects.filter(project => {
        const matchesSearch = searchTerm ? (
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase())
        ) : true;
        const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />
            <section className="projects w-full py-20 pt-28 px-4 md:px-6 lg:px-8" id="project">
                <div className="text-center mb-12 animate-fadeIn">
                    <h2 className="text-[28px] md:text-[40px] font-bold font-jetbrains mb-4">
                        My <span className="text-[--main-color]">Projects</span>
                    </h2>
                    <p className="font-jetbrains text-[14px] md:text-[16px] max-w-6xl mx-auto text-opacity-90 mb-6">
                        Welcome to my projects page! Here, you'll find a variety of mobile and web apps I've worked on, including Flutter, ReactJS, and NextJS projects, all showcasing my focus on user-friendly designs.
                    </p>
                    <div className="w-20 h-1 bg-[--main-color] mx-auto rounded-full"></div>
                </div>

                {/* Search and Filter Section - Changed to stack vertically with gap */}
                <div className="max-w-[90rem] mx-auto mb-12 flex flex-col gap-6">
                    <form className="relative w-full" action="/projects" method="GET">
                        <input
                            type="text"
                            name="search"
                            placeholder="Search projects..."
                            defaultValue={searchTerm}
                            className="w-full py-3 px-4 rounded-lg bg-[--second-bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[14px] md:text-[16px]"
                        />
                        <i className='bx bx-search absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-400'></i>
                    </form>

                    {/* Category filter - Centered */}
                    <div className="flex flex-col gap-2 items-center">
                        <div className="flex flex-wrap gap-2 justify-center">
                            <a
                                href="/projects"
                                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-300 font-jetbrains ${!selectedCategory ? 'bg-[--main-color] text-[--second-bg-color]' : 'bg-[--second-bg-color] text-[--text-color] hover:bg-opacity-80'}`}
                            >
                                All Categories
                            </a>
                            {allCategories.map((category) => (
                                <a
                                    key={category}
                                    href={`/projects?category=${encodeURIComponent(category)}${searchTerm ? `&search=${encodeURIComponent(searchTerm)}` : ''}`}
                                    className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-300 font-jetbrains ${selectedCategory === category ? 'bg-[--main-color] text-[--second-bg-color]' : 'bg-[--second-bg-color] text-[--text-color] hover:bg-opacity-80'}`}
                                >
                                    {category}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <ProjectsGrid projects={filteredProjects} />
            </section>
            <Footer />
        </main>
    );
}
