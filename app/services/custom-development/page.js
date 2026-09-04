import HeroSection from "@/components/HeroSection/HeroSection";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";
import ServiceTiersSection from "@/components/ServiceTiersSection/ServiceTiersSection";
import WhyMeSection from "@/components/WhyMeSection/WhyMeSection";
import { customDevRetainers } from "@/lib/services";
import styles from "./custom-development.module.css";

export const metadata = {
  title: "פיתוח תוכנה מותאם אישית | מפתח Full Stack | שי טק סולושנס",
  description:
    "פיתוח תוכנה בהתאמה אישית: ריטיינר חודשי, פרויקטים מורכבים, פלאגינים, אוטומציות ומערכות. React, Node.js, Python, WordPress.",
  alternates: {
    canonical: "https://www.shaytechsolutions.com/services/custom-development",
  },
};

export default function CustomDevelopmentPage() {
  return (
    <main>
      <HeroSection
        headline="פיתוח מותאם לצרכים שלכם - לא לכולם."
        subtitle="מבוטים ואוטומציות ועד מערכות מורכבות. React, Node.js, Python, WordPress ו-WooCommerce."
      />
      <ServiceTiersSection
        title="ריטיינר פיתוח חודשי"
        subtitle="שעות פיתוח חודשיות ללא התחייבות לפרויקט מסוים"
        plans={customDevRetainers}
        notes={[
          "שעות אינן מצטברות חודש לחודש",
          "כל טכנולוגיה - React, Next.js, Node.js, Python, PHP, WordPress",
          "אפשר לשנות חבילה בכל חודש לפי הצורך",
        ]}
      />
      <section className={styles.consultSection}>
        <div className={styles.consultInner}>
          <div className={styles.consultContent}>
            <h2 className={`h2 ${styles.consultTitle}`}>פרויקט מותאם אישית</h2>
            <p className={`h3 ${styles.consultSubtitle}`}>
              אפיון, עיצוב, פיתוח או שיפוץ - כל גודל ותקציב
            </p>
            <ul className={styles.consultList}>
              <li>בוט WhatsApp, אוטומציות ואינטגרציות</li>
              <li>מערכות CRM ו-ERP מותאמות</li>
              <li>SaaS, דשבורדים ופלטפורמות</li>
              <li>פלאגינים ותוספות ל-WordPress / WooCommerce</li>
              <li>כלי פייתון, ML ואנליזה</li>
            </ul>
            <div className={styles.consultPricing}>
              <p className={styles.consultPrice}>
                שיחת התאמה ראשונית
                <span className={styles.consultPriceAmount}>₪250</span>
              </p>
              <p className={styles.consultPriceNote}>
                שיחה של 60–90 דקות לאפיון הפרויקט. הסכום מוחזר במלואו בסגירת
                עסקה.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhyMeSection />
      <CTABannerSection
        headline="יש לכם רעיון? בואו נבנה אותו."
        sub="שיחת התאמה של 20 דקות - חינם, ללא התחייבות. אחזור אליכם תוך 24 שעות."
      />
    </main>
  );
}
