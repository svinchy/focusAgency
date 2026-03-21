export const Logo = {
  tag: 'div',
  color: 'cream',
  width: 'fit-content',
  lineHeight: '0.85em',
  fontSize: '4em',
  fontWeight: '800',
  position: 'fixed',
  fontFamily: 'var(--font-en)',
  mixBlendMode: 'difference',
  zIndex: '15',
  top: 'calc(2em + var(--app-safe-top, 0px))',
  left: 'calc(2em + var(--app-safe-left, 0px))',

  ':after': {
    content: "''",
    position: 'absolute',
    borderRadius: '100%',
    bottom: '-0.15em',
    right: '-0.12em',
    width: '0.3em',
    height: '0.3em',
    background: 'red',
  },

  Span: {
    tag: 'span',
    text: 'F',
    display: 'block',
    lineHeight: '0.7em',
  },

  // Intro animation states
  'body.intro-active &': {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1600',
    color: 'transparent',
    transition: 'none',
  },
  'body.intro-active &::after': {
    animation: 'logoDotPulse 1s ease-in-out infinite',
  },
  'body.intro-reveal &': {
    color: 'cream',
    animation: 'logoPulseStrong 0.9s ease-out 1 both',
  },
  'body.intro-corners-move &': {
    animation: 'logoMove 2.8s cubic-bezier(0.16, 1, 0.3, 1) both',
  },

  '@mobileL': {
    fontSize: '3.5em',
    top: 'calc(var(--logo-final-top-offset) + var(--app-safe-top, 0px))',
    left: 'calc(var(--logo-final-left-offset) + var(--app-safe-left, 0px))',
  },
};
