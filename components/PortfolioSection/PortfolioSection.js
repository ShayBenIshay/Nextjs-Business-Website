"use client";

import Link from "next/link";
import styles from "./PortfolioSection.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";
import PortfolioMedia from "@/components/PortfolioMedia/PortfolioMedia";
import { caseStudies } from "@/lib/caseStudies";

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
      <PortfolioMedia item={item} styles={styles} />
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
