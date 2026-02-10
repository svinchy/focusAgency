export function initBannerScroll() {
  const banner = document.querySelector(".bannerTitle");
  if (!banner) return;

  banner.style.willChange = "transform";
  banner.style.transition = "transform 0.2s ease-out";

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY || window.pageYOffset;
      banner.style.transform = `translateY(${y * 0.6}px)`;
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
