// 1) Read hash targets from navbar links.
// 2) Resolve target elements in the page.
// 3) Scroll so the linked content lands centered in the viewport.
export function navbarScrollLinks() {
  const navBar = document.querySelector(".navBar");
  if (!navBar) return;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let navScrollRaf = 0;

  const getCenteredScrollTop = (target) => {
    const rect = target.getBoundingClientRect();
    const currentScroll = window.scrollY || window.pageYOffset;
    const visualViewport = window.visualViewport || null;
    const viewportCenter = visualViewport
      ? visualViewport.offsetTop + (visualViewport.height / 2)
      : window.innerHeight / 2;
    const targetCenter = rect.top + (rect.height / 2);
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    return Math.max(0, Math.min(maxScroll, currentScroll + targetCenter - viewportCenter));
  };

  const releaseServiceScrollLock = () => {
    const activeServiceCard = document.querySelector(".services .content .service.active");
    if (activeServiceCard) activeServiceCard.classList.remove("active");
    if (document.body) document.body.dataset.serviceScrollLock = "0";
  };

  const stopNavScrollAnimation = () => {
    if (!navScrollRaf) return;
    window.cancelAnimationFrame(navScrollRaf);
    navScrollRaf = 0;
  };

  const smoothScrollTo = (top) => {
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const targetTop = Math.max(0, Math.min(maxScroll, top));

    if (prefersReducedMotion) {
      window.scrollTo(0, targetTop);
      return;
    }

    stopNavScrollAnimation();

    if (typeof window.__stopSmoothScroll === "function") {
      window.__stopSmoothScroll();
    }

    const startTop = window.scrollY || window.pageYOffset;
    const distance = targetTop - startTop;
    if (Math.abs(distance) < 1) {
      window.scrollTo(0, targetTop);
      return;
    }

    const duration = Math.min(1100, Math.max(550, Math.abs(distance) * 0.6));
    const startTime = performance.now();
    const easeInOutCubic = (progress) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const frame = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startTop + (distance * eased));

      if (progress < 1) {
        navScrollRaf = window.requestAnimationFrame(frame);
        return;
      }

      window.scrollTo(0, targetTop);
      navScrollRaf = 0;
    };

    navScrollRaf = window.requestAnimationFrame(frame);
  };

  navBar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetSelector = link.getAttribute("href");
      if (!targetSelector || !targetSelector.startsWith("#")) return;

      const target = document.querySelector(targetSelector);
      if (!target) return;

      e.preventDefault();
      releaseServiceScrollLock();

      window.requestAnimationFrame(() => {
        const top = getCenteredScrollTop(target);
        smoothScrollTo(top);
      });
    });
  });
}
