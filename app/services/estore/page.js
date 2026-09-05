import HeroSection from "@/components/HeroSection/HeroSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";
import SingleServiceSection from "@/components/SingleServiceSection/SingleServiceSection";
import ServiceTiersSection from "@/components/ServiceTiersSection/ServiceTiersSection";
import WhatEStoreIncludesSection from "@/components/WhatEStoreIncludesSection/WhatEStoreIncludesSection";
import WhyMeSection from "@/components/WhyMeSection/WhyMeSection";
import { estorePlans } from "@/lib/services";

export const metadata = {
  title: "בניית חנות אינטרנטית | WooCommerce | שי טק סולושנס",
  description:
    "בניית חנות אינטרנטית מקצועית עם WooCommerce. עיצוב ממיר, חוויית משתמש מעולה ותשתית יציבה לצמיחה. קבלו הצעת מחיר עכשיו.",
  alternates: {
    canonical: "https://www.shaytechsolutions.com/services/estore",
  },
};

export default function EStorePage() {
  return (
    <main>
      <HeroSection
        headline="בונים חנויות אינטרנטיות שמביאות תוצאות."
        subtitle="חנויות WooCommerce שנבנות עם חשיבה שיווקית, חוויית משתמש ותשתית יציבה לצמיחה."
      />
      <SingleServiceSection tag="estore" />
      <WhatEStoreIncludesSection />
      <ServiceTiersSection
        id="estore-plans"
        title="שלושה מסלולים - לפי רמת הצורך שלך"
        subtitle="בנייה וניהול חנות אינטרנטית בשלושה מסלולים שונים"
        plans={estorePlans}
        expandable
        notesTitle="חשוב לדעת"
        notes={[
          "כל הדילים ניתנים לשדרוג",
          "ניתן לשלב תחזוקה, אחסון וליווי חודשי",
          "המחיר נקבע בהתאם להיקף ולצרכים (בשקיפות מלאה)",
        ]}
      />
      {/* <HowIWorkSection showCTA /> */}
      <WhyMeSection />
      <CTABannerSection
        headline="מוכן להתחיל למכור אונליין?"
        sub="נתחיל בשיחה קצרה להבין מה מתאים לך."
      />
    </main>
  );
}
