import { AboutSection, ContactSection, ExperienceSection, HeroSection, ProjectsSection, ServicesSection, SkillsSection } from "@/components/portfolio-sections";

export default function Home() {
  return (
    <main id="home">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
