export const Navbar = {
  extends: 'Flex',
  flow: 'y',
  gap: 'Y2',
  style: {
    transition: 'all 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  childProps: {
    extends: 'Box',
    tag: 'a',
    cursor: 'pointer',
    color: 'cream',
    fontSize: '1.1em',
    fontWeight: '400',
    padding: 'Y Z1',
    round: 'B',
    opacity: '0.5',
    background: 'transparent',
    lineHeight: '0.8em',
    style: {
      fontFamily: "'Exo 2', sans-serif",
      textDecoration: 'none',
      transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), padding 0.5s cubic-bezier(0.4, 0, 0.2, 1), background 0.5s ease, font-weight 0.5s ease, border-radius 0.5s ease, opacity 0.5s ease',
    },
    ':hover': {
      opacity: '1',
      background: 'rgba(224, 77, 77, 1)',
      fontWeight: '900',
      padding: '1em 1.3em',
      style: {
        transform: 'scale(1.2)',
      },
    },
  },
  Link1: {
    text: 'service',
    attr: { href: '#services' },
  },
  Link2: {
    text: 'we are',
    attr: { href: '#about' },
  },
  Link3: {
    text: 'contact',
    attr: { href: '#contact' },
  },
}
