
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Clients = () => {
  const clients = [
    {
      name: "Flow Angels Entertainment",
      location: "Miami, FL",
      logo: "/lovable-uploads/8d195632-0aba-45c1-97b8-0df3fe9409e6.png"
    },
    {
      name: "RougeChain LLC",
      location: "Miami Beach, FL", 
      logo: "/lovable-uploads/6122cbe8-3c8b-4136-8adb-1de40a2f63d3.png"
    },
    {
      name: "GLTCH Social Network",
      location: "Los Angeles, CA",
      logo: "/lovable-uploads/18027efe-48f6-482e-b7e1-ba64811bee2e.png"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-slate-900/50" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Trusted by Forward-Thinking Companies
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Join the businesses already transforming with AI
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {clients.map((client, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-32 h-32 flex items-center justify-center">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="max-w-full max-h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {client.name}
                      </h3>
                      <p className="text-white/60 text-sm">
                        {client.location}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
          <CarouselNext className="hidden md:flex -right-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default Clients;
