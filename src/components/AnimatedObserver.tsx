
import { useEffect, useRef } from 'react';

interface AnimatedObserverProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  className?: string;
}

const AnimatedObserver = ({ 
  children, 
  threshold = 0.1, 
  delay = 0,
  className = ''
}: AnimatedObserverProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animated');
            }, delay);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, delay]);

  return (
    <div ref={elementRef} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedObserver;
