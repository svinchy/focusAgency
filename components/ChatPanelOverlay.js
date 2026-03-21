export const ChatPanelOverlay = {
  tag: 'div',
  position: 'fixed',
  top: 'var(--app-viewport-offset-top, 0px)',
  right: 'var(--app-viewport-right-offset, 0px)',
  bottom: 'var(--app-viewport-bottom-offset, 0px)',
  left: 'var(--app-viewport-offset-left, 0px)',
  zIndex: '950',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  padding: 'calc(1.25em + var(--app-safe-top, 0px)) calc(1.25em + var(--app-safe-right, 0px)) calc(5.2rem + var(--app-fixed-bottom-clearance, 0px)) calc(1.25em + var(--app-safe-left, 0px))',
  backgroundColor: 'transparent',
  opacity: '0',
  pointerEvents: 'none',
  transition: 'opacity 0.24s var(--ease-io), background-color 0.24s var(--ease-io)',

  '&.is-visible': {
    opacity: '1',
    pointerEvents: 'auto',
    backgroundColor: 'rgba(8, 6, 6, 0.42)',
  },

  '@media (max-width: 860px)': {
    padding: 'calc(0.9em + var(--app-safe-top, 0px)) calc(0.9em + var(--app-safe-right, 0px)) calc(4.8rem + var(--app-fixed-bottom-clearance, 0px)) calc(0.9em + var(--app-safe-left, 0px))',
  },

  '@media (max-width: 560px)': {
    padding: '0',
    alignItems: 'stretch',
    justifyContent: 'stretch',

    '&.is-visible': {
      backgroundColor: 'rgba(17, 17, 17, 1)',
    },
  },
};

export const ChatPanel = {
  tag: 'section',
  width: '390px',
  height: '680px',
  maxWidth: 'calc(100vw - 2.5rem)',
  maxHeight: 'calc(100dvh - 2.5rem)',
  overflow: 'hidden',
  border: '1px solid rgba(255, 241, 227, 0.12)',
  borderRadius: '1.6em',
  background: 'rgba(17, 17, 17, 0.98)',
  boxShadow: '0 1.6em 5em rgba(0, 0, 0, 0.42)',
  opacity: '0',
  transform: 'translateY(1.25em) scale(0.98)',
  pointerEvents: 'auto',
  transition: 'opacity 0.24s var(--ease-io), transform 0.28s var(--ease-io)',

  '.is-visible &': {
    opacity: '1',
    transform: 'translateY(0) scale(1)',
  },

  '@media (max-width: 860px)': {
    maxWidth: 'calc(100vw - 1.8rem)',
    maxHeight: 'calc(100dvh - 1.8rem)',
    borderRadius: '1.2em',
  },

  '@media (max-width: 560px)': {
    width: '100vw',
    height: 'var(--app-visual-viewport-height)',
    maxWidth: 'none',
    maxHeight: 'var(--app-visual-viewport-height)',
    border: '0',
    borderRadius: '0',
    transform: 'translateY(1.8em)',
  },
};

export const ChatPanelFrame = {
  tag: 'iframe',
  display: 'block',
  width: '100%',
  height: '100%',
  border: '0',
  background: 'rgba(17, 17, 17, 1)',
  transition: 'transform 0.24s var(--ease-io), height 0.24s var(--ease-io)',

  'body.chat-keyboard-open &': {
    '@mobileL': {
      '--chat-keyboard-crop': 'clamp(7rem, calc(var(--app-keyboard-inset, 0px) * 0.42), 14rem)',
      height: 'calc(100% + var(--chat-keyboard-crop))',
      transform: 'translateY(calc(-1 * var(--chat-keyboard-crop)))',
    },
  },
};
