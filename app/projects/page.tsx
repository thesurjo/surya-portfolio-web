"use client"
import { projects } from '@/data/project.data';
import { Header, Footer } from '@/global/page';
import { useRouter } from 'next/navigation'

export default function Projects() {
    const router = useRouter()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />
            <section className="projects w-full" id="project">
                <h2 className="heading font-bold font-jetbrains">My<span className="font-jetbrains"> Projects</span></h2>
                <p className="font-jetbrains text-center mb-12">
                    Welcome to my projects page! Here, you’ll find a showcase of my work as a software developer.
                    Over the years, I have worked on various mobile and web applications, each reflecting my commitment to creating
                    intuitive and responsive user experiences. From mobile apps built with Flutter to modern web applications developed
                    using ReactJS and NextJS, you’ll see a diverse range of projects that demonstrate my skills and expertise.
                </p>
                <div className="portfolio-container">
                    {
                        projects.map((project, index) =>
                            <div key={index} className="portfolio-box">
                                <img src={project.imageUrl} alt={project.title} />
                                <div className="portfolio-layer">
                                    <h4 className="font-bold font-jetbrains">{project.title}</h4>
                                    <p className="font-jetbrains">{project.description}</p>
                                    
                                    <div className="flex flex-wrap gap-4 justify-center">
                                        {
                                            project.technologies.map((skill, index) =>
                                                <div key={index} className=" border bg-[--second-bg-color] border-gray-300 rounded-full px-6 py-3 shadow-md">
                                                    <div className="font-jetbrains">{skill}</div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    {
                                        project.link &&
                                        <a href={project.link} target="_blank" className='mt-6'>
                                            <i className='bx bx-link-external'></i>
                                        </a>
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
            <Footer />
        </main>
    );
}
