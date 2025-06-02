
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Puzzle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Data Security Focused",
      items: [
        "Encrypted AI workflows for privacy-first operations",
        "On-device/local GPT options (on request)",
        "AI use training for your team"
      ]
    },
    {
      icon: Clock,
      title: "Fast Implementation",
      items: [
        "⚡ Delivered in under 7 days",
        "No coding required from your end",
        "Seamless integration process"
      ]
    },
    {
      icon: Puzzle,
      title: "Universal Compatibility",
      items: [
        "Works with Meta, Google, Shopify",
        "No-code and low-code friendly",
        "Integrates with your current tech stack"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Why Choose Our AI Solutions?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We prioritize security, speed, and seamless integration to deliver AI solutions that work with your existing workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center"
            >
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm w-fit mb-4">
                  <feature.icon className="w-8 h-8 text-blue-300" />
                </div>
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
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

export default Features;
