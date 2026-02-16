export const initTeamCarousel = () => {
  const members = Array.from(document.querySelectorAll(".team .teamMember"));
  const prev = document.querySelector(".team .navArrows .prev");
  const next = document.querySelector(".team .navArrows .next");
  const teamSection = document.querySelector(".team");
  if (!members.length || !prev || !next) return;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let activeIndex = members.findIndex((m) => m.classList.contains("active"));
  if (activeIndex < 0) activeIndex = 0;
  let scrollStrength = 0;
  let rafId = null;
  let running = false;
  const state = members.map(() => ({
    current: { x: 0, y: 0, z: 0, r: 0, s: 1, o: 1 },
    target: { x: 0, y: 0, z: 0, r: 0, s: 1, o: 1 }
  }));

  const computeTargets = () => {
    const vw = window.innerWidth || document.documentElement.clientWidth || 0;
    const compact = vw <= 1366;
    const xStep = compact ? 12.5 : 8.5;
    const yStep = compact ? 1 : 1.2;
    const zStep = compact ? 74 : 80;
    const rotStep = compact ? 11 : 12;
    const scaleDrop = compact ? 0.11 : 0.12;
    const compactShiftX = compact ? 1.2 : 0;
    const total = members.length;

    const wrappedOffset = (index) => {
      let offset = index - activeIndex;
      const half = Math.floor(total / 2);
      if (offset > half) offset -= total;
      if (offset < -half) offset += total;
      return offset;
    };

    members.forEach((member, i) => {
      const offset = wrappedOffset(i);
      const abs = Math.abs(offset);
      const sign = Math.sign(offset);
      const visualX =
        abs <= 2 ? offset * xStep : sign * (2 * xStep + (abs - 2) * xStep * 0.7);
      const x = visualX + compactShiftX;
      const parallaxBase = abs + 1;
      const y = abs * yStep + scrollStrength * parallaxBase * 2.4;
      const scale = Math.max(0.7, 1 - abs * scaleDrop);
      const rot = sign * -rotStep * Math.min(abs, 2);
      const z = -abs * zStep + scrollStrength * -120 * parallaxBase;
      const opacity = abs === 0 ? 1 : Math.max(0.25, 0.6 - abs * 0.12);

      member.classList.toggle("active", i === activeIndex);
      member.style.zIndex = 10 - abs;

      state[i].target = { x, y, z, r: rot, s: scale, o: opacity };
    });
  };

  const ease = 0.12;
  const animate = () => {
    if (!running) return;
    members.forEach((member, i) => {
      const cur = state[i].current;
      const tgt = state[i].target;
      cur.x += (tgt.x - cur.x) * ease;
      cur.y += (tgt.y - cur.y) * ease;
      cur.z += (tgt.z - cur.z) * ease;
      cur.r += (tgt.r - cur.r) * ease;
      cur.s += (tgt.s - cur.s) * ease;
      cur.o += (tgt.o - cur.o) * ease;

      member.style.transform = `translate(-50%, -50%) translateX(${cur.x}em) translateY(${cur.y}em) translateZ(${cur.z}px) rotateY(${cur.r}deg) scale(${cur.s})`;
      member.style.opacity = cur.o;
    });
    rafId = requestAnimationFrame(animate);
  };

  prev.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + members.length) % members.length;
    computeTargets();
  });

  next.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % members.length;
    computeTargets();
  });

  computeTargets();

  const start = () => {
    if (running || prefersReduced) return;
    running = true;
    rafId = requestAnimationFrame(animate);
  };

  const stop = () => {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  };

  const onScroll = () => {
    if (!teamSection) return;
    const title = teamSection.querySelector("h2");
    if (!title) return;
    const teamRect = teamSection.getBoundingClientRect();
    const start = teamRect.top;
    const viewportH = window.innerHeight;
    const range = viewportH * 0.6;
    const progress = Math.min(1, Math.max(0, (0 - start) / range));
    scrollStrength = Math.max(0, Math.min(1, progress));
    title.style.setProperty("--team-parallax-y", `${(scrollStrength * -1.2).toFixed(3)}em`);
    computeTargets();
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  if (prefersReduced) return;

  if (typeof IntersectionObserver === "undefined") {
    start();
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) start();
        else stop();
      });
    },
    { threshold: 0.15 }
  );

  io.observe(teamSection);
};
