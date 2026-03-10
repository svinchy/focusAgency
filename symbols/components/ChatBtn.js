export const ChatBtn = {
  extends: 'Flex',
  tag: 'button',
  cursor: 'pointer',
  width: '3.6em',
  height: '3.6em',
  round: '100%',
  background: 'rgba(255, 241, 227, 0.2)',
  border: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'cream',
  style: {
    backdropFilter: 'blur(10px)',
    transition: 'opacity 0.22s ease, transform 0.3s ease',
    fontFamily: "'Exo 2', sans-serif",
  },
  ':hover': {
    style: {
      transform: 'scale(1.05)',
    },
  },
  Span: {
    tag: 'span',
    text: 'CHAT',
    color: 'cream',
    fontSize: '0.9em',
    fontWeight: '500',
    display: 'block',
    margin: 'auto',
    textTransform: 'uppercase',
    style: {
      fontFamily: "'Exo 2', sans-serif",
    },
  },
}
