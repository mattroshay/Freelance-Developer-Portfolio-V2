const GTM_ID = "GTM-MQ4259NZ";
const CONSENT_KEY = "cookie-consent";

export type ConsentChoice = "accepted" | "rejected";

export function getStoredConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

export function storeConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Storage unavailable (private mode); the banner will just re-ask next visit.
  }
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function isGtmLoaded(): boolean {
  return !!document.querySelector('script[src^="https://www.googletagmanager.com/gtm.js"]');
}

/**
 * Injects the Google Tag Manager snippet at runtime. GTM is intentionally
 * absent from index.html: audience-measurement trackers may only run after
 * the visitor accepts via the cookie banner (GDPR/ePrivacy prior consent).
 */
export function loadGtm() {
  if (isGtmLoaded()) {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}
