import { motion } from "motion/react";
import { Code, Palette, Zap, Coffee, Users, Rocket } from "lucide-react";

export function About() {
  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "20+", label: "Happy Clients" },
    { number: "∞", label: "Cups of Coffee" }
  ];

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern frameworks and cloud deployment."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love to interact with."
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
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

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
              I'm a passionate full-stack developer who loves turning complex problems
              into simple, elegant solutions. With over 15 years of experience in business development and client relationship management, I specialize in creating tailored digital experiences that make a difference.
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
                <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-[#ff7a00] via-[#ff8f33] to-[#cc6100] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl mb-6">My Story</h3>

              <p className="text-muted-foreground leading-relaxed">
                My journey into web development started during college when I built my first
                website for a local business. The excitement of seeing code come to life in
                the browser was addictive.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Today, I work with startups and established companies to build scalable
                web applications that solve real problems. I believe great software should
                be both functional and delightful to use.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects,
                writing technical articles, or exploring the latest web technologies.
              </p>

              <div className="flex items-center space-x-4 pt-4">
                <Coffee className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Fueled by coffee and curiosity</span>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl mb-8">What I Do</h3>

              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-20 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20"
          >
            <Rocket className="w-8 h-8 text-primary mx-auto mb-4" />
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
