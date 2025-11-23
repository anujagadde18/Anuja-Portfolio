import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Target, Sparkles } from "lucide-react";
import workspaceImage from "@assets/generated_images/product_workspace_setup.png";

export default function AboutSection() {
  const highlights = [
    {
      icon: Briefcase,
      title: "Head of Product",
      description: "Leading product strategy at Refund Hawk for 1+ year",
    },
    {
      icon: GraduationCap,
      title: "MS in Engineering Management",
      description: "Business Analytics, University of Houston",
    },
    {
      icon: Target,
      title: "5+ Years Experience",
      description: "Data Analytics, ML Engineering, Product Management",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-about-heading">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From data analyst to product leader, I bridge the gap between technical innovation and business value
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="p-6 hover-elevate" data-testid={`card-highlight-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold">
                Building the Future of Product with AI
              </h3>
              <p className="text-base leading-relaxed text-foreground/90">
                As Head of Product at Refund Hawk, I lead cross-functional teams to build data-driven solutions that directly impact our customers. My journey from analyzing Amazon seller and vendor product data to leading product strategy has given me a unique perspective on turning data insights into successful products.
              </p>
              <p className="text-base leading-relaxed text-foreground/90">
                I specialize in leveraging AI/ML to solve complex product challenges—from building GenAI-powered assistants to implementing sophisticated A/B testing frameworks. My technical background in Python, machine learning, and data pipelines allows me to bridge the gap between engineering and business.
              </p>
            </div>

            <Card className="p-6 bg-accent/50 border-accent-border">
              <div className="flex items-start gap-3">
                <Sparkles className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Currently Building</h4>
                  <p className="text-sm text-muted-foreground">
                    Leading product innovation at Refund Hawk, focusing on client-facing solutions that combine AI capabilities with data analytics. My long-term vision is to become an entrepreneur building AI-powered products that solve real business problems.
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" data-testid="badge-skill-product">Product Management</Badge>
              <Badge variant="secondary" data-testid="badge-skill-ai">AI/ML Engineering</Badge>
              <Badge variant="secondary" data-testid="badge-skill-data">Data Analytics</Badge>
              <Badge variant="secondary" data-testid="badge-skill-genai">Generative AI</Badge>
              <Badge variant="secondary" data-testid="badge-skill-amazon">Amazon Marketplace</Badge>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={workspaceImage}
                alt="Product workspace"
                className="w-full h-auto object-cover"
                data-testid="img-workspace"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
