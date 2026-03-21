export const FocusCorner = {
  tag: 'div',
  width: '1.25em',
  height: '1.25em',
  position: 'absolute',

  '::before': {
    content: "''",
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '2px',
    height: '100%',
    background: 'var(--red)',
    borderRadius: '5px',
  },
  '::after': {
    content: "''",
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '2px',
    borderRadius: '5px',
    background: 'var(--red)',
  },

  '&:nth-child(1)': { top: '0', left: '0', transform: 'rotate(90deg)' },
  '&:nth-child(2)': { top: '0', right: '0', transform: 'rotate(180deg)' },
  '&:nth-child(3)': { bottom: '0', left: '0' },
  '&:nth-child(4)': { bottom: '0', right: '0', transform: 'rotate(-90deg)' },
};
