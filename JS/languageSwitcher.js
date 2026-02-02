import { render } from "./render.js"

// JS/languageSwitcher.js
export function getLanguage() {
  return localStorage.getItem("lang") || "en";
}

export function setLanguage(lang) {
  localStorage.setItem("lang", lang);
}





// JS/languageSwitcher.js
export function initLanguageToggle() {
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


