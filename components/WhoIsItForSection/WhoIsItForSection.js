import styles from "./WhoIsItForSection.module.css";

// function WhoIsItForCard({ service }) {
//   return (
//     <div className={styles.card}>
//       <div className={styles.cardContent}>
//         <h3 className={styles.cardTitle}>{service.title}</h3>
//         <div className={styles.cardBody}>
//           <p className={styles.cardDescription}>{service.description}</p>
//           <ul className={styles.optionsList}>
//             {service.options.map((opt) => (
//               <li key={opt}>{opt}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className={styles.cardFooter}>
//         {service.badge && <p className={styles.badge}>{service.badge}</p>}
//         <a href={service.href} className={styles.cardCta}>
//           {service.cta}
//         </a>
//       </div>
//     </div>
//   );
// }

export default function WhoIsItForSection() {
  return (
    <section className={styles.section} id="advanced-services">
      <div className={styles.inner}>
        <h2 className={styles.headline}>למי זה מתאים?</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>✖ פחות מתאים אם:</h3>
            <ul className={styles.optionsList}>
              <li>מי שמחפש פתרון הכי זול</li>
              <li>פרויקטים בלי אפיון</li>
              <li>“רק שיעלה לאוויר וזהו”</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>✔ מתאים ל:</h3>
            <ul className={styles.optionsList}>
              <li>עסקים שרוצים תוצאה ולא “רק אתר”</li>
              <li>מי שמעריך סדר וחשיבה</li>
              <li>פרויקטים עם המשכיות</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
