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

// Generic reveal on scroll
export function initRevealOnScroll() {
  const items = document.querySelectorAll(".reveal-on-scroll");
  if (!items.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.25 }
  );

  items.forEach((el) => io.observe(el));
}

// Testimonial title reveal + quote shake trigger
export function initTestimonialIntro() {
  const section = document.querySelector(".testimonial");
  if (!section) return;
  let scrollStopTimer = null;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        section.classList.toggle("is-active", entry.isIntersecting);
      });
    },
    { threshold: 0.25 }
  );

  io.observe(section);

  const onScroll = () => {
    if (!section.classList.contains("is-active")) return;
    section.classList.add("is-scrolling");
    if (scrollStopTimer) window.clearTimeout(scrollStopTimer);
    scrollStopTimer = window.setTimeout(() => {
      section.classList.remove("is-scrolling");
    }, 140);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}

// Lighten overlay after .steps section
export function initOverlayAfterSteps() {
  const langContent = document.querySelector(".lang-content");
  const steps = document.querySelector(".steps");
  const team = document.querySelector(".team");
  const testimonial = document.querySelector(".testimonial");
  if (!langContent || !steps) return;

  const startOpacity = 1;
  const endOpacity = 0.6;
  const darkTeamOpacity = 0.9;
  const darkTestimonialOpacity = 0.96;

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const stepsTop = steps.offsetTop;
      const stepsHeight = steps.offsetHeight;
      const y = window.scrollY || window.pageYOffset;
      const viewportH = window.innerHeight;

      // progress from steps top to steps bottom
      const progressRaw = (y - stepsTop) / Math.max(1, stepsHeight);
      const progress = Math.min(1, Math.max(0, progressRaw));
      let value = startOpacity + (endOpacity - startOpacity) * progress;

      const smoothClamp = (sectionEl) => {
        if (!sectionEl) return 0;
        const top = sectionEl.offsetTop;
        const height = sectionEl.offsetHeight;
        const start = top - viewportH * 0.25;
        const end = top + height + viewportH * 0.25;
        const raw = (y - start) / Math.max(1, end - start);
        const t = Math.min(1, Math.max(0, raw));
        return t * (1 - t) * 4; // smooth bump 0->1->0
      };

      const teamBump = smoothClamp(team);
      if (teamBump > 0) {
        value = value + (darkTeamOpacity - value) * teamBump;
      }

      const testBump = smoothClamp(testimonial);
      if (testBump > 0) {
        value = value + (darkTestimonialOpacity - value) * testBump;
      }

      langContent.style.setProperty("--overlayShade", value.toFixed(3));
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
}
