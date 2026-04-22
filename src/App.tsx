import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";

export default function App() {
  const { i18n } = useTranslation();

  // Keep the <html lang> attribute in sync with the active i18next language
  // so screen readers and search engines see the correct language.
  useEffect(() => {
    const applyLang = (lng: string) => {
      const code = (lng || "en").split("-")[0];
      document.documentElement.lang = code === "fr" ? "fr" : "en";
    };
    applyLang(i18n.language);
    i18n.on("languageChanged", applyLang);
    return () => {
      i18n.off("languageChanged", applyLang);
    };
  }, [i18n]);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}