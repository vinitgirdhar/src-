import UtilityBar from '@/components/layout/UtilityBar';
import MainHeader from '@/components/layout/MainHeader';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { CheckCircle, Award, Users, Building2 } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '1999', label: 'Established' },
    { value: '5000+', label: 'Students' },
    { value: '200+', label: 'Faculty' },
    { value: '25+', label: 'Years of Excellence' },
  ];

  const highlights = [
    'NAAC A+ Accredited',
    'NBA Accredited Programs',
    'AICTE Approved',
    'ISO 9001:2015 Certified',
    'Permanently Affiliated to University of Mumbai',
    'UG, PG & PhD Programs',
    'State-of-the-art Infrastructure',
    '95%+ Placement Rate',
  ];

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
              About SFIT
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              A legacy of excellence in engineering education since 1999.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 -mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 bg-card rounded-xl border border-border text-center shadow-soft">
                  <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    St. Francis Institute of Technology (SFIT) was established in 1999 by the 
                    Aldel Education Trust with a vision to provide quality technical education 
                    to aspiring engineers. Located in the serene campus at Mount Poinsur in 
                    Borivali West, Mumbai, SFIT has grown to become one of the premier 
                    engineering institutions in the region.
                  </p>
                  <p>
                    The institute is permanently affiliated to the University of Mumbai and 
                    approved by AICTE. Over the years, SFIT has earned numerous accolades 
                    including NAAC A+ accreditation, making it one of the highest-rated 
                    engineering colleges in Mumbai.
                  </p>
                  <p>
                    With a strong focus on holistic development, SFIT provides students with 
                    not just academic excellence but also opportunities for research, innovation, 
                    and industry exposure. Our alumni have gone on to work at leading companies 
                    worldwide and have made significant contributions to society.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-6">
                  Key Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision" className="section-padding bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-card rounded-2xl border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a chrysalis where bright youngsters are transformed into technological 
                  entrepreneurs and innovative leaders who will contribute to national 
                  development and serve humanity.
                </p>
              </div>
              <div className="p-8 bg-card rounded-2xl border border-border">
                <div className="w-14 h-14 bg-amber/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-amber" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality education through well-qualified and dedicated faculty, 
                  state-of-the-art infrastructure, and industry collaboration to produce 
                  globally competent engineers.
                </p>
              </div>
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

export default About;
