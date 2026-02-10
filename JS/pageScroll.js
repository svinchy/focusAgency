// Smooth scrolling (lightweight, no library)
export function initSmoothScroll() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  let current = window.scrollY || window.pageYOffset;
  let target = current;
  let ticking = false;
  const ease = 0.12;

  const clampTarget = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    target = Math.max(0, Math.min(target, max));
  };

  const update = () => {
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

  const onWheel = (e) => {
    e.preventDefault();
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

  // Expose helper for inner scroll areas to forward wheel events
  window.__smoothScrollBy = (deltaY) => {
    target += deltaY;
    clampTarget();
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
}

// Section title reveal
export function initTitleReveal() {
  const titles = document.querySelectorAll(".section-title");
  if (!titles.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.4 }
  );

  titles.forEach((el) => io.observe(el));
}
