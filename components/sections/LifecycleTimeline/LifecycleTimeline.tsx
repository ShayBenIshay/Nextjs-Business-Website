import type { CSSProperties } from "react";
import styles from "./LifecycleTimeline.module.css";

export interface LifecycleStep {
  number: string;
  title: string;
  priceNote?: string;
  body: string[];
}

interface LifecycleTimelineProps {
  id?: string;
  title?: string;
  steps: LifecycleStep[];
}

// Characterization: two scattered requirement fragments converging into one spec sheet.
function CharacterizationScene() {
  return (
    <svg viewBox="0 0 76 76" className={styles.scene}>
      <circle cx="38" cy="38" r="38" fill="#EFEAF6" />
      <rect x="4" y="10" width="8" height="8" rx="2" fill="#412662" opacity="0.35" />
      <rect x="62" y="16" width="7" height="7" rx="2" fill="#476226" opacity="0.35" />
      <path
        d="M14 18 C24 22 30 28 33 34"
        fill="none"
        stroke="#412662"
        strokeWidth="1.6"
        strokeDasharray="2 3"
        opacity="0.5"
      />
      <path
        d="M64 22 C52 26 46 30 41 34"
        fill="none"
        stroke="#476226"
        strokeWidth="1.6"
        strokeDasharray="2 3"
        opacity="0.5"
      />
      <rect
        x="24"
        y="32"
        width="28"
        height="34"
        rx="3"
        fill="#ffffff"
        stroke="#412662"
        strokeWidth="2"
      />
      <rect x="29" y="40" width="18" height="3" rx="1.5" fill="#412662" opacity="0.3" />
      <rect x="29" y="47" width="18" height="3" rx="1.5" fill="#412662" opacity="0.3" />
      <rect x="29" y="54" width="11" height="3" rx="1.5" fill="#412662" opacity="0.3" />
      <g className={styles.pulse} style={{ transformOrigin: "38px 34px" }}>
        <circle cx="38" cy="34" r="4" fill="#E3A857" />
      </g>
    </svg>
  );
}

// Implementation: code brackets and a stacking block assembling around a turning gear.
function ImplementationScene() {
  return (
    <svg viewBox="0 0 76 76" className={styles.scene}>
      <circle cx="38" cy="38" r="38" fill="#FBF1E4" />
      <path
        d="M28 24 L18 38 L28 52"
        fill="none"
        stroke="#412662"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 24 L58 38 L48 52"
        fill="none"
        stroke="#476226"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="33" y="33" width="10" height="10" rx="2" fill="#412662" />
      <g className={styles.spin} style={{ transformOrigin: "38px 38px" }}>
        <circle cx="38" cy="38" r="16" fill="none" stroke="#E3A857" strokeWidth="1.4" strokeDasharray="3 4" />
      </g>
    </svg>
  );
}

// Delivery & Deployment: a checkmark shield completing, lifting off.
function DeliveryScene() {
  return (
    <svg viewBox="0 0 76 76" className={styles.scene}>
      <circle cx="38" cy="38" r="38" fill="#E8F3F7" />
      <g className={styles.bob} style={{ transformOrigin: "38px 38px" }}>
        <path
          d="M38 16 L56 24 V38 C56 50 48 58 38 62 C28 58 20 50 20 38 V24 Z"
          fill="#ffffff"
          stroke="#412662"
          strokeWidth="2.4"
        />
        <path
          d="M29 37 L35 44 L48 29"
          fill="none"
          stroke="#476226"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <circle cx="16" cy="20" r="2" fill="#E3A857" opacity="0.7" />
      <circle cx="60" cy="52" r="1.6" fill="#412662" opacity="0.4" />
    </svg>
  );
}

// Continuous Work: the closing loop, echoing the logo's oval-and-chevrons meeting point.
function ContinuousScene() {
  return (
    <svg viewBox="0 0 76 76" className={styles.scene}>
      <circle cx="38" cy="38" r="38" fill="#E9F3E3" />
      <g className={styles.spinSlow} style={{ transformOrigin: "38px 38px" }}>
        <path
          d="M38 16 A22 22 0 1 1 17.5 29"
          fill="none"
          stroke="#476226"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M13 24 L17.5 29 L23 25" fill="none" stroke="#476226" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <ellipse cx="38" cy="38" rx="10" ry="9" fill="#412662" />
      <circle cx="38" cy="38" r="3.4" fill="#E3A857" />
    </svg>
  );
}

const SCENES = {
  "1": CharacterizationScene,
  "2": ImplementationScene,
  "3": DeliveryScene,
  "4": ContinuousScene,
} as const;

export default function LifecycleTimeline({
  id = "lifecycle",
  title = "שלבי הפרויקט",
  steps,
}: LifecycleTimelineProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.inner}>
        <h2 className={`h2 ${styles.title}`}>{title}</h2>
        <ol className={styles.timeline}>
          {steps.map((step, i) => {
            const Scene = SCENES[step.number as keyof typeof SCENES];
            return (
            <li
              key={step.number}
              className={styles.step}
              style={{ "--i": i } as CSSProperties}
            >
              <div className={styles.marker}>
                <div className={styles.medallion}>
                  {Scene ? <Scene /> : null}
                  <span className={styles.markerNumber}>{step.number.padStart(2, "0")}</span>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.stepHeader}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  {step.priceNote && (
                    <span className={styles.priceNote}>{step.priceNote}</span>
                  )}
                </div>
                {step.body.map((paragraph) => (
                  <p key={paragraph} className={styles.stepBody}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
