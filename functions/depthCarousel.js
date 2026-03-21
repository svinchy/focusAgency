export const depthCarousel = function depthCarousel() {
  const members = Array.from(document.querySelectorAll('.team .teamMember'));
  const prev = document.querySelector('.team .navArrows .prev');
  const next = document.querySelector('.team .navArrows .next');
  const teamSection = document.querySelector('.team');
  if (!members.length || !prev || !next || !teamSection) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const staticMode = prefersReduced;
  let activeIndex = 0;
  let scrollStrength = 0;
  let rafId = null;
  let running = false;

  const state = members.map(() => ({
    current: { x: 0, y: 0, z: 0, r: 0, s: 1, o: 1 },
    target: { x: 0, y: 0, z: 0, r: 0, s: 1, o: 1 }
  }));

  const computeTargets = () => {
    const layout = { xStep: 14.2, yStep: 0.95, zStep: 70, rotStep: 11, scaleDrop: 0.106, shiftX: 0, farSpread: 0.95, minScale: 0.72, yScroll: 1.85, zScroll: 108 };
    const total = members.length;
    const hasFourMemberLayout = total === 4;
    const farOffset = total / 2;
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
      let x, y, scale, rot, z, opacity, zIndex;
      if (isBackCard) {
        x = layout.shiftX;
        y = layout.yStep * 0.55 + scrollStrength * layout.yScroll * 0.5;
        scale = Math.max(layout.minScale, 1 - (farOffset - 0.25) * layout.scaleDrop);
        rot = 0;
        z = -(farOffset + 0.9) * layout.zStep + scrollStrength * -layout.zScroll * 0.85;
        opacity = 0.55;
        zIndex = 6;
      } else {
        const visualX = abs <= 2 ? offset * layout.xStep : sign * (2 * layout.xStep + (abs - 2) * layout.xStep * layout.farSpread);
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
      member.classList.toggle('active', i === activeIndex);
      member.style.zIndex = zIndex;
      state[i].target = { x, y, z, r: rot, s: scale, o: opacity };
    });
  };

  const applyTargetsNow = () => {
    members.forEach((member, i) => {
      const tgt = state[i].target;
      state[i].current = Object.assign({}, tgt);
      member.style.transform = 'translate(-50%, -50%) translateX(' + tgt.x + 'em) translateY(' + tgt.y + 'em) translateZ(' + tgt.z + 'px) rotateY(' + tgt.r + 'deg) scale(' + tgt.s + ')';
      member.style.opacity = tgt.o;
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
      member.style.transform = 'translate(-50%, -50%) translateX(' + cur.x + 'em) translateY(' + cur.y + 'em) translateZ(' + cur.z + 'px) rotateY(' + cur.r + 'deg) scale(' + cur.s + ')';
      member.style.opacity = cur.o;
    });
    rafId = requestAnimationFrame(animate);
  };

  const applyDepth = (value) => {
    scrollStrength = Math.max(0, Math.min(1, Number(value) || 0));
    computeTargets();
    if (staticMode) applyTargetsNow();
  };

  const goPrev = () => { activeIndex = (activeIndex - 1 + members.length) % members.length; computeTargets(); if (staticMode) applyTargetsNow(); };
  const goNext = () => { activeIndex = (activeIndex + 1) % members.length; computeTargets(); if (staticMode) applyTargetsNow(); };

  prev.addEventListener('click', goPrev);
  next.addEventListener('click', goNext);
  window.addEventListener('team-depth-change', (event) => { applyDepth(event && event.detail && event.detail.strength); });
  window.addEventListener('resize', () => { computeTargets(); if (staticMode) applyTargetsNow(); });

  computeTargets();
  if (staticMode) { applyTargetsNow(); return; }

  const start = () => { if (running) return; running = true; rafId = requestAnimationFrame(animate); };
  const stop = () => { running = false; if (rafId) cancelAnimationFrame(rafId); rafId = null; };

  if (typeof IntersectionObserver === 'undefined') { start(); return; }
  const io = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) start(); else stop(); }); }, { threshold: 0.15 });
  io.observe(teamSection);
};
