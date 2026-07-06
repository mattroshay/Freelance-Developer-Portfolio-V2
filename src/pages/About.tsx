import { About as AboutSection } from "../components/About";
import { Skills } from "../components/Skills";
import { usePageMeta } from "../hooks/usePageMeta";

export function About() {
  usePageMeta('about');

  return (
    <>
      <AboutSection />
      <Skills />
    </>
  );
}
