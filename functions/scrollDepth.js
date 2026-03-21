export const scrollDepth = function scrollDepth() {
  const teamSection = document.querySelector('.team');
  if (!teamSection) return;
  let ticking = false;
  const TEAM_DEPTH_EVENT = 'team-depth-change';
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const rect = teamSection.getBoundingClientRect();
      const vh = window.innerHeight;
      const visible = Math.max(0, Math.min(rect.height, vh - Math.max(0, rect.top), rect.bottom));
      const strength = rect.height > 0 ? visible / rect.height : 0;
      window.dispatchEvent(new CustomEvent(TEAM_DEPTH_EVENT, { detail: { strength } }));
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
};
