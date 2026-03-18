import { bannerAnimations } from "./bannerAnimations.js";
import { circleRotation } from "./circleRotation.js";
import { depthCarousel } from "./depthCarousel.js";
import { infiniteCarousel } from "./infiniteCarousel.js";
import { ongoingScrollMotion } from "./ongoingScrollMotion.js";
import { scrollDepth } from "./scrollDepth.js";
import { scrollOverlayShade } from "./scrollOverlayShade.js";
import { scrollParallax } from "./scrollParallax.js";
import { textWave } from "./textWave.js";

// Run non-critical startup after first render/paint settles.
function scheduleNonCritical(task) {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => task(), { timeout: 1200 });
    return;
  }
  window.setTimeout(task, 400);
}

// Boot decorative/scroll-heavy effects behind performance and motion flags.
function bootNonCriticalEffects({ isPerformanceMode, prefersReducedMotion }) {
  if (!isPerformanceMode) {
    bannerAnimations();
  } else {
    const banner = document.querySelector(".bannerTitle, .titleBanner");
    if (banner) banner.classList.add("is-wave-active");
  }

  depthCarousel();
  infiniteCarousel();
  textWave();

  if (!prefersReducedMotion) {
    // Keep footer image parallax active on mobile/tablet too.
    scrollParallax();
  }

  if (!prefersReducedMotion) {
    // Keep steps circle rotation active on mobile/tablet too.
    circleRotation();
  }

  if (!prefersReducedMotion) {
    // Keep team depth feedback active across breakpoints.
    scrollDepth();
  }

  if (!isPerformanceMode && !prefersReducedMotion) {
    scrollOverlayShade();
    ongoingScrollMotion();
  }
}

// Start deferred effects once the page is fully loaded.
export function initNonCriticalBoot(flags) {
  const run = () => bootNonCriticalEffects(flags);
  if (document.readyState === "complete") {
    scheduleNonCritical(run);
    return;
  }

  window.addEventListener("load", () => scheduleNonCritical(run), { once: true });
}
