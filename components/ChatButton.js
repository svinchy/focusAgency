export const ChatButton = {
  tag: 'button',
  fontFamily: "'Exo 2', sans-serif",
  fontWeight: '500',
  width: '3em',
  height: '3em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0',
  cursor: 'pointer',
  background: 'rgba(255, 241, 227, 0.2)',
  borderRadius: '999px',
  color: 'rgba(255, 241, 227, 1)',
  border: '1px solid rgba(255, 241, 227, 0.18)',
  backdropFilter: 'blur(14px)',
  position: 'fixed',
  bottom: '1.2em',
  right: '1.2em',
  zIndex: '1000',
  boxShadow: '0 0 0 rgba(80, 78, 78, 0)',
  transition: 'background-color 0.28s var(--ease-io), border-color 0.28s var(--ease-io), box-shadow 0.28s var(--ease-io)',
  font: 'inherit',

  ':hover': {
    background: 'rgba(80, 78, 78, 0.42)',
    borderColor: 'rgba(255, 241, 227, 0.26)',
  },

  '&.is-active': {
    background: 'rgba(44, 44, 44, 0.96)',
    borderColor: 'rgba(255, 241, 227, 0.22)',
    boxShadow: '0 0 1.15em rgba(0, 0, 0, 0.34)',
  },

  '&.is-active:hover': {
    background: 'rgba(52, 52, 52, 0.98)',
  },

  '&.is-active span': {
    opacity: '0',
    letterSpacing: '0',
  },

  '&.is-active::before': {
    content: "''",
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '1.05em',
    height: '0.17em',
    background: 'currentColor',
    borderRadius: '999px',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%) rotate(45deg)',
  },

  '&.is-active::after': {
    content: "''",
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '1.05em',
    height: '0.17em',
    background: 'currentColor',
    borderRadius: '999px',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%) rotate(-45deg)',
  },

  // Nav open state
  'body.is-nav-open &': { opacity: '0', pointerEvents: 'none' },

  '@mobileL': {
    bottom: 'calc(1em + var(--app-fixed-bottom-clearance, 0px))',
    right: 'calc(1em + var(--app-safe-right, 0px))',
  },

  'body.chat-panel-open &': {
    '@mobileL': {
      top: 'calc(1em + var(--app-safe-top, 0px))',
      right: 'calc(1em + var(--app-safe-right, 0px))',
      bottom: 'auto',
    },
  },

  Span: {
    tag: 'span',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontSize: '0.8em',
    letterSpacing: '0.04em',
    lineHeight: '1',
    transition: 'letter-spacing 0.28s var(--ease-io), font-size 0.28s var(--ease-io)',
  },
};
