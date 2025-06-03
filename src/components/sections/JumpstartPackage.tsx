
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Zap, Star, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const JumpstartPackage = () => {
  const packages = [
    {
      name: "AI Automation Lite",
      price: "$199",
      icon: Zap,
      gradient: "from-blue-600 to-cyan-600",
      description: "Perfect for solo creators getting started",
      features: [
        "1 basic automation (form to Google Sheet or email)",
        "Basic intake form (Tally)",
        "No ChatGPT logic",
        "Runs on free-tier Zapier",
        "1 revision included"
      ],
      ideal: "Good for solo creators, basic use cases"
    },
    {
      name: "AI Business Starter",
      price: "$399",
      icon: Star,
      gradient: "from-purple-600 to-blue-600",
      description: "Most popular for coaches & freelancers",
      features: [
        "Intake form → spreadsheet + email summary",
        "AI summary using GPT",
        "Spreadsheet CRM tracking",
        "Zapier setup (up to 2 steps)",
        "Email automation setup",
        "1 onboarding call"
      ],
      ideal: "Ideal for coaches, freelancers, service pros",
      popular: true
    },
    {
      name: "AI Business Pro",
      price: "$699",
      icon: Crown,
      gradient: "from-purple-600 to-pink-600",
      description: "Complete AI business automation",
      features: [
        "All from Starter +",
        "AI workflows with ChatGPT",
        "Multi-step Zapier automation",
        "Client CRM (Notion, Sheet, or Airtable)",
        "1 month monitoring + tweaks",
        "Help with setting up Zapier, Tally, etc.",
        "Content automation add-on (optional)"
      ],
      ideal: "Great for agencies, consultants, or digital businesses"
    }
  ];

  return (
    <section id="packages" className="py-20 px-4 relative max-w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-purple-900/10" />
      
      <div className="max-w-7xl mx-auto relative w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-purple-500/30 mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/90">AI Automation Packages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">⚙️</span>{" "}
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Choose Your AI Automation Level
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-8">
            From basic automation to complete AI business workflows
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-full">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 relative max-w-full ${pkg.popular ? 'ring-2 ring-purple-500/50' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`p-4 rounded-full bg-gradient-to-r ${pkg.gradient} w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <pkg.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white mb-2">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold text-white mb-2">{pkg.price}</div>
                <p className="text-white/70 text-sm">{pkg.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/90 text-sm">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="break-words">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-white/80 text-sm mb-4">
                    <span className="text-white">✅</span> {pkg.ideal}
                  </p>
                  
                  <Button 
                    size="lg" 
                    className={`w-full bg-gradient-to-r ${pkg.gradient} hover:opacity-90 text-white py-4 text-base rounded-full shadow-xl transition-all duration-300 hover:scale-105`}
                    onClick={() => window.open('https://calendly.com/eharouge/30min', '_blank')}
                  >
                    Get Started - {pkg.price}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/60 text-sm mb-4">Need something smaller?</p>
          <Link to="/services">
            <Button variant="outline" className="text-white border-white/20 bg-emerald-600 hover:bg-emerald-500">
              View $99 Individual Services →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JumpstartPackage;
