import { Lock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTranslation } from "react-i18next";
import { GITHUB_URL } from "../config/site";
import { useRevealGroup } from "../hooks/useReveal";

interface Project {
  key: string;
  image?: string;
  /** Watermark initials for the gradient placeholder (decorative). */
  mark?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// Order per copy deck: strongest-first, bootcamp capstone last.
const PROJECTS: Project[] = [
  {
    key: "petHealth",
    image: "/images/projects/pet-health.png",
    technologies: ["Next.js 16 (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "next-intl", "Supabase (Postgres / Auth / Storage)", "Vercel"],
    featured: true,
  },
  {
    key: "sarahPsy",
    image: "/images/projects/sarah-psy.jpg",
    technologies: ["Next.js", "App Router", "i18n (EN/FR)", "SEO", "Calendly", "Vercel"],
    liveUrl: "https://www.sarah-psy.com",
  },
  {
    key: "bitconsulting",
    image: "/images/projects/b-itconsulting.jpg",
    technologies: ["Ruby on Rails", "JavaScript", "PostgreSQL", "SCSS", "Heroku", "Cloudinary"],
    liveUrl: "https://www.b-itconsulting.com",
  },
  {
    key: "matchmeal",
    image: "/images/projects/matchmeal-screen.png",
    technologies: ["Ruby on Rails", "OpenAI API", "Spoonacular API", "PostgreSQL", "JavaScript", "Heroku"],
    liveUrl: "https://www.matchmeal.eu",
    githubUrl: "https://github.com/mattroshay/MatchMeal",
  },
  {
    key: "flatrent",
    image: "/images/projects/flatrent.png",
    technologies: ["Ruby on Rails", "PostgreSQL", "Mapbox API", "Stripe API", "Heroku"],
    liveUrl: "https://airbnb-roshaym-5f0f5ed33d88.herokuapp.com",
    githubUrl: "https://github.com/mattroshay/CEMY-AirBNB",
  },
];

export function Projects() {
  const { t } = useTranslation();
  const headRef = useRevealGroup<HTMLDivElement>();
  const listRef = useRevealGroup<HTMLDivElement>();

  const featured = PROJECTS.find((p) => p.featured)!;
  const others = PROJECTS.filter((p) => !p.featured);

  const media = (project: Project, large = false) => (
    <div className="ds-card__media">
      {project.image ? (
        <ImageWithFallback
          src={project.image}
          alt={t(`projects.list.${project.key}.imageAlt`)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span
          className={`ds-watermark${large ? " ds-watermark--lg" : ""}`}
          role="img"
          aria-label={t(`projects.list.${project.key}.title`)}
        >
          {project.mark}
        </span>
      )}
    </div>
  );

  const links = (project: Project) => (
    <div className="ds-card__links">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ds-mono-link"
        >
          {t("projects.viewLive")} →
        </a>
      ) : (
        <span
          className="ds-dim"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13 }}
        >
          <Lock size={13} color="#f7941e" aria-hidden="true" />
          {t("projects.noLink")}
        </span>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ds-mono-link"
        >
          {t("projects.code")} →
        </a>
      )}
    </div>
  );

  return (
    <section id="projects">
      <div className="ds-container">
        <div ref={headRef} className="ds-section-head" style={{ marginBottom: 56 }}>
          <div className="ds-section-head__text">
            <div data-reveal className="ds-eyebrow">
              {t("nav.work")}
            </div>
            <h1 data-reveal className="ds-h1">
              {t("projects.title")}
            </h1>
            <p data-reveal className="ds-lede">
              {t("projects.description")}
            </p>
          </div>
        </div>

        <div ref={listRef}>
          {/* Featured project */}
          <article data-reveal className="ds-card ds-card--featured" style={{ marginBottom: 24 }}>
            {media(featured, true)}
            <div className="ds-card__content">
              <span className="ds-card__label">{t(`projects.list.${featured.key}.label`)}</span>
              <h2 className="ds-card__title">{t(`projects.list.${featured.key}.title`)}</h2>
              <p className="ds-card__desc">{t(`projects.list.${featured.key}.description`)}</p>
              <div className="ds-tags" style={{ marginTop: 4 }}>
                {featured.technologies.map((tech) => (
                  <span key={tech} className="ds-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {links(featured)}
            </div>
          </article>

          {/* Remaining projects — bordered cards, 2-up */}
          <div className="ds-cardgrid" style={{ marginBottom: 56 }}>
            {others.map((project) => (
              <article data-reveal key={project.key} className="ds-card">
                {media(project)}
                <div className="ds-card__content">
                  <span className="ds-card__label">{t(`projects.list.${project.key}.label`)}</span>
                  <h2 className="ds-card__title">{t(`projects.list.${project.key}.title`)}</h2>
                  <p className="ds-card__desc">{t(`projects.list.${project.key}.description`)}</p>
                  <div className="ds-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="ds-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {links(project)}
                </div>
              </article>
            ))}
          </div>

          <div data-reveal style={{ display: "flex", justifyContent: "center" }}>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ds-btn ds-btn--secondary"
            >
              {t("projects.viewAllGithub")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
