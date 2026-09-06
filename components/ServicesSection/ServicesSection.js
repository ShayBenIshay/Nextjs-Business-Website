import styles from "./ServicesSection.module.css";
import ServiceLottieCard from "@/components/ServiceLottieCard/ServiceLottieCard";
import { serviceCards } from "@/lib/serviceCards";

const defaultCards = [
  "estore",
  "website-improve",
  "hosting",
  "custom-development",
  "portfolio-examples",
];

export default function ServicesSection({
  title = "בונה אתרים, חנויות ומערכות שעובדות בשבילך",
  subtitle = "ליווי מלא: מתכנון, דרך פיתוח מקצועי ועד ניהול שוטף ופרסום.",
  cards = defaultCards,
  variant = "grid",
  sectionId = "services",
}) {
  const selectedCards = cards
    .map((id) => serviceCards.find((card) => card.id === id))
    .filter(Boolean);

  return (
    <section className={styles.section} id={sectionId}>
      <div className={styles.inner}>
        <div className={styles.titleGroup}>
          <h2 className={`h2 ${styles.headline}`}>{title}</h2>
          <p className={`h3 ${styles.subtitle}`}>{subtitle}</p>
        </div>
        <div
          className={`${styles.grid} ${variant === "pair" ? styles.gridPair : ""}`}
        >
          {selectedCards.map((card) => (
            <ServiceLottieCard key={card.id} service={card} styles={styles} />
          ))}
        </div>
      </div>
    </section>
  );
}
