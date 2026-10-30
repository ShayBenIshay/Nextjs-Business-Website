"use client";

import { useState } from "react";
import styles from "./ServiceTiers.module.css";
import OpenContactModalButton from "@/components/layout/ContactModal/OpenContactModalButton";
import type { ServicePlan } from "@/lib/services";

interface ServiceTiersProps {
  id?: string;
  title?: string;
  subtitle?: string;
  plans: ServicePlan[];
  notes?: string[];
  notesTitle?: string;
  tinted?: boolean;
  expandable?: boolean;
  // Title on the right, cards stacked in a column on the left (desktop).
  horizontal?: boolean;
  // With horizontal: drop the card chrome (meant for a single plan).
  plain?: boolean;
  // Each card starts collapsed (title and price only) with a per-card
  // "קרא עוד" toggle that reveals the rest.
  collapsible?: boolean;
  // Title on the right above the cards, cards side by side in a row.
  titleTop?: boolean;
  // With collapsible: keep the description visible when a card is collapsed.
  keepDescription?: boolean;
  // With collapsible: all cards expand and collapse together.
  syncCards?: boolean;
}

export default function ServiceTiers({
  id = "plans",
  title,
  subtitle,
  plans,
  notes,
  notesTitle,
  tinted = true,
  expandable = false,
  horizontal = false,
  plain = false,
  collapsible = false,
  titleTop = false,
  keepDescription = false,
  syncCards = false,
}: ServiceTiersProps) {
  const [expanded, setExpanded] = useState(false);
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({});
  const [allOpen, setAllOpen] = useState(false);

  return (
    <section
      className={`${styles.section} ${tinted ? styles.tinted : ""}`}
      id={id}
    >
      <div
        className={`${styles.inner} ${horizontal ? styles.horizontal : ""} ${horizontal && plain ? styles.plain : ""} ${titleTop ? styles.titleTop : ""}`}
      >
        {(title || subtitle) && (
          <div className={styles.titleGroup}>
            {title && <h2 className={`h2 ${styles.title}`}>{title}</h2>}
            {subtitle && (
              <p className={`h3 ${styles.subtitle}`}>{subtitle}</p>
            )}
          </div>
        )}

        <div
          className={`${styles.cards} ${collapsible ? styles.collapsibleCards : ""} ${collapsible && syncCards ? styles.syncedCards : ""}`}
        >
          {plans.map((plan) => {
            const visibleItems = expandable
              ? plan.included.slice(0, 3)
              : plan.included;
            const hiddenItems = expandable ? plan.included.slice(3) : [];
            const cardOpen =
              !collapsible || (syncCards ? allOpen : !!openCards[plan.title]);
            const showExtras = (!expandable || expanded) && cardOpen;
            const toggle = (
              <button
                type="button"
                className={`btn-secondary ${styles.btnSmall}`}
                aria-expanded={cardOpen}
                onClick={() =>
                  syncCards
                    ? setAllOpen((prev) => !prev)
                    : setOpenCards((prev) => ({
                        ...prev,
                        [plan.title]: !prev[plan.title],
                      }))
                }
              >
                {cardOpen ? "קרא פחות" : "קרא עוד"}
              </button>
            );

            return (
              <div
                key={plan.title}
                className={`${styles.card} ${plan.highlighted ? styles.highlighted : ""}`}
              >
                {plan.badge && (
                  <div className={styles.badge}>{plan.badge}</div>
                )}
                <div className={styles.cardBody}>
                  <p className={styles.planTitle}>{plan.title}</p>
                  <div className={collapsible ? styles.priceRow : undefined}>
                    <p className={styles.price}>
                      {plan.price}
                      {plan.priceNote && (
                        <span className={styles.priceNote}> {plan.priceNote}</span>
                      )}
                    </p>
                    {collapsible && !keepDescription && toggle}
                  </div>
                  {(cardOpen || keepDescription) && (
                    <p className={styles.description}>{plan.description}</p>
                  )}
                  {cardOpen && (
                    <div className={styles.featureList}>
                      <p className={styles.featureLabel}>מה כלול:</p>
                      <ul>
                        {visibleItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                        {expanded &&
                          hiddenItems.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  )}
                  {showExtras && plan.suitable && (
                    <p className={styles.suitable}>{plan.suitable}</p>
                  )}
                  {showExtras && plan.focus && (
                    <p className={styles.focus}>{plan.focus}</p>
                  )}
                </div>
                <div className={styles.cardFooter}>
                  {collapsible && keepDescription && toggle}
                  {expandable && (
                    <button
                      type="button"
                      className={`btn-secondary ${styles.btnSmall}`}
                      onClick={() => setExpanded((prev) => !prev)}
                    >
                      {expanded ? "קרא פחות" : "קרא עוד"}
                    </button>
                  )}
                  <OpenContactModalButton
                    className={styles.cta}
                    presetService={plan.serviceValue}
                  >
                    לפרטים ותיאום
                  </OpenContactModalButton>
                </div>
              </div>
            );
          })}
        </div>

        {notes && notes.length > 0 && (
          <div className={styles.notes}>
            {notesTitle && <p className={styles.notesTitle}>{notesTitle}</p>}
            <ul>
              {notes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
