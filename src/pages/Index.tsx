
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import UseCases from "../components/sections/UseCases";
import Features from "../components/sections/Features";
import AIComparisonChart from "../components/sections/AIComparisonChart";
import JumpstartPackage from "../components/sections/JumpstartPackage";
import BusinessIntelligence from "../components/sections/BusinessIntelligence";
import CaseStudy from "../components/sections/CaseStudy";
import Clients from "../components/sections/Clients";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import StickyButton from "../components/ui/StickyButton";
import Navbar from "../components/ui/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Services />
        <UseCases />
        <Features />
        <AIComparisonChart />
        <JumpstartPackage />
        <BusinessIntelligence />
        <CaseStudy />
        <Clients />
        <Contact />
        <Footer />
      </div>
      <StickyButton />
    </div>
  );
};

export default Index;
