import HeroSection from "@/components/HeroSection/HeroSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ServiceTiersSection from "@/components/ServiceTiersSection/ServiceTiersSection";
import PortfolioSection from "@/components/PortfolioSection/PortfolioSection";
import WhyMeSection from "@/components/WhyMeSection/WhyMeSection";
import HowIWorkSection from "@/components/HowIWorkSection/HowIWorkSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";
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
      <WhyMeSection />
      <HowIWorkSection />
      <CTABannerSection />
    </main>
  );
}
