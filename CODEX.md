# Codex Instructions — focusAgency

## Overview

This project is a **fully migrated** Symbols/DOMQL v3 template — originally a vanilla HTML/CSS/JS digital agency landing page (`focusAgency-html/`), now running on the Symbols.app framework.

**Owner:** tmr | **Key:** focusagency | **Stack:** smbls ^3.8.8, Parcel 2.12.0
**Dev server:** `npm start` → http://localhost:1234 | **Build:** `npm run build`

---

## MCP Server

```json
{
  "mcpServers": {
    "symbols-mcp": {
      "command": "uvx",
      "args": ["symbols-mcp"]
    }
  }
}
```

**Always call `get_project_rules` before any code generation task.**

Tools: `search_symbols_docs`, `get_sdk_reference`, `get_project_rules`, `audit_component`, `generate_component`, `generate_page`, `convert_html`, `convert_react`.

---

## Critical Rules (violations cause black page / silent failures)

1. **Components are OBJECTS** — never functions: `export const X = { padding: 'A' }`
2. **NO imports between project files** — reference components by PascalCase key in tree
3. **`components/index.js`** — `export *` NOT `export * as` (breaks resolution)
4. **Pages extend `'Page'`** — not `'Flex'` or `'Box'`
5. **v3 syntax only** — `extends` (not `extend`), `childExtends` (not `childExtend`), `onClick` (not `on: { click }`), props flat (no `props: {}`)
6. **`childExtends`** — must be a named component string, never inline object
7. **`align`** not `flexAlign` for Flex shorthand (v3 rule)
8. **State** — `s.update({})`, never mutate directly
9. **Icons** — use `Icon` component (extends `Svg`), store SVGs in `designSystem.icons`
10. **Color tokens** — NO opacity modifier (`color: 'white .7'` is invalid)
11. **Border** — split into `borderWidth`, `borderStyle`, `borderColor`
12. **Flat folders** — no subfolders inside `components/`, `pages/`, `functions/`
13. **`el.call('fn', arg)`** — `this` is the element inside the function
14. **Design system keys** — always lowercase (`color`, `theme`, `typography` — never `COLOR`, `THEME`)
15. **No extends needed** for Text/Box/Flex — use `flow: 'x'` or `flow: 'y'` instead of `extends: 'Flex'`

---

## Project Structure

```
focusAgency/
├── index.js              # Entry: import { create } from 'smbls'; create(context)
├── context.js            # Wires state, components, pages, designSystem, files, config
├── config.js             # useReset, useVariable, useFontImport, useDocumentTheme, globalTheme: "dark"
├── state.js              # Empty (all state is DOM-based / localStorage)
├── dependencies.js       # Empty
├── symbols.json          # { owner: "tmr", key: "focusagency", bundler: "parcel", port: 1234 }
├── package.json          # smbls ^3.8.8, @supabase/supabase-js, parcel ^2.12.0
├── components/           # 52 components (flat)
├── pages/                # SPA: { '/': main } — main.js is 1317 lines
├── functions/            # 22 functions (flat)
├── designSystem/         # 17 modules
└── files/                # 47 embedded base64 assets (fonts + images)
```

---

## HTML → Symbols Complete Mapping

### HTML Source Structure (`focusAgency-html/index.html`)

The original HTML has this DOM tree. Every element has been migrated to `pages/main.js`.

