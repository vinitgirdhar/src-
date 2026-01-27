import { useEffect, useRef, useState } from 'react';
import { 
  Cpu, 
  Radio, 
  Monitor, 
  Cog, 
  Zap, 
  Brain, 
  ChevronDown,
  Users
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ProgramsSection = () => {
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

  const btechPrograms = [
    { name: 'Computer Engineering', seats: 180, icon: Cpu },
    { name: 'Information Technology', seats: 120, icon: Monitor },
    { name: 'Electronics & Telecommunication', seats: 120, icon: Radio },
    { name: 'Mechanical Engineering', seats: 60, icon: Cog },
    { name: 'Electrical Engineering', seats: 60, icon: Zap },
    { name: 'AI & Machine Learning', seats: 60, icon: Brain },
  ];

  const mtechPrograms = [
    { name: 'Computer Engineering', specialization: 'Data Science' },
    { name: 'Electronics & Telecommunication', specialization: 'VLSI Design' },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Academic Programs
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Courses Offered
          </h2>
          <p className="text-muted-foreground">
            Choose from our wide range of undergraduate, postgraduate, and doctoral programs 
            designed to shape the next generation of engineers and innovators.
          </p>
        </div>

        {/* Programs Accordion */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Accordion type="single" collapsible defaultValue="btech" className="space-y-4">
            {/* B.Tech Programs */}
            <AccordionItem value="btech" className="bg-card rounded-xl border border-border overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Cpu className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Bachelor of Technology (B.Tech)
                    </h3>
                    <p className="text-sm text-muted-foreground">4-Year Undergraduate Program • 6 Specializations</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  {btechPrograms.map((program, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <program.icon className="h-5 w-5 text-accent" />
                        <span className="font-medium text-foreground">{program.name}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{program.seats} seats</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* M.Tech Programs */}
            <AccordionItem value="mtech" className="bg-card rounded-xl border border-border overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber/10 rounded-lg flex items-center justify-center">
                    <Brain className="h-6 w-6 text-amber" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Master of Technology (M.Tech)
                    </h3>
                    <p className="text-sm text-muted-foreground">2-Year Postgraduate Program • 2 Specializations</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  {mtechPrograms.map((program, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="font-medium text-foreground mb-1">{program.name}</div>
                      <div className="text-sm text-muted-foreground">Specialization: {program.specialization}</div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Ph.D Programs */}
            <AccordionItem value="phd" className="bg-card rounded-xl border border-border overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Doctor of Philosophy (Ph.D)
                    </h3>
                    <p className="text-sm text-muted-foreground">Research Program • Multiple Disciplines</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="pt-4">
                  <p className="text-muted-foreground mb-4">
                    SFIT offers Ph.D programs in various engineering disciplines. Our research 
                    programs are designed to foster innovation and contribute to cutting-edge 
                    research in technology.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Computer Science', 'Electronics', 'Mechanical', 'Information Technology'].map((field) => (
                      <span 
                        key={field}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-foreground"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
