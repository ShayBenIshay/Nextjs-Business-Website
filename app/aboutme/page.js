import HeroSection from "@/components/HeroSection/HeroSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";
import NiceToMeetSection from "@/components/NiceToMeetSection/NiceToMeetSection";
import HowIWorkSection from "@/components/HowIWorkSection/HowIWorkSection";
import WhyMeSection from "@/components/WhyMeSection/WhyMeSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import WhoIsItForSection from "@/components/WhoIsItForSection/WhoIsItForSection";

export default function AboutMePage() {
  return (
    <main>
      <HeroSection
        headline="קצת עליי."
        subtitle="אני עובד עם עסקים שרוצים יותר מאתר – פתרונות דיגיטליים שמביאים תוצאות לאורך זמן."
      />
      <NiceToMeetSection />
      <WhyMeSection />
      <HowIWorkSection showCTA title="איך אני עובד" noBackground={true} />
      <WhoIsItForSection />
      <ServicesSection />
      <CTABannerSection
        headline="בואו נבדוק אם מתאים לנו לעבוד ביחד"
        sub="כל פרויקט מתחיל בשיחה קצרה להבין אם ואיך אפשר להתקדם."
      />
    </main>
  );
}