```
<body class="themeDocument">
  ├── .logo > span "F"                          → Logo { Span: { text: 'F' } }
  ├── .corner                                   → Corner
  ├── .corner.corner2                            → Corner_2 { extends: 'Corner2' }
  ├── button.menuButton > div + div              → Button { extends: 'MenuButton', Div, Div_1 }
  ├── .langButton > button[ka] + button[en]      → LangButton { Button: LangBtn, Button_1: LangBtn }
  ├── button.chatButton#open-chat-btn > span     → Button_5 { extends: 'ChatButton' }
  ├── .chatPanelOverlay#crisp-chat-overlay        → ChatPanelOverlay { Section > Iframe }
  │
  └── .lang-content                               → LangContent
      ├── .starsBg                                → StarsBg
      ├── .overlay                                → Overlay
      ├── .overlay_2                              → Overlay2
      ├── .globeFrame > img.globe                 → GlobeFrame { Img }
      ├── nav.navBar > a×3                        → Nav { extends: 'NavBar', Link×3 extends NavLink }
      │
      ├── section.banner                          → Section (banner)
      │   └── hgroup.bannerTitle                  → Hgroup
      │       ├── h1[data-banner=title]           → H1
      │       └── h4[data-banner=subtitle]        → H4
      │
      ├── section.services                        → Section_6 (services)
      │   ├── h2.section-title                    → H2
      │   ├── .content#services                   → Content
      │   │   ├── .images > .image×4              → Images { Image×4 }
      │   │   └── .service                        → Service
      │   │       ├── hgroup > h3 + p             → Hgroup { H3, P }
      │   │       ├── ul.service-content           → UL
      │   │       └── button > img×2              → Button { Img (arrow), Img_1 (close) }
      │   └── nav.navigationDots > button.dot×4   → Nav { Button×4 extends NavDot }
      │
      ├── section.steps                           → Section_7 (steps)
      │   ├── h2 "Flow to Work"                  → H2
      │   └── .circle                             → Circle
      │       ├── .dot.dot1 > hgroup > h3 + p    → Dot { Hgroup { H3: '01', P } }
      │       ├── .dot.dot2 > hgroup > h3 + p    → Dot_1 { Hgroup { H3: '02', P } }
      │       └── .dot.dot3 > hgroup > h3 + p    → Dot_2 { Hgroup { H3: '03', P } }
      │
      ├── section.team                            → Section_8 (team)
      │   ├── h2 "Our Team"                      → H2
      │   ├── .contents#about                     → Contents
      │   │   └── .teamMember×4                   → TeamMember×4
      │   │       ├── h6 (role)                   → H6
      │   │       ├── h5 (name)                   → H5
      │   │       ├── img (photo)                 → Img
      │   │       └── nav.socialLinks > a×2       → Nav { Link: fb, Link_1: linkedin }
      │   ├── .navArrows > button.prev + .next    → NavArrows { Button (prev), Button_1 (next) }
      │   └── button.more "know us better"        → Button (more)
      │
      ├── section.testimonial                     → Section_9 (testimonial)
      │   ├── .title > img + h3                   → Title { Img (quotation-mark), H3 }
      │   └── .testimonialContent                 → TestimonialContent
      │       ├── .messages > p×7                 → Messages { P×7 with data-author }
      │       └── .focus                          → Focus
      │           ├── .focusCorner×4              → FocusCorner×4
      │           └── h5 (author name)            → H5
      │
      └── footer                                  → Footer
          ├── h2 "focus agency"                   → H2
          ├── form#contact                        → Form
          │   ├── legend                          → Legend
          │   ├── input[name] + input[email]      → Input, Input_2
          │   ├── textarea[message]               → Textarea
          │   ├── button[submit]                  → Button
          │   └── p#contact-status                → P
          ├── .contact                            → Contact
          │   ├── h5 + p (phone)                  → H5, P
          │   ├── h5 + p (email)                  → H5_2, P_3
          │   ├── h5 (social label)               → H5_4
          │   └── nav.socialLinks > a×2           → Nav { Link: fb, Link_1: instagram }
          ├── .address                            → Address
          │   ├── hgroup > h5 + p > span×2        → Hgroup { H5, P { Span, Span_1 } }
          │   ├── img (street.webp)               → Img
          │   └── img (street2.webp)              → Img_2
          └── p (agency description)              → P (wave text animation)
```

---

## CSS → Components Mapping

### Original CSS Files → Migrated Locations

