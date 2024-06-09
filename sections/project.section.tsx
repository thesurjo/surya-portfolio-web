import { projects } from "@/data/project.data";

export default function ProjectSection() {
    return <>
        <section className="portfolio w-full" id="project">
            <h2 className="heading font-bold font-jetbrains">My<span className="font-jetbrains"> Projects</span></h2>
            <div className="portfolio-container">
                {
                    projects.map((project, index) => (
                        <div key={index} className="portfolio-box">
                            <img src={project.imageUrl} alt={project.title} />
                            <div className="portfolio-layer">
                                <h4 className="font-bold font-jetbrains">{project.title}</h4>
                                <p className="font-jetbrains">{project.description}</p>
                                {
                                    project.link &&
                                    <a href={project.link} target="_blank">
                                        <i className='bx bx-link-external'></i>
                                    </a>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    </>;
}