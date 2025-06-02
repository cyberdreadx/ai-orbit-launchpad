
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import UseCases from "../components/sections/UseCases";
import Features from "../components/sections/Features";
import JumpstartPackage from "../components/sections/JumpstartPackage";
import BusinessIntelligence from "../components/sections/BusinessIntelligence";
import CaseStudy from "../components/sections/CaseStudy";
import Clients from "../components/sections/Clients";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import StickyButton from "../components/ui/StickyButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Services />
      <UseCases />
      <Features />
      <JumpstartPackage />
      <BusinessIntelligence />
      <CaseStudy />
      <Clients />
      <Contact />
      <Footer />
      <StickyButton />
    </div>
  );
};

export default Index;
