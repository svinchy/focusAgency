// Button index → language code (DOMQL doesn't render data-* attributes)
const LANG_MAP = ['ka', 'en'];

const getLang = (btn, btns) => btn.dataset.lang || LANG_MAP[[...btns].indexOf(btn)] || 'en';

export const languageSwitcher = function languageSwitcher() {
  const buttons = document.querySelectorAll('.langButton button');
  const currentLang = localStorage.getItem('lang') || 'en';
  window.__focusLang = currentLang;

  buttons.forEach((btn) => {
    btn.classList.toggle('active', getLang(btn, buttons) === currentLang);
  });

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedLang = getLang(button, buttons);
      localStorage.setItem('lang', selectedLang);
      window.__focusLang = selectedLang;
      if (typeof window.__focusRender === 'function') window.__focusRender();
      buttons.forEach((btn) => {
        btn.classList.toggle('active', getLang(btn, buttons) === selectedLang);
      });
    });
  });
};
