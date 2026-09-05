import { Fragment } from "react";
import styles from "./HowIWorkSection.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";

const introductionIcon = "/assets/introductionIcon.png";
const offerIcon = "/assets/offerIcon.png";
const buildIcon = "/assets/buildIcon.png";
const supportIcon = "/assets/support2Icon.png";

const defaultSteps = [
  { img: introductionIcon, label: "שיחת היכרות ואפיון" },
  { img: offerIcon, label: "הצעת מחיר מסודרת" },
  { img: buildIcon, label: "בנייה / שיפוץ / פיתוח" },
  { img: supportIcon, label: "עלייה לאוויר + ליווי" },
];

export default function HowIWorkSection({
  showCTA = false,
  title = "איך זה עובד בפועל?",
  noBackground = false,
  steps = defaultSteps,
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
