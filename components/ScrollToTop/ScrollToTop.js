"use client";
import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setVisible(pageHeight > 0 && scrolled / pageHeight >= 0.3);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.btn} ${visible ? styles.btnVisible : ""}`}
      aria-label="חזרה לראש העמוד"
    >
      ↑
    </button>
  );
}
