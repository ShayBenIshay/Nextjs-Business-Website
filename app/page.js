import HeroSection from "@/components/sections/HeroSection/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection/ServicesSection";
import ServiceTiersSection from "@/components/sections/ServiceTiersSection/ServiceTiersSection";
import PortfolioSection from "@/components/sections/PortfolioSection/PortfolioSection";
import PartnershipSection from "@/components/sections/PartnershipSection/PartnershipSection";
import ProcessJourneySection from "@/components/sections/ProcessJourneySection/ProcessJourneySection";
import CTABannerSection from "@/components/sections/CTABannerSection/CTABannerSection";
import { estorePlans } from "@/lib/services";

export const metadata = {
  title: "שי טק סולושנס | בניית אתרים, חנויות אינטרנטיות ופיתוח מותאם אישית",
  description:
    "בניית אתרים, חנויות אינטרנטיות, אחסון ופיתוחים אישיים. מתכנון ופיתוח ועד ניהול שוטף - הכל במקום אחד.",
  alternates: { canonical: "https://www.shaytechsolutions.com" },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ServiceTiersSection
        id="estore-plans-home"
        title="חנויות WooCommerce"
        subtitle="חנות אינטרנטית – בשלושה מסלולים ברורים"
        plans={estorePlans}
        expandable
        notesTitle="חשוב לדעת"
        notes={[
          "כל הדילים ניתנים לשדרוג",
          "ניתן לשלב תחזוקה, אחסון וליווי חודשי",
          "המחיר נקבע בהתאם להיקף ולצרכים (בשקיפות מלאה)",
        ]}
      />
      <PortfolioSection />
      <PartnershipSection />
      <ProcessJourneySection />
      <CTABannerSection />
    </main>
  );
}
