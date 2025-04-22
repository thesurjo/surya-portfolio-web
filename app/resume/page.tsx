import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Surya Basak",
  description: "Professional resume of Surya Basak, a software developer specializing in mobile and web development with over four years of experience.",
  openGraph: {
    title: "Resume - Surya Basak",
    description: "Professional resume of Surya Basak, a software developer specializing in mobile and web development.",
    url: "https://suryabasak.com/resume",
    type: "website",
  },
}; 
export default function Resume() {
    return (
        <>
            <main className="font-jost hyphens-manual w-full h-screen">
                <iframe className="w-full h-full" src="/files/SuryaBasak-Resume.pdf" />
            </main>
        </>
    );
};