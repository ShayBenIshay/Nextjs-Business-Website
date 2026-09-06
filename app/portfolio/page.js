import HeroSection from "@/components/sections/HeroSection/HeroSection";

export const metadata = {
  title: 'תיק עבודות | חנויות, אתרים ופיתוחים | שי טק סולושנס',
  description: 'תיק עבודות – חנויות אינטרנטיות, אתרי וורדפרס, פיתוחים מותאמים ועוד. ראו דוגמאות אמיתיות מפרויקטים שבנויים לעבוד.',
  alternates: { canonical: 'https://www.shaytechsolutions.com/portfolio' },
};
import CTABannerSection from "@/components/sections/CTABannerSection/CTABannerSection";
import FullPortfolioGrid from "@/components/sections/FullPortfolioGrid/FullPortfolioGrid";
import ProcessJourneySection from "@/components/sections/ProcessJourneySection/ProcessJourneySection";
import SpecialProjectsSection from "@/components/sections/SpecialProjectsSection/SpecialProjectsSection";

export default function PortfolioPage() {
  return (
    <main>
      <HeroSection
        headline="עבודות נבחרות – פרויקטים שבנויים לעבוד."
        subtitle="חנויות אינטרנטיות, אתרי WordPress ופיתוחים מותאמים אישית –
כל פרויקט נבנה לפי מטרה עסקית ברורה."
      />
      <FullPortfolioGrid />
      <SpecialProjectsSection />
      <ProcessJourneySection />
      <CTABannerSection
        headline="רוצים להיות הפרויקט הבא?"
        sub="כל פרויקט מתחיל בשיחה קצרה להבין אם ואיך אפשר לעבוד יחד."
      />
    </main>
  );
}
