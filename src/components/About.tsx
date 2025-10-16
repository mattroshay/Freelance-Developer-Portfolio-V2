import { motion } from "motion/react";
import { Code, Palette, Zap, Coffee, Users, Rocket, Icon, ShieldCheck, MapPin, BrainCircuit, Layers3Icon, Terminal, Workflow } from "lucide-react";

export function About() {
  const stats = [
    { icon: <ShieldCheck className="w-6 h-6" />, text: "Le Wagon Certified Web Developer (RNCP 39261)" },
    { icon: <Zap className="w-6 h-6" />, text: "Founder of MatchMeal & TrakBot" },
    { icon: <MapPin className="w-6 h-6" />, text: "Based near Bordeaux, working remotely" },
    { icon: <Coffee className="w-6 h-6" />, text: "Fueled by curiosity & coffee" },
  ];

  const services = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern frameworks and cloud deployment."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love to interact with."
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "AI Consulting & Integration",
      description: "Help teams understand, prototype, and integrate AI features — from OpenAI APIs to workflow automation."
    },
    {
      icon: <Layers3Icon className="w-6 h-6" />,
      title: "Digital Strategy & Innovation",
      description: "Translate business goals into actionable technical plans: system design, scalability, and tool selection."
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Automation & Workflow Integration",
      description: "Streamline repetitive tasks and connect apps through APIs and automation — from bots to custom internal dashboards."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Lightning-fast websites that convert visitors into customers."
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>

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
              About Me
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I’m a full-stack developer with 15 years’ experience in business development and client relationship management,
              now helping professionals, startups and PMEs transform their ideas into intuitive, scalable digital products.
              Beyond code, I guide clients on technical strategy, AI adoption, and performance optimization to ensure every project is impactful, maintainable, and future-ready.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
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

          {/* Main Content Grid */}
          <h3 className="text-2xl mb-8">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group p-6 rounded-xl border border-border/50 hover:border-orange-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="mb-2 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-20 p-8 rounded-2xl bg-gradient-to-r from-orange-500/5 to-orange-600/10 border border-orange-500/20 cursor-pointer hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Scroll to contact section"
          >
            <Rocket className="w-8 h-8 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl mb-3">Ready to build something amazing?</h3>
            <p className="text-muted-foreground">
              Let's collaborate to bring your ideas to life with cutting-edge technology and thoughtful design.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
