import { Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-background to-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Alex Johnson
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                  Full-stack developer crafting exceptional digital experiences. 
                  Always exploring new technologies and pushing the boundaries 
                  of what's possible on the web.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "https://github.com", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                    { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="mb-6">Navigation</h4>
                <ul className="space-y-3">
                  {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                    <li key={index}>
                      <a 
                        href={`#${item.toLowerCase()}`} 
                        className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group"
                      >
                        <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="mb-6">Say Hello</h4>
                <div className="space-y-3 text-sm">
                  <a 
                    href="mailto:alex@example.com" 
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    alex@example.com
                  </a>
                  <a 
                    href="tel:+15551234567" 
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                  <p className="text-muted-foreground">
                    San Francisco, CA
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50"
          >
            <p className="text-muted-foreground text-sm flex items-center mb-4 md:mb-0">
              © {currentYear} Alex Johnson. Made with 
              <Heart className="w-4 h-4 mx-1 text-red-500" /> 
              and lots of coffee.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}