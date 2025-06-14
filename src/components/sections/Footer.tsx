
import { Sparkles, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
              <Sparkles className="w-5 h-5 text-blue-300" />
            </div>
            <span className="text-xl font-bold text-white">AI Integration Pro</span>
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-4 mb-2">
              <span className="text-white/60">Follow us on Instagram</span>
              <a 
                href="https://instagram.com/ai.integrations.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @ai.integrations.app
              </a>
            </div>
            <p className="text-white/60 mb-2">
              Transform your business with AI • Fast Setup • Secure Solutions
            </p>
            <p className="text-white/40 text-sm">
              © 2024 AI Integration Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
