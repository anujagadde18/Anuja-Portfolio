import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import genaiImage from "@assets/generated_images/genai_chatbot_project.png";
import amazonImage from "@assets/generated_images/amazon_analytics_dashboard.png";
import mlImage from "@assets/generated_images/ml_model_visualization.png";
import abTestImage from "@assets/generated_images/a/b_testing_dashboard.png";

export default function ProjectsSection() {
  const projects = [
    {
      title: "GenAI Multimodal Assistant",
      description: "Built a production-ready GenAI application using LangChain and Gemini Pro that processes multimodal inputs (text, images, video) for data analysis and insights generation.",
      image: genaiImage,
      tags: ["GenAI", "LangChain", "Gemini Pro", "Python", "FastAPI"],
      links: {
        github: "https://github.com/anujagadde18",
        article: "https://medium.com/@anujagadde18",
      },
    },
    {
      title: "Amazon Marketplace Analytics Platform",
      description: "Designed and implemented analytics dashboards for Amazon seller and vendor data, enabling data-driven decisions for marketplace optimization and growth strategies.",
      image: amazonImage,
      tags: ["Amazon", "Analytics", "SQL", "Tableau", "Data Modeling"],
      links: {
        article: "https://medium.com/@anujagadde18",
      },
    },
    {
      title: "ML-Powered Customer Churn Prediction",
      description: "Developed machine learning models using XGBoost and scikit-learn to predict customer churn with 87% accuracy, implementing causal inference techniques for actionable insights.",
      image: mlImage,
      tags: ["Machine Learning", "Python", "XGBoost", "A/B Testing"],
      links: {
        github: "https://github.com/anujagadde18",
        article: "https://medium.com/@anujagadde18/telco-churn-intelligence-predicting-customer-behavior-with-actionable-insights-inspired-by-f43e2c7b30da",
      },
    },
    {
      title: "CSV Chatbot for A/B Test Analysis",
      description: "Created a Streamlit-powered GenAI app that allows analysts to upload CSV files and ask natural language questions using GPT-4, perfect for exploring A/B test results without writing code.",
      image: abTestImage,
      tags: ["GPT-4", "Streamlit", "Product Analytics", "GenAI"],
      links: {
        github: "https://github.com/anujagadde18",
        article: "https://medium.com/@anujagadde18/beyond-a-b-testing-how-a-genai-project-sparked-my-curiosity-for-causal-inference-c3131c829947",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-projects-heading">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From GenAI applications to ML models and analytics platforms—here's what I've built
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden hover-elevate"
              data-testid={`card-project-${index}`}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  data-testid={`img-project-${index}`}
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" data-testid={`badge-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      data-testid={`button-github-${index}`}
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.links.article && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      data-testid={`button-article-${index}`}
                    >
                      <a href={project.links.article} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Read More
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
