export const ChatBtn = {
  extends: 'Box',
  tag: 'button',
  cursor: 'pointer',
  padding: 'A A1',
  round: 'C',
  background: 'transparent',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'creamGhost',
  style: {
    backdropFilter: 'blur(12px)',
    transition: 'opacity 0.22s ease, transform 0.3s ease',
  },
  ':hover': {
    transform: 'scale(1.05)',
    borderColor: 'creamFaint',
  },
  Span: {
    tag: 'span',
    text: 'chat',
    color: 'cream',
    fontSize: 'Z2',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    style: {
      fontFamily: "'Exo 2', sans-serif",
    },
  },
}
