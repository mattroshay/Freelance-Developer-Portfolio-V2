import { motion } from "motion/react";
import { ArrowRight, Rocket, Workflow, BrainCircuit, Terminal, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Badge } from "../components/ui/badge";
import { usePageMeta } from "../hooks/usePageMeta";

const SERVICE_KEYS = [
  { key: 'aiWorkflow', icon: <Workflow className="w-6 h-6" /> },
  { key: 'aiIntegration', icon: <BrainCircuit className="w-6 h-6" /> },
  { key: 'webDev', icon: <Terminal className="w-6 h-6" /> },
  { key: 'discovery', icon: <Target className="w-6 h-6" /> }
];

const WORK_TEASER_KEYS = ['petHealth', 'sarahPsy', 'bitconsulting'];

export function Home() {
  const { t } = useTranslation();
  usePageMeta('home');

  return (
    <>
      <Hero />

      {/* What I do — teaser for Services */}
      <section id="what-i-do" className="py-32 relative overflow-hidden scroll-mt-24">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-16"
            >
              <h2 className="text-4xl md:text-5xl mb-6">{t('home.whatIDo.title')}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('home.whatIDo.subtext')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
              {SERVICE_KEYS.map((service, index) => (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 rounded-xl border border-border/50 hover:border-orange-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 group-hover:text-orange-500 transition-colors">
                        {t(`services.list.${service.key}.title`)}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(`services.list.${service.key}.hook`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                to="/services"
                className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors group"
              >
                {t('home.whatIDo.link')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected work — teaser for Work */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-16"
            >
              <h2 className="text-4xl md:text-5xl mb-6">{t('home.work.title')}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('home.work.subtext')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {WORK_TEASER_KEYS.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Link
                    to="/work"
                    className="block h-full p-6 rounded-xl border border-border/50 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 group"
                  >
                    <Badge variant="outline" className="mb-4 border-orange-500/30 text-orange-500 text-xs">
                      {t(`projects.list.${key}.label`)}
                    </Badge>
                    <h3 className="text-lg group-hover:text-orange-500 transition-colors">
                      {t(`projects.list.${key}.title`)}
                    </h3>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                to="/work"
                className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors group"
              >
                {t('home.work.link')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About — teaser for About */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl mb-6">{t('home.about.title')}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {t('about.paragraph1')}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors group"
              >
                {t('home.about.link')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing book-a-call CTA */}
      <section className="pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-8 md:p-12 rounded-2xl bg-gradient-to-r from-orange-500/5 to-orange-600/10 border border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
            >
              <Rocket className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <h2 className="text-2xl mb-3">{t('home.cta.title')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                {t('home.cta.description')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all outline-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 group"
              >
                {t('home.cta.button')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
