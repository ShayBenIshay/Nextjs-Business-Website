import HeroSection from "@/components/HeroSection/HeroSection";
import ComingSoonSection from "@/components/ComingSoonSection/ComingSoonSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";

export default function LapaPage() {
  return (
    <main>
      <HeroSection
        imgScreen="/assets/Portfolio-Lapa.png"
        headline="LAPA – שיפוץ אתר WordPress"
        subtitle="שיפוץ מלא של אתר WordPress – מהירות, עיצוב מחודש ושיפור חוויית המשתמש לתוצאות טובות יותר."
        btnOutline="חזרה לתיק העבודות"
        btnOutlineHref="/portfolio"
        btnPrimary="לתיאום שיחה"
      />
      <ComingSoonSection />
      <CTABannerSection
        headline="האתר שלכם צריך שיפוץ?"
        sub="נאבחן, נתכנן ונבצע שיפוץ מלא שיחזיר את האתר לעבוד בשבילכם."
      />
    </main>
  );
}
