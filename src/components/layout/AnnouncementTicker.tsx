import { useState } from 'react';
import { X, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnnouncementTicker = () => {
  const [isVisible, setIsVisible] = useState(true);

  const announcements = [
    {
      text: 'Undergraduate BTech Admission Notification AY 2026–27 is now open!',
      link: '/admissions',
    },
    {
      text: 'NAAC Peer Team Visit scheduled for February 2026',
      link: '/about',
    },
    {
      text: 'National Level Technical Symposium - Technovanza 2026',
      link: '/events',
    },
  ];

  if (!isVisible) return null;

  return (
    <div className="bg-amber text-amber-foreground overflow-hidden border-b border-amber-600/20">
      <div className="container mx-auto px-2 md:px-4 py-2 flex items-center gap-2 md:gap-4 relative">
        <div className="flex items-center gap-2 shrink-0 bg-amber z-10 pr-2">
          <Megaphone className="h-3 w-3 md:h-4 md:w-4" />
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wide hidden sm:inline">
            Announcements
          </span>
        </div>
        
        <div className="flex-1 overflow-hidden mask-linear-fade">
          <div className="flex animate-ticker whitespace-nowrap">
            {announcements.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="inline-flex items-center gap-8 px-4 text-xs md:text-sm hover:underline"
              >
                <span>•</span>
                <span>{item.text}</span>
              </Link>
            ))}
            {/* Duplicate for seamless loop */}
            {announcements.map((item, index) => (
              <Link
                key={`dup-${index}`}
                to={item.link}
                className="inline-flex items-center gap-8 px-4 text-sm hover:underline"
              >
                <span>•</span>
                <span>{item.text}</span>
              </Link>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="shrink-0 p-1 rounded hover:bg-amber-foreground/10 transition-colors"
          aria-label="Dismiss announcements"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementTicker;
