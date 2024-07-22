"use client"
import { servicesData } from '@/data/service.data';
import {Header, Footer} from '@/global/page';

export default function Services() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />
            <section className="services">
            <h2 className="heading font-bold font-jetbrains"><span className='font-jetbrains'>Services</span> I Offer</h2>
            <p className="font-jetbrains text-center mb-12">
            As a versatile software developer, I offer a range of services designed to bring your ideas to 
            life with precision and creativity. Here are the key services I provide
            </p>
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
            <Footer />
        </main>
    );
}
