import styles from "./WhyMeSection.module.css";

const imgSupport = "/assets/support-icon.png";
const imgTransparent = "/assets/transparent-icon.png";
const imgProfessional = "/assets/professional-icon.png";
const imgGrowth = "/assets/growth-icon.png";
const imgResponsibility = "/assets/direct-communication-icon.png";
// const imgCustomDevelopment ="/assets/custom-development-icon.png";
const imgCustomDevelopment = "/assets/custom-development-icon.png";
// const imgLongTermSolutions ="/assets/long-term-solutions-icon.png";
const imgLongTermSolutions = "/assets/long-term-icon.png";
// const imgDirectCommunication ="/assets/direct-communication-icon.png";
const imgDirectCommunication = "/assets/accountability-icon.png";
const items = [
  { src: imgSupport, label: "ליווי אחרי העלייה לאוויר" },
  { src: imgTransparent, label: "עבודה שקופה וברורה" },
  { src: imgProfessional, label: "מסודר ומקצועי" },
  { src: imgGrowth, label: "חשיבה שיווקית" },
  { src: imgResponsibility, label: "אחריות מלאה" },
  { src: imgCustomDevelopment, label: "פיתוח מותאם אישית" },
  { src: imgLongTermSolutions, label: "פתרונות לטווח ארוך" },
  { src: imgDirectCommunication, label: "תקשורת ישירה" },
];

export default function WhyMeSection() {
  return (
    <section className={styles.section} id="why-me">
      <div className={styles.inner}>
        <h2 className={styles.headline}>למה לעבוד איתי?</h2>
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
