
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Features from "../components/sections/Features";
import BusinessIntelligence from "../components/sections/BusinessIntelligence";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Services />
      <Features />
      <BusinessIntelligence />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
