import { skillsData } from "@/data/skill.data";

export default function AboutSection() {
    return <>
        <section className="about-section w-full" id="about">
            <h2 className="heading font-bold">About<span> Me</span></h2>
            <div className="about">
                <div className="about-img">
                    <img src="/images/skill.png" alt="" />
                </div>
                <div className="about-content md:ml-10">
                    <h3 className="font-bold">Frontend Developer</h3>
                    <p>
                        Hello! I'm Surya, a software developer specializing in mobile and web development. With over four years
                        of experience in mobile app development using Flutter, I create intuitive and responsive UI/UX designs.
                        <br />
                        In web development, I use modern frameworks like ReactJS and NextJS to build high-performing web
                        applications. My strong foundation in HTML, CSS, and JavaScript ensures a seamless user experience.
                        <br />
                        On the backend, I work with Django and Chalice frameworks, along with Postgres databases, to design and
                        develop robust RESTful APIs. This expertise allows me to integrate seamlessly with the front end,
                        delivering optimal performance.
                    </p>
                    <h3 className="font-bold mt-6">Skills</h3>
                    <div className="flex flex-wrap gap-4 justify-start mt-3">
                        {skillsData.map((skill, index) => (
                            <div key={index} className=" border border-gray-300 rounded-full px-6 py-3 shadow-md">
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>;
}