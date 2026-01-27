import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const UtilityBar = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-2 text-xs md:text-sm">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-4 mb-2 md:mb-0">
            <a 
              href="tel:+919167370622" 
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span>+91 9167370622</span>
            </a>
            <a 
              href="tel:+919167370632" 
              className="hidden sm:flex items-center gap-1 hover:text-accent transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span>+91 9167370632</span>
            </a>
            <a 
              href="mailto:sfedu@sfit.ac.in" 
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <Mail className="h-3 w-3" />
              <span>sfedu@sfit.ac.in</span>
            </a>
          </div>

          {/* Quick Links & Social */}
          <div className="flex items-center gap-4">
            {/* Quick Links */}
            <div className="hidden lg:flex items-center gap-3 text-xs">
              <Link to="/staff-login" className="hover:text-accent transition-colors">Staff Login</Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/student-login" className="hover:text-accent transition-colors">Student Login</Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/parent-login" className="hover:text-accent transition-colors">Parent Login</Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/careers" className="hover:text-accent transition-colors">Careers</Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/library" className="hover:text-accent transition-colors">Library</Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-3.5 w-3.5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
