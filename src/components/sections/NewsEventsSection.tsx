import { useEffect, useRef, useState } from 'react';
import { Calendar, ArrowRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const NewsEventsSection = () => {
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

  const notices = [
    { title: 'SWAYAM–NPTEL Online Course Completion Certificate', date: 'Jan 20, 2025' },
    { title: 'AICTE Feedback Portal - Student Registration', date: 'Jan 18, 2025' },
    { title: 'Scholarship Notice for Academic Year 2024-25', date: 'Jan 15, 2025' },
    { title: 'Vidya Lakshmi Portal Registration Open', date: 'Jan 12, 2025' },
    { title: 'Documentary Movie Screening Event', date: 'Jan 10, 2025' },
  ];

  const events = [
    { title: 'Inauguration of Cyber Security Lab', date: 'Feb 5', month: 'FEB' },
    { title: 'Coastal Surveillance Workshop', date: 'Feb 10', month: 'FEB' },
    { title: 'Django Web Development Workshop', date: 'Feb 15', month: 'FEB' },
    { title: 'ModelX: Innovate 3D Competition', date: 'Feb 20', month: 'FEB' },
    { title: 'Industrial Automation Workshop', date: 'Feb 25', month: 'FEB' },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Stay Updated
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            News & Events
          </h2>
        </div>

        {/* Tabs */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Tabs defaultValue="notices" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted">
              <TabsTrigger value="notices" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Notices
              </TabsTrigger>
              <TabsTrigger value="events" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="notices">
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                {notices.map((notice, index) => (
                  <Link
                    key={index}
                    to="#"
                    className="flex items-center justify-between p-4 border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">
                          {notice.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{notice.date}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </Link>
                ))}
              </div>
              <Link 
                to="/notices"
                className="inline-flex items-center gap-2 mt-6 text-accent font-semibold hover:gap-4 transition-all"
              >
                View All Notices
                <ArrowRight className="h-4 w-4" />
              </Link>
            </TabsContent>

            <TabsContent value="events">
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                {events.map((event, index) => (
                  <Link
                    key={index}
                    to="#"
                    className="flex items-center gap-4 p-4 border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex flex-col items-center justify-center shrink-0">
                      <span className="text-xs font-semibold text-accent uppercase">{event.month}</span>
                      <span className="text-xl font-display font-bold text-foreground">{event.date.split(' ')[1]}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {event.title}
                      </h4>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </Link>
                ))}
              </div>
              <Link 
                to="/events"
                className="inline-flex items-center gap-2 mt-6 text-accent font-semibold hover:gap-4 transition-all"
              >
                View All Events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;
