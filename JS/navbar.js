// Make navbar clicks independent

export function initNavbar() {
  document.querySelectorAll(".navBar a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      // intentionally do nothing:
      // no render(), no language change, no side effects
    });
  });
}