
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, FileText, BarChart } from "lucide-react";

const BusinessIntelligence = () => {
  const tools = [
    {
      icon: BarChart,
      title: "NLP Analytics Dashboard",
      description: "Advanced analysis of customer interactions",
      details: "Analyze customer reviews and chats with natural language processing to uncover insights and sentiment trends."
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      description: "Smart summarization and analysis",
      details: "Automatically summarize long documents, contracts, and notes to extract key information and actionable insights."
    },
    {
      icon: Brain,
      title: "Custom GPT Tools",
      description: "AI trained on your company data",
      details: "Simple internal GPT tools specifically trained on your company's knowledge base for accurate, contextual responses."
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            🧠 Business Intelligence & Tools
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Unlock the power of your data with AI-driven business intelligence solutions that provide actionable insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm w-fit mb-4 group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <tool.icon className="w-6 h-6 text-green-300" />
                </div>
                <CardTitle className="text-xl text-white">{tool.title}</CardTitle>
                <CardDescription className="text-white/70">{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 leading-relaxed">{tool.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessIntelligence;
