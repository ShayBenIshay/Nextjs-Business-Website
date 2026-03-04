import Link from "next/link";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";
import styles from "./ComingSoonSection.module.css";

export default function ComingSoonSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.badge}>בקרוב</div>
        <h2 className={`h2 ${styles.title}`}>הדף הזה עדיין בבנייה</h2>
        <p className={`body-text ${styles.text}`}>
          אנחנו עובדים על זה ובקרוב יהיה כאן תוכן מלא.
          <br />
          בינתיים, תוכל לחזור לעמוד הבית או ליצור איתנו קשר לפרטים נוספים.
        </p>
        <div className={styles.actions}>
          <OpenContactModalButton className="btn-primary">
            צור קשר לפרטים
          </OpenContactModalButton>
          <Link href="/" className="btn-secondary">
            חזרה לעמוד הבית
          </Link>
        </div>
      </div>
    </section>
  );
}
