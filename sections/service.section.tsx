import { servicesData } from '@/data/service.data';

export default function ServiceSection() {
    return <>
        <section className="services" id="services">
            <h2 className="heading font-bold font-jetbrains">My<span className='font-jetbrains'> Services</span></h2>
            <div className="services-container">
                {
                    servicesData.map((service, index) =>
                        <div key={index} className="services-box">
                            <i className={`${service.iconClass}`}></i>
                            <h3 className='font-bold mt-6 font-jetbrains'>{service.title}</h3>
                            <p className='font-jetbrains'>{service.description}</p>
                        </div>
                    )
                }
            </div>

        </section>
    </>;
}