import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const InspiredLearningSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const labs = [
    {
      title: 'RADLAB',
      description: 'Research and Development Laboratory for cutting-edge innovation',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Robotics Lab',
      description: 'State-of-the-art robotics and automation facility',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'IoT Center',
      description: 'Internet of Things and embedded systems workshop',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'AI/ML Lab',
      description: 'Artificial Intelligence and Machine Learning research facility',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Hands-on Experience
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Inspired Learning
          </h2>
          <p className="text-muted-foreground">
            Our world-class laboratories and research centers provide students with 
            practical experience and exposure to the latest technologies.
          </p>
        </div>

        {/* Labs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {labs.map((lab, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl aspect-[4/5] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <img
                src={lab.image}
                alt={lab.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                  {lab.title}
                </h3>
                <p className="text-sm text-primary-foreground/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {lab.description}
                </p>
                <Link 
                  to="#"
                  className="inline-flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspiredLearningSection;
