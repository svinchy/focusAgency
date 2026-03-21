export const Button4 = {
  extends: 'Button',
  tag: 'button',
  font: 'inherit',
  backgroundColor: 'rgba(224, 77, 77, 0.95)',
  boxShadow: '0 5px 10px rgba(224, 77, 77, 0.35)',
  border: 'none',
  cursor: 'pointer',
  type: 'button',
  backdropFilter: 'blur(20px)',
  width: '2em',
  height: '2em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  transition: 'transform 1s ease',

  '&.prev': {
    width: '3.6em',
    height: '3.6em',
  },
  '&.next': {
    width: '4.2em',
    height: '4.2em',
  },

  '&.prev:hover': { transform: 'scale(1.05) translateX(0.25em)' },
  '&.next:hover': { transform: 'scale(1.05) translateX(-0.25em)' },

  Img: {
    src: 'arrow.png',
    extends: 'Img2',
    width: '1.5em',
    height: 'auto',
    maxWidth: 'none',
    transition: 'transform 0.3s var(--ease-io)',
  },
};