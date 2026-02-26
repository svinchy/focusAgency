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
    const layout = {
      xStep: 14.2,
      yStep: 0.95,
      zStep: 70,
      rotStep: 11,
      scaleDrop: 0.106,
      shiftX: 0,
      farSpread: 0.95,
      minScale: 0.72,
      yScroll: 1.85,
      zScroll: 108
    };
    const total = members.length;
    const hasFourMemberLayout = total === 4;
    const farOffset = total / 2;

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
      const isBackCard = hasFourMemberLayout && abs === farOffset;

      let x;
      let y;
      let scale;
      let rot;
      let z;
      let opacity;
      let zIndex;

      if (isBackCard) {
        // For even sets (4 cards), keep the far card centered behind active
        // so left/right sides stay symmetrical (one card per side).
        x = layout.shiftX;
        y = layout.yStep * 0.55 + scrollStrength * layout.yScroll * 0.5;
        scale = Math.max(layout.minScale, 1 - (farOffset - 0.25) * layout.scaleDrop);
        rot = 0;
        z = -(farOffset + 0.9) * layout.zStep + scrollStrength * -layout.zScroll * 0.85;
        opacity = 0.55;
        zIndex = 6;
      } else {
        const visualX =
          abs <= 2 ? offset * layout.xStep : sign * (2 * layout.xStep + (abs - 2) * layout.xStep * layout.farSpread);
        const parallaxBase = abs + 1;
        x = visualX + layout.shiftX;
        y = abs * layout.yStep + scrollStrength * parallaxBase * layout.yScroll;
        scale = Math.max(layout.minScale, 1 - abs * layout.scaleDrop);
        rot = sign * -layout.rotStep * Math.min(abs, 2);
        z = -abs * layout.zStep + scrollStrength * -layout.zScroll * parallaxBase;
        const minOpacity = 0.25;
        opacity = abs === 0 ? 1 : Math.max(minOpacity, 0.62 - abs * 0.12);
        zIndex = 10 - abs;
      }

      member.classList.toggle("active", i === activeIndex);
      member.style.zIndex = zIndex;
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

  const goPrev = () => {
    activeIndex = (activeIndex - 1 + members.length) % members.length;
    computeTargets();
  };

  const goNext = () => {
    activeIndex = (activeIndex + 1) % members.length;
    computeTargets();
  };

  prev.addEventListener("click", goPrev);
  next.addEventListener("click", goNext);

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
