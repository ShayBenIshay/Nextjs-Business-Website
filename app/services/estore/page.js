import HeroSection from "@/components/HeroSection/HeroSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";
import SingleServiceSection from "@/components/SingleServiceSection/SingleServiceSection";
import EStoresSection from "@/components/EStoresSection/EStoresSection";
import WhatEStoreIncludesSection from "@/components/WhatEStoreIncludesSection/WhatEStoreIncludesSection";
import HowIWorkSection from "@/components/HowIWorkSection/HowIWorkSection";
import WhyMeSection from "@/components/WhyMeSection/WhyMeSection";

export default function EStorePage() {
  return (
    <main>
      <HeroSection
        headline="בונים חנויות אינטרנטיות שמביאות תוצאות."
        subtitle="חנויות WooCommerce שנבנות עם חשיבה שיווקית, חוויית משתמש ותשתית יציבה לצמיחה."
      />
      <SingleServiceSection tag="estore" />
      <EStoresSection
        title="שלושה מסלולים - לפי רמת הצורך שלך"
        subtitle="בנייה וניהול חנות אינטרנטית בשלושה מסלולים שונים"
      />
      <WhatEStoreIncludesSection />
      <HowIWorkSection showCTA />
      <WhyMeSection />
      <CTABannerSection
        headline="מוכן להתחיל למכור אונליין?"
        sub="נתחיל בשיחה קצרה להבין מה מתאים לך."
      />
    </main>
  );
}
