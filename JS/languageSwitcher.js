

import { render } from "./render.js"

// JS/languageSwitcher.js
export function getLanguage() {
  return localStorage.getItem("lang") || "en";
}

export function setLanguage(lang) {
  localStorage.setItem("lang", lang);
}

// initialize UI toggle inside same file
export function initLanguageToggle() {
  const buttons = document.querySelectorAll(".langButton button");
  const currentLang = getLanguage();

  buttons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedLang = button.dataset.lang;
      setLanguage(selectedLang);
      render(); // make sure render() is imported
      buttons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === selectedLang);
      });
    });
  });
}

