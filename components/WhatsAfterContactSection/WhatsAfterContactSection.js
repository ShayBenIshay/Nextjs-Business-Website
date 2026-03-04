import { Fragment } from "react";
import styles from "./WhatsAfterContactSection.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";

const introductionIcon = "/assets/introductionIcon.png";
const offerIcon = "/assets/offerIcon.png";
const developmentIcon = "/assets/development-icon.png";
const growthIcon = "/assets/growth-icon.png";

const steps = [
  { img: introductionIcon, label: "נבין את הצורך שלכם" },
  { img: offerIcon, label: "נכין הצעת עבודה מסודרת" },
  { img: developmentIcon, label: "פיתוח הפיתרון המדויק לכם" },
  { img: growthIcon, label: "ליווי להמשך צמיחה" },
];

// const arrows = [imgVector3, imgVector2, imgVector1];

export default function WhatsAfterContactSection({
  showCTA = false,
  title = "מה קורה אחרי שמשאירים פרטים?",
  noBackground = true,
}) {
  return (
    <section
      className={`${styles.section} ${noBackground ? styles.noBackground : ""}`}
      id="how-i-work"
    >
      <div className={styles.inner}>
        <h2 className={`h2 ${styles.title}`}>{title}</h2>
        <div className={styles.stepsRow}>
          {steps.map((step, idx) => (
            <Fragment key={step.label}>
              <div className={styles.step}>
                <div className={styles.iconWrap}>
                  <img
                    src={step.img}
                    alt={step.label}
                    className={styles.icon}
                  />
                </div>
                <p className={styles.stepLabel}>{step.label}</p>
              </div>
              {idx < steps.length - 1 && (
                <p className={styles.arrow}>←</p>
                // <img
                //   src={arrows[idx]}
                //   alt=""
                //   className={styles.arrow}
                // />
              )}
            </Fragment>
          ))}
        </div>
        {showCTA && (
          <OpenContactModalButton className={`btn-primary ${styles.ctaBtn}`}>
            לתיאום שיחה
          </OpenContactModalButton>
        )}
      </div>
    </section>
  );
}
