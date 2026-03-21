export const StarsBg = {
  tag: 'div',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100vh',
  zIndex: '1',
  pointerEvents: 'none',
  overflow: 'hidden',
  contain: 'paint',

  Img: {
    tag: 'img',
    src: 'stars5.webp',
    alt: '',
    position: 'absolute',
    top: '-8%',
    left: '-8%',
    width: '116%',
    height: '116%',
    objectFit: 'cover',
    transformOrigin: 'center center',
    willChange: 'transform, opacity',
    opacity: '0.62',
    transform: 'translate3d(-1.8%, -1.2%, 0) scale(1.1)',
    animation: 'starsFieldLoop 18s linear infinite alternate',

    'body.intro-active &': {
      animation: 'starsIntroSharp 2.6s linear both, starsFieldLoop 18s linear infinite alternate 2.6s',
    },
  },
};
