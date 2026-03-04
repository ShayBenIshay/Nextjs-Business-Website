import HeroSection from "@/components/HeroSection/HeroSection";
import ComingSoonSection from "@/components/ComingSoonSection/ComingSoonSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";

export default function HayotPage() {
  return (
    <main>
      <HeroSection
        headline="Hayot – שיפוץ אתר WordPress"
        subtitle="שיפוץ אתר WordPress לעסק חי ופעיל – שיפור ביצועים, עיצוב עדכני ותשתית יציבה לצמיחה."
        btnOutline="חזרה לתיק העבודות"
        btnOutlineHref="/portfolio"
        btnPrimary="לתיאום שיחה"
      />
      <ComingSoonSection />
      <CTABannerSection
        headline="רוצים לשפץ את האתר שלכם?"
        sub="נשדרג את האתר הקיים שלכם לרמה הבאה – מהירות, עיצוב ותוצאות."
      />
    </main>
  );
}
