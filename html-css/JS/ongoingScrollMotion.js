// 1) Track heading visibility and scroll speed.
// 2) Continuously compute sinusoidal target offsets.
// 3) Smoothly apply transform variables on every scroll frame.
export function ongoingScrollMotion() {
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

  // Clamp value into [min, max].
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  // Linear interpolation helper for smoothing.
  const lerp = (a, b, t) => a + (b - a) * t;
  let prevY = window.scrollY || window.pageYOffset || 0;
  let ticking = false;

  entries.forEach((item, i) => {
    item.phaseOffset = i * 1.37;
    item.x = 0;
    item.y = 0;
    item.r = 0;
  });

  // Update heading swim offsets from scroll position and visibility.
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

  // Throttle heading updates to one frame per scroll tick.
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
}

