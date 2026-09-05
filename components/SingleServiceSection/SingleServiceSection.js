import styles from "./SingleServiceSection.module.css";
import ServiceLottieCard from "@/components/ServiceLottieCard/ServiceLottieCard";

const services = [
  {
    title: "אני רוצה להקים חנות",
    lottieSrc:
      "https://lottie.host/322352d4-b7b7-4561-ad01-317dedecd706/vLVKojJfar.lottie",
    tag: "estore",
    openModal: true,
  },
  {
    title: " יש לי אתר – רוצה לשפר",
    lottieSrc:
      "https://lottie.host/15438a5d-51d9-454d-9ccd-75849b3398b1/w9APeUlSOo.lottie",
    lottieScale: 1.125,
    lottieMarginLeft: "-100px",
  },
  {
    title: "אחסון וניהול",
    lottieSrc:
      "https://lottie.host/20ff22f3-4577-4c82-99a0-aaa42890a364/pTq16Aiimj.lottie",
    lottieScale: 0.7,
  },
  {
    title: "פיתוח מותאם אישית",
    lottieSrc:
      "https://lottie.host/043e412f-ab60-4068-ad45-a14bb82721fc/8iPnpccCah.lottie",
    showLastFrame: true,
  },
  {
    title: "קידום ממומן",
    lottieSrc:
      "https://lottie.host/59a72b50-8b50-4c27-9c9c-efe954c87795/aomd8YgN2I.lottie",
    lottieScale: 0.9,
    lottieMarginLeft: "16px",
  },
  {
    title: "רוצה לראות דוגמאות",
    lottieSrc:
      "https://lottie.host/93c4fa5b-82ef-47f0-a3ba-f04eda19034d/XOtUJ2cvZ5.lottie",
    showLastFrame: true,
    lottieScale: 0.7,
    tag: "more-examples",
    href: "/portfolio",
  },
];

export default function SingleServiceSection({
  title = "חנויות אינטרנטיות שמוכרות",
  subtitle = "אני בונה חנויות WooCommerce עם חשיבה שיווקית, חוויית משתמש ותשתית יציבה לצמיחה.",
  tag = "estore",
}) {
  const service = services.find((s) => s.tag === tag);
  const moreExamples = services.find((s) => s.tag === "more-examples");
  if (!service) return null;

  return (
    <section className={styles.section} id={tag}>
      <div className={styles.inner}>
        <div>
          <h2 className={`h2 ${styles.headline}`}>{title}</h2>
          <p className={`h3 ${styles.subtitle}`}>{subtitle}</p>
        </div>
        <div className={styles.grid}>
          <ServiceLottieCard key={service.title} service={service} styles={styles} />
          <ServiceLottieCard key={moreExamples.title} service={moreExamples} styles={styles} />
        </div>
      </div>
    </section>
  );
}
