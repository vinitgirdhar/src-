import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: GraduationCap, value: '5000+', label: 'Students' },
    { icon: Users, value: '200+', label: 'Faculty' },
    { icon: Briefcase, value: '95%', label: 'Placement' },
    { icon: Award, value: '25+', label: 'Years' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-navy-light">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.4),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,hsl(var(--amber)/0.3),transparent_50%)]" />
        </div>
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-20 text-center">
        {/* Achievement Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/40 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Award className="h-5 w-5 text-accent" />
          <span className="text-sm md:text-base font-semibold text-accent tracking-wide">
            NAAC A+ Accredited • NBA Approved
          </span>
        </div>

        {/* Headline */}
        <h1 
          className={`font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-[1.1] transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Shaping Engineers<br />
          <span className="text-gradient-amber">of Tomorrow</span>
        </h1>

        {/* Subheadline */}
        <p 
          className={`text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Excellence in Engineering Education Since 1999. 
          Permanently affiliated to University of Mumbai.
        </p>

        {/* CTAs */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-amber text-amber-foreground hover:bg-amber/90 px-8 text-base font-semibold"
          >
            <Link to="/admissions">Apply Now</Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="border-white/50 text-white bg-white/10 hover:bg-white/20 hover:border-white px-8 text-base font-semibold backdrop-blur-sm"
          >
            <Link to="/departments">Explore Programs</Link>
          </Button>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group p-5 md:p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300"
            >
              <stat.icon className="h-7 w-7 md:h-8 md:w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-primary-foreground/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
