import { Award, CheckCircle, Building2, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import sfitLogo from '@/assets/sfit-logo.png';

const MainHeader = () => {
  const accreditations = [
    { icon: CheckCircle, label: 'AICTE Approved', shortLabel: 'AICTE' },
    { icon: Award, label: 'ISO 9001:2015', shortLabel: 'ISO' },
    { icon: Building2, label: 'Mumbai University', shortLabel: 'MU' },
    { icon: GraduationCap, label: 'NAAC A+', shortLabel: 'A+' },
  ];

  return (
    <div className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Institute Name */}
          <Link to="/" className="flex items-center gap-3 md:gap-4 group">
            <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img 
                src={sfitLogo} 
                alt="SFIT Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-base md:text-lg lg:text-xl font-display font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                St. Francis Institute of Technology
              </h1>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5">
                Permanently Affiliated to University of Mumbai
              </p>
            </div>
          </Link>

          {/* Accreditation Badges */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {accreditations.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-muted/50 hover:bg-accent/10 transition-all duration-300 group cursor-default"
                title={item.label}
              >
                <item.icon className="h-3.5 w-3.5 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-medium text-muted-foreground group-hover:text-accent transition-colors">
                  {item.shortLabel}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile Accreditation Summary */}
          <div className="flex md:hidden items-center gap-1.5">
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10">
              <Award className="h-3 w-3 text-accent" />
              <span className="text-[10px] font-semibold text-accent">A+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
