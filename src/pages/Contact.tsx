import { Contact as ContactSection } from "../components/Contact";
import { usePageMeta } from "../hooks/usePageMeta";

export function Contact() {
  usePageMeta('contact');

  return <ContactSection />;
}
