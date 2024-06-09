import { cvURL, firstName, position } from "@/data/home.data";
import { socialMediaLinks } from "@/data/social.data";

export default function HomeSection() {
    return <>
        <section className="home w-full" id="home">
            <div className="home-content">
                <h3 className="font-jetbrains">Hey there</h3>
                <h1 className="font-jetbrains">I'm {firstName}</h1>
                <h3 className="font-jetbrains">
                    <span className="font-jetbrains">
                        {position}
                    </span>
                </h3>
                <div className="social-media">
                    {
                        socialMediaLinks.map((link, index) => (
                            <a key={index} href={link.href} aria-label={link.name} target="_blank">
                                <i className={link.iconClass}></i>
                            </a>
                        ))
                    }
                </div>
                <a href={`${cvURL}`} className="btn font-jetbrains" target="_blank">Download CV</a>
            </div>
            <div className="home-img">
                <img src="images/me.png" alt="" />
            </div>
        </section>
    </>;
}