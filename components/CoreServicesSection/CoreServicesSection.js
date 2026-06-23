import Link from "next/link";
import styles from "./CoreServicesSection.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";

const services = [
  {
    emoji: "🛒",
    title: "חנויות אינטרנטיות",
    description:
      "חנויות WooCommerce ממוקדות מכירה עם חשיבה שיווקית ותשתית לצמיחה.",
    options: ["חנות מתחילה", "חנות מתקדמת", "חנות דלוקס"],
    cta: "לתיאום שיחה",
    ctaLink: "לכל החבילות",
    href: "/services/estore",
  },
  {
    emoji: "🌐",
    title: "בניית אתרים",
    description:
      "דפי תדמית, וורדפרס, דפי נחיתה ושיפוץ אתרים. React, Vite או WordPress.",
    options: ["דפי תדמית", "דפי נחיתה", "שיפוץ אתר קיים"],
    cta: "לתיאום שיחה",
    ctaLink: "לכל האפשרויות",
    href: "/services/website",
  },
  {
    emoji: "🧩",
    title: "אחסון וניהול",
    description: "אחסון, תחזוקה שוטפת וניהול מקצועי - שקט נפשי לאתר שלך.",
    options: ["אחסון בסיסי", "אחסון + ניהול", "אחסון + שעות פיתוח"],
    cta: "לתיאום שיחה",
    ctaLink: "לחבילות אחסון",
    href: "/services/hosting",
  },
  {
    emoji: "🧠",
    title: "פיתוח מותאם אישית",
    description: "כשאין פתרון מדף - מתכננים ומפתחים בדיוק מה שצריך.",
    options: ["מערכות Web ו-SaaS", "תוספי WordPress", "אוטומציות ו-APIs"],
    cta: "לתיאום שיחה",
    ctaLink: "לפרויקטים",
    href: "/services/custom-development",
  },
];

function ServiceCard({ service }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>
          {service.emoji} {service.title}
        </h3>
        <div className={styles.cardBody}>
          <p className={styles.cardDescription}>{service.description}</p>
          <div className={styles.optionsBlock}>
            <p className={styles.optionsHeading}>מה האפשרויות?</p>
            <ul className={styles.optionsList}>
              {service.options.map((opt) => (
                <li key={opt}>{opt}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <OpenContactModalButton className="btn-primary">
          {service.cta}
        </OpenContactModalButton>
        <Link href={service.href} className="btn-secondary">
          {service.ctaLink}
        </Link>
      </div>
    </div>
  );
}

export default function CoreServicesSection() {
  return (
    <section className={styles.section} id="core-services">
      <div className={styles.inner}>
        <h2 className={styles.headline}>שירותים</h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
