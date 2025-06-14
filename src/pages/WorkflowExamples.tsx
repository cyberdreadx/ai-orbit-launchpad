import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Calculator, Hotel, Scissors, ShoppingBag } from "lucide-react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/sections/Footer";

const WorkflowExamples = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState("realEstate");
  const workflows = {
    realEstate: {
      icon: Home,
      title: "🏡 Real Estate Agent",
      problem: "Manually handling inquiries, lead follow-up, and showing schedules.",
      steps: [{
        id: 1,
        text: "Lead form submission",
        type: "input"
      }, {
        id: 2,
        text: "Auto-save to Google Sheet",
        type: "process"
      }, {
        id: 3,
        text: "Email alert to agent",
        type: "notification"
      }, {
        id: 4,
        text: "Auto-respond with availability",
        type: "response"
      }, {
        id: 5,
        text: "Weekly AI follow-up emails",
        type: "automation"
      }, {
        id: 6,
        text: "Book more showings",
        type: "result"
      }],
      result: "✅ Book more showings, less admin stress"
    },
    taxOffice: {
      icon: Calculator,
      title: "🧾 Tax Office / Accountant",
      problem: "Client info scattered, onboarding slow.",
      steps: [{
        id: 1,
        text: "Client intake form",
        type: "input"
      }, {
        id: 2,
        text: "Auto-create CRM entry",
        type: "process"
      }, {
        id: 3,
        text: "GPT generates client summary",
        type: "ai"
      }, {
        id: 4,
        text: "Auto-reminders for documents",
        type: "automation"
      }, {
        id: 5,
        text: "Monthly email reports",
        type: "reporting"
      }, {
        id: 6,
        text: "Smoother onboarding",
        type: "result"
      }],
      result: "✅ Smoother onboarding and document collection"
    },
    hotel: {
      icon: Hotel,
      title: "🏨 Boutique Hotel / Airbnb Host",
      problem: "Too many questions about availability, check-in, and local tips.",
      steps: [{
        id: 1,
        text: "Guest inquiry",
        type: "input"
      }, {
        id: 2,
        text: "AI chatbot responds 24/7",
        type: "ai"
      }, {
        id: 3,
        text: "Post-booking auto-message",
        type: "automation"
      }, {
        id: 4,
        text: "Local recommendations sent",
        type: "content"
      }, {
        id: 5,
        text: "Staff alert for custom requests",
        type: "notification"
      }, {
        id: 6,
        text: "Better guest experience",
        type: "result"
      }],
      result: "✅ Better guest experience, fewer calls"
    },
    lawnCare: {
      icon: Scissors,
      title: "🌱 Lawn Care / Mobile Services",
      problem: "Missed calls and quote requests during work hours.",
      steps: [{
        id: 1,
        text: "Online booking form",
        type: "input"
      }, {
        id: 2,
        text: "ZIP code validation",
        type: "process"
      }, {
        id: 3,
        text: "GPT calculates price estimate",
        type: "ai"
      }, {
        id: 4,
        text: "Auto-send quote email",
        type: "response"
      }, {
        id: 5,
        text: "Update Google Calendar",
        type: "automation"
      }, {
        id: 6,
        text: "More jobs, less phone time",
        type: "result"
      }],
      result: "✅ More jobs, less time on the phone"
    },
    ecommerce: {
      icon: ShoppingBag,
      title: "🛍️ E-commerce Brand / Boutique",
      problem: "DMs, email replies, and customer support taking too much time.",
      steps: [{
        id: 1,
        text: "Customer inquiry",
        type: "input"
      }, {
        id: 2,
        text: "Chatbot handles FAQs",
        type: "ai"
      }, {
        id: 3,
        text: "AI drafts email responses",
        type: "automation"
      }, {
        id: 4,
        text: "Orders logged to spreadsheet",
        type: "process"
      }, {
        id: 5,
        text: "Auto-follow up sequences",
        type: "automation"
      }, {
        id: 6,
        text: "Cut response time",
        type: "result"
      }],
      result: "✅ Cut response time, boost retention"
    }
  };

  const getStepColor = (type: string) => {
    switch (type) {
      case "input":
        return "bg-blue-500/20 border-blue-500/30 text-blue-300";
      case "process":
        return "bg-purple-500/20 border-purple-500/30 text-purple-300";
      case "ai":
        return "bg-green-500/20 border-green-500/30 text-green-300";
      case "automation":
        return "bg-orange-500/20 border-orange-500/30 text-orange-300";
      case "notification":
        return "bg-yellow-500/20 border-yellow-500/30 text-yellow-300";
      case "response":
        return "bg-cyan-500/20 border-cyan-500/30 text-cyan-300";
      case "content":
        return "bg-pink-500/20 border-pink-500/30 text-pink-300";
      case "reporting":
        return "bg-indigo-500/20 border-indigo-500/30 text-indigo-300";
      case "result":
        return "bg-emerald-500/20 border-emerald-500/30 text-emerald-300";
      default:
        return "bg-gray-500/20 border-gray-500/30 text-gray-300";
    }
  };

  const currentWorkflow = workflows[selectedWorkflow as keyof typeof workflows];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <div className="pt-20 pb-8 px-4 sm:pt-24 sm:pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Workflow Examples
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto px-2">
              See how AI automation transforms different businesses with real workflow examples
            </p>
          </div>

          {/* Workflow Selector */}
          <Tabs value={selectedWorkflow} onValueChange={setSelectedWorkflow} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-white/5 backdrop-blur-lg border border-white/10 mb-6 sm:mb-8 h-auto p-2">
              {Object.entries(workflows).map(([key, workflow]) => (
                <TabsTrigger 
                  key={key} 
                  value={key} 
                  className="data-[state=active]:bg-white/10 data-[state=active]:text-white text-white/70 text-xs md:text-sm p-2 h-auto flex flex-col sm:flex-row items-center gap-1"
                >
                  <workflow.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{workflow.title.split(' ')[1]}</span>
                  <span className="sm:hidden text-center leading-tight">{workflow.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Workflow Display */}
            {Object.entries(workflows).map(([key, workflow]) => (
              <TabsContent key={key} value={key} className="mt-6 sm:mt-8">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                  {/* Problem & Solution Overview */}
                  <Card className="bg-white/5 backdrop-blur-lg border-white/10 order-2 lg:order-1">
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-2xl text-white">
                        <workflow.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300 flex-shrink-0" />
                        <span className="text-sm sm:text-2xl">{workflow.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 sm:space-y-6 p-4 pt-0 sm:p-6 sm:pt-0">
                      <div>
                        <h4 className="text-red-300 font-semibold mb-2 text-sm sm:text-base">Problem:</h4>
                        <p className="text-white/80 text-sm sm:text-base">{workflow.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-green-300 font-semibold mb-2 text-sm sm:text-base">Result:</h4>
                        <p className="text-green-300 font-medium text-sm sm:text-base">{workflow.result}</p>
                      </div>
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base" 
                        onClick={() => window.open('https://calendly.com/eharouge/30min', '_blank')}
                      >
                        Get This Workflow For Your Business
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Workflow Steps */}
                  <Card className="bg-white/5 backdrop-blur-lg border-white/10 order-1 lg:order-2">
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-lg sm:text-xl text-white">Automation Flow</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
                      <div className="space-y-3 sm:space-y-4">
                        {workflow.steps.map((step, index) => (
                          <div key={step.id} className="flex items-center gap-2 sm:gap-4">
                            <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm font-bold ${getStepColor(step.type)}`}>
                              {step.id}
                            </div>
                            <div className={`flex-1 p-2 sm:p-3 rounded-lg border ${getStepColor(step.type)}`}>
                              <p className="text-xs sm:text-sm font-medium">{step.text}</p>
                            </div>
                            {index < workflow.steps.length - 1 && (
                              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/40 flex-shrink-0 hidden sm:block" />
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border-blue-500/30 max-w-2xl mx-auto">
              <CardContent className="p-6 sm:p-8 bg-blue-950">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Ready to Automate Your Business?
                </h3>
                <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                  Get a custom workflow designed for your specific business needs. 
                  Free consultation to identify your automation opportunities.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto text-sm sm:text-base" 
                  onClick={() => window.open('https://calendly.com/eharouge/30min', '_blank')}
                >
                  Schedule Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkflowExamples;
