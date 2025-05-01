import { Header, Footer } from '@/global/page';
import { BlogSection } from '@/sections/page';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Surya Basak",
  description: "Explore the range of software development services offered by Surya Basak, including mobile app development, web development, UI/UX design, and more.",
  openGraph: {
    title: "Services - Surya Basak",
    description: "Professional software development services including mobile and web development.",
    url: "https://suryabasak.com/services",
    type: "website",
  },
}; 
export default function Blog() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between mt-16 md:mt-0">
            <Header />
            <BlogSection />
            <Footer />
        </main>
    );
}
