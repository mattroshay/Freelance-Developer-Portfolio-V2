import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  getStoredConsent,
  storeConsent,
  loadGtm,
  isGtmLoaded,
  type ConsentChoice,
} from "../utils/gtm";

/** Dispatched by the footer's "Cookie preferences" link to reopen the banner. */
export const OPEN_CONSENT_EVENT = "cookie-consent:open";

/**
 * CNIL-compliant cookie banner: analytics (GTM/GA) only load after an
 * explicit "Accept"; "Decline" is equally prominent and remembered, so
 * visitors are not re-prompted on every page view.
 */
export function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored === "accepted") {
      loadGtm();
    } else if (stored === null) {
      setVisible(true);
    }

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const decide = (choice: ConsentChoice) => {
    storeConsent(choice);
    setVisible(false);
    if (choice === "accepted") {
      loadGtm();
    } else if (isGtmLoaded()) {
      // Consent withdrawn after GTM was already running: a reload is the only
      // way to actually stop the loaded trackers.
      window.location.reload();
    }
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label={t("consent.ariaLabel")}
      className="ds-panel"
      style={{
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(640px, calc(100vw - 32px))",
        zIndex: 100,
        padding: 24,
        background: "#0b0a09",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <p className="ds-body" style={{ fontSize: 14 }}>
        {t("consent.message")}{" "}
        <Link to="/privacy" className="ds-footer__link" style={{ textDecoration: "underline" }}>
          {t("consent.learnMore")}
        </Link>
      </p>
      <div className="ds-btn-row">
        <button
          type="button"
          className="ds-btn ds-btn--primary ds-btn--sm"
          onClick={() => decide("accepted")}
        >
          {t("consent.accept")}
        </button>
        <button
          type="button"
          className="ds-btn ds-btn--secondary ds-btn--sm"
          onClick={() => decide("rejected")}
        >
          {t("consent.reject")}
        </button>
      </div>
    </div>
  );
}
