import { Card } from "@/components/ui/card";
import { ShoppingCart, TrendingUp, BarChart3, Database } from "lucide-react";

export default function AmazonExpertiseSection() {
  const capabilities = [
    {
      icon: Database,
      title: "Seller & Vendor Data Analysis",
      description: "Deep expertise in analyzing Amazon seller and vendor product data to drive marketplace insights",
    },
    {
      icon: BarChart3,
      title: "Performance Optimization",
      description: "Built analytics frameworks to optimize product listings, pricing, and inventory management",
    },
    {
      icon: TrendingUp,
      title: "Growth Intelligence",
      description: "Identified growth opportunities through data-driven marketplace trend analysis",
    },
    {
      icon: ShoppingCart,
      title: "Customer Experience",
      description: "Developed insights to enhance seller experience and marketplace operations",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-6 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">Specialized Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-amazon-heading">
            Amazon Marketplace Analytics
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience working directly with Amazon seller and vendor product data, driving strategic insights for marketplace optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <Card
                key={capability.title}
                className="p-6 text-center hover-elevate"
                data-testid={`card-capability-${capability.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
