import HeroSection from "@/components/sections/HeroSection/HeroSection";

export const metadata = {
  title: 'קצת עליי | שי טק סולושנס',
  description: 'בונה אתרים ומפתח תוכנה עצמאי. עובד עם עסקים קטנים ובינוניים על בניית אתרים, חנויות אינטרנטיות, קידום ממומן ופיתוח מותאם אישית.',
  alternates: { canonical: 'https://www.shaytechsolutions.com/aboutme' },
};
import CTABannerSection from "@/components/sections/CTABannerSection/CTABannerSection";
import NiceToMeetSection from "@/components/sections/NiceToMeetSection/NiceToMeetSection";
import ProcessJourneySection from "@/components/sections/ProcessJourneySection/ProcessJourneySection";
import WhyMeSection from "@/components/sections/WhyMeSection/WhyMeSection";
import ServicesSection from "@/components/sections/ServicesSection/ServicesSection";
import WhoIsItForSection from "@/components/sections/WhoIsItForSection/WhoIsItForSection";

export default function AboutMePage() {
  return (
    <main>
      <HeroSection
        headline="קצת עליי."
        subtitle="אני עובד עם עסקים שרוצים יותר מאתר – פתרונות דיגיטליים שמביאים תוצאות לאורך זמן."
      />
      <NiceToMeetSection />
      <WhyMeSection />
      <ProcessJourneySection showCTA title="איך אני עובד" noBackground={true} />
      <WhoIsItForSection />
      <ServicesSection />
      <CTABannerSection
        headline="בואו נבדוק אם מתאים לנו לעבוד ביחד"
        sub="כל פרויקט מתחיל בשיחה קצרה להבין אם ואיך אפשר להתקדם."
      />
    </main>
  );
}
