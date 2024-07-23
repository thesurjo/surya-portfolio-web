import { position } from "@/data/home.data";
import { skillsData } from "@/data/skill.data";

export default function WhyChooseMeSection() {
    return (
        <section className="about-section w-full" id="about">
            <h2 className="heading font-bold font-jetbrains">Why<span className="font-jetbrains"> Choose Me?</span></h2>
            <div className="why-choose-me about flex-row-reverse md:flex-row">
                <div className="about-content md:ml-10 md:w-[60%]">
                    <p className="font-jetbrains">
                        Kickstart your journey in software development with me.
                        I’m Surya, a software developer with over four years of experience in mobile and web development.
                    </p>
                    <br />
                    <p className="font-jetbrains">
                    I specialize in creating engaging mobile apps with Flutter and high-performing web applications with ReactJS and NextJS. 
                    I also offer services in WordPress development, SEO, and social media marketing. 
                    Whether you need a dynamic app, an optimized website, or expert digital guidance, I’m here to help you achieve your goals.
                    </p>
                    <br />
                    <ul className="font-jetbrains list-none pl-0">
                        <li className="flex items-center mb-2">
                            <i className="bx bxs-check-circle text-green-500 text-3xl mr-4"></i>
                            <p className="m-0 font-jetbrains">4+ years of experience</p>
                        </li>
                        <li className="flex items-center mb-2">
                            <i className="bx bxs-check-circle text-green-500 text-3xl mr-4"></i>
                            <p className="m-0 font-jetbrains">Expert in mobile app development</p>
                        </li>
                        <li className="flex items-center mb-2">
                            <i className="bx bxs-check-circle text-green-500 text-3xl mr-4"></i>
                            <p className="m-0 font-jetbrains">Skilled in high-performing web apps</p>
                        </li>
                        <li className="flex items-center mb-2">
                            <i className="bx bxs-check-circle text-green-500 text-3xl mr-4"></i>
                            <p className="m-0 font-jetbrains">Proficient in HTML, CSS, and JavaScript</p>
                        </li>
                        <li className="flex items-center mb-2">
                            <i className="bx bxs-check-circle text-green-500 text-3xl mr-4"></i>
                            <p className="m-0 font-jetbrains">Experienced with Django, Flask, and Postgres</p>
                        </li>
                        <li className="flex items-center mb-2">
                            <i className="bx bxs-check-circle text-green-500 text-3xl mr-4"></i>
                            <p className="m-0 font-jetbrains">Expert in RESTful API development</p>
                        </li>
                        <li className="flex items-center mb-2">
                            <i className="bx bxs-check-circle text-green-500 text-3xl mr-4"></i>
                            <p className="m-0 font-jetbrains">Specialized in WordPress, SEO, and social media</p>
                        </li>
                        <li className="flex items-center mb-2">
                            <i className="bx bxs-check-circle text-green-500 text-3xl mr-4"></i>
                            <p className="m-0 font-jetbrains">Provides training and consultancy</p>
                        </li>
                    </ul>
                </div>
                <div className="about-img md:w-[40%]">
                    <img src="/images/handshake.png" alt="" />
                </div>
            </div>
        </section>
    );
}