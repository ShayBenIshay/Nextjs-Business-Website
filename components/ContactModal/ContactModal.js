"use client";
import { useEffect } from "react";
import { useContactModal } from "./ContactModalContext";
import TalkToMeSection from "@/components/TalkToMeSection/TalkToMeSection";
import styles from "./ContactModal.module.css";

export default function ContactModal() {
  const { isOpen, close } = useContactModal();

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="טופס יצירת קשר"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={close} aria-label="סגור">
          ✕
        </button>
        <TalkToMeSection />
      </div>
    </div>
  );
}
