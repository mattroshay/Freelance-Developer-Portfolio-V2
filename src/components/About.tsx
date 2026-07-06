import { motion } from "motion/react";
import { Briefcase, ShieldCheck, MapPin, Workflow } from "lucide-react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  const stats = [
    { icon: <Briefcase className="w-6 h-6" />, text: t('about.stats.experience') },
    { icon: <ShieldCheck className="w-6 h-6" />, text: t('about.stats.certification') },
    { icon: <Workflow className="w-6 h-6" />, text: t('about.stats.tooling') },
    { icon: <MapPin className="w-6 h-6" />, text: t('about.stats.location') },
  ];

  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden scroll-mt-24"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header + Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-20"
          >
            <h1 className="text-4xl md:text-5xl mb-6">
              {t('about.title')}
            </h1>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>{t('about.paragraph1')}</p>
              <p>{t('about.paragraph2')}</p>
              <p>{t('about.paragraph3')}</p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex-shrink-0 p-3 rounded-lg bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 inline-flex items-center justify-center mx-auto mb-2">
                  {stat.icon}
                </div>
                <div className="text-muted-foreground text-sm">{stat.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
