import { firstName, position } from "@/data/home.data";
import { socialMediaLinks } from "@/data/social.data";

export default function HomeSection() {
    return <>
        <section className="home w-full mt-16 md:mt-0" id="home">
            <div className="home-content md:w-[50%]">
                <h3 className="font-jetbrains md:w-[50%]">Hey there</h3>
                <h1 className="font-jetbrains">I'm {firstName}</h1>
                <h3 className="font-jetbrains">
                    <span className="font-jetbrains">
                        {position}
                    </span>
                </h3>
                <p className="font-jetbrains">
                    Transforming your vision into dynamic and efficient digital solutions.
                    I offer expertise in web and mobile app development using ReactJS, NextJS, and Flutter,
                    alongside WordPress, SEO, and social media marketing to elevate your digital presence.
                </p>
                <div className="social-media">
                    {
                        socialMediaLinks.map((link, index) => (
                            <a key={index} href={link.href} aria-label={link.name} target="_blank">
                                <i className={link.iconClass}></i>
                            </a>
                        ))
                    }
                </div>
                <div className="flex flex-wrap gap-5">
                    <a href={`/resume`} className="btn font-jetbrains" target="_blank">Resume</a>
                    <a href={`/contact`} className="btn-outlined font-jetbrains">Contact Me!</a>
                </div>
            </div>
            <div className="home-img">
                <img src="images/me4.jpeg" alt="" />
            </div>
        </section>
    </>;
}