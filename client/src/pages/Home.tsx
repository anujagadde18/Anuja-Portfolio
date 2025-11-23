import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import AmazonExpertiseSection from "@/components/AmazonExpertiseSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import WritingSection from "@/components/WritingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <AmazonExpertiseSection />
        <ProjectsSection />
        <SkillsSection />
        <WritingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
