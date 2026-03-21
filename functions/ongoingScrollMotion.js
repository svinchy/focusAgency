export const ongoingScrollMotion = function ongoingScrollMotion() {
  // Smooth scroll handler
  let currentY = window.scrollY;
  let targetY = window.scrollY;
  let rafId = null;
  let isAnimating = false;

  window.__smoothScrollTo = function(y) {
    targetY = y;
    if (!isAnimating) { isAnimating = true; rafId = requestAnimationFrame(step); }
  };

  window.__smoothScrollBy = function(dy) {
    targetY = targetY + dy;
    if (!isAnimating) { isAnimating = true; rafId = requestAnimationFrame(step); }
  };

  window.__stopSmoothScroll = function() {
    isAnimating = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
    targetY = window.scrollY;
    currentY = window.scrollY;
  };

  const step = () => {
    if (!isAnimating) return;
    currentY += (targetY - currentY) * 0.1;
    if (Math.abs(targetY - currentY) < 0.5) {
      currentY = targetY;
      window.scrollTo(0, currentY);
      isAnimating = false;
      return;
    }
    window.scrollTo(0, currentY);
    rafId = requestAnimationFrame(step);
  };
};
