import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Departments', href: '/departments' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Placements', href: '/placements' },
    { label: 'Research', href: '/research' },
    { label: 'Contact', href: '/contact' },
  ];

  const usefulLinks = [
    { label: 'Mandatory Disclosure', href: '/disclosure' },
    { label: 'NIRF', href: '/nirf' },
    { label: 'IQAC', href: '/iqac' },
    { label: 'Library', href: '/library' },
    { label: 'Careers', href: '/careers' },
    { label: 'Refund Policy', href: '/refund-policy' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-xl font-display font-bold text-accent-foreground">SFIT</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">St. Francis Institute</h3>
                <p className="text-xs text-primary-foreground/70">of Technology</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-4">
              Shaping future engineers since 1999. NAAC A+ Accredited, NBA Approved institution 
              committed to excellence in technical education.
            </p>
            <div className="flex items-center gap-2">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Mount Poinsur, S.V.P Road, Borivali (West), Mumbai – 400103
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <a href="tel:+919167370622" className="hover:text-accent transition-colors block">
                    +91 9167370622
                  </a>
                  <a href="tel:+919167370632" className="hover:text-accent transition-colors block">
                    +91 9167370632
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a 
                  href="mailto:sfedu@sfit.ac.in"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  sfedu@sfit.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="aspect-[21/9] md:aspect-[21/6] lg:aspect-[21/4] rounded-lg overflow-hidden bg-primary-foreground/5">
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

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/60">
            <p>© {new Date().getFullYear()} St. Francis Institute of Technology. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
