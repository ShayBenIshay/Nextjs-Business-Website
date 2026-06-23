import styles from "./AdvancedServicesSection.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";

const services = [
  {
    title: "🚀 פיתוח SaaS / מערכות Web",
    description: "אפיון ופיתוח מערכות לפי צרכי העסק.",
    options: ["מערכות CRM", "שירותים בפיתוח אישי", "אוטומציות"],
    cta: "לפיתוח SaaS",
    href: "#saas",
  },
  {
    title: "🧠 פיתוח מותאם אישית",
    description: "כשאין פתרון מדף – מתכננים ומפתחים פתרון ייעודי.",
    options: ["תוספי WordPress", "מערכות Web", "אוטומציות ו־APIs"],
    cta: "לפיתוח מותאם",
    href: "#custom-dev",
  },
];

function ServiceCard({ service }) {
  return (
    <OpenContactModalButton className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <div className={styles.cardBody}>
          <p className={styles.cardDescription}>{service.description}</p>
          <ul className={styles.optionsList}>
            {service.options.map((opt) => (
              <li key={opt}>{opt}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.cardFooter}>
        {service.badge && <p className={styles.badge}>{service.badge}</p>}
        <button type="button" className="btn-primary">
          {service.cta}
        </button>
      </div>
    </OpenContactModalButton>
  );
}

export default function AdvancedServicesSection() {
  return (
    <section id="advanced-services" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.headline}>פיתוח מתקדם ופתרונות מותאמים</h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
