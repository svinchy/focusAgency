export const main = {
  extends: 'Page',
  position: 'relative',
  maxWidth: '100%',
  margin: '- auto',
  background: 'black',
  overflowX: 'clip',
  style: {
    fontFamily: "'Exo 2', sans-serif",
    WebkitFontSmoothing: 'antialiased',
    textRendering: 'optimizeLegibility',
  },
  '@screenXL': {
    fontSize: 'A2',
  },
  '@screenL': {
    fontSize: 'A',
  },

  // Intro overlay elements
  IntroLeft: {
    extends: 'Box',
    position: 'fixed',
    top: '0', left: '0', right: '0', bottom: '0',
    zIndex: '1500',
    pointerEvents: 'none',
    opacity: '0',
    background: 'linear-gradient(to right, #000 0%, rgba(0,0,0,0) 100%)',
    style: { transition: 'opacity 1s ease' },
    attr: { 'data-el': 'intro-left' },
  },
  IntroRight: {
    extends: 'Box',
    position: 'fixed',
    top: '0', left: '0', right: '0', bottom: '0',
    zIndex: '1500',
    pointerEvents: 'none',
    opacity: '0',
    background: 'linear-gradient(to left, #000 0%, rgba(0,0,0,0) 100%)',
    style: { transition: 'opacity 1s ease' },
    attr: { 'data-el': 'intro-right' },
  },

  GlobeBackground: {},

  Corner: {
    position: 'fixed',
    bottom: 'A2',
    left: 'A2',
    zIndex: '1000',
    attr: { 'data-intro-corner': '1' },
    style: {
      mixBlendMode: 'difference',
      transition: 'opacity 1.6s ease, top 1.2s ease, left 1.2s ease, right 1.2s ease, bottom 1.2s ease, transform 1.2s ease',
    },
  },
  Corner_2: {
    position: 'fixed',
    top: 'A2',
    right: 'A2',
    transform: 'rotate(180deg)',
    zIndex: '1000',
    attr: { 'data-intro-corner': '2' },
    style: {
      mixBlendMode: 'difference',
      transition: 'opacity 1.6s ease, top 1.2s ease, left 1.2s ease, right 1.2s ease, bottom 1.2s ease, transform 1.2s ease',
    },
    '@tabletM': {
      display: 'none',
    },
  },

  Logo: {
    position: 'fixed',
    top: 'B2',
    left: 'B2',
    zIndex: '31',
    attr: { 'data-intro-logo': '1' },
    '@tabletL': {
      left: 'B',
      top: 'B1',
    },
    '@tabletS': {
      top: 'A1',
      left: 'A1',
    },
    '@mobileS': {
      left: 'Z',
      top: 'A',
    },
    '@mobileXS': {
      fontSize: 'Z1',
    },
    '@mobileXSS': {
      fontSize: 'Z',
    },
  },

  MenuButton: {
    zIndex: '31',
    position: 'fixed',
    top: 'A',
    right: 'A1',
    display: 'none',
    background: 'black',
    round: '0',
    padding: 'Z',
    boxSizing: 'content-box',
    fontSize: 'B',
    '@mobileXSS': {
      fontSize: 'Z2',
    },
    style: {
      border: '1px solid rgba(255, 241, 227, .5)',
    },
    '@tabletM': {
      display: 'flex',
      '.activeMenu': {
        round: 'D',
      },
    },
    '@tabletS': {
      top: 'A1',
      right: 'A1',
    },
    '@mobileM': {
      top: 'Z2',
      right: 'Z1',
    },
    '@mobileS': {
      fontSize: 'A1',
    },
    '@mobileXS': {
      fontSize: 'A',
    },
  },

  LangButton: {},

  Navbar: {
    position: 'absolute',
    right: 'E3',
    top: 'E',
    zIndex: '5',
    '@tabletL': {
      right: 'D1',
      top: 'D1',
    },
    '@tabletM': {
      position: 'fixed',
      top: '0',
      right: '0',
      gap: 'B',
      boxSize: '0 0',
      background: 'black',
      flexAlign: 'flex-end flex-end',
      boxSizing: 'border-box',
      padding: '0',
      zIndex: '30',
      '.activeMenu': {
        padding: '- D2 D2 -',
        boxSize: '100% 100%',
      },
    },
    '@mobileM': {
      fontSize: 'Z',
      '.activeMenu': {
        padding: '- C2 D2 -',
      },
    },
    '@mobileS': {
      fontSize: 'Y2',
    },
    '@mobileXS': {
      fontSize: 'Y1',
    },
    childProps: {
      '@tabletM': {
        fontSize: 'G2',
        textTransform: 'uppercase',
        fontWeight: '900',
        opacity: '1',
        padding: '0',
        round: '0',
        lineHeight: '1em',
      },
    },
    '@mobileXSS': {
      fontSize: 'Y',
    },
  },

  ChatBtn: {
    position: 'fixed',
    zIndex: '4',
    bottom: 'B',
    right: 'C',
    '@tabletS': {
      right: 'B',
    },
    '@mobileS': {
      bottom: 'A',
      right: 'A',
    },
  },

  Banner: {
    background: 'transparent',
  },

  ServiceSection: {
    zIndex: '10',
    attr: { 'data-section': 'services' },
  },

  StepsSection: {
    zIndex: '2',
    attr: { 'data-section': 'steps' },
  },

  TeamSection: {
    zIndex: '10',
    attr: { 'data-section': 'team' },
  },

  Feedbacks: {
    zIndex: '100',
    attr: { 'data-section': 'testimonials' },
  },

  Contact: {
    zIndex: '10',
    attr: { 'data-section': 'contact' },
  },

  OverlayH: {
    extends: 'Box',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '1',
    pointerEvents: 'none',
    attr: { 'data-el': 'overlay-h' },
  },
  OverlayV: {
    extends: 'Box',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '1',
    pointerEvents: 'none',
    attr: { 'data-el': 'overlay-v' },
  },

  onRender: (el) => {
    if (el.__mainInit) return
    el.__mainInit = true
    if (typeof window === 'undefined') return

    const node = el.node
    const isCoarsePointer = window.matchMedia('(hover: none) and (pointer: coarse)').matches

    // Force scroll to top on load
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)

    // ============================
    // LOADING INTRO ANIMATION
    // ============================
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReduced) {
      const introLeftEl = node.querySelector('[data-el="intro-left"]')
      const introRightEl = node.querySelector('[data-el="intro-right"]')
      const logoEl = node.querySelector('[data-intro-logo]')
      const corner1El = node.querySelector('[data-intro-corner="1"]')
      const corner2El = node.querySelector('[data-intro-corner="2"]')
      const bannerH1 = node.querySelector('h1')
      const bannerH4 = node.querySelector('h4')

      if (bannerH1) bannerH1.setAttribute('data-intro-banner-h1', '1')
      if (bannerH4) bannerH4.setAttribute('data-intro-banner-h4', '1')

      document.body.classList.add('intro-active')
      if (introLeftEl) introLeftEl.style.opacity = '1'
      if (introRightEl) introRightEl.style.opacity = '1'

      setTimeout(() => { document.body.classList.add('intro-reveal') }, 1000)
      setTimeout(() => { document.body.classList.add('intro-corners') }, 1400)
      setTimeout(() => { document.body.classList.add('intro-corners-move') }, 2600)
      setTimeout(() => {
        if (introLeftEl) introLeftEl.style.opacity = '0'
        if (introRightEl) introRightEl.style.opacity = '0'
      }, 2860)
      setTimeout(() => { document.body.classList.add('intro-banner') }, 3180)
      setTimeout(() => {
        document.body.classList.add('intro-finished')
        document.body.classList.remove('intro-active')
        if (logoEl) { logoEl.removeAttribute('data-intro-logo'); logoEl.style.animation = 'none' }
        if (corner1El) { corner1El.removeAttribute('data-intro-corner'); corner1El.style.animation = 'none' }
        if (corner2El) { corner2El.removeAttribute('data-intro-corner'); corner2El.style.animation = 'none' }
        // Enable banner title wave after intro
        applyBannerWave(bannerH1)
      }, 5720)
    }

    // ============================
    // BANNER TITLE WAVE
    // ============================
    const applyBannerWave = (h1El) => {
      if (!h1El) return
      const source = h1El.textContent || ''
      if (!source.trim()) return
      h1El.textContent = ''
      const frag = document.createDocumentFragment()
      let charIndex = 0
      const tokens = source.split(/(\s+)/)
      tokens.forEach((token) => {
        if (!token) return
        if (/^\s+$/.test(token)) { frag.appendChild(document.createTextNode(token)); return }
        const word = document.createElement('span')
        word.className = 'wave-word'
        Array.from(token).forEach((ch) => {
          const span = document.createElement('span')
          span.className = 'wave-char'
          span.style.setProperty('--char-index', String(charIndex))
          span.textContent = ch
          word.appendChild(span)
          charIndex += 1
        })
        frag.appendChild(word)
      })
      h1El.appendChild(frag)
      h1El.setAttribute('data-wave-active', '1')
    }
    // If no intro animation (reduced motion), apply wave immediately
    if (prefersReduced) {
      const bannerH1 = node.querySelector('h1')
      applyBannerWave(bannerH1)
    }

    // ============================
    // SCROLL REVEAL (section titles)
    // ============================
    const sectionTitles = node.querySelectorAll('h2')
    if (sectionTitles.length) {
      sectionTitles.forEach((t) => t.setAttribute('data-reveal', '1'))
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      }, { threshold: 0.4 })
      sectionTitles.forEach((t) => revealObserver.observe(t))
    }

    // ============================
    // FOOTER TEXT WAVE (IntersectionObserver)
    // ============================
    const footerParagraph = node.querySelector('[data-el="footer-paragraph"]')
    if (footerParagraph) {
      const footerSection = footerParagraph.closest('section') || footerParagraph.parentElement
      const waveObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            footerParagraph.setAttribute('data-wave-active', '1')
          } else {
            footerParagraph.removeAttribute('data-wave-active')
          }
        })
      }, { threshold: 0.2 })
      if (footerSection) waveObserver.observe(footerSection)
    }

    // ============================
    // SCROLL OVERLAY SHADE
    // ============================
    const overlayH = node.querySelector('[data-el="overlay-h"]')
    const overlayV = node.querySelector('[data-el="overlay-v"]')
    const stepsEl = node.querySelector('[data-section="steps"]')
    const teamEl = node.querySelector('[data-section="team"]')
    const testimonialEl = node.querySelector('[data-section="testimonials"]')
    const footerEl = node.querySelector('[data-section="contact"]')

    if (overlayH && overlayV) {
      const startOpacity = 1
      const endOpacity = 0.6
      const darkTeamOpacity = 0.9
      const darkTestimonialOpacity = 0.96
      const darkFooterOpacity = 0.985

      let ticking = false
      const onScroll = () => {
        if (ticking) return
        ticking = true
        requestAnimationFrame(() => {
          if (!stepsEl) { ticking = false; return }
          const stepsTop = stepsEl.offsetTop
          const stepsHeight = stepsEl.offsetHeight
          const y = window.scrollY || window.pageYOffset
          const viewportH = window.innerHeight
          const progressRaw = (y - stepsTop) / Math.max(1, stepsHeight)
          const progress = Math.min(1, Math.max(0, progressRaw))
          let value = startOpacity + (endOpacity - startOpacity) * progress

          const smoothClamp = (sectionEl) => {
            if (!sectionEl) return 0
            const top = sectionEl.offsetTop
            const height = sectionEl.offsetHeight
            const start = top - viewportH * 0.25
            const end = top + height + viewportH * 0.25
            const raw = (y - start) / Math.max(1, end - start)
            const t = Math.min(1, Math.max(0, raw))
            return t * (1 - t) * 4
          }

          const teamBump = smoothClamp(teamEl)
          if (teamBump > 0) value = value + (darkTeamOpacity - value) * teamBump
          const testBump = smoothClamp(testimonialEl)
          if (testBump > 0) value = value + (darkTestimonialOpacity - value) * testBump
          const footerBump = smoothClamp(footerEl)
          if (footerBump > 0) value = value + (darkFooterOpacity - value) * footerBump

          const a = value.toFixed(3)
          overlayH.style.background = 'linear-gradient(to left, rgba(0,0,0,' + a + ') 0%, rgba(0,0,0,0) 100%)'
          overlayV.style.background = 'linear-gradient(to top, rgba(0,0,0,' + a + ') 0%, rgba(0,0,0,0) 100%)'
          ticking = false
        })
      }

      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll)
      onScroll()
    }

    // ============================
    // ONGOING SCROLL MOTION (swim)
    // ============================
    if (!isCoarsePointer) {
      const clamp = (v, min, max) => Math.max(min, Math.min(max, v))
      const lerp = (a, b, t) => a + (b - a) * t
      let prevY = window.scrollY || 0

      const swimEntries = [
        { section: stepsEl, el: stepsEl ? stepsEl.querySelector('h2') : null, ampX: 0.28, ampY: 0.5, ampR: 0.8, freq: 0.012 },
        { section: teamEl, el: teamEl ? teamEl.querySelector('h2') : null, ampX: 0.26, ampY: 0.45, ampR: 0.75, freq: 0.011 },
        { section: testimonialEl, el: testimonialEl ? testimonialEl.querySelector('h3') : null, ampX: 0.22, ampY: 0.38, ampR: 0.55, freq: 0.0105 },
        { section: footerEl, el: footerEl ? footerEl.querySelector('h2') : null, ampX: 0.32, ampY: 0.52, ampR: 0.9, freq: 0.0108 },
      ].filter(item => item.section && item.el)

      swimEntries.forEach((item, i) => {
        item.phaseOffset = i * 1.37
        item.x = 0
        item.y = 0
        item.r = 0
      })

      let swimTicking = false
      const updateSwim = () => {
        const y = window.scrollY || 0
        const dy = y - prevY
        prevY = y
        const vh = window.innerHeight || 1
        const speed = clamp(Math.abs(dy) / 24, 0, 1)

        swimEntries.forEach((item) => {
          const rect = item.section.getBoundingClientRect()
          const sectionCenter = rect.top + rect.height * 0.5
          const distFromCenter = Math.abs(sectionCenter - vh * 0.5)
          const near = clamp(1 - distFromCenter / (vh * 0.9), 0, 1)
          const visible = rect.bottom > 0 && rect.top < vh ? 1 : 0
          const power = near * visible * (0.35 + speed * 0.65)
          const phase = y * item.freq + item.phaseOffset
          item.x = lerp(item.x, Math.sin(phase) * item.ampX * power, 0.12)
          item.y = lerp(item.y, Math.cos(phase * 0.88) * item.ampY * power, 0.12)
          item.r = lerp(item.r, Math.sin(phase * 0.62) * item.ampR * power, 0.12)
          item.el.style.setProperty('--swim-x', item.x.toFixed(3) + 'em')
          item.el.style.setProperty('--swim-y', item.y.toFixed(3) + 'em')
          item.el.style.setProperty('--swim-r', item.r.toFixed(3) + 'deg')
        })
        swimTicking = false
      }

      const onSwimScroll = () => {
        if (swimTicking) return
        swimTicking = true
        requestAnimationFrame(updateSwim)
      }

      window.addEventListener('scroll', onSwimScroll, { passive: true })
      window.addEventListener('resize', onSwimScroll)
      onSwimScroll()
    }

    // ============================
    // FOOTER PARALLAX (address images)
    // ============================
    const footerImages = footerEl ? Array.from(footerEl.querySelectorAll('[data-el="street-image"]')) : []
    if (footerImages.length && !isCoarsePointer) {
      const clampP = (v, min, max) => Math.max(min, Math.min(max, v))
      let parallaxTicking = false

      const updateParallax = () => {
        const rect = footerEl.getBoundingClientRect()
        const vh = window.innerHeight || 1
        const y = window.scrollY || 0
        const progress = clampP((vh - rect.top) / (vh + rect.height), 0, 1)
        const centerDelta = (rect.top + rect.height * 0.5 - vh * 0.5) / vh

        footerImages.forEach((img, i) => {
          const dir = i % 2 === 0 ? -1 : 1
          const baseY = (-centerDelta * (i === 0 ? 2.8 : 2.1) + (progress - 0.5) * 0.5) * 12
          const baseX = dir * (0.5 - progress) * 6
          const phase = y * 0.008 + i * 1.35
          const swimX = Math.sin(phase) * 5.5
          const swimY = Math.cos(phase * 0.88) * 7.5
          const tilt = Math.sin(phase * 0.6) * 1.4
          const scale = 1 + Math.cos(phase * 0.52) * 0.01
          img.style.transform = 'translate3d(' + (baseX + swimX).toFixed(2) + 'px, ' + (baseY + swimY).toFixed(2) + 'px, 0) rotate(' + tilt.toFixed(2) + 'deg) scale(' + scale.toFixed(3) + ')'
        })
        parallaxTicking = false
      }

      const onParallaxScroll = () => {
        if (parallaxTicking) return
        parallaxTicking = true
        requestAnimationFrame(updateParallax)
      }

      window.addEventListener('scroll', onParallaxScroll, { passive: true })
      window.addEventListener('resize', onParallaxScroll)
      onParallaxScroll()
    }

    // ============================
    // NAVBAR SCROLL-TO-SECTION
    // ============================
    const navLinks = node.querySelectorAll('a[href^="#"]')
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetSelector = link.getAttribute('href')
        if (!targetSelector || !targetSelector.startsWith('#')) return
        const target = document.querySelector(targetSelector)
        if (!target) return
        e.preventDefault()
        const top = target.getBoundingClientRect().top + (window.scrollY || window.pageYOffset)
        window.scrollTo({ top, left: 0, behavior: isCoarsePointer ? 'auto' : 'smooth' })
      })
    })

    // ============================
    // ESCAPE KEY CLOSES MOBILE MENU
    // ============================
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        try {
          const root = el.__ref || el
          if (root.state && root.state.root && root.state.root.activeMenu) {
            root.state.root.update({ activeMenu: false })
          }
        } catch (err) { /* silent */ }
      }
    })

    // ============================
    // LANGUAGE SWITCHING
    // ============================
    const i18n = {
      en: {
        navbar: { service: 'service', about: 'we are', contact: 'contact' },
        banner: { subtitle: 'Increase your sales and brand awareness with our team', title: 'Focus Agency' },
        services: {
          title: 'We offer full digital services',
          items: [
            { title: 'Social Media Marketing', desc: 'Content creation and advertising' },
            { title: 'Google Analytics', desc: 'Full Google services support' },
            { title: 'Web Development', desc: 'Website building and management' },
            { title: 'Video Production', desc: 'Full photo/video production' },
          ],
        },
        steps: {
          title: 'Flow to Work',
          items: [
            { num: '01', text: 'initial consultation' },
            { num: '02', text: 'strategy development and implementation.' },
            { num: '03', text: 'review and final refinement' },
          ],
        },
        team: { title: 'Our Team', more: 'know us better', members: [
          { role: 'Founder', name: 'Giorgi' },
          { role: 'Project Manager', name: 'Liza' },
          { role: 'Graphic Designer', name: 'Mariami' },
          { role: 'Videograph', name: 'Luka' },
        ]},
        testimonial: { title: 'people talks', messages: [
          { author: 'James Harisson', text: 'I had an excellent experience everything was done accurately and on time' },
          { author: 'Nina Carter', text: 'The team was responsive and execution quality was consistently high.' },
          { author: 'Robert Allen', text: 'Strong communication and fast delivery through the whole process.' },
          { author: 'Maria Brown', text: 'They understood the brief quickly and improved our results month by month.' },
          { author: 'David Smith', text: 'Everything was clear, on schedule, and aligned with our business goals.' },
          { author: 'Sophia Miller', text: 'Creative ideas with practical implementation and measurable impact.' },
          { author: 'Alex Johnson', text: 'Professional workflow, transparent updates, and great final output.' },
        ]},
        contact: {
          brand: 'focus agency',
          legend: 'have a question?',
          namePh: 'name', emailPh: 'email', msgPh: 'shoot a message', submit: 'send',
          phoneLabel: 'call us any time', emailLabel: 'connect with us by email', socialLabel: 'Follow us',
          addressTitle: "you're welcome to visit us", line1: 'Tbilisi, Saburtalo', line2: 'Alexandre Khazbegi street N24 g',
          paragraph: 'Our agency was founded with one main purpose \u2014 to support growth and success of businesses. Every client is unique to us, which is why we always listen carefully to your needs and create strategies that deliver real results.',
        },
      },
      ka: {
        navbar: { service: '\u10E1\u10D4\u10E0\u10D5\u10D8\u10E1\u10D8', about: '\u10E9\u10D5\u10D4\u10DC \u10D5\u10D0\u10E0\u10D7', contact: '\u10D9\u10DD\u10DC\u10E2\u10D0\u10E5\u10E2\u10D8' },
        banner: { subtitle: '\u10D2\u10D0\u10D6\u10D0\u10E0\u10D3\u10D4\u10D7 \u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10D2\u10D0\u10E7\u10D8\u10D3\u10D5\u10D4\u10D1\u10D8 \u10D3\u10D0 \u10D1\u10E0\u10D4\u10DC\u10D3\u10D8\u10E1 \u10EA\u10DC\u10DD\u10D1\u10D0\u10D3\u10DD\u10D1\u10D0 \u10E9\u10D5\u10D4\u10DC\u10D8 \u10D2\u10E3\u10DC\u10D3\u10D8\u10D7', title: 'Focus Agency' },
        services: {
          title: '\u10E9\u10D5\u10D4\u10DC \u10D2\u10D7\u10D0\u10D5\u10D0\u10D6\u10DD\u10D1\u10D7 \u10E1\u10E0\u10E3\u10DA \u10EA\u10D8\u10E4\u10E0\u10E3\u10DA \u10DB\u10DD\u10DB\u10E1\u10D0\u10EE\u10E3\u10E0\u10D4\u10D1\u10D0\u10E1',
          items: [
            { title: '\u10E1\u10DD\u10EA \u10DB\u10D4\u10D3\u10D8\u10D0 \u10DB\u10D0\u10E0\u10D9\u10D4\u10E2\u10D8\u10DC\u10D2\u10D8', desc: '\u10D9\u10DD\u10DC\u10E2\u10D4\u10DC\u10E2\u10D8\u10E1 \u10E8\u10D4\u10E5\u10DB\u10DC\u10D0 \u10D3\u10D0 \u10E0\u10D4\u10D9\u10DA\u10D0\u10DB\u10D0' },
            { title: '\u10D2\u10E3\u10D2\u10DA \u10D0\u10DC\u10D0\u10DA\u10D8\u10E2\u10D8\u10D9\u10D0', desc: '\u10E1\u10E0\u10E3\u10DA\u10D8 Google \u10E1\u10D4\u10E0\u10D5\u10D8\u10E1\u10D4\u10D1\u10D8\u10E1 \u10DB\u10DD\u10DB\u10E1\u10D0\u10EE\u10E3\u10E0\u10D4\u10D1\u10D0' },
            { title: '\u10D5\u10D4\u10D1 \u10D3\u10D4\u10D5\u10D4\u10DA\u10DD\u10DE\u10DB\u10D4\u10DC\u10E2\u10D8', desc: '\u10E1\u10D0\u10D8\u10E2\u10D4\u10D1\u10D8\u10E1 \u10D0\u10EC\u10E7\u10DD\u10D1\u10D0 \u10D3\u10D0 \u10DB\u10D0\u10E0\u10D7\u10D5\u10D0' },
            { title: '\u10D5\u10D8\u10D3\u10D4\u10DD \u10DE\u10E0\u10DD\u10D3\u10D0\u10E5\u10E8\u10D4\u10DC\u10D8', desc: '\u10E1\u10E0\u10E3\u10DA\u10D8 \u10E4\u10DD\u10E2\u10DD/\u10D5\u10D8\u10D3\u10D4\u10DD \u10DB\u10DD\u10DB\u10E1\u10D0\u10EE\u10E3\u10E0\u10D4\u10D1\u10D0' },
          ],
        },
        steps: {
          title: '\u10E1\u10D0\u10DB\u10E3\u10E8\u10D0\u10DD \u10DE\u10E0\u10DD\u10EA\u10D4\u10E1\u10D8',
          items: [
            { num: '01', text: '\u10E1\u10D0\u10EC\u10E7\u10D8\u10E1\u10D8 \u10D9\u10DD\u10DC\u10E1\u10E3\u10DA\u10E2\u10D0\u10EA\u10D8\u10D0' },
            { num: '02', text: '\u10E1\u10E2\u10E0\u10D0\u10E2\u10D4\u10D2\u10D8\u10D8\u10E1 \u10E8\u10D4\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10D0 \u10D3\u10D0 \u10D3\u10D0\u10DC\u10D4\u10E0\u10D2\u10D5\u10D0.' },
            { num: '03', text: '\u10E8\u10D4\u10E4\u10D0\u10E1\u10D4\u10D1\u10D0 \u10D3\u10D0 \u10E1\u10D0\u10D1\u10DD\u10DA\u10DD\u10DD \u10D3\u10D0\u10EE\u10D5\u10D4\u10EC\u10D0' },
          ],
        },
        team: { title: '\u10E9\u10D5\u10D4\u10DC\u10D8 \u10D2\u10E3\u10DC\u10D3\u10D8', more: '\u10D2\u10D0\u10D2\u10D5\u10D8\u10EA\u10D0\u10DC\u10D8\u10D7 \u10E3\u10D9\u10D4\u10D7', members: [
          { role: '\u10D3\u10D0\u10DB\u10E4\u10E3\u10EB\u10DC\u10D4\u10D1\u10D4\u10DA\u10D8', name: '\u10D2\u10D8\u10DD\u10E0\u10D2\u10D8' },
          { role: '\u10DE\u10E0\u10DD\u10D4\u10E5\u10E2 \u10DB\u10D4\u10DC\u10D4\u10EF\u10D4\u10E0\u10D8', name: '\u10DA\u10D8\u10D6\u10D0' },
          { role: '\u10D2\u10E0\u10D0\u10E4\u10D8\u10D9\u10E3\u10DA\u10D8 \u10D3\u10D8\u10D6\u10D0\u10D8\u10DC\u10D4\u10E0\u10D8', name: '\u10DB\u10D0\u10E0\u10D8\u10D0\u10DB\u10D8' },
          { role: '\u10D5\u10D8\u10D3\u10D4\u10DD\u10D2\u10E0\u10D0\u10E4\u10D8', name: '\u10DA\u10E3\u10D9\u10D0' },
        ]},
        testimonial: { title: '\u10E9\u10D5\u10D4\u10DC\u10D6\u10D4 \u10D0\u10DB\u10D1\u10DD\u10D1\u10D4\u10DC', messages: [
          { author: '\u10EF\u10D4\u10D8\u10DB\u10E1 \u10F0\u10D0\u10E0\u10D8\u10E1\u10DD\u10DC\u10D8', text: '\u10EB\u10D0\u10DA\u10D8\u10D0\u10DC \u10D9\u10D0\u10E0\u10D2\u10D8 \u10D2\u10D0\u10DB\u10DD\u10EA\u10D3\u10D8\u10DA\u10D4\u10D1\u10D0 \u10DB\u10D8\u10D5\u10D8\u10E6\u10D4 \u10E7\u10D5\u10D4\u10DA\u10D0\u10E4\u10D4\u10E0\u10D8 \u10D6\u10E3\u10E1\u10E2\u10D0\u10D3 \u10D3\u10D0 \u10D3\u10E0\u10DD\u10E3\u10DA\u10D0\u10D3 \u10E8\u10D4\u10E1\u10E0\u10E3\u10DA\u10D3\u10D0.' },
          { author: '\u10DC\u10D8\u10DC\u10D0 \u10D9\u10D0\u10E0\u10E2\u10D4\u10E0\u10D8', text: '\u10D2\u10E3\u10DC\u10D3\u10D8 \u10DD\u10DE\u10D4\u10E0\u10D0\u10E2\u10D8\u10E3\u10DA\u10D8 \u10D8\u10E7\u10DD \u10D3\u10D0 \u10E8\u10D4\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10D8\u10E1 \u10EE\u10D0\u10E0\u10D8\u10E1\u10EE\u10D8 \u10E1\u10E2\u10D0\u10D1\u10D8\u10DA\u10E3\u10E0\u10D0\u10D3 \u10DB\u10D0\u10E6\u10D0\u10DA\u10D8 \u10D3\u10D0\u10E0\u10E9\u10D0.' },
          { author: '\u10E0\u10DD\u10D1\u10D4\u10E0\u10E2 \u10D0\u10DA\u10D4\u10DC\u10D8', text: '\u10D9\u10DD\u10DB\u10E3\u10DC\u10D8\u10D9\u10D0\u10EA\u10D8\u10D0 \u10EB\u10DA\u10D8\u10D4\u10E0\u10D8 \u10D8\u10E7\u10DD \u10D3\u10D0 \u10DB\u10D8\u10EC\u10DD\u10D3\u10D4\u10D1\u10D0 \u10DB\u10D7\u10D4\u10DA\u10D8 \u10DE\u10E0\u10DD\u10EA\u10D4\u10E1\u10D8\u10E1 \u10D2\u10D0\u10DC\u10DB\u10D0\u10D5\u10DA\u10DD\u10D1\u10D0\u10E8\u10D8 \u10E1\u10EC\u10E0\u10D0\u10E4\u10D0\u10D3 \u10EE\u10D3\u10D4\u10D1\u10DD\u10D3\u10D0.' },
          { author: '\u10DB\u10D0\u10E0\u10D8\u10D0 \u10D1\u10E0\u10D0\u10E3\u10DC\u10D8', text: '\u10D1\u10E0\u10D8\u10E4\u10D8 \u10E1\u10EC\u10E0\u10D0\u10E4\u10D0\u10D3 \u10D2\u10D0\u10D8\u10D2\u10D4\u10E1 \u10D3\u10D0 \u10E8\u10D4\u10D3\u10D4\u10D2\u10D4\u10D1\u10D8 \u10D7\u10D5\u10D8\u10D3\u10D0\u10DC \u10D7\u10D5\u10D4\u10DB\u10D3\u10D4 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D5\u10DC\u10D0\u10D3 \u10D2\u10D0\u10D0\u10E3\u10DB\u10EF\u10DD\u10D1\u10D4\u10E1\u10D4\u10E1.' },
          { author: '\u10D3\u10D0\u10D5\u10D8\u10D7 \u10E1\u10DB\u10D8\u10D7\u10D8', text: '\u10E7\u10D5\u10D4\u10DA\u10D0\u10E4\u10D4\u10E0\u10D8 \u10D8\u10E7\u10DD \u10D2\u10D0\u10E1\u10D0\u10D2\u10D4\u10D1\u10D8, \u10D5\u10D0\u10D3\u10D4\u10D1\u10E8\u10D8 \u10D3\u10D0 \u10E1\u10E0\u10E3\u10DA\u10D0\u10D3 \u10DB\u10D8\u10D1\u10DB\u10E3\u10DA\u10D8 \u10D1\u10D8\u10D6\u10DC\u10D4\u10E1 \u10DB\u10D8\u10D6\u10DC\u10D4\u10D1\u10D6\u10D4.' },
          { author: '\u10E1\u10DD\u10E4\u10D8\u10D0 \u10DB\u10D8\u10DA\u10D4\u10E0\u10D8', text: '\u10D9\u10E0\u10D4\u10D0\u10E2\u10D8\u10E3\u10DA\u10D8 \u10D8\u10D3\u10D4\u10D4\u10D1\u10D8 \u10DE\u10E0\u10D0\u10E5\u10E2\u10D8\u10D9\u10E3\u10DA \u10E8\u10D4\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10D0\u10E1\u10D7\u10D0\u10DC \u10D3\u10D0 \u10D2\u10D0\u10D6\u10DD\u10DB\u10D5\u10D0\u10D3 \u10E8\u10D4\u10D3\u10D4\u10D2\u10D4\u10D1\u10D7\u10D0\u10DC \u10D4\u10E0\u10D7\u10D0\u10D3.' },
          { author: '\u10D0\u10DA\u10D4\u10E5\u10E1 \u10EF\u10DD\u10DC\u10E1\u10DD\u10DC\u10D8', text: '\u10DE\u10E0\u10DD\u10E4\u10D4\u10E1\u10D8\u10E3\u10DA\u10D8 \u10E1\u10D0\u10DB\u10E3\u10E8\u10D0\u10DD \u10DE\u10E0\u10DD\u10EA\u10D4\u10E1\u10D8, \u10D2\u10D0\u10DB\u10ED\u10D5\u10D8\u10E0\u10D5\u10D0\u10DA\u10D4 \u10D2\u10D0\u10DC\u10D0\u10EE\u10DA\u10D4\u10D1\u10D4\u10D1\u10D8 \u10D3\u10D0 \u10EB\u10DA\u10D8\u10D4\u10E0\u10D8 \u10E1\u10D0\u10D1\u10DD\u10DA\u10DD\u10DD \u10E8\u10D4\u10D3\u10D4\u10D2\u10D8.' },
        ]},
        contact: {
          brand: 'Focus Agency',
          legend: '\u10D2\u10D0\u10E5\u10D5\u10E1 \u10E8\u10D4\u10D9\u10D8\u10D7\u10EE\u10D5\u10D0?',
          namePh: '\u10E1\u10D0\u10EE\u10D4\u10DA\u10D8', emailPh: '\u10D4\u10DA-\u10E4\u10DD\u10E1\u10E2\u10D0', msgPh: '\u10DB\u10DD\u10D2\u10D5\u10EC\u10D4\u10E0\u10D4', submit: '\u10D2\u10D0\u10DB\u10DD\u10D0\u10D2\u10D6\u10D0\u10D5\u10DC\u10D4\u10D7',
          phoneLabel: '\u10D3\u10D0\u10D2\u10D5\u10D8\u10E0\u10D4\u10D9\u10D4 \u10DC\u10D4\u10D1\u10D8\u10E1\u10DB\u10D8\u10D4\u10E0 \u10D3\u10E0\u10DD\u10E1', emailLabel: '\u10D3\u10D0\u10D2\u10D5\u10D8\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D3\u10D8 \u10D4\u10DA-\u10E4\u10DD\u10E1\u10E2\u10D0\u10D6\u10D4', socialLabel: '\u10D2\u10D0\u10DB\u10DD\u10D2\u10D5\u10E7\u10D4\u10D5\u10D8',
          addressTitle: '\u10E1\u10D8\u10D0\u10DB\u10DD\u10D5\u10DC\u10D4\u10D1\u10D8\u10D7 \u10D2\u10D8\u10DB\u10D0\u10E1\u10DE\u10D8\u10DC\u10EB\u10DA\u10D4\u10D1\u10D7 \u10DD\u10E4\u10D8\u10E1\u10E8\u10D8', line1: '\u10D7\u10D1\u10D8\u10DA\u10D8\u10E1\u10D8, \u10E1\u10D0\u10D1\u10E3\u10E0\u10D7\u10D0\u10DA\u10DD', line2: '\u10D0\u10DA\u10D4\u10E5\u10E1\u10D0\u10DC\u10D3\u10E0\u10D4 \u10E7\u10D0\u10D6\u10D1\u10D4\u10D2\u10D8\u10E1 \u10E5\u10E3\u10E9\u10D0 N24 \u10D2',
          paragraph: '\u10E9\u10D5\u10D4\u10DC\u10D8 \u10E1\u10D0\u10D0\u10D2\u10D4\u10DC\u10E2\u10DD \u10D4\u10E0\u10D7\u10D8 \u10DB\u10D7\u10D0\u10D5\u10D0\u10E0\u10D8 \u10DB\u10D8\u10D6\u10DC\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1 \u10E8\u10D4\u10D8\u10E5\u10DB\u10DC\u10D0 - \u10EE\u10D4\u10DA\u10D8 \u10E8\u10D4\u10D5\u10E3\u10EC\u10E7\u10DD\u10D7 \u10D1\u10D8\u10D6\u10DC\u10D4\u10E1\u10D4\u10D1\u10D8\u10E1 \u10D6\u10E0\u10D3\u10D0\u10E1\u10D0 \u10D3\u10D0 \u10EC\u10D0\u10E0\u10DB\u10D0\u10E2\u10D4\u10D1\u10D0\u10E1. \u10D7\u10D8\u10D7\u10DD\u10D4\u10E3\u10DA\u10D8 \u10D9\u10DA\u10D8\u10D4\u10DC\u10E2\u10D8 \u10E9\u10D5\u10D4\u10DC\u10D7\u10D5\u10D8\u10E1 \u10E3\u10DC\u10D8\u10D9\u10D0\u10DA\u10E3\u10E0\u10D8\u10D0, \u10D0\u10DB\u10D8\u10E2\u10DD\u10DB \u10E7\u10E3\u10E0\u10D0\u10D3\u10E6\u10D4\u10D1\u10D8\u10D7 \u10D5\u10D8\u10E1\u10DB\u10D4\u10DC\u10D7 \u10E8\u10D4\u10DC\u10E1 \u10E1\u10D0\u10ED\u10D8\u10E0\u10DD\u10D4\u10D1\u10D4\u10D1\u10E1 \u10D3\u10D0 \u10D5\u10E5\u10DB\u10DC\u10D8\u10D7 \u10E1\u10E2\u10E0\u10D0\u10E2\u10D4\u10D2\u10D8\u10D4\u10D1\u10E1, \u10E0\u10DD\u10DB\u10DA\u10D4\u10D1\u10D8\u10EA \u10E0\u10D4\u10D0\u10DA\u10E3\u10E0 \u10E8\u10D4\u10D3\u10D4\u10D2\u10E1 \u10D8\u10EB\u10DA\u10D4\u10D5\u10D0.',
        },
      },
    }

    const applyLang = (lang) => {
      const d = i18n[lang]
      if (!d) return

      // Set body data-lang for CSS selectors (Georgian font)
      document.body.setAttribute('data-lang', lang)
      const kaFont = "'BPG Square Banner 2013', sans-serif"
      const kaCapsFont = "'BPG Square Banner Caps 2013', sans-serif"
      const enFont = "'Exo 2', sans-serif"

      // Navbar links
      const navLinks2 = node.querySelectorAll('a[href^="#"]')
      const navKeys = ['service', 'about', 'contact']
      navLinks2.forEach((link, i) => {
        if (navKeys[i]) link.textContent = d.navbar[navKeys[i]]
        link.style.fontFamily = lang === 'ka' ? kaCapsFont : enFont
      })

      // Banner
      const bannerH4 = node.querySelector('h4')
      const bannerH1 = node.querySelector('h1')
      if (bannerH4) { bannerH4.textContent = d.banner.subtitle; bannerH4.style.fontFamily = lang === 'ka' ? kaFont : enFont }
      if (bannerH1) { bannerH1.textContent = d.banner.title; bannerH1.style.fontFamily = enFont }

      // Services title
      const serviceSection = node.querySelector('[data-section="services"]')
      if (serviceSection) {
        const sTitle = serviceSection.querySelector('h2')
        if (sTitle) { sTitle.textContent = d.services.title; sTitle.style.fontFamily = lang === 'ka' ? kaCapsFont : enFont }
        const cardH3 = serviceSection.querySelector('h3')
        const cardP = serviceSection.querySelector('hgroup p')
        if (cardH3 && d.services.items[0]) { cardH3.textContent = d.services.items[0].title; cardH3.style.fontFamily = lang === 'ka' ? kaCapsFont : enFont }
        if (cardP && d.services.items[0]) cardP.textContent = d.services.items[0].desc
        window.__serviceItems = d.services.items
      }

      // Steps
      if (stepsEl) {
        const stTitle = stepsEl.querySelector('h2')
        if (stTitle) { stTitle.textContent = d.steps.title; stTitle.style.fontFamily = lang === 'ka' ? kaCapsFont : enFont }
        const dots = stepsEl.querySelectorAll('hgroup')
        dots.forEach((hgroup, i) => {
          if (!d.steps.items[i]) return
          const h3 = hgroup.querySelector('h3')
          const p = hgroup.querySelector('p')
          if (h3) h3.textContent = d.steps.items[i].num
          if (p) { p.textContent = d.steps.items[i].text; p.style.fontFamily = lang === 'ka' ? kaFont : enFont }
        })
      }

      // Team
      if (teamEl) {
        const tTitle = teamEl.querySelector('h2')
        if (tTitle) { tTitle.textContent = d.team.title; tTitle.style.fontFamily = lang === 'ka' ? kaCapsFont : enFont }
        const moreBtn = teamEl.querySelector('button')
        if (moreBtn) { moreBtn.textContent = d.team.more; moreBtn.style.fontFamily = lang === 'ka' ? kaFont : enFont }
        const memberEls = teamEl.querySelectorAll('[id="about"] > *')
        memberEls.forEach((m, i) => {
          if (!d.team.members[i]) return
          const h6 = m.querySelector('h6')
          const h5 = m.querySelector('h5')
          if (h6) { h6.textContent = d.team.members[i].role; h6.style.fontFamily = lang === 'ka' ? kaFont : enFont }
          if (h5) { h5.textContent = d.team.members[i].name; h5.style.fontFamily = lang === 'ka' ? kaFont : enFont }
        })
      }

      // Testimonials
      if (testimonialEl) {
        const ttH3 = testimonialEl.querySelector('h3')
        if (ttH3) { ttH3.textContent = d.testimonial.title; ttH3.style.fontFamily = lang === 'ka' ? kaCapsFont : enFont }
        const trackItems = testimonialEl.querySelectorAll('p[data-real-index]')
        const msgCount = d.testimonial.messages.length
        trackItems.forEach((p) => {
          const idx = parseInt(p.dataset.realIndex, 10)
          if (isNaN(idx) || idx >= msgCount) return
          p.textContent = d.testimonial.messages[idx].text
          p.dataset.author = d.testimonial.messages[idx].author
          p.style.fontFamily = lang === 'ka' ? kaFont : enFont
        })
        const authorEl = testimonialEl.querySelector('h5[data-el="author"]') || testimonialEl.querySelector('h5')
        if (authorEl && d.testimonial.messages[0]) {
          authorEl.textContent = d.testimonial.messages[0].author
          authorEl.style.fontFamily = lang === 'ka' ? kaFont : enFont
        }
      }

      // Footer / Contact
      if (footerEl) {
        const fH2 = footerEl.querySelector('h2')
        if (fH2) fH2.textContent = d.contact.brand

        const legend = footerEl.querySelector('legend')
        if (legend) { legend.textContent = d.contact.legend; legend.style.fontFamily = lang === 'ka' ? kaFont : enFont }
        const nameInput = footerEl.querySelector('input[name="name"]')
        if (nameInput) nameInput.placeholder = d.contact.namePh
        const emailInput = footerEl.querySelector('input[name="email"]')
        if (emailInput) emailInput.placeholder = d.contact.emailPh
        const textarea = footerEl.querySelector('textarea')
        if (textarea) textarea.placeholder = d.contact.msgPh
        const submitBtn = footerEl.querySelector('button[type="submit"]')
        if (submitBtn) { submitBtn.textContent = d.contact.submit; submitBtn.style.fontFamily = lang === 'ka' ? kaFont : enFont }

        const h5s = footerEl.querySelectorAll('[data-el="detail-label"]')
        const labels = [d.contact.phoneLabel, d.contact.emailLabel, d.contact.socialLabel]
        h5s.forEach((h5, i) => {
          if (labels[i]) { h5.textContent = labels[i]; h5.style.fontFamily = lang === 'ka' ? kaFont : enFont }
        })

        const addrTitle = footerEl.querySelector('[data-el="address-title"]')
        if (addrTitle) { addrTitle.textContent = d.contact.addressTitle; addrTitle.style.fontFamily = lang === 'ka' ? kaFont : enFont }
        const addrSpans = footerEl.querySelectorAll('[data-el="address-line"]')
        if (addrSpans[0]) { addrSpans[0].textContent = d.contact.line1; addrSpans[0].style.fontFamily = lang === 'ka' ? kaFont : enFont }
        if (addrSpans[1]) { addrSpans[1].textContent = d.contact.line2; addrSpans[1].style.fontFamily = lang === 'ka' ? kaFont : enFont }

        // Footer paragraph - rebuild wave chars
        const footerP = footerEl.querySelector('[data-el="footer-paragraph"]')
        if (footerP) {
          footerP.textContent = ''
          const frag2 = document.createDocumentFragment()
          let ci = 0
          const tokens2 = d.contact.paragraph.split(/(\s+)/)
          tokens2.forEach((token) => {
            if (!token) return
            if (/^\s+$/.test(token)) { frag2.appendChild(document.createTextNode(token)); return }
            const word = document.createElement('span')
            word.style.display = 'inline-block'
            word.style.whiteSpace = 'nowrap'
            Array.from(token).forEach((ch) => {
              const span = document.createElement('span')
              span.style.display = 'inline-block'
              span.style.opacity = '0.25'
              span.style.transition = 'opacity 0.25s ease'
              span.style.setProperty('--char-index', String(ci))
              span.textContent = ch
              span.className = 'wave-char-footer'
              word.appendChild(span)
              ci += 1
            })
            word.className = 'wave-word'
            frag2.appendChild(word)
          })
          footerP.appendChild(frag2)
          footerP.style.fontFamily = lang === 'ka' ? kaFont : enFont
        }
      }

      // Lang button active state
      const langBtns = node.querySelectorAll('[data-lang]')
      langBtns.forEach((btn) => {
        const isActive = btn.dataset.lang === lang
        btn.style.color = isActive ? 'rgba(255, 241, 227, 1)' : 'rgba(255, 241, 227, 0.5)'
        btn.style.borderColor = isActive ? 'rgba(255, 241, 227, 0.5)' : 'rgba(255, 241, 227, 0.15)'
      })
    }

    window.__applyLang = applyLang
    // Store service items for scroll-driven card switching
    window.__serviceItems = i18n.en.services.items
    // Apply initial language
    applyLang('en')
  },
}
