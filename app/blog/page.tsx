"use client"

import { useState, useEffect } from 'react';
import { Header, Footer } from '@/global/page';
import { motion } from 'framer-motion';
import BlogCard from '@/components/blogs/BlogCard';
import { BlogPost } from '@/lib/types/blog';
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Blog - Surya Basak",
//   description: "Explore the range of software development services offered by Surya Basak, including mobile app development, web development, UI/UX design, and more.",
//   openGraph: {
//     title: "Services - Surya Basak",
//     description: "Professional software development services including mobile and web development.",
//     url: "https://suryabasak.com/services",
//     type: "website",
//   },
// };

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Blog() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/api/blog');
                const data: BlogPost[] = await response.json();
                setBlogs(data);
                
                // Extract unique tags
                const allTags = Array.from(
                    new Set(data.flatMap((blog: BlogPost) => blog.tags))
                ).sort();
                setTags(allTags);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    useEffect(() => {
        const results = blogs.filter(blog => {
            const matchesSearch = (
                blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
            );
            const matchesTag = selectedTag ? blog.tags.includes(selectedTag) : true;
            return matchesSearch && matchesTag;
        });

        setFilteredBlogs(results);
    }, [searchTerm, selectedTag, blogs]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between mt-16 md:mt-0">
            <Header />
            <section className="w-full py-20 pt-28 px-4 md:px-6 lg:px-8" id="blog">
                <div className="text-center mb-12 animate-fadeIn">
                    <h2 className="text-[28px] md:text-[40px] font-bold font-jetbrains mb-4">
                        My <span className="text-[--main-color]">Blog</span>
                    </h2>
                    <p className="font-jetbrains text-[14px] md:text-[16px] max-w-6xl mx-auto text-opacity-90 mb-6">
                        Dive into my thoughts, experiences, and insights about software development, technology trends, and more.
                    </p>
                    <div className="w-20 h-1 bg-[--main-color] mx-auto rounded-full"></div>
                </div>

                {/* Search and Filter Section */}
                <div className="max-w-[90rem] mx-auto mb-12 flex flex-col gap-6">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            className="w-full py-3 px-4 rounded-lg bg-[--second-bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[14px] md:text-[16px]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <i className='bx bx-search absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-400'></i>
                    </div>

                    {/* Tags filter */}
                    <div className="flex flex-col gap-2 items-center">
                        <div className="flex flex-wrap gap-2 justify-center">
                            <button
                                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-300 font-jetbrains ${
                                    selectedTag === null 
                                        ? 'bg-[--main-color] text-[--second-bg-color]' 
                                        : 'bg-[--second-bg-color] text-[--text-color] hover:bg-opacity-80'
                                }`}
                                onClick={() => setSelectedTag(null)}
                            >
                                All Posts
                            </button>
                            {tags.map((tag) => (
                                <button
                                    key={tag}
                                    className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-300 font-jetbrains ${
                                        selectedTag === tag 
                                            ? 'bg-[--main-color] text-[--second-bg-color]' 
                                            : 'bg-[--second-bg-color] text-[--text-color] hover:bg-opacity-80'
                                    }`}
                                    onClick={() => setSelectedTag(tag)}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="loader"></div>
                    </div>
                ) : filteredBlogs.length === 0 ? (
                    <div className="text-center py-16">
                        <i className='bx bx-search text-4xl text-gray-400 mb-4'></i>
                        <h3 className="text-[18px] md:text-[20px] font-jetbrains mb-2">No blogs found</h3>
                        <p className="text-gray-400 text-[14px] md:text-[16px]">Try adjusting your search or filter criteria</p>
                    </div>
                ) : (
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 lg:gap-10 max-w-[90rem] mx-auto"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {filteredBlogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                blog={{
                                    ...blog,
                                    description: blog.description || '',
                                    category: blog.category || '',
                                    imageUrl: blog.imageUrl || '',
                                    technologies: blog.technologies || []
                                }}
                                variants={item}
                            />
                        ))}
                    </motion.div>
                )}
            </section>
            <Footer />
        </main>
    );
}
