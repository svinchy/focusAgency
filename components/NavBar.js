export const NavBar = {
  tag: 'nav',
  position: 'absolute',
  top: '7em',
  right: '8em',
  zIndex: '5',
  flow: 'column',
  gap: '.5em',
  minWidth: 'fit-content',
  maxWidth: 'fit-content',
  backdropFilter: 'none',

  'body[data-lang="ka"] &': { gap: '.9em' },

  // Hide when chat panel is open
  'body.chat-panel-open &': { opacity: '0', pointerEvents: 'none' },

  // Mobile: full-screen overlay, initially hidden (slides in from right)
  '@tabletM': {
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    minWidth: '100vw',
    minHeight: '100dvh',
    display: 'flex',
    flexFlow: 'column',
    gap: '1em',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: '7.5em 4em 4em 4em',
    background: 'linear-gradient(180deg, rgba(8, 5, 8, 0.98) 0%, rgba(8, 5, 8, 1) 100%)',
    backdropFilter: 'blur(10px)',
    zIndex: '120',
    transform: 'translateX(105%)',
    opacity: '0',
    visibility: 'hidden',
    pointerEvents: 'none',
    transition: 'transform 0.38s var(--ease-io), opacity 0.28s ease, backdrop-filter 0.28s ease, background 0.28s ease',

    '&.is-open': {
      transform: 'translateX(0)',
      opacity: '1',
      visibility: 'visible',
      pointerEvents: 'auto',
      background: 'linear-gradient(180deg, rgba(8, 5, 8, 0.98) 0%, rgba(8, 5, 8, 1) 100%)',
      backdropFilter: 'blur(16px)',
    },
  },

  '@mobileL': {
    padding: '6.25em 2.5em 2.5em 2.5em',
  },
};
