
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const CaseStudy = () => {
  const results = [
    "Saved 6+ hours/week",
    "Grew Instagram by 200+ followers in 3 weeks", 
    "Zero stress—everything just works"
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            🧪 Case Study – Local Fitness Studio
          </h2>
        </div>

        <Card className="bg-white/5 backdrop-blur-lg border-white/10">
          <CardHeader>
            <div className="text-center mb-6">
              <blockquote className="text-2xl md:text-3xl font-light text-white/90 italic mb-4">
                "We were drowning in DMs and falling behind on content."
              </blockquote>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">In just 1 week, our client had:</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-4 text-center">
                    <div className="text-sm text-white/80">An AI chatbot answering member FAQs 24/7</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-4 text-center">
                    <div className="text-sm text-white/80">Weekly Instagram captions generated automatically</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-4 text-center">
                    <div className="text-sm text-white/80">A Zapier workflow sending auto-reminders for missed sessions</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Results:</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {results.map((result, index) => (
                  <div key={index} className="flex items-center gap-3 text-white/90">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center px-4">
              <blockquote className="text-xl md:text-2xl font-light text-green-300 italic mb-6">
                "It felt like hiring 2 extra employees for a fraction of the cost."
              </blockquote>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 sm:px-6 md:px-8 py-3 md:py-6 text-sm sm:text-base md:text-lg rounded-full shadow-2xl shadow-green-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-full"
                onClick={() => window.open('https://calendly.com/eharouge/30min', '_blank')}
              >
                <span className="truncate">Get Similar Results for Your Business</span>
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CaseStudy;
