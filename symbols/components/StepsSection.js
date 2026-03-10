export const StepsSection = {
  extends: 'Box',
  tag: 'section',
  position: 'relative',
  padding: '9em 0 8em 0',
  style: { minHeight: '100em' },
  '@tabletXSS': { style: { minHeight: '80em' } },
  '@mobileM': { style: { minHeight: '72em' } },

  Title: {
    tag: 'h2',
    text: 'Flow to Work',
    position: 'absolute',
    right: '3em',
    top: '1em',
    fontSize: '5em',
    zIndex: '2',
    fontWeight: '900',
    maxWidth: '4.6em',
    lineHeight: '0.9em',
    letterSpacing: '-0.02em',
    color: 'cream',
    style: {
      textAlign: 'right',
      fontFamily: "'Exo 2', sans-serif",
      willChange: 'transform',
      transform: 'translateX(var(--swim-x, 0em)) translateY(calc(var(--steps-title-y, 0em) + var(--swim-y, 0em))) rotate(var(--swim-r, 0deg))',
    },
    '@tabletL': { right: '2em' },
    '@tabletS': { right: '1em' },
    '@mobileL': { fontSize: '3.5em' },
    '@mobileXS': { fontSize: '3.2em' },
  },

  Circle: {
    extends: 'Box',
    attr: { 'data-el': 'steps-circle' },
    position: 'absolute',
    width: '42em',
    height: '42em',
    round: '100%',
    zIndex: '2',
    style: {
      border: '0.5px solid rgba(255, 241, 227, 1)',
      top: '50%',
      left: '0',
      transform: 'translate(-240px, -35%) rotate(var(--steps-rot, 0deg))',
      transformOrigin: '50% 50%',
      willChange: 'transform',
    },
    '@tabletS': { style: { border: '0.5px solid rgba(255, 241, 227, 1)', top: '50%', left: '0', transform: 'translate(-300px, -35%) rotate(var(--steps-rot, 0deg))', transformOrigin: '50% 50%', willChange: 'transform' } },
    '@tabletXS': { style: { border: '0.5px solid rgba(255, 241, 227, 1)', top: '50%', left: '0', transform: 'translate(-350px, -35%) rotate(var(--steps-rot, 0deg))', transformOrigin: '50% 50%', willChange: 'transform' } },
    '@tabletXSS': { fontSize: '0.87em' },
    '@mobileL': { fontSize: '0.8em' },
    '@mobileM': { fontSize: '0.7em', style: { border: '0.5px solid rgba(255, 241, 227, 1)', top: '50%', left: '0', transform: 'translate(-300px, -35%) rotate(var(--steps-rot, 0deg))', transformOrigin: '50% 50%', willChange: 'transform' } },

    Dot1: {
      extends: 'Box',
      position: 'absolute',
      width: '1.2em',
      height: '1.2em',
      round: '100%',
      background: 'cream',
      right: '7em',
      top: '4em',
      Hgroup: {
        extends: 'Box',
        tag: 'hgroup',
        position: 'absolute',
        whiteSpace: 'nowrap',
        color: 'cream',
        style: { margin: '-10em 0 0 5em' },
        H3: { tag: 'h3', text: '01', fontSize: '5em', fontWeight: '900', color: 'cream', style: { fontFamily: "'Exo 2', sans-serif", margin: '0' } },
        P: { tag: 'p', text: 'initial consultation', fontSize: '1.5em', color: 'cream', fontWeight: '300', letterSpacing: '-0.03em', lineHeight: '1.1em', style: { fontFamily: "'Exo 2', sans-serif", whiteSpace: 'normal', padding: '0', margin: '2em 0 0 3em', minWidth: '10em' } },
      },
    },
    Dot2: {
      extends: 'Box',
      position: 'absolute',
      width: '1.2em',
      height: '1.2em',
      round: '100%',
      background: 'cream',
      right: '-0.5em',
      top: '22em',
      Hgroup: {
        extends: 'Box',
        tag: 'hgroup',
        position: 'absolute',
        whiteSpace: 'nowrap',
        color: 'cream',
        style: { margin: '-10em 0 0 5em' },
        H3: { tag: 'h3', text: '02', fontSize: '5em', fontWeight: '900', color: 'cream', style: { fontFamily: "'Exo 2', sans-serif", margin: '0' } },
        P: { tag: 'p', text: 'Strategy development and implementation', fontSize: '1.5em', color: 'cream', fontWeight: '300', letterSpacing: '-0.03em', lineHeight: '1.1em', style: { fontFamily: "'Exo 2', sans-serif", whiteSpace: 'normal', padding: '0', margin: '2em 0 0 3em', minWidth: '10em' } },
      },
    },
    Dot3: {
      extends: 'Box',
      position: 'absolute',
      width: '1.2em',
      height: '1.2em',
      round: '100%',
      background: 'cream',
      right: '10em',
      bottom: '2.2em',
      Hgroup: {
        extends: 'Box',
        tag: 'hgroup',
        position: 'absolute',
        whiteSpace: 'nowrap',
        color: 'cream',
        style: { margin: '-5em 0 0 12em' },
        H3: { tag: 'h3', text: '03', fontSize: '5em', fontWeight: '900', color: 'cream', style: { fontFamily: "'Exo 2', sans-serif", margin: '0' } },
        P: { tag: 'p', text: 'Review and final refinement', fontSize: '1.5em', color: 'cream', fontWeight: '300', letterSpacing: '-0.03em', lineHeight: '1.1em', style: { fontFamily: "'Exo 2', sans-serif", whiteSpace: 'normal', padding: '0', margin: '2em 0 0 3em', minWidth: '10em' } },
      },
    },
  },

  onRender: (el) => {
    if (el.__stepsInit) return
    el.__stepsInit = true
    const node = el.node
    const isCoarsePointer = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    if (isCoarsePointer) return
    const circle = node.querySelector('[data-el="steps-circle"]') || node.children[1]
    const title = node.querySelector('h2')
    if (!circle || !title) return

    let current = 0, target = 0, titleCurrent = 0, titleTarget = 0
    const ease = 0.05
    let rafId = null

    const calcTarget = () => {
      const titleRect = title.getBoundingClientRect()
      const sectionRect = node.getBoundingClientRect()
      const viewportH = window.innerHeight
      const range = sectionRect.height - viewportH
      if (range <= 0) { target = 0; return }
      const progressRaw = (0 - titleRect.top) / range
      const progress = Math.min(1, Math.max(0, progressRaw))
      target = -progress * 90
      titleTarget = -progress * 1.2
    }

    const animate = () => {
      rafId = null
      current += (target - current) * ease
      titleCurrent += (titleTarget - titleCurrent) * ease
      circle.style.setProperty('--steps-rot', current.toFixed(2) + 'deg')
      title.style.setProperty('--steps-title-y', titleCurrent.toFixed(3) + 'em')
      if (Math.abs(target - current) > 0.02 || Math.abs(titleTarget - titleCurrent) > 0.002) {
        rafId = requestAnimationFrame(animate)
      }
    }

    const scheduleAnimate = () => {
      if (rafId) return
      rafId = requestAnimationFrame(animate)
    }

    const onScroll = () => { calcTarget(); scheduleAnimate() }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    calcTarget()
    scheduleAnimate()
  },
}
