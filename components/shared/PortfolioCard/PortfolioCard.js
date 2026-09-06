import Link from "next/link";
import OpenContactModalButton from "@/components/layout/ContactModal/OpenContactModalButton";
import PortfolioMedia from "@/components/shared/PortfolioMedia/PortfolioMedia";

export default function PortfolioCard({ item, styles, ctaLabel }) {
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
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
