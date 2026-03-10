export const Banner = {
  extends: 'Box',
  tag: 'section',
  width: '100%',
  maxWidth: '100%',
  height: '100vh',
  position: 'relative',
  background: 'transparent',
  overflow: 'hidden',
  ':before': {
    position: 'absolute',
    top: '0', left: '0', right: '0', bottom: '0',
    background: 'radial-gradient(60% 60% at 70% 30%, rgba(255, 241, 227, 0.12), transparent 55%), radial-gradient(40% 40% at 20% 70%, rgba(224, 77, 77, 0.18), transparent 60%)',
    zIndex: '1',
    pointerEvents: 'none',
    style: { content: "''" },
  },
  ':after': {
    position: 'fixed',
    top: '0', left: '0', right: '0', bottom: '0',
    zIndex: '2',
    pointerEvents: 'none',
    background: 'radial-gradient(78% 92% at 88% 52%, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.68) 38%, rgba(0,0,0,0.38) 62%, rgba(0,0,0,0) 86%), linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.50) 34%, rgba(0,0,0,0.18) 60%, rgba(0,0,0,0) 84%)',
    style: { content: "''" },
  },
  BannerTitle: {
    extends: 'Box',
    tag: 'hgroup',
    position: 'absolute',
    top: '13em',
    left: '10em',
    zIndex: '4',
    maxWidth: '28em',
    style: {
      willChange: 'transform',
      transition: 'transform 0.2s ease-out',
    },
    '@tabletXSS': { top: '9em', left: '6em' },
    '@mobileL': { top: '11.2em', left: '5em', right: '1.2em', gap: '1em' },
    '@mobileM': { top: '10.4em', left: '3.2em', right: '1em' },
    '@mobileS': { top: '9.8em', left: '2.5em' },
    H4: {
      tag: 'h4',
      text: 'Increase your sales and brand awareness with our team',
      color: 'cream',
      fontSize: '1.5em',
      fontWeight: '100',
      lineHeight: '1.4em',
      maxWidth: '12em',
      paddingBottom: '2em',
      style: { fontFamily: "'Exo 2', sans-serif", letterSpacing: '0.02em' },
      '@tabletXSS': { fontSize: '1.3em' },
      '@mobileL': { fontSize: '1.2em', paddingBottom: '1.3em', maxWidth: '14.5em' },
      '@mobileM': { fontSize: '1.1em', paddingBottom: '1.12em', maxWidth: '14em' },
    },
    H1: {
      tag: 'h1',
      text: 'Focus Agency',
      color: 'cream',
      fontSize: '7em',
      fontWeight: '900',
      lineHeight: '0.78em',
      letterSpacing: '-0.03em',
      marginLeft: '0.45em',
      style: { fontFamily: "'Exo 2', sans-serif" },
      '@tabletXSS': { fontSize: '5em', marginLeft: '0.5em' },
      '@mobileL': { fontSize: '4.85em', marginLeft: '0.5em' },
      '@mobileM': { fontSize: '4.15em', marginLeft: '0.35em' },
      '@mobileS': { fontSize: '3.6em', marginLeft: '0.25em', maxWidth: '4em' },
    },
    onRender: (el) => {
      if (el.__bannerInit) return
      el.__bannerInit = true
      const node = el.node
      let ticking = false
      const onScroll = () => {
        if (ticking) return
        ticking = true
        requestAnimationFrame(() => {
          const y = window.scrollY || window.pageYOffset
          node.style.transform = 'translateY(' + (y * 0.6) + 'px)'
          ticking = false
        })
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
    },
  },
}
