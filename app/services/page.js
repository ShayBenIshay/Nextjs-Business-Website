import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import CoreServicesSection from "@/components/CoreServicesSection/CoreServicesSection";
import PartnershipSection from "@/components/PartnershipSection/PartnershipSection";

export const metadata = {
  title: "שירותים | בניית אתרים, חנויות ופיתוח מותאם | שי טק סולושנס",
  description:
    "חנויות אינטרנטיות, בניית אתרי תדמית ונחיתה, אחסון וניהול ופיתוח תוכנה מותאם אישית - הכל במקום אחד.",
  alternates: { canonical: "https://www.shaytechsolutions.com/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <HeroSection
        headline="כל מה שהעסק שלך צריך כדי לגדול אונליין."
        subtitle="חנויות, אתרים, אחסון ופיתוחים מותאמים - הכל במקום אחד."
        imgScreen="/assets/storeLottie.png"
        btnOutline="רוצה לשמוע עוד"
      />
      <CoreServicesSection />
      <PartnershipSection variant="lighthouse" />
      <CTABannerSection
        headline="לא בטוח מה מתאים?"
        sub="בשיחה קצרה נבין את הצורך ונכוון לפתרון הנכון."
      />
    </main>
  );
}
