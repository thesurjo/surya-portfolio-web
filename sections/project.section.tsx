import { projects } from "@/data/project.data";

export default function ProjectSection() {
    return <>
        <section className="portfolio w-full" id="portfolio">
            <h2 className="heading font-bold">Latest<span> Project</span></h2>
            <div className="portfolio-container">
                {
                    projects.map((project, index) => (
                        <div key={index} className="portfolio-box">
                            <img src={project.imageUrl} alt={project.title} />
                            <div className="portfolio-layer">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                {/* <a href={project.link}>
                                    <i className='bx bx-link-external'></i>
                                </a> */}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    </>;
}