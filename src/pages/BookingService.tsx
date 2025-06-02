
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Calendar, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const BookingService = () => {
  const features = [
    "Custom booking form setup",
    "Auto-responder email sequences",
    "Calendar integration",
    "Lead capture optimization",
    "Mobile-responsive design"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center text-white/70 hover:text-white mb-6">
            ← Back to Home
          </Link>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Booking Form Setup
            </h1>
          </div>
          <p className="text-xl text-white/70 mb-8">
            Professional booking system with automated follow-ups
          </p>
        </div>

        <Card className="bg-white/5 backdrop-blur-lg border-white/10 mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white mb-4">What You Get:</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-white/90">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-6">
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">$99</div>
                  <div className="text-sm text-white/60">One-time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">2 Days</div>
                  <div className="text-sm text-white/60">Delivery</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">∞</div>
                  <div className="text-sm text-white/60">Bookings</div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg rounded-full shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 mb-4"
                onClick={() => window.open('https://calendly.com/eharouge/30min', '_blank')}
              >
                Get Your Booking System - $99
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <div className="text-center">
                <p className="text-white/70 mb-4">Want the full package?</p>
                <Link to="/#jumpstart">
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                    Upgrade to Full Jumpstart Package ($499)
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingService;
