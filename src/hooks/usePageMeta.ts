import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type PageKey = "home" | "about" | "services" | "work" | "contact" | "legal" | "privacy";

/**
 * Sets the document title and meta description for the current page,
 * localised via i18next (see `meta.*` keys in src/locales/*.json).
 * Re-runs when the active language changes so EN/FR toggles update the
 * meta tags in place.
 */
export function usePageMeta(page: PageKey) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t(`meta.${page}.title`);

    let description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute("content", t(`meta.${page}.description`));
  }, [page, t, i18n.language]);
}
