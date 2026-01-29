import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  isMega?: boolean;
  image?: string;
  imageText?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Institute', 
    href: '/about',
    children: [
      { label: 'About SFIT', href: '/about' },
      { label: 'Vision & Mission', href: '/about#vision' },
      { label: 'Management', href: '/about#management' },
      { label: 'Infrastructure', href: '/about#infrastructure' },
      { label: 'Code of Conduct', href: '/about#conduct' },
    ]
  },
  { 
    label: 'Department', 
    href: '/departments',
    children: [
      { label: 'Computer Engineering', href: '/departments/computer' },
      { label: 'Information Technology', href: '/departments/it' },
      { label: 'Electrical Engineering', href: '/departments/electrical' },
      { label: 'Basic Science & Humanities', href: '/departments/sh' },
      { label: 'Electronics and Telecommunication Engineering', href: '/departments/extc' },
      { label: 'Mechanical Engineering', href: '/departments/mechanical' },
      { label: 'Artificial Intelligence and Machine Learning (AIML)', href: '/departments/aiml' },
      { label: 'Electronics and Computer Science', href: '/departments/ecs' },
    ]
  },
  { 
    label: 'Research & Innovation', 
    href: '/research',
    children: [
      { label: 'R&D Cell', href: '/research/cell' },
      { label: 'Publications', href: '/research/publications' },
      { label: 'Patents', href: '/research/patents' },
      { label: 'Grants', href: '/research/grants' },
    ]
  },
  { 
    label: 'Training & Placement', 
    href: '/placements',
    children: [
      { label: 'Message from T&P Head', href: '/placements/message' },
      { label: 'Testimonials from Alumni', href: '/placements/testimonials' },
      { label: 'List of Recruiters', href: '/placements/recruiters' },
      { label: 'Contact Details', href: '/placements/contact' },
      { label: 'List of Universities for Higher Studies (M.S)', href: '/placements/higher-studies' },
      { label: 'Placement Summary', href: '/placements/summary' },
      { label: 'Activities', href: '/placements/activities' },
      { label: 'Placement List', href: '/placements/list' },
      { label: 'Placement & Higher Study Records', href: '/placements/records' },
      { label: 'Placement Policy 2026', href: '/placements/policy' },
    ]
  },
  { 
    label: 'Alumni', 
    href: '/alumni',
    children: [
      { label: 'Alumni Association', href: '/alumni/association' },
      { label: 'Portal', href: '/alumni/portal' },
      { label: 'Events', href: '/alumni/events' },
    ]
  },
  { 
    label: 'Accreditation', 
    href: '/accreditation',
    children: [
      { label: 'NAAC', href: '/accreditation/naac' },
      { label: 'NBA', href: '/accreditation/nba' },
      { label: 'NIRF', href: '/accreditation/nirf' },
    ]
  },
  { 
    label: 'IQAC', 
    href: '/iqac',
    children: [
      { label: 'Quality Policy', href: '/iqac/policy' },
      { label: 'Composition', href: '/iqac/composition' },
      { label: 'AQAR', href: '/iqac/aqar' },
    ]
  },
  { 
    label: 'Life@SFIT', 
    href: '/campus-life',
    children: [
      { label: 'Student Council', href: '/campus-life/council' },
      { label: 'Collaboration with Foreign Universities', href: '/campus-life/foreign' },
      { label: 'Mosaic', href: '/campus-life/mosaic' },
      { label: 'Skill Development Cell', href: '/campus-life/skill' },
      { label: 'TeamRaw', href: '/campus-life/teamraw' },
      { label: 'IRIS', href: '/campus-life/iris' },
      { label: 'NSS', href: '/campus-life/nss' },
      { label: 'Student Chapters', href: '/campus-life/chapters' },
      { label: 'E-TAN', href: '/campus-life/etan' },
      { label: 'Online Exam 2020', href: '/campus-life/exam' },
    ]
  },
  { 
    label: 'Admissions', 
    href: '/admissions',
    children: [
      { label: 'BTech Admission Notification AY 2025-2026', href: '/admissions/btech-notification' },
      { label: 'Notice on Disclaimer', href: '/admissions/disclaimer' },
      { label: 'Master of Technology', href: '/admissions/mtech' },
      { label: 'Admission Approval', href: '/admissions/approval' },
      { label: 'Bachelor of Technology (B.Tech.)', href: '/admissions/btech' },
      { label: 'Approved Fee for 2025-26', href: '/admissions/fee' },
      { label: 'Doctor of Philosophy (PhD)', href: '/admissions/phd' },
      { label: 'Change of Nomenclature', href: '/admissions/nomenclature' },
    ]
  },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  const toggleMobileSubmenu = (label: string, e: MouseEvent) => {
    e.preventDefault();
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <nav 
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-amber shadow-lg' 
          : 'bg-amber'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-full">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    'flex items-center gap-1 h-full px-4 text-xs font-semibold transition-colors uppercase tracking-tight',
                    location.pathname === item.href || (item.children && item.children.some(c => location.pathname === c.href))
                      ? 'bg-amber-600 text-white'
                      : 'text-white hover:bg-amber-600'
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div 
                    className={cn(
                      "absolute top-full bg-white border-t-2 border-amber-600 shadow-2xl py-4 animate-fade-in z-50 min-w-64",
                      // Prevent menu from going off-screen
                      (item.label === 'Admissions' || item.label === 'IQAC' || item.label === 'Life@SFIT' || item.label === 'Accreditation') 
                        ? "right-0" 
                        : "left-0"
                    )}
                  >
                    <div className="px-4 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="group flex items-center gap-2 py-2 text-sm text-gray-700 hover:text-amber-600 transition-colors border-b border-gray-100 last:border-0"
                        >
                          <span className="text-amber-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity shrinkage-0">»</span>
                          <span className="whitespace-nowrap">{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop/Tablet CTA */}
          <div className="hidden md:flex lg:hidden items-center ml-auto mr-4">
             <Link
              to="/admissions"
              className="inline-flex items-center px-4 py-1.5 bg-white text-amber-700 font-bold text-sm rounded hover:bg-gray-100 transition-colors shadow-sm"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Toggle - Visible on lg and below */}
          <div className="flex items-center justify-between w-full lg:w-auto lg:hidden">
             <span className="text-white font-display font-semibold text-lg lg:hidden">Menu</span>
             <button
              className="p-2 text-white hover:bg-amber-600 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[calc(theme(spacing.12)+theme(spacing.8))] md:top-[calc(theme(spacing.14)+theme(spacing.8))] bg-black/50 z-30" onClick={() => setIsMobileMenuOpen(false)}>
           {/* Calculated top offset roughly accounts for header + ticker. Adjust via CSS if needed or just use consistent top-12 */}
        </div>
      )}
      
      {/* Side Menu Drawer for Mobile/Tablet */}
      <div className={cn(
        "lg:hidden fixed top-12 md:top-14 right-0 bottom-0 w-[80%] md:w-[350px] bg-white z-40 shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out transform border-l border-gray-200",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
          <div className="p-4 flex flex-col gap-2">
            
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100 last:border-0">
                <div className="flex items-center justify-between py-2">
                  <Link
                    to={item.href}
                    onClick={() => !item.children && setIsMobileMenuOpen(false)}
                    className={cn(
                      'text-base font-semibold uppercase tracking-tight flex-1 py-1',
                      location.pathname === item.href
                        ? 'text-amber-600'
                        : 'text-gray-800'
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                     <button 
                        onClick={(e) => toggleMobileSubmenu(item.label, e)}
                        className="p-2 text-gray-500 hover:text-amber-600 hover:bg-amber-50 rounded"
                     >
                       <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileExpanded === item.label ? "rotate-180" : "")} />
                     </button>
                  )}
                </div>
                
                {/* Collapsible Submenu */}
                <div className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  mobileExpanded === item.label ? "max-h-[500px] opacity-100 mb-2" : "max-h-0 opacity-0"
                )}>
                  <div className="pl-4 space-y-1 bg-gray-50/50 rounded-lg py-2 border-l-2 border-amber-100 ml-2">
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50/50 rounded transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link
                to="/admissions"
                className="flex items-center justify-center w-full px-4 py-3 bg-amber text-amber-foreground font-bold text-sm rounded-lg hover:opacity-90 transition-opacity shadow-sm"
              >
                Apply for Admission 2026-27
              </Link>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navigation;
