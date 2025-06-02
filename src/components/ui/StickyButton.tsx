
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after scrolling past hero section
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsVisible(scrollPosition > viewportHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button 
        size="lg" 
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-4 rounded-full shadow-2xl shadow-purple-500/25 transition-all duration-300 hover:scale-105"
        onClick={() => window.open('https://calendly.com/eharouge/30min', '_blank')}
      >
        Book Free Consult
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
};

export default StickyButton;
