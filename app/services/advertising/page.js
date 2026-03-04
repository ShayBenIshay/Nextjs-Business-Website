import HeroSection from "@/components/HeroSection/HeroSection";
import ComingSoonSection from "@/components/ComingSoonSection/ComingSoonSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";

export default function AdvertisingPage() {
  return (
    <main>
      <HeroSection
        headline="פרסום דיגיטלי שמביא תוצאות"
        subtitle="קמפיינים ממוקדים בגוגל ובמדיה חברתית שמייצרים לידים ומכירות."
      />
      <ComingSoonSection />
      <CTABannerSection
        headline="מוכן להתחיל לפרסם?"
        sub="נתחיל בשיחה קצרה להבין מה מתאים לך."
      />
    </main>
  );
}
