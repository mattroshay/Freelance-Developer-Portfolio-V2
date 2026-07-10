# Learnings

## Site conventions
- [run 1] Positioning voice: "AI Product Builder & Automation Developer" (meta.home in locales) is current; older "Freelance Full-Stack Developer" phrasing is being phased out. Locale JSON meta.* keys are the source of truth for titles/descriptions — edit THERE, not in components.
- [run 1] All user-visible strings live in src/locales/{en,fr}.json (react-i18next). Any prerendered/static content must be generated from these files or it will drift from the app.
- [run 1] Deploy = git push to Heroku; nodejs buildpack runs `npm run build` then Procfile `serve -s build`. Anything added to the build must be dependency-light (no headless browsers).

## Active hypotheses
- [?, run 1] scripts/prerender.mjs regenerates route HTML each build from locale JSONs. If Matt adds a route (new page in src/pages/ + App.tsx) without adding it to ROUTES in prerender.mjs and sitemap.xml, that route ships without prerendering. Check for new routes at the start of every run.
- [?, run 1] The prerendered static content is replaced by React on load (createRoot().render). If Matt reports a visual flash on slow connections, consider matching the static markup to ds-* classes more closely or inlining minimal critical styles.
- [?, run 1] Verify next run: did Search Console pick up /about, /services, /work, /contact after the sitemap expansion? If not within ~4 weeks, request indexing manually.
