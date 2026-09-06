import CardGridSection from "@/components/CardGridSection/CardGridSection";

const cards = [
  {
    title: "✖ פחות מתאים אם:",
    items: [
      "מי שמחפש פתרון הכי זול",
      "פרויקטים בלי אפיון",
      "“רק שיעלה לאוויר וזהו”",
    ],
  },
  {
    title: "✔ מתאים ל:",
    items: [
      "עסקים שרוצים תוצאה ולא “רק אתר”",
      "מי שמעריך סדר וחשיבה",
      "פרויקטים עם המשכיות",
    ],
  },
];

export default function WhoIsItForSection() {
  return (
    <CardGridSection id="advanced-services" title="למי זה מתאים?" cards={cards} />
  );
}
