export const TeamSection = {
  extends: 'Box',
  tag: 'section',
  width: '100%',
  background: 'transparent',
  position: 'relative',
  padding: '0 0 20em 0',
  zIndex: '10',
  margin: '0 auto',
  maxWidth: '1366px',
  '@tabletXS': { paddingBottom: '5em' },

  Title: {
    tag: 'h2',
    text: 'Our Team',
    fontSize: '5.5em',
    maxWidth: '2em',
    lineHeight: '0.8em',
    fontWeight: '900',
    position: 'relative',
    zIndex: '4',
    padding: '0 0 3em 2.5em',
    color: 'creamSubtle',
    style: {
      fontFamily: "'Exo 2', sans-serif",
      willChange: 'transform',
    },
    '@tabletS': { fontSize: '4.5em', padding: '0 0 3em 1.5em' },
    '@mobileL': { fontSize: '3.5em', padding: '0 0 2em 1em' },
  },

  Members: {
    extends: 'Flex',
    attr: { id: 'about' },
    flexAlign: 'center center',
    position: 'relative',
    zIndex: '4',
    gap: '0.9em',
    style: {
      minHeight: '30em',
      perspective: '1200px',
      overflow: 'visible',
    },

    Member1: {
      extends: 'Box',
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '18em',
      height: '24em',
      overflow: 'hidden',
      round: 'B',
      style: {
        willChange: 'transform',
        transition: 'opacity 0.2s cubic-bezier(0.4,0,0.2,1), box-shadow 0.24s cubic-bezier(0.4,0,0.2,1)',
        border: '1px solid rgba(255, 241, 227, 0.2)',
      },
      ':after': {
        position: 'absolute',
        top: '0', left: '0', right: '0', bottom: '0',
        background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        opacity: '0.85',
        zIndex: '1',
        style: { content: "''" },
      },
      Img: {
        tag: 'img',
        position: 'absolute',
        width: '100%',
        height: '100%',
        style: { objectFit: 'cover' },
        attr: { src: '/IMAGE/choni2.webp', alt: 'Giorgi' },
      },
      H6: { tag: 'h6', text: 'Founder', position: 'absolute', bottom: '3.5em', left: '1.2em', zIndex: '2', fontSize: '1em', color: 'creamMuted', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '0.06em', style: { fontFamily: "'Exo 2', sans-serif" } },
      H5: { tag: 'h5', text: 'Giorgi', position: 'absolute', bottom: '1.2em', left: '1.2em', zIndex: '2', fontSize: '1.6em', color: 'cream', fontWeight: '700', style: { fontFamily: "'Exo 2', sans-serif" } },
      SocialLinks: {
        extends: 'Flex',
        attr: { 'data-el': 'social-links' },
        position: 'absolute',
        bottom: '1.2em',
        right: '1.2em',
        zIndex: '2',
        gap: 'Z',
        A1: { tag: 'a', attr: { href: '' }, Img: { tag: 'img', height: '1.5em', attr: { src: '/IMAGE/facebook.png' } } },
        A2: { tag: 'a', attr: { href: '' }, Img: { tag: 'img', height: '1.5em', attr: { src: '/IMAGE/linkedin.png' } } },
      },
      '@mobileM': { minWidth: '75%', maxWidth: '75%' },
    },

    Member2: {
      extends: 'Box',
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '18em',
      height: '24em',
      overflow: 'hidden',
      round: 'B',
      style: {
        willChange: 'transform',
        transition: 'opacity 0.2s cubic-bezier(0.4,0,0.2,1), box-shadow 0.24s cubic-bezier(0.4,0,0.2,1)',
        border: '1px solid rgba(255, 241, 227, 0.2)',
      },
      ':after': {
        position: 'absolute',
        top: '0', left: '0', right: '0', bottom: '0',
        background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        opacity: '0.85',
        zIndex: '1',
        style: { content: "''" },
      },
      Img: { tag: 'img', position: 'absolute', width: '100%', height: '100%', style: { objectFit: 'cover' }, attr: { src: '/IMAGE/liza2.webp', alt: 'Liza' } },
      H6: { tag: 'h6', text: 'Project Manager', position: 'absolute', bottom: '3.5em', left: '1.2em', zIndex: '2', fontSize: '1em', color: 'creamMuted', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '0.06em', style: { fontFamily: "'Exo 2', sans-serif" } },
      H5: { tag: 'h5', text: 'Liza', position: 'absolute', bottom: '1.2em', left: '1.2em', zIndex: '2', fontSize: '1.6em', color: 'cream', fontWeight: '700', style: { fontFamily: "'Exo 2', sans-serif" } },
      SocialLinks: {
        extends: 'Flex',
        attr: { 'data-el': 'social-links' },
        position: 'absolute', bottom: '1.2em', right: '1.2em', zIndex: '2', gap: 'Z',
        A1: { tag: 'a', attr: { href: '' }, Img: { tag: 'img', height: '1.5em', attr: { src: '/IMAGE/facebook.png' } } },
        A2: { tag: 'a', attr: { href: '' }, Img: { tag: 'img', height: '1.5em', attr: { src: '/IMAGE/linkedin.png' } } },
      },
      '@mobileM': { minWidth: '75%', maxWidth: '75%' },
    },

    Member3: {
      extends: 'Box',
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '18em',
      height: '24em',
      overflow: 'hidden',
      round: 'B',
      style: {
        willChange: 'transform',
        transition: 'opacity 0.2s cubic-bezier(0.4,0,0.2,1), box-shadow 0.24s cubic-bezier(0.4,0,0.2,1)',
        border: '1px solid rgba(255, 241, 227, 0.2)',
      },
      ':after': {
        position: 'absolute',
        top: '0', left: '0', right: '0', bottom: '0',
        background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        opacity: '0.85',
        zIndex: '1',
        style: { content: "''" },
      },
      Img: { tag: 'img', position: 'absolute', width: '100%', height: '100%', style: { objectFit: 'cover' }, attr: { src: '/IMAGE/mariami2.webp', alt: 'Mariami' } },
      H6: { tag: 'h6', text: 'Graphic Designer', position: 'absolute', bottom: '3.5em', left: '1.2em', zIndex: '2', fontSize: '1em', color: 'creamMuted', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '0.06em', style: { fontFamily: "'Exo 2', sans-serif" } },
      H5: { tag: 'h5', text: 'Mariami', position: 'absolute', bottom: '1.2em', left: '1.2em', zIndex: '2', fontSize: '1.6em', color: 'cream', fontWeight: '700', style: { fontFamily: "'Exo 2', sans-serif" } },
      SocialLinks: {
        extends: 'Flex',
        attr: { 'data-el': 'social-links' },
        position: 'absolute', bottom: '1.2em', right: '1.2em', zIndex: '2', gap: 'Z',
        A1: { tag: 'a', attr: { href: '' }, Img: { tag: 'img', height: '1.5em', attr: { src: '/IMAGE/facebook.png' } } },
        A2: { tag: 'a', attr: { href: '' }, Img: { tag: 'img', height: '1.5em', attr: { src: '/IMAGE/linkedin.png' } } },
      },
      '@mobileM': { minWidth: '75%', maxWidth: '75%' },
    },

    Member4: {
      extends: 'Box',
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '18em',
      height: '24em',
      overflow: 'hidden',
      round: 'B',
      style: {
        willChange: 'transform',
        transition: 'opacity 0.2s cubic-bezier(0.4,0,0.2,1), box-shadow 0.24s cubic-bezier(0.4,0,0.2,1)',
        border: '1px solid rgba(255, 241, 227, 0.2)',
      },
      ':after': {
        position: 'absolute',
        top: '0', left: '0', right: '0', bottom: '0',
        background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        opacity: '0.85',
        zIndex: '1',
        style: { content: "''" },
      },
      Img: { tag: 'img', position: 'absolute', width: '100%', height: '100%', style: { objectFit: 'cover' }, attr: { src: '/IMAGE/luka2.webp', alt: 'Luka' } },
      H6: { tag: 'h6', text: 'Videograph', position: 'absolute', bottom: '3.5em', left: '1.2em', zIndex: '2', fontSize: '1em', color: 'creamMuted', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '0.06em', style: { fontFamily: "'Exo 2', sans-serif" } },
      H5: { tag: 'h5', text: 'Luka', position: 'absolute', bottom: '1.2em', left: '1.2em', zIndex: '2', fontSize: '1.6em', color: 'cream', fontWeight: '700', style: { fontFamily: "'Exo 2', sans-serif" } },
      SocialLinks: {
        extends: 'Flex',
        attr: { 'data-el': 'social-links' },
        position: 'absolute', bottom: '1.2em', right: '1.2em', zIndex: '2', gap: 'Z',
        A1: { tag: 'a', attr: { href: '' }, Img: { tag: 'img', height: '1.5em', attr: { src: '/IMAGE/facebook.png' } } },
        A2: { tag: 'a', attr: { href: '' }, Img: { tag: 'img', height: '1.5em', attr: { src: '/IMAGE/linkedin.png' } } },
      },
      '@mobileM': { minWidth: '75%', maxWidth: '75%' },
    },
  },

  Arrows: {
    extends: 'Flex',
    gap: 'A',
    margin: '3em 13em 0 auto',
    zIndex: '5',
    maxWidth: 'fit-content',
    '@tabletXS': { margin: '3em 6em 0 auto' },
    '@mobileL': { margin: '1em 3em 0 auto' },
    '@mobileM': { margin: '0.5em auto 0 auto' },

    PrevBtn: {
      extends: 'Flex',
      tag: 'button',
      attr: { 'data-btn': 'prev' },
      flexAlign: 'center center',
      width: '3.6em',
      height: '3.6em',
      round: '100%',
      cursor: 'pointer',
      border: 'none',
      style: {
        background: 'rgba(224, 77, 77, 0.95)',
        boxShadow: '0 5px 10px rgba(224, 77, 77, 0.35)',
        backdropFilter: 'blur(20px)',
        transition: 'transform 1s ease',
      },
      ':hover': { style: { transform: 'scale(1.05) translateX(0.25em)' } },
      Img: { tag: 'img', width: '1.5em', style: { transform: 'rotate(180deg)', transition: 'transform 0.3s ease' }, attr: { src: '/IMAGE/arrow.png', alt: 'Previous' } },
      '@mobileL': { width: '3em', height: '3em' },
    },
    NextBtn: {
      extends: 'Flex',
      tag: 'button',
      attr: { 'data-btn': 'next' },
      flexAlign: 'center center',
      width: '4.2em',
      height: '4.2em',
      round: '100%',
      cursor: 'pointer',
      border: 'none',
      style: {
        background: 'rgba(224, 77, 77, 0.95)',
        boxShadow: '0 5px 10px rgba(224, 77, 77, 0.35)',
        backdropFilter: 'blur(20px)',
        transition: 'transform 1s ease',
      },
      ':hover': { style: { transform: 'scale(1.05) translateX(-0.25em)' } },
      Img: { tag: 'img', width: '1.5em', style: { transition: 'transform 0.3s ease' }, attr: { src: '/IMAGE/arrow.png', alt: 'Next' } },
      '@mobileL': { width: '3.6em', height: '3.6em' },
    },
  },

  MoreBtn: {
    extends: 'Box',
    tag: 'button',
    text: 'know us better',
    color: 'cream',
    padding: '1.2em 2em',
    round: '5em',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'creamGhost',
    margin: '3em auto 0 20em',
    fontSize: '1em',
    display: 'block',
    cursor: 'pointer',
    fontWeight: '700',
    background: 'transparent',
    style: {
      fontFamily: "'Exo 2', sans-serif",
      transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1), background 0.5s ease, border-color 0.5s ease, color 0.5s ease',
    },
    ':hover': {
      background: 'red',
      borderColor: 'transparent',
      style: { transform: 'scale(1.05)' },
    },
    '@tabletS': { margin: '3em auto 0 10em' },
    '@tabletXS': { margin: '3em auto 0 5em' },
    '@mobileL': { margin: '3em auto 0 2em' },
    '@mobileM': { margin: '8em auto 0 auto' },
  },

  onRender: (el) => {
    if (el.__teamInit) return
    el.__teamInit = true
    if (typeof window === 'undefined') return

    const node = el.node
    const membersContainer = node.querySelector('[id="about"]')
    if (!membersContainer) return
    const members = Array.from(membersContainer.children)
    const prevBtn = node.querySelector('[data-btn="prev"]')
    const nextBtn = node.querySelector('[data-btn="next"]')
    if (!members.length) return

    // Members container visibility (title handled by data-reveal in main.js)

    let activeIndex = 0
    let scrollStrength = 0
    let running = false
    let rafId = null

    const state = members.map(() => ({
      current: { x: 0, y: 0, z: 0, r: 0, s: 1, o: 1 },
      target: { x: 0, y: 0, z: 0, r: 0, s: 1, o: 1 },
    }))

    const computeTargets = () => {
      const total = members.length
      const layout = { xStep: 14.2, yStep: 0.95, zStep: 70, rotStep: 11, scaleDrop: 0.106, shiftX: 0, farSpread: 0.95, minScale: 0.72, yScroll: 1.85, zScroll: 108 }
      const hasFourMemberLayout = total === 4
      const farOffset = total / 2

      members.forEach((member, i) => {
        let offset = i - activeIndex
        const half = Math.floor(total / 2)
        if (offset > half) offset -= total
        if (offset < -half) offset += total
        const abs = Math.abs(offset)
        const sign = Math.sign(offset)
        const isBackCard = hasFourMemberLayout && abs === farOffset
        let x, y, scale, rot, z, opacity, zIndex

        if (isBackCard) {
          x = layout.shiftX
          y = layout.yStep * 0.55 + scrollStrength * layout.yScroll * 0.5
          scale = Math.max(layout.minScale, 1 - (farOffset - 0.25) * layout.scaleDrop)
          rot = 0
          z = -(farOffset + 0.9) * layout.zStep + scrollStrength * -layout.zScroll * 0.85
          opacity = 0.55
          zIndex = 6
        } else {
          const visualX = abs <= 2 ? offset * layout.xStep : sign * (2 * layout.xStep + (abs - 2) * layout.xStep * layout.farSpread)
          const parallaxBase = abs + 1
          x = visualX + layout.shiftX
          y = abs * layout.yStep + scrollStrength * parallaxBase * layout.yScroll
          scale = Math.max(layout.minScale, 1 - abs * layout.scaleDrop)
          rot = sign * -layout.rotStep * Math.min(abs, 2)
          z = -abs * layout.zStep + scrollStrength * -layout.zScroll * parallaxBase
          opacity = abs === 0 ? 1 : Math.max(0.25, 0.62 - abs * 0.12)
          zIndex = 10 - abs
        }
        member.style.zIndex = zIndex
        state[i].target = { x, y, z, r: rot, s: scale, o: opacity }
        // Active member visual styling
        const isActive = (abs === 0)
        member.style.borderColor = isActive ? 'rgba(255, 241, 227, 0.75)' : 'rgba(255, 241, 227, 0.2)'
        member.style.boxShadow = isActive ? '0 30px 60px rgba(0, 0, 0, 0.35)' : '0 10px 30px rgba(0, 0, 0, 0.25)'
        const h5 = member.querySelector('h5')
        const h6 = member.querySelector('h6')
        const socialLinks = member.querySelector('[data-el="social-links"]')
        if (h5) h5.style.opacity = isActive ? '1' : '0'
        if (h6) h6.style.opacity = isActive ? '1' : '0'
        if (socialLinks) socialLinks.style.opacity = isActive ? '1' : '0'
      })
    }

    const ease = 0.12
    const animate = () => {
      if (!running) return
      members.forEach((member, i) => {
        const cur = state[i].current
        const tgt = state[i].target
        cur.x += (tgt.x - cur.x) * ease
        cur.y += (tgt.y - cur.y) * ease
        cur.z += (tgt.z - cur.z) * ease
        cur.r += (tgt.r - cur.r) * ease
        cur.s += (tgt.s - cur.s) * ease
        cur.o += (tgt.o - cur.o) * ease
        member.style.transform = 'translate(-50%, -50%) translateX(' + cur.x + 'em) translateY(' + cur.y + 'em) translateZ(' + cur.z + 'px) rotateY(' + cur.r + 'deg) scale(' + cur.s + ')'
        member.style.opacity = cur.o
      })
      rafId = requestAnimationFrame(animate)
    }

    const start = () => { if (running) return; running = true; rafId = requestAnimationFrame(animate) }
    const stop = () => { running = false; if (rafId) cancelAnimationFrame(rafId); rafId = null }

    const updateDepth = () => {
      const teamRect = node.getBoundingClientRect()
      const viewportH = window.innerHeight || 1
      const range = viewportH * 0.6
      const progress = Math.min(1, Math.max(0, (0 - teamRect.top) / range))
      scrollStrength = Math.max(0, Math.min(1, progress))
      const title = node.querySelector('h2')
      if (title) title.style.setProperty('--team-parallax-y', (scrollStrength * -1.2).toFixed(3) + 'em')
      computeTargets()
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { activeIndex = (activeIndex - 1 + members.length) % members.length; computeTargets() })
    if (nextBtn) nextBtn.addEventListener('click', () => { activeIndex = (activeIndex + 1) % members.length; computeTargets() })

    window.addEventListener('scroll', updateDepth, { passive: true })
    window.addEventListener('resize', () => { computeTargets() })

    computeTargets()
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) start(); else stop()
      })
    }, { threshold: 0.05 })
    io.observe(node)
  },
}
