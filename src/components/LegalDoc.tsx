import { useTranslation } from "react-i18next";

interface LegalSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

/**
 * Renders a legal document (legal notice / privacy policy) from structured
 * i18n content: `<ns>.sections` is an array of { heading, paragraphs, items }
 * in src/locales/*.json, so legal copy can evolve without touching TSX.
 */
export function LegalDoc({ ns }: { ns: "legal" | "privacy" }) {
  const { t } = useTranslation();
  const sections = t(`${ns}.sections`, { returnObjects: true }) as LegalSection[];

  return (
    <section>
      <div className="ds-container" style={{ maxWidth: 780 }}>
        <div className="ds-section-head" style={{ marginBottom: 40 }}>
          <div className="ds-section-head__text">
            <div className="ds-eyebrow">{t(`${ns}.eyebrow`)}</div>
            <h1 className="ds-h1">{t(`${ns}.title`)}</h1>
            <p className="ds-dim">{t(`${ns}.updated`)}</p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          {sections.map((section, index) => (
            <div key={index} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <h2 className="ds-h2 ds-h2--strip">{section.heading}</h2>
              {section.paragraphs?.map((paragraph, pIndex) => (
                <p key={pIndex} className="ds-body">
                  {paragraph}
                </p>
              ))}
              {section.items && (
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    margin: 0,
                    paddingLeft: 20,
                  }}
                >
                  {section.items.map((item, iIndex) => (
                    <li key={iIndex} className="ds-body">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
