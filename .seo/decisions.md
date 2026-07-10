# Decisions

## Run 1 — 2026-07-10
- Matt approved all three fix groups interactively (sitemap+canonicals, static metadata cleanup, prerendering).
- Prerender implemented WITHOUT a headless browser: Heroku runs `npm run build` during deploy, and adding Playwright/Puppeteer there is heavy and fragile. Static HTML is generated from src/locales/en.json — the same strings React renders — via scripts/prerender.mjs.
- Prerendered content is EN (x-default); FR stays client-side via ?lang= URLs. Path-based locales deliberately not attempted.
- Aligned all static metadata to the "AI Product Builder & Automation Developer" positioning (from src/locales meta.home), replacing the older "Freelance Full-Stack Developer" phrasing in index.html — the runtime meta was treated as the owner's current voice.
- Legal pages (mentions-legales, privacy) prerendered with correct meta but deliberately left OUT of sitemap.xml.
- Removed the keywords meta tag; kept the Bing msvalidate verification tag.
