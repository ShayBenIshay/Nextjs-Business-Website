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
      </div>
      <img
        src={imgLaptop}
        alt="laptop"
        className={styles.laptopImg}
        loading="lazy"
      />
    </div>
  );
}

function PortfolioCard({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.titleBlock}>
        <p className={styles.cardTitle}>{item.title}</p>
        <p className={styles.cardType}>{item.type}</p>
      </div>
      <PortfolioMedia item={item} />
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
