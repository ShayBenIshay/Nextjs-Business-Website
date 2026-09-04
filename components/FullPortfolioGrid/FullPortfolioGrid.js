"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./FullPortfolioGrid.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";
import { caseStudies } from "@/lib/caseStudies";

const imgLaptop = "/assets/Laptop-Mockup.webp";

const filters = [
  { label: "הכל", value: "הכל" },
  { label: "חנויות ואתרים", value: "חנויות ואתרים" },
  { label: "תוספים וכלים לחנות", value: "תוספים וכלים לחנות" },
  { label: "מערכות ואינטגרציות מותאמות", value: "מערכות ואינטגרציות מותאמות" },
];

function PortfolioMedia({ item }) {
  const hasScreenshot = item.screenshot !== null;

  if (item.visual === "diagram") {
    const stack = item.stack ?? [];
    const isHub = stack.length > 2;
    return (
      <div className={styles.diagramFrame}>
        {isHub ? (
          <>
            <span className={styles.diagramHub}>{stack[0]}</span>
            <div className={styles.diagramConnector} />
            <div className={styles.diagramSpokes}>
              {stack.slice(1).map((node) => (
                <span key={node} className={styles.diagramNode}>
                  {node}
                </span>
              ))}
            </div>
          </>
        ) : (
          <div className={styles.diagramFlow}>
            <span className={styles.diagramNode}>{stack[0] ?? "מערכת א׳"}</span>
            <span className={styles.diagramArrow}>⇄</span>
            <span className={styles.diagramNode}>{stack[1] ?? "מערכת ב׳"}</span>
          </div>
        )}
        <p className={styles.descriptionText}>{item.tagline}</p>
      </div>
    );
  }

  if (item.visual === "phone") {
    return (
      <div className={styles.phoneOuter}>
        <div className={styles.phoneFrame}>
          <div className={styles.phoneNotch} />
          <div className={styles.phoneScreen}>
            {hasScreenshot ? (
              <img
                src={item.screenshot}
                alt={item.title}
                className={styles.phoneScreenshot}
                loading="lazy"
              />
            ) : (
              <p className={styles.descriptionText}>{item.tagline}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (item.visual === "email") {
    return (
      <div className={styles.emailFrame}>
        <div className={styles.emailHeader}>
          <span className={styles.emailDot} />
          <span className={styles.emailDot} />
          <span className={styles.emailDot} />
        </div>
        <div className={styles.emailBody}>
          {hasScreenshot ? (
            <img
              src={item.screenshot}
              alt={item.title}
              className={styles.emailScreenshot}
              loading="lazy"
            />
          ) : (
            <p className={styles.descriptionText}>{item.tagline}</p>
          )}
        </div>
      </div>
    );
  }

  // visual === "laptop" (default)
  if (!hasScreenshot) {
    return (
      <div className={styles.descriptionFrame}>
        <p className={styles.descriptionText}>{item.tagline}</p>
      </div>
    );
  }

  return (
    <div className={styles.laptopWrap}>
      <div className={styles.screenshotClip}>
        <img
          src={item.screenshot}
          alt={item.title}
          className={styles.screenshot}
          loading="lazy"
        />
        {/* TODO: reveal on hover instead of staying hidden */}
        <div className={styles.hoverDescription}>
          <p className={styles.descriptionText}>{item.tagline}</p>
        </div>
      </div>
      <img src={imgLaptop} alt="laptop" className={styles.laptop} loading="lazy" />
    </div>
  );
}

function PortfolioCard({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardMedia}>
        <div className={styles.titleBlock}>
          <p className={styles.cardTitle}>{item.title}</p>
          <p className={styles.cardType}>{item.type}</p>
        </div>
        <Link href={`/portfolio/${item.slug}`} className={styles.mediaLink}>
          <PortfolioMedia item={item} />
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
