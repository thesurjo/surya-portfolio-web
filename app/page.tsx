import { Header, Footer } from "@/global/page";
import { AboutSection, ClientCountSection, ContactSection, HomeSection, ProjectSection, ServiceSection, WhyChooseMeSection } from "@/sections/page";

export default function Home() {
  return (
    <main className="homepage flex min-h-screen flex-col items-center justify-between">
      <Header />
      <HomeSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseMeSection/>
      <ClientCountSection/>
      <ProjectSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
