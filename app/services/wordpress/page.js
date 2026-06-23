import HeroSection from "@/components/HeroSection/HeroSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";
import ServiceTiersSection from "@/components/ServiceTiersSection/ServiceTiersSection";
import WhyMeSection from "@/components/WhyMeSection/WhyMeSection";
import { wordpressPlans } from "@/lib/services";

export const metadata = {
  title: "בניית אתר וורדפרס מקצועי | בונה אתרים | שי טק סולושנס",
  description:
    "בניית אתרי וורדפרס לעסקים. שיפוץ, בנייה מחדש ודפי נחיתה. מחירים ברורים, תוצאות שניתן למדוד.",
  alternates: {
    canonical: "https://www.shaytechsolutions.com/services/wordpress",
  },
};

export default function WordpressPage() {
  return (
    <main>
      <HeroSection
        headline="אתרי וורדפרס שעובדים בשבילך."
        subtitle="שיפוץ, בנייה מחדש או דף נחיתה ממיר - לפי מה שהעסק שלך צריך עכשיו."
      />
      <ServiceTiersSection
        title="מסלולי וורדפרס"
        subtitle="מחירים שקופים. תוצאות ברורות."
        plans={wordpressPlans}
        notes={[
          "כל המסלולים כוללים תמיכה בהשקה",
          "ניתן לשלב אחסון וליווי חודשי",
          "לא בטוחים מה מתאים לכם? נגלה יחד בשיחה חינם",
        ]}
      />
      <WhyMeSection />
      <CTABannerSection
        headline="מוכנים לאתר שעושה עבודה?"
        sub="שיחת ייעוץ של 20 דקות - חינם, ללא התחייבות. אחזור אליכם תוך 24 שעות."
      />
    </main>
  );
}
