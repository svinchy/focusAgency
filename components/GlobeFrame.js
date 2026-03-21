export const GlobeFrame = {
  tag: 'div',
  position: 'fixed',
  right: '-5em',
  bottom: '-5em',
  zIndex: '1',
  pointerEvents: 'none',
  transformOrigin: '64% 58%',

  'body.intro-active &': {
    transform: 'translate3d(2vw, 1.5vh, 0) scale(1.2)',
  },

  'body.intro-globe-zoom &': {
    animation: 'globeIntroZoomOut var(--globe-intro-zoom-duration, 1.05s) cubic-bezier(0.22, 1, 0.36, 1) forwards',
  },

  'body.intro-finished &': {
    transform: 'translate3d(0, 0, 0) scale(1)',
  },
};
