export const Focus = {
  tag: 'div',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '2',
  width: '25em',
  height: '15em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '::after': {
    content: "''",
    position: 'absolute',
    inset: '-0.7em',
    border: '1px solid rgba(224, 77, 77, 0.45)',
    borderRadius: '0.2em',
    opacity: '0',
    pointerEvents: 'none',
  },

  '&.is-pulse': { animation: 'focusFramePulse 0.52s ease-out' },
  '&.is-pulse::after': { animation: 'focusRingPulse 0.52s ease-out' },
  '&.is-pulse .focusCorner::before': { animation: 'focusCornerFlash 0.52s ease-out' },
  '&.is-pulse .focusCorner::after': { animation: 'focusCornerFlash 0.52s ease-out' },

  H5: {
    position: 'relative',
    zIndex: '1',
    transition: 'none',

    '::before': {
      content: "''",
      position: 'absolute',
      inset: '-0.35em -0.8em',
      zIndex: '-1',
      background: 'radial-gradient(65% 80% at 50% 50%, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0) 100%)',
      pointerEvents: 'none',
    },

    '&.is-pulse': { animation: 'focusNamePulse 0.52s ease-out' },
  },
};
