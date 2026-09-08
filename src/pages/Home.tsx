import { useEffect } from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import FeaturedVideoSection from '../sections/FeaturedVideoSection';
import PhilosophySection from '../sections/PhilosophySection';
import ServicesSection from '../sections/ServicesSection';
import ProductCategoriesSection from '../sections/ProductCategoriesSection';
import AutomaticSystemsSection from '../sections/AutomaticSystemsSection';
import SetupSolutionsSection from '../sections/SetupSolutionsSection';
import WhyEzytekSection from '../sections/WhyEzytekSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import StatsSection from '../sections/StatsSection';
import IndustriesSection from '../sections/IndustriesSection';
import CatalogueCTASection from '../sections/CatalogueCTASection';
import FinalCTASection from '../sections/FinalCTASection';

interface HomeProps {
  onQuoteClick: () => void;
}

export default function Home({ onQuoteClick }: HomeProps) {
  useEffect(() => {
    document.title = 'EzyTek Clean | Automatic Car Wash Manufacturer in India';
  }, []);

  return (
    <main>
      <HeroSection onQuoteClick={onQuoteClick} />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
      <ProductCategoriesSection />
      <AutomaticSystemsSection />
      <SetupSolutionsSection />
      <WhyEzytekSection />
      <TestimonialsSection />
      <StatsSection />
      <IndustriesSection />
      <CatalogueCTASection />
      <FinalCTASection onQuoteClick={onQuoteClick} />
    </main>
  );
}
