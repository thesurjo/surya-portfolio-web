import { servicesData } from '@/data/service.data';

export default function ServiceSection() {
    return <>
        <section className="services" id="services">
            <h2 className="heading font-bold font-jetbrains"><span className='font-jetbrains'>Services</span> I Offer</h2>
            <p className="font-jetbrains text-center mb-16 m-auto max-w-6xl">
                As a versatile software developer, I offer a range of services designed to bring your ideas to
                life with precision and creativity. Here are the key services I provide
            </p>
            <div className="services-container">
                {
                    servicesData.map((service, index) =>
                        <a href={`/services/${service.slug}`} key={index} className="services-box">
                            <i className={`${service.iconClass} text-[--main-color] text-8xl`}></i>
                            <h3 className='font-bold mt-6 mb-4 font-jetbrains'>{service.title}</h3>
                            <p className='font-jetbrains mb-9'>{service.description}</p>
                        </a>
                    )
                }
            </div>
        </section>
    </>;
}