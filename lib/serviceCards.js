// Card content for ServicesSection's "grid" (homepage/aboutme/contact) and
// "pair" (single-service page, e.g. /services/estore) variants. Both variants
// pull from this one list by id instead of keeping separate copies.
export const serviceCards = [
  {
    id: "estore",
    title: "הקמת חנות אינטרנטית",
    lottieSrc:
      "https://lottie.host/322352d4-b7b7-4561-ad01-317dedecd706/vLVKojJfar.lottie",
    openModal: true,
  },
  {
    id: "website-improve",
    title: "יש לי אתר – רוצה לשפר",
    lottieSrc:
      "https://lottie.host/15438a5d-51d9-454d-9ccd-75849b3398b1/w9APeUlSOo.lottie",
    openModal: true,
  },
  {
    id: "hosting",
    title: "אחסון וניהול",
    lottieSrc:
      "https://lottie.host/20ff22f3-4577-4c82-99a0-aaa42890a364/pTq16Aiimj.lottie",
    openModal: true,
  },
  {
    id: "custom-development",
    title: "פיתוח מותאם אישית",
    lottieSrc:
      "https://lottie.host/043e412f-ab60-4068-ad45-a14bb82721fc/8iPnpccCah.lottie",
    showLastFrame: true,
    openModal: true,
  },
  {
    id: "portfolio-examples",
    title: "רוצה לראות דוגמאות",
    lottieSrc:
      "https://lottie.host/93c4fa5b-82ef-47f0-a3ba-f04eda19034d/XOtUJ2cvZ5.lottie",
    showLastFrame: true,
    lottieScale: 0.7,
    href: "/portfolio",
  },

  // Same "estore" lottie, first-person CTA phrasing for use on the estore
  // page's own pair section (you're already on the page, so it reads as an
  // action rather than a label).
  {
    id: "estore-pair",
    title: "אני רוצה להקים חנות",
    lottieSrc:
      "https://lottie.host/322352d4-b7b7-4561-ad01-317dedecd706/vLVKojJfar.lottie",
    openModal: true,
  },

  // --- Dormant: prepared for a "pair" section on the other /services/*
  // pages (website, hosting, custom-development, advertising), mirroring
  // the estore page, but never wired up. Not selected by any ServicesSection
  // call today. Also missing openModal/href, so as-is they'd crash
  // ServiceLottieCard's Link fallback (href=undefined) if ever referenced.
  // Kept for review, not deletion, per 2026-09-06 conversation.
  {
    id: "website-improve-pair",
    title: "יש לי אתר – רוצה לשפר",
    lottieSrc:
      "https://lottie.host/15438a5d-51d9-454d-9ccd-75849b3398b1/w9APeUlSOo.lottie",
    lottieScale: 1.125,
    lottieMarginLeft: "-100px",
  },
  {
    id: "hosting-pair",
    title: "אחסון וניהול",
    lottieSrc:
      "https://lottie.host/20ff22f3-4577-4c82-99a0-aaa42890a364/pTq16Aiimj.lottie",
    lottieScale: 0.7,
  },
  {
    id: "custom-development-pair",
    title: "פיתוח מותאם אישית",
    lottieSrc:
      "https://lottie.host/043e412f-ab60-4068-ad45-a14bb82721fc/8iPnpccCah.lottie",
    showLastFrame: true,
  },
  {
    id: "advertising-pair",
    title: "קידום ממומן",
    lottieSrc:
      "https://lottie.host/59a72b50-8b50-4c27-9c9c-efe954c87795/aomd8YgN2I.lottie",
    lottieScale: 0.9,
    lottieMarginLeft: "16px",
  },
];
