import IconRowSection from "@/components/IconRowSection/IconRowSection";

const mobileIcon = "/assets/mobile-icon.png";
const paymentIcon = "/assets/payment-icon.png";
const storeManagementIcon = "/assets/store-management-icon.png";
const storeExpansionIcon = "/assets/store-management-icon.png";

const items = [
  { src: mobileIcon, label: "התאמה מלאה למובייל" },
  { src: paymentIcon, label: "סליקה ומשלוחים" },
  { src: storeManagementIcon, label: "הדרכה לניהול החנות" },
  { src: storeExpansionIcon, label: "מוכנות להתרחבות עתידית" },
];

export default function WhatEStoreIncludesSection() {
  return (
    <IconRowSection
      id="whats-included-estore"
      title="מה כל חנות כוללת? "
      items={items}
      iconSize={75}
      itemWidth={185}
    />
  );
}
