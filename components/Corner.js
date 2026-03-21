export const Corner = {
  tag: 'div',
  width: '1.2em',
  height: '1.2em',
  position: 'fixed',
  zIndex: '5',
  bottom: '20px',
  left: '20px',
  transition: 'opacity 1.6s ease, top 1.2s ease, left 1.2s ease, right 1.2s ease, bottom 1.2s ease, transform 1.2s ease',

  ':before': {
    content: "''",
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '2px',
    height: '100%',
    background: 'rgba(170, 170, 170, 0.7)',
    borderRadius: '5px',
  },
  ':after': {
    content: "''",
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '2px',
    borderRadius: '5px',
    background: 'rgba(170, 170, 170, 0.7)',
  },

  // Intro states
  'body.intro-active &': {
    position: 'fixed',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    zIndex: '1600',
    opacity: '0',
    transitionProperty: 'opacity',
    transitionDuration: '0.6s',
    transitionTimingFunction: 'ease',
  },
  'body.intro-corners &': {
    opacity: '1',
    transform: 'translate(-50%, -50%) translate(-2em, 2em)',
    animation: 'cornerPulseStrongLeft 0.9s ease-out 1 both',
  },
  'body.intro-corners-move &': {
    animation: 'cornerToBottomLeft 3s cubic-bezier(0.16, 1, 0.3, 1) both',
  },

  // Chat panel / nav open states
  'body.chat-panel-open &': { opacity: '0', pointerEvents: 'none' },
  'body.is-nav-open &': { opacity: '0', pointerEvents: 'none' },
};

export const Corner2 = {
  tag: 'div',
  width: '1.2em',
  height: '1.2em',
  position: 'fixed',
  zIndex: '5',
  top: '20px',
  right: '20px',
  transform: 'rotate(180deg)',
  transition: 'opacity 1.6s ease, top 1.2s ease, left 1.2s ease, right 1.2s ease, bottom 1.2s ease, transform 1.2s ease',

  ':before': {
    content: "''",
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '2px',
    height: '100%',
    background: 'rgba(170, 170, 170, 0.7)',
    borderRadius: '5px',
  },
  ':after': {
    content: "''",
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '2px',
    borderRadius: '5px',
    background: 'rgba(170, 170, 170, 0.7)',
  },

  'body.intro-active &': {
    position: 'fixed',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%) rotate(180deg)',
    zIndex: '1600',
    opacity: '0',
    transitionProperty: 'opacity',
    transitionDuration: '0.6s',
    transitionTimingFunction: 'ease',
  },
  'body.intro-corners &': {
    opacity: '1',
    transform: 'translate(-50%, -50%) translate(2em, -2em) rotate(180deg)',
    animation: 'cornerPulseStrongRight 0.9s ease-out 1 both',
  },
  'body.intro-corners-move &': {
    animation: 'cornerToTopRight 3s cubic-bezier(0.16, 1, 0.3, 1) both',
  },

  // Chat panel / nav open states
  'body.chat-panel-open &': { opacity: '0', pointerEvents: 'none' },
  'body.is-nav-open &': { opacity: '0', pointerEvents: 'none' },
};
