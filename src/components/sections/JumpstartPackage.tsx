import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const JumpstartPackage = () => {
  const features = ["AI chatbot set up for your website or Instagram", "Workflow automation (emails, scheduling, reports)", "Weekly AI content system (blogs, captions, or product copy)", "1-on-1 onboarding call + setup walkthrough"];
  
  return (
    <section id="jumpstart" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-purple-900/10" />
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-purple-500/30 mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/90">Signature Service</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            ⚙️ AI Business Jumpstart Package
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Everything you need to start using AI in 7 days.
          </p>
        </div>

        <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 max-w-2xl mx-auto">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl text-white mb-4">✅ What's Included:</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-white/90">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-6 text-center">
              <p className="text-white/80 mb-4">Delivered in 7 days. No tech skills required.</p>
              
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">💸 $499</div>
                  <div className="text-sm text-white/60">Flat Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">📅 7 Days</div>
                  <div className="text-sm text-white/60">Timeline</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">⚡ Free</div>
                  <div className="text-sm text-white/60">AI Cheat Sheet</div>
                </div>
              </div>

              <div className="space-y-3">
                <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-lg rounded-full shadow-2xl shadow-purple-500/25 transition-all duration-300 hover:scale-105" onClick={() => window.open('https://calendly.com/eharouge/30min', '_blank')}>
                  🔘 Book Your Jumpstart Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <div className="text-center">
                  <p className="text-white/60 text-sm mb-2">Or grab individual services for just $99 each</p>
                  <Link to="/services">
                    <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 text-sm">
                      View $99 Services →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default JumpstartPackage;
