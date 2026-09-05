import styles from "./IconRowSection.module.css";

export default function IconRowSection({ id, title, items, iconSize = 64, itemWidth }) {
  return (
    <section
      className={styles.section}
      id={id}
      style={{
        "--icon-size": `${iconSize}px`,
        ...(itemWidth ? { "--item-width": `${itemWidth}px` } : {}),
      }}
    >
      <div className={styles.inner}>
        {title && <h2 className={styles.headline}>{title}</h2>}
        <div className={styles.iconsRow}>
          {items.map((item) => (
            <div key={item.label} className={styles.iconItem}>
              <div className={styles.iconWrap}>
                <img src={item.src} alt={item.label} className={styles.icon} />
              </div>
              <p className={styles.iconLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
