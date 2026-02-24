// 1) Track scroll progress after steps section.
// 2) Blend overlay shade with smooth bumps near key sections.
// 3) Update global --overlayShade variable on each frame.
export function scrollOverlayShade() {
  const langContent = document.querySelector(".lang-content");
  const steps = document.querySelector(".steps");
  const team = document.querySelector(".team");
  const testimonial = document.querySelector(".testimonial");
  const footer = document.querySelector("footer");
  if (!langContent || !steps) return;

  const startOpacity = 1;
  const endOpacity = 0.6;
  const darkTeamOpacity = 0.9;
  const darkTestimonialOpacity = 0.96;
  const darkFooterOpacity = 0.985;

  let ticking = false;
  // Compute overlay shade from section progress and local bumps.
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const stepsTop = steps.offsetTop;
      const stepsHeight = steps.offsetHeight;
      const y = window.scrollY || window.pageYOffset;
      const viewportH = window.innerHeight;

      // progress from steps top to steps bottom
      const progressRaw = (y - stepsTop) / Math.max(1, stepsHeight);
      const progress = Math.min(1, Math.max(0, progressRaw));
      let value = startOpacity + (endOpacity - startOpacity) * progress;

      // Create bell-shaped intensity for each section crossing.
      const smoothClamp = (sectionEl) => {
        if (!sectionEl) return 0;
        const top = sectionEl.offsetTop;
        const height = sectionEl.offsetHeight;
        const start = top - viewportH * 0.25;
        const end = top + height + viewportH * 0.25;
        const raw = (y - start) / Math.max(1, end - start);
        const t = Math.min(1, Math.max(0, raw));
        return t * (1 - t) * 4; // smooth bump 0->1->0
      };

      const teamBump = smoothClamp(team);
      if (teamBump > 0) {
        value = value + (darkTeamOpacity - value) * teamBump;
      }

      const testBump = smoothClamp(testimonial);
      if (testBump > 0) {
        value = value + (darkTestimonialOpacity - value) * testBump;
      }

      const footerBump = smoothClamp(footer);
      if (footerBump > 0) {
        value = value + (darkFooterOpacity - value) * footerBump;
      }

      langContent.style.setProperty("--overlayShade", value.toFixed(3));
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
}

