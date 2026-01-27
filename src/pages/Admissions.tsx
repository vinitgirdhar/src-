import UtilityBar from '@/components/layout/UtilityBar';
import MainHeader from '@/components/layout/MainHeader';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Calendar, FileText, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Admissions = () => {
  const steps = [
    { step: '01', title: 'Register Online', description: 'Create an account on our admission portal' },
    { step: '02', title: 'Fill Application', description: 'Complete the application form with required details' },
    { step: '03', title: 'Upload Documents', description: 'Submit all necessary documents online' },
    { step: '04', title: 'Pay Fees', description: 'Complete the application fee payment' },
    { step: '05', title: 'Document Verification', description: 'Visit campus for document verification' },
    { step: '06', title: 'Admission Confirmed', description: 'Receive confirmation and welcome kit' },
  ];

  const eligibility = [
    'Passed HSC (12th) with Physics, Chemistry, and Mathematics',
    'Minimum 50% aggregate marks (45% for reserved categories)',
    'Valid MHT-CET or JEE Main score',
    'Domicile of Maharashtra (for state quota seats)',
  ];

  const faqs = [
    {
      question: 'What is the admission process for B.Tech?',
      answer: 'Admissions to B.Tech programs are conducted through the Centralized Admission Process (CAP) by the State Common Entrance Test Cell, Maharashtra. Candidates need to register, fill preferences, and participate in the CAP rounds.',
    },
    {
      question: 'Is hostel facility available?',
      answer: 'Yes, SFIT provides separate hostel facilities for boys and girls with modern amenities, mess, and round-the-clock security.',
    },
    {
      question: 'What scholarships are available?',
      answer: 'Various scholarships are available including EBC, OBC, SC/ST scholarships from the government, as well as merit-based scholarships from the institute.',
    },
    {
      question: 'Is there a management quota?',
      answer: 'Yes, a limited number of seats are available under the Institute Level Quota. Contact the admission office for more details.',
    },
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
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-amber/20 rounded-full">
              <Calendar className="h-4 w-4 text-amber" />
              <span className="text-sm font-semibold text-amber">Admissions Open 2025-26</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Join SFIT
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Begin your journey towards becoming an innovative engineer at one of 
              Mumbai's premier engineering institutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-amber text-amber-foreground hover:bg-amber/90 px-8">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Admission Process
              </h2>
              <p className="text-muted-foreground">
                Follow these simple steps to secure your admission at SFIT.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-xl border border-border hover-lift">
                  <span className="text-4xl font-display font-bold text-accent/20">{item.step}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="section-padding bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
                  Eligibility Criteria
                </h2>
                <div className="space-y-4">
                  {eligibility.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to="#"
                  className="inline-flex items-center gap-2 mt-8 text-accent font-semibold hover:gap-4 transition-all"
                >
                  View Detailed Eligibility
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="p-8 bg-card rounded-2xl border border-border">
                <FileText className="h-12 w-12 text-accent mb-6" />
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Documents Required
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• 10th & 12th Marksheets</li>
                  <li>• MHT-CET / JEE Main Scorecard</li>
                  <li>• Domicile Certificate</li>
                  <li>• Caste Certificate (if applicable)</li>
                  <li>• Income Certificate (for scholarship)</li>
                  <li>• Passport Size Photographs</li>
                  <li>• Aadhar Card</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <HelpCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-card rounded-xl border border-border px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium text-foreground">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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

export default Admissions;
