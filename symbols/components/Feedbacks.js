export const Feedbacks = {
  extends: 'Box',
  tag: 'section',
  maxWidth: 'fit-content',
  margin: '0 auto',
  padding: '10em 0 18em 0',
  position: 'relative',
  zIndex: '100',
  '@tabletXS': { paddingBottom: '5em' },

  Title: {
    extends: 'Flex',
    attr: { 'data-el': 'feedback-title' },
    paddingRight: '30em',
    opacity: '0.6',
    style: {
      transform: 'translateX(var(--swim-x, 0em)) translateY(calc(1.2em + var(--swim-y, 0em))) rotate(var(--swim-r, 0deg))',
      transition: 'transform 0.75s cubic-bezier(0.4,0,0.2,1)',
    },
    '@tabletS': { fontSize: '0.9em', marginLeft: '5em' },
    '@tabletXSS': { fontSize: '0.8em', marginLeft: '3em', marginBottom: '6em' },
    '@mobileL': { fontSize: '0.7em' },

    QuoteImg: {
      tag: 'img',
      height: '7em',
      marginLeft: '10em',
      marginBottom: '2em',
      attr: { src: '/IMAGE/quotation-mark.png', alt: '', 'data-el': 'quote-img' },
      style: { transformOrigin: 'center center' },
    },
    H3: {
      tag: 'h3',
      text: 'people talks',
      fontSize: '5em',
      fontWeight: '900',
      textTransform: 'capitalize',
      maxWidth: '2em',
      lineHeight: '1em',
      color: 'cream',
      style: { fontFamily: "'Exo 2', sans-serif" },
    },
  },

  CarouselWrap: {
    extends: 'Box',
    position: 'relative',
    marginLeft: 'auto',
    marginTop: '13em',
    style: {
      maxHeight: '45em',
      isolation: 'isolate',
    },
    '@tabletS': { marginRight: '5em' },
    '@tabletXSS': { margin: '0 auto' },

    Messages: {
      extends: 'Box',
      attr: { 'data-el': 'feedback-messages' },
      position: 'relative',
      overflow: 'hidden',
      padding: '0 1.8em',
      style: {
        height: '45em',
        willChange: 'transform',
        boxSizing: 'border-box',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.9) 14%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.9) 86%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.9) 14%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.9) 86%, transparent 100%)',
      },

      Track: {
        extends: 'Flex',
        flow: 'y',
        gap: 'D',
        style: { willChange: 'transform' },

        P1: { tag: 'p', text: 'I had an excellent experience everything was done accurately and on time', fontSize: '1.2em', maxWidth: '15em', fontWeight: '300', lineHeight: '1.35em', color: 'cream', opacity: '0.3', attr: { 'data-author': 'James Harisson', 'data-real-index': '0' }, style: { fontFamily: "'Exo 2', sans-serif", transformOrigin: 'center center' } },
        P2: { tag: 'p', text: 'The team was responsive and execution quality was consistently high.', fontSize: '1.2em', maxWidth: '15em', fontWeight: '300', lineHeight: '1.35em', color: 'cream', opacity: '0.3', attr: { 'data-author': 'Nina Carter', 'data-real-index': '1' }, style: { fontFamily: "'Exo 2', sans-serif", transformOrigin: 'center center' } },
        P3: { tag: 'p', text: 'Strong communication and fast delivery through the whole process.', fontSize: '1.2em', maxWidth: '15em', fontWeight: '300', lineHeight: '1.35em', color: 'cream', opacity: '0.3', attr: { 'data-author': 'Robert Allen', 'data-real-index': '2' }, style: { fontFamily: "'Exo 2', sans-serif", transformOrigin: 'center center' } },
        P4: { tag: 'p', text: 'They understood the brief quickly and improved our results month by month.', fontSize: '1.2em', maxWidth: '15em', fontWeight: '300', lineHeight: '1.35em', color: 'cream', opacity: '0.3', attr: { 'data-author': 'Maria Brown', 'data-real-index': '3' }, style: { fontFamily: "'Exo 2', sans-serif", transformOrigin: 'center center' } },
        P5: { tag: 'p', text: 'Everything was clear, on schedule, and aligned with our business goals.', fontSize: '1.2em', maxWidth: '15em', fontWeight: '300', lineHeight: '1.35em', color: 'cream', opacity: '0.3', attr: { 'data-author': 'David Smith', 'data-real-index': '4' }, style: { fontFamily: "'Exo 2', sans-serif", transformOrigin: 'center center' } },
        P6: { tag: 'p', text: 'Creative ideas with practical implementation and measurable impact.', fontSize: '1.2em', maxWidth: '15em', fontWeight: '300', lineHeight: '1.35em', color: 'cream', opacity: '0.3', attr: { 'data-author': 'Sophia Miller', 'data-real-index': '5' }, style: { fontFamily: "'Exo 2', sans-serif", transformOrigin: 'center center' } },
        P7: { tag: 'p', text: 'Professional workflow, transparent updates, and great final output.', fontSize: '1.2em', maxWidth: '15em', fontWeight: '300', lineHeight: '1.35em', color: 'cream', opacity: '0.3', attr: { 'data-author': 'Alex Johnson', 'data-real-index': '6' }, style: { fontFamily: "'Exo 2', sans-serif", transformOrigin: 'center center' } },
      },
    },

    FocusFrame: {
      extends: 'Box',
      position: 'absolute',
      zIndex: '2',
      top: '50%',
      left: '50%',
      width: '25em',
      height: '15em',
      attr: { 'data-el': 'focus-frame' },
      style: { transform: 'translate(-50%, -50%)' },

      CornerOne: { extends: 'Box', position: 'absolute', top: '0', left: '0', width: '1.25em', height: '1.25em', style: { transform: 'rotate(90deg)' }, ':before': { position: 'absolute', bottom: '0', left: '0', width: '2px', height: '100%', background: 'red', style: { content: "''", borderRadius: '5px' } }, ':after': { position: 'absolute', bottom: '0', left: '0', width: '100%', height: '2px', background: 'red', style: { content: "''", borderRadius: '5px' } } },
      CornerTwo: { extends: 'Box', position: 'absolute', top: '0', right: '0', width: '1.25em', height: '1.25em', style: { transform: 'rotate(180deg)' }, ':before': { position: 'absolute', bottom: '0', left: '0', width: '2px', height: '100%', background: 'red', style: { content: "''", borderRadius: '5px' } }, ':after': { position: 'absolute', bottom: '0', left: '0', width: '100%', height: '2px', background: 'red', style: { content: "''", borderRadius: '5px' } } },
      CornerThree: { extends: 'Box', position: 'absolute', bottom: '0', left: '0', width: '1.25em', height: '1.25em', ':before': { position: 'absolute', bottom: '0', left: '0', width: '2px', height: '100%', background: 'red', style: { content: "''", borderRadius: '5px' } }, ':after': { position: 'absolute', bottom: '0', left: '0', width: '100%', height: '2px', background: 'red', style: { content: "''", borderRadius: '5px' } } },
      CornerFour: { extends: 'Box', position: 'absolute', bottom: '0', right: '0', width: '1.25em', height: '1.25em', style: { transform: 'rotate(-90deg)' }, ':before': { position: 'absolute', bottom: '0', left: '0', width: '2px', height: '100%', background: 'red', style: { content: "''", borderRadius: '5px' } }, ':after': { position: 'absolute', bottom: '0', left: '0', width: '100%', height: '2px', background: 'red', style: { content: "''", borderRadius: '5px' } } },

      AuthorName: {
        tag: 'h5',
        text: 'James Harisson',
        position: 'absolute',
        zIndex: '1',
        textTransform: 'capitalize',
        fontSize: '2em',
        color: 'cream',
        fontWeight: '900',
        bottom: '4.5em',
        right: '5em',
        maxWidth: '1.7em',
        lineHeight: '1.1em',
        style: {
          fontFamily: "'Exo 2', sans-serif",
          transition: 'none',
        },
        ':before': {
          position: 'absolute',
          top: '-0.35em', left: '-0.8em', right: '-0.8em', bottom: '-0.35em',
          zIndex: '-1',
          background: 'radial-gradient(65% 80% at 50% 50%, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0) 100%)',
          pointerEvents: 'none',
          style: { content: "''" },
        },
      },
    },
  },

  onRender: (el) => {
    if (el.__feedbacksInit) return
    el.__feedbacksInit = true

    const node = el.node
    const messagesEl = node.querySelector('[data-el="feedback-messages"]')
    const trackEl = messagesEl ? messagesEl.firstElementChild : null
    const focusEl = node.querySelector('[data-el="focus-frame"]')
    const authorEl = focusEl ? focusEl.querySelector('h5') : null
    if (!messagesEl || !trackEl || !focusEl) return

    const originalItems = Array.from(trackEl.querySelectorAll('p'))
    if (originalItems.length < 2) return
    originalItems.forEach((item, i) => {
      item.dataset.realIndex = String(i)
      const clone = item.cloneNode(true)
      clone.dataset.clone = 'true'
      clone.dataset.realIndex = String(i)
      trackEl.appendChild(clone)
    })

    const allItems = Array.from(trackEl.querySelectorAll('p'))
    let cycleHeight = 0, pos = 0, rafId = null, running = false, lastTs = 0
    let activeRealIndex = -1, lastPulsedRealIndex = -1, lastAuthorSyncedRealIndex = -1
    let peakTrackIndex = -1, prevActiveT = 0
    const speedPxPerSec = 36

    const measure = () => {
      const secondCycleFirst = allItems[originalItems.length]
      cycleHeight = secondCycleFirst ? secondCycleFirst.offsetTop : trackEl.scrollHeight / 2
      if (cycleHeight > 0) pos = pos % cycleHeight
    }

    const getFocusOffsetInList = () => {
      const listRect = messagesEl.getBoundingClientRect()
      const focusRect = focusEl.getBoundingClientRect()
      return focusRect.top - listRect.top + focusRect.height / 2
    }

    const setActiveByCenter = () => {
      if (!cycleHeight) return
      const focusOffset = getFocusOffsetInList()
      const center = (pos + focusOffset) % cycleHeight
      let nextIndex = 0, bestDist = Infinity
      for (let i = 0; i < originalItems.length; i++) {
        const item = originalItems[i]
        const itemCenter = item.offsetTop + item.offsetHeight / 2
        const direct = Math.abs(center - itemCenter)
        const wrap = cycleHeight - direct
        if (Math.min(direct, wrap) < bestDist) { bestDist = Math.min(direct, wrap); nextIndex = i }
      }
      if (nextIndex === activeRealIndex) return
      activeRealIndex = nextIndex
    }

    let focusPulseTimer = null
    let h5PulseTimer = null
    const corners = focusEl ? Array.from(focusEl.querySelectorAll(':scope > div')) : []

    const triggerFocusPulse = () => {
      focusEl.classList.remove('is-pulse-frame')
      void focusEl.offsetWidth
      focusEl.classList.add('is-pulse-frame')
      corners.forEach((c) => { c.classList.remove('is-pulse-corner'); void c.offsetWidth; c.classList.add('is-pulse-corner') })
      if (focusPulseTimer) clearTimeout(focusPulseTimer)
      focusPulseTimer = setTimeout(() => {
        focusEl.classList.remove('is-pulse-frame')
        corners.forEach((c) => c.classList.remove('is-pulse-corner'))
      }, 520)
    }

    const syncAuthor = () => {
      if (!authorEl || activeRealIndex < 0) return
      authorEl.textContent = originalItems[activeRealIndex].dataset.author || ''
      authorEl.classList.remove('is-pulse-name')
      void authorEl.offsetWidth
      authorEl.classList.add('is-pulse-name')
      if (h5PulseTimer) clearTimeout(h5PulseTimer)
      h5PulseTimer = setTimeout(() => authorEl.classList.remove('is-pulse-name'), 520)
    }

    const updateVisuals = () => {
      const focusOffset = getFocusOffsetInList()
      const falloff = messagesEl.clientHeight * 0.38
      let activeT = 0
      allItems.forEach((item) => {
        let centerY = item.offsetTop - pos + item.offsetHeight / 2
        while (centerY < -item.offsetHeight) centerY += cycleHeight
        while (centerY > messagesEl.clientHeight + item.offsetHeight) centerY -= cycleHeight
        const dist = Math.abs(centerY - focusOffset)
        const t = Math.max(0, 1 - dist / Math.max(1, falloff))
        const easedT = Math.pow(t, 1.8)
        item.style.opacity = (0.04 + easedT * 0.96).toFixed(3)
        item.style.transform = 'scale(' + (0.82 + t * 0.30).toFixed(3) + ')'
        if (Number(item.dataset.realIndex) === activeRealIndex && t > activeT) activeT = t
      })
      if (activeRealIndex !== peakTrackIndex) { peakTrackIndex = activeRealIndex; prevActiveT = 0 }
      const hitPeak = activeRealIndex >= 0 && activeT >= 0.78 && activeT < prevActiveT
      if (hitPeak && lastPulsedRealIndex !== activeRealIndex) {
        triggerFocusPulse()
        lastPulsedRealIndex = activeRealIndex
      }
      if (hitPeak && lastAuthorSyncedRealIndex !== activeRealIndex) { syncAuthor(); lastAuthorSyncedRealIndex = activeRealIndex }
      prevActiveT = activeT
    }

    const frame = (ts) => {
      if (!running) return
      if (!lastTs) lastTs = ts
      const dt = (ts - lastTs) / 1000
      lastTs = ts
      pos += speedPxPerSec * dt
      if (cycleHeight > 0) { while (pos >= cycleHeight) pos -= cycleHeight; while (pos < 0) pos += cycleHeight }
      trackEl.style.transform = 'translate3d(0, ' + (-pos) + 'px, 0)'
      setActiveByCenter()
      updateVisuals()
      rafId = requestAnimationFrame(frame)
    }

    const start = () => { if (running) return; running = true; lastTs = 0; rafId = requestAnimationFrame(frame) }
    const stop = () => { running = false; if (rafId) cancelAnimationFrame(rafId); rafId = null }

    measure()
    requestAnimationFrame(() => measure())
    updateVisuals()

    // Scroll-driven quote shake: add is-scrolling class when actively scrolling
    let scrollTimer = null
    const titleEl = node.querySelector('[data-el="feedback-title"]')
    const onTestimonialScroll = () => {
      if (titleEl) titleEl.classList.add('is-scrolling')
      if (scrollTimer) clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => { if (titleEl) titleEl.classList.remove('is-scrolling') }, 200)
    }
    window.addEventListener('scroll', onTestimonialScroll, { passive: true })

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          start()
          node.classList.add('is-active')
          if (titleEl) {
            titleEl.style.transform = 'translateX(var(--swim-x, 0em)) translateY(var(--swim-y, 0em)) rotate(var(--swim-r, 0deg))'
          }
        } else {
          stop()
          node.classList.remove('is-active')
          if (titleEl) {
            titleEl.style.transform = 'translateX(var(--swim-x, 0em)) translateY(calc(1.2em + var(--swim-y, 0em))) rotate(var(--swim-r, 0deg))'
          }
        }
      })
    }, { threshold: 0.3 })
    io.observe(node)
    window.addEventListener('resize', () => measure())
  },
}
