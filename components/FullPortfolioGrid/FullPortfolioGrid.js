"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./FullPortfolioGrid.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";
import PortfolioMedia from "@/components/PortfolioMedia/PortfolioMedia";
import { caseStudies, PORTFOLIO_CATEGORY } from "@/lib/caseStudies";

const ALL_FILTER = "הכל";

const filters = [
  { label: ALL_FILTER, value: ALL_FILTER },
  ...Object.values(PORTFOLIO_CATEGORY).map((category) => ({
    label: category,
    value: category,
  })),
];

function PortfolioCard({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardMedia}>
        <div className={styles.titleBlock}>
          <p className={styles.cardTitle}>{item.title}</p>
          <p className={styles.cardType}>{item.type}</p>
        </div>
        <Link href={`/portfolio/${item.slug}`} className={styles.mediaLink}>
          <PortfolioMedia item={item} styles={styles} />
        </Link>
      </div>
      <div className={styles.cardActions}>
        <OpenContactModalButton className="btn-primary">
          {item.ctaLabel}
        </OpenContactModalButton>
        <Link href={`/portfolio/${item.slug}`} className="btn-secondary">
          לפרויקט המלא
        </Link>
      </div>
    </div>
  );
}

export default function FullPortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);

  const filteredItems =
    activeFilter === ALL_FILTER
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeFilter);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>עבודות נבחרות</h2>
          <p className={styles.sectionSubtitle}>פרויקטים שבנויים לעבוד</p>
        </div>

        <div className={styles.filterBar}>
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`${styles.filterBtn} ${
                activeFilter === filter.value ? styles.filterBtnActive : ""
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <PortfolioCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
