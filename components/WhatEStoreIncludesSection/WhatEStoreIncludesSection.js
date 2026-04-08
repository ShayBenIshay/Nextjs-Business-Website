import styles from "./WhatEStoreIncludesSection.module.css";

const mobileIcon = "/assets/mobile-icon.png";
const paymentIcon = "/assets/payment-icon.png";
const storeManagementIcon = "/assets/store-management-icon.png";
const storeExpansionIcon = "/assets/store-management-icon.png";

const items = [
  { src: mobileIcon, label: "התאמה מלאה למובייל" },
  { src: paymentIcon, label: "סליקה ומשלוחים" },
  { src: storeManagementIcon, label: "הדרכה לניהול החנות" },
  { src: storeExpansionIcon, label: "מוכנות להתרחבות עתידית" },
];

export default function WhatEStoreIncludesSection() {
  return (
    <section className={styles.section} id="whats-included-estore">
      <div className={styles.inner}>
        <h2 className={styles.headline}>מה כל חנות כוללת? </h2>
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
