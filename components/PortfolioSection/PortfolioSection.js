"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import styles from "./PortfolioSection.module.css";
import OpenContactModalButton from "@/components/ContactModal/OpenContactModalButton";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

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
    title: "Telegram Bot",
    type: "פיתוח מותאם אישית",
    screenshot: null,
    hasRealImage: false,
    cta: "לבניית בוט",
    href: "/portfolio/telegram-bot",
  },
];

function PortfolioCard({ item }) {
  const containerRef = useRef(null);
  const [mockupWidth, setMockupWidth] = useState(460);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setMockupWidth(Math.floor(entry.contentRect.width));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.titleBlock}>
        <p className={styles.cardTitle}>{item.title}</p>
        <p className={styles.cardType}>{item.type}</p>
      </div>
      <div ref={containerRef} className={styles.mockupContainer}>
        <DeviceFrameset device="MacBook Pro" width={mockupWidth}>
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
        </DeviceFrameset>
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
            <PortfolioCard key={item.title} item={item} />
          ))}
        </div>
        <Link href="/portfolio" className="btn-secondary">
          עוד עבודות
        </Link>
      </div>
    </section>
  );
}
