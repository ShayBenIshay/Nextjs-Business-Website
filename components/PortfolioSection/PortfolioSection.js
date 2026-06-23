"use client";

import Link from "next/link";
import styles from "./PortfolioSection.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";
import { caseStudies } from "@/lib/caseStudies";

const imgLaptop = "/assets/Laptop-Mockup.webp";

const FEATURED_SLUGS = [
  "bartzemachjewelry",
  "newsletter-club",
  "lapa",
  "alpha-pro",
];

const portfolioItems = caseStudies.filter((cs) =>
  FEATURED_SLUGS.includes(cs.slug)
);

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
          {item.ctaLabel}
        </OpenContactModalButton>
        <Link href={`/portfolio/${item.slug}`} className="btn-secondary">
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
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
        <Link href="/portfolio" className="btn-secondary">
          עוד עבודות
        </Link>
      </div>
    </section>
  );
}
