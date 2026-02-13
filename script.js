import { render } from "./JS/render.js";
import { initLanguageToggle } from "./JS/languageSwitcher.js";
import { initServiceToggle } from "./JS/serviceToggle.js";
import { initNavbar } from "./JS/navbar.js";
import { initSmoothScroll, initTitleReveal, initOverlayAfterSteps, initRevealOnScroll } from "./JS/pageScroll.js";
import { initBannerScroll } from "./JS/bannerScroll.js";
import { initIntroAnimation } from "./JS/introAnimation.js";
import { initStepsRotation } from "./JS/stepsRotate.js";
import { initTeamCarousel } from "./JS/teamCarousel.js";

// Always start at top on refresh
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

render();

window.scrollTo(0, 0);

initLanguageToggle();


initNavbar();


initServiceToggle();

initSmoothScroll();

initTitleReveal();
initRevealOnScroll();

initBannerScroll();

initIntroAnimation();

initStepsRotation();

initOverlayAfterSteps();

initTeamCarousel();
