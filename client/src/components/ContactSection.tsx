import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MessageSquare } from "lucide-react";
import { SiMedium } from "react-icons/si";

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

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card
                  key={method.title}
                  className="p-6 hover-elevate"
                  data-testid={`card-contact-${method.title.toLowerCase()}`}
                >
                  <a
                    href={method.link}
                    target={method.link.startsWith('mailto') ? undefined : '_blank'}
                    rel={method.link.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{method.title}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </a>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 text-center bg-primary/5">
            <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Open to Opportunities</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm currently exploring roles in product leadership and AI-driven innovation. If you're building something exciting in the product or AI space, let's connect.
            </p>
            <Button
              size="lg"
              asChild
              data-testid="button-primary-contact"
            >
              <a href="mailto:anujagadde18@gmail.com">
                Get In Touch
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
