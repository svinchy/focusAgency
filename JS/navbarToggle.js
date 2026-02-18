// 1) Bind menu button open/close behavior.
// 2) Keep menu state synchronized with ARIA attributes.
// 3) Auto-close on link click, Escape, and desktop resize.
export function navbarToggle() {
  const navBar = document.querySelector(".navBar");
  const menuButton = document.querySelector(".menuButton");

  if (!navBar || !menuButton) return;

  // Reset mobile menu visual/open state.
  const closeMenu = () => {
    navBar.classList.remove("is-open");
    menuButton.classList.remove("is-active");
    menuButton.setAttribute("aria-expanded", "false");
  };

  // Toggle mobile menu and synchronize ARIA state.
  const toggleMenu = () => {
    const isOpen = navBar.classList.toggle("is-open");
    menuButton.classList.toggle("is-active", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  };

  menuButton.setAttribute("type", "button");
  menuButton.setAttribute("aria-label", "Toggle navigation");
  menuButton.setAttribute("aria-expanded", "false");

  menuButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  // Close mobile menu when any nav link is clicked.
  navBar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if ((window.innerWidth || 0) > 1194) closeMenu();
  });
}
