import { Header, Footer } from "@/global/page";
import { AboutSection, ContactSection, HomeSection, ProjectSection, ServiceSection } from "@/sections/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <HomeSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
