import { Button } from "@/components/ui/button";
import { Sparkles, ExternalLink } from "lucide-react";
const Navbar = () => {
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
              <Sparkles className="w-5 h-5 text-blue-300" />
            </div>
            <span className="text-xl font-bold text-white">AI Integrations Pro</span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10" onClick={() => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
              servicesSection.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }}>
              Services
            </Button>
            
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10" onClick={() => window.open('https://ai-integrations.gitbook.io/ai-integrations-docs', '_blank')}>
              Documentation
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full" onClick={() => window.open('https://calendly.com/eharouge/30min', '_blank')}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;