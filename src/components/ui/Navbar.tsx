
import { Button } from "@/components/ui/button";
import { Sparkles, ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
              <Sparkles className="w-5 h-5 text-blue-300" />
            </div>
            <span className="text-xl font-bold text-white">AI Integrations Pro</span>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10" onClick={() => scrollToSection('services')}>
              Services
            </Button>
            
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10" onClick={() => navigateToPage('/workflow-examples')}>
              Workflows
            </Button>
            
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10" onClick={() => scrollToSection('packages')}>
              Pricing
            </Button>
            
            <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10" onClick={() => window.open('https://ai-integrations.gitbook.io/ai-integrations-docs', '_blank')}>
              Documentation
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full" onClick={() => window.open('https://calendly.com/eharouge/30min', '_blank')}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-md rounded-lg mt-2">
              <Button 
                variant="ghost" 
                className="w-full text-left text-white/80 hover:text-white hover:bg-white/10 justify-start" 
                onClick={() => scrollToSection('services')}
              >
                Services
              </Button>
              
              <Button 
                variant="ghost" 
                className="w-full text-left text-white/80 hover:text-white hover:bg-white/10 justify-start" 
                onClick={() => navigateToPage('/workflow-examples')}
              >
                Workflows
              </Button>
              
              <Button 
                variant="ghost" 
                className="w-full text-left text-white/80 hover:text-white hover:bg-white/10 justify-start" 
                onClick={() => scrollToSection('packages')}
              >
                Pricing
              </Button>
              
              <Button 
                variant="ghost" 
                className="w-full text-left text-white/80 hover:text-white hover:bg-white/10 justify-start" 
                onClick={() => window.open('https://ai-integrations.gitbook.io/ai-integrations-docs', '_blank')}
              >
                Documentation
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
              
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white mt-2" 
                onClick={() => {
                  window.open('https://calendly.com/eharouge/30min', '_blank');
                  setIsMobileMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
