# SEO Report — mattroshay.com — 2026-07-10

## Score: 74.5 → 97.4 (site-wide, 0–100)

Baseline is the live site (5 pages fetched as a crawler sees them); the after-score
is the newly built output with prerendering. Deploy to make it real.

## What was fixed

- `public/sitemap.xml` — now lists all 5 main routes (was homepage-only), with EN/FR hreflang alternates. Search engines can now discover every page.
- `src/hooks/usePageMeta.ts` — extended: each route now sets its own canonical URL, og:title/description/url, twitter:title/description, and hreflang alternates at runtime. Previously every rendered route kept the static canonical pointing at `/`, telling Google all pages were duplicates of the homepage.
- `index.html` — title trimmed 76→56 chars and description 238→156 chars (both were truncating in search results); OG/Twitter tags aligned to the same "AI Product Builder & Automation Developer" positioning as the runtime meta (they previously said "Freelance Full-Stack Developer", telling Google two different stories); removed the obsolete `keywords` meta tag (ignored by Google since 2009).
- `scripts/prerender.mjs` (new) + `package.json` build script — after `vite build`, generates static HTML for all 7 routes from the same locale strings React renders: correct per-route metadata **and real crawlable content** (h1, copy, nav) in the raw HTML. No new dependencies, no headless browser — Heroku-safe. React replaces the static content on load (`createRoot().render`), so visitors see zero difference.

## What needs a human decision

- **Positioning consistency (JSON-LD)**: the Person schema still says jobTitle "Freelance Full-Stack Developer & AI Integration Consultant" while metadata now says "AI Product Builder & Automation Developer". Harmless, but pick one story if you care.
- **`?lang=` hreflang URLs**: EN/FR variants share one URL with a query param, and both declare the clean URL as canonical — a mild contradiction. The proper fix is path-based locales (`/fr/...`), which is a routing project, not an SEO tweak. Fine to leave as-is.
- **Thin content warnings**: most pages are under 300 words of body text. Normal for a portfolio; if you ever want to rank for competitive queries ("freelance AI developer Bordeaux"), a few case-study pages or a small blog would be the highest-leverage next move.

## What to do next

1. Deploy (git push to Heroku) — the build now includes the prerender step automatically.
2. In Google Search Console: resubmit the sitemap and request indexing of the 4 sub-routes.
3. Verify with `curl -s https://mattroshay.com/about | grep '<title>'` after deploy — you should see the About title, not the homepage one.
4. Consider case-study/blog content (see above) — the remaining 2.6 points and the real ranking upside live there.

## How past fixes held up

First run — nothing to compare yet. Run this skill again in a few weeks: it will
verify these fixes survived deploys and check whether Search Console picked up the routes.
