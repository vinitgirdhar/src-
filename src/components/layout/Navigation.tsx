import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
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
    ]
  },
  { 
    label: 'Departments', 
    href: '/departments',
    children: [
      { label: 'Computer Engineering', href: '/departments/computer' },
      { label: 'Information Technology', href: '/departments/it' },
      { label: 'Electronics & Telecom', href: '/departments/extc' },
      { label: 'Mechanical Engineering', href: '/departments/mechanical' },
      { label: 'Electrical Engineering', href: '/departments/electrical' },
      { label: 'AI & Machine Learning', href: '/departments/aiml' },
    ]
  },
  { label: 'Research', href: '/research' },
  { label: 'Placements', href: '/placements' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Life@SFIT', href: '/campus-life' },
  { label: 'Contact', href: '/contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
  }, [location.pathname]);

  return (
    <nav 
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md shadow-soft' 
          : 'bg-card'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    location.pathname === item.href
                      ? 'text-accent bg-accent/10'
                      : 'text-foreground hover:text-accent hover:bg-muted'
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-popover border border-border rounded-lg shadow-lg py-2 animate-fade-in-up">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-muted transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/admissions"
              className="inline-flex items-center px-5 py-2 bg-amber text-amber-foreground font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-sm font-display font-bold text-primary-foreground">SF</span>
            </div>
            <span className="font-display font-semibold text-primary">SFIT</span>
          </div>

          {/* Mobile Apply Button */}
          <Link
            to="/admissions"
            className="lg:hidden inline-flex items-center px-3 py-1.5 bg-amber text-amber-foreground font-semibold text-xs rounded-md"
          >
            Apply
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-14 bg-background z-40 overflow-y-auto animate-fade-in">
          <div className="container mx-auto px-4 py-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className={cn(
                      'block px-4 py-3 text-lg font-medium rounded-lg transition-colors',
                      location.pathname === item.href
                        ? 'text-accent bg-accent/10'
                        : 'text-foreground hover:bg-muted'
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
