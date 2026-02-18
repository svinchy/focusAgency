// 1) Read steps section elements.
// 2) Convert scroll progress into rotation/title targets.
// 3) Smoothly animate CSS variables with rAF.
export function circleRotation() {
  const section = document.querySelector(".steps");
  const circle = document.querySelector(".steps .circle");
  const title = document.querySelector(".steps h2");
  if (!section || !circle || !title) return;

  let current = 0;
  let target = 0;
  let titleCurrent = 0;
  let titleTarget = 0;
  const ease = 0.05; // slower, smoother

  // Derive rotation/title targets from section scroll progress.
  const calcTarget = () => {
    const titleRect = title.getBoundingClientRect();
    const start = titleRect.top;
    const sectionRect = section.getBoundingClientRect();
    const viewportH = window.innerHeight;
    const range = sectionRect.height - viewportH;

    if (range <= 0) {
      target = 0;
      return;
    }

    // start when title reaches top edge
    const progressRaw = (0 - start) / range;
    const progress = Math.min(1, Math.max(0, progressRaw));
    target = -progress * 90; // reverse rotation
    titleTarget = -progress * 1.2; // em units for scroll swim
  };

  // Interpolate toward targets for smooth motion.
  const animate = () => {
    current += (target - current) * ease;
    titleCurrent += (titleTarget - titleCurrent) * ease;
    circle.style.setProperty("--steps-rot", `${current.toFixed(2)}deg`);
    title.style.setProperty("--steps-title-y", `${titleCurrent.toFixed(3)}em`);
    requestAnimationFrame(animate);
  };

  // Recompute targets on page scroll.
  const onScroll = () => {
    calcTarget();
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  calcTarget();
  requestAnimationFrame(animate);
}
