import HeroSection from "@/components/HeroSection/HeroSection";
import ComingSoonSection from "@/components/ComingSoonSection/ComingSoonSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";

export default function NewsletterClubPage() {
  return (
    <main>
      <HeroSection
        imgScreen="/assets/Portfolio-NewsletterClub.webp"
        headline="Newsletter Club – תוסף SaaS לניהול רשימות תפוצה"
        subtitle="תוסף מותאם אישית שמאפשר ניהול מנויים, שליחת עדכונים ובניית קהילה – הכל בממשק פשוט וחכם."
        btnOutline="חזרה לתיק העבודות"
        btnOutlineHref="/portfolio"
        btnPrimary="לתיאום שיחה"
      />
      <ComingSoonSection />
      <CTABannerSection
        headline="רוצים תוסף SaaS משלכם?"
        sub="נבנה יחד את הכלי שיתאים בדיוק לצרכי העסק שלכם."
      />
    </main>
  );
}
