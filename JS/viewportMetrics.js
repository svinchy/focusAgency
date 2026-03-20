// Sync visual viewport metrics into CSS variables so fixed UI can avoid mobile browser chrome.
export function initViewportMetrics() {
  const root = document.documentElement;
  const body = document.body;
  let rafId = 0;
  let stableViewportHeight = 0;
  let baselineVisualViewportHeight = 0;

  const supportsSmallViewportUnit =
    typeof CSS !== "undefined" &&
    typeof CSS.supports === "function" &&
    CSS.supports("height", "100svh");

  const isTouchViewport = () => window.matchMedia(
    "(max-width: 1180px), (hover: none) and (pointer: coarse)"
  ).matches;

  const hasFocusedFormControl = () => {
    const active = document.activeElement;
    if (!(active instanceof HTMLElement)) return false;
    if (active.isContentEditable) return true;
    return active.matches("input, textarea, select");
  };

  const queueSync = () => {
    if (rafId) return;
    rafId = window.requestAnimationFrame(() => {
      rafId = 0;
      syncViewportMetrics();
    });
  };

  const syncViewportMetrics = () => {
    const layoutWidth = Math.max(window.innerWidth || 0, root.clientWidth || 0);
    const layoutHeight = Math.max(window.innerHeight || 0, root.clientHeight || 0);
    const visualViewport = window.visualViewport || null;
    const touchViewport = isTouchViewport();

    const viewportWidth = visualViewport ? visualViewport.width : layoutWidth;
    const viewportHeight = visualViewport ? visualViewport.height : layoutHeight;
    const viewportOffsetLeft = visualViewport ? visualViewport.offsetLeft : 0;
    const viewportOffsetTop = visualViewport ? visualViewport.offsetTop : 0;
    const viewportRightOffset = visualViewport
      ? Math.max(0, layoutWidth - (visualViewport.width + visualViewport.offsetLeft))
      : 0;
    const viewportBottomOffset = visualViewport
      ? Math.max(0, layoutHeight - (visualViewport.height + visualViewport.offsetTop))
      : 0;
    const shouldUseStableFallback = touchViewport && !supportsSmallViewportUnit;

    if (!touchViewport) {
      baselineVisualViewportHeight = viewportHeight;
    } else {
      baselineVisualViewportHeight = Math.max(baselineVisualViewportHeight, viewportHeight);
    }

    const keyboardInset = touchViewport
      ? Math.max(0, baselineVisualViewportHeight - viewportHeight)
      : 0;
    const isChatKeyboardOpen = Boolean(window.__crispChatOpen) && keyboardInset > 140;

    if (shouldUseStableFallback) {
      if (!hasFocusedFormControl() && !isChatKeyboardOpen) {
        stableViewportHeight = stableViewportHeight
          ? Math.min(stableViewportHeight, viewportHeight)
          : viewportHeight;
      } else if (!stableViewportHeight) {
        stableViewportHeight = viewportHeight;
      }
    } else {
      stableViewportHeight = viewportHeight;
    }

    root.style.setProperty("--app-viewport-width", `${viewportWidth}px`);
    root.style.setProperty("--app-visual-viewport-height", `${viewportHeight}px`);
    root.style.setProperty("--app-viewport-offset-left", `${viewportOffsetLeft}px`);
    root.style.setProperty("--app-viewport-offset-top", `${viewportOffsetTop}px`);
    root.style.setProperty("--app-viewport-right-offset", `${viewportRightOffset}px`);
    root.style.setProperty("--app-viewport-bottom-offset", `${viewportBottomOffset}px`);
    root.style.setProperty("--app-keyboard-inset", `${keyboardInset}px`);
    root.classList.toggle("chat-keyboard-open", isChatKeyboardOpen);
    if (body) {
      body.classList.toggle("chat-keyboard-open", isChatKeyboardOpen);
    }

    if (shouldUseStableFallback) {
      root.style.setProperty("--app-viewport-height", `${stableViewportHeight || viewportHeight}px`);
      return;
    }

    root.style.removeProperty("--app-viewport-height");
  };

  window.__queueViewportMetricsSync = queueSync;

  syncViewportMetrics();

  window.addEventListener("resize", queueSync, { passive: true });
  window.addEventListener("orientationchange", () => {
    stableViewportHeight = 0;
    baselineVisualViewportHeight = 0;
    queueSync();
  }, { passive: true });

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", queueSync, { passive: true });
    window.visualViewport.addEventListener("scroll", queueSync, { passive: true });
  }
}
