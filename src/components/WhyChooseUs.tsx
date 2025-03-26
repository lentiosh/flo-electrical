
import { CheckCircle, Shield, Clock, Lightbulb, Zap } from 'lucide-react';
import AnimatedObserver from './AnimatedObserver';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <CheckCircle className="h-10 w-10 text-electric-500" />,
      title: "Over 10 Years Experience",
      description: "Benefit from our extensive knowledge and expertise in all electrical installations and repairs."
    },
    {
      icon: <Shield className="h-10 w-10 text-electric-500" />,
      title: "NICEIC Registered",
      description: "All our work is guaranteed to comply with British Standards and Building Regulations."
    },
    {
      icon: <Clock className="h-10 w-10 text-electric-500" />,
      title: "Affordable & Reliable",
      description: "Competitive pricing with no compromise on quality and reliability on every project."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Dynamic circuit background */}
      <div className="absolute inset-0 circuit-pattern"></div>
      
      {/* Animated sparks */}
      <div className="absolute electric-spark top-[10%] right-[20%] opacity-100"></div>
      <div className="absolute electric-spark bottom-[30%] left-[20%] opacity-100 delay-700"></div>
      <div className="absolute electric-spark top-[40%] right-[40%] opacity-100 delay-1500"></div>
      <div className="absolute electric-spark bottom-[10%] right-[10%] opacity-100 delay-2300"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedObserver className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Zap className="h-16 w-16 text-electric-500" />
              <div className="absolute inset-0 bg-electric-500 rounded-full animate-pulse-glow opacity-30"></div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Why Choose <span className="text-electric-500">FRANSSON ELECTRICS</span>
          </h2>
          <p className="text-lg text-gray-300">
            We prioritize safety, quality, and customer satisfaction with every electrical project we undertake.
          </p>
        </AnimatedObserver>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedObserver 
              key={index} 
              delay={index * 150}
              className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-lg transform hover:translate-y-[-5px] hover:border-electric-500 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4 relative">
                <div className="rounded-full bg-gray-900/70 p-4 relative">
                  {reason.icon}
                  <div className="absolute inset-0 bg-electric-500/20 rounded-full animate-pulse-glow"></div>
                </div>
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
                
                {/* Corner sparks */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-electric-500 animate-pulse-glow rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-electric-500 animate-pulse-glow rounded-full delay-300"></div>
              </div>
            </AnimatedObserver>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
