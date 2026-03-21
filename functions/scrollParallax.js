export const scrollParallax = function scrollParallax() {
  const footer = document.querySelector('footer');
  if (!footer) return;

  const images = Array.from(footer.querySelectorAll('.address img'));
  if (!images.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  let ticking = false;
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  const update = () => {
    const rect = footer.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const y = window.scrollY || window.pageYOffset || 0;

    const progress = clamp((vh - rect.top) / (vh + rect.height), 0, 1);
    const centerDelta = (rect.top + rect.height * 0.5 - vh * 0.5) / vh;

    const glow = clamp(1 - Math.abs(centerDelta) * 1.7, 0, 1);
    footer.style.setProperty('--footerGlow', glow.toFixed(3));

    images.forEach((img, i) => {
      const dir = i % 2 === 0 ? -1 : 1;
      const baseY = (-centerDelta * (i === 0 ? 2.8 : 2.1) + (progress - 0.5) * 0.5) * 12;
      const baseX = dir * (0.5 - progress) * 6;

      const phase = y * 0.008 + i * 1.35;
      const swimX = Math.sin(phase) * 5.5;
      const swimY = Math.cos(phase * 0.88) * 7.5;
      const tilt = Math.sin(phase * 0.6) * 1.4;
      const scale = 1 + Math.cos(phase * 0.52) * 0.01;

      img.style.transform =
        'translate3d(' + (baseX + swimX).toFixed(2) + 'px, ' + (baseY + swimY).toFixed(2) + 'px, 0) ' +
        'rotate(' + tilt.toFixed(2) + 'deg) scale(' + scale.toFixed(3) + ')';
    });

    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
};
