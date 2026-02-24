// 1) Bind menu button open/close behavior.
// 2) Keep menu state synchronized with ARIA attributes.
// 3) Auto-close on link click, Escape, and desktop resize.
export function navbarToggle() {
  const navBar = document.querySelector(".navBar");
  const menuButton = document.querySelector(".menuButton");
  const langContent = document.querySelector(".lang-content");

  if (!navBar || !menuButton) return;

  // Lock page scrolling whenever mobile nav is open.
  const applyPageScrollLock = () => {
    const body = document.body;
    const html = document.documentElement;
    if (!body || !html) return;
    const navLock = body.dataset.navScrollLock === "1";
    const serviceLock = body.dataset.serviceScrollLock === "1";
    const shouldLock = navLock || serviceLock;
    body.classList.toggle("page-scroll-locked", shouldLock);
    html.classList.toggle("page-scroll-locked", shouldLock);
  };

  // Keep navbar animation mode enabled.
  const applyAnimationMode = () => {
    navBar.classList.add("animation-two");
  };
  applyAnimationMode();

  // Reset mobile menu visual/open state.
  const closeMenu = () => {
    navBar.classList.remove("is-open");
    menuButton.classList.remove("is-active");
    menuButton.setAttribute("aria-expanded", "false");
    if (langContent) langContent.style.zIndex = "";
    if (document.body) document.body.dataset.navScrollLock = "0";
    applyPageScrollLock();
  };

  // Toggle mobile menu and synchronize ARIA state.
  const toggleMenu = () => {
    const isOpen = navBar.classList.toggle("is-open");
    menuButton.classList.toggle("is-active", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    if (langContent) langContent.style.zIndex = isOpen ? "15" : "";
    if (document.body) document.body.dataset.navScrollLock = isOpen ? "1" : "0";
    applyPageScrollLock();
    if (isOpen && typeof window.__stopSmoothScroll === "function") {
      window.__stopSmoothScroll();
    }
  };

  menuButton.setAttribute("type", "button");
  menuButton.setAttribute("aria-label", "Toggle navigation");
  menuButton.setAttribute("aria-expanded", "false");
  if (document.body) {
    document.body.dataset.navScrollLock = "0";
    applyPageScrollLock();
  }

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
    applyAnimationMode();
    closeMenu();
  });
}

