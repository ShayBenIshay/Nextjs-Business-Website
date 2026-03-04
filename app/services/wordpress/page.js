import HeroSection from "@/components/HeroSection/HeroSection";
import ComingSoonSection from "@/components/ComingSoonSection/ComingSoonSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";

export default function WordpressPage() {
  return (
    <main>
      <HeroSection
        headline="בניית אתרי וורדפרס מקצועיים"
        subtitle="אתרי וורדפרס מהירים, מאובטחים ומותאמים לצרכי העסק שלך."
      />
      <ComingSoonSection />
      <CTABannerSection
        headline="מוכן לבנות אתר וורדפרס?"
        sub="נתחיל בשיחה קצרה להבין מה מתאים לך."
      />
    </main>
  );
}
