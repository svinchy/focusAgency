import { content } from "./data.js";
import { getLanguage } from "./languageSwitcher.js";
import { refreshServiceContent } from "./serviceToggle.js";

let previousLang = getLanguage(); // track the last rendered language

export function render() {
  const lang = getLanguage();
  const container = document.querySelector(".lang-content");
  if (!container) return;

  // --- Check if language actually changed ---
  const applyTransition = lang !== previousLang;

  if (applyTransition) {
    // Fade out + slide down
    container.style.opacity = 0;
  }

  setTimeout(() => {
    // --- Update navbar ---
    const navLinks = document.querySelectorAll(".navBar a");
    const navKeys = ["service", "about", "contact"];
    navLinks.forEach((el, i) => {
      el.textContent = content.navbar[lang][navKeys[i]];
    });


    // --- Update banner ---
    const bannerTitle = document.querySelector(".bannerTitle h1");
    const bannerSubtitle = document.querySelector(".bannerTitle h4");
    if (bannerTitle) bannerTitle.textContent = content.banner[lang].title;
    if (bannerSubtitle) bannerSubtitle.textContent = content.banner[lang].subtitle;

    /* ---------- Services ---------- */
  const servicesTitle = document.querySelector("[data-services='title']");
  if (servicesTitle) {
    servicesTitle.textContent = content.services[lang].title;
  }
  refreshServiceContent();

    // --- Update body data-lang for font switching ---
    document.body.dataset.lang = lang;

    if (applyTransition) {
      // Fade in + slide up
      container.style.opacity = 1;
    }

    // Update previous language
    previousLang = lang;
  }, applyTransition ? 150 : 0);
}
