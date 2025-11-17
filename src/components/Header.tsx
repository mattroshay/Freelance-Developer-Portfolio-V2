import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import logo from "figma:asset/34a5fadfce0c33b5681d5bdf10379722f562ddef.png";
import { scrollToSection as scrollToSectionUtil } from "../utils/scrollToSection";

export function Header() {
  const { t, i18n } = useTranslation();
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
    scrollToSectionUtil(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-border/50 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ isolation: 'isolate' }}
    >
      <div className="container mx-auto px-4 py-4 relative">
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
              <span className="text-lg bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent hidden sm:block">
                Matt Roshay
              </span>
            </button>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { key: 'about', label: t('nav.about') },
              { key: 'skills', label: t('nav.skills') },
              { key: 'projects', label: t('nav.projects') },
              { key: 'contact', label: t('nav.contact') }
            ].map((item, index) => (
              <motion.button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </motion.button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <motion.div
              className="flex items-center gap-1 text-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`px-2 py-1 transition-colors ${
                  i18n.language?.startsWith('en') || !i18n.language
                    ? 'text-orange-500 font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-muted-foreground">/</span>
              <button
                onClick={() => i18n.changeLanguage('fr')}
                className={`px-2 py-1 transition-colors ${
                  i18n.language?.startsWith('fr')
                    ? 'text-orange-500 font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-label="Switch to French"
              >
                FR
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                onClick={() => scrollToSection('contact')}
                className="group relative overflow-hidden"
                size="sm"
              >
                <span className="relative z-10">{t('nav.letsTalk')}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Language Toggle & Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Language Toggle for Mobile/Tablet */}
            <motion.div
              className="flex items-center gap-1 text-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`px-2 py-1 transition-colors ${
                  i18n.language?.startsWith('en') || !i18n.language
                    ? 'text-orange-500 font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-muted-foreground">/</span>
              <button
                onClick={() => i18n.changeLanguage('fr')}
                className={`px-2 py-1 transition-colors ${
                  i18n.language?.startsWith('fr')
                    ? 'text-orange-500 font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-label="Switch to French"
              >
                FR
              </button>
            </motion.div>

            {/* Menu Button */}
            <motion.button
              className="p-2 rounded-lg hover:bg-accent transition-colors"
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
          style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
        >
          <nav className="py-4 space-y-2 border-t border-border/50 mt-4 relative z-[100]">
            {[
              { key: 'about', label: t('nav.about') },
              { key: 'skills', label: t('nav.skills') },
              { key: 'projects', label: t('nav.projects') },
              { key: 'contact', label: t('nav.contact') }
            ].map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                onClick={() => scrollToSection(item.key)}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors relative z-[100]"
                style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 relative z-[100]">
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                <Button
                  className="w-full"
                  style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                >
                  {t('nav.letsTalk')}
                </Button>
              </a>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
