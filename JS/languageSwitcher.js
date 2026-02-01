// Language switcher is reusable and independent module

let currentLang = localStorage.getItem("lang") || "en";

export function getLanguage() {
  return currentLang;
}

export function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", currentLang);
}