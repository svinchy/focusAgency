import { loadingIntro } from "./loadingIntro.js";

// Immediately apply final intro classes when timeline animations are disabled.
function finalizeIntroWithoutTimeline() {
  const body = document.body;
  if (!body) return;

  body.classList.remove(
    "intro-active",
    "intro-overlay",
    "intro-reveal",
    "intro-corners",
    "intro-corners-move",
    "intro-fade",
    "intro-globe-zoom"
  );
  body.classList.add("intro-finished", "intro-banner");
}

// Choose between full intro timeline and instant final state.
export function initIntro(prefersReducedMotion) {
  if (prefersReducedMotion) {
    finalizeIntroWithoutTimeline();
    return;
  }

  loadingIntro();
}
