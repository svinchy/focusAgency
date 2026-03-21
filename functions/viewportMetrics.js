export const viewportMetrics = function viewportMetrics() {};

export const initViewportMetrics = function initViewportMetrics() {
  const setMetrics = () => {
    const vv = window.visualViewport;
    const w = vv ? vv.width : window.innerWidth;
    const h = vv ? vv.height : window.innerHeight;
    document.documentElement.style.setProperty('--app-viewport-width', w + 'px');
    document.documentElement.style.setProperty('--app-visual-viewport-height', h + 'px');
  };
  setMetrics();
  window.addEventListener('resize', setMetrics);
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', setMetrics);
    window.visualViewport.addEventListener('scroll', setMetrics);
  }
};
