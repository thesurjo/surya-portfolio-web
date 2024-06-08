import { socialMediaLinks } from "@/data/social.data";

export default function HomeSection() {
    return <>
        <section className="home w-full" id="home">
            <div className="home-content">
                <h3>Hey there</h3>
                <h1>I'm Surya</h1>
                <h3>
                    <span>
                        Frontend Developer
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
                <a href="C:\Users\shrey\Downloads\B.-Software-Engineer.docx" className="btn">Download CV</a>
            </div>
            <div className="home-img">
                <img src="images/me.png" alt="" />
            </div>
        </section>
    </>;
}