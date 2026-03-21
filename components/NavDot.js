export const NavDot = {
  extends: 'Button1',
  tag: 'button',
  position: 'relative',
  width: 'var(--dot-hit-size, 0.9em)',
  height: 'var(--dot-hit-size, 0.9em)',
  minWidth: 'var(--dot-hit-size, 0.9em)',
  maxWidth: 'var(--dot-hit-size, 0.9em)',
  margin: '0',
  padding: '0',
  border: 'none',
  borderRadius: '999px',
  display: 'grid',
  placeItems: 'center',
  background: 'transparent',
  appearance: 'none',
  cursor: 'pointer',
  touchAction: 'manipulation',

  '::before': {
    content: "''",
    width: 'var(--dot-visual-size, 0.9em)',
    height: 'var(--dot-visual-size, 0.9em)',
    borderRadius: '100%',
    opacity: '0.8',
    display: 'block',
    background: 'rgba(255, 241, 227, 0.35)',
    boxShadow: 'inset 0 0 0 var(--dot-ring-size, 0.12em) rgba(0, 0, 0, 0.2)',
    transition: 'transform var(--dur-fast) var(--ease-io), box-shadow var(--dur-fast) var(--ease-io), background var(--dur-fast) var(--ease-io), opacity var(--dur-fast) var(--ease-io)',
  },

  ':focus-visible': {
    outline: '0.12em solid rgba(255, 241, 227, 0.7)',
    outlineOffset: '0.08em',
  },

  '@media (hover: hover) and (pointer: fine)': {
    ':hover::before': {
      opacity: '1',
      transform: 'scale(1.2)',
    },
  },

  '&.active::before': {
    background: '#E44646',
    boxShadow: '0 0 0 var(--dot-ring-size, 0.12em) rgba(228, 70, 70, 0.35)',
    transform: 'scale(1)',
  },
};
