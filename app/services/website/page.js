import HeroSection from "@/components/HeroSection/HeroSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";
import ServiceTiersSection from "@/components/ServiceTiersSection/ServiceTiersSection";
import {
  websiteRenovationPlans,
  websiteLandingPlans,
  websiteBrandingPlans,
} from "@/lib/services";

export const metadata = {
  title: "בניית אתרים מקצועית | דפי תדמית, וורדפרס ודפי נחיתה | שי טק סולושנס",
  description:
    "בניית אתרי תדמית, וורדפרס, דפי נחיתה ואתרי React. שיפוץ אתרים קיימים ובנייה מחדש. מחירים שקופים, תוצאות שניתן למדוד.",
  alternates: {
    canonical: "https://www.shaytechsolutions.com/services/website",
  },
};

export default function WebsitePage() {
  return (
    <main>
      <HeroSection
        headline="אתר שעובד בשבילך - לא רק נראה יפה."
        subtitle="דפי תדמית, וורדפרס, דפי נחיתה ופיתוח React. שיפוצים ובנייה מחדש."
      />

      <ServiceTiersSection
        title="שיפוץ אתרים קיימים"
        subtitle="יש לכם אתר - בואו נגרום לו לעבוד."
        plans={websiteRenovationPlans}
        notes={[
          "מתאים לאתרי WordPress ואתרים קיימים בכל פלטפורמה",
          "כוללים תמיכה בהשקה",
          "לא בטוחים מה מתאים? נגלה יחד בשיחה חינם",
        ]}
      />

      <ServiceTiersSection
        title="דפי נחיתה"
        subtitle="דף אחד. מטרה אחת. תוצאות."
        plans={websiteLandingPlans}
        tinted={false}
        notes={["המחיר הסופי תלוי בהיקף הפרויקט", "ניתן לשלב עם קמפיין פרסומי"]}
      />

      <ServiceTiersSection
        title="דפי תדמית"
        subtitle="נוכחות דיגיטלית שמייצגת את העסק שלך."
        plans={websiteBrandingPlans}
        notes={[
          "ניתן לבנות בוורדפרס, React/Vite או כל פלטפורמה מתאימה",
          "כל המסלולים כוללים הדרכה לניהול עצמאי",
          "שאלות? שיחת ייעוץ חינם ללא התחייבות",
        ]}
      />

      <CTABannerSection
        headline="מוכנים לאתר שעושה עבודה?"
        sub="שיחת ייעוץ של 20 דקות - חינם, ללא התחייבות. אחזור אליכם תוך 24 שעות."
      />
    </main>
  );
}
