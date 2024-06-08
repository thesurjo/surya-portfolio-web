export default function ContactSection() {
    return <>
        <section className="contact w-full" id="contact">
            <h2 className="heading font-bold">Contact<span> Me!</span></h2>
            <form action="#" name="submit-to-google-sheet">
                <div className="input-box">
                    <input type="text" name="Name" placeholder="Full Name" />
                    <input type="email" name="Email Address" placeholder="Email Address" />
                </div>
                <div className="input-box">
                    <input type="number" name="Mobile Number" placeholder="Mobile Number" />
                    <input type="text" name="Email Subject" placeholder="Email Subject" />
                </div>
                <textarea name="Your Message" id="" cols={10} rows={10} placeholder="Your Message"></textarea>
                <input type="submit" value="Send Message" className="btn" />
            </form>
            <span id="msg"></span>
        </section>
    </>;
}