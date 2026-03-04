import styles from "./HowCanIHelpSection.module.css";

const cards = [
  {
    title: "האתר כבר קיים?",
    icon: "🔧",
    lines: ["שיפוץ ותחזוקת WordPress", "משדרגים את האתר כך שיעבוד בשבילך"],
    cta: "למסלולי שיפוץ",
    href: "/services/wordpress",
  },
  {
    title: "רוצה למכור אונליין?",
    icon: "🛒",
    lines: [
      "בניית אתרי וחנויות אינטרנטיות",
      "חנויות WooCommerce ממוקדות מכירה",
    ],
    cta: "לכל הדילים",
    href: "/services/estore#estores",
  },
  {
    title: "פיתוח מותאם אישית",
    icon: "🧠",
    lines: ["פיתוח מותאם / SaaS", "מערכות, תוספים ופיתוחים מיוחדים"],
    cta: "לפיתוח מתקדם",
    href: "/services/custom-development",
  },
  {
    title: "אחסון וניהול",
    icon: "🧩",
    lines: ["אחסון אתרים, ניהול, ופיתוח Wordpress", "לאחסן את האתר בראש שקט"],
    cta: "לחבילות אחסון",
    href: "/services/hosting",
  },
  {
    title: "קידום ממומן",
    icon: "📢",
    lines: [
      "קידום החנות בגוגל, פייסבוק, ובאינסטגרם",
      "קמפיינים שמביאים תוצאות",
    ],
    cta: "לבניית קמפיין",
    href: "/services/advertising",
  },
  {
    title: "שיחת ייעוץ",
    icon: "📞",
    lines: ["שיחת איפיון", "תכנון מדויק לפתרון הבעיות שלכם"],
    cta: "לקביעת שיחה",
    href: "/contact#talk-to-me",
  },
];

export default function HowCanIHelpSection() {
  return (
    <section className={styles.section} id="how-can-i-help">
      <div className={styles.inner}>
        <h2 className={styles.title}>איך אני יכול לעזור לך?</h2>
        <div className={styles.grid}>
          {cards.map((card) => (
            <a href={card.href} key={card.title} className={styles.card}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardTitle}>{card.icon}</p>
                <div className={styles.cardLines}>
                  {card.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
              <button className={styles.cardCta}>{card.cta}</button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
