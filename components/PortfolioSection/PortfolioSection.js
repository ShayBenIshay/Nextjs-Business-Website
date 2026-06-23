"use client";

import Link from "next/link";
import styles from "./PortfolioSection.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";

const imgLaptop = "/assets/Laptop-Mockup.webp";
const imgBarTzemach = "/assets/Portfolio-BarTzemach.webp";
const imgLapa = "/assets/Portfolio-Lapa.webp";
const imgNewsletterClub = "/assets/Portfolio-NewsletterClub.webp";

const portfolioItems = [
  {
    title: "Bar Tzemach Jewelry",
    type: "חנות אינטרנטית",
    screenshot: imgBarTzemach,
    hasRealImage: true,
    cta: "לבניית חנות",
    href: "/portfolio/bartzemachjewelry",
  },
  {
    title: "Newsletter Club",
    type: "תוסף",
    screenshot: imgNewsletterClub,
    hasRealImage: true,
    cta: "לבניית תוסף",
    href: "/portfolio/newsletter-club",
  },
  {
    title: "LAPA",
    type: "שיפוץ אתר",
    screenshot: imgLapa,
    hasRealImage: true,
    cta: "שיפוץ אתר",
    href: "/portfolio/lapa",
  },
  {
    title: "Alpha Pro",
    type: "שיפוץ חנות",
    screenshot: null,
    hasRealImage: false,
    cta: "לשיפוץ חנות",
    href: "/portfolio/alpha-pro",
  },
];

function PortfolioCard({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.titleBlock}>
        <p className={styles.cardTitle}>{item.title}</p>
        <p className={styles.cardType}>{item.type}</p>
      </div>
      <div className={styles.laptopWrap}>
        <div className={styles.screenshotClip}>
          {item.hasRealImage ? (
            <img
              src={item.screenshot}
              alt={item.title}
              className={styles.screenshot}
              loading="lazy"
            />
          ) : (
            <div className={styles.placeholderScreen}>
              <span className={styles.placeholderText}>{item.title}</span>
            </div>
          )}
        </div>
        <img
          src={imgLaptop}
          alt="laptop"
          className={styles.laptopImg}
          loading="lazy"
        />
      </div>
      <div className={styles.cardActions}>
        <OpenContactModalButton className="btn-primary">
          {item.cta}
        </OpenContactModalButton>
        <Link href={item.href} className="btn-secondary">
          עוד מידע
        </Link>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.inner}>
        <h2 className={`h2 ${styles.sectionTitle}`}>עבודות / דוגמאות</h2>
        <div className={styles.grid}>
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.href} item={item} />
          ))}
        </div>
        <Link href="/portfolio" className="btn-secondary">
          עוד עבודות
        </Link>
      </div>
    </section>
  );
}
