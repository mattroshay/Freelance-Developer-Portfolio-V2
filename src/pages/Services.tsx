import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { useRevealGroup } from "../hooks/useReveal";

// Order per copy deck: the two AI offerings lead, Discovery closes.
const SERVICES = ["aiWorkflow", "aiIntegration", "webDev", "discovery"];

export function Services() {
  const { t } = useTranslation();
  usePageMeta("services");

  const headRef = useRevealGroup<HTMLDivElement>();
  const gridRef = useRevealGroup<HTMLDivElement>();

  return (
    <section>
      <div className="ds-container">
        <div ref={headRef} className="ds-section-head" style={{ marginBottom: 64 }}>
          <div className="ds-section-head__text">
            <div data-reveal className="ds-eyebrow">
              {t("nav.services")}
            </div>
            <h1 data-reveal className="ds-h1">
              {t("services.title")}
            </h1>
            <p data-reveal className="ds-lede">
              {t("services.subtext")}
            </p>
          </div>
        </div>

        <div ref={gridRef}>
          <div className="ds-cellgrid" style={{ marginBottom: 64 }}>
            {SERVICES.map((key, i) => (
              <div data-reveal key={key} className="ds-cell">
                <span className="ds-cell__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="ds-cell__body">
                  <span className="ds-cell__title">{t(`services.list.${key}.title`)}</span>
                  <span className="ds-body ds-accent" style={{ fontSize: 15 }}>
                    {t(`services.list.${key}.hook`)}
                  </span>
                  <span className="ds-dim">{t(`services.list.${key}.body`)}</span>
                </span>
              </div>
            ))}
          </div>

          <div data-reveal className="ds-btn-row" style={{ justifyContent: "center" }}>
            <Link to="/contact" className="ds-btn ds-btn--primary">
              {t("hero.bookCall")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
