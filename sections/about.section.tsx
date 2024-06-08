export default function AboutSection() {
    return <>
        <section className="about w-full" id="about">
            <div className="about-img">
                <img src="https://wallpaperaccess.com/full/1385382.jpg" alt="" />
            </div>
            <div className="about-content md:ml-10">
                <h2 className="heading font-bold">About<span> Me</span></h2>
                <h3>Frontend Developer</h3>
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
                    <br />
                    I'm passionate about creating software that meets business needs and provides exceptional user
                    experiences. If you're looking for a developer with expertise in Flutter, ReactJS, NextJS, Django,
                    Chalice, and Postgres, I'd love to connect. Let's work together!
                </p>
            </div>
        </section>
    </>;
}