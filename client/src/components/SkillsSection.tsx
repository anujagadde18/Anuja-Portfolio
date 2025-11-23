import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Code, Database, Wrench } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Lightbulb,
      title: "Product Management",
      skills: [
        "Product Strategy",
        "Roadmap Planning",
        "Stakeholder Management",
        "User Research",
        "A/B Testing",
        "Analytics",
        "Client Relations",
        "Cross-functional Leadership",
      ],
    },
    {
      icon: Code,
      title: "AI/ML Expertise",
      skills: [
        "Generative AI",
        "LangChain",
        "GPT-4 / Gemini Pro",
        "LLaMA",
        "Machine Learning",
        "scikit-learn",
        "XGBoost",
        "Causal Inference",
      ],
    },
    {
      icon: Database,
      title: "Data & Analytics",
      skills: [
        "Python",
        "SQL",
        "R",
        "PySpark",
        "Snowflake",
        "Redshift",
        "Presto",
        "dbt",
        "Power BI",
        "Tableau",
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: [
        "AWS SageMaker",
        "Airflow",
        "Docker",
        "FastAPI",
        "Streamlit",
        "GitHub Actions",
        "Amazon Analytics",
        "Google Cloud",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-24 px-6 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-skills-heading">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning product management, AI/ML engineering, and data analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="p-6 hover-elevate"
                data-testid={`card-skill-category-${catIndex}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/[\s\/]/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
