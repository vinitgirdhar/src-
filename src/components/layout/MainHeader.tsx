import { Award, CheckCircle, Building2, GraduationCap } from 'lucide-react';

const MainHeader = () => {
  const accreditations = [
    { icon: CheckCircle, label: 'AICTE Approved' },
    { icon: Award, label: 'ISO 9001:2015' },
    { icon: Building2, label: 'Affiliated to Mumbai University' },
    { icon: GraduationCap, label: 'NAAC A+ Accredited' },
  ];

  return (
    <div className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Institute Name */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">
                SFIT
              </span>
            </div>
            <div>
              <h1 className="text-lg md:text-xl lg:text-2xl font-display font-bold text-primary leading-tight">
                St. Francis Institute of Technology
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground">
                Excellence in Engineering Education Since 1999
              </p>
            </div>
          </div>

          {/* Accreditation Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {accreditations.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors"
              >
                <item.icon className="h-4 w-4 text-accent" />
                <span className="hidden sm:inline">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
