export const MenuButton = {
  extends: 'Flex',
  tag: 'button',
  flexAlign: 'center center',
  flow: 'y',
  gap: '0.35em',
  cursor: 'pointer',
  width: '3em',
  height: '3em',
  round: '0.1em',
  background: 'transparent',
  padding: '0 0.35em',
  style: {
    border: '1px solid rgba(255, 241, 227, 0.45)',
    transition: 'border-radius 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  Line1: {
    extends: 'Box',
    width: '1.5em',
    height: '0.15em',
    background: 'cream',
    round: '2em',
    alignSelf: 'flex-end',
    style: {
      transformOrigin: 'center center',
      transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), width 0.35s cubic-bezier(0.4, 0, 0.2, 1), align-self 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  Line2: {
    extends: 'Box',
    width: '1em',
    height: '0.15em',
    background: 'cream',
    round: '2em',
    alignSelf: 'flex-end',
    style: {
      transformOrigin: 'center center',
      transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), width 0.35s cubic-bezier(0.4, 0, 0.2, 1), align-self 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  onClick: (e, el, s) => {
    s.root.update({ activeMenu: !s.root.activeMenu })
  },
}
