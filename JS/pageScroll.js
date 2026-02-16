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
  const footer = document.querySelector("footer");
  if (!langContent || !steps) return;

  const startOpacity = 1;
  const endOpacity = 0.6;
  const darkTeamOpacity = 0.9;
  const darkTestimonialOpacity = 0.96;
  const darkFooterOpacity = 0.985;

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

      const footerBump = smoothClamp(footer);
      if (footerBump > 0) {
        value = value + (darkFooterOpacity - value) * footerBump;
      }

      langContent.style.setProperty("--overlayShade", value.toFixed(3));
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
}

// Footer parallax + glow
export function initFooterParallaxGlow() {
  const footer = document.querySelector("footer");
  if (!footer) return;

  const images = Array.from(footer.querySelectorAll(".address img"));
  if (!images.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  let ticking = false;
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  const update = () => {
    const rect = footer.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const y = window.scrollY || window.pageYOffset || 0;

    // 0..1 through viewport travel
    const progress = clamp((vh - rect.top) / (vh + rect.height), 0, 1);
    // negative above center, positive below center
    const centerDelta = (rect.top + rect.height * 0.5 - vh * 0.5) / vh;

    // stronger glow near viewport center
    const glow = clamp(1 - Math.abs(centerDelta) * 1.7, 0, 1);
    footer.style.setProperty("--footerGlow", glow.toFixed(3));

    images.forEach((img, i) => {
      const dir = i % 2 === 0 ? -1 : 1;
      const baseY = (-centerDelta * (i === 0 ? 2.8 : 2.1) + (progress - 0.5) * 0.5) * 12;
      const baseX = dir * (0.5 - progress) * 6;

      // Scroll-linked "swim": subtle orbital motion while user scrolls.
      const phase = y * 0.008 + i * 1.35;
      const swimX = Math.sin(phase) * 5.5;
      const swimY = Math.cos(phase * 0.88) * 7.5;
      const tilt = Math.sin(phase * 0.6) * 1.4;
      const scale = 1 + Math.cos(phase * 0.52) * 0.01;

      img.style.transform =
        `translate3d(${(baseX + swimX).toFixed(2)}px, ${(baseY + swimY).toFixed(2)}px, 0) ` +
        `rotate(${tilt.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
    });

    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
}

// Footer bottom paragraph: sequential letter opacity wave
export function initFooterTextWave() {
  const paragraph = document.querySelector("footer > p");
  if (!paragraph) return;

  const source = paragraph.dataset.waveText || paragraph.textContent || "";
  paragraph.dataset.waveText = source;
  paragraph.textContent = "";

  const frag = document.createDocumentFragment();
  Array.from(source).forEach((ch, i) => {
    const span = document.createElement("span");
    span.className = "wave-char";
    span.style.setProperty("--char-index", String(i));
    span.textContent = ch === " " ? "\u00A0" : ch;
    frag.appendChild(span);
  });
  paragraph.appendChild(frag);

  const footer = document.querySelector("footer");
  if (!footer) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        footer.classList.toggle("is-wave-active", entry.isIntersecting);
      });
    },
    { threshold: 0.2 }
  );

  io.observe(footer);
}

// Scroll-linked swimming motion for key section headings
export function initHeadingSwimOnScroll() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const entries = [
    {
      section: document.querySelector(".steps"),
      el: document.querySelector(".steps h2"),
      ampX: 0.28,
      ampY: 0.5,
      ampR: 0.8,
      freq: 0.012
    },
    {
      section: document.querySelector(".team"),
      el: document.querySelector(".team h2"),
      ampX: 0.26,
      ampY: 0.45,
      ampR: 0.75,
      freq: 0.011
    },
    {
      section: document.querySelector(".testimonial"),
      el: document.querySelector(".testimonial .title"),
      ampX: 0.22,
      ampY: 0.38,
      ampR: 0.55,
      freq: 0.0105
    },
    {
      section: document.querySelector("footer"),
      el: document.querySelector("footer h2"),
      ampX: 0.32,
      ampY: 0.52,
      ampR: 0.9,
      freq: 0.0108
    }
  ].filter((item) => item.section && item.el);

  if (!entries.length) return;

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  let prevY = window.scrollY || window.pageYOffset || 0;
  let ticking = false;

  entries.forEach((item, i) => {
    item.phaseOffset = i * 1.37;
    item.x = 0;
    item.y = 0;
    item.r = 0;
  });

  const update = () => {
    const y = window.scrollY || window.pageYOffset || 0;
    const dy = y - prevY;
    prevY = y;
    const vh = window.innerHeight || 1;
    const speed = clamp(Math.abs(dy) / 24, 0, 1);

    entries.forEach((item) => {
      const rect = item.section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height * 0.5;
      const distFromCenter = Math.abs(sectionCenter - vh * 0.5);
      const near = clamp(1 - distFromCenter / (vh * 0.9), 0, 1);
      const visible = rect.bottom > 0 && rect.top < vh ? 1 : 0;
      const power = near * visible * (0.35 + speed * 0.65);

      const phase = y * item.freq + item.phaseOffset;
      const targetX = Math.sin(phase) * item.ampX * power;
      const targetY = Math.cos(phase * 0.88) * item.ampY * power;
      const targetR = Math.sin(phase * 0.62) * item.ampR * power;

      item.x = lerp(item.x, targetX, 0.12);
      item.y = lerp(item.y, targetY, 0.12);
      item.r = lerp(item.r, targetR, 0.12);

      item.el.style.setProperty("--swim-x", `${item.x.toFixed(3)}em`);
      item.el.style.setProperty("--swim-y", `${item.y.toFixed(3)}em`);
      item.el.style.setProperty("--swim-r", `${item.r.toFixed(3)}deg`);
    });
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
}
