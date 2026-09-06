"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useContactModal } from "@/components/layout/ContactModal/ContactModalContext";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false, loading: () => <div /> },
);

export default function ServiceLottieCard({ service, styles }) {
  const dotLottieRef = useRef(null);
  const timerRef = useRef(null);
  const isMobileRef = useRef(false);
  const { open } = useContactModal();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 499px)");
    isMobileRef.current = mq.matches;
    if (mq.matches && dotLottieRef.current) {
      dotLottieRef.current.play();
    }
    const handler = (e) => {
      isMobileRef.current = e.matches;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const dotLottieRefCallback = (dotLottie) => {
    dotLottieRef.current = dotLottie;

    if (dotLottie) {
      dotLottie.addEventListener("load", () => {
        if (isMobileRef.current) {
          dotLottie.play();
          return;
        }
        if (service.showLastFrame) {
          const lastFrame = dotLottie.totalFrames - 1;
          dotLottie.setFrame(lastFrame);
          dotLottie.pause();
        }
      });
    }
  };

  const handleMouseEnter = () => {
    const delay = service.instantPlay ? 0 : 250;
    timerRef.current = setTimeout(() => {
      if (service.showLastFrame) {
        dotLottieRef.current?.setFrame(0);
      }
      dotLottieRef.current?.play();
    }, delay);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    if (service.showLastFrame) {
      dotLottieRef.current?.pause();
      const lastFrame = (dotLottieRef.current?.totalFrames ?? 1) - 1;
      dotLottieRef.current?.setFrame(lastFrame);
    } else {
      dotLottieRef.current?.stop();
    }
  };

  const cardProps = service.openModal
    ? {
        role: "button",
        tabIndex: 0,
        onClick: open,
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
          }
        },
      }
    : { href: service.href };

  const CardTag = service.openModal ? "div" : Link;

  return (
    <CardTag
      {...cardProps}
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={styles.lottieWrapper}
        style={{
          ...(service.lottieScale
            ? { transform: `scale(${service.lottieScale})` }
            : {}),
          ...(service.lottieMarginLeft
            ? { marginLeft: service.lottieMarginLeft }
            : {}),
        }}
      >
        {service.lottieSrc ? (
          <DotLottieReact
            src={service.lottieSrc}
            loop
            autoplay={false}
            dotLottieRefCallback={dotLottieRefCallback}
            className={styles.lottie}
          />
        ) : (
          <div className={styles.lottiePlaceholder} />
        )}
      </div>
      <span className="btn-primary">{service.title}</span>
    </CardTag>
  );
}
