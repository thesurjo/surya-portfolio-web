"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/lib/types/blog';
import BlogCard from '@/components/blogs/BlogCard';

const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

export default function BlogSection() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/api/blog?status=published');
                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Blog section fetch error:', errorData);
                    throw new Error(errorData.details || errorData.error || 'Failed to fetch blog posts');
                }
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs in section:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <section className="relative w-full py-16 px-4" id="blog">
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

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="loader"></div>
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="text-center py-16">
                        <i className='bx bx-book-content text-4xl text-gray-400 mb-4'></i>
                        <h3 className="text-[18px] md:text-[20px] font-jetbrains mb-2">No blogs published yet</h3>
                        <p className="text-gray-400 text-[14px] md:text-[16px]">Check back soon for new content!</p>
                    </div>
                ) : (
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                    >
                        {blogs.slice(0, 3).map((blog) => (
                            <BlogCard
                                key={blog.id}
                                blog={blog}
                                variants={fadeInUp}
                            />
                        ))}
                    </motion.div>
                )}

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="flex justify-center"
                >
                    <div className="text-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[--main-color] text-[--bg-color] rounded-full text-[14px] font-medium hover:bg-[--main-color]/90 transition-all duration-300"
                        >
                            <i className='bx bx-book-open text-xl'></i>
                            View All Posts
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}