export default {
  introActive: { overflow: 'hidden' },
  pageScrollLocked: { overflow: 'hidden', height: '100vh' },
  waveChar: {
    display: 'inline-block',
    opacity: '0.25',
    transition: 'opacity 0.25s ease',
  },
  waveWord: { display: 'inline-block', whiteSpace: 'nowrap' },
  waveActive: {
    '& .waveChar': { animation: 'bannerTitleWave 2.4s linear infinite' },
  },
  waveCharFooter: {
    display: 'inline-block',
    opacity: '0.25',
    transition: 'opacity 0.25s ease',
  },
  teamReveal: {
    opacity: '0',
    transform: 'translateX(var(--swim-x, 0em)) translateY(calc(1.2em + var(--swim-y, 0em))) rotate(var(--swim-r, 0deg))',
    transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)',
  },
  teamRevealVisible: {
    opacity: '1',
    transform: 'translateX(var(--swim-x, 0em)) translateY(var(--swim-y, 0em)) rotate(var(--swim-r, 0deg))',
  },
  dataReveal: {
    opacity: '0',
    transform: 'translateY(0.4em)',
    filter: 'blur(4px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease, filter 0.8s ease',
  },
  dataRevealVisible: {
    opacity: '1',
    transform: 'translateY(0)',
    filter: 'blur(0)',
  },
  serviceCard: {
    position: 'relative',
  },
};
