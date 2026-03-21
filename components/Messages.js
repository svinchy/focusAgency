export const Messages = {
  tag: 'div',
  height: '45em',
  minHeight: '0',
  overflow: 'hidden',
  position: 'relative',
  willChange: 'transform',
  padding: '0 1.8em',
  boxSizing: 'border-box',
  maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.9) 14%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0.9) 86%, transparent 100%)',

  '& .messagesTrack': {
    display: 'flex',
    flexDirection: 'column',
    gap: '4em',
    willChange: 'transform',
  },

  '& p': {
    fontSize: '1.2em',
    maxWidth: '15em',
    fontWeight: '300',
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    lineHeight: '1.35em',
    opacity: '0.3',
    transform: 'scale(0.92)',
    transformOrigin: 'center center',
    transition: 'none',
    margin: '0',
  },

  '& p.active': { fontWeight: 'inherit' },
  '& p.is-pulse': { animation: 'messagePeakPulse 0.38s ease-out' },
};
