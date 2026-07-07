import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CALENDLY_URL, CONTACT_PHONE } from "../config/site";
import { useRevealGroup } from "../hooks/useReveal";

export function Contact() {
  const { t } = useTranslation();
  const headRef = useRevealGroup<HTMLDivElement>();
  const bodyRef = useRevealGroup<HTMLDivElement>();

  const perks = [
    t("contact.calendly.perk1"),
    t("contact.calendly.perk2"),
    t("contact.calendly.perk3"),
  ];

  return (
    <section id="contact">
      <div className="ds-container">
        <div ref={headRef} className="ds-section-head" style={{ marginBottom: 48 }}>
          <div className="ds-section-head__text">
            <div data-reveal className="ds-eyebrow">
              {t("nav.contact")}
            </div>
            <h1 data-reveal className="ds-h1">
              {t("contact.title")}
            </h1>
            <p data-reveal className="ds-lede">
              {t("contact.description")}
            </p>
          </div>
        </div>

        <div ref={bodyRef}>
          {/* Calendly booking — the hero of this page */}
          <div
            data-reveal
            id="book"
            className="ds-panel"
            style={{ marginBottom: 24, borderColor: "rgba(247,148,30,0.35)" }}
          >
            <div style={{ maxWidth: 640, display: "flex", flexDirection: "column", gap: 18 }}>
              <h2 className="ds-h2 ds-h2--strip">{t("contact.calendly.title")}</h2>
              <p className="ds-body">{t("contact.calendly.subtitle")}</p>

              <ul style={{ display: "flex", flexWrap: "wrap", gap: "10px 28px", margin: 0 }}>
                {perks.map((perk, index) => (
                  <li
                    key={index}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                    className="ds-dim"
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#f7941e",
                        flexShrink: 0,
                      }}
                    />
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="ds-btn-row" style={{ marginTop: 6 }}>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ds-btn ds-btn--primary"
                >
                  {t("contact.calendly.button")}
                </a>
              </div>

              <p className="ds-dim" style={{ fontSize: 13 }}>
                {t("contact.calendly.fallback")}
              </p>
            </div>
          </div>

          <div className="ds-strip" style={{ alignItems: "start", gap: 24 }}>
            {/* Contact form */}
            <div data-reveal className="ds-panel">
              <h2 className="ds-cell__title" style={{ display: "block", marginBottom: 24 }}>
                {t("contact.form.title")}
              </h2>

              <form
                action="https://formspree.io/f/xvgwdlje"
                method="POST"
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: 20,
                  }}
                >
                  <div className="ds-field">
                    <label htmlFor="name">{t("contact.form.name")} *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder={t("contact.form.namePlaceholder")}
                      className="ds-input"
                    />
                  </div>
                  <div className="ds-field">
                    <label htmlFor="email">{t("contact.form.email")} *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={t("contact.form.emailPlaceholder")}
                      className="ds-input"
                    />
                  </div>
                </div>

                <div className="ds-field">
                  <label htmlFor="subject">{t("contact.form.subject")} *</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder={t("contact.form.subjectPlaceholder")}
                    className="ds-input"
                  />
                </div>

                <div className="ds-field">
                  <label htmlFor="message">{t("contact.form.message")} *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder={t("contact.form.messagePlaceholder")}
                    className="ds-textarea"
                  />
                </div>

                <div>
                  <button type="submit" className="ds-btn ds-btn--primary">
                    {t("contact.form.send")}
                  </button>
                </div>

                <p className="ds-dim" style={{ fontSize: 13, margin: 0 }}>
                  {t("contact.form.consentNotice")}{" "}
                  <Link to="/privacy" style={{ color: "inherit", textDecoration: "underline" }}>
                    {t("contact.form.consentLink")}
                  </Link>
                  .
                </p>
              </form>
            </div>

            {/* Contact information */}
            <div data-reveal style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <h2 className="ds-cell__title" style={{ display: "block" }}>
                  {t("contact.info.title")}
                </h2>
                <p className="ds-dim">{t("contact.info.description")}</p>
              </div>

              <div className="ds-facts">
                <div className="ds-facts__row">
                  <span className="ds-footer__heading" style={{ width: 88, flexShrink: 0 }}>
                    {t("contact.info.phone")}
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <a
                      href={`tel:${CONTACT_PHONE}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {t("contact.info.phoneValue")}
                    </a>
                    <span className="ds-dim" style={{ fontSize: 13 }}>
                      {t("contact.info.phoneDescription")}
                    </span>
                  </span>
                </div>
                <div className="ds-facts__row">
                  <span className="ds-footer__heading" style={{ width: 88, flexShrink: 0 }}>
                    {t("contact.info.location")}
                  </span>
                  <span>{t("contact.info.locationValue")}</span>
                </div>
              </div>

              <div className="ds-panel" style={{ padding: 24 }}>
                <div
                  className="ds-cell__title"
                  style={{ display: "block", fontSize: 17, marginBottom: 10 }}
                >
                  {t("contact.info.quickResponse")}
                </div>
                <p className="ds-dim" style={{ fontSize: 14 }}>
                  {t("contact.info.quickResponseDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
