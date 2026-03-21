export const Overlay = {
  tag: 'div',
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: 'rgba(224, 77, 77, .1)',
  pointerEvents: 'none',
  top: '0',
  left: '0',
  zIndex: '2',

  ':before': {
    content: "''",
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '2',
    background: 'linear-gradient(to left, rgba(0, 0, 0, var(--overlayShade, 1)) 0%, rgba(0, 0, 0, 0) 100%)',
    bottom: '0',
    right: '0',
    pointerEvents: 'none',
  },
};

export const Overlay2 = {
  tag: 'div',
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: 'rgba(224, 77, 77, .1)',
  pointerEvents: 'none',
  top: '0',
  left: '0',
  zIndex: '3',
  animation: 'starsTwinkle 6s ease-in-out infinite',
};
