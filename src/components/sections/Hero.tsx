import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import OrbitAnimation from "../ui/OrbitAnimation";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.3),transparent_50%)]" />
      
      {/* Orbit Animation */}
      <OrbitAnimation />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/90">Transform Your Business with AI</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
          AI Integration
          <br />
          <span className="text-4xl md:text-6xl">Made Simple</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Supercharge your business with custom AI solutions. From chatbots to workflow automation, 
          we make AI integration seamless and profitable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:scale-105">
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button variant="outline" size="lg" className="border-white/30 backdrop-blur-md px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 text-white bg-green-600 hover:bg-green-500">
            <Zap className="mr-2 w-5 h-5" />
            View Services
          </Button>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">7 Days</div>
            <div className="text-sm">Fast Setup</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm">AI Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-sm">Custom Solutions</div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;