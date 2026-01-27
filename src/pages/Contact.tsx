import UtilityBar from '@/components/layout/UtilityBar';
import MainHeader from '@/components/layout/MainHeader';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Mount Poinsur, S.V.P Road', 'Borivali (West), Mumbai – 400103'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9167370622', '+91 9167370632', '+91 9167370637'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['sfedu@sfit.ac.in', 'admission@sfit.ac.in'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
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
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Get in touch with us for admissions, queries, or any information about SFIT.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="p-8 bg-card rounded-2xl border border-border">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Enter subject" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} />
                  </div>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="p-6 bg-muted/50 rounded-xl">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                        <info.icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0088671234043!2d72.84789731490384!3d19.233376987017785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0c7d5f5c5f7%3A0x7c8e6f0f1a0f0a0f!2sSt.%20Francis%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SFIT Location"
                  />
                </div>
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

export default Contact;
