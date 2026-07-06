import { useTranslation } from "react-i18next";
import { useRevealGroup } from "../hooks/useReveal";

const SKILL_CATEGORIES: { key: string; skills: string[] }[] = [
  {
    key: "ai",
    skills: [
      "n8n", "Make", "Dust", "Claude", "OpenAI API", "Prompt Engineering",
      "RAG patterns", "AI-driven workflows", "APIs & Webhooks",
    ],
  },
  {
    key: "backend",
    skills: ["Ruby on Rails", "PostgreSQL", "Python", "REST APIs", "Cloudinary"],
  },
  {
    key: "frontend",
    skills: [
      "JavaScript / TypeScript", "React", "HTML5", "CSS3",
      "Tailwind CSS", "Stimulus JS", "Hotwire / Turbo", "Responsive Design & Accessibility",
    ],
  },
  {
    key: "tools",
    skills: [
      "Git / GitHub", "Docker", "Heroku",
      "VS Code", "Postman", "Google Analytics", "SEO Tools",
    ],
  },
  {
    key: "design",
    skills: [
      "Workflow Design", "Stakeholder Management", "Process Optimization",
      "Client Discovery & Technical Architecture", "Product Strategy & MVP Scoping",
      "Brand Positioning & Storytelling", "SEO & Content Strategy",
    ],
  },
];

const PHILOSOPHY_TAGS = ["cleanCode", "userCentered", "performance", "learning"];

export function Skills() {
  const { t } = useTranslation();
  const revealRef = useRevealGroup<HTMLElement>();

  return (
    <section id="skills" ref={revealRef} className="ds-section ds-section--alt">
      <div className="ds-container">
        <div className="ds-section-head" style={{ marginBottom: 48 }}>
          <div className="ds-section-head__text">
            <h2 data-reveal className="ds-h2">
              {t("skills.title")}
            </h2>
            <p data-reveal className="ds-lede">
              {t("skills.description")}
            </p>
          </div>
        </div>

        <div className="ds-cellgrid" style={{ marginBottom: 56 }}>
          {SKILL_CATEGORIES.map((category) => (
            <div data-reveal key={category.key} className="ds-cell">
              <span className="ds-cell__body" style={{ gap: 16 }}>
                <span className="ds-cell__title">{t(`skills.categories.${category.key}`)}</span>
                <span className="ds-tags">
                  {category.skills.map((skill) => (
                    <span key={skill} className="ds-tag">
                      {skill}
                    </span>
                  ))}
                </span>
              </span>
            </div>
          ))}
        </div>

        <div
          data-reveal
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 18,
            maxWidth: 760,
            margin: "0 auto",
          }}
        >
          <h3 className="ds-h2 ds-h2--strip">{t("skills.philosophy.title")}</h3>
          <p className="ds-body">{t("skills.philosophy.description")}</p>
          <div className="ds-tags" style={{ justifyContent: "center", marginTop: 6 }}>
            {PHILOSOPHY_TAGS.map((tag) => (
              <span key={tag} className="ds-tag">
                {t(`skills.philosophy.tags.${tag}`)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
