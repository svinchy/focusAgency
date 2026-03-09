export default {
  introActive: {
    overflow: 'hidden',
  },
  pageScrollLocked: {
    overflow: 'hidden',
    height: '100vh',
  },
  waveChar: {
    display: 'inline-block',
    opacity: '0.25',
    transition: 'opacity 0.25s ease',
  },
  waveWord: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },
  waveActive: {
    '& .waveChar': {
      animation: 'footerTextWave 2.4s linear infinite',
    },
  },
}
