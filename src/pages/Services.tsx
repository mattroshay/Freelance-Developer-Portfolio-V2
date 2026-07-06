import { motion } from "motion/react";
import { ArrowRight, Workflow, BrainCircuit, Terminal, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

// Order per copy deck: the two AI offerings lead, Discovery closes.
const SERVICES = [
  { key: 'aiWorkflow', icon: <Workflow className="w-6 h-6" /> },
  { key: 'aiIntegration', icon: <BrainCircuit className="w-6 h-6" /> },
  { key: 'webDev', icon: <Terminal className="w-6 h-6" /> },
  { key: 'discovery', icon: <Target className="w-6 h-6" /> }
];

export function Services() {
  const { t } = useTranslation();
  usePageMeta('services');

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-6xl mx-auto">

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-20"
          >
            <h1 className="text-4xl md:text-5xl mb-6">{t('services.title')}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('services.subtext')}
            </p>
          </motion.div>

          {/* Service Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-20">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl border border-border/50 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 bg-background/50 backdrop-blur-sm"
                whileHover={{ y: -2 }}
              >
                <div className="flex-shrink-0 p-3 rounded-lg bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 inline-flex mb-6">
                  {service.icon}
                </div>
                <h2 className="text-xl mb-3 group-hover:text-orange-500 transition-colors">
                  {t(`services.list.${service.key}.title`)}
                </h2>
                <p className="text-orange-600 mb-4">
                  {t(`services.list.${service.key}.hook`)}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`services.list.${service.key}.body`)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all outline-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 group"
            >
              {t('hero.bookCall')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
