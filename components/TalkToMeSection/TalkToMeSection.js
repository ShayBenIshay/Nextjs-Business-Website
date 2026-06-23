"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./TalkToMeSection.module.css";
import { event } from "@/lib/gtag";

const WHATSAPP_URL =
  "https://wa.me/972547573914?text=%D7%A9%D7%9C%D7%95%D7%9D!%20%D7%A8%D7%90%D7%99%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%99%D7%95%D7%AA%D7%A8%20%D7%A2%D7%9C%20%D7%94%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D";

const isValidIsraeliPhone = (value) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 9) return /^5[0-9]{8}$/.test(digits);
  if (digits.length === 10) return /^05[0-9]{8}$/.test(digits);
  if (digits.length === 12) return /^9725[0-9]{8}$/.test(digits);
  return false;
};

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const MAX_NAME = 80;
const MAX_PHONE = 20;
const MAX_EMAIL = 120;
const MAX_MESSAGE = 1500;

export default function TalkToMeSection({ compact = false }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [botcheck, setBotcheck] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName?.trim()) {
      newErrors.fullName = "נא להזין שם מלא";
    }
    if (!formData.phone?.trim()) {
      newErrors.phone = "נא להזין מספר טלפון";
    } else if (!isValidIsraeliPhone(formData.phone)) {
      newErrors.phone = "מספר טלפון לא תקין (למשל: 050-1234567)";
    }
    if (formData.email?.trim() && !isValidEmail(formData.email)) {
      newErrors.email = "כתובת אימייל לא תקינה";
    }
    if (!privacyConsent) {
      newErrors.privacyConsent = "יש לאשר את מדיניות הפרטיות להמשך";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `פנייה חדשה מאתר: ${formData.fullName}`,
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email || "לא צוין",
          message: formData.message || "(לא צוין)",
          botcheck,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setErrors({ submit: "אירעה שגיאה. נסו שוב." });
        return;
      }

      event("contact_form_submit", { method: "web3forms" });
      setFormData({ fullName: "", phone: "", email: "", message: "" });
      setBotcheck("");
      setPrivacyConsent(false);
      setIsSent(true);
    } catch {
      setErrors({ submit: "אירעה שגיאה. נסו שוב מאוחר יותר." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`${styles.section} ${compact ? styles.compact : ""}`}
      id="talk-to-me"
    >
      <div className={`${styles.inner} ${compact ? styles.innerCompact : ""}`}>
        <div className={styles.titleGroup}>
          <h2 className={`h2 ${styles.headline}`}>בואו נדבר</h2>
          <p className={`h3 ${styles.subtitle}`}>
            אחזור אליכם תוך 24 שעות - בדרך שנוחה לכם.
          </p>
        </div>

        {/* Quick-contact channels */}
        <div className={styles.quickContactRow}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label="שלחו הודעה בWhatsApp"
          >
            <img
              src="/assets/whatsapp-icon.png"
              alt="WhatsApp"
              className={styles.contactIconImg}
            />
            <span className={styles.iconLinkLabel}>WhatsApp</span>
          </a>
          <a
            href="tel:+972547573914"
            className={styles.iconLink}
            aria-label="לשיחה טלפונית"
          >
            <img
              src="/assets/phone-icon.png"
              alt=""
              className={styles.contactIconImg}
            />
            <span className={styles.iconLinkLabel}>054-7573914</span>
          </a>
        </div>

        <div className={styles.divider}>
          <span className={styles.dividerText}>או שלחו הודעה</span>
        </div>

        {/* Contact form / success state */}
        {isSent ? (
          <div
            className={`${styles.card} ${styles.formCard} ${styles.successCard}`}
            role="alert"
            aria-live="polite"
          >
            <div className={styles.successIconWrap}>
              <span className={styles.successCheckmark}>✓</span>
            </div>
            <p className={styles.successTitle}>ההודעה נשלחה בהצלחה!</p>
            <p className={styles.successSubtitle}>
              אחזור אליכם תוך 24 שעות.
            </p>
            <button
              type="button"
              className={`btn-secondary ${styles.resetBtn}`}
              onClick={() => setIsSent(false)}
            >
              שלח הודעה נוספת
            </button>
          </div>
        ) : (
          <form
            className={`${styles.card} ${styles.formCard}`}
            onSubmit={handleSubmit}
          >
            {errors.submit && (
              <div className={styles.errorMessage} role="alert">
                {errors.submit}
              </div>
            )}

            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              checked={!!botcheck}
              onChange={(e) => setBotcheck(e.target.checked ? "true" : "")}
              style={{
                position: "absolute",
                width: 1,
                height: 1,
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0,0,0,0)",
                whiteSpace: "nowrap",
                border: 0,
                opacity: 0,
                pointerEvents: "none",
              }}
            />

            <div className={styles.formFields}>
              <label className={styles.label}>
                <span className={styles.labelText}>שם מלא</span>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="הכנס את שמך המלא"
                  className={`${styles.input} ${errors.fullName ? styles.inputError : ""}`}
                  aria-invalid={!!errors.fullName}
                  maxLength={MAX_NAME}
                  autoComplete="name"
                />
                {errors.fullName && (
                  <span className={styles.fieldError}>{errors.fullName}</span>
                )}
              </label>

              <label className={styles.label}>
                <span className={styles.labelText}>מספר טלפון</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="050-1234567"
                  className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                  aria-invalid={!!errors.phone}
                  maxLength={MAX_PHONE}
                  autoComplete="tel"
                />
                {errors.phone && (
                  <span className={styles.fieldError}>{errors.phone}</span>
                )}
              </label>

              <label className={styles.label}>
                <span className={styles.labelText}>
                  אימייל <span className={styles.optional}>(אופציונלי)</span>
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                  aria-invalid={!!errors.email}
                  maxLength={MAX_EMAIL}
                  autoComplete="email"
                />
                {errors.email && (
                  <span className={styles.fieldError}>{errors.email}</span>
                )}
              </label>

              <label className={styles.label}>
                <span className={styles.labelText}>במה אפשר לעזור לכם?</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="ספרו לי במה אתם צריכים עזרה..."
                  className={`${styles.input} ${styles.textarea}`}
                  rows={compact ? 3 : 4}
                  maxLength={MAX_MESSAGE}
                />
              </label>
            </div>

            <div className={styles.consentWrapper}>
              <label className={styles.consentLabel}>
                <input
                  type="checkbox"
                  checked={privacyConsent}
                  onChange={(e) => {
                    setPrivacyConsent(e.target.checked);
                    if (errors.privacyConsent)
                      setErrors((prev) => ({ ...prev, privacyConsent: null }));
                  }}
                  className={`${styles.consentCheckbox} ${errors.privacyConsent ? styles.consentCheckboxError : ""}`}
                  aria-invalid={!!errors.privacyConsent}
                />
                <span className={styles.consentText}>
                  אני מאשר/ת את{" "}
                  <Link
                    href="/privacy-policy"
                    className={styles.consentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    מדיניות הפרטיות
                  </Link>{" "}
                  ומסכים/ה לשימוש בפרטי לצורכי קשר ושירות.*
                </span>
              </label>
              {errors.privacyConsent && (
                <span className={styles.fieldError}>{errors.privacyConsent}</span>
              )}
            </div>

            <button
              type="submit"
              className={`btn-primary ${styles.submitBtn}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "שולח..." : "שליחה"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
