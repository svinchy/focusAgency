export const initTeamCarousel = () => {
  const members = Array.from(document.querySelectorAll(".team .teamMember"));
  const prev = document.querySelector(".team .navArrows .prev");
  const next = document.querySelector(".team .navArrows .next");
  const teamSection = document.querySelector(".team");
  if (!members.length || !prev || !next) return;

  let activeIndex = members.findIndex((m) => m.classList.contains("active"));
  if (activeIndex < 0) activeIndex = 0;
  let scrollStrength = 0;
  const state = members.map(() => ({
    current: { x: 0, y: 0, z: 0, r: 0, s: 1, o: 1 },
    target: { x: 0, y: 0, z: 0, r: 0, s: 1, o: 1 }
  }));

  const computeTargets = () => {
    members.forEach((member, i) => {
      const offset = i - activeIndex;
      const abs = Math.abs(offset);
      const sign = Math.sign(offset);
      const x = offset * 7.5;
      const parallaxBase = abs + 1;
      const y = abs * 1.2 + scrollStrength * parallaxBase * 2.4;
      const scale = Math.max(0.7, 1 - abs * 0.12);
      const rot = sign * -12 * Math.min(abs, 2);
      const z = -abs * 80 + scrollStrength * -120 * parallaxBase;
      const opacity = abs === 0 ? 1 : Math.max(0.25, 0.6 - abs * 0.12);

      member.classList.toggle("active", i === activeIndex);
      member.style.zIndex = 10 - abs;

      state[i].target = { x, y, z, r: rot, s: scale, o: opacity };
    });
  };

  const ease = 0.12;
  const animate = () => {
    members.forEach((member, i) => {
      const cur = state[i].current;
      const tgt = state[i].target;
      cur.x += (tgt.x - cur.x) * ease;
      cur.y += (tgt.y - cur.y) * ease;
      cur.z += (tgt.z - cur.z) * ease;
      cur.r += (tgt.r - cur.r) * ease;
      cur.s += (tgt.s - cur.s) * ease;
      cur.o += (tgt.o - cur.o) * ease;

      member.style.transform = `translateX(${cur.x}em) translateY(${cur.y}em) translateZ(${cur.z}px) rotateY(${cur.r}deg) scale(${cur.s})`;
      member.style.opacity = cur.o;
    });
    requestAnimationFrame(animate);
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
    title.style.transform = `translateY(${scrollStrength * -1.2}em)`;
    computeTargets();
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  requestAnimationFrame(animate);
};
