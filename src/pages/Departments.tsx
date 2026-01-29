import UtilityBar from '@/components/layout/UtilityBar';
import MainHeader from '@/components/layout/MainHeader';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Monitor, Radio, Cog, Zap, Brain, Users } from 'lucide-react';

const departments = [
  {
    name: 'Computer Engineering',
    code: 'COMP',
    icon: Cpu,
    seats: 180,
    description: 'Design and develop software systems, algorithms, and computing solutions.',
    href: '/departments/computer',
  },
  {
    name: 'Information Technology',
    code: 'IT',
    icon: Monitor,
    seats: 120,
    description: 'Focus on information systems, networking, and digital technologies.',
    href: '/departments/information-technology',
  },
  {
    name: 'Electronics & Telecommunication',
    code: 'EXTC',
    icon: Radio,
    seats: 120,
    description: 'Study of electronic devices, circuits, and communication systems.',
    href: '/departments/extc',
  },
  {
    name: 'Mechanical Engineering',
    code: 'MECH',
    icon: Cog,
    seats: 60,
    description: 'Design and manufacture machines, engines, and mechanical systems.',
    href: '/departments/mechanical',
  },
  {
    name: 'Electrical Engineering',
    code: 'ELEC',
    icon: Zap,
    seats: 60,
    description: 'Study of electrical systems, power generation, and electronics.',
    href: '/departments/electrical',
  },
  {
    name: 'AI & Machine Learning',
    code: 'AIML',
    icon: Brain,
    seats: 60,
    description: 'Cutting-edge program in artificial intelligence and machine learning.',
    href: '/departments/aiml',
  },
];

const Departments = () => {
  return (
    <div className="min-h-screen bg-background">
      <UtilityBar />
      <MainHeader />
      <Navigation />

      <main>
        {/* Hero */}
        <section className="bg-gradient-navy py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Departments
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Explore our diverse range of engineering programs designed to prepare you 
              for a successful career in technology.
            </p>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <Link
                  key={index}
                  to={dept.href}
                  className="group p-6 bg-card rounded-2xl border border-border hover-lift"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <dept.icon className="h-7 w-7 text-accent" />
                    </div>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-semibold text-muted-foreground">
                      {dept.code}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {dept.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{dept.seats} seats</span>
                    </div>
                    <span className="flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default Departments;
