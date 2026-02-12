export const initTeamCarousel = () => {
  const members = Array.from(document.querySelectorAll(".team .teamMember"));
  const prev = document.querySelector(".team .navArrows .prev");
  const next = document.querySelector(".team .navArrows .next");
  if (!members.length || !prev || !next) return;

  let activeIndex = members.findIndex((m) => m.classList.contains("active"));
  if (activeIndex < 0) activeIndex = 0;

  const applyState = () => {
    members.forEach((member, i) => {
      const offset = i - activeIndex;
      const abs = Math.abs(offset);
      const sign = Math.sign(offset);
      const x = offset * 0;
      const y = abs * 2;
      const scale = Math.max(0.75, 1 - abs * 0.08);
      const rot = sign * -6 * Math.min(abs, 2);
      const z = -abs * 40;
      const opacity = abs === 0 ? 1 : Math.max(0.35, 0.65 - abs * 0.1);

      member.classList.toggle("active", i === activeIndex);
      member.style.transform = `translateX(${x}em) translateY(${y}em) translateZ(${z}px) rotateY(${rot}deg) scale(${scale})`;
      member.style.opacity = opacity;
      member.style.zIndex = 10 - abs;
    });
  };

  prev.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + members.length) % members.length;
    applyState();
  });

  next.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % members.length;
    applyState();
  });

  applyState();
};
