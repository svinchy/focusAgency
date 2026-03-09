export const LangButton = {
  extends: 'Flex',
  flow: 'y',
  gap: 'Z',
  position: 'absolute',
  zIndex: '20',
  top: '50vh',
  right: 'B',
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
    padding: 'Y1 Z2',
    color: 'creamSubtle',
    background: 'transparent',
    fontSize: 'Z1',
    fontWeight: '600',
    round: 'Z2',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'creamGhost',
    style: {
      fontFamily: "'BPG Square Banner Caps 2013', sans-serif",
      transition: 'color 0.2s ease, border-color 0.2s ease',
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
    padding: 'Y1 Z2',
    color: 'creamSubtle',
    background: 'transparent',
    fontSize: 'Z1',
    fontWeight: '600',
    round: 'Z2',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'creamGhost',
    style: {
      fontFamily: "'Exo 2', sans-serif",
      transition: 'color 0.2s ease, border-color 0.2s ease',
    },
    attr: { 'data-lang': 'en' },
    onClick: (e, el, s) => {
      s.root.update({ lang: 'en' })
      document.body.setAttribute('data-lang', 'en')
      if (typeof window.__applyLang === 'function') window.__applyLang('en')
    },
  },
}
