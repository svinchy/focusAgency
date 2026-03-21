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
};

export const ChatPanel = {
  tag: 'section',
  width: '390px',
  height: '680px',
  maxWidth: 'calc(100vw - 2.5rem)',
  maxHeight: 'calc(100dvh - 2.5rem)',
  overflow: 'hidden',
  border: '1px solid rgba(255, 241, 227, 0.12)',
  borderRadius: 'var(--radius-m)',
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
};

export const ChatPanelFrame = {
  tag: 'iframe',
  display: 'block',
  width: '100%',
  height: '100%',
  border: '0',
  background: 'rgba(17, 17, 17, 1)',
};
