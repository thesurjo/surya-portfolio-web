import { socialMediaLinks } from "@/data/social.data";

export default function ContactSection() {
    return <>
        <section className="contact w-full" id="contact">
            <h2 className="heading font-bold">Contact<span> Me!</span></h2>
            <div className="social-media-contact">
                    {
                        socialMediaLinks.map((link, index) => (
                            <a key={index} href={link.href} aria-label={link.name} target="_blank">
                                <i className={link.iconClass}></i>
                            </a>
                        ))
                    }
                </div>
            <form action="#" name="submit-to-google-sheet">
                <div className="input-box">
                    <input type="text" name="Name" placeholder="Full Name *" required/>
                    <input type="email" name="Email Address" placeholder="Email Address *" required/>
                </div>
                <div className="input-box">
                    <input type="number" name="Mobile Number" placeholder="Mobile Number" />
                    <input type="text" name="Subject" placeholder="Subject *" required/>
                </div>
                <textarea name="Your Message" id="" cols={10} rows={10} placeholder="Your Message *" required></textarea>
                <input type="submit" value="Send Message" className="btn" />
            </form>
            <span id="msg"></span>
        </section>
    </>;
}