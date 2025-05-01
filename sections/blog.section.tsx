"use client"

import { motion } from 'framer-motion';
import { projects } from "@/data/project.data";
import Link from 'next/link';
import BlogCard from '@/components/blogs/BlogCard';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function BlogSection() {
    return (
        <section className="relative w-full py-16 px-4" id="project">
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-5"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[--main-color]/5 via-transparent to-[--main-color]/5"></div>
                <div className="absolute inset-0"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <div className="text-center mb-12 animate-fadeIn">
                    <h2 className="text-[28px] md:text-[40px] font-bold font-jetbrains mb-4">
                        My Latest <span className="text-[--main-color]">Blogs</span>
                    </h2>
                    <p className="font-jetbrains text-[14px] md:text-[16px] max-w-6xl mx-auto text-opacity-90 mb-6">
                    From quick tips to deep dives, my blog covers the code, creativity, and challenges behind modern app development.
                    </p>
                    <div className="w-20 h-1 bg-[--main-color] mx-auto rounded-full"></div>
                </div>
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                >
                    {projects.slice(0, 3).map((blog, index) => (
                        <BlogCard
                            key={index}
                            blog={blog}
                            variants={fadeInUp}
                        />
                    ))}
                </motion.div>

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="flex justify-center"
                >
                    <div className="text-center">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[--main-color] text-[--bg-color] rounded-full text-[14px] font-medium hover:bg-[--main-color]/90 transition-all duration-300"
                        >
                            <i className='bx bx-refresh text-xl'></i>
                            Load More
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}