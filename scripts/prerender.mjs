/**
 * Post-build prerender — generates static, crawlable HTML for each route.
 *
 * Why: this is a client-rendered SPA, so the server sends an empty
 * <div id="root"> with homepage metadata for EVERY route. Search engines
 * that don't execute JS (and all social link unfurlers) see no content,
 * duplicate titles, and a canonical pointing at "/" on every page.
 *
 * What it does (no headless browser, no extra dependencies):
 *   1. reads build/index.html as a template
 *   2. for each route, rewrites <title>, description, canonical, hreflang,
 *      Open Graph and Twitter tags from src/locales/en.json (x-default)
 *   3. injects real semantic content (h1, copy, nav) into #root, built
 *      from the same locale strings the React app renders — React's
 *      createRoot().render() replaces it on hydration
 *   4. writes build/<route>/index.html (serve -s prefers real files
 *      over the SPA fallback, so each route now serves its own HTML)
 *
 * Runs as part of `npm run build` (see package.json). If a pattern stops
 * matching after an index.html change, this script throws so the build
 * fails loudly instead of shipping wrong metadata.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE_URL = "https://mattroshay.com";

const en = JSON.parse(readFileSync(join(root, "src/locales/en.json"), "utf8"));
const t = (key) => key.split(".").reduce((o, k) => o?.[k], en) ?? (() => { throw new Error(`missing locale key: ${key}`); })();

const esc = (s) => s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

const template = readFileSync(join(root, "build/index.html"), "utf8");

function replaceOnce(html, pattern, replacement, what) {
  if (!pattern.test(html)) throw new Error(`prerender: could not find ${what} in built index.html`);
  return html.replace(pattern, replacement);
}

function setHead(html, { title, description, path }) {
  const url = `${SITE_URL}${path}`;
  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`, "<title>");
  html = replaceOnce(html, /(<meta\s+name="description"\s+content=")[\s\S]*?("\s*\/>)/, `$1${esc(description)}$2`, "meta description");
  html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`, "canonical");
  html = replaceOnce(html, /(<link rel="alternate" hreflang="en" href=")[^"]*(")/, `$1${url}?lang=en$2`, "hreflang en");
  html = replaceOnce(html, /(<link rel="alternate" hreflang="fr" href=")[^"]*(")/, `$1${url}?lang=fr$2`, "hreflang fr");
  html = replaceOnce(html, /(<link rel="alternate" hreflang="x-default" href=")[^"]*(")/, `$1${url}$2`, "hreflang x-default");
  html = replaceOnce(html, /(<meta property="og:title" content=")[\s\S]*?("\s*\/>)/, `$1${esc(title)}$2`, "og:title");
  html = replaceOnce(html, /(<meta\s+property="og:description"\s+content=")[\s\S]*?("\s*\/>)/, `$1${esc(description)}$2`, "og:description");
  html = replaceOnce(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`, "og:url");
  html = replaceOnce(html, /(<meta name="twitter:title" content=")[\s\S]*?("\s*\/>)/, `$1${esc(title)}$2`, "twitter:title");
  html = replaceOnce(html, /(<meta\s+name="twitter:description"\s+content=")[\s\S]*?("\s*\/>)/, `$1${esc(description)}$2`, "twitter:description");
  return html;
}

const nav = () => `<header><nav aria-label="Main">
  <a href="/">${esc(t("nav.home"))}</a> <a href="/services">${esc(t("nav.services"))}</a>
  <a href="/work">${esc(t("nav.work"))}</a> <a href="/about">${esc(t("nav.about"))}</a>
  <a href="/contact">${esc(t("nav.contact"))}</a>
</nav></header>`;

const footer = () => `<footer><p>${esc(t("footer.description"))}</p>
  <a href="/mentions-legales">${esc(t("footer.legalNotice"))}</a> <a href="/privacy">${esc(t("footer.privacyPolicy"))}</a></footer>`;

const p = (key) => `<p>${esc(t(key))}</p>`;
const SERVICE_KEYS = ["webDev", "aiIntegration", "aiWorkflow", "discovery"];
const PROJECT_KEYS = ["petHealth", "sarahPsy", "wealthDashboard", "video2course", "bitconsulting", "matchmeal", "flatrent"];

const services = () => SERVICE_KEYS.map((k) =>
  `<section><h2>${esc(t(`services.list.${k}.title`))}</h2><p>${esc(t(`services.list.${k}.hook`))}</p><p>${esc(t(`services.list.${k}.body`))}</p></section>`).join("\n");

const projects = () => PROJECT_KEYS.map((k) =>
  `<section><h2>${esc(t(`projects.list.${k}.title`))}</h2><p><em>${esc(t(`projects.list.${k}.label`))}</em></p><p>${esc(t(`projects.list.${k}.description`))}</p></section>`).join("\n");

const ROUTES = [
  {
    path: "/", page: "home",
    main: `<h1>${esc(t("hero.greeting"))} ${esc(t("hero.name"))}</h1>
<p>${esc(t("hero.tagline"))} ${esc(t("hero.description"))} ${esc(t("hero.descriptionBold"))} ${esc(t("hero.descriptionEnd"))}</p>
${p("hero.availability")}
<h2>${esc(t("home.whatIDo.title"))}</h2>
${SERVICE_KEYS.map((k) => `<p><a href="/services">${esc(t(`services.list.${k}.title`))}</a> — ${esc(t(`services.list.${k}.hook`))}</p>`).join("\n")}
<h2>${esc(t("home.about.title"))}</h2>
${p("about.paragraph1")}
<h2>${esc(t("home.work.title"))}</h2>
${["petHealth", "wealthDashboard", "video2course"].map((k) => `<p><a href="/work">${esc(t(`projects.list.${k}.title`))}</a> — ${esc(t(`projects.list.${k}.descriptionShort`))}</p>`).join("\n")}`,
  },
  {
    path: "/services", page: "services",
    main: `<h1>${esc(t("services.title"))}</h1>${p("services.subtext")}${services()}`,
  },
  {
    path: "/work", page: "work",
    main: `<h1>${esc(t("projects.title"))}</h1>${p("projects.description")}${projects()}`,
  },
  {
    path: "/about", page: "about",
    main: `<h1>${esc(t("about.title"))}</h1>${p("about.paragraph1")}${p("about.paragraph2")}${p("about.paragraph3")}
<ul>${["experience", "certification", "tooling", "location"].map((k) => `<li>${esc(t(`about.stats.${k}`))}</li>`).join("")}</ul>`,
  },
  {
    path: "/contact", page: "contact",
    main: `<h1>${esc(t("contact.title"))}</h1>${p("contact.description")}${p("contact.calendly.subtitle")}
<p>${esc(t("contact.info.location"))}: ${esc(t("contact.info.locationValue"))}</p>`,
  },
  {
    path: "/mentions-legales", page: "legal",
    main: `<h1>${esc(t("meta.legal.title"))}</h1><p>${esc(t("meta.legal.description"))}</p>`,
  },
  {
    path: "/privacy", page: "privacy",
    main: `<h1>${esc(t("meta.privacy.title"))}</h1><p>${esc(t("meta.privacy.description"))}</p>`,
  },
];

for (const route of ROUTES) {
  let html = setHead(template, {
    title: t(`meta.${route.page}.title`),
    description: t(`meta.${route.page}.description`),
    path: route.path,
  });
  const staticBody = `<div id="root">${nav()}<main>${route.main}</main>${footer()}</div>`;
  html = replaceOnce(html, /<div id="root"><\/div>/, staticBody, "#root mount point");

  const outDir = route.path === "/" ? join(root, "build") : join(root, "build", route.path.slice(1));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html);
  console.log(`prerendered ${route.path} -> ${outDir}/index.html`);
}
console.log(`prerender: ${ROUTES.length} routes done`);
