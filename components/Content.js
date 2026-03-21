export const Content = {
  tag: 'div',
  marginTop: '1.6em',
  width: '100%',
  height: 'calc(var(--app-viewport-height, 100vh) - 25em)',
  position: 'sticky',
  top: '11em',
  zIndex: '10',
  borderRadius: 'var(--radius-l)',
  overflow: 'hidden',
  border: '1px solid rgba(255, 241, 227, 0.15)',

  ':before': {
    content: "''",
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '2',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
    top: '0',
    right: '0',
    pointerEvents: 'none',
  },
};
