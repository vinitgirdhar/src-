import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    'Established in 1999',
    'NAAC A+ Accredited',
    'NBA Accredited Programs',
    'ISO 9001:2015 Certified',
    'Permanently Affiliated to Mumbai University',
    'UG, PG & PhD Programs',
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              About SFIT
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              A Legacy of Excellence in{' '}
              <span className="text-gradient">Engineering Education</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              St. Francis Institute of Technology (SFIT) is a premier engineering institution 
              located in Borivali, Mumbai. Since its establishment in 1999, SFIT has been 
              committed to providing quality technical education and producing industry-ready 
              engineers who contribute meaningfully to society.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With state-of-the-art infrastructure, experienced faculty, and a strong focus 
              on research and innovation, SFIT has earned numerous accolades including 
              NAAC A+ accreditation and NBA approval for its programs.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all"
            >
              Learn More About SFIT
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
                alt="SFIT Campus"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 p-6 bg-card rounded-xl shadow-elegant border border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-accent">A+</span>
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">NAAC Grade</div>
                  <div className="text-sm text-muted-foreground">Highest Accreditation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
