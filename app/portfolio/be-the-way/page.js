import HeroSection from "@/components/HeroSection/HeroSection";
import ComingSoonSection from "@/components/ComingSoonSection/ComingSoonSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";

export default function BeTheWayPage() {
  return (
    <main>
      <HeroSection
        headline="Be The Way – פיתוח מותאם אישית"
        subtitle="פיתוח פתרון דיגיטלי מותאם אישית שתומך בתהליך, בלקוחות ובצמיחה של העסק."
        btnOutline="חזרה לתיק העבודות"
        btnOutlineHref="/portfolio"
        btnPrimary="לתיאום שיחה"
      />
      <ComingSoonSection />
      <CTABannerSection
        headline="צריכים פתרון פיתוח מותאם אישית?"
        sub="נבנה יחד בדיוק את מה שהעסק שלכם צריך – מהרעיון ועד המוצר."
      />
    </main>
  );
}
