import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, MapPin, Send, MessageCircle, Calendar, Check, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { CALENDLY_URL, CONTACT_PHONE } from "../config/site";

export function Contact() {
  const { t } = useTranslation();
  // Formspree handles submission, so no local state or handlers needed

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: t('contact.info.phone'),
      value: t('contact.info.phoneValue'),
      description: t('contact.info.phoneDescription'),
      link: `tel:${CONTACT_PHONE}`
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: t('contact.info.location'),
      value: t('contact.info.locationValue'),
      description: null,
      link: null
    }
  ];

  const perks = [
    t('contact.calendly.perk1'),
    t('contact.calendly.perk2'),
    t('contact.calendly.perk3')
  ];

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden scroll-mt-24"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <h1 className="text-4xl md:text-5xl mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('contact.description')}
            </p>
          </motion.div>

          {/* Calendly booking section — the hero of this page */}
          <motion.div
            id="book"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-20 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-orange-500/5 to-orange-600/10 border border-orange-500/20 scroll-mt-24"
          >
            <div className="max-w-3xl">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl md:text-3xl">{t('contact.calendly.title')}</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t('contact.calendly.subtitle')}
              </p>

              <ul className="flex flex-col sm:flex-row gap-3 sm:gap-8 mb-8">
                {perks.map((perk, index) => (
                  <li key={index} className="flex items-center text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="group"
                onClick={() => window.open(CALENDLY_URL, "_blank")}
              >
                <Calendar className="w-4 h-4 mr-2" />
                {t('contact.calendly.button')}
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>

              <p className="text-sm text-muted-foreground mt-6">
                {t('contact.calendly.fallback')}
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 bg-background/50 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl">{t('contact.form.title')}</h2>
                </div>

                  <form action="https://formspree.io/f/xvgwdlje" method="POST" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-muted-foreground">{t('contact.form.name')} *</label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder={t('contact.form.namePlaceholder')}
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-muted-foreground">{t('contact.form.email')} *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={t('contact.form.emailPlaceholder')}
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-muted-foreground">{t('contact.form.subject')} *</label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder={t('contact.form.subjectPlaceholder')}
                      className="border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-muted-foreground">{t('contact.form.message')} *</label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder={t('contact.form.messagePlaceholder')}
                      className="min-h-[150px] resize-none border-border/50 focus:border-primary"
                    />
                  </div>

                  <Button type="submit" className="w-full group">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {t('contact.form.send')}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl mb-6">{t('contact.info.title')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t('contact.info.description')}
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm text-muted-foreground mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="block hover:text-primary transition-colors mb-1"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="mb-1">{info.value}</div>
                        )}
                        {info.description && (
                          <p className="text-xs text-muted-foreground">{info.description}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="p-6 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-3">
                  <Calendar className="w-5 h-5 text-primary mr-2" />
                  <h3>{t('contact.info.quickResponse')}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {t('contact.info.quickResponseDescription')}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
