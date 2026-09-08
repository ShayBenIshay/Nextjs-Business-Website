import styles from "./MeetingPoint.module.css";

// The redesign's opening gesture: hosting and development, two separate paths,
// curving together into one point — the "one address, one envelope" pitch,
// staged before a word of copy explains it. Approved concept sketch from
// design/style-guide.html, section 06 ("Illustration"), ported as-is.
export default function MeetingPoint() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <svg
          viewBox="0 0 640 220"
          className={styles.scene}
          role="img"
          aria-label="שני מסלולים נפרדים, אחסון ופיתוח, מתכנסים לנקודת מפגש אחת שממנה צומח עץ קטן"
        >
          <path
            d="M90,60 C230,60 260,150 322,152"
            fill="none"
            stroke="#412662"
            strokeOpacity="0.55"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M550,60 C410,60 380,150 322,152"
            fill="none"
            stroke="#476226"
            strokeOpacity="0.55"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <g className={styles.sway}>
            <ellipse cx="90" cy="60" rx="44" ry="38" fill="rgba(65,38,98,0.12)" />
            <circle cx="90" cy="60" r="13" fill="#412662" />
          </g>
          <text x="90" y="118" textAnchor="middle" className={styles.label}>
            האחסון
          </text>

          <g className={styles.sway} style={{ animationDelay: "-2.6s" }}>
            <ellipse cx="550" cy="60" rx="44" ry="38" fill="rgba(71,98,38,0.09)" />
            <circle cx="550" cy="60" r="13" fill="#476226" />
          </g>
          <text x="550" y="118" textAnchor="middle" className={styles.label}>
            הפיתוח
          </text>

          <circle cx="322" cy="152" r="30" fill="rgba(227,168,87,0.16)" />
          <circle className={styles.pulse} cx="322" cy="152" r="14" fill="#E3A857" />
          <circle
            className={styles.twinkle}
            cx="322"
            cy="120"
            r="3"
            fill="#E3A857"
            style={{ animationDelay: "-1s" }}
          />
          <circle
            className={styles.twinkle}
            cx="345"
            cy="132"
            r="2.4"
            fill="#E3A857"
            style={{ animationDelay: "-2s" }}
          />

          <path
            d="M322,138 C322,110 322,88 322,68"
            fill="none"
            stroke="#476226"
            strokeWidth="3"
            strokeLinecap="round"
            className={styles.stemSway}
          />
          <path
            d="M322,84 C302,76 292,60 298,48"
            fill="none"
            stroke="#476226"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M322,72 C342,64 352,50 348,38"
            fill="none"
            stroke="#476226"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}
