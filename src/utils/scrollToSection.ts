const scrollIntoViewOptions: ScrollIntoViewOptions = {
  behavior: "smooth",
  block: "start",
};

const tryScrollIntoView = (
  target: HTMLElement,
  options?: ScrollIntoViewOptions,
) => {
  if (typeof target.scrollIntoView !== "function") {
    return false;
  }

  try {
    target.scrollIntoView(options);
    return true;
  } catch {
    return false;
  }
};

export function scrollToSection(sectionId: string) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  const target = document.getElementById(sectionId);
  if (!target) {
    return;
  }

  if (tryScrollIntoView(target, scrollIntoViewOptions)) {
    return;
  }

  if (tryScrollIntoView(target)) {
    return;
  }

  const top = target.getBoundingClientRect().top + window.pageYOffset;

  try {
    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth",
    });
  } catch {
    window.scrollTo(0, Math.max(top, 0));
  }
}
