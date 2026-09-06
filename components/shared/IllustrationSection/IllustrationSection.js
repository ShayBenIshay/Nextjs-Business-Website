import styles from "./IllustrationSection.module.css";

export default function IllustrationSection({
  id,
  title,
  subtitle,
  maxWidth = "460px",
  children,
}) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.inner}>
        <h2 className={`h2 ${styles.title}`}>{title}</h2>
        <p className={`h3 ${styles.subtitle}`}>{subtitle}</p>
        <div
          className={styles.illustrationWrap}
          style={{ "--illustration-max-width": maxWidth }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
