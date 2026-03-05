import styles from "./HeroSection.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";

const imgLaptop = "/assets/Laptop-Mockup.png";

export default function HeroSection({
  imgScreen = "/assets/Portfolio-BarTzemach.webp",
  headline = "בונים את הנוכחות הדיגיטלית של העסק שלך.",
  subtitle = "חנויות אינטרנטיות, שיפוץ אתרים, קידום ממומן ופיתוחים מותאמים – הכל במקום אחד.",
  btnOutline = "לכל השירותים",
  btnOutlineHref = "/services#main-services",
  btnPrimary = "לתיאום שיחה",
  btnPrimaryHref = null,
}) {
  return (
    <section className={styles.hero} id="hero">
      {/* Right side - Text Content */}
      <div className={styles.content}>
        <div className={styles.textGroup}>
          <h1 className={styles.headline}>{headline}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.ctaGroup}>
          <a href={btnOutlineHref} className="btn-secondary">
            {btnOutline}
          </a>
          {btnPrimaryHref ? (
            <a href={btnPrimaryHref} className="btn-primary">
              {btnPrimary}
            </a>
          ) : (
            <OpenContactModalButton className="btn-primary">
              {btnPrimary}
            </OpenContactModalButton>
          )}
        </div>
      </div>

      {/* Left side - Laptop Mockup */}
      {/* <div className={styles.visual}> */}
      <div className={styles.laptopWrapper}>
        <div className={styles.screenshotClip}>
          <img src={imgScreen} alt="Screenshot" className={styles.screenshot} />
        </div>
        <img src={imgLaptop} alt="Laptop mockup" className={styles.laptop} />
      </div>
      {/* </div> */}
    </section>
  );
}
