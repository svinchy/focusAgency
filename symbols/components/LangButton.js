export const LangButton = {
  extends: 'Flex',
  flow: 'y',
  gap: '0',
  position: 'absolute',
  zIndex: '20',
  top: '50vh',
  right: '2em',
  alignItems: 'center',
  maxWidth: 'fit-content',
  style: {
    transform: 'translateY(-50%)',
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.22s ease',
  },
  '@mobileL': { fontSize: 'Z1' },
  '@tabletM': { right: 'Z' },
  BtnKa: {
    extends: 'Box',
    tag: 'button',
    text: 'ქარ',
    cursor: 'pointer',
    padding: '0',
    color: 'cream',
    background: 'transparent',
    fontSize: '1em',
    width: '2.8em',
    height: '2.8em',
    opacity: '0.5',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    style: {
      fontFamily: "'BPG Square Banner Caps 2013', sans-serif",
      transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: 'rotate(90deg)',
      transformOrigin: 'center center',
      marginBottom: '-0.5em',
    },
    attr: { 'data-lang': 'ka' },
    onClick: (e, el, s) => {
      s.root.update({ lang: 'ka' })
      document.body.setAttribute('data-lang', 'ka')
      if (typeof window.__applyLang === 'function') window.__applyLang('ka')
    },
  },
  BtnEn: {
    extends: 'Box',
    tag: 'button',
    text: 'ENG',
    cursor: 'pointer',
    padding: '0',
    color: 'cream',
    background: 'transparent',
    fontSize: '0.9em',
    fontWeight: '600',
    width: '2.8em',
    height: '2.8em',
    opacity: '0.5',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    style: {
      fontFamily: "'Exo 2', sans-serif",
      transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: 'rotate(90deg)',
      transformOrigin: 'center center',
    },
    attr: { 'data-lang': 'en' },
    onClick: (e, el, s) => {
      s.root.update({ lang: 'en' })
      document.body.setAttribute('data-lang', 'en')
      if (typeof window.__applyLang === 'function') window.__applyLang('en')
    },
  },
}
