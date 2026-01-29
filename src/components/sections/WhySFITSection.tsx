import { useEffect, useRef, useState } from 'react';
import { Award, Briefcase, Building2, Users } from 'lucide-react';

const WhySFITSection = () => {
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

  const features = [
    {
      icon: Award,
      title: 'NBA Accredited',
      description: 'All our programs are accredited by the National Board of Accreditation.',
    },
    {
      icon: Briefcase,
      title: 'High Placement Ratio',
      description: '95%+ placement rate with top companies recruiting from our campus.',
    },
    {
      icon: Building2,
      title: 'Modern Infrastructure',
      description: 'State-of-the-art labs, libraries, and research facilities.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: '200+ highly qualified and experienced faculty members.',
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-navy">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Why SFIT?
          </h2>
          <p className="text-primary-foreground/80">
            Discover what makes St. Francis Institute of Technology the preferred choice 
            for aspiring engineers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group p-6 md:p-8 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent/30 transition-all duration-300">
                <feature.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySFITSection;
