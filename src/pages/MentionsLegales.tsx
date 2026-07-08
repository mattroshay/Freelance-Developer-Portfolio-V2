import { LegalDoc } from "../components/LegalDoc";
import { usePageMeta } from "../hooks/usePageMeta";

export function MentionsLegales() {
  usePageMeta("legal");

  return <LegalDoc ns="legal" />;
}
