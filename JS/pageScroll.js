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

// Lighten overlay after .steps section
export function initOverlayAfterSteps() {
  const langContent = document.querySelector(".lang-content");
  const steps = document.querySelector(".steps");
  if (!langContent || !steps) return;

  const startOpacity = 1;
  const endOpacity = 0.6;

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const stepsRect = steps.getBoundingClientRect();
      const stepsTop = steps.offsetTop;
      const stepsHeight = steps.offsetHeight;
      const y = window.scrollY || window.pageYOffset;

      // progress from steps top to steps bottom
      const progressRaw = (y - stepsTop) / Math.max(1, stepsHeight);
      const progress = Math.min(1, Math.max(0, progressRaw));
      const value = startOpacity + (endOpacity - startOpacity) * progress;
      langContent.style.setProperty("--overlayShade", value.toFixed(3));
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
}
