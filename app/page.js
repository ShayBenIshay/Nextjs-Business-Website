import HeroSection from "@/components/HeroSection/HeroSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import EStoresSection from "@/components/EStoresSection/EStoresSection";
import PortfolioSection from "@/components/PortfolioSection/PortfolioSection";
import WhyMeSection from "@/components/WhyMeSection/WhyMeSection";
import HowIWorkSection from "@/components/HowIWorkSection/HowIWorkSection";
// import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";

export const metadata = {
  title: "שי טק סולושנס | בניית אתרים, חנויות אינטרנטיות ופיתוח מותאם אישית",
  description:
    "בניית אתרים, חנויות אינטרנטיות, אחסון ופיתוחים אישיים. מתכנון ופיתוח ועד ניהול שוטף - הכל במקום אחד.",
  alternates: { canonical: "https://www.shaytechsolutions.com" },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <EStoresSection />
      <PortfolioSection />
      <WhyMeSection />
      <HowIWorkSection />
      {/* <TestimonialsSection /> */}
      <CTABannerSection />
    </main>
  );
}
