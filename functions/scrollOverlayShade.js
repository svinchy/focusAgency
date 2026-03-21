export const scrollOverlayShade = function scrollOverlayShade() {
  const langContent = document.querySelector('.lang-content');
  if (!langContent) return;
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, scrollY / Math.min(docHeight, window.innerHeight * 2)) : 0;
      const shade = Math.max(0.3, 1 - progress * 0.5);
      langContent.style.setProperty('--overlayShade', shade.toFixed(3));
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
};
