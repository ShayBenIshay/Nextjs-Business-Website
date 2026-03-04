import HeroSection from "@/components/HeroSection/HeroSection";
import ComingSoonSection from "@/components/ComingSoonSection/ComingSoonSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";

export default function CustomDevelopmentPage() {
  return (
    <main>
      <HeroSection
        headline="פיתוח אישי ומותאם לצרכים שלך"
        subtitle="פתרונות טכנולוגיים מותאמים אישית – מאפיון ועיצוב ועד פיתוח ועלייה לאוויר."
      />
      <ComingSoonSection />
      <CTABannerSection
        headline="יש לך רעיון? בואו נבנה אותו ביחד"
        sub="נתחיל בשיחה קצרה להבין מה מתאים לך."
      />
    </main>
  );
}
