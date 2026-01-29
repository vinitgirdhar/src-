import { Link } from 'react-router-dom';
import sfitLogo from '@/assets/sfit-logo.png';

const MainHeader = () => {
  return (
    <div className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-start gap-4 md:gap-6">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <img 
              src={sfitLogo} 
              alt="SFIT Logo" 
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
            />
          </Link>

          {/* Institute Name & Accreditations */}
          <div className="flex flex-col text-left">
            <Link to="/" className="group">
              <h1 className="text-lg md:text-2xl lg:text-3xl font-display font-bold text-destructive leading-tight group-hover:text-destructive/80 transition-colors">
                St. Francis Institute of Technology
              </h1>
            </Link>
            
            {/* Accreditation Line 1 */}
            <p className="text-[9px] md:text-xs lg:text-sm text-muted-foreground mt-1 leading-snug">
              Approved By AICTE | ISO 9001:2015 Certified | Permanently Affiliated to University of Mumbai
            </p>
            
            {/* Accreditation Line 2 */}
            <p className="text-[8px] md:text-[10px] lg:text-xs text-muted-foreground leading-snug hidden sm:block">
              Computer Engineering, Information Technology and Electronics and Telecommunication
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>Engineering are NBA Accredited, NAAC A+ Accredited
            </p>
            
            {/* Mobile compact accreditation */}
            <p className="text-[8px] text-muted-foreground sm:hidden">
              NBA & NAAC A+ Accredited
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
