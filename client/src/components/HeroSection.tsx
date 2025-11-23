import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, Award } from "lucide-react";
import { SiMedium, SiGooglecloud } from "react-icons/si";
import heroImage from "@assets/Pi7-Image-Cropper (1)_1763932342001.jpeg";

export default function HeroSection() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/anuja-gadde/",
      label: "LinkedIn",
      testId: "link-linkedin",
    },
    {
      icon: Github,
      href: "https://github.com/anujagadde18",
      label: "GitHub",
      testId: "link-github",
    },
    {
      icon: SiMedium,
      href: "https://medium.com/@anujagadde18",
      label: "Medium",
      testId: "link-medium",
    },
    {
      icon: SiGooglecloud,
      href: "#",
      label: "Google Cloud",
      testId: "link-google-cloud",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  Anuja Gadde
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
                Head of Product | AI Researcher & Explorer
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Building data-driven product experiences while actively researching and exploring AI/ML innovations. From Amazon marketplace analytics to GenAI applications, I transform complex data into strategic product decisions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                data-testid="button-view-work"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                data-testid="button-contact"
              >
                <FileText className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-elevate active-elevate-2 p-3 rounded-md transition-transform hover:scale-110"
                    aria-label={social.label}
                    data-testid={social.testId}
                  >
                    <Icon className="h-6 w-6 text-foreground/70" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="relative lg:order-last">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Anuja Gadde - Product Leader"
                className="w-full h-auto object-cover"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
