import { Badge } from "./ui/badge";
import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      title: "Backend & Database",
      skills: [
        "Ruby on Rails", "PostgreSQL", "Python", "REST APIs", "Cloudinary"
      ],
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      title: "Frontend Development",
      skills: [
        "Javascript / TypeScript", "HTML5", "CSS3", "SASS",
        "Tailwind CSS", "Stimulus JS", "Hotwire / Turbo", "Responsive Design & Accessibility"
      ],
      color: "from-orange-400/20 to-orange-500/20"
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Git / GitHub", "Docker", "Heroku",
        "VS Code", "Postman", "Google Analytics", "Plausible", "SEO Tools"
      ],
      color: "from-orange-600/20 to-orange-700/20"
    },
    {
      title: "AI & Automation",
      skills: [
        "OpenAI API", "RAG patterns", "Python", "AI-driven workflows", "Web scraping & change detection tools"
      ],
      color: "from-orange-600/20 to-orange-700/20"
    },
    {
      title: "Design & Strategy",
      skills: [
        "Figma / Canva", "Responsive Design", "UI/UX Design", "Product Strategy & MVP scoping",
        "Client discovery & technical architecture", "Brand positioning & storytelling", "SEO & content strategy"
      ],
      color: "from-orange-500/20 to-amber-500/20"
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-orange-400/8 rounded-full blur-3xl"></div>

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
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A carefully curated toolkit that enables me to build exceptional
              digital experiences from concept to deployment.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative p-8 rounded-2xl border border-border/50 hover:border-orange-500/30 transition-all duration-300 bg-background/50 backdrop-blur-sm">
                  <h3 className="text-xl mb-6 group-hover:text-orange-500 transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + skillIndex * 0.05
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm py-2 px-4 hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-orange-500/5 to-orange-600/10 border border-orange-500/20">
              <h3 className="text-2xl mb-4">My Development Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I believe in writing clean, maintainable code that scales. Every project is an
                opportunity to learn something new and push the boundaries of what's possible
                on the web. I stay current with emerging technologies while maintaining a
                strong foundation in proven solutions. My goal is to deliver not just
                functional software, but delightful user experiences that drive real value. 
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Clean Code
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  User-Centered Design
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Performance First
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Continuous Learning
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
