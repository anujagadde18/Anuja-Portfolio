import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Refund Hawk",
      role: "Head of Product",
      period: "2024 - Present",
      location: "Current Role",
      isCurrent: true,
      description: "Leading product strategy and client-facing initiatives for innovative refund technology platform.",
      achievements: [
        "Driving product roadmap and strategic initiatives for client-facing solutions",
        "Leading cross-functional teams to deliver data-driven product features",
        "Building AI-powered tools to enhance customer experience and operational efficiency",
        "Establishing product analytics framework for data-informed decision making",
      ],
      skills: ["Product Strategy", "Client Relations", "Team Leadership", "AI Integration"],
    },
    {
      company: "Amazon",
      role: "Data Analyst - Marketplace Intelligence",
      period: "2022 - 2024",
      location: "Seller & Vendor Analytics",
      isCurrent: false,
      description: "Worked directly with Amazon seller and vendor product data to drive marketplace insights and optimization.",
      achievements: [
        "Analyzed seller and vendor performance data to identify growth opportunities",
        "Built dashboards and analytics tools for marketplace intelligence",
        "Developed data models to optimize product listings and pricing strategies",
        "Collaborated with cross-functional teams to improve seller experience",
      ],
      skills: ["Amazon Analytics", "Seller Data", "Vendor Insights", "SQL", "Python"],
    },
    {
      company: "Natural Fiber Welding",
      role: "Senior Data Analyst",
      period: "2020 - 2022",
      location: "Data Analytics",
      isCurrent: false,
      description: "Deployed predictive models and engineered analytics pipelines to drive business impact across automotive and consumer tech.",
      achievements: [
        "Deployed ML models for predictive analytics and business forecasting",
        "Built data pipelines using Airflow, dbt, and modern data stack",
        "Led A/B testing initiatives to optimize product experimentation",
        "Created executive dashboards for strategic decision-making",
      ],
      skills: ["Machine Learning", "Data Engineering", "A/B Testing", "AWS", "Tableau"],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-24 lg:py-32 px-6 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-experience-heading">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey from data analytics to product leadership, building AI-powered solutions at scale
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.company}
              className={`p-6 md:p-8 hover-elevate ${exp.isCurrent ? 'border-primary border-2' : ''}`}
              data-testid={`card-experience-${index}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 mt-1">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold" data-testid={`text-role-${index}`}>
                      {exp.role}
                    </h3>
                    <p className="text-lg font-medium text-foreground/90" data-testid={`text-company-${index}`}>
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span data-testid={`text-period-${index}`}>{exp.period}</span>
                  {exp.isCurrent && (
                    <Badge variant="default" className="ml-2">Current</Badge>
                  )}
                </div>
              </div>

              <p className="text-base text-foreground/90 mb-4">{exp.description}</p>

              <div className="space-y-2 mb-4">
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-foreground/80">{achievement}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
