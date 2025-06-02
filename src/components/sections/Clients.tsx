
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
    <section className="py-16 md:py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-slate-900/50" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Trusted by Forward-Thinking Companies
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-6 md:mb-8">
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
          <CarouselContent className="-ml-1 md:-ml-2 lg:-ml-4">
            {clients.map((client, index) => (
              <CarouselItem key={index} className="pl-1 md:pl-2 lg:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 p-4 md:p-6 lg:p-8">
                  <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                    <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="max-w-full max-h-full object-contain filter brightness-0 invert"
                      />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                        {client.name}
                      </h3>
                      <p className="text-white/60 text-xs md:text-sm">
                        {client.location}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-8 md:-left-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
          <CarouselNext className="hidden sm:flex -right-8 md:-right-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default Clients;
