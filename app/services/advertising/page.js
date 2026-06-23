import HeroSection from "@/components/HeroSection/HeroSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";
import ServiceTiersSection from "@/components/ServiceTiersSection/ServiceTiersSection";
import WhyMeSection from "@/components/WhyMeSection/WhyMeSection";
import { seoPlans, campaignPlans } from "@/lib/services";

export const metadata = {
  title: "קידום ממומן ו-SEO | גוגל, פייסבוק, אינסטגרם | שי טק סולושנס",
  description:
    "קידום אורגני (SEO) וקמפיינים ממומנים בגוגל, פייסבוק ואינסטגרם. מחירים ברורים ותוצאות מדידות.",
  alternates: {
    canonical: "https://www.shaytechsolutions.com/services/advertising",
  },
};

export default function AdvertisingPage() {
  return (
    <main>
      <HeroSection
        headline="פרסום שמביא לקוחות. לא רק קליקים."
        subtitle="SEO אורגני וקמפיינים ממומנים שנמדדים בלידים ובמכירות - לא בנתונים ריקים."
      />
      <ServiceTiersSection
        id="seo-plans"
        title="קידום אורגני - SEO"
        subtitle="תשלום חד פעמי. תוצאות לטווח ארוך."
        plans={seoPlans}
        notes={[
          "SEO הוא השקעה ארוכת טווח - תוצאות ראשוניות בדרך כלל אחרי 60–90 יום",
          "ניתן לשלב SEO עם קמפיין ממומן לכיסוי מקסימלי",
        ]}
      />
      <ServiceTiersSection
        id="campaign-plans"
        title="קמפיינים ממומנים"
        subtitle="גוגל, פייסבוק, אינסטגרם, TikTok - ניהול חודשי מלא"
        plans={campaignPlans}
        tinted={false}
        notes={[
          "המחיר הוא דמי ניהול בלבד - תקציב הפרסום בנוסף",
          "מינימום 3 חודשי עבודה לאופטימיזציה אפקטיבית",
          "כולל דוח ביצועים חודשי שקוף",
        ]}
      />
      <WhyMeSection />
      <CTABannerSection
        headline="מוכנים להתחיל לפרסם?"
        sub="שיחת ייעוץ של 20 דקות - חינם, ללא התחייבות. אחזור אליכם תוך 24 שעות."
      />
    </main>
  );
}
