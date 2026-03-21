export const StarsBg = {
  tag: 'div',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: 'var(--app-visual-viewport-height, var(--app-viewport-height, 100vh))',
  zIndex: '1',
  pointerEvents: 'none',
  overflow: 'hidden',
  contain: 'paint',

  ':before': {
    content: "''",
    position: 'absolute',
    inset: '-8%',
    background: "url('./IMAGE/stars5.webp') no-repeat center",
    backgroundSize: 'cover',
    transformOrigin: 'center center',
    willChange: 'transform, opacity',
    opacity: '0.62',
    transform: 'translate3d(-1.8%, -1.2%, 0) scale(1.1)',
    animation: 'starsFieldLoop 18s linear infinite alternate',
  },

  ':after': {
    content: "''",
    position: 'absolute',
    inset: '-8%',
    background: "url('./IMAGE/stars5.webp') no-repeat center",
    backgroundSize: 'cover',
    transformOrigin: 'center center',
    willChange: 'transform, opacity',
    display: 'none',
  },

  'body.intro-active &:before': {
    animation: 'starsIntroSharp 2.6s linear both, starsFieldLoop 18s linear infinite alternate 2.6s',
  },
};
