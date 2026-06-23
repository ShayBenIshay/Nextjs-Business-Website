import styles from "./ServiceTiersSection.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";

export default function ServiceTiersSection({
  id = "plans",
  title,
  subtitle,
  plans,
  notes,
  tinted = true,
}) {
  return (
    <section
      className={`${styles.section} ${tinted ? styles.tinted : ""}`}
      id={id}
    >
      <div className={styles.inner}>
        {(title || subtitle) && (
          <div className={styles.titleGroup}>
            {title && <h2 className={`h2 ${styles.title}`}>{title}</h2>}
            {subtitle && (
              <p className={`h3 ${styles.subtitle}`}>{subtitle}</p>
            )}
          </div>
        )}

        <div className={styles.cards}>
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`${styles.card} ${plan.highlighted ? styles.highlighted : ""}`}
            >
              {plan.badge && (
                <div className={styles.badge}>{plan.badge}</div>
              )}
              <div className={styles.cardBody}>
                <p className={styles.planTitle}>{plan.title}</p>
                <p className={styles.price}>
                  {plan.price}
                  {plan.priceNote && (
                    <span className={styles.priceNote}> {plan.priceNote}</span>
                  )}
                </p>
                <p className={styles.description}>{plan.description}</p>
                <div className={styles.featureList}>
                  <p className={styles.featureLabel}>מה כלול:</p>
                  <ul>
                    {plan.included.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                {plan.suitable && (
                  <p className={styles.suitable}>{plan.suitable}</p>
                )}
                {plan.focus && (
                  <p className={styles.focus}>{plan.focus}</p>
                )}
              </div>
              <div className={styles.cardFooter}>
                <OpenContactModalButton className={styles.cta}>
                  לפרטים ותיאום
                </OpenContactModalButton>
              </div>
            </div>
          ))}
        </div>

        {notes && notes.length > 0 && (
          <div className={styles.notes}>
            <ul>
              {notes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
