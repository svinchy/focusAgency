import { content } from "./data.js";
import { getLanguage } from "./languageSwitcher.js";

export function render() {
  const lang = getLanguage();
  const container = document.querySelector(".lang-content");
  if (!container) return;

  // --- Fade out and slide down ---
  container.style.opacity = 0;
  container.style.transform = "translateY(5px)"; // tiny downward nudge

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



    // --- Update body data-lang for font-family switching ---
    document.body.dataset.lang = lang;

    // --- Fade back in and slide to original position ---
    container.style.opacity = 1;
    container.style.transform = "translateY(0)";
  }, 150); // fade duration
}
