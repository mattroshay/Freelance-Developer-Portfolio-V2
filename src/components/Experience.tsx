import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function Experience() {
  const { t } = useTranslation();

  const rows = [
    t('experience.rows.freelance', { returnObjects: true }),
    t('experience.rows.lewagon', { returnObjects: true }),
    t('experience.rows.legal', { returnObjects: true }),
  ] as Array<{ years: string; role: string; context: string }>;

  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-4xl md:text-5xl">{t('experience.title')}</h2>
          </motion.div>

          <div className="divide-y divide-border/50 border border-border/50 rounded-2xl overflow-hidden">
            {rows.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group grid grid-cols-1 md:grid-cols-[160px_1fr_1fr] gap-2 md:gap-8 px-6 py-5 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
              >
                <span className="text-sm text-orange-500 font-medium tabular-nums whitespace-nowrap">
                  {row.years}
                </span>
                <span className="text-foreground group-hover:text-orange-500 transition-colors">
                  {row.role}
                </span>
                <span className="text-sm text-muted-foreground">
                  {row.context}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
