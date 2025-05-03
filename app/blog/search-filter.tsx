"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '@/components/blogs/BlogCard';
import { BlogPost } from '@/lib/types/blog';

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

interface SearchAndFilterProps {
    initialBlogs: BlogPost[];
    tags: string[];
}

export function SearchAndFilter({ initialBlogs, tags }: SearchAndFilterProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>(initialBlogs);

    useEffect(() => {
        const results = initialBlogs.filter(blog => {
            const matchesSearch = (
                blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
            );
            const matchesTag = selectedTag ? blog.tags.includes(selectedTag) : true;
            return matchesSearch && matchesTag;
        });

        setFilteredBlogs(results);
    }, [searchTerm, selectedTag, initialBlogs]);

    return (
        <>
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

            {filteredBlogs.length === 0 ? (
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
        </>
    );
}