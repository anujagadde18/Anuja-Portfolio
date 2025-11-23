import { Github, Linkedin } from "lucide-react";
import { SiMedium, SiGooglecloud } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/anuja-gadde/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/anujagadde18",
      label: "GitHub",
    },
    {
      icon: SiMedium,
      href: "https://medium.com/@anujagadde18",
      label: "Medium",
    },
    {
      icon: SiGooglecloud,
      href: "#",
      label: "Google Cloud",
    },
  ];

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Anuja Gadde. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Currently: Head of Product @ Refund Hawk
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-2 rounded-md transition-transform hover:scale-110"
                  aria-label={social.label}
                  data-testid={`link-footer-${social.label.toLowerCase()}`}
                >
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
