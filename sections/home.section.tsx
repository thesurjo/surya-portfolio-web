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
                    <a href="https://github.com/shreya6360/Responsive-personal_portfolio"><i className='bx bxl-github'></i></a>
                    <a href="#"><i className='bx bxs-envelope'></i></a>
                    <a href="#"><i className='bx bxl-instagram'></i></a>
                    <a href="https://www.linkedin.com/in/shreya-shreya-421886227"><i className='bx bxl-linkedin-square'></i></a>
                </div>
                <a href="C:\Users\shrey\Downloads\B.-Software-Engineer.docx" className="btn">Download CV</a>
            </div>
            <div className="home-img">
                <img src="images/me.png" alt="" />
            </div>
        </section>
    </>;
}