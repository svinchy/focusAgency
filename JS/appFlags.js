// 1) Normalize browser restore behavior.
// 2) Detect runtime/platform capability flags.
// 3) Expose CSS hook classes on <body>.
export function enforceScrollRestoration() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
}

// Read runtime flags used to decide animation/performance behavior.
export function detectRuntimeFlags() {
  const ua = navigator.userAgent || "";
  const isSafari =
    /Safari/i.test(ua) &&
    !/Chrome|CriOS|Chromium|Edg|EdgiOS|Firefox|FxiOS|OPR|OPiOS|SamsungBrowser/i.test(ua);
  const isCoarsePointer = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  const isTabletOrSmaller = window.matchMedia("(max-width: 1180px)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return {
    isSafari,
    isCoarsePointer,
    isTabletOrSmaller,
    prefersReducedMotion,
    isPerformanceMode: isCoarsePointer || isTabletOrSmaller,
  };
}

// Mirror runtime flags into body classes for CSS-only fallbacks.
export function applyRuntimeBodyClasses({ isSafari, isCoarsePointer }) {
  if (!document.body) return;
  document.body.classList.toggle("is-safari", isSafari);
  document.body.classList.toggle("is-mobile-coarse", isCoarsePointer);
}
