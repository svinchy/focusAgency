const TEAM_DEPTH_EVENT = "team-depth-change";

// 1) Observe team section scroll progress.
// 2) Update heading offset CSS variable.
// 3) Broadcast normalized depth strength event.
export function scrollDepth() {
  const teamSection = document.querySelector(".team");
  if (!teamSection) return;

  const title = teamSection.querySelector("h2");

  // Convert team section viewport position into normalized depth strength.
  const update = () => {
    const teamRect = teamSection.getBoundingClientRect();
    const viewportH = window.innerHeight || 1;
    const range = viewportH * 0.6;
    const progress = Math.min(1, Math.max(0, (0 - teamRect.top) / range));
    const strength = Math.max(0, Math.min(1, progress));

    if (title) {
      title.style.setProperty("--team-parallax-y", `${(strength * -1.2).toFixed(3)}em`);
    }

    window.dispatchEvent(
      new CustomEvent(TEAM_DEPTH_EVENT, {
        detail: { strength }
      })
    );
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}
