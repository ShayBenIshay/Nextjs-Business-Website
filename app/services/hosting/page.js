import HeroSection from "@/components/HeroSection/HeroSection";
import ComingSoonSection from "@/components/ComingSoonSection/ComingSoonSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";

export default function HostingPage() {
  return (
    <main>
      <HeroSection
        headline="אחסון אתרים מהיר ואמין"
        subtitle="תשתית אחסון מקצועית עם ביצועים גבוהים, אבטחה ותמיכה שוטפת."
      />
      <ComingSoonSection />
      <CTABannerSection
        headline="מוכן לעבור לאחסון מקצועי?"
        sub="נתחיל בשיחה קצרה להבין מה מתאים לך."
      />
    </main>
  );
}
