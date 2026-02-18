import { render } from "./JS/render.js";
import { languageSwitcher } from "./JS/languageSwitcher.js";
import { scrollSwitcher } from "./JS/scrollSwitcher.js";
import { navbarToggle } from "./JS/navbarToggle.js";
import { navbarScrollLinks } from "./JS/navbarScrollLinks.js";
import { pageSmoothScroll } from "./JS/pageSmoothScroll.js";
import { oneTimeScrollReveal } from "./JS/oneTimeScrollReveal.js";
import { scrollOverlayShade } from "./JS/scrollOverlayShade.js";
import { ongoingScrollMotion } from "./JS/ongoingScrollMotion.js";
import { scrollParallax } from "./JS/scrollParallax.js";
import { textWave } from "./JS/textWave.js";
import { bannerAnimations } from "./JS/bannerAnimations.js";
import { loadingIntro } from "./JS/loadingIntro.js";
import { circleRotation } from "./JS/circleRotation.js";
import { depthCarousel } from "./JS/depthCarousel.js";
import { scrollDepth } from "./JS/scrollDepth.js";
import { infiniteCarousel } from "./JS/infiniteCarousel.js";

// Always start at top on refresh
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Render localized/static content into the page.
render();

// Ensure initial viewport starts from top.
window.scrollTo(0, 0);

// Initialize language switch buttons and re-render on selection.
languageSwitcher();


// Initialize mobile navbar toggle and close behaviors.
navbarToggle();

// Initialize navbar link scrolling to mapped section anchors.
navbarScrollLinks();


// Initialize scroll-synced service/content switching.
scrollSwitcher();

// Enable smooth wheel-based page scrolling.
pageSmoothScroll();

// Reveal title/component elements once when they enter viewport.
oneTimeScrollReveal();

// Apply banner title movement and wave-ready animation state.
bannerAnimations();

// Run initial branded loading/intro sequence.
loadingIntro();

// Apply circular steps rotation tied to scroll progress.
circleRotation();

// Update global overlay shade across sections on scroll.
scrollOverlayShade();

// Initialize team card depth carousel navigation/animation.
depthCarousel();

// Feed team depth intensity from section scroll position.
scrollDepth();

// Start infinite testimonial carousel loop and focus syncing.
infiniteCarousel();

// Apply footer image parallax and glow response.
scrollParallax();

// Activate footer text wave effect on visibility.
textWave();

// Apply continuous heading swim motion during scrolling.
ongoingScrollMotion();
