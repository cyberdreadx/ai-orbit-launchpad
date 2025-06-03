
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Cog, PenTool, Zap, FileText, Calendar } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Smart Form Automation",
      description: "Turn form submissions into organized data",
      features: [
        "Custom intake forms with Tally",
        "Auto-sync to Google Sheets or CRM",
        "AI-powered email summaries",
        "Lead scoring and tagging"
      ]
    },
    {
      icon: Cog,
      title: "Workflow Automation",
      description: "Multi-step business process automation",
      features: [
        "Zapier automation setup (2-10 steps)",
        "Integration with 100+ apps",
        "Email sequences and follow-ups",
        "Task creation and assignment"
      ]
    },
    {
      icon: Bot,
      title: "AI-Powered Logic",
      description: "ChatGPT integration for smart decisions",
      features: [
        "AI content generation and summaries",
        "Smart data processing",
        "Personalized responses",
        "Intelligent routing and filtering"
      ]
    },
    {
      icon: Calendar,
      title: "CRM & Monitoring",
      description: "Track and optimize your automations",
      features: [
        "Client CRM setup (Notion/Airtable)",
        "Performance monitoring",
        "Monthly optimization tweaks",
        "Training and ongoing support"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 relative max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            AI Automation Services
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Streamline your business operations with intelligent automation solutions that work 24/7.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-full">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 max-w-full"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
                    <service.icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="min-w-0 flex-1">
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
                      <span className="break-words">{feature}</span>
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
