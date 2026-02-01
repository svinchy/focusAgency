import { content } from "./data.js";
import { getLanguage } from "./languageSwitcher.js";

// Render function: updates all sections
export function render() {
  const lang = getLanguage();

  // Navbar
  const navLinks = document.querySelectorAll(".navBar a");
  const navKeys = ["service", "about", "contact"];
  navLinks.forEach((el, i) => {
    el.textContent = content.navbar[lang][navKeys[i]];
  });

  // Banner
  document.querySelector("[data-banner='subtitle']").textContent = content.banner[lang].subtitle;
  document.querySelector("[data-banner='title']").textContent = content.banner[lang].title;
}
