
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-electric-50 to-electric-100/50 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <div className="highlight-chip animate-fade-in">
              Expert Electrical Services in London
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Professional & Reliable{' '}
              <span className="text-electric-600">Electrical Services</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              With over 10 years of experience, we provide top-quality electrical solutions for domestic and commercial clients across London and Surrey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="inline-flex items-center justify-center space-x-2 rounded-md bg-electric-600 px-6 py-3 text-base font-medium text-white shadow-md hover:bg-electric-700 transition-colors"
              >
                <span>Our Services</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              
              <a 
                href="tel:+447956 382 388" 
                className="inline-flex items-center justify-center space-x-2 rounded-md border border-electric-600 bg-transparent px-6 py-3 text-base font-medium text-electric-600 hover:bg-electric-50 transition-colors"
              >
                <span>Call Us Now</span>
              </a>
            </div>
            
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "NICEIC Registered",
                "10+ Years Experience",
                "Affordable & Reliable"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-electric-600 flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-electric-200 rounded-full z-0 animate-pulse opacity-70"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-electric-300 rounded-full z-0 animate-pulse opacity-60"></div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl relative z-10 animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1618553458872-b95382e76b74?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Professional Electrician" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
