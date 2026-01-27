import { useState } from 'react';
import { X, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnnouncementTicker = () => {
  const [isVisible, setIsVisible] = useState(true);

  const announcements = [
    {
      text: 'Undergraduate BTech Admission Notification AY 2025–26 is now open!',
      link: '/admissions',
    },
    {
      text: 'NAAC Peer Team Visit scheduled for February 2025',
      link: '/about',
    },
    {
      text: 'National Level Technical Symposium - Technovanza 2025',
      link: '/events',
    },
  ];

  if (!isVisible) return null;

  return (
    <div className="bg-amber text-amber-foreground overflow-hidden">
      <div className="container mx-auto px-4 py-2 flex items-center gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <Megaphone className="h-4 w-4" />
          <span className="text-xs font-semibold uppercase tracking-wide hidden sm:inline">
            Announcements
          </span>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <div className="flex animate-ticker whitespace-nowrap">
            {announcements.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="inline-flex items-center gap-8 px-4 text-sm hover:underline"
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
