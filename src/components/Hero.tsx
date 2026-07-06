import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MRLogoDraw } from "./MRLogo";
import { useRevealGroup } from "../hooks/useReveal";

export function Hero() {
  const { t } = useTranslation();
  const revealRef = useRevealGroup<HTMLElement>();

  return (
    <section id="hero" ref={revealRef} className="ds-hero">
      <div className="ds-hero__text">
        <div data-reveal className="ds-eyebrow">
          {t("hero.availability")}
        </div>

        <h1 data-reveal className="ds-h1">
          {t("hero.greeting")} <span className="ds-accent">{t("hero.name")}</span>
        </h1>

        <p data-reveal className="ds-lede" style={{ maxWidth: 560 }}>
          <span className="ds-accent">{t("hero.tagline")}</span>
          <br />
          {t("hero.description")}{" "}
          <span className="ds-strong">{t("hero.descriptionBold")}</span>{" "}
          {t("hero.descriptionEnd")}
        </p>

        <div data-reveal className="ds-btn-row" style={{ marginTop: 4 }}>
          <Link to="/contact" className="ds-btn ds-btn--primary">
            {t("hero.bookCall")}
          </Link>
          <Link to="/work" className="ds-btn ds-btn--secondary">
            {t("hero.seeWork")}
          </Link>
        </div>
      </div>

      <div className="ds-hero__mark">
        <MRLogoDraw width={360} />
      </div>
    </section>
  );
}
