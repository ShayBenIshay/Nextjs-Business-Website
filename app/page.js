import HeroSection from '@/components/HeroSection/HeroSection';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import HowCanIHelpSection from '@/components/HowCanIHelpSection/HowCanIHelpSection';
import EStoresSection from '@/components/EStoresSection/EStoresSection';
import OtherServicesSection from '@/components/OtherServicesSection/OtherServicesSection';
import WhyMeSection from '@/components/WhyMeSection/WhyMeSection';
import PortfolioSection from '@/components/PortfolioSection/PortfolioSection';
import HowIWorkSection from '@/components/HowIWorkSection/HowIWorkSection';
import CTABannerSection from '@/components/CTABannerSection/CTABannerSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <HowCanIHelpSection />
      <EStoresSection />
      <OtherServicesSection />
      <WhyMeSection />
      <PortfolioSection />
      <HowIWorkSection />
      <CTABannerSection />
    </main>
  );
}
