"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/lib/types/blog';

interface BlogCardProps {
  blog: BlogPost;
  variants?: any; // For framer-motion animation variants
}

export default function BlogCard({ blog, variants }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <motion.div 
        className="group relative bg-[--second-bg-color] rounded-2xl overflow-hidden flex flex-col h-full border border-gray-800/20 hover:border-[--main-color]/30 transition-all duration-300 cursor-pointer"
        variants={variants}
      >
        {/* Image container with overlay */}
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={blog.coverImage} 
            alt={blog.title} 
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[--second-bg-color] via-transparent to-transparent opacity-80"></div>         
        </div>
        
        {/* Content area */}
        <div className="p-7 flex flex-col flex-grow">
          {blog.category && (
            <span className="text-[13px] md:text-[13px] bg-[--main-color]/20 text-[--main-color] rounded-md font-semibold font-jetbrains inline-block mb-1 self-start">
              {blog.category}
            </span>
          )}
          <h3 className="text-[18px] md:text-[18px] font-bold font-jetbrains mb-4 text-white group-hover:text-[--main-color] transition-colors duration-300">{blog.title}</h3>
          <p className="text-[12px] md:text-[12px] mb-6 line-clamp-3 leading-relaxed font-jetbrains text-gray-300">
            {blog.seo.description}
          </p>
          
          {/* Action button */}
          <div className="mt-auto pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
            <div className="text-[12px] md:text-[12px] text-gray-400 font-medium font-jetbrains">
              {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div 
              className="inline-flex items-center gap-3 text-[12px] md:text-[12px] font-semibold text-[--main-color] group-hover:text-[--main-color]/80 transition-colors font-jetbrains"
            >
              Read More <i className='bx bx-right-arrow-alt text-lg'></i>
            </div>
          </div>
        </div>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[--main-color]/20 rounded-2xl pointer-events-none transition-all duration-300"></div>
      </motion.div>
    </Link>
  );
}