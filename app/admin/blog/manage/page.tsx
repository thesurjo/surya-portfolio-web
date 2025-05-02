"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Header, Footer } from '@/global/page';
import { BlogPost } from '@/lib/types/blog';
import Link from 'next/link';

export default function ManageBlogPosts() {
    const router = useRouter();
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await fetch('/api/blog');
            if (!response.ok) throw new Error('Failed to fetch blogs');
            const data = await response.json();
            setBlogs(data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (slug: string) => {
        if (!confirm('Are you sure you want to delete this post?')) return;

        try {
            const response = await fetch(`/api/blog/${slug}`, {
                method: 'DELETE'
            });

            if (!response.ok) throw new Error('Failed to delete blog post');
            fetchBlogs(); // Refresh the list
        } catch (error) {
            console.error('Error deleting blog:', error);
            alert('Failed to delete blog post');
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />
            <section className="w-full py-8 pt-28 px-4 md:px-9 bg-[--second-bg-color]/30">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-[32px] md:text-[40px] font-bold font-jetbrains">
                            Manage Blog Posts
                        </h1>
                        <Link
                            href="/admin/blog"
                            className="px-6 py-3 bg-[--main-color] text-[--bg-color] rounded-lg text-[14px] font-medium hover:bg-[--main-color]/90 transition-all duration-300 flex items-center gap-2"
                        >
                            <i className='bx bx-plus'></i>
                            New Post
                        </Link>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="loader"></div>
                        </div>
                    ) : blogs.length === 0 ? (
                        <div className="text-center py-16 bg-[--second-bg-color] rounded-xl border border-gray-800/20">
                            <i className='bx bx-book-content text-4xl text-gray-400 mb-4'></i>
                            <h3 className="text-[18px] md:text-[20px] font-jetbrains mb-2">No blog posts yet</h3>
                            <p className="text-gray-400 text-[14px] md:text-[16px]">Create your first blog post!</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {blogs.map((blog) => (
                                <div
                                    key={blog.id}
                                    className="bg-[--second-bg-color] p-6 rounded-xl border border-gray-800/20 flex items-center justify-between gap-4"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                            <img
                                                src={blog.coverImage}
                                                alt={blog.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-[16px] font-bold font-jetbrains mb-1">
                                                {blog.title}
                                            </h3>
                                            <p className="text-[12px] text-gray-400 font-jetbrains">
                                                Published: {new Date(blog.publishedAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Link
                                            href={`/admin/blog/edit/${blog.slug}`}
                                            className="px-4 py-2 bg-[--main-color]/20 text-[--main-color] rounded-lg text-[12px] font-medium hover:bg-[--main-color]/30 transition-all duration-300"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(blog.slug)}
                                            className="px-4 py-2 bg-red-500/20 text-red-500 rounded-lg text-[12px] font-medium hover:bg-red-500/30 transition-all duration-300"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </main>
    );
}