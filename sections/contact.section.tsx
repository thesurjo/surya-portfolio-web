import { contactLinks } from "@/data/contact.data";

export default function ContactSection() {
    return <>
        <section className="contact w-full" id="contact">
            <h2 className="heading font-bold font-jetbrains">Contact<span className="font-jetbrains"> Me!</span></h2>
            <div className="about">
                <div className="about-img md:w-[40%]">
                    <img src="/images/contact.png" alt="" />
                </div>
                <div className="about-content md:ml-10 md:w-[60%]">
                    <h3 className="font-bold font-jetbrains">Get in Touch</h3>
                    <p className="font-jetbrains">
                        Have a project in mind or need coding assistance?
                        I'm here to help! As a passionate programmer,
                        I'm excited to collaborate on innovative projects and provide solutions to your tech challenges.
                        Whether you have a specific question, need support, or want to discuss a potential collaboration,
                        feel free to reach out.
                    </p><br/>
                    <p className="font-jetbrains">
                        Use the contact details below to get in touch, and I'll respond as soon as possible.
                        Let's work together to bring your ideas to life and solve any programming problems you might have.
                        Looking forward to hearing from you!
                    </p>
                    <div className="social-media-contact mt-4">
                        {
                            contactLinks.map((link, index) => (
                                <a key={index} href={link.href} aria-label={link.name} target="_blank">
                                    <i className={link.iconClass}></i>
                                </a>
                            ))
                        }
                    </div>
                    <a href={`/contact`} className="btn font-jetbrains mt-9">Contact Me!</a>
                </div>

            </div>
            {/* <form action="#" name="submit-to-google-sheet">
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
            <span id="msg"></span> */}
        </section>
    </>;
}