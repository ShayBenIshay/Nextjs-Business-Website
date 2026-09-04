const imgLaptop = "/assets/Laptop-Mockup.webp";

export default function PortfolioMedia({ item, styles, eager = false }) {
  const hasScreenshot = Boolean(item.screenshot);
  const loading = eager ? undefined : "lazy";

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
                loading={loading}
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
              loading={loading}
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
          loading={loading}
        />
      </div>
      <img
        src={imgLaptop}
        alt="laptop mockup"
        className={styles.laptopImg}
        loading={loading}
      />
    </div>
  );
}
