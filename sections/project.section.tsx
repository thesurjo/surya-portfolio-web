import { projects } from "@/data/project.data";

export default function ProjectSection() {
    return <>
        <section className="portfolio w-full" id="project">
            <h2 className="heading font-bold font-jetbrains">My<span className="font-jetbrains"> Projects</span></h2>
            <p className="font-jetbrains text-center mb-16 m-auto max-w-6xl">
                I have created intuitive and responsive user experiences with Flutter, ReactJS, and NextJS.
                Explore my projects to see my skills and expertise in action.
            </p>
            <div className="portfolio-container">
                {
                    projects.slice(0, 3).map((project, index) => (
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
                    ))
                }
            </div>
            <div className="flex justify-center mt-10">
                <a href={`/projects`} className="btn-outlined font-jetbrains items-center">Show more</a>
            </div>

        </section>
    </>;
}