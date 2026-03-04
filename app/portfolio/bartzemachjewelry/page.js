import HeroSection from "@/components/HeroSection/HeroSection";
import ComingSoonSection from "@/components/ComingSoonSection/ComingSoonSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";

export default function BarTzemachJewelryPage() {
  return (
    <main>
      <HeroSection
        imgScreen="/assets/Portfolio-BarTzemach.png"
        headline="Bar Tzemach Jewelry – חנות תכשיטים אינטרנטית"
        subtitle="חנות אינטרנטית מלאה לעסק תכשיטים – עם ניהול מוצרים, סליקה מקצועית וחוויית קנייה נוחה."
        btnOutline="חזרה לתיק העבודות"
        btnOutlineHref="/portfolio"
        btnPrimary="לתיאום שיחה"
      />
      <ComingSoonSection />
      <CTABannerSection
        headline="רוצים חנות אינטרנטית מקצועית?"
        sub="נבנה לכם חנות שמוכרת – מעיצוב ועד סליקה, הכל במקום אחד."
      />
    </main>
  );
}
