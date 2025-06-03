import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, Cog, PenTool, Calendar, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Services99 = () => {
  const services = [{
    title: "AI Chatbot Setup",
    description: "24/7 automated customer support for Instagram or website",
    icon: Bot,
    link: "/services/chatbot",
    color: "from-blue-600 to-cyan-600"
  }, {
    title: "Workflow Automation",
    description: "Automate emails, scheduling, or lead management",
    icon: Cog,
    link: "/services/workflow",
    color: "from-purple-600 to-blue-600"
  }, {
    title: "AI Content Generator",
    description: "7 social media posts with hashtags and optimization",
    icon: PenTool,
    link: "/services/content",
    color: "from-green-600 to-blue-600"
  }, {
    title: "Booking Form Setup",
    description: "Professional booking system with auto-responders",
    icon: Calendar,
    link: "/services/booking",
    color: "from-blue-600 to-purple-600"
  }, {
    title: "Custom GPT Prompts",
    description: "10 optimized AI prompts tailored to your business",
    icon: Lightbulb,
    link: "/services/prompts",
    color: "from-yellow-600 to-orange-600"
  }];

  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Link to="/" className="inline-flex items-center text-white/70 hover:text-white mb-6">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            $99 AI Services
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Individual AI solutions to solve specific business challenges
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md border border-green-500/30 mb-8">
            <span className="text-sm text-white/90">Need everything? Get the full Jumpstart Package for $699</span>
            <Link to="/#jumpstart">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-1">
                Learn More →
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => <Card key={index} className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className={`p-4 rounded-full bg-gradient-to-r ${service.color} w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
                <p className="text-white/70 text-sm">{service.description}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white mb-4">$99</div>
                <Link to={service.link}>
                  <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white rounded-full`}>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>)}
        </div>

        <Card className="bg-white/5 backdrop-blur-lg border-white/10 max-w-2xl mx-auto">
          <CardContent className="text-center p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Want It All?</h3>
            <p className="text-white/70 mb-6">
              Get all services plus additional features in our comprehensive AI Business Pro Package
            </p>
            <Link to="/#packages">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                View AI Business Pro ($699)
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>;
};

export default Services99;
