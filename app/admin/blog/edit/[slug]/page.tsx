"use client"

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Header, Footer } from '@/global/page';
import { BlogPost } from '@/lib/types/blog';

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor"),
    { ssr: false }
);

export default function EditBlogPost() {
    const router = useRouter();
    const params = useParams();
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState('');
    const [seoTitle, setSeoTitle] = useState('');
    const [seoDescription, setSeoDescription] = useState('');
    const [seoKeywords, setSeoKeywords] = useState('');
    const [status, setStatus] = useState<'draft' | 'published' | 'trash'>('draft');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                if (params.slug) {
                    const response = await fetch(`/api/blog/${params.slug}`);
                    if (!response.ok) throw new Error('Blog not found');
                    const data = await response.json();
                    setBlog(data);
                    setTitle(data.title);
                    setContent(data.content);
                    setTags(data.tags || []);
                    setStatus(data.status || 'draft');
                    setSeoTitle(data.seo?.title || '');
                    setSeoDescription(data.seo?.description || '');
                    setSeoKeywords(data.seo?.keywords?.join(', ') || '');
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
                router.push('/admin/blog/manage');
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [params.slug]);

    const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && tagInput.trim()) {
            e.preventDefault();
            if (!tags.includes(tagInput.trim())) {
                setTags([...tags, tagInput.trim()]);
            }
            setTagInput('');
        }
    };

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            if (!title || !content) {
                throw new Error('Please fill in all required fields');
            }

            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('tags', JSON.stringify(tags));
            formData.append('status', status);
            formData.append('seo', JSON.stringify({
                title: seoTitle || title,
                description: seoDescription,
                keywords: seoKeywords.split(',').map(k => k.trim())
            }));

            const response = await fetch(`/api/blog/${params.slug}`, {
                method: 'PUT',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to update blog post');
            }

            router.push('/admin/blog/manage');
        } catch (error) {
            console.error('Error updating blog post:', error);
            alert(error instanceof Error ? error.message : 'Failed to update blog post');
        } finally {
            setSaving(false);
        }
    };

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
        return null;
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />
            <section className="w-full py-8 pt-28 px-4 md:px-9 bg-[--second-bg-color]/30">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-[32px] md:text-[40px] font-bold font-jetbrains">
                            Edit Blog Post
                        </h1>
                        <button
                            onClick={() => router.push('/admin/blog/manage')}
                            className="px-6 py-3 bg-[--second-bg-color] text-[--text-color] rounded-lg text-[14px] font-medium hover:bg-[--second-bg-color]/90 transition-all duration-300 flex items-center gap-2"
                        >
                            <i className='bx bx-arrow-back'></i>
                            Back to List
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title and Status */}
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-[14px] font-medium font-jetbrains mb-2">
                                    Title *
                                </label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full py-3 px-4 rounded-lg bg-[--second-bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[14px]"
                                    required
                                />
                            </div>
                            <div className="w-32">
                                <label className="block text-[14px] font-medium font-jetbrains mb-2">
                                    Status
                                </label>
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value as 'draft' | 'published' | 'trash')}
                                    className="w-full py-3 px-4 rounded-lg bg-[--second-bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[14px]"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                    <option value="trash">Trash</option>
                                </select>
                            </div>
                        </div>

                        {/* Tags Input */}
                        <div>
                            <label className="block text-[14px] font-medium font-jetbrains mb-2">
                                Tags
                            </label>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-[--main-color]/20 text-[--main-color] px-3 py-1 rounded-md text-[12px] font-medium font-jetbrains flex items-center gap-2"
                                    >
                                        {tag}
                                        <button
                                            type="button"
                                            onClick={() => removeTag(tag)}
                                            className="text-[--main-color] hover:text-[--main-color]/80"
                                        >
                                            ×
                                        </button>
                                    </span>
                                ))}
                            </div>
                            <input
                                type="text"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={handleTagInput}
                                placeholder="Type and press Enter to add tags"
                                className="w-full py-3 px-4 rounded-lg bg-[--second-bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[14px]"
                            />
                        </div>

                        {/* Content Editor */}
                        <div>
                            <label className="block text-[14px] font-medium font-jetbrains mb-2">
                                Content *
                            </label>
                            <MDEditor
                                value={content}
                                onChange={value => setContent(value || '')}
                                preview="edit"
                                height={400}
                            />
                        </div>

                        {/* SEO Section */}
                        <div className="border-t border-gray-700 pt-6">
                            <h2 className="text-[20px] font-bold font-jetbrains mb-4">SEO Settings</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[14px] font-medium font-jetbrains mb-2">
                                        SEO Title
                                    </label>
                                    <input
                                        type="text"
                                        value={seoTitle}
                                        onChange={(e) => setSeoTitle(e.target.value)}
                                        placeholder="Leave blank to use post title"
                                        className="w-full py-3 px-4 rounded-lg bg-[--second-bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[14px]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-medium font-jetbrains mb-2">
                                        Meta Description
                                    </label>
                                    <textarea
                                        value={seoDescription}
                                        onChange={(e) => setSeoDescription(e.target.value)}
                                        rows={3}
                                        className="w-full py-3 px-4 rounded-lg bg-[--second-bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[14px]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-medium font-jetbrains mb-2">
                                        Keywords (comma-separated)
                                    </label>
                                    <input
                                        type="text"
                                        value={seoKeywords}
                                        onChange={(e) => setSeoKeywords(e.target.value)}
                                        placeholder="e.g. technology, programming, web development"
                                        className="w-full py-3 px-4 rounded-lg bg-[--second-bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[14px]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-between pt-6">
                            <button
                                type="button"
                                onClick={() => router.push('/admin/blog/manage')}
                                className="px-6 py-3 bg-gray-600 text-white rounded-lg text-[14px] font-medium hover:bg-gray-700 transition-all duration-300 flex items-center gap-2"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={saving}
                                className={`px-6 py-3 bg-[--main-color] text-[--bg-color] rounded-lg text-[14px] font-medium hover:bg-[--main-color]/90 transition-all duration-300 flex items-center gap-2 ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {saving ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <i className='bx bx-save'></i>
                                        {status === 'published' ? 'Update & Publish' : `Save as ${status.charAt(0).toUpperCase() + status.slice(1)}`}
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </main>
    );
}