import UtilityBar from '@/components/layout/UtilityBar';
import MainHeader from '@/components/layout/MainHeader';
import Navigation from '@/components/layout/Navigation';
import AnnouncementTicker from '@/components/layout/AnnouncementTicker';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import VisionMissionSection from '@/components/sections/VisionMissionSection';
import NewsEventsSection from '@/components/sections/NewsEventsSection';
import WhySFITSection from '@/components/sections/WhySFITSection';
import RecruitersSection from '@/components/sections/RecruitersSection';
import InspiredLearningSection from '@/components/sections/InspiredLearningSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UtilityBar />
      <MainHeader />
      <Navigation />
      <AnnouncementTicker />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <VisionMissionSection />
        <NewsEventsSection />
        <WhySFITSection />
        <RecruitersSection />
        <InspiredLearningSection />
        <TestimonialsSection />
      </main>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
