import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    id: "t1",
    quote:
      "[ציטוט של לקוח - כאן יופיע מה שהלקוח אמר על השירות, על התהליך ועל התוצאה שקיבל.]",
    name: "[שם הלקוח]",
    business: "[שם העסק]",
  },
  {
    id: "t2",
    quote:
      "[ציטוט של לקוח - כאן יופיע מה שהלקוח אמר על השירות, על התהליך ועל התוצאה שקיבל.]",
    name: "[שם הלקוח]",
    business: "[שם העסק]",
  },
  {
    id: "t3",
    quote:
      "[ציטוט של לקוח - כאן יופיע מה שהלקוח אמר על השירות, על התהליך ועל התוצאה שקיבל.]",
    name: "[שם הלקוח]",
    business: "[שם העסק]",
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.titleGroup}>
          <h2 className={`h2 ${styles.title}`}>מה הלקוחות אומרים</h2>
        </div>
        <div className={styles.cards}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.card}>
              <p className={styles.quoteIcon}>&ldquo;</p>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.business}>{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
