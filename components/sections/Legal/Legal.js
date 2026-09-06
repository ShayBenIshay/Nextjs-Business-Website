import styles from "./Legal.module.css";

export default function Legal({ title, lastUpdated, children }) {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={`h2 ${styles.title}`}>{title}</h1>
          {lastUpdated && (
            <p className={styles.updated}>עודכן לאחרונה: {lastUpdated}</p>
          )}
        </div>
      </header>

      <article className={styles.content}>
        <div className={styles.contentInner}>{children}</div>
      </article>
    </main>
  );
}
