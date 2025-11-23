import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import { SiMedium } from "react-icons/si";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "anujagadde18@gmail.com",
      link: "mailto:anujagadde18@gmail.com",
      testId: "button-email",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with me professionally",
      link: "https://www.linkedin.com/in/anuja-gadde/",
      testId: "button-linkedin",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code and projects",
      link: "https://github.com/anujagadde18",
      testId: "button-github",
    },
    {
      icon: SiMedium,
      title: "Medium",
      description: "Read my latest articles",
      link: "https://medium.com/@anujagadde18",
      testId: "button-medium",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-24 lg:py-32 px-6 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-contact-heading">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're looking for a product leader, AI/ML consultant, or just want to discuss data-driven innovation—I'd love to hear from you
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                <p className="text-muted-foreground mb-6">
                  I'm currently exploring roles in product leadership and AI-driven innovation. If you're building something exciting in the product or AI space, let's connect.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={method.title}
                      className="p-4 hover-elevate"
                      data-testid={`card-contact-${method.title.toLowerCase()}`}
                    >
                      <a
                        href={method.link}
                        target={method.link.startsWith('mailto') ? undefined : '_blank'}
                        rel={method.link.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                        className="flex items-center gap-3"
                      >
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold">{method.title}</h4>
                          <p className="text-xs text-muted-foreground">{method.description}</p>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>

            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
