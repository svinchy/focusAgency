export const appFlags = function appFlags() {};

export const detectRuntimeFlags = function detectRuntimeFlags() {
  const ua = navigator.userAgent || '';
  const isSafari =
    /Safari/i.test(ua) &&
    !/Chrome|CriOS|Chromium|Edg|EdgiOS|Firefox|FxiOS|OPR|OPiOS|SamsungBrowser/i.test(ua);
  const isCoarsePointer = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const isTabletOrSmaller = window.matchMedia('(max-width: 1180px)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return {
    isSafari,
    isCoarsePointer,
    isTabletOrSmaller,
    prefersReducedMotion,
    isPerformanceMode: isCoarsePointer || isTabletOrSmaller,
  };
};

export const applyRuntimeBodyClasses = function applyRuntimeBodyClasses({ isSafari, isCoarsePointer }) {
  if (!document.body) return;
  document.body.classList.toggle('is-safari', isSafari);
  document.body.classList.toggle('is-mobile-coarse', isCoarsePointer);
};

export const enforceScrollRestoration = function enforceScrollRestoration() {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
};
