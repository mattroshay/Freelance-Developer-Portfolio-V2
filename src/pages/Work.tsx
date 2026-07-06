import { Projects } from "../components/Projects";
import { usePageMeta } from "../hooks/usePageMeta";

export function Work() {
  usePageMeta('work');

  return <Projects />;
}
