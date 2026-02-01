import { setLanguage, getLanguage } from "./JS/languageSwitcher.js";
import { render } from "./JS/render.js";

// Initial render on page load
render();

// Hook language buttons
document.querySelectorAll(".languageButton button").forEach(button => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
    render();
    updateActiveButton();
  });
});

// Optional: visually show active language
function updateActiveButton() {
  const currentLang = getLanguage();
  document.querySelectorAll(".langButton button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

// Initial active button
updateActiveButton();