| HTML CSS File | Symbols Location | Notes |
|---|---|---|
| `reset.css` | `designSystem/reset.js` | 109 lines of CSS reset rules |
| `designSystem.css` | `designSystem/color.js`, `font.js`, `vars.js`, `typography.js`, `timing.js`, `shape.js`, `theme.js` | Split into separate modules |
| `style.css` | Split across components + `appInit.js` injected CSS | Fixed positioning, responsive |
| `COMPONENT_CSS/logo.css` | `components/Logo.js` | Fixed logo with red dot `::after` |
| `COMPONENT_CSS/navBar.css` | `components/NavBar.js` + `components/NavLink.js` | Desktop + mobile overlay |
| `COMPONENT_CSS/bannerTitle.css` | Inline in `pages/main.js` banner Hgroup | Wave animation classes |
| `COMPONENT_CSS/langButton.css` | `components/LangButton.js` + inline in `pages/main.js` | Rotated buttons |
| `COMPONENT_CSS/chatButton.css` | `components/ChatButton.js` + `components/ChatPanelOverlay.js` | Chat UI |
| `COMPONENT_CSS/corner.css` | `components/Corner.js` | Two corners with pseudo-elements |
| `COMPONENT_CSS/globe.css` | `components/GlobeFrame.js` | Globe rotation animation |
| `COMPONENT_CSS/service.css` | `components/Service.js` + inline in `pages/main.js` | Glassmorphism cards |
| `COMPONENT_CSS/navigationDots.css` | `components/NavDot.js` + inline in `pages/main.js` | Dot indicators |
| `COMPONENT_CSS/circle.css` | `components/Circle.js` + `components/Dot.js` | Steps circle |
| `COMPONENT_CSS/teamMember.css` | `components/TeamMember.js` | 3D carousel cards |
| `COMPONENT_CSS/focus.css` | `components/Focus.js` + `components/FocusCorner.js` | Testimonial frame |
| `COMPONENT_CSS/socialLinks.css` | Inline in `TeamMember.js` Nav + `pages/main.js` footer Nav | Social icons |
| `COMPONENT_CSS/navArrows.css` | `components/NavArrows.js` + `components/Button4.js` | Prev/next buttons |
| `COMPONENT_CSS/form.css` | Inline in `pages/main.js` Footer Form | Form inputs |
| `COMPONENT_CSS/menuButton.css` | `components/MenuButton.js` | Hamburger menu |
| `SECTION_CSS/langContent.css` | `components/LangContent.js` + `components/StarsBg.js` + `components/Overlay.js` + `appInit.js` CSS | Main wrapper |
| `SECTION_CSS/banner.css` | Inline in `pages/main.js` Section (banner) | Hero section |
| `SECTION_CSS/services.css` | Inline in `pages/main.js` Section_6 | Sticky scroll section |
| `SECTION_CSS/steps.css` | Inline in `pages/main.js` Section_7 | Circle animation |
| `SECTION_CSS/team.css` | Inline in `pages/main.js` Section_8 | Carousel section |
| `SECTION_CSS/testimonial.css` | `components/Messages.js` + `components/TestimonialContent.js` + inline in `pages/main.js` | Infinite scroll |
| `SECTION_CSS/footer.css` | `components/Footer.js` + inline in `pages/main.js` Footer | Contact section |
| `ANIMATION_CSS/intro.css` | `designSystem/animation.js` keyframes + `appInit.js` injected CSS | Intro sequence |
| `ANIMATION_CSS/bannerIntro.css` | `designSystem/animation.js` keyframes + `appInit.js` CSS | Banner title animations |
| `mobilePerformance.css` | `appInit.js` injected CSS + component `@media` rules | Performance optimizations |

---

## JS → Functions Mapping

| HTML JS File | Symbols Function | Notes |
|---|---|---|
| `JS/appInit.js` | `functions/appInit.js` | Bootstrap + CSS injection + content data |
| `JS/appFlags.js` | `functions/appFlags.js` | Safari/mobile/reduced-motion detection |
| `JS/viewportMetrics.js` | `functions/viewportMetrics.js` | Viewport CSS variables sync |
| `JS/render.js` | `functions/render.js` | Content rendering for all sections |
| `JS/languageSwitcher.js` | `functions/languageSwitcher.js` | EN/KA toggle with localStorage |
| `JS/navbarToggle.js` | `functions/navbarToggle.js` | Mobile menu open/close |
| `JS/navbarScrollLinks.js` | `functions/navbarScrollLinks.js` | Smooth scroll navigation |
| `JS/contactForm.js` | `functions/contactForm.js` | Form submission (Formspree) |
| `JS/bannerAnimations.js` | `functions/bannerAnimations.js` | Parallax + wave animation |
| `JS/circleRotation.js` | `functions/circleRotation.js` | Steps circle scroll rotation |
| `JS/depthCarousel.js` | `functions/depthCarousel.js` | Team 3D carousel |
| `JS/infiniteCarousel.js` | `functions/infiniteCarousel.js` | Testimonials infinite scroll |
| `JS/scrollSwitcher.js` | `functions/scrollSwitcher.js` | Service sticky scroll carousel |
| `JS/loadingIntro.js` | `functions/loadingIntro.js` | Intro animation timeline |
| `JS/oneTimeScrollReveal.js` | `functions/oneTimeScrollReveal.js` | Scroll reveal animations |
| `JS/scrollDepth.js` | `functions/scrollDepth.js` | Team section scroll progress |
| `JS/scrollParallax.js` | `functions/scrollParallax.js` | Footer image parallax |
| `JS/scrollOverlayShade.js` | `functions/scrollOverlayShade.js` | Overlay opacity on scroll |
| `JS/ongoingScrollMotion.js` | `functions/ongoingScrollMotion.js` | Heading swim effect |
| `JS/textWave.js` | `functions/textWave.js` | Footer text wave animation |
| `JS/introBoot.js` | Merged into `functions/loadingIntro.js` | Reduced motion check |
| `JS/nonCriticalBoot.js` | Merged into `appInit.js` onRender chain | Deferred effects |
| `JS/pageSmoothScroll.js` | Not migrated (handled by CSS scroll-behavior) | Optional enhancement |

