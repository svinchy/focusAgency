export const ServiceSection = {
  extends: 'Box',
  tag: 'section',
  width: '80%',
  maxWidth: '92em',
  padding: '8em 0 22em 0',
  position: 'relative',
  margin: '0 auto',
  style: { minHeight: '800vh' },
  '@mobileL': { paddingBottom: '10em' },
  '@mobileM': { width: '90%' },

  Title: {
    tag: 'h2',
    text: 'We offer full digital services',
    fontWeight: '900',
    fontSize: '9em',
    lineHeight: '0.9em',
    letterSpacing: '-0.02em',
    maxWidth: '5em',
    padding: '2.2em 0 3em 0',
    color: 'cream',
    opacity: '0',
    style: {
      fontFamily: "'Exo 2', sans-serif",
      transform: 'translateY(0.8em)',
      filter: 'blur(6px)',
      transition: 'opacity 0.45s cubic-bezier(0.4,0,0.2,1), transform 0.45s cubic-bezier(0.4,0,0.2,1), filter 0.45s cubic-bezier(0.4,0,0.2,1)',
    },
    '@tabletS': { fontSize: '6.4em', maxWidth: '5.2em' },
    '@tabletXS': { fontSize: '5.4em', maxWidth: '5.25em' },
    '@mobileL': { fontSize: '3.9em', maxWidth: '5.35em' },
    '@mobileM': { fontSize: '3.4em', maxWidth: '5.4em' },
    onRender: (el) => {
      if (el.__titleRevealInit) return
      el.__titleRevealInit = true
      if (typeof window === 'undefined') return
      const node = el.node
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.style.opacity = '1'
            node.style.transform = 'translateY(0)'
            node.style.filter = 'blur(0)'
          }
        })
      }, { threshold: 0.4 })
      io.observe(node)
    },
  },

  Content: {
    extends: 'Box',
    attr: { id: 'services', 'data-el': 'service-content' },
    width: '100%',
    position: 'sticky',
    top: '7em',
    zIndex: '10',
    overflow: 'hidden',
    marginTop: '1.6em',
    style: {
      height: 'calc(100vh - 10em)',
      borderRadius: '2.6em',
      border: '1px solid rgba(255, 241, 227, 0.15)',
    },
    ':before': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: '2',
      background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
      top: '0',
      right: '0',
      pointerEvents: 'none',
      style: { content: "''" },
    },

    Images: {
      extends: 'Box',
      position: 'absolute',
      width: '100%',
      height: '100%',
      style: {
        overflowY: 'auto',
        scrollbarWidth: 'none',
      },
      Img1: {
        extends: 'Box',
        width: '100%',
        height: '100%',
        style: {
          backgroundImage: "url('/IMAGE/media.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        },
      },
      Img2: {
        extends: 'Box',
        width: '100%',
        height: '100%',
        style: {
          backgroundImage: "url('/IMAGE/analytics.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        },
      },
      Img3: {
        extends: 'Box',
        width: '100%',
        height: '100%',
        style: {
          backgroundImage: "url('/IMAGE/web.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        },
      },
      Img4: {
        extends: 'Box',
        width: '100%',
        height: '100%',
        style: {
          backgroundImage: "url('/IMAGE/video.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        },
      },
    },

    ServiceCard: {
      extends: 'Box',
      attr: { 'data-el': 'service-card' },
      position: 'absolute',
      zIndex: '3',
      bottom: '1em',
      left: '1em',
      width: '25em',
      height: '15em',
      padding: '2.5em 2em 2em 2em',
      cursor: 'pointer',
      color: 'cream',
      style: {
        borderRadius: '2.6em',
        background: 'linear-gradient(140deg, rgba(224, 77, 77, .15), rgba(0, 0, 0, 0.2))',
        backdropFilter: 'blur(20px) saturate(1.1)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15), inset 0 0 0 0.08em rgba(255, 255, 255, 0.1)',
        transition: 'width 0.9s cubic-bezier(0.4,0,0.2,1), height 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.25,0.1,0.25,1)',
        willChange: 'transform',
      },
      ':hover': {
        style: {
          transform: 'perspective(1000px) translateY(-8px) rotateX(6deg) rotateY(-6deg)',
        },
      },
      '@tabletS': { height: '12em', padding: '1.5em', width: '20em' },
      '@mobileM': { height: '11em', padding: '1.5em', style: { borderRadius: '2em' } },
      '@mobileL': { bottom: '0.5em', left: '0.5em', width: 'calc(100% - 1em)' },

      Hgroup: {
        extends: 'Box',
        tag: 'hgroup',
        H3: {
          tag: 'h3',
          text: 'Social Media Marketing',
          fontSize: '2.5em',
          fontWeight: '900',
          maxWidth: '7.5em',
          lineHeight: '0.9em',
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          color: 'creamMuted',
          style: {
            fontFamily: "'Exo 2', sans-serif",
            transition: 'opacity 0.45s cubic-bezier(0.4,0,0.2,1), transform 0.45s cubic-bezier(0.4,0,0.2,1)',
          },
          '@tabletS': { fontSize: '2em' },
          '@mobileM': { fontSize: '1.7em' },
        },
        P: {
          tag: 'p',
          text: 'Content creation and advertising',
          fontSize: '1.15em',
          maxWidth: '12em',
          lineHeight: '1.1em',
          paddingTop: '1.6em',
          color: 'creamSubtle',
          style: {
            fontFamily: "'Exo 2', sans-serif",
            transition: 'opacity 0.45s cubic-bezier(0.4,0,0.2,1), transform 0.45s cubic-bezier(0.4,0,0.2,1)',
          },
        },
      },

      ServiceList: {
        extends: 'Flex',
        tag: 'ul',
        opacity: '0',
        pointerEvents: 'none',
        style: {
          listStyle: 'none',
          flexWrap: 'wrap',
          gap: '1em',
          padding: '9.2em 0.35em 4.8em 1.7em',
          margin: '0',
          position: 'absolute',
          inset: '0',
          overflowY: 'auto',
          overflowX: 'hidden',
          alignContent: 'flex-start',
          maxHeight: '0',
          boxSizing: 'border-box',
          scrollbarWidth: 'none',
          overscrollBehavior: 'contain',
          transition: 'opacity 0.35s ease, transform 0.35s ease, filter 0.35s ease, max-height 0.35s ease',
          transform: 'translateY(0.65em) scale(0.98)',
          filter: 'blur(3px)',
        },
      },

      ArrowBtn: {
        extends: 'Box',
        tag: 'button',
        position: 'absolute',
        bottom: '0.85em',
        right: '0.85em',
        width: '3.7em',
        height: '3.7em',
        round: '100%',
        cursor: 'pointer',
        zIndex: '10',
        overflow: 'hidden',
        style: {
          background: 'rgba(224, 77, 77, 0.95)',
          boxShadow: '0 10px 20px rgba(224, 77, 77, 0.35)',
        },
        flexAlign: 'center center',
        ArrowIcon: {
          tag: 'img',
          width: '1.5em',
          position: 'absolute',
          style: {
            inset: '0',
            margin: 'auto',
            transition: 'opacity 0.45s ease, transform 0.45s ease',
          },
          attr: { src: '/IMAGE/arrow.png', alt: '' },
        },
        CloseIcon: {
          tag: 'img',
          width: '1.85em',
          position: 'absolute',
          opacity: '0',
          style: {
            inset: '0',
            margin: 'auto',
            transition: 'opacity 0.45s ease, transform 0.45s ease',
            transform: 'rotate(180deg) scale(0.85)',
          },
          attr: { src: '/IMAGE/close.png', alt: '' },
        },
      },
    },
  },

  Dots: {
    extends: 'Flex',
    flow: 'y',
    gap: '0.9em',
    position: 'fixed',
    zIndex: '30',
    opacity: '0',
    pointerEvents: 'none',
    style: {
      transition: 'opacity 0.02s ease-in-out',
      top: '50%',
      left: '0',
      transform: 'translateY(-50%)',
      alignItems: 'center',
      width: 'fit-content',
    },
    '@mobileL': { flow: 'x' },
    Dot1: {
      extends: 'Box',
      tag: 'button',
      width: '0.9em',
      height: '0.9em',
      round: '100%',
      border: 'none',
      cursor: 'pointer',
      opacity: '0.8',
      style: {
        background: '#E44646',
        boxShadow: '0 0 0 0.12em rgba(228, 70, 70, 0.35)',
        transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1), background 0.25s cubic-bezier(0.4,0,0.2,1)',
      },
    },
    Dot2: {
      extends: 'Box',
      tag: 'button',
      width: '0.9em',
      height: '0.9em',
      round: '100%',
      border: 'none',
      cursor: 'pointer',
      opacity: '0.8',
      style: {
        background: 'rgba(255, 241, 227, 0.35)',
        boxShadow: 'inset 0 0 0 0.12em rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1), background 0.25s cubic-bezier(0.4,0,0.2,1)',
      },
    },
    Dot3: {
      extends: 'Box',
      tag: 'button',
      width: '0.9em',
      height: '0.9em',
      round: '100%',
      border: 'none',
      cursor: 'pointer',
      opacity: '0.8',
      style: {
        background: 'rgba(255, 241, 227, 0.35)',
        boxShadow: 'inset 0 0 0 0.12em rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1), background 0.25s cubic-bezier(0.4,0,0.2,1)',
      },
    },
    Dot4: {
      extends: 'Box',
      tag: 'button',
      width: '0.9em',
      height: '0.9em',
      round: '100%',
      border: 'none',
      cursor: 'pointer',
      opacity: '0.8',
      style: {
        background: 'rgba(255, 241, 227, 0.35)',
        boxShadow: 'inset 0 0 0 0.12em rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1), background 0.25s cubic-bezier(0.4,0,0.2,1)',
      },
    },
  },

  onRender: (el) => {
    if (el.__serviceInit) return
    el.__serviceInit = true
    if (typeof window === 'undefined') return

    const node = el.node
    const contentNode = node.querySelector('[data-el="service-content"]')
    const imagesNode = contentNode ? contentNode.firstElementChild : null
    const cardNode = contentNode ? contentNode.children[1] : null
    const dotsNode = node.lastElementChild
    const dots = dotsNode ? Array.from(dotsNode.children) : []
    const defaultData = [
      { title: 'Social Media Marketing', desc: 'Content creation and advertising' },
      { title: 'Google Analytics', desc: 'Full Google services support' },
      { title: 'Web Development', desc: 'Website building and management' },
      { title: 'Video Production', desc: 'Full photo/video production' },
    ]
    const serviceKeys = ['socialMediaMarketing', 'googleAnalytics', 'webDevelopment', 'videoProduction']
    const defaultServiceContent = {
      socialMediaMarketing: [
        'Social Media Strategy', 'Content Planning & Calendar', 'Visual & Copy Content Creation',
        'Social Media Management', 'Targeted Ad Campaigns', 'Audience Analysis & Segmentation',
        'Brand Voice & Style Development', 'Performance Analytics & Reporting', 'Social Media Audit',
        'Engagement Growth', 'Influencer Marketing', 'Campaign Optimization',
      ],
      googleAnalytics: [
        'Google Analytics Setup & Monitoring', 'Keyword Research', 'On-Page SEO',
        'Off-Page SEO / Link Building', 'Technical SEO Audit', 'Local SEO Optimization',
        'Competitor Analysis', 'Content Optimization', 'SEO Reporting & Insights',
        'Google Ads Campaign Setup', 'Search Campaign Optimization', 'Display Ads Management',
      ],
      webDevelopment: [
        'Website Planning & Strategy', 'UI/UX Design', 'Front-End Development',
        'Back-End Development', 'CMS Development', 'E-Commerce Solutions',
        'SEO & Optimization', 'Maintenance & Support', 'Specialized Web Solutions',
      ],
      videoProduction: [
        'Social-first videos (Reels, Shorts, TikTok)', 'Commercial / Ad video',
        'Corporate / Brand video', 'Product video', 'Medical / Healthcare videos',
        'Construction / Industrial videos', 'Aerial videography', 'Video content strategy',
        'Video ad media planning (Meta, YouTube, TikTok)',
      ],
    }

    let activeIndex = 0
    let isCardActive = false
    let scrollTicking = false

    // Card elements
    const listNode = cardNode ? cardNode.querySelector('ul') : null
    const hgroupNode = cardNode ? cardNode.querySelector('hgroup') : null
    const arrowIcon = cardNode ? cardNode.querySelector('[src*="arrow"]') : null
    const closeIcon = cardNode ? cardNode.querySelector('[src*="close"]') : null

    const renderServiceList = (index) => {
      if (!listNode) return
      const key = serviceKeys[index]
      const details = (window.__serviceContent && window.__serviceContent[key]) || defaultServiceContent[key] || []
      listNode.innerHTML = details.map((text) =>
        `<li style="line-height:1.1em;padding:1em 1.3em;border-radius:3em;background:rgba(0,0,0,0.5);opacity:0;transform:translateY(0.35em) scale(0.88);filter:blur(1.5px);transition:opacity 0.3s ease,transform 0.38s cubic-bezier(0.22,1,0.36,1),filter 0.28s ease;color:rgba(255,241,227,0.85);font-size:inherit">${text}</li>`
      ).join('')
    }

    const showListItems = () => {
      if (!listNode) return
      const items = listNode.querySelectorAll('li')
      items.forEach((li, i) => {
        setTimeout(() => {
          li.style.opacity = '1'
          li.style.transform = 'translateY(0) scale(1)'
          li.style.filter = 'blur(0)'
        }, 550 + i * 50)
      })
    }

    const setCardActive = (active) => {
      if (!cardNode) return
      isCardActive = active
      if (active) {
        renderServiceList(activeIndex)
        cardNode.classList.add('card-active')
        // Expand card
        cardNode.style.width = 'calc(100% - 2em)'
        cardNode.style.height = 'calc(100% - 2em)'
        cardNode.style.overflow = 'hidden'
        cardNode.style.display = 'flex'
        cardNode.style.flexDirection = 'column'
        cardNode.style.paddingTop = '0'
        cardNode.style.paddingBottom = '0'
        cardNode.style.boxShadow = '0 30px 70px rgba(0, 0, 0, 0.2)'
        // Hgroup becomes absolute header
        if (hgroupNode) {
          hgroupNode.style.position = 'absolute'
          hgroupNode.style.top = '1.55em'
          hgroupNode.style.left = '1.7em'
          hgroupNode.style.right = '5.2em'
          hgroupNode.style.zIndex = '5'
          hgroupNode.style.pointerEvents = 'none'
          const h3 = hgroupNode.querySelector('h3')
          const p = hgroupNode.querySelector('p')
          if (h3) {
            h3.style.transform = 'scale(0.7)'
            h3.style.transformOrigin = 'top left'
          }
          if (p) {
            p.style.opacity = '0'
            p.style.transform = 'translateY(0.5em)'
          }
        }
        // Show list
        if (listNode) {
          listNode.style.opacity = '1'
          listNode.style.transform = 'translateY(0) scale(1)'
          listNode.style.filter = 'blur(0)'
          listNode.style.pointerEvents = 'auto'
          listNode.style.maxHeight = 'none'
        }
        // Swap icons
        if (arrowIcon) {
          arrowIcon.style.opacity = '0'
          arrowIcon.style.transform = 'rotate(-180deg) scale(0.85)'
        }
        if (closeIcon) {
          closeIcon.style.opacity = '1'
          closeIcon.style.transform = 'rotate(180deg) scale(1)'
        }
        // Lock page scroll (preserve position)
        const scrollY = window.scrollY
        document.body.style.position = 'fixed'
        document.body.style.top = `-${scrollY}px`
        document.body.style.left = '0'
        document.body.style.right = '0'
        document.body.dataset.scrollLockY = scrollY
        // Show list items with staggered delay
        showListItems()
      } else {
        // Collapse card - restore defaults
        cardNode.classList.remove('card-active')
        cardNode.style.width = ''
        cardNode.style.height = ''
        cardNode.style.overflow = ''
        cardNode.style.display = ''
        cardNode.style.flexDirection = ''
        cardNode.style.paddingTop = ''
        cardNode.style.paddingBottom = ''
        cardNode.style.boxShadow = ''
        if (hgroupNode) {
          hgroupNode.style.position = ''
          hgroupNode.style.top = ''
          hgroupNode.style.left = ''
          hgroupNode.style.right = ''
          hgroupNode.style.zIndex = ''
          hgroupNode.style.pointerEvents = ''
          const h3 = hgroupNode.querySelector('h3')
          const p = hgroupNode.querySelector('p')
          if (h3) {
            h3.style.transform = ''
            h3.style.transformOrigin = ''
          }
          if (p) {
            p.style.opacity = ''
            p.style.transform = ''
          }
        }
        // Hide list
        if (listNode) {
          listNode.style.opacity = '0'
          listNode.style.transform = 'translateY(0.65em) scale(0.98)'
          listNode.style.filter = 'blur(3px)'
          listNode.style.pointerEvents = 'none'
          listNode.style.maxHeight = '0'
        }
        // Restore icons
        if (arrowIcon) {
          arrowIcon.style.opacity = '1'
          arrowIcon.style.transform = 'rotate(0deg) scale(1)'
        }
        if (closeIcon) {
          closeIcon.style.opacity = '0'
          closeIcon.style.transform = 'rotate(180deg) scale(0.85)'
        }
        // Unlock page scroll (restore position)
        const savedY = parseInt(document.body.dataset.scrollLockY || '0', 10)
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        window.scrollTo(0, savedY)
      }
    }

    // Card click handler
    if (cardNode) {
      cardNode.addEventListener('click', (e) => {
        // Don't collapse when clicking inside the list
        if (e.target.closest('ul')) return
        setCardActive(!isCardActive)
      })
    }

    const setActiveIndex = (index) => {
      if (index === activeIndex) return
      activeIndex = index
      const serviceData = window.__serviceItems || defaultData
      if (cardNode) {
        const h3 = cardNode.querySelector('h3')
        const p = cardNode.querySelector('hgroup p, p')
        if (h3) h3.textContent = serviceData[index].title
        if (p) p.textContent = serviceData[index].desc
      }
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.style.background = '#E44646'
          dot.style.boxShadow = '0 0 0 0.12em rgba(228, 70, 70, 0.35)'
        } else {
          dot.style.background = 'rgba(255, 241, 227, 0.35)'
          dot.style.boxShadow = 'inset 0 0 0 0.12em rgba(0, 0, 0, 0.2)'
        }
      })
      if (imagesNode) {
        const imageHeight = imagesNode.clientHeight
        imagesNode.scrollTo({ top: imageHeight * index, behavior: 'smooth' })
      }
      // Update list content if card is active
      if (isCardActive) {
        renderServiceList(index)
        showListItems()
      }
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => setActiveIndex(i))
    })

    const handleScroll = () => {
      if (!contentNode || !node) return
      if (isCardActive) return
      const sectionTop = node.offsetTop
      const sectionHeight = node.offsetHeight
      const viewportH = window.innerHeight
      const scrollY = window.scrollY || window.pageYOffset
      const contentRect = contentNode.getBoundingClientRect()
      const contentTopOffset = parseFloat(getComputedStyle(contentNode).top) || 0
      const contentAtTop = contentRect.top <= contentTopOffset + 2
      const sectionStart = sectionTop - contentTopOffset
      const sectionEnd = sectionTop + sectionHeight - viewportH - contentTopOffset
      const inSection = scrollY >= sectionStart && scrollY <= sectionEnd
      const showDots = inSection && contentAtTop
      if (dotsNode) {
        dotsNode.style.transition = showDots ? 'opacity 2s ease-in-out' : 'opacity 0.02s ease-in-out'
        dotsNode.style.opacity = showDots ? '1' : '0'
        dotsNode.style.pointerEvents = showDots ? 'auto' : 'none'
      }
      // Update content height based on viewport
      if (contentNode) {
        const vh = window.innerHeight
        if (vh >= 1400) {
          contentNode.style.height = 'calc(100vh - 25em)'
          contentNode.style.top = '11em'
        } else if (vh >= 1200) {
          contentNode.style.height = 'calc(100vh - 20em)'
          contentNode.style.top = '10em'
        } else if (vh >= 1024) {
          contentNode.style.height = 'calc(100vh - 18em)'
          contentNode.style.top = '9em'
        } else if (vh >= 900) {
          contentNode.style.height = 'calc(100vh - 13.5em)'
          contentNode.style.top = '6.5em'
        } else if (vh >= 650) {
          contentNode.style.height = 'calc(100vh - 12em)'
          contentNode.style.top = '5.5em'
        } else if (vh >= 500) {
          contentNode.style.height = 'calc(100vh - 11em)'
          contentNode.style.top = '5.5em'
        }
      }
      const buffer = viewportH * 0.25
      const progressStart = sectionTop + buffer
      const progressEnd = sectionTop + sectionHeight - viewportH - buffer
      const denom = progressEnd - progressStart
      if (denom <= 0) return
      const progress = Math.min(1, Math.max(0, (scrollY - progressStart) / denom))
      const index = Math.min(3, Math.max(0, Math.floor(progress * 4)))
      setActiveIndex(index)
      if (imagesNode) {
        const maxScroll = imagesNode.scrollHeight - imagesNode.clientHeight
        imagesNode.scrollTop = maxScroll * progress
      }
    }

    const onScroll = () => {
      if (scrollTicking) return
      scrollTicking = true
      requestAnimationFrame(() => {
        scrollTicking = false
        handleScroll()
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()
  },
}
