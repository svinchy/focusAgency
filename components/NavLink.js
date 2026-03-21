export const NavLink = {
  extends: 'Link',
  tag: 'a',
  textDecoration: 'none',
  fontSize: '1.1em',
  lineHeight: '.8em',
  color: 'cream',
  cursor: 'pointer',
  fontWeight: '400',
  padding: '.3em 1em',
  opacity: '0.5',
  borderRadius: '3em',
  background: 'rgba(224, 77, 77, 0)',
  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), padding 0.5s cubic-bezier(0.4, 0, 0.2, 1), background 0.5s ease, font-weight 0.5s ease, border-radius 0.5s ease, opacity 0.5s ease',

  ':hover': {
    textTransform: 'capitalize',
    opacity: '1',
    background: 'rgba(224, 77, 77, 1)',
    fontWeight: '900',
    padding: '1em 1.3em',
    transform: 'scale(1.2)',
  },

  'body[data-lang="ka"] &': {
    fontFamily: "'BPG Square Banner Caps 2013', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    textTransform: 'none',
    fontSynthesis: 'none',
    fontSize: '.9em',

    '@tabletM': {
      fontSize: '3.5em',
      fontWeight: '400',
    },

    '@mobileL': {
      fontSize: '2.7em',
    },

    '@mobileS': {
      fontSize: '2.5em',
    },
  },

  'body[data-lang="ka"] &:hover': {
    fontWeight: '400',
    textTransform: 'none',
  },

  // Mobile: large link text, initially hidden until nav opens
  '@tabletM': {
    width: 'fit-content',
    fontSize: '5em',
    lineHeight: '1em',
    fontWeight: '900',
    borderRadius: '0',
    padding: '0',
    opacity: '0',
    transform: 'translateX(0.7em)',
    filter: 'blur(3px)',
    transition: 'transform 0.42s var(--ease-io), opacity 0.32s ease, filter 0.32s ease',

    ':hover': {
      textTransform: 'none',
      opacity: '1',
      background: 'rgba(224, 77, 77, 0)',
      fontWeight: '700',
      padding: '0',
      transform: 'translateX(-0.08em)',
    },
  },

  '@mobileL': {
    fontSize: '3em',
  },

  '@mobileS': {
    fontSize: '3.5em',
  },

  // When parent nav is open (mobile) — links become visible
  '.is-open &': {
    opacity: '0.95',
    transform: 'translateX(0)',
    filter: 'blur(0)',
  },

  '.is-open &:nth-child(1)': { transitionDelay: '0.08s' },
  '.is-open &:nth-child(2)': { transitionDelay: '0.14s' },
  '.is-open &:nth-child(3)': { transitionDelay: '0.2s' },
};
