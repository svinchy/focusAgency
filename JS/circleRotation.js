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
  const ease = 0.022;
  const maxRotation = 60;
  const maxTitleShift = 0.85;
  let rafId = null;
  let lastTime = 0;

  // Start the motion when the steps section itself reaches the viewport top.
  const calcTarget = () => {
    const sectionRect = section.getBoundingClientRect();
    const viewportH = window.innerHeight;
    const range = sectionRect.height - viewportH;

    if (range <= 0) {
      target = 0;
      titleTarget = 0;
      return;
    }

    const progressRaw = (0 - sectionRect.top) / range;
    const progress = Math.min(1, Math.max(0, progressRaw));
    const smoothProgress = progress * progress * (3 - 2 * progress);

    target = -smoothProgress * maxRotation;
    titleTarget = -smoothProgress * maxTitleShift;
  };

  // Interpolate toward targets for smooth motion.
  const animate = (time) => {
    rafId = null;

    if (!lastTime) lastTime = time;
    const delta = Math.min(64, time - lastTime || 16.67);
    lastTime = time;
    const frameEase = 1 - Math.pow(1 - ease, delta / (1000 / 60));

    current += (target - current) * frameEase;
    titleCurrent += (titleTarget - titleCurrent) * frameEase;
    circle.style.setProperty("--steps-rot", `${current.toFixed(2)}deg`);
    title.style.setProperty("--steps-title-y", `${titleCurrent.toFixed(3)}em`);

    const stillMoving =
      Math.abs(target - current) > 0.02 || Math.abs(titleTarget - titleCurrent) > 0.002;
    if (stillMoving) {
      rafId = requestAnimationFrame(animate);
    } else {
      lastTime = 0;
    }
  };

  const scheduleAnimate = () => {
    if (rafId) return;
    lastTime = 0;
    rafId = requestAnimationFrame(animate);
  };

  // Recompute targets on page scroll.
  const onScroll = () => {
    calcTarget();
    scheduleAnimate();
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  calcTarget();
  scheduleAnimate();
}
