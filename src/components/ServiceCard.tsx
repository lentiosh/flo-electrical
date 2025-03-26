
import { ReactNode } from 'react';
import { Zap } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ServiceCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  className?: string;
}

const ServiceCard = ({ title, icon, description, className = '' }: ServiceCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`service-card group relative ${className}`}>
      <div className={`flex ${isMobile ? 'flex-col items-center text-center' : 'items-start'} gap-4`}>
        <div className="flex-shrink-0 rounded-full p-3 bg-electric-100 text-electric-700">
          {icon}
        </div>
        
        <div className="space-y-2">
          <h3 className={`text-xl font-semibold flex items-center ${isMobile ? 'justify-center' : ''}`}>
            {title}
            <Zap className="h-4 w-4 ml-2 text-electric-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-electric-400 via-electric-500 to-electric-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out"></div>
      
      {/* Circuit pattern overlay on hover */}
      <div className="absolute inset-0 circuit-pattern opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      {/* Sparks on hover - positioned randomly */}
      <div className="electric-spark opacity-0 group-hover:opacity-100 top-[10%] right-[20%]"></div>
      <div className="electric-spark opacity-0 group-hover:opacity-100 bottom-[15%] right-[30%] delay-100"></div>
      <div className="electric-spark opacity-0 group-hover:opacity-100 top-[30%] left-[10%] delay-200"></div>
    </div>
  );
};

export default ServiceCard;
