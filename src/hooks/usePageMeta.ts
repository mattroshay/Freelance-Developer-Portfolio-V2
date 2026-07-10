import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type PageKey = "home" | "about" | "services" | "work" | "contact" | "legal" | "privacy";

const SITE_URL = "https://mattroshay.com";

const PAGE_PATHS: Record<PageKey, string> = {
  home: "/",
  about: "/about",
  services: "/services",
  work: "/work",
  contact: "/contact",
  legal: "/mentions-legales",
  privacy: "/privacy",
};

/** Upsert a <meta> tag identified by an attribute (name= or property=). */
function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Upsert a <link> tag by rel (and optional hreflang). */
function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
  let el = document.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sets the document title, meta description, canonical URL, hreflang
 * alternates, and Open Graph / Twitter tags for the current page,
 * localised via i18next (see `meta.*` keys in src/locales/*.json).
 *
 * The per-page canonical matters because the server sends the same
 * index.html (whose static canonical points at "/") for every route —
 * without this update, rendered pages would tell search engines they
 * are all duplicates of the homepage.
 *
 * Re-runs when the active language changes so EN/FR toggles update the
 * meta tags in place.
 */
export function usePageMeta(page: PageKey) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const title = t(`meta.${page}.title`);
    const description = t(`meta.${page}.description`);
    const url = `${SITE_URL}${PAGE_PATHS[page]}`;

    document.title = title;
    setMeta("name", "description", description);

    setLink("canonical", url);
    setLink("alternate", `${url}?lang=en`, "en");
    setLink("alternate", `${url}?lang=fr`, "fr");
    setLink("alternate", url, "x-default");

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
  }, [page, t, i18n.language]);
}
