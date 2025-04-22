import { Header, Footer } from "@/global/page";
import { AboutSection, ContactSection, GitHubContributionsSection, HomeSection, ProjectSection, ServiceSection, SkillsSection, WhyChooseMeSection } from "@/sections/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surya Basak",
  description: "Surya Basak is a software developer specializing in mobile and web development with over four years of experience. Explore projects, services, and more.",
  openGraph: {
    title: "Surya Basak",
    description: "Portfolio of Surya Basak, a software developer specializing in mobile and web development.",
    url: "https://suryabasak.com",
    type: "website",
  },
}; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="w-full">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ServiceSection />
        <WhyChooseMeSection/>
        {/* <ClientCountSection/> */}
        <GitHubContributionsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
