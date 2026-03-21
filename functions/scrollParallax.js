export const scrollParallax = function scrollParallax() {
  const addressImgs = document.querySelectorAll('footer .address img');
  if (!addressImgs.length) return;
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const scrollY = window.scrollY || window.pageYOffset;
      addressImgs.forEach((img, i) => {
        const factor = i % 2 === 0 ? 0.12 : -0.08;
        img.style.transform = 'translateY(' + (scrollY * factor) + 'px)';
      });
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
};