---

## Content Data (Bilingual EN/KA)

All content is stored inline in `functions/appInit.js` (lines 96-166) and set to `window.__focusContent`. The `render()` function reads it and populates all DOM elements by CSS class selectors.

### Content Structure
```js
window.__focusContent = {
  navbar: { en: { service, about, contact }, ka: {...} },
  banner: { en: { title: 'Focus Agency', subtitle: '...' }, ka: {...} },
  services: {
    en: { title: '...', items: [{ title, description, image }×4] },
    ka: {...}
  },
  serviceContent: {
    en: { socialMediaMarketing: [15 items], googleAnalytics: [15], webDevelopment: [9], videoProduction: [11] },
    ka: {...}
  },
  steps: { en: { title: 'Flow to Work', items: [{ number, title }×3] }, ka: {...} },
  team: { en: { title: 'Our Team', more: 'know us better', members: [{ role, name, image }×4] }, ka: {...} },
  testimonial: { en: { title: 'people talks', messages: [{ author, text }×7] }, ka: {...} },
  contact: {
    en: {
      brand: 'focus agency',
      form: { legend, namePlaceholder, emailPlaceholder, messagePlaceholder, submit },
      details: { phoneLabel, phone: '+995 595 893 399', emailLabel, email: 'gamarjoba@focusagency.ge', socialLabel },
      address: { title, line1: 'Tbilisi, Saburtalo', line2: 'Alexandre Khazbegi street N24 g' },
      paragraph: 'Our agency was founded with one main purpose...'
    },
    ka: {...}
  }
}
```

### Image File Keys (functions/images.js → files/)
```
globe.webp, stars5.webp, choni2.webp, liza2.webp, mariami2.webp, luka2.webp,
quotation-mark.png, facebook.png, instagram.png, linkedin.png,
arrow.png, arrowLeft.png, arrowRight.png, close.png, send.png,
media.webp, analytics.webp, web.webp, video.webp, street.webp, street2.webp
```

---

## Design System Reference

### Colors (`designSystem/color.js`)
```js
{ black: 'rgba(0, 0, 0, 1)', cream: 'rgba(255, 241, 227, 1)', red: 'rgba(224, 77, 77, 1)', grey: 'rgba(80, 78, 78, 1)', white: 'rgba(255, 255, 255, 1)' }
```

### Fonts (`designSystem/font.js`)
- **Exo 2** — English, weights 100-900, all embedded as base64
- **BPG Square Banner 2013** — Georgian body text
- **BPG Square Banner Caps 2013** — Georgian headings/caps

### Responsive Breakpoints (`designSystem/media.js`)
| Token | Query |
|---|---|
| `@tabletM` | `(max-width: 1180px), (hover: none) and (pointer: coarse)` |
| `@screenM` | `(max-width: 1680px)` |
| `@tabletL` | `(max-width: 1366px)` |
| `@tabletS` | `(max-width: 1024px)` |
| `@tabletXS` | `(max-width: 860px)` |
| `@tabletXSS` | `(max-width: 768px)` |
| `@mobileL` | `(max-width: 560px)` |
| `@mobileM` | `(max-width: 480px)` |
| `@mobileS` | `(max-width: 375px)` |
| `@mobileXS` | `(max-width: 350px)` |

### Timing (`designSystem/timing.js`)
```js
{ duration: { fast: '0.2s', med: '0.45s', slow: '0.9s' }, easing: { easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)', easeIo: 'cubic-bezier(0.4, 0, 0.2, 1)', easeSoft: 'cubic-bezier(0.22, 1, 0.36, 1)' } }
```

