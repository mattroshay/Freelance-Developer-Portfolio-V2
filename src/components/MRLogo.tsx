import { useEffect, useRef } from "react";

/**
 * The orange MR brand mark, extracted from the approved Claude Design
 * reference (Home.dc.html / SiteNav.dc.html). Two render modes:
 *
 * - default: single combined path, sized via `height` (nav / footer).
 * - draw:    hero variant with a stroke-dasharray draw-in animation,
 *            then the fill fades in (see .ds-logo-draw in design.css).
 */

const MARK_PATH =
  "M0.1 250.9Q44.4 251 48.1 249Q51.7 247 55.2 244.1Q58.6 241.2 69.8 220.2Q81 199.1 112.8 135.3Q144.7 71.5 148.8 66.2Q152.9 60.9 157.5 57.8Q162 54.7 167.2 53.2Q172.4 51.7 220.3 51.7Q268.1 51.7 272.3 52.8Q276.5 54 281.7 58.2Q287 62.5 289.8 68.3Q292.7 74.1 293.2 82.1Q293.7 90 292 96.3Q290.2 102.6 286.7 108.1Q283.2 113.7 280.6 116Q278.1 118.4 273.3 120.9Q268.5 123.3 265.3 124Q262.1 124.7 245.7 124.7Q229.4 124.7 227.9 126.3Q226.2 153.4 226.7 155.5Q227.2 157.7 253.3 199.3Q279.5 241 282 243.5Q284.4 245.9 289 248.5Q293.6 251 340 250.6Q340 246 338.5 244.6Q337 243.1 316.3 212Q295.7 180.9 291 173.5Q286.3 166.1 286.2 164Q305.2 153.6 312.8 146.6Q320.4 139.5 326 130.2Q331.7 120.8 334.8 110.5Q338 100.1 338.8 99.4Q339.6 98.7 339.8 83.7Q340 68.7 338.9 67Q337.8 65.3 334.5 55Q331.2 44.7 325.4 35.4Q319.7 26.2 314.7 21.2Q309.8 16.3 305.2 13.1Q300.7 10 294.9 7.2Q289 4.3 282.9 2.3Q276.7 0.2 219.8 0.1Q162.8 0 154.6 2.7Q146.4 5.3 140.5 8Q134.6 10.7 127.3 15.7Q120.1 20.7 114.1 27.6Q108.1 34.4 101.2 46.8Q94.4 59.1 47.2 152.7Q0 246.3 0.1 250.9ZM110.5 251L149.3 250.1L213.3 115.6Q212.1 114 211 113.8Q209.9 113.7 196.9 113.7Q183.8 113.7 181.8 114.5Q179.9 115.3 177.4 117.7Q175 120.1 142.9 183.8Q110.7 247.5 110.5 251Z";

const DRAW_PATH_1 =
  "M0.1 250.9Q44.4 251 48.1 249Q51.7 247 55.2 244.1Q58.6 241.2 69.8 220.2Q81 199.1 112.8 135.3Q144.7 71.5 148.8 66.2Q152.9 60.9 157.5 57.8Q162 54.7 167.2 53.2Q172.4 51.7 220.3 51.7Q268.1 51.7 272.3 52.8Q276.5 54 281.7 58.2Q287 62.5 289.8 68.3Q292.7 74.1 293.2 82.1Q293.7 90 292 96.3Q290.2 102.6 286.7 108.1Q283.2 113.7 280.6 116Q278.1 118.4 273.3 120.9Q268.5 123.3 265.3 124Q262.1 124.7 245.7 124.7Q229.4 124.7 227.9 126.3Q226.2 153.4 226.7 155.5Q227.2 157.7 253.3 199.3Q279.5 241 282 243.5Q284.4 245.9 289 248.5Q293.6 251 340 250.6Q340 246 338.5 244.6Q337 243.1 316.3 212Q295.7 180.9 291 173.5Q286.3 166.1 286.2 164Q305.2 153.6 312.8 146.6Q320.4 139.5 326 130.2Q331.7 120.8 334.8 110.5Q338 100.1 338.8 99.4Q339.6 98.7 339.8 83.7Q340 68.7 338.9 67Q337.8 65.3 334.5 55Q331.2 44.7 325.4 35.4Q319.7 26.2 314.7 21.2Q309.8 16.3 305.2 13.1Q300.7 10 294.9 7.2Q289 4.3 282.9 2.3Q276.7 0.2 219.8 0.1Q162.8 0 154.6 2.7Q146.4 5.3 140.5 8Q134.6 10.7 127.3 15.7Q120.1 20.7 114.1 27.6Q108.1 34.4 101.2 46.8Q94.4 59.1 47.2 152.7Q0 246.3 0.1 250.9Z";

const DRAW_PATH_2 =
  "M110.5 251L149.3 250.1L213.3 115.6Q212.1 114 211 113.8Q209.9 113.7 196.9 113.7Q183.8 113.7 181.8 114.5Q179.9 115.3 177.4 117.7Q175 120.1 142.9 183.8Q110.7 247.5 110.5 251Z";

interface MRLogoProps {
  height?: number;
  ariaLabel?: string;
}

export function MRLogo({ height = 22, ariaLabel }: MRLogoProps) {
  return (
    <svg
      viewBox="0 0 340 251"
      style={{ height, width: "auto", display: "block" }}
      aria-hidden={ariaLabel ? undefined : true}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
    >
      <path fill="#F7941E" fillRule="evenodd" d={MARK_PATH} />
    </svg>
  );
}

export function MRLogoDraw({ width = 360, ariaLabel }: { width?: number; ariaLabel?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const paths = Array.from(svg.querySelectorAll("path"));
    paths.forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
    });
    // Force a reflow so the initial dashoffset is committed before animating.
    void svg.getBoundingClientRect();
    const raf = requestAnimationFrame(() => svg.classList.add("is-drawn"));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      ref={ref}
      className="ds-logo-draw"
      viewBox="-8 -8 356 267"
      style={{ width, height: "auto", display: "block", overflow: "visible" }}
      role="img"
      aria-label={ariaLabel ?? "Matt Roshay logo"}
    >
      <path d={DRAW_PATH_1} fill="#F7941E" stroke="#F7941E" strokeWidth="2" strokeLinejoin="round" />
      <path d={DRAW_PATH_2} fill="#F7941E" stroke="#F7941E" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
