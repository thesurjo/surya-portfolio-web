import { Header, Footer } from '@/global/page';
import BlogCard from '@/components/blogs/BlogCard';
import { BlogPost } from '@/lib/types/blog';
import type { Metadata } from "next";
import { SearchAndFilter } from './search-filter';

export const metadata: Metadata = {
  title: "Blog - Surya Basak",
  description: "Explore insightful articles and blog posts by Surya Basak about software development, technology trends, and more.",
  openGraph: {
    title: "Blog - Surya Basak",
    description: "Read insightful articles about software development and technology trends.",
    url: "https://suryabasak.com/blog",
    type: "website",
  },
};

async function getBlogs() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog?status=published`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export default async function Blog() {
  const blogs: BlogPost[] = await getBlogs();
  const tags = Array.from(new Set(blogs.flatMap((blog: BlogPost) => blog.tags))).sort();

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

        <SearchAndFilter initialBlogs={blogs} tags={tags} />
      </section>
      <Footer />
    </main>
  );
}
