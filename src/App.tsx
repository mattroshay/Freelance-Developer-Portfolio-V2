import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";
import { MentionsLegales } from "./pages/MentionsLegales";
import { Privacy } from "./pages/Privacy";

// Scroll to the top on every route change (browsers only restore scroll
// for history navigation; new pushes should start at the top).
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen relative">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </BrowserRouter>
  );
}
