export const LangButton = {
  tag: 'div',
  position: 'absolute',
  zIndex: '20',
  top: '50vh',
  transform: 'translateY(-50%)',
  right: '2em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 'fit-content',
  fontSize: '.9em',
  transition: 'transform 0.3s var(--ease-io), opacity 0.22s ease',

  // Nav open / chat panel open states
  'body.is-nav-open &': { opacity: '0', pointerEvents: 'none' },
  'body.chat-panel-open &': { opacity: '0', pointerEvents: 'none' },

  '@tabletM': {
    right: '0.5em',
  },

  '@mobileL': {
    fontSize: '0.9em',
  },
};

export const LangBtn = {
  tag: 'button',
  background: 'transparent',
  borderRadius: '0',
  cursor: 'pointer',
  textTransform: 'uppercase',
  color: 'rgba(255, 241, 227, 1)',
  width: '2.8em',
  height: '2.8em',
  opacity: '0.5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transformOrigin: 'center center',
  transform: 'rotate(90deg)',
  padding: '0',
  border: 'none',
  font: 'inherit',
  transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',

  ':hover': { opacity: '1' },
  '&.active': { opacity: '1', pointerEvents: 'none' },
  '&.active': { transform: 'rotate(90deg) scale(1.15)' },

  '&[data-lang="ka"]': {
    fontFamily: "'BPG Square Banner Caps 2013', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    textTransform: 'none',
    fontSize: '1em',
    marginBottom: '-0.5em',
  },
  '&:last-child': {
    fontFamily: "'Exo 2', sans-serif",
    fontWeight: '600',
    fontSize: '.9em',
  },
};
