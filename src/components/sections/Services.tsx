
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Cog, PenTool, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Smart Customer Support",
      description: "24/7 AI chatbots and automated response systems",
      features: [
        "Custom AI chatbot to answer FAQs 24/7",
        "GPT-powered email & DM responder",
        "Lead filtering & smart tagging system"
      ]
    },
    {
      icon: Cog,
      title: "Workflow Automation",
      description: "Streamline operations with intelligent automation",
      features: [
        "AI task assistants for scheduling, follow-ups, and reports",
        "Integration with Zapier / Make / Notion / Google Workspace",
        "Auto-generation of invoices, forms, and reports"
      ]
    },
    {
      icon: PenTool,
      title: "AI Content Engine",
      description: "Generate compelling content that converts",
      features: [
        "Weekly content generation (blogs, captions, emails)",
        "Personalized copywriting using brand tone",
        "Product descriptions + SEO boost"
      ]
    },
    {
      icon: Zap,
      title: "Fast Setup",
      description: "No-code solutions delivered quickly",
      features: [
        "Delivered in under 7 days",
        "No-code and low-code friendly",
        "Works with your current stack (Meta, Google, Shopify, etc.)"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            AI Integration Services
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Transform your business operations with our comprehensive AI solutions designed for modern enterprises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
                    <service.icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    <CardDescription className="text-white/70">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
