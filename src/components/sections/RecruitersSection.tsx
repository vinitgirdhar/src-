import { useEffect, useRef, useState } from 'react';

const RecruitersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const recruiters = [
    { name: 'TCS', logo: 'TCS' },
    { name: 'Capgemini', logo: 'Capgemini' },
    { name: 'Mu Sigma', logo: 'Mu Sigma' },
    { name: 'Infosys', logo: 'Infosys' },
    { name: 'Wipro', logo: 'Wipro' },
    { name: 'Accenture', logo: 'Accenture' },
    { name: 'Cognizant', logo: 'Cognizant' },
    { name: 'L&T', logo: 'L&T' },
    { name: 'Deloitte', logo: 'Deloitte' },
    { name: 'KPMG', logo: 'KPMG' },
    { name: 'IBM', logo: 'IBM' },
    { name: 'Amazon', logo: 'Amazon' },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Our Partners
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Recruiters
          </h2>
          <p className="text-muted-foreground">
            Top companies from across industries visit our campus to recruit our talented graduates.
          </p>
        </div>

        {/* Marquee Container */}
        <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling Logos */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              {[...recruiters, ...recruiters].map((company, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-40 h-24 mx-4 p-4 bg-card rounded-xl border border-border flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-soft"
                >
                  <span className="font-display font-bold text-lg text-muted-foreground hover:text-foreground transition-colors">
                    {company.logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitersSection;
