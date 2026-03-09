import { render } from "./render.js"

// Read persisted language or fall back to English.
export function getLanguage() {
  return localStorage.getItem("lang") || "en";
}

// Persist selected language.
export function setLanguage(lang) {
  localStorage.setItem("lang", lang);
}

// 1) Read saved language.
// 2) Mark active language button.
// 3) Save language + render content when user switches.
export function languageSwitcher() {
  const buttons = document.querySelectorAll(".langButton button");
  const currentLang = getLanguage();

  // set initial active state
  buttons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedLang = button.dataset.lang;

      // only run render when language button is clicked
      setLanguage(selectedLang);
      render();  // updates text & fonts

      // toggle active state
      buttons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === selectedLang);
      });
    });
  });
}

