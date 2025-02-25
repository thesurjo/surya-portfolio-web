import { servicesData } from '@/data/service.data';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServiceSection() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="services py-20 px-4 md:px-6 lg:px-8" id="services">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-6xl mx-auto mb-16"
            >
                <h2 className="heading font-bold font-jetbrains text-[28px] md:text-[40px] md:text-4xl mb-6">
                    <span className='font-jetbrains'>Services</span> I Offer
                </h2>
                <p className="font-jetbrains  text-[14px] md:text-[16px] leading-relaxed text-opacity-90">
                    As a versatile software developer, I offer a range of services designed to bring your ideas to
                    life with precision and creativity. Here are the key services I provide:
                </p>
            </motion.div>
            
            <motion.div 
                className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {servicesData.map((service, index) => (
                    <motion.div 
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="bg-[--second-bg-color] rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-[--main-color] transition-all duration-300"
                    >
                        <Link href={`/services/${service.slug}`} className="block h-full">
                            <div className="p-8 flex flex-col h-full">
                                <div className="bg-[--background-light] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                                    <i className={`${service.iconClass} text-[--main-color] text-4xl`}></i>
                                </div>
                                <h3 className='font-bold text-[16px] md:text-[18px] mb-4 font-jetbrains text-center'>{service.title}</h3>
                                <p className='font-jetbrains text-[10px] md:text-[13px] text-center text-opacity-80 flex-grow'>{service.description}</p>
                                <div className="mt-6 text-center">
                                    <span className="inline-flex items-center text-[--main-color] text-[11px] md:text-[13px]">
                                        Learn more
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}