import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Drives the whole cinematic homepage: Lenis for inertia/easing, GSAP
// ScrollTrigger for pinning each scene and reporting 0-1 progress. Progress
// is written straight to a CSS custom property per scene so parallax/reveal
// styles move via `calc(var(--p) * ...)` in CSS instead of triggering a
// React re-render every scroll frame.
export function initCinematicScroll(
  sceneEls: HTMLElement[],
  options: { onVignette?: (opacity: number) => void } = {},
) {
  const lenis = new Lenis({
    duration: 1.6,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  lenis.on("scroll", ScrollTrigger.update);

  const tickerFn = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(tickerFn);
  gsap.ticker.lagSmoothing(0);

  const triggers = sceneEls.map((el) => {
    const dwellVh = Number(el.dataset.dwell || 0);

    return ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: () => "+=" + (window.innerHeight * dwellVh) / 100,
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        el.style.setProperty("--p", p.toFixed(4));
        el.classList.toggle("is-entered", self.isActive || p >= 1);

        if (options.onVignette) {
          const fadeIn = Math.max(0, (0.15 - p) / 0.15);
          const fadeOut = Math.max(0, (p - 0.85) / 0.15);
          options.onVignette(Math.max(fadeIn, fadeOut));
        }
      },
    });
  });

  ScrollTrigger.refresh();

  return () => {
    triggers.forEach((t) => t.kill());
    gsap.ticker.remove(tickerFn);
    lenis.destroy();
  };
}
