import { Header, Footer } from '@/global/page';
import Image from 'next/image';
import { BlogPost } from '@/lib/types/blog';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import rehypeRaw from 'rehype-raw';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface BlogDetailProps {
    params: Promise<{ slug: string }>;
}

interface ComponentProps {
    node?: any;
    inline?: boolean;
    className?: string;
    children?: ReactNode;
    [key: string]: any;
}

// Generate dynamic metadata
export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
    try {
        const { slug } = await params;
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`);
        const blog: BlogPost = await response.json();

        return {
            title: `${blog.title} | Surya Basak's Blog`,
            description: blog.excerpt || blog.content.slice(0, 160),
            openGraph: {
                title: blog.title,
                description: blog.excerpt || blog.content.slice(0, 160),
                images: [
                    {
                        url: blog.coverImage,
                        width: 1200,
                        height: 630,
                        alt: blog.title,
                    },
                ],
                type: 'article',
                publishedTime: new Date(blog.publishedAt).toISOString(),
                authors: [blog.author.name],
                tags: blog.tags,
            },
            twitter: {
                card: 'summary_large_image',
                title: blog.title,
                description: blog.excerpt || blog.content.slice(0, 160),
                images: [blog.coverImage],
            },
        };
    } catch (error) {
        return {
            title: 'Blog Post | Surya Basak',
            description: 'Read interesting articles about web development, programming, and technology.',
        };
    }
}

export default async function BlogDetail({ params }: BlogDetailProps) {
    const { slug } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${slug}`);

    if (!response.ok) {
        notFound();
    }

    const blog: BlogPost = await response.json();

    if (blog.status !== 'published') {
        notFound();
    }

    const components: Components = {
        code(props: ComponentProps) {
            const { inline, className, children } = props;
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <div className="rounded-lg overflow-hidden">
                    <SyntaxHighlighter
                        style={coldarkDark}
                        language={match[1]}
                        customStyle={{
                            fontFamily: '"JetBrains Mono", monospace',
                            fontSize: '12px',
                            lineHeight: '1.5',
                            margin: 0,
                            padding: '1rem',
                        }}
                        PreTag="div"
                    >
                        {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                </div>
            ) : (
                <code className="font-jetbrains text-[12px] md:text-[14px] px-2 py-2 rounded">
                    {children}
                </code>
            );
        },
        p(props: ComponentProps) {
            return <p className="text-[12px] md:text-[14px] leading-relaxed" {...props} />;
        },
        h1(props: ComponentProps) {
            return <h1 className="mt-12 mb-2" {...props} />;
        },
        h2(props: ComponentProps) {
            return <h2 className="text-[24px] md:text-[32px] font-bold mt-12 mb-2" {...props} />;
        },
        h3(props: ComponentProps) {
            return <h3 className="text-[20px] md:text-[24px] font-bold mt-12 mb-2" {...props} />;
        },
        ul(props: ComponentProps) {
            return <ul className="text-[14px] md:text-[16px] list-disc ml-10 my-4" {...props} />;
        },
        ol(props: ComponentProps) {
            return <ol className="text-[12px] md:text-[14px] list-decimal ml-6 my-4" {...props} />;
        },
        li(props: ComponentProps) {
            return <li className="text-[12px] md:text-[14px] mb-2" {...props} />;
        },
        blockquote(props: ComponentProps) {
            return <blockquote className="pl-4 border-l-4 border-[--main-color] my-4 italic" {...props} />;
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />
            <article className="w-full py-8 pt-28 px-4 md:px-9 bg-[--second-bg-color]/30">
                <div className="max-w-5xl mx-auto">
                    {/* Back button */}
                    <div className="mb-6">
                        <a href="/blog" className="inline-flex items-center gap-2 text-[14px] md:text-[16px] font-medium text-[--main-color] hover:text-[--main-color]/80 transition-colors font-jetbrains group">
                            <i className='bx bx-left-arrow-alt text-lg group-hover:-translate-x-1 transition-transform'></i>
                            Back to Blog
                        </a>
                    </div>

                    {/* Blog Header */}
                    <header className="mb-8">
                        <h1 className="text-[24px] md:text-[36px] font-bold font-jetbrains mb-4">
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
                                <span key={index} className="bg-[--main-color]/20 text-[--main-color] px-3 py-1 rounded-md text-[12px] font-medium font-jetbrains">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
                        <Image src={blog.coverImage} alt={blog.title} fill className="object-cover" />
                    </div>

                    {/* Blog Content */}
                    <div className="prose prose-invert prose-h1:font-jetbrains prose-h2:font-jetbrains prose-h3:font-jetbrains prose-p:font-jetbrains prose-li:font-jetbrains max-w-none">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={components}
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
                                    <a
                                        href={`https://twitter.com/intent/tweet?text=${blog.title}&url=${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full bg-[--second-bg-color] flex items-center justify-center text-[--main-color] hover:bg-[--main-color] hover:text-white transition-all duration-300"
                                    >
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                    <a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full bg-[--second-bg-color] flex items-center justify-center text-[--main-color] hover:bg-[--main-color] hover:text-white transition-all duration-300"
                                    >
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
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