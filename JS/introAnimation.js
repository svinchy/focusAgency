export function initIntroAnimation() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const body = document.body;
  body.classList.add("intro-active", "intro-overlay");

  const logo = document.querySelector(".logo");
  const corner = document.querySelector(".corner");
  const corner2 = document.querySelector(".corner2");

  // 1) red dot pulses immediately
  // 2) F appears after one pulse (1s)
  window.setTimeout(() => {
    body.classList.add("intro-reveal");
  }, 1000);

  // 3) corners appear after F
  window.setTimeout(() => {
    body.classList.add("intro-corners");
  }, 1400);

  // hold, then move corners + logo
  const moveStart = 2600;
  window.setTimeout(() => {
    body.classList.add("intro-corners-move");
  }, moveStart);

  // start fadeout + banner at 10% of corner movement
  const moveDuration = 3000;
  const fadeStart = moveStart + Math.round(moveDuration * 0.1);
  window.setTimeout(() => {
    body.classList.add("intro-fade");
  }, fadeStart);

  // lock final positions on animation end
  if (logo) {
    logo.addEventListener("animationend", (e) => {
      if (e.animationName !== "logoMove") return;
      logo.style.top = "0.5em";
      logo.style.left = "0.5em";
      logo.style.transform = "translate(0, 0)";
      logo.style.animation = "none";
    }, { once: true });
  }

  if (corner) {
    corner.addEventListener("animationend", (e) => {
      if (e.animationName !== "cornerToBottomLeft") return;
      corner.style.top = "50%";
      corner.style.left = "50%";
      corner.style.transform = "translate(calc(-50% - 50vw + var(--corner-final-offset, 2.5em)), calc(-50% + 50vh - var(--corner-final-offset, 2.5em))) rotate(0deg)";
      corner.style.animation = "none";
    }, { once: true });
  }

  if (corner2) {
    corner2.addEventListener("animationend", (e) => {
      if (e.animationName !== "cornerToTopRight") return;
      corner2.style.top = "50%";
      corner2.style.left = "50%";
      corner2.style.transform = "translate(calc(-50% + 50vw - var(--corner-final-offset, 2.5em)), calc(-50% - 50vh + var(--corner-final-offset, 2.5em))) rotate(180deg)";
      corner2.style.animation = "none";
    }, { once: true });
  }
}
