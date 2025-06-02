
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Let's discuss how AI can revolutionize your operations. Get started with a free consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Get Started Today</CardTitle>
              <CardDescription className="text-white/70">
                Fill out the form and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white/90">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your full name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/90">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-white/90">Company</Label>
                <Input 
                  id="company" 
                  placeholder="Your company name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                    <MessageSquare className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Quick Response</h3>
                    <p className="text-white/70">Get answers to your questions fast</p>
                  </div>
                </div>
                <p className="text-white/80">
                  Our team typically responds within 2-4 hours during business hours.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20">
                    <Phone className="w-5 h-5 text-green-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Free Consultation</h3>
                    <p className="text-white/70">30-minute strategy session</p>
                  </div>
                </div>
                <p className="text-white/80">
                  Discover how AI can specifically benefit your business model and goals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                    <Mail className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Custom Solutions</h3>
                    <p className="text-white/70">Tailored to your industry</p>
                  </div>
                </div>
                <p className="text-white/80">
                  Every AI integration is designed specifically for your business needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
