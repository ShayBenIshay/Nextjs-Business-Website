import styles from "./ServicesSection.module.css";
import ServiceLottieCard from "@/components/ServiceLottieCard/ServiceLottieCard";

const services = [
  {
    title: "הקמת חנות אינטרנטית",
    lottieSrc:
      "https://lottie.host/322352d4-b7b7-4561-ad01-317dedecd706/vLVKojJfar.lottie",
    openModal: true,
  },
  {
    title: " יש לי אתר – רוצה לשפר",
    lottieSrc:
      "https://lottie.host/15438a5d-51d9-454d-9ccd-75849b3398b1/w9APeUlSOo.lottie",
    openModal: true,
  },
  {
    title: "אחסון וניהול",
    lottieSrc:
      "https://lottie.host/20ff22f3-4577-4c82-99a0-aaa42890a364/pTq16Aiimj.lottie",
    openModal: true,
  },
  {
    title: "פיתוח מותאם אישית",
    lottieSrc:
      "https://lottie.host/043e412f-ab60-4068-ad45-a14bb82721fc/8iPnpccCah.lottie",
    showLastFrame: true,
    openModal: true,
  },
  {
    title: "רוצה לראות דוגמאות",
    lottieSrc:
      "https://lottie.host/93c4fa5b-82ef-47f0-a3ba-f04eda19034d/XOtUJ2cvZ5.lottie",
    showLastFrame: true,
    lottieScale: 0.7,
    href: "/portfolio",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <div className={styles.titleGroup}>
          <h2 className={`h2 ${styles.headline}`}>
            בונה אתרים, חנויות ומערכות שעובדות בשבילך
          </h2>
          <p className={`h3 ${styles.subtitle}`}>
            ליווי מלא: מתכנון, דרך פיתוח מקצועי ועד ניהול שוטף ופרסום.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceLottieCard
              key={service.title}
              service={service}
              styles={styles}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
