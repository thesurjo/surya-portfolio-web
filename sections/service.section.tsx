import { servicesData } from '@/data/service.data';

export default function ServiceSection() {
    return <>
        <section className="services" id="services">
            <h2 className="heading font-bold">My<span> Services</span></h2>
            <div className="services-container">
                {
                    servicesData.map((service, index) =>
                        <div key={index} className="services-box">
                            <i className={service.iconClass}></i>
                            <h3 className='font-bold'>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    )
                }
            </div>

        </section>
    </>;
}