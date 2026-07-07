import { LegalDoc } from "../components/LegalDoc";
import { usePageMeta } from "../hooks/usePageMeta";

export function Privacy() {
  usePageMeta("privacy");

  return <LegalDoc ns="privacy" />;
}
