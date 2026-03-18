// Sync visual viewport metrics into CSS variables so fixed UI can avoid mobile browser chrome.
export function initViewportMetrics() {
  const root = document.documentElement;
  let rafId = 0;

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

    root.style.setProperty("--app-viewport-width", `${viewportWidth}px`);
    root.style.setProperty("--app-viewport-height", `${viewportHeight}px`);
    root.style.setProperty("--app-viewport-offset-left", `${viewportOffsetLeft}px`);
    root.style.setProperty("--app-viewport-offset-top", `${viewportOffsetTop}px`);
    root.style.setProperty("--app-viewport-right-offset", `${viewportRightOffset}px`);
    root.style.setProperty("--app-viewport-bottom-offset", `${viewportBottomOffset}px`);
  };

  syncViewportMetrics();

  window.addEventListener("resize", queueSync, { passive: true });
  window.addEventListener("orientationchange", queueSync, { passive: true });

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", queueSync, { passive: true });
    window.visualViewport.addEventListener("scroll", queueSync, { passive: true });
  }
}
