import HeroSection from "@/components/sections/HeroSection/HeroSection";

export const metadata = {
  title: 'צור קשר | שי טק סולושנס',
  description: 'צרו קשר לתיאום שיחת היכרות. בניית אתרים, חנויות אינטרנטיות, קידום ממומן ופיתוח תוכנה מותאם אישית.',
  alternates: { canonical: 'https://www.shaytechsolutions.com/contact' },
};
import CTABannerSection from "@/components/sections/CTABannerSection/CTABannerSection";
import ServicesSection from "@/components/sections/ServicesSection/ServicesSection";
import TalkToMeSection from "@/components/sections/TalkToMeSection/TalkToMeSection";
import ProcessJourneySection from "@/components/sections/ProcessJourneySection/ProcessJourneySection";

const afterContactSteps = [
  { icon: "/assets/introductionIcon.png", label: "נבין את הצורך שלכם" },
  { icon: "/assets/offerIcon.png", label: "נכין הצעת עבודה מסודרת" },
  { icon: "/assets/development-icon.png", label: "פיתוח הפיתרון המדויק לכם" },
  { icon: "/assets/growth-icon.png", label: "ליווי להמשך צמיחה" },
];

export default function ContactPage() {
  return (
    <main>
      <HeroSection
        headline="מתחילים כאן."
        subtitle="שיחה קצרה יכולה להיות הצעד הראשון לאתר או מערכת שעובדים בשביל העסק שלך."
      />
      <TalkToMeSection />
      <ServicesSection />
      <ProcessJourneySection
        title="מה קורה אחרי שמשאירים פרטים?"
        steps={afterContactSteps}
        noBackground
      />
      <CTABannerSection
        headline="רוצים להיות הפרויקט הבא?"
        sub="כל פרויקט מתחיל בשיחה קצרה להבין אם ואיך אפשר לעבוד יחד."
      />
    </main>
  );
}