### Shape (`designSystem/shape.js`)
```js
{ borderRadius: { s: '0.8em', m: '1.6em', l: '2.6em', round: '999px', pill: '5em' } }
```

### Animations (`designSystem/animation.js` — 23 keyframes)
Stars: `starsFieldLoop`, `starsFieldLoopMobile`, `starsIntroSharp`, `starsTwinkle`
Globe: `rotateGlobe`, `globeIntroZoomOut`
Logo: `logoDotPulse`, `logoPulseStrong`, `logoMove`
Corners: `cornerPulseStrongLeft`, `cornerPulseStrongRight`, `cornerToBottomLeft`, `cornerToTopRight`
Banner: `bannerTitleIn`, `bannerSubtitleIn`, `bannerTitleWave`
Footer: `footerTextWave`
Testimonial: `messagePeakPulse`, `focusFramePulse`, `focusRingPulse`, `focusCornerFlash`, `focusNamePulse`
Misc: `quakeShake`

### CSS Variables (`designSystem/vars.js` — 32 vars)
Viewport: `--app-viewport-width`, `--app-viewport-height`, `--app-visual-viewport-height`
Safe areas: `--app-safe-top/right/bottom/left`, `--app-fixed-bottom-clearance`
Colors: `--black`, `--cream`, `--red`
Easing: `--ease-io`, `--ease-out`, `--ease-soft`
Timing: `--dur-fast`, `--dur-med`, `--dur-slow`
Typography: `--lh-tight`, `--lh-compact`, `--lh-body`, `--tracking-tight`, `--tracking-wide`
Fonts: `--font-en`, `--font-ka-body`, `--font-ka-cap`
Radius: `--radius-s`, `--radius-m`, `--radius-l`

### CSS Utility Classes (`designSystem/class.js`)
`introActive`, `pageScrollLocked`, `waveChar`, `waveWord`, `waveActive`, `waveCharFooter`, `teamReveal`, `teamRevealVisible`, `dataReveal`, `dataRevealVisible`, `serviceCard`

---

## Body State CSS Injection (`appInit.js`)

DOMQL cannot express ancestor selectors like `body.intro-active .logo` or `body[data-lang="ka"] .service h3`. These are injected as a `<style>` tag in `appInit.js` (~90 CSS rules). Categories:

### 1. Body Base Styles
- `body { background:#000; color:cream; font-family:var(--font-en); font-size:18px }`
- `@media(max-width:1680px) { body { font-size:16px } }`

### 2. Component Visibility Overrides
- `.menuButton { display:none }` → visible at ≤1180px
- `.navBar { gap:.5em }`, `.navBar a { font-weight:400 }`
- `.bannerTitle h1 { font-family:"Exo 2" }`
- `.teamMember h6 { font-family:inherit }`
- `footer { padding-bottom:calc(6em + var(--app-fixed-bottom-clearance)) }`
- `footer input/textarea::placeholder { color:rgba(255,241,227,.3) }`

### 3. Intro Animation States
- `body.intro-active .logo` — centered, transparent, z-1600
- `body.intro-reveal .logo` — cream color, pulse animation
- `body.intro-corners-move .logo` — logoMove animation
- `body.intro-active .corner/.corner2` — centered, hidden
- `body.intro-corners .corner/.corner2` — visible, pulse animation
- `body.intro-corners-move .corner/.corner2` — move to final positions
- `body::before/::after` — black overlay for intro
- `body.intro-overlay` — overlay visible
- `body.intro-fade` — overlay hidden
- `body.intro-active .globeFrame` — scaled up
- `body.intro-globe-zoom .globeFrame` — zoom out animation
- `body.intro-finished .globeFrame` — final position

### 4. Chat/Nav Open States
- `body.chat-panel-open` — hides corners, langButton, navBar, menuButton, logo
- `body.is-nav-open` — hides langButton, chatButton, corners at ≤1180px

### 5. Georgian Language Overrides (`body[data-lang="ka"]`)
- Body font: `var(--font-ka-body)`
- NavBar: gap .9em, BPG Square Banner Caps font, responsive sizes
- Banner H1: 6.5em → responsive scaling down to 2.6em at 320px
- Services H2: 7em → responsive scaling with wider max-width
- Service H3: BPG Square Banner Caps font
- Service P: wider max-width (13em)
- Steps dot P: wider min-width (12em)
- Team H2: line-height 1em
- TeamMember H6: BPG Square Banner Caps, adjusted padding
- Testimonial title img: extra margin-bottom
- Footer H2: keeps Exo 2 font

