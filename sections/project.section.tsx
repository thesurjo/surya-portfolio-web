export default function ProjectSection() {
    return <>
          <section className="portfolio w-full" id="portfolio">
        <h2 className="heading">Latest<span> Project</span></h2>
        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src="myproject/image/jan-vlacuha-Rns_A8bJ_dQ-unsplash.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Perssonal Portfolio</h4>
              <p>In this project I try making my own portfolio website for myself. Showcase my projects, my social
                media handles, my experience on the website.</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src="myproject/image/austin-poon-JO_S6ewBqAk-unsplash.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>dynamics website Deployment in AWS</h4>
              <p>In this project I try deployed dynamics website in AWS.so that we can add deleted the data by
                connecting to databases.</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src="myproject/image/nubelson-fernandes--Xqckh_XVU4-unsplash.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Iris flower detection</h4>
              <p>In this project I try detect the iris flower type by using machine learning predication model.And
                deployed in streamlit python</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src="myproject/image/kevin-canlas-QYHehJ9Iovs-unsplash.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Cab Booking </h4>
              <p>In this project we can book a cab by using java.</p>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
          </div>
        </div>
      </section>
    </>;
}