"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./FullPortfolioGrid.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";
import { caseStudies } from "@/lib/caseStudies";

const imgLaptop = "/assets/Laptop-Mockup.webp";

const filters = [
  { label: "הכל", value: "הכל" },
  { label: "חנויות אינטרנטיות", value: "חנויות אינטרנטיות" },
  { label: "תוסף WordPress", value: "תוסף WordPress" },
  { label: "פיתוח מותאם אישית", value: "פיתוח מותאם אישית" },
  { label: "אתר אישי", value: "אתר אישי" },
];

function PortfolioCard({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardMedia}>
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
            className={styles.laptop}
            loading="lazy"
          />
        </div>
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
  const [activeFilter, setActiveFilter] = useState("הכל");

  const filteredItems =
    activeFilter === "הכל"
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
