import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function Contact() {
  // Formspree handles submission, so no local state or handlers needed

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+33 6 74 94 12 49",
      description: "Available Mon-Fri, 9AM-6PM CET",
      link: "tel:+33674941249"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Saint Médard en Jalles, France / Remote",
      description: "Open to remote projects worldwide",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
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
            className="max-w-3xl mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's discuss
              how we can bring your vision to life with cutting-edge technology
              and thoughtful design.
            </p>
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
                  <h3 className="text-2xl">Send a Message</h3>
                </div>

                  <form action="https://formspree.io/f/xvgwdlje" method="POST" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-muted-foreground">Name *</label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-muted-foreground">Email *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-muted-foreground">Subject *</label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Project inquiry"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-muted-foreground">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      className="min-h-[150px] resize-none border-border/50 focus:border-primary"
                    />
                  </div>

                  <Button type="submit" className="w-full group">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
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
                <h3 className="text-2xl mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're a startup looking to build your first product or an
                  established company needing to modernize your web presence, I'm here to help.
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
                        <h4 className="text-sm text-muted-foreground mb-1">{info.title}</h4>
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
                        <p className="text-xs text-muted-foreground">{info.description}</p>
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
                  <h4>Quick Response</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  I typically respond within 24 hours. For urgent projects,
                  feel free to call directly and we can set up a quick chat.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
