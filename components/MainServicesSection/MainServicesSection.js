import styles from "./MainServicesSection.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";

const services = [
  {
    emoji: "🛒",
    title: "אני רוצה למכור אונליין",
    subtitle: "הקמת חנות אינטרנטית ממוקדת מכירה",
    cta: "לחנויות אינטרנטיות",
    href: "/contact#talk-to-me",
  },
  {
    emoji: "🔧",
    title: "יש לי אתר - רוצה לשפץ",
    subtitle: "שיפוץ, תחזוקה והפיכת האתר לכלי עובד",
    cta: "לשיפוץ Wordpress",
    href: "/contact#talk-to-me",
  },
  {
    emoji: "🧠",
    title: "נדרש פיתוח מיוחד",
    subtitle: "מערכות, תוספים ו-SaaS בהתאמה אישית",
    cta: "לפיתוח מתקדם",
    href: "/contact#talk-to-me",
  },
];

function ServiceCard({ service }) {
  return (
    <OpenContactModalButton className={styles.card}>
      <div className={styles.cardContent}>
        <p className={styles.cardTitle} dir="rtl">
          {service.title} {service.emoji}
        </p>
        <p className={styles.cardSubtitle}>{service.subtitle}</p>
      </div>
      <button type="button" className="btn-primary">
        {service.cta}
      </button>
    </OpenContactModalButton>
  );
}

export default function MainServicesSection() {
  return (
    <section id="main-services" className={styles.section}>
      <div className={styles.inner}>
        <div className="section-title-center">
          <h2 className={`h2 ${styles.headline}`}>
            פתרונות דיגיטליים לפי הצרכים שלך
          </h2>
          <p className={`h3 ${styles.subtitle}`}>
            מחנויות אינטרנטיות, דרך שיפוץ אתרי WordPress ועד פיתוח מערכות
            מתקדמות – כל שירות בנוי כדי להביא תוצאה אמיתית.
          </p>
        </div>

        <div className={styles.cardsRow}>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
