import { useTranslation } from "react-i18next";
import { useRevealGroup } from "../hooks/useReveal";

const FACT_KEYS = ["experience", "certification", "tooling", "location"];

export function About() {
  const { t } = useTranslation();
  const revealRef = useRevealGroup<HTMLElement>();

  return (
    <section id="about" ref={revealRef}>
      <div className="ds-container ds-strip" style={{ alignItems: "start" }}>
        <div className="ds-strip__text">
          <div data-reveal className="ds-eyebrow">
            {t("nav.about")}
          </div>
          <h1 data-reveal className="ds-h1">
            {t("about.title")}
          </h1>
          <p data-reveal className="ds-lede">
            {t("about.paragraph1")}
          </p>
          <p data-reveal className="ds-body">
            {t("about.paragraph2")}
          </p>
          <p data-reveal className="ds-body">
            {t("about.paragraph3")}
          </p>
        </div>

        <div data-reveal className="ds-facts" style={{ marginTop: 46 }}>
          {FACT_KEYS.map((key) => (
            <div key={key} className="ds-facts__row">
              <span>{t(`about.stats.${key}`)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
