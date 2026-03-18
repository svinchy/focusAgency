import { detectRuntimeFlags, applyRuntimeBodyClasses, enforceScrollRestoration } from "./appFlags.js";
import { initContactForm } from "./contactForm.js";
import { initIntro } from "./introBoot.js";
import { languageSwitcher } from "./languageSwitcher.js";
import { navbarScrollLinks } from "./navbarScrollLinks.js";
import { navbarToggle } from "./navbarToggle.js";
import { initNonCriticalBoot } from "./nonCriticalBoot.js";
import { oneTimeScrollReveal } from "./oneTimeScrollReveal.js";
import { render } from "./render.js";
import { scrollSwitcher } from "./scrollSwitcher.js";
import { initViewportMetrics } from "./viewportMetrics.js";

// 1) Prepare app environment and runtime flags.
// 2) Initialize critical UI/content modules immediately.
// 3) Start intro + deferred visual effects boot.
export function initApp() {
  enforceScrollRestoration();

  const flags = detectRuntimeFlags();
  applyRuntimeBodyClasses(flags);
  initViewportMetrics();

  render();
  window.scrollTo(0, 0);

  languageSwitcher();
  navbarToggle();
  navbarScrollLinks();
  scrollSwitcher();
  initContactForm();
  oneTimeScrollReveal();
  initIntro(flags.prefersReducedMotion);
  initNonCriticalBoot(flags);
}