### 6. Mobile Chat Adjustments (≤560px)
- ChatButton repositioned with safe area offsets
- Chat panel: keyboard-aware iframe cropping

---

## Intro Animation Timeline (`functions/loadingIntro.js`)

```
0ms     body.intro-active + body.intro-overlay
1000ms  body.intro-reveal (logo appears with pulse)
1400ms  body.intro-corners (corners appear with pulse)
2600ms  body.intro-corners-move (logo + corners animate to final positions)
2670ms  body.intro-fade (overlay fades out)
2870ms  body.intro-globe-zoom (globe zooms from scaled to normal)
3990ms  body.intro-finished (cleanup, all intro classes removed)
4110ms  body.intro-banner (banner title + subtitle animate in)
         → then body.intro-complete (final state)
```

After intro completes, the function locks logo/corners to their final CSS positions and removes the animation states.

---

## Service Carousel Logic (`functions/scrollSwitcher.js` — 489 lines)

**Desktop (>1180px):**
- Services section gets `200vh * serviceCount` total height for sticky scroll
- Content panel is `position: sticky` at `top: 11em`
- Scroll progress maps to active service index
- Image carousel: absolute images, opacity/display transitions
- Navigation dots: fixed left center, synced with scroll position
- Service content (UL) populated dynamically from `serviceContent` data
- Expand/collapse: clicking service card toggles `.is-active` with scrollable content

**Mobile (≤1180px):**
- Static layout, no sticky positioning
- Images container: native scroll
- Service content: scrollable within card
- Dots: relative, horizontal row

---

## Team Carousel Logic (`functions/depthCarousel.js` — 115 lines)

- 4 members in circular 3D layout with `perspective: 1200px`
- Active member: `scale(1) translateZ(0)`, full opacity
- Inactive: `scale(0.86) translateZ(-40px)`, 0.55 opacity
- Prev/next buttons rotate through members
- `team-depth-change` custom event from `scrollDepth.js` drives parallax offset
- Each member has social links (facebook, linkedin) positioned top-right

---

## Testimonial Carousel Logic (`functions/infiniteCarousel.js` — 186 lines)

- Vertical infinite loop with seamless cloning
- Items scroll upward, syncing author name in Focus frame
- Active item gets `active` class → pulse animations trigger
- Focus frame has 4 corner indicators with flash animations
- `messagePeakPulse`, `focusFramePulse`, `focusRingPulse`, `focusCornerFlash` keyframes
- Mask gradient: fade top/bottom of Messages container

---

## Mobile Performance (`mobilePerformance.css` → `appInit.js` + components)

At `≤1180px` or `(hover: none) and (pointer: coarse)`:
- `backdrop-filter: none` on service cards, chatButton, navArrows, navBar
- Stars animation simplified to `starsFieldLoopMobile` (slower, less movement)
- Overlay_2 twinkle animation disabled
- Globe: simple `rotateGlobe 140s linear infinite`
- Testimonial mask-image disabled
- Service `::before` pseudo disabled, `::after` fallback shown
- Background attachment: scroll (not fixed)

---

## What's Complete

- All 52 components migrated to DOMQL v3 objects
- All 22 functions ported (1:1 with HTML JS modules)
- Full design system (colors, fonts, 23 animations, 11 breakpoints, 32 CSS vars)
- All 47 assets embedded as base64 modules in `files/`
- Complete bilingual content (EN/KA) inline in appInit
- Intro animation sequence with 8-step timeline
- Service sticky scroll carousel with dot navigation
- Team 3D depth carousel with parallax
- Testimonial infinite carousel with focus frame
- Chat integration (Crisp via iframe)
- Contact form (Formspree endpoint)
- Responsive design with 11 breakpoints
- Language switching with localStorage persistence
- Safari-specific fallbacks and font overrides
- Mobile performance optimizations

## What May Need Work

- Visual pixel-parity with HTML original (compare side-by-side at each breakpoint)
- `pageSmoothScroll.js` was not migrated (optional wheel scrolling enhancement)
- Performance: 47 base64 assets increase bundle size — could use CDN/external URLs
- SEO metadata (`<title>`, meta description, Open Graph tags)
- Accessibility audit (keyboard navigation, screen reader testing)
