import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { usePageMeta } from "../hooks/usePageMeta";
import { useRevealGroup } from "../hooks/useReveal";

// Product-first positioning: building leads, then AI/automation, Discovery closes.
const SERVICE_KEYS = ["webDev", "aiIntegration", "aiWorkflow", "discovery"];

// Home work teasers: featured + two cards (deck order).
// petHealth is temporarily unlisted pending client approval to publish.
const WORK_TEASERS = [
  { key: "sarahPsy", image: "/images/projects/sarah-psy.jpg", featured: true, tags: ["Next.js", "App Router", "i18n (EN/FR)", "SEO"] },
  { key: "bitconsulting", image: "/images/projects/b-itconsulting.jpg" },
  { key: "matchmeal", image: "/images/projects/matchmeal-screen.png" },
];

const ABOUT_FACT_KEYS = ["experience", "certification", "tooling", "location"];

export function Home() {
  const { t } = useTranslation();
  usePageMeta("home");

  const servicesRef = useRevealGroup<HTMLElement>();
  const workRef = useRevealGroup<HTMLElement>();
  const aboutRef = useRevealGroup<HTMLElement>();
  const ctaRef = useRevealGroup<HTMLElement>();

  const featured = WORK_TEASERS.find((w) => w.featured)!;
  const others = WORK_TEASERS.filter((w) => !w.featured);

  return (
    <>
      <Hero />

      {/* Services preview — numbered 2x2 grid */}
      <section id="what-i-do" ref={servicesRef} className="ds-section">
        <div className="ds-container">
          <div className="ds-section-head">
            <div className="ds-section-head__text">
              <div data-reveal className="ds-eyebrow">
                {t("home.whatIDo.title")}
              </div>
              <h2 data-reveal className="ds-h2">
                {t("hero.brandLine")}
              </h2>
              <p data-reveal className="ds-dim">
                {t("home.whatIDo.subtext")}
              </p>
            </div>
            <Link data-reveal to="/services" className="ds-mono-link">
              {t("home.whatIDo.link")} →
            </Link>
          </div>

          <div className="ds-cellgrid">
            {SERVICE_KEYS.map((key, i) => (
              <Link data-reveal key={key} to="/services" className="ds-cell">
                <span className="ds-cell__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="ds-cell__body">
                  <span className="ds-cell__title">{t(`services.list.${key}.title`)}</span>
                  <span className="ds-dim">{t(`services.list.${key}.hook`)}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About strip — statement + fact list */}
      <section ref={aboutRef} className="ds-section ds-section--alt">
        <div className="ds-container ds-strip">
          <div className="ds-strip__text">
            <div data-reveal className="ds-eyebrow">
              {t("home.about.title")}
            </div>
            <h2 data-reveal className="ds-h2 ds-h2--strip">
              {t("about.paragraph1")}
            </h2>
            <Link data-reveal to="/about" className="ds-mono-link">
              {t("home.about.link")} →
            </Link>
          </div>
          <div data-reveal className="ds-facts">
            {ABOUT_FACT_KEYS.map((key) => (
              <div key={key} className="ds-facts__row">
                <span>{t(`about.stats.${key}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA — centered */}
      <section ref={ctaRef} className="ds-section">
        <div className="ds-container ds-cta">
          <h2 data-reveal className="ds-h2 ds-h2--cta">
            {t("home.cta.title")}
          </h2>
          <p data-reveal className="ds-lede">
            {t("home.cta.description")}
          </p>
          <div data-reveal className="ds-btn-row" style={{ marginTop: 8 }}>
            <Link to="/contact" className="ds-btn ds-btn--primary">
              {t("home.cta.button")}
            </Link>
            <Link to="/work" className="ds-btn ds-btn--secondary">
              {t("hero.seeWork")}
            </Link>
          </div>
        </div>
      </section>

      {/* Work preview — featured card + two cards */}
      <section ref={workRef} className="ds-section ds-section--alt">
        <div className="ds-container">
          <div className="ds-section-head">
            <div className="ds-section-head__text">
              <div data-reveal className="ds-eyebrow">
                {t("home.work.title")}
              </div>
              <p data-reveal className="ds-lede">
                {t("home.work.subtext")}
              </p>
            </div>
            <Link data-reveal to="/work" className="ds-mono-link">
              {t("home.work.link")} →
            </Link>
          </div>

          <Link
            data-reveal
            to="/work"
            className="ds-card ds-card--featured"
            style={{ marginBottom: 24 }}
          >
            <div className="ds-card__media">
              <img
                src={featured.image}
                alt={t(`projects.list.${featured.key}.imageAlt`)}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="ds-card__content">
              <span className="ds-card__label">{t(`projects.list.${featured.key}.label`)}</span>
              <h3 className="ds-card__title">{t(`projects.list.${featured.key}.title`)}</h3>
              <p className="ds-card__desc">
                {t(`projects.list.${featured.key}.description`)}
              </p>
              <div className="ds-tags" style={{ marginTop: 4 }}>
                {featured.tags!.map((tag) => (
                  <span key={tag} className="ds-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>

          <div className="ds-cardgrid">
            {others.map((proj) => (
              <Link data-reveal key={proj.key} to="/work" className="ds-card">
                <div className="ds-card__media">
                  <img
                    src={proj.image}
                    alt={t(`projects.list.${proj.key}.imageAlt`)}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="ds-card__content">
                  <h3 className="ds-card__title">{t(`projects.list.${proj.key}.title`)}</h3>
                  <p className="ds-card__desc">{t(`projects.list.${proj.key}.description`)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
