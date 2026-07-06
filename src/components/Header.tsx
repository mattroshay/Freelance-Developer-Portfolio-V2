import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { MRLogo } from "./MRLogo";

const NAV_ITEMS = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "services", path: "/services" },
  { key: "work", path: "/work" },
  { key: "contact", path: "/contact" },
];

function LangPill() {
  const { i18n } = useTranslation();
  const isFr = i18n.language?.startsWith("fr") ?? false;

  return (
    <div className={`ds-pill${isFr ? " is-fr" : ""}`}>
      <span className="ds-pill__thumb" aria-hidden="true" />
      <button
        type="button"
        className={`ds-pill__opt${!isFr ? " is-active" : ""}`}
        onClick={() => i18n.changeLanguage("en")}
        aria-label="Switch to English"
        aria-pressed={!isFr}
      >
        EN
      </button>
      <button
        type="button"
        className={`ds-pill__opt${isFr ? " is-active" : ""}`}
        onClick={() => i18n.changeLanguage("fr")}
        aria-label="Passer en français"
        aria-pressed={isFr}
      >
        FR
      </button>
    </div>
  );
}

export function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="ds-nav">
      <div className="ds-nav__inner">
        <Link to="/" className="ds-nav__brand">
          <MRLogo height={22} />
          <span className="ds-nav__name">{t("hero.name")}</span>
        </Link>

        <div className="ds-nav__right">
          <nav className="ds-nav__links" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`ds-nav__link${isActive(item.path) ? " is-active" : ""}`}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          <div className="ds-nav__actions">
            <LangPill />

            <Link to="/contact" className="ds-btn ds-btn--primary ds-btn--sm ds-nav__cta">
              {t("nav.bookCall")}
            </Link>

            <button
              type="button"
              className="ds-nav__burger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="ds-nav__mobile" aria-label="Primary mobile">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`ds-nav__link${isActive(item.path) ? " is-active" : ""}`}
              aria-current={isActive(item.path) ? "page" : undefined}
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="ds-btn ds-btn--primary ds-btn--sm"
          >
            {t("nav.bookCall")}
          </Link>
        </nav>
      )}
    </header>
  );
}
