"use client"
import { useRouter } from 'next/navigation'
import { Header, Footer } from '@/global/page';
import Image from 'next/image';
import { getServiceBySlug } from '@/data/serviceDetails';
import { useParams } from 'next/navigation';

export default function BlogDetail() {
    const router = useRouter();
    const params = useParams();
    const slug = params.slug as string;
    const serviceData = getServiceBySlug(slug);

    if (!serviceData) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between mt-16 md:mt-0">
                <Header />
                <div className="w-full py-20 px-4 text-center">
                    <h1 className="text-[32px] md:text-[48px] font-bold mb-6 font-jetbrains">Blog not found</h1>
                    <p className="text-[16px] md:text-[18px] mb-8 font-jetbrains text-gray-400">
                        The service you're looking for doesn't exist or has been moved.
                    </p>
                    <button
                        onClick={() => router.push('/services')}
                        className="bg-[--main-color] hover:bg-[--main-color-dark] text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center mx-auto shadow-lg hover:shadow-xl"
                    >
                        <span className="mr-2 text-[14px] md:text-[16px]">Back to Blog</span>
                        <i className='bx bx-arrow-back text-[18px]'></i>
                    </button>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />
            <section className="w-full py-8 pt-28 px-4 md:px-9 bg-[--second-bg-color]/30">
                <div className="max-w-7xl mx-auto">
                    {/* Back button */}
                    <div className="mb-6">
                        <button
                            onClick={() => router.push('/blog')}
                            className="inline-flex items-center gap-2 text-[14px] md:text-[16px] font-medium text-[--main-color] hover:text-[--main-color]/80 transition-colors font-jetbrains group"
                        >
                            <i className='bx bx-left-arrow-alt text-lg group-hover:-translate-x-1 transition-transform'></i> Back to Blog
                        </button>
                    </div>
                    {/* Service Header Card */}
                    <div className="bg-[--second-bg-color] rounded-2xl p-6 md:p-8 shadow-xl mb-6 border border-gray-800/20">
                        <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-start">
                            {/* Service Info */}
                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div>
                                        <h1 className="text-[22px] md:text-[24px] lg:text-[26px] font-bold font-jetbrains text-white mb-3">{serviceData.title}</h1>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-[12px] md:text-[13px] bg-[--main-color]/20 text-[--main-color] px-3 py-1 rounded-md font-semibold font-jetbrains">
                                                {serviceData.title}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Technology Tags */}
                                <div className="flex flex-wrap gap-3 mt-3">
                                    {serviceData.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-[--bg-color]/50 text-white/90 rounded-md px-4 py-1.5 text-[10px] md:text-[12px] font-medium font-jetbrains border border-gray-800/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content - 8 columns on large screens */}
                    <div className="lg:col-span-8 space-y-8 md:space-y-8">
                        {/* Hero Image */}
                        <div
                            className="bg-[--second-bg-color] p-20 md:p-24 rounded-2xl border border-gray-800/20 shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
                        >
                            <div className="relative overflow-hidden rounded-xl aspect-video">
                                <Image
                                    src={serviceData.heroImage}
                                    alt={serviceData.title}
                                    width={1200}
                                    height={675}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Description Card */}
                        <div
                            className="bg-[--second-bg-color] p-6 md:p-8 rounded-2xl border border-gray-800/20 shadow-xl transform hover:scale-[1.01] transition-transform duration-300"
                        >
                            <h2 className="text-[18px] md:text-[20px] font-bold font-jetbrains mb-5 text-white">About This Service</h2>
                            <div className="space-y-4">
                                {serviceData.heroDescription.map((paragraph, index) => (
                                    <p key={index} className="text-[12px] md:text-[14px] text-gray-200 leading-relaxed font-jetbrains">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
} 