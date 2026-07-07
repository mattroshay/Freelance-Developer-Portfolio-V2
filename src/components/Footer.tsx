import { Heart, Coffee } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MRLogo } from "./MRLogo";
import { GITHUB_URL, LINKEDIN_URL, CONTACT_EMAIL, CONTACT_PHONE } from "../config/site";

const NAV_ITEMS = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "services", path: "/services" },
  { key: "work", path: "/work" },
  { key: "contact", path: "/contact" },
];

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ds-footer">
      <div className="ds-footer__grid">
        <div className="ds-footer__brandcol">
          <div className="ds-footer__brand">
            <MRLogo height={24} />
            <span className="ds-nav__name">{t("hero.name")}</span>
          </div>
          <p className="ds-dim">{t("footer.description")}</p>
        </div>

        <div className="ds-footer__col">
          <div className="ds-footer__heading">{t("footer.navigation")}</div>
          {NAV_ITEMS.map((item) => (
            <Link key={item.key} to={item.path} className="ds-footer__link">
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </div>

        <div className="ds-footer__col">
          <div className="ds-footer__heading">{t("footer.getInTouch")}</div>
          <a href={`mailto:${CONTACT_EMAIL}`} className="ds-footer__link">
            {CONTACT_EMAIL}
          </a>
          <a href={`tel:${CONTACT_PHONE}`} className="ds-footer__link">
            {t("contact.info.phoneValue")}
          </a>
          <div className="ds-footer__social">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ds-footer__mono"
            >
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ds-footer__mono"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="ds-footer__bottom">
        <div style={{ display: "inline-flex", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
          © {currentYear} {t("footer.copyright")}
          <Heart size={12} color="#f7941e" aria-hidden="true" />
          <span className="ds-sr-only">{t("footer.love")}</span>
          {t("footer.and")}
          <Coffee size={12} color="#f7941e" aria-hidden="true" />
          <span className="ds-sr-only">{t("footer.coffee")}</span>.
        </div>
        <div style={{ display: "inline-flex", flexWrap: "wrap", gap: 16 }}>
          <Link to="/mentions-legales" className="ds-footer__link">
            {t("footer.legalNotice")}
          </Link>
          <Link to="/privacy" className="ds-footer__link">
            {t("footer.privacyPolicy")}
          </Link>
        </div>
        <div>{t("contact.info.locationValue")}</div>
      </div>
    </footer>
  );
}
