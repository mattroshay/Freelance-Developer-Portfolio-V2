import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import logo from "../assets/mr-logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-border/50 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 group"
            >
              {/* Logo */}
              <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={logo} 
                  alt="Matt Roshay Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg bg-gradient-to-r from-[#ff7a00] via-[#ff8f33] to-[#cc6100] bg-clip-text text-transparent hidden sm:block">
                Matt Roshay
              </span>
            </button>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </motion.button>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex group relative overflow-hidden"
              size="sm"
            >
              <span className="relative z-10">Let's talk</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="py-4 space-y-2 border-t border-border/50 mt-4">
            {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="pt-4"
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full"
              >
                Let's talk
              </Button>
            </motion.div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
