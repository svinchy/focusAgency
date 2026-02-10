import { render } from "./JS/render.js";
import { initLanguageToggle } from "./JS/languageSwitcher.js";
import { initServiceToggle } from "./JS/serviceToggle.js";
import { initNavbar } from "./JS/navbar.js";
import { initSmoothScroll, initTitleReveal } from "./JS/pageScroll.js";
import { initBannerScroll } from "./JS/bannerScroll.js";
import { initIntroAnimation } from "./JS/introAnimation.js";

// initial render
render();

 // set up buttons
initLanguageToggle();


// Make navbar clicks independent
initNavbar();


//service toggle
initServiceToggle();

initSmoothScroll();

initTitleReveal();

initBannerScroll();

initIntroAnimation();
