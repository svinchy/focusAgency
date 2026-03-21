export const FocusCorner = {
  tag: 'div',
  width: '1.25em',
  height: '1.25em',
  position: 'absolute',

  ':before': {
    content: "''",
    position: 'absolute',
    width: '0.15em',
    height: '100%',
    background: 'var(--red)',
    borderRadius: '2px',
  },
  ':after': {
    content: "''",
    position: 'absolute',
    width: '100%',
    height: '0.15em',
    background: 'var(--red)',
    borderRadius: '2px',
  },

  '&:nth-child(1)': { top: '0', left: '0' },
  '&:nth-child(2)': { top: '0', right: '0', transform: 'rotate(90deg)' },
  '&:nth-child(3)': { bottom: '0', right: '0', transform: 'rotate(180deg)' },
  '&:nth-child(4)': { bottom: '0', left: '0', transform: 'rotate(270deg)' },
};
