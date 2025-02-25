import { Header, Footer } from "@/global/page";
import { AboutSection, ClientCountSection, ContactSection, HomeSection, ProjectSection, ServiceSection, SkillsSection, WhyChooseMeSection } from "@/sections/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="w-full">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ServiceSection />
        <WhyChooseMeSection/>
        {/* <ClientCountSection/> */}
        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
