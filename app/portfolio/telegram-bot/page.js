import HeroSection from "@/components/HeroSection/HeroSection";
import ComingSoonSection from "@/components/ComingSoonSection/ComingSoonSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";

export default function TelegramBotPage() {
  return (
    <main>
      <HeroSection
        headline="Telegram Bot – בוט אוטומציה מותאם אישית"
        subtitle="פיתוח בוט טלגרם חכם שמבצע אוטומציות, מנהל תהליכים ומגיב ללקוחות – בדיוק לפי הצרכים שלכם."
        btnOutline="חזרה לתיק העבודות"
        btnOutlineHref="/portfolio"
        btnPrimary="לתיאום שיחה"
      />
      <ComingSoonSection />
      <CTABannerSection
        headline="צריכים בוט מותאם אישית?"
        sub="נפתח עבורכם פתרון אוטומציה שחוסך זמן ומגדיל יעילות."
      />
    </main>
  );
}
