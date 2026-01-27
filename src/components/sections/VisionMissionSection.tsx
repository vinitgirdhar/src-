import { useEffect, useRef, useState } from 'react';
import { Eye, Target, Award } from 'lucide-react';

const VisionMissionSection = () => {
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

  const cards = [
    {
      icon: Eye,
      title: 'Our Vision',
      content: 'To be a chrysalis where bright youngsters are transformed into technological entrepreneurs and innovative leaders who will contribute to national development and serve humanity.',
      color: 'accent',
    },
    {
      icon: Target,
      title: 'Our Mission',
      content: 'To provide quality education through well-qualified and dedicated faculty, state-of-the-art infrastructure, and industry collaboration to produce globally competent engineers.',
      color: 'amber',
    },
    {
      icon: Award,
      title: 'Quality Policy',
      content: 'To be the most preferred Institute of Engineering & Technology equipped with state-of-the-art facilities, committed to continual improvement and excellence in education.',
      color: 'primary',
    },
  ];

  const colorClasses = {
    accent: 'bg-accent/10 text-accent',
    amber: 'bg-amber/10 text-amber',
    primary: 'bg-primary/10 text-primary',
  };

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Our Foundation
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Vision, Mission & Quality Policy
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`group p-8 bg-card rounded-2xl border border-border hover-lift transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${colorClasses[card.color as keyof typeof colorClasses]} flex items-center justify-center mb-6`}>
                <card.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
