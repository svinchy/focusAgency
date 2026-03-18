// 1) Guard for reduced motion.
// 2) Apply intro classes by timeline.
// 3) Lock final visual positions on animation end.
export function loadingIntro() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const body = document.body;
  body.classList.add("intro-active", "intro-overlay");

  const logo = document.querySelector(".logo");
  const corner = document.querySelector(".corner");
  const corner2 = document.querySelector(".corner2");
  let bannerStarted = false;
  let globeZoomStarted = false;
  let introFinished = false;

  const startBannerReveal = () => {
    if (bannerStarted) return;
    bannerStarted = true;
    body.classList.add("intro-banner");
  };

  const startGlobeZoom = () => {
    if (globeZoomStarted) return;
    globeZoomStarted = true;
    body.classList.add("intro-globe-zoom");
  };

  const applyFinalCornerPosition = (element, cornerName) => {
    if (!element) return;

    const isBottomLeft = cornerName === "bottom-left";
    element.style.animation = "none";
    element.style.opacity = isBottomLeft ? "1" : "0";
    element.style.pointerEvents = isBottomLeft ? "" : "none";
    element.style.top = isBottomLeft
      ? "auto"
      : "calc(var(--corner-top-offset, var(--corner-final-offset, 20px)) + var(--app-safe-top, 0px))";
    element.style.right = isBottomLeft
      ? "auto"
      : "calc(var(--corner-right-offset, var(--corner-final-offset, 20px)) + var(--app-safe-right, 0px))";
    element.style.bottom = isBottomLeft
      ? "calc(var(--corner-bottom-offset, var(--corner-final-offset, 20px)) + var(--app-fixed-bottom-clearance, 0px))"
      : "auto";
    element.style.left = isBottomLeft
      ? "calc(var(--corner-left-offset, var(--corner-final-offset, 20px)) + var(--app-safe-left, 0px))"
      : "auto";
    element.style.transform = isBottomLeft ? "none" : "rotate(180deg)";
  };

  const finishIntro = () => {
    if (introFinished) return;
    introFinished = true;
    body.classList.remove("intro-globe-zoom");
    body.classList.add("intro-finished");
    applyFinalLogoPosition();
    applyFinalCornerPosition(corner, "bottom-left");
    applyFinalCornerPosition(corner2, "top-right");
  };

  const applyFinalLogoPosition = () => {
    if (!logo) return;
    const styles = getComputedStyle(body);
    const finalTopOffset = styles
      .getPropertyValue("--logo-final-top-offset")
      .trim() || "0.5em";
    const finalLeftOffset = styles
      .getPropertyValue("--logo-final-left-offset")
      .trim() || "0.5em";
    logo.style.setProperty("top", `calc(${finalTopOffset} + var(--app-safe-top, 0px))`, "important");
    logo.style.setProperty("left", `calc(${finalLeftOffset} + var(--app-safe-left, 0px))`, "important");
  };

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

  // Start overlay fade shortly after corner movement begins.
  const moveDuration = 3000;
  const fadeStart = moveStart + Math.round(moveDuration * 0.1);
  window.setTimeout(() => {
    body.classList.add("intro-fade");
  }, fadeStart);

  const overlayFadeDuration = 1000;
  const globeZoomFadeProgress = 0;
  const moveEnd = moveStart + moveDuration;
  const globeZoomStart = fadeStart + Math.round(overlayFadeDuration * globeZoomFadeProgress);
  const globeZoomDuration = moveEnd - globeZoomStart;
  body.style.setProperty("--globe-intro-zoom-duration", `${globeZoomDuration}ms`);
  window.setTimeout(() => {
    startGlobeZoom();
  }, globeZoomStart);

  const bannerStart = globeZoomStart + Math.round(globeZoomDuration * 0.2);
  window.setTimeout(() => {
    startBannerReveal();
  }, bannerStart);

  // Fallback: always mark intro as finished after full timeline.
  const introEnd = Math.max(moveEnd, globeZoomStart + globeZoomDuration) + 120;
  window.setTimeout(() => {
    finishIntro();
    startBannerReveal();
  }, introEnd);

  // lock final positions on animation end
  if (logo) {
    logo.addEventListener("animationend", (e) => {
      if (e.animationName !== "logoMove") return;
      applyFinalLogoPosition();
      logo.style.transform = "translate(0, 0)";
      logo.style.animation = "none";
    }, { once: true });
  }

  window.addEventListener("resize", () => {
    if (body.classList.contains("intro-finished")) {
      applyFinalLogoPosition();
      applyFinalCornerPosition(corner, "bottom-left");
      applyFinalCornerPosition(corner2, "top-right");
    }
  });

  if (corner) {
    corner.addEventListener("animationend", (e) => {
      if (e.animationName !== "cornerToBottomLeft") return;
      applyFinalCornerPosition(corner, "bottom-left");
    }, { once: true });
  }

  if (corner2) {
    corner2.addEventListener("animationend", (e) => {
      if (e.animationName !== "cornerToTopRight") return;
      applyFinalCornerPosition(corner2, "top-right");
      startGlobeZoom();
    }, { once: true });
  }
}
