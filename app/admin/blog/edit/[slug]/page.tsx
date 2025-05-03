"use client"

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Header, Footer } from '@/global/page';
import { BlogPost } from '@/lib/types/blog';
import { useDropzone } from 'react-dropzone';
import TipTapEditor from '@/components/blogs/TipTapEditor';

export default function EditBlogPost() {
    const router = useRouter();
    const params = useParams();
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState('');
    const [coverImage, setCoverImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [seoTitle, setSeoTitle] = useState('');
    const [seoDescription, setSeoDescription] = useState('');
    const [seoKeywords, setSeoKeywords] = useState('');
    const [status, setStatus] = useState<'draft' | 'published' | 'trash'>('draft');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [slug, setSlug] = useState('');
    const [slugError, setSlugError] = useState('');


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
                    setPreviewUrl(data.coverImage || '');
                    setSlug(data.slug || '');

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

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            setCoverImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.webp']
        },
        maxFiles: 1
    });

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
            if (!slug || slugError) {
                throw new Error('Invalid or missing slug');
            }
            const formData = new FormData();

            formData.append('slug', slug);
            formData.append('title', title);
            formData.append('content', content);
            formData.append('tags', JSON.stringify(tags));
            formData.append('status', status);
            formData.append('seo', JSON.stringify({
                title: seoTitle || title,
                description: seoDescription,
                keywords: seoKeywords.split(',').map(k => k.trim())
            }));

            // If there's a new image, append it and the old image URL
            if (coverImage) {
                formData.append('coverImage', coverImage);
                // Only send old image URL if it's from ImageKit (contains the original blog's image)
                if (blog?.coverImage && blog.coverImage.includes('imagekit')) {
                    formData.append('oldImageUrl', blog.coverImage);
                }
            }

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
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-[32px] md:text-[40px] font-bold font-jetbrains">
                            Edit Blog Post
                        </h1>
                        <button
                            onClick={() => router.push('/admin/blog/manage')}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[--second-bg-color] text-[--text-color] rounded-full text-[14px] font-medium hover:bg-[--second-bg-color]/90 transition-all duration-300 border border-gray-700"
                        >
                            <i className='bx bx-arrow-back text-xl'></i>
                            Back to List
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex gap-8">
                            {/* Main Content Column */}
                            <div className="flex-1">
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Enter post title..."
                                    className="w-full py-4 px-6 rounded-lg bg-[--second-bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[20px] mb-6"
                                    required
                                />
                                <input
                                    type="text"
                                    value={slug}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setSlug(value);
                                        const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
                                        if (!slugRegex.test(value)) {
                                            setSlugError('Slug must be lowercase, use hyphens instead of spaces, and contain no special characters.');
                                        } else {
                                            setSlugError('');
                                        }
                                    }}
                                    placeholder="custom-post-slug"
                                    className="w-full py-4 px-6 rounded-lg bg-[--second-bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[20px] mb-6"
                                />
                                {slugError && (
                                    <p className="text-red-500 text-sm font-jetbrains">{slugError}</p>
                                )}
                                {/* Content Editor */}
                                <TipTapEditor content={content} onChange={setContent} />

                            </div>


                            {/* Sidebar Column */}
                            <div className="w-80 space-y-6">
                                {/* Cover Image Upload */}
                                <div className="bg-[--second-bg-color] p-4 rounded-lg">
                                    <h3 className="text-[16px] font-bold font-jetbrains mb-4">Cover Image</h3>
                                    <div
                                        {...getRootProps()}
                                        className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer ${isDragActive ? 'border-[--main-color]' : 'border-gray-700'}`}
                                    >
                                        <input {...getInputProps()} />
                                        {isDragActive ? (
                                            <p>Drop the image here...</p>
                                        ) : (
                                            <p>Drag & drop an image here, or click to select one</p>
                                        )}
                                    </div>
                                    {previewUrl && (
                                        <div className="mt-4">
                                            <img src={previewUrl} alt="Preview" className="w-full h-auto rounded-lg" />
                                        </div>
                                    )}
                                </div>

                                {/* Tags Section */}
                                <div className="bg-[--second-bg-color] p-4 rounded-lg">
                                    <h3 className="text-[16px] font-bold font-jetbrains mb-4">Tags</h3>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-[--main-color]/20 text-[--main-color] px-3 py-1 rounded-md text-[12px] font-medium font-jetbrains flex items-center gap-2 group"
                                            >
                                                {tag}
                                                <button
                                                    type="button"
                                                    onClick={() => removeTag(tag)}
                                                    className="text-[--main-color] opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <i className='bx bx-x'></i>
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                    <input
                                        type="text"
                                        value={tagInput}
                                        onChange={(e) => setTagInput(e.target.value)}
                                        onKeyDown={handleTagInput}
                                        placeholder="Add a tag..."
                                        className="w-full py-2 px-3 rounded-lg bg-[--bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[14px]"
                                    />
                                </div>

                                {/* SEO Section */}
                                <div className="bg-[--second-bg-color] p-4 rounded-lg">
                                    <h3 className="text-[16px] font-bold font-jetbrains mb-4">SEO Settings</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-[12px] font-medium font-jetbrains mb-2">
                                                SEO Title
                                            </label>
                                            <input
                                                type="text"
                                                value={seoTitle}
                                                onChange={(e) => setSeoTitle(e.target.value)}
                                                placeholder="Leave blank to use post title"
                                                className="w-full py-2 px-3 rounded-lg bg-[--bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[14px]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[12px] font-medium font-jetbrains mb-2">
                                                Meta Description
                                            </label>
                                            <textarea
                                                value={seoDescription}
                                                onChange={(e) => setSeoDescription(e.target.value)}
                                                rows={3}
                                                className="w-full py-2 px-3 rounded-lg bg-[--bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[14px]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[12px] font-medium font-jetbrains mb-2">
                                                Keywords (comma-separated)
                                            </label>
                                            <input
                                                type="text"
                                                value={seoKeywords}
                                                onChange={(e) => setSeoKeywords(e.target.value)}
                                                placeholder="e.g. technology, programming, web development"
                                                className="w-full py-2 px-3 rounded-lg bg-[--bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[14px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-between pt-6 border-t border-gray-700">
                            <button
                                type="button"
                                onClick={() => router.push('/admin/blog/manage')}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-[--main-color] text-[--main-color] hover:bg-[--main-color]/10 transition-all duration-300 text-[14px] font-medium font-jetbrains border-2 rounded-full"
                            >
                                <i className='bx bx-x text-xl'></i>
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={saving}
                                className={`inline-flex items-center gap-2 px-6 py-3 bg-[--main-color] text-[--bg-color] rounded-full text-[14px] font-medium hover:bg-[--main-color]/90 transition-all duration-300 ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {saving ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <i className='bx bx-save text-xl'></i>
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