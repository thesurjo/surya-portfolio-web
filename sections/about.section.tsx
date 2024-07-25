import { position } from "@/data/home.data";
import { skillsData } from "@/data/skill.data";

export default function AboutSection() {
    return <>
        <section className="about-section w-full" id="about">
            <h2 className="heading font-bold font-jetbrains">About<span className="font-jetbrains"> Me</span></h2>
            <div className="about">
                <div className="about-img md:w-[40%]">
                    <img src="/images/skill.png" alt="" />
                </div>
                <div className="about-content md:ml-10 md:w-[60%]">
                    {/* <h3 className="font-bold font-jetbrains mb-3">{position}</h3> */}
                    <p className="font-jetbrains">
                    Hello! I'm Surya Basak, a software developer with over four years of experience in mobile and web development. 
                    I specialize in creating engaging mobile apps with Flutter and high-performing web applications using ReactJS and NextJS. 
                    My expertise in HTML, CSS, and JavaScript ensures seamless, dynamic user experiences across platforms.
                    </p>
                    <br />
                    <p className="font-jetbrains">
                        On the backend, I utilize Django, Flask and Chalice frameworks, along with Postgres databases,
                        to design and develop robust RESTful APIs. This technical prowess allows me to create
                        a cohesive integration with the front end, ensuring optimal performance and a flawless user experience.
                    </p>
                    <br />
                    <p className="font-jetbrains">
                        Additionally, I offer specialized services in WordPress development, SEO, social media marketing,
                        and training & consultancy. Whether you need a user-friendly WordPress interface, improved search engine visibility,
                        enhanced social media presence, or expert guidance, I’m here to provide comprehensive solutions that elevate your
                        digital footprint and achieve your business goals.
                    </p>
                    <h3 className="font-bold mt-6 font-jetbrains">Skills</h3>
                    <div className="flex flex-wrap gap-4 justify-start mt-3">
                        {
                            skillsData.map((skill, index) =>
                                <div key={index} className=" border border-gray-300 rounded-full px-6 py-3 shadow-md">
                                    <p className="font-jetbrains">{skill.name}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    </>;
}