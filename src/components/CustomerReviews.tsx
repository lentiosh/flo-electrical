
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedObserver from '@/components/AnimatedObserver';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Slider } from "@/components/ui/slider";

interface Review {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
  jobType: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Kensington",
    comment: "Flo Electrical did an amazing job with our home rewiring. Professional, tidy, and completed the work ahead of schedule!",
    rating: 5,
    jobType: "Full House Rewiring"
  },
  {
    id: 2,
    name: "James Wilson",
    location: "Chelsea",
    comment: "Had my fuse board replaced and some new lighting installed. The work was excellent and reasonably priced. Would definitely recommend!",
    rating: 5,
    jobType: "Fuse Board Replacement"
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "Fulham",
    comment: "Fantastic service from start to finish. They installed outdoor lighting in our garden and it looks stunning. Very reliable team.",
    rating: 5,
    jobType: "Garden Lighting"
  },
  {
    id: 4,
    name: "Michael Clark",
    location: "Westminster",
    comment: "Had some electrical testing done for our commercial property. Very thorough and professional service. Will use again.",
    rating: 4,
    jobType: "Electrical Testing"
  },
  {
    id: 5,
    name: "Olivia Roberts",
    location: "Camden",
    comment: "Excellent work installing our home entertainment system. Everything works perfectly and they were very neat with the wiring.",
    rating: 5,
    jobType: "Entertainment System"
  }
];

const CustomerReviews = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<any>(null);

  // Generate stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-[#fd0] fill-[#fd0]' : 'text-gray-300'}`} 
      />
    ));
  };

  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };
    
    api.on('select', onSelect);
    
    return () => {
      api?.off('select', onSelect);
    };
  }, [api]);

  const handleSliderChange = (value: number[]) => {
    const index = value[0];
    if (api) api.scrollTo(index);
    setActiveIndex(index);
  };

  return (
    <section id="reviews" className="py-16 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-[#fd0]/10 via-[#fd0]/5 to-transparent"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#fd0]/10 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <AnimatedObserver>
          <div className="text-center mb-12">
            <span className="highlight-chip mb-4">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - see what our satisfied customers have to say about our electrical services.
            </p>
          </div>
        </AnimatedObserver>

        <div className="mt-12 relative">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3 px-2">
                  <div className="h-full">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md h-full flex flex-col relative group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      {/* Electric accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[#fd0] rounded-t-2xl"></div>
                      
                      {/* Quote icon */}
                      <div className="absolute -top-4 -left-2 bg-[#fd0] rounded-full p-2 shadow-md">
                        <Quote className="h-4 w-4 text-black" />
                      </div>
                      
                      <div className="mb-4 flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                      
                      <p className="text-gray-700 mb-4 flex-grow">"{review.comment}"</p>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="font-semibold">{review.name}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <span>{review.location}</span>
                          <span className="text-amber-600 text-xs font-medium bg-amber-50 px-2 py-1 rounded-full">{review.jobType}</span>
                        </div>
                      </div>
                      
                      {/* Electric circuit pattern on hover */}
                      <div className="absolute inset-0 circuit-pattern opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
                      
                      {/* Spark animations */}
                      <div className="absolute top-[10%] right-[10%] w-2 h-2 bg-[#fd0] rounded-full opacity-0 group-hover:opacity-60 blur-[2px] transition-all duration-300"></div>
                      <div className="absolute bottom-[40%] left-[5%] w-1 h-1 bg-[#fd0] rounded-full opacity-0 group-hover:opacity-40 blur-[1px] transition-all duration-500 delay-100"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {!isMobile && (
              <>
                <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-200" />
                <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-200" />
              </>
            )}
          </Carousel>
          
          {/* Custom pagination and control */}
          <div className="mt-8 max-w-md mx-auto px-6">
            <Slider
              value={[activeIndex]}
              max={reviews.length - 1}
              step={1}
              onValueChange={handleSliderChange}
              className="py-2"
            />
            
            <div className="flex justify-between items-center mt-4">
              <button 
                onClick={() => api?.scrollPrev()} 
                className="text-sm flex items-center gap-1 text-gray-600 hover:text-black transition-colors"
                disabled={activeIndex === 0}
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </button>
              
              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index ? 'bg-[#fd0] w-4' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => api?.scrollTo(index)}
                  />
                ))}
              </div>
              
              <button 
                onClick={() => api?.scrollNext()} 
                className="text-sm flex items-center gap-1 text-gray-600 hover:text-black transition-colors"
                disabled={activeIndex === reviews.length - 1}
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
