import HeroSection from "@/components/sections/HeroSection/HeroSection";
import CTABannerSection from "@/components/sections/CTABannerSection/CTABannerSection";
import ServicesSection from "@/components/sections/ServicesSection/ServicesSection";
import ServiceTiersSection from "@/components/sections/ServiceTiersSection/ServiceTiersSection";
import WhatEStoreIncludesSection from "@/components/sections/WhatEStoreIncludesSection/WhatEStoreIncludesSection";
import WhyMeSection from "@/components/sections/WhyMeSection/WhyMeSection";
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
      <ServicesSection
        title="חנויות אינטרנטיות שמוכרות"
        subtitle="אני בונה חנויות WooCommerce עם חשיבה שיווקית, חוויית משתמש ותשתית יציבה לצמיחה."
        cards={["estore-pair", "portfolio-examples"]}
        variant="pair"
        sectionId="estore"
      />
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
      {/* <ProcessJourneySection showCTA /> */}
      <WhyMeSection />
      <CTABannerSection
        headline="מוכן להתחיל למכור אונליין?"
        sub="נתחיל בשיחה קצרה להבין מה מתאים לך."
      />
    </main>
  );
}
