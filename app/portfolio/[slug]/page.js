import Link from "next/link";
import { notFound } from "next/navigation";
import CTABannerSection from "@/components/CTABannerSection/CTABannerSection";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import styles from "./case-study.module.css";

const imgLaptop = "/assets/Laptop-Mockup.webp";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} | תיק עבודות | שי טק סולושנס`,
    description: cs.tagline,
    alternates: {
      canonical: `https://www.shaytechsolutions.com/portfolio/${cs.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <main>
      {/* ── Hero: back link + centered meta ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Link href="/portfolio" className={styles.backLink}>
            → חזרה לתיק העבודות
          </Link>
          <div className={styles.heroMeta}>
            <span className={styles.typeBadge}>{cs.type}</span>
            <h1 className={styles.heroTitle}>{cs.title}</h1>
            <p className={styles.heroTagline}>{cs.tagline}</p>
          </div>
        </div>
      </section>

      {/* ── Split: cards (right) + laptop (left) ── */}
      <section className={styles.split}>
        <div className={styles.splitInner}>
          {/* Cards on the right in RTL (first in DOM) */}
          <div className={styles.cards}>
            <div className={styles.block}>
              <h2 className={styles.blockTitle}>האתגר</h2>
              <p className={styles.blockText}>{cs.challenge}</p>
            </div>
            <div className={styles.block}>
              <h2 className={styles.blockTitle}>מה בנינו</h2>
              <p className={styles.blockText}>{cs.solution}</p>
            </div>
          </div>

          {/* Laptop on the left in RTL (second in DOM) */}
          <div className={styles.visualWrap}>
            {cs.hasRealImage ? (
              <>
                <div className={styles.screenshotClip}>
                  <img
                    src={cs.screenshot}
                    alt={cs.title}
                    className={styles.screenshot}
                  />
                </div>
                <img
                  src={imgLaptop}
                  alt="laptop mockup"
                  className={styles.laptopImg}
                />
              </>
            ) : (
              <div className={styles.placeholder}>
                <span className={styles.placeholderTitle}>{cs.title}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className={styles.results}>
        <div className={styles.resultsInner}>
          <div className={styles.resultsBlock}>
            <h2 className={styles.resultsTitle}>התוצאה</h2>
            <p className={styles.resultsText}>{cs.results}</p>
            {cs.liveUrl && (
              <div className={styles.liveLink}>
                <a
                  href={cs.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  לאתר החי
                </a>
              </div>
            )}
            {cs.designer && (
              <p className={styles.designerCredit}>
                UI/UX של הקוסם {cs.designer.name} -{" "}
                <a
                  href={cs.designer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.designerLink}
                >
                  לאתר שלו
                </a>
              </p>
            )}
          </div>
        </div>
      </section>

      <CTABannerSection
        headline="רוצים פרויקט כזה?"
        sub="שיחת ייעוץ של 20 דקות - חינם, ללא התחייבות."
      />
    </main>
  );
}
