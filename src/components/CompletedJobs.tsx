
import { Check, Clock, Zap, Calendar } from 'lucide-react';
import AnimatedObserver from '@/components/AnimatedObserver';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

interface CompletedJob {
  id: number;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  category: 'domestic' | 'commercial' | 'emergency';
  completionTime: string;
  date: string;
}

const completedJobs: CompletedJob[] = [
  {
    id: 1,
    title: "Full House Rewiring",
    description: "Complete rewiring of a 4-bedroom Victorian property including new consumer unit installation.",
    location: "Kensington, London",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    category: "domestic",
    completionTime: "5 days",
    date: "March 2023"
  },
  {
    id: 2,
    title: "Office Lighting Upgrade",
    description: "Replaced all fluorescent lighting with energy-efficient LED panels in a three-floor office building.",
    location: "Canary Wharf, London",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    category: "commercial",
    completionTime: "3 days",
    date: "April 2023"
  },
  {
    id: 3,
    title: "Emergency Power Outage",
    description: "Rapid response to power failure in a residential block, diagnosed and repaired within hours.",
    location: "Chelsea, London",
    imageUrl: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
    category: "emergency",
    completionTime: "4 hours",
    date: "May 2023"
  },
  {
    id: 4,
    title: "Garden Lighting Installation",
    description: "Installed pathway lighting, accent lights for trees, and security flood lights with motion sensors.",
    location: "Richmond, London",
    imageUrl: "https://images.unsplash.com/photo-1558370781-d6196949e317?q=80&w=2069&auto=format&fit=crop",
    category: "domestic",
    completionTime: "2 days",
    date: "June 2023"
  },
];

const categoryColors = {
  domestic: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    icon: <Check className="h-3 w-3" />
  },
  commercial: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    icon: <Check className="h-3 w-3" />
  },
  emergency: {
    bg: 'bg-red-100',
    text: 'text-red-600',
    icon: <Zap className="h-3 w-3" />
  }
};

const CompletedJobs = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="completed-jobs" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <AnimatedObserver>
          <div className="text-center mb-12">
            <span className="highlight-chip mb-4">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recently Completed Jobs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through some of our recently completed electrical projects across London.
            </p>
          </div>
        </AnimatedObserver>

        <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'} mt-12`}>
          {completedJobs.map((job) => (
            <AnimatedObserver key={job.id} delay={job.id * 100}>
              <Card className="group h-full overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500 rounded-xl">
                <div className="relative h-48 overflow-hidden">
                  {/* New badge for mobile view */}
                  {isMobile && (
                    <div className="absolute top-3 left-3 z-10 bg-[#fd0] text-black px-3 py-1 rounded-full text-xs font-medium">
                      {job.category.charAt(0).toUpperCase() + job.category.slice(1)}
                    </div>
                  )}
                  
                  <img 
                    src={job.imageUrl} 
                    alt={job.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                  
                  {/* Category badge - desktop */}
                  {!isMobile && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <div className={`rounded-full p-1 ${categoryColors[job.category].bg} ${categoryColors[job.category].text}`}>
                        {categoryColors[job.category].icon}
                      </div>
                      <span className="capitalize">{job.category}</span>
                    </div>
                  )}
                  
                  {/* Completion time - positioned at bottom */}
                  <div className="absolute bottom-3 right-3 bg-[#fd0] text-black px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {job.completionTime}
                  </div>
                  
                  {/* Date - left side */}
                  <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {job.date}
                  </div>
                </div>
                
                <CardContent className="p-5">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-600 transition-colors">{job.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {job.location}
                  </div>
                </CardContent>
                
                {/* Yellow power line accent */}
                <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-amber-300 via-[#fd0] to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out"></div>
                
                {/* Electrical circuit pattern overlay on hover */}
                <div className="absolute inset-0 circuit-pattern opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              </Card>
            </AnimatedObserver>
          ))}
        </div>
        
        {/* View more button */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-[#fd0] hover:text-black hover:border-[#fd0] transition-all duration-300 shadow-sm hover:shadow">
            View More Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompletedJobs;
