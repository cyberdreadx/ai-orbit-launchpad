
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, TrendingUp, FileText } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Clock,
      business: "Local Gym",
      result: "3x faster response time with chatbot",
      description: "AI chatbot answers membership questions, class schedules, and booking instantly - even at midnight."
    },
    {
      icon: TrendingUp,
      business: "eComm Brand",
      result: "20 blog posts auto-generated monthly",
      description: "Consistent SEO content creation with brand voice, driving 40% more organic traffic."
    },
    {
      icon: FileText,
      business: "Law Firm",
      result: "AI summarizes 40-page contracts in seconds",
      description: "Complex legal documents distilled into key points, saving 10+ hours per case review."
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            💡 See It in Action
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Real businesses, real results. See how AI transforms operations across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center"
            >
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm w-fit mb-4">
                  <useCase.icon className="w-8 h-8 text-green-300" />
                </div>
                <CardTitle className="text-lg text-white">{useCase.business}</CardTitle>
                <div className="text-2xl font-bold text-green-400 mt-2">{useCase.result}</div>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-sm">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
