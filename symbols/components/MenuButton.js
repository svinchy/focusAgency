export const MenuButton = {
  extends: 'Flex',
  tag: 'button',
  flexAlign: 'center center',
  flow: 'y',
  gap: 'Y',
  cursor: 'pointer',
  width: '3em',
  height: '3em',
  round: 'Z2',
  background: 'black',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'creamSubtle',
  boxSizing: 'content-box',
  padding: 'Z',
  style: {
    transition: 'border-radius 0.3s ease',
  },
  Line1: {
    extends: 'Box',
    width: '1.6em',
    height: '2px',
    background: 'cream',
    round: '2px',
    style: {
      transition: 'transform 0.3s ease, opacity 0.3s ease',
    },
  },
  Line2: {
    extends: 'Box',
    width: '1.6em',
    height: '2px',
    background: 'cream',
    round: '2px',
    style: {
      transition: 'transform 0.3s ease, opacity 0.3s ease',
    },
  },
  onClick: (e, el, s) => {
    s.root.update({ activeMenu: !s.root.activeMenu })
  },
}
