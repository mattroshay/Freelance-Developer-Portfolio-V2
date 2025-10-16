import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Tech-inspired grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -skew-y-12"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent via-orange-500/5 to-transparent transform skew-y-12"></div>
        </div>
        {/* Circuit-like decorative elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-2 h-2 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-orange-400 rounded-full shadow-md shadow-orange-400/50"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-orange-300 rounded-full shadow-sm shadow-orange-300/50"
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm mb-6 border border-primary/20">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Available for freelance work & collaborations
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-7xl lg:text-7xl mb-6 leading-tight">
                  <span className="block">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent">
                    Matt Roshay
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12"
              >
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                  <span className="text-orange-600">Create. Innovate. Code.</span><br />
                  A full-stack developer who builds
                  <span className="text-foreground"> scalable web solutions</span> for startups and SMEs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 justify-start items-start mb-16"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  className="group relative overflow-hidden"
                >
                  <span className="relative z-10">Explore My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="group border-muted-foreground/20 hover:border-primary"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get in touch
                </Button>

                <a href="/Matt%20Roshay%20-%20Full%20Stack%20Developer%20EN%20-%20Oct%202025.pdf" download className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="group border-muted-foreground/20 hover:border-primary flex items-center">
                    <ArrowDown className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex space-x-6 mb-20 lg:mb-0"
              >
                <motion.a
                  href="https://github.com/mattroshay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted/50 hover:bg-accent transition-colors group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/mattroshay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted/50 hover:bg-accent transition-colors group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                </motion.a>
                {/* <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted/50 hover:bg-accent transition-colors group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Twitter className="w-5 h-5 group-hover:text-primary transition-colors" />
                </motion.a> */}
              </motion.div>
            </div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Decorative background elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full blur-2xl"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-400/20 rounded-full blur-xl"></div>

                {/* Profile Image */}
                <motion.div
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-orange-500/20 bg-black"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={"/public/images/projects/Untitled design-4.svg"}
                    alt="Matt Roshay"
                    className="w-full h-full object-cover opacity-90"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.button
            onClick={() => scrollToSection('about')}
            className="mx-auto block text-muted-foreground hover:text-foreground transition-colors mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ y: 5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
