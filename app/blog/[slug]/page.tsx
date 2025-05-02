"use client"

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Header, Footer } from '@/global/page';
import Image from 'next/image';
import { BlogPost } from '@/lib/types/blog';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function BlogDetail() {
    const router = useRouter();
    const params = useParams();
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                if (params.slug) {
                    const response = await fetch(`/api/blog/${params.slug}`);
                    if (!response.ok) {
                        throw new Error('Blog not found');
                    }
                    const data = await response.json();
                    setBlog(data);
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [params.slug]);

    if (loading) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between">
                <Header />
                <div className="flex justify-center items-center h-screen">
                    <div className="loader"></div>
                </div>
                <Footer />
            </main>
        );
    }

    if (!blog) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between mt-16 md:mt-0">
                <Header />
                <div className="w-full py-20 px-4 text-center">
                    <h1 className="text-[32px] md:text-[48px] font-bold mb-6 font-jetbrains">Blog not found</h1>
                    <p className="text-[16px] md:text-[18px] mb-8 font-jetbrains text-gray-400">
                        The blog post you're looking for doesn't exist or has been moved.
                    </p>
                    <button
                        onClick={() => router.push('/blog')}
                        className="bg-[--main-color] hover:bg-[--main-color]/90 text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center mx-auto gap-2"
                    >
                        <i className='bx bx-left-arrow-alt'></i>
                        Back to Blog
                    </button>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />
            <article className="w-full py-8 pt-28 px-4 md:px-9 bg-[--second-bg-color]/30">
                <div className="max-w-4xl mx-auto">
                    {/* Back button */}
                    <div className="mb-6">
                        <button
                            onClick={() => router.push('/blog')}
                            className="inline-flex items-center gap-2 text-[14px] md:text-[16px] font-medium text-[--main-color] hover:text-[--main-color]/80 transition-colors font-jetbrains group"
                        >
                            <i className='bx bx-left-arrow-alt text-lg group-hover:-translate-x-1 transition-transform'></i>
                            Back to Blog
                        </button>
                    </div>

                    {/* Blog Header */}
                    <header className="mb-8">
                        <h1 className="text-[32px] md:text-[48px] font-bold font-jetbrains mb-4">
                            {blog.title}
                        </h1>
                        <div className="flex items-center gap-4 text-gray-400 mb-6">
                            <div className="flex items-center gap-2">
                                <i className='bx bx-calendar'></i>
                                <span className="text-[14px] font-jetbrains">
                                    {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className='bx bx-user'></i>
                                <span className="text-[14px] font-jetbrains">{blog.author.name}</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {blog.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-[--main-color]/20 text-[--main-color] px-3 py-1 rounded-md text-[12px] font-medium font-jetbrains"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
                        <Image
                            src={blog.coverImage}
                            alt={blog.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Blog Content */}
                    <div className="prose prose-invert max-w-none">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code({ inline, className, children, ...props }: React.HTMLAttributes<HTMLElement> & { inline?: boolean }) {
                                    const match = /language-(\w+)/.exec(className || '');
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            style={coldarkDark as any}
                                            language={match[1]}
                                            PreTag="div"
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                }
                            }}
                        >
                            {blog.content}
                        </ReactMarkdown>
                    </div>

                    {/* Share and Navigation */}
                    <div className="mt-12 pt-8 border-t border-gray-700">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <span className="text-[14px] font-jetbrains text-gray-400">Share this post:</span>
                                <div className="flex items-center gap-2">
                                    <button 
                                        onClick={() => window.open(`https://twitter.com/intent/tweet?text=${blog.title}&url=${window.location.href}`, '_blank')}
                                        className="w-8 h-8 rounded-full bg-[--second-bg-color] flex items-center justify-center text-[--main-color] hover:bg-[--main-color] hover:text-white transition-all duration-300"
                                    >
                                        <i className='bx bxl-twitter'></i>
                                    </button>
                                    <button 
                                        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}
                                        className="w-8 h-8 rounded-full bg-[--second-bg-color] flex items-center justify-center text-[--main-color] hover:bg-[--main-color] hover:text-white transition-all duration-300"
                                    >
                                        <i className='bx bxl-linkedin'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </main>
    );
}