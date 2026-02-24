// 1) Intercept wheel input and smooth page movement.
// 2) Keep target position clamped to page bounds.
// 3) Expose helper for nested areas to forward wheel deltas.
export function pageSmoothScroll() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  let current = window.scrollY || window.pageYOffset;
  let target = current;
  let ticking = false;
  let scrollToRaf = null;
  const ease = 0.12;

  const isPageScrollLocked = () => {
    const body = document.body;
    if (!body) return false;
    return body.dataset.navScrollLock === "1" || body.dataset.serviceScrollLock === "1";
  };

  // Keep target scroll within document bounds.
  const clampTarget = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    target = Math.max(0, Math.min(target, max));
  };

  // Immediately stop any in-flight smooth-scroll motion.
  const stopSmoothScroll = () => {
    if (scrollToRaf) {
      cancelAnimationFrame(scrollToRaf);
      scrollToRaf = null;
    }
    ticking = false;
    current = window.scrollY || window.pageYOffset;
    target = current;
  };

  // Animate current scroll toward target.
  const update = () => {
    if (!ticking) return;
    current += (target - current) * ease;
    if (Math.abs(target - current) < 0.5) {
      current = target;
      ticking = false;
      window.scrollTo(0, current);
      return;
    }
    window.scrollTo(0, current);
    requestAnimationFrame(update);
  };

  // Intercept wheel input and feed smooth-scroll target.
  const onWheel = (e) => {
    // Let nested service-content keep native wheel scrolling when it can scroll.
    const nestedScroll = e.target instanceof Element ? e.target.closest(".service-content") : null;
    if (nestedScroll) {
      const canScroll = nestedScroll.scrollHeight > nestedScroll.clientHeight + 1;
      if (canScroll) {
        const atTop = nestedScroll.scrollTop <= 0;
        const atBottom =
          nestedScroll.scrollTop + nestedScroll.clientHeight >= nestedScroll.scrollHeight - 1;
        const goingDown = e.deltaY > 0;
        const goingUp = e.deltaY < 0;

        // Allow native scrolling while there is room in the list.
        if ((goingDown && !atBottom) || (goingUp && !atTop)) {
          return;
        }
      }
    }

    if (isPageScrollLocked()) {
      stopSmoothScroll();
      e.preventDefault();
      return;
    }

    e.preventDefault();
    if (scrollToRaf) {
      cancelAnimationFrame(scrollToRaf);
      scrollToRaf = null;
    }
    if (!ticking) {
      current = window.scrollY || window.pageYOffset;
      target = current;
    }
    target += e.deltaY;
    clampTarget();
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("resize", () => {
    current = window.scrollY || window.pageYOffset;
    target = current;
  });

  // Expose helper for inner scroll areas to forward wheel events.
  window.__smoothScrollBy = (deltaY) => {
    if (isPageScrollLocked()) {
      stopSmoothScroll();
      return;
    }
    if (scrollToRaf) {
      cancelAnimationFrame(scrollToRaf);
      scrollToRaf = null;
    }
    if (!ticking) {
      current = window.scrollY || window.pageYOffset;
      target = current;
    }
    target += deltaY;
    clampTarget();
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  // Expose helper for direct smooth scrolling to an absolute Y position.
  window.__smoothScrollTo = (top) => {
    if (isPageScrollLocked()) {
      stopSmoothScroll();
      return;
    }
    if (!Number.isFinite(top)) return;
    if (scrollToRaf) cancelAnimationFrame(scrollToRaf);
    ticking = false;
    const startY = window.scrollY || window.pageYOffset;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    target = Math.max(0, Math.min(top, max));
    const delta = target - startY;
    const duration = 900;
    const startTs = performance.now();

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const frame = (ts) => {
      const elapsed = ts - startTs;
      const progress = Math.min(1, Math.max(0, elapsed / duration));
      const eased = easeInOutCubic(progress);
      const y = startY + delta * eased;
      window.scrollTo(0, y);
      current = y;

      if (progress < 1) {
        scrollToRaf = requestAnimationFrame(frame);
        return;
      }

      current = target;
      window.scrollTo(0, current);
      scrollToRaf = null;
    };

    clampTarget();
    scrollToRaf = requestAnimationFrame(frame);
  };

  // Expose an explicit stopper for modules that lock page scroll.
  window.__stopSmoothScroll = stopSmoothScroll;
}

