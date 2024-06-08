export default function ServiceSection() {
    return <>
        <section className="services" id="services">
            <h2 className="heading">My<span> Services</span></h2>
            <div className="services-container">
                <div className="services-box">
                    <i className='bx bx-code-alt'></i>
                    <h3>Web Development</h3>
                    <p>Experienced web developer skilled in creating custom websites using modern technologies like ReactJS
                        and NextJS. Proficient in HTML, CSS, and JavaScript for seamless user experiences.</p>
                </div>

                <div className="services-box">
                    <i className='bx bx-mobile-alt'></i>
                    <h3>Mobile App Development</h3>
                    <p>Specializing in mobile app development with Flutter, I create responsive and intuitive designs
                        focused on user needs and experiences.</p>
                </div>

                <div className="services-box">
                    <i className='bx bxl-wordpress'></i>
                    <h3>WordPress Development</h3>
                    <p>Passionate UI/UX designer dedicated to crafting modern, attractive, and user-friendly WordPress
                        interfaces that meet your business needs.</p>
                </div>
            </div>

        </section>
    </>;
}