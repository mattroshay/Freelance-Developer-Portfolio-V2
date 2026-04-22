# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000 (opens browser automatically)
npm run build    # Build to ./build/ directory (used by Heroku)
```

There is no lint or test setup in this project.

**Deployment:** Heroku serves the static build via `serve -s build` (see `Procfile`).

## Architecture

Single-page portfolio app built with React 18 + TypeScript + Vite. No routing — the entire site is one scrollable page with section anchors (`#hero`, `#about`, `#skills`, `#projects`, `#contact`).

**Page structure** (`src/App.tsx`): `AnimatedBackground` → `Header` → `Hero` → `About` → `Skills` → `Projects` → `Contact` → `Footer`. Each is a standalone component in `src/components/`.

**i18n:** English/French support via `react-i18next`. Translation strings live in `src/locales/en.json` and `src/locales/fr.json`. All user-visible strings in components use `useTranslation()` — never hardcode text. Language auto-detects from browser; user can toggle EN/FR in the header.

**Styling:** Tailwind CSS v4 (utility-first). Design tokens (colors, radius, etc.) are CSS variables defined in `src/styles/globals.css`. Primary brand color is orange (`#f97316` / `--primary`). The site is dark-themed by default (black background).

**UI components:** `src/components/ui/` contains shadcn/ui primitives (accordion, button, badge, card, etc.) — treat these as read-only library code. Custom page sections go directly in `src/components/`.

**Animations:** `motion/react` (Framer Motion) used throughout — `whileInView` for scroll-triggered reveals, `AnimatePresence` for mount/unmount transitions.

**Image assets:** Project screenshots live in `public/images/projects/`. Figma-exported assets use the `figma:asset/` alias scheme (resolved in `vite.config.ts`). Use the `ImageWithFallback` component (`src/components/figma/ImageWithFallback.tsx`) when displaying project images.

**Scroll navigation:** All nav links use `src/utils/scrollToSection.ts` (smooth scroll with graceful fallbacks) rather than anchor `href` jumps — except mobile nav which uses `<a href="#section">` with the util called in `onClick`.
