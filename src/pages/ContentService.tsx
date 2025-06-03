import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, PenTool, Hash } from "lucide-react";
import { Link } from "react-router-dom";
const ContentService = () => {
  const features = ["7 AI-generated captions or posts", "Custom hashtag research", "Brand tone matching", "Platform optimization (Instagram/LinkedIn/etc)", "Content calendar template"];
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center text-white/70 hover:text-white mb-6">
            ← Back to Home
          </Link>
          <div className="flex items-center justify-center gap-3 mb-6">
            <PenTool className="w-8 h-8 text-green-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              AI Content Generator
            </h1>
          </div>
          <p className="text-xl text-white/70 mb-8">
            Get a week's worth of engaging social media content
          </p>
        </div>

        <Card className="bg-white/5 backdrop-blur-lg border-white/10 mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white mb-4">What You Get:</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="space-y-4">
              {features.map((feature, index) => <li key={index} className="flex items-start gap-3 text-white/90">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>)}
            </ul>

            <div className="border-t border-white/10 pt-6">
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">$99</div>
                  <div className="text-sm text-white/60">One-time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">2 Days</div>
                  <div className="text-sm text-white/60">Delivery</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">7</div>
                  <div className="text-sm text-white/60">Posts</div>
                </div>
              </div>

              <Button size="lg" className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-6 text-lg rounded-full shadow-2xl shadow-green-500/25 transition-all duration-300 hover:scale-105 mb-4" onClick={() => window.open('https://calendly.com/eharouge/30min', '_blank')}>
                Get Your Content Pack - $99
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <div className="text-center">
                <p className="text-white/70 mb-4">Want the full package?</p>
                <Link to="/#jumpstart">
                  <Button variant="outline" className="border-white/20 bg-emerald-600 hover:bg-emerald-500 text-white">Upgrade to Full Jumpstart Package ($699)</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default ContentService;