export const GlobeBackground = {
  extends: 'Box',
  boxSize: '100vh 100vw',
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '0',
  overflow: 'hidden',
  style: {
    backgroundImage: "url('/IMAGE/stars5.webp')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    animation: 'starsDrift 40s linear infinite',
    isolation: 'isolate',
  },

  // Stars intro burst overlay
  StarsBg: {
    extends: 'Box',
    position: 'fixed',
    top: '0', left: '0', right: '0', bottom: '0',
    zIndex: '0',
    pointerEvents: 'none',
    overflow: 'hidden',
    style: { contain: 'paint' },
    ':before': {
      position: 'absolute',
      top: '-8%', left: '-8%', right: '-8%', bottom: '-8%',
      style: {
        content: "''",
        backgroundImage: "url('/IMAGE/stars5.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        transformOrigin: 'center center',
        willChange: 'transform, opacity',
        opacity: '0',
        transform: 'translate3d(-2vw, -1.4vh, 0) scale(1.14)',
      },
    },
    ':after': {
      position: 'absolute',
      top: '-8%', left: '-8%', right: '-8%', bottom: '-8%',
      style: {
        content: "''",
        backgroundImage: "url('/IMAGE/stars5.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        transformOrigin: 'center center',
        willChange: 'transform, opacity',
        opacity: '0',
        transform: 'translate3d(0, 1.2vh, 0) scale(0.46)',
      },
    },
    attr: { 'data-el': 'stars-bg' },
  },

  // Red tint overlay
  Overlay: {
    extends: 'Box',
    position: 'absolute',
    top: '0', left: '0',
    boxSize: '100% 100%',
    zIndex: '2',
    pointerEvents: 'none',
    background: 'rgba(224, 77, 77, 0.1)',
  },

  // Twinkle overlay
  Overlay2: {
    extends: 'Box',
    position: 'absolute',
    top: '0', left: '0',
    boxSize: '100% 100%',
    zIndex: '3',
    pointerEvents: 'none',
    background: 'rgba(224, 77, 77, 0.1)',
    style: {
      animation: 'starsTwinkle 6s ease-in-out infinite',
    },
  },

  // Gradient overlay (left-to-right)
  ':before': {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: '4',
    background: 'linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
    pointerEvents: 'none',
    style: { content: "''" },
  },

  // Globe image with continuous rotation
  Image: {
    boxSize: '100vh 56em',
    margin: '3em -3em - auto',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    round: '100%',
    zIndex: '1',
    style: {
      backgroundImage: "url('/IMAGE/globe.webp')",
      animation: 'rotateGlobe 120s linear infinite',
    },
  },
}
