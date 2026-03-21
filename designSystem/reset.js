export default {
  // === @supports ===
  '@supports (height: 100svh)': {
    ':root': { '--app-viewport-height': '100svh' }
  },
  '@supports (height: 100dvh)': {
    ':root': { '--app-visual-viewport-height': '100dvh' }
  },

  // === BASE reset ===
  '*, *::before, *::after': { boxSizing: 'border-box' },
  '[class*="smbls-"]::before, [class*="smbls-"]::after': { content: "''" },

  'html': {
    minHeight: '100vh',
    width: '100%',
    maxWidth: '100%',
    margin: '0',
    overflowY: 'scroll',
    overflowX: 'hidden',
    scrollbarGutter: 'stable',
    boxSizing: 'border-box',
  },
  'html.page-scroll-locked, body.page-scroll-locked': {
    overflow: 'hidden',
    overscrollBehavior: 'none',
  },
  'a[href=""]': { pointerEvents: 'none', cursor: 'default' },

  'body': {
    position: 'relative',
    width: '100%',
    minHeight: 'var(--app-viewport-height, 100vh)',
    lineHeight: '1.4em',
    letterSpacing: '-0.01em',
    WebkitFontSmoothing: 'antialiased',
    textRendering: 'optimizeLegibility',
    fontSize: '18px',
    margin: '0',
    background: '#000',
    color: 'rgba(255, 241, 227, 1)',
    fontFamily: 'var(--font-en)',
    '--corner-final-offset': '20px',
    '--corner-left-offset': 'var(--corner-final-offset)',
    '--corner-right-offset': 'var(--corner-final-offset)',
    '--corner-top-offset': 'var(--corner-final-offset)',
    '--corner-bottom-offset': 'var(--corner-final-offset)',
    '--logo-final-top-offset': '0.5em',
    '--logo-final-left-offset': '0.5em',
  },
  'body[data-lang="en"]': { fontFamily: 'var(--font-en)' },
  'body[data-lang="ka"]': { fontFamily: 'var(--font-ka-body)' },

  // === INTRO animation STATES (body-level only) ===
  'body.intro-active:not(.intro-finished)': { overflow: 'hidden !important' },

  'body::before': {
    content: "''",
    position: 'fixed',
    inset: '0',
    zIndex: '1500',
    pointerEvents: 'none',
    opacity: '0',
    transition: 'opacity 1s ease',
    background: 'rgba(0, 0, 0, 1)',
  },
  'body::after': {
    content: "''",
    position: 'fixed',
    inset: '0',
    zIndex: '1500',
    pointerEvents: 'none',
    opacity: '0',
    transition: 'opacity 1s ease',
    background: 'radial-gradient(circle at center, rgba(0,0,0,0.16) 0%, rgba(0,0,0,0.42) 100%)',
  },
  'body.intro-overlay::before': { opacity: '1' },
  'body.intro-overlay::after': { opacity: '1' },
  'body.intro-fade::before': { opacity: '0' },
  'body.intro-fade::after': { opacity: '0' },

  // === RESPONSIVE: 1680px ===
  '@media (max-width: 1680px)': {
    'body': { fontSize: '16px' },
  },

  // === RESPONSIVE: 1180px / touch (html/body only) ===
  '@media (max-width: 1180px), (hover: none) and (pointer: coarse)': {
    'html': { height: 'auto', minHeight: '100%', overflowY: 'auto', WebkitOverflowScrolling: 'touch' },
    'body': { minHeight: 'var(--app-viewport-height, 100%)' },
    'html.page-scroll-locked, body.page-scroll-locked': {
      height: 'var(--app-viewport-height, 100%)',
      minHeight: 'var(--app-viewport-height, 100%)',
      WebkitOverflowScrolling: 'auto',
    },
  },

  // === RESPONSIVE: 560px (body vars only) ===
  '@media (max-width: 560px)': {
    'body': {
      '--corner-final-offset': '20px',
      '--corner-left-offset': '12px',
      '--corner-bottom-offset': '12px',
      '--logo-final-top-offset': '0.3214em',
      '--logo-final-left-offset': '0.2857em',
    },
  },
};
