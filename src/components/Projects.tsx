import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.list.bitconsulting.title'),
      description: t('projects.list.bitconsulting.description'),
      image: "/images/projects/b-itconsulting.png",
      technologies: ["Ruby on rails", "SCSS", "Javascript", "PostgreSQL", "Heroku", "Cloudinary"],
      liveUrl: "https://www.b-itconsulting.com",
      // githubUrl: "https://github.com",
      featured: true
    },
    {
      title: t('projects.list.matchmeal.title'),
      description: t('projects.list.matchmeal.description'),
      image: "/images/projects/matchmeal-screen.png",
      technologies: ["Ruby on rails", "SCSS", "Javascript", "PostgreSQL", "Heroku", "Cloudinary", "Postman", "OpenAI API", "Spoonacular API"],
      liveUrl: "https://www.matchmeal.eu",
      githubUrl: "https://github.com/mattroshay/MatchMeal",
      featured: false
    },
    {
      title: t('projects.list.flatrent.title'),
      description: t('projects.list.flatrent.description'),
      image: "/images/projects/flatrent.png",
      technologies: ["Ruby on Rails", "PostgreSQL", "SCSS", "JavaScript", "Heroku", "Cloudinary", "Mapbox API", "Stripe API"],
      liveUrl: "https://airbnb-roshaym-5f0f5ed33d88.herokuapp.com",
      githubUrl: "https://github.com/mattroshay/CEMY-AirBNB",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-10 w-80 h-80 bg-orange-400/8 rounded-full blur-3xl"></div>

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
              {t('projects.title')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('projects.description')}
            </p>
          </motion.div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            {projects.filter(p => p.featured).map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-orange-500/30 transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-4 border-orange-500/30 text-orange-500">
                        {t('projects.featuredProject')}
                      </Badge>
                      <h3 className="text-2xl lg:text-3xl mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <Button className="group/btn" onClick={() => window.open(project.liveUrl, "_blank") }>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t('projects.viewLive')}
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </Button>
                      {project.githubUrl && (
                        <Button variant="outline" onClick={() => window.open(project.githubUrl, "_blank") }>
                          <Github className="w-4 h-4 mr-2" />
                          {t('projects.code')}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button size="sm" className="flex-1 group/btn" onClick={() => window.open(project.liveUrl, "_blank") }>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('projects.liveDemo')}
                    </Button>
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" className="aspect-square p-0" onClick={() => window.open(project.githubUrl, "_blank") }>
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center relative z-10"
          >
            <Button variant="outline" size="lg" className="group" onClick={() => window.open("https://github.com/mattroshay", "_blank") }>
              <Github className="w-4 h-4 mr-2" />
              {t('projects.viewAllGithub')}
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
