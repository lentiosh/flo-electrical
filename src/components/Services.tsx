
import { useEffect, useRef } from 'react';
import { Lightbulb, Shield, Cable, Building, Settings, Home, Zap, ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import AnimatedObserver from './AnimatedObserver';

const Services = () => {
  const animatedElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animated');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (animatedElementsRef.current) {
      observer.observe(animatedElementsRef.current);
    }

    return () => {
      if (animatedElementsRef.current) {
        observer.unobserve(animatedElementsRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Domestic Electrical",
      icon: <Home className="h-5 w-5" />,
      description: "Comprehensive range of domestic electrical services from lighting to security systems."
    },
    {
      title: "LED Lighting",
      icon: <Lightbulb className="h-5 w-5" />,
      description: "Specialists in LED lighting with 30+ years of experience and energy-efficient solutions."
    },
    {
      title: "Fuse Boards",
      icon: <Zap className="h-5 w-5" />,
      description: "Professional fuse board installations and maintenance services across London and Surrey."
    },
    {
      title: "Electrical Testing",
      icon: <Shield className="h-5 w-5" />,
      description: "Specialising in electrical inspections and testing for domestic and commercial clients."
    },
    {
      title: "Complete Rewiring",
      icon: <Cable className="h-5 w-5" />,
      description: "Full domestic, commercial and industrial rewiring services with minimal disruption."
    },
    {
      title: "Garden Electrics",
      icon: <Building className="h-5 w-5" />,
      description: "From garden lighting to outdoor security systems and hot tub installations for your outdoor spaces."
    },
    {
      title: "Entertainment Systems",
      icon: <Settings className="h-5 w-5" />,
      description: "Top-quality TV and sound system installations for the perfect home entertainment experience."
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-electric-50"></div>
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>
      
      {/* Random animated sparks */}
      <div className="absolute electric-spark opacity-40 top-1/4 right-1/4"></div>
      <div className="absolute electric-spark opacity-40 top-3/4 left-1/3 delay-1000"></div>
      <div className="absolute electric-spark opacity-40 bottom-1/4 right-1/3 delay-2000"></div>
      
      <div className="container mx-auto px-6 relative z-10" ref={animatedElementsRef}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="highlight-chip mb-4 animate-on-scroll">What We Offer</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Our Comprehensive <span className="text-electric-500">Electrical Services</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-on-scroll">
            We provide a full range of electrical services for residential and commercial clients, 
            delivering quality workmanship with our experienced team of professionals.
          </p>
          
          {/* Decorative circuit line */}
          <div className="mt-8 h-0.5 w-24 bg-electric-500 mx-auto relative animate-on-scroll">
            <div className="absolute -left-1 -top-1.5 w-3 h-3 rounded-full bg-electric-500 animate-pulse-glow"></div>
            <div className="absolute -right-1 -top-1.5 w-3 h-3 rounded-full bg-electric-500 animate-pulse-glow delay-700"></div>
          </div>
        </div>

        {/* Interactive service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedObserver key={index} delay={index * 100} className="h-full">
              <ServiceCard
                title={service.title}
                icon={service.icon}
                description={service.description}
                className="glass-card h-full group border border-gray-100 hover:border-electric-300 bg-white"
              />
            </AnimatedObserver>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center space-x-2 rounded-md border border-electric-500 bg-transparent px-6 py-3 text-base font-medium text-gray-800 hover:bg-electric-500 hover:text-gray-900 transition-colors group"
          >
            <span>Get A Free Quote</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
