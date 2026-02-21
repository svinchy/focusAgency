const TEAM_DEPTH_EVENT = "team-depth-change";

// 1) Build circular card state for team members.
// 2) React to prev/next clicks and scroll depth events.
// 3) Animate transforms while section is visible.
export function depthCarousel() {
  const members = Array.from(document.querySelectorAll(".team .teamMember"));
  const prev = document.querySelector(".team .navArrows .prev");
  const next = document.querySelector(".team .navArrows .next");
  const teamSection = document.querySelector(".team");
  if (!members.length || !prev || !next || !teamSection) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeIndex = members.findIndex((member) => member.classList.contains("active"));
  if (activeIndex < 0) activeIndex = 0;
  let scrollStrength = 0;
  let rafId = null;
  let running = false;

  const state = members.map(() => ({
    current: { x: 0, y: 0, z: 0, r: 0, s: 1, o: 1 },
    target: { x: 0, y: 0, z: 0, r: 0, s: 1, o: 1 }
  }));

  // Compute per-card depth/position targets from active index + scroll strength.
  const computeTargets = () => {
    const vw = window.innerWidth || document.documentElement.clientWidth || 0;
    const getLayout = (width) => {
      if (width <= 320) {
        return { xStep: 7.6, yStep: 0.42, zStep: 44, rotStep: 6.5, scaleDrop: 0.085, shiftX: 0.2, farSpread: 0.68, minScale: 0.76, yScroll: 1.2, zScroll: 68 };
      }
      if (width <= 390) {
        return { xStep: 8.2, yStep: 0.46, zStep: 46, rotStep: 7, scaleDrop: 0.088, shiftX: 0.25, farSpread: 0.7, minScale: 0.75, yScroll: 1.25, zScroll: 72 };
      }
      if (width <= 480) {
        return { xStep: 8.8, yStep: 0.5, zStep: 48, rotStep: 7.5, scaleDrop: 0.09, shiftX: 0.3, farSpread: 0.72, minScale: 0.75, yScroll: 1.35, zScroll: 76 };
      }
      if (width <= 560) {
        return { xStep: 9.6, yStep: 0.56, zStep: 52, rotStep: 8, scaleDrop: 0.093, shiftX: 0.35, farSpread: 0.76, minScale: 0.74, yScroll: 1.45, zScroll: 82 };
      }
      if (width <= 768) {
        return { xStep: 10.8, yStep: 0.64, zStep: 56, rotStep: 8.8, scaleDrop: 0.096, shiftX: 0.45, farSpread: 0.8, minScale: 0.74, yScroll: 1.6, zScroll: 90 };
      }
      if (width <= 850) {
        return { xStep: 11.8, yStep: 0.72, zStep: 60, rotStep: 9.5, scaleDrop: 0.1, shiftX: 0.55, farSpread: 0.84, minScale: 0.73, yScroll: 1.7, zScroll: 98 };
      }
      if (width <= 1024) {
        return { xStep: 12.8, yStep: 0.82, zStep: 64, rotStep: 10.2, scaleDrop: 0.103, shiftX: 0.65, farSpread: 0.88, minScale: 0.73, yScroll: 1.78, zScroll: 104 };
      }
      if (width <= 1366) {
        return { xStep: 14.2, yStep: 0.95, zStep: 70, rotStep: 11, scaleDrop: 0.106, shiftX: 0.8, farSpread: 0.95, minScale: 0.72, yScroll: 1.85, zScroll: 108 };
      }
      if (width <= 1920) {
        return { xStep: 15.4, yStep: 1, zStep: 74, rotStep: 11.5, scaleDrop: 0.11, shiftX: 1.1, farSpread: 1.05, minScale: 0.7, yScroll: 2.2, zScroll: 120 };
      }
      return { xStep: 11.5, yStep: 1.2, zStep: 80, rotStep: 12, scaleDrop: 0.12, shiftX: 0, farSpread: 1, minScale: 0.7, yScroll: 2.4, zScroll: 128 };
    };
    const layout = getLayout(vw);
    const total = members.length;

    // Keep offsets circular so previous/next wraps naturally.
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
        abs <= 2 ? offset * layout.xStep : sign * (2 * layout.xStep + (abs - 2) * layout.xStep * layout.farSpread);
      const x = visualX + layout.shiftX;
      const parallaxBase = abs + 1;
      const y = abs * layout.yStep + scrollStrength * parallaxBase * layout.yScroll;
      const scale = Math.max(layout.minScale, 1 - abs * layout.scaleDrop);
      const rot = sign * -layout.rotStep * Math.min(abs, 2);
      const z = -abs * layout.zStep + scrollStrength * -layout.zScroll * parallaxBase;
      const minOpacity = vw <= 560 ? 0.36 : 0.25;
      const opacity = abs === 0 ? 1 : Math.max(minOpacity, 0.62 - abs * 0.12);

      member.classList.toggle("active", i === activeIndex);
      member.style.zIndex = 10 - abs;
      state[i].target = { x, y, z, r: rot, s: scale, o: opacity };
    });
  };

  const ease = 0.12;
  // Interpolate card transforms toward target state.
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

  // Accept external scroll depth signal and re-render targets.
  const applyDepth = (value) => {
    scrollStrength = Math.max(0, Math.min(1, Number(value) || 0));
    computeTargets();
  };

  prev.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + members.length) % members.length;
    computeTargets();
  });

  next.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % members.length;
    computeTargets();
  });

  window.addEventListener(TEAM_DEPTH_EVENT, (event) => {
    applyDepth(event?.detail?.strength);
  });
  window.addEventListener("resize", computeTargets);

  computeTargets();

  // Start rAF loop when section is in view.
  const start = () => {
    if (running || prefersReduced) return;
    running = true;
    rafId = requestAnimationFrame(animate);
  };

  // Stop rAF loop when section leaves view.
  const stop = () => {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  };

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
}
