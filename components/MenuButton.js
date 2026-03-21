export const MenuButton = {
  tag: 'button',
  position: 'fixed',
  top: '1.05em',
  right: '1.05em',
  display: 'none',
  border: '1px solid rgba(255, 241, 227, 0.45)',
  borderRadius: '.1em',
  background: 'transparent',
  width: '3em',
  height: '3em',
  flexFlow: 'column',
  gap: '.35em',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '0 .35em',
  transition: 'border-radius 0.25s var(--ease-io)',
  zIndex: '140',
  font: 'inherit',

  // Chat panel / nav open states
  'body.chat-panel-open &': { opacity: '0', pointerEvents: 'none' },
  'body.is-nav-open &': { opacity: '0', pointerEvents: 'none' },

  '@tabletM': {
    display: 'flex',
    top: '1.05em',
    right: '1.05em',
  },

  Div: {
    tag: 'div',
    height: '.15em',
    background: 'rgba(255, 241, 227, 1)',
    borderRadius: '2em',
    transformOrigin: 'center center',
    transition: 'transform 0.35s var(--ease-io), opacity 0.35s var(--ease-io), width 0.35s var(--ease-io), align-self 0.35s var(--ease-io)',
    width: '1.5em',
    alignSelf: 'flex-end',
  },

  Div_1: {
    tag: 'div',
    height: '.15em',
    background: 'rgba(255, 241, 227, 1)',
    borderRadius: '2em',
    transformOrigin: 'center center',
    transition: 'transform 0.35s var(--ease-io), opacity 0.35s var(--ease-io), width 0.35s var(--ease-io), align-self 0.35s var(--ease-io)',
    width: '1em',
    alignSelf: 'flex-end',
  },

  '&.is-active': {
    borderRadius: '100%',
  },

  '&.is-active div:first-child': {
    transform: 'translateY(.26em) rotate(45deg) scale(.85)',
    alignSelf: 'center',
  },

  '&.is-active div:last-child': {
    transform: 'translateY(-.26em) rotate(-45deg) scale(.85)',
    alignSelf: 'center',
    width: '1.5em',
  },
};
