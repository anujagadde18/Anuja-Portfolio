import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock } from "lucide-react";

export default function WritingSection() {
  const articles = [
    {
      title: "How AI Predicts Words — And Why It Sometimes Gets It Wrong",
      excerpt: "An accessible deep dive into how language models work, from tokenization to probability distributions. Understanding the mechanics behind AI text generation.",
      date: "Nov 2024",
      readTime: "5 min read",
      link: "https://medium.com/@anujagadde18/how-ai-predicts-words-and-why-it-sometimes-gets-it-wrong-2e603e102b29",
    },
    {
      title: "How AI Helped Cymbal Direct Decode Customer Insights",
      excerpt: "Teaching AI to truly understand customer feedback. A case study on using AI to redefine retail intelligence and decode customer insights at scale.",
      date: "Nov 2024",
      readTime: "6 min read",
      link: "https://medium.com/@anujagadde18/how-ai-helped-cymbal-direct-decode-customer-insights-and-redefine-retail-intelligence-121f5f7b9c60",
    },
    {
      title: "How I Built a Spatial Understanding App That Sees Like Us",
      excerpt: "Exploring how AI can visually understand spaces—one bounding box at a time. Building computer vision applications with practical applications.",
      date: "Nov 2024",
      readTime: "7 min read",
      link: "https://medium.com/@anujagadde18/how-i-built-a-spatial-understanding-app-that-sees-like-us-c02e30ddf4b8",
    },
    {
      title: "Beyond A/B Testing: Causal Inference in Data Science",
      excerpt: "From building a CSV-chatbot to discovering the power of causal reasoning in data science. Why correlation isn't enough for product decisions.",
      date: "Jul 2024",
      readTime: "8 min read",
      link: "https://medium.com/@anujagadde18/beyond-a-b-testing-how-a-genai-project-sparked-my-curiosity-for-causal-inference-c3131c829947",
    },
    {
      title: "Agentic AI: From Buzzword to Business Impact",
      excerpt: "AI has gone through many waves of hype. Each leap forward has promised to transform how we work. Here's what agentic AI actually means for business.",
      date: "Aug 2024",
      readTime: "6 min read",
      link: "https://medium.com/@anujagadde18/agentic-ai-from-buzzword-to-business-impact-22efdd55a6f4",
    },
    {
      title: "Machine Learning Made Simple: Types & Real-World Uses",
      excerpt: "Breaking down machine learning concepts, algorithms, and practical applications. A beginner-friendly guide to understanding ML fundamentals.",
      date: "Aug 2024",
      readTime: "9 min read",
      link: "https://medium.com/@anujagadde18/machine-learning-made-simple-types-algorithms-real-world-uses-ef8b7df6f6ab",
    },
  ];

  return (
    <section id="writing" className="py-20 md:py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4" data-testid="text-writing-heading">
            Writing & Thought Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sharing insights on AI, machine learning, product analytics, and data science on Medium
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {articles.map((article, index) => (
            <Card
              key={article.title}
              className="p-6 hover-elevate flex flex-col"
              data-testid={`card-article-${index}`}
            >
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-semibold leading-tight" data-testid={`text-article-title-${index}`}>
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span data-testid={`text-article-date-${index}`}>{article.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  data-testid={`button-read-article-${index}`}
                >
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            data-testid="button-view-all-articles"
          >
            <a href="https://medium.com/@anujagadde18" target="_blank" rel="noopener noreferrer">
              View All Articles on Medium
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
