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
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
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
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -skew-y-12"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent via-primary/5 to-transparent transform skew-y-12"></div>
        </div>
        {/* Circuit-like decorative elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full"
          style={{
            backgroundColor: "#ff7a00",
            boxShadow: "0 0 20px rgba(255, 122, 0, 0.5)",
          }}
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
          className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full"
          style={{
            backgroundColor: "#ff9740",
            boxShadow: "0 0 16px rgba(255, 151, 64, 0.5)",
          }}
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
          className="absolute top-2/3 left-1/3 w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: "#ffb36b",
            boxShadow: "0 0 12px rgba(255, 179, 107, 0.5)",
          }}
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
        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm mb-6 border border-primary/20">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available for freelance work
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-[#ff7a00] via-[#ff8f33] to-[#cc6100] bg-clip-text text-transparent">
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
              <span className="text-primary font-semibold tracking-[0.18em]">Create. Innovate. Code.</span><br />
              A full-stack developer who builds
              <span className="text-foreground"> exceptional digital experiences</span> with
              clean code and modern design.
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex space-x-6 mb-20"
          >
            <motion.a 
              href="https://github.com/roshaym" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted/50 hover:bg-accent transition-colors group"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/mattroshay" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted/50 hover:bg-accent transition-colors group"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
            </motion.a>
            <motion.a 
              href="https://twitter.com/mattroshay" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-muted/50 hover:bg-accent transition-colors group"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Twitter className="w-5 h-5 group-hover:text-primary transition-colors" />
            </motion.a>
          </motion.div>

          <motion.button
            onClick={() => scrollToSection('about')}
            className="mx-auto block text-muted-foreground hover:text-foreground transition-colors"
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
