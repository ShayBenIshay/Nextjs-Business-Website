import HeroSection from "@/components/HeroSection/HeroSection";

export const metadata = {
  title: 'צור קשר | שי טק סולושנס',
  description: 'צרו קשר לתיאום שיחת היכרות. בניית אתרים, חנויות אינטרנטיות, קידום ממומן ופיתוח תוכנה מותאם אישית.',
  alternates: { canonical: 'https://www.shaytechsolutions.com/contact' },
};
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import TalkToMeSection from "@/components/TalkToMeSection/TalkToMeSection";
import HowIWorkSection from "@/components/HowIWorkSection/HowIWorkSection";

const afterContactSteps = [
  { img: "/assets/introductionIcon.png", label: "נבין את הצורך שלכם" },
  { img: "/assets/offerIcon.png", label: "נכין הצעת עבודה מסודרת" },
  { img: "/assets/development-icon.png", label: "פיתוח הפיתרון המדויק לכם" },
  { img: "/assets/growth-icon.png", label: "ליווי להמשך צמיחה" },
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
      <HowIWorkSection
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
