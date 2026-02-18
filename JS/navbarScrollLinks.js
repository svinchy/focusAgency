// 1) Read hash targets from navbar links.
// 2) Resolve target elements in the page.
// 3) Smooth-scroll to target on click.
export function navbarScrollLinks() {
  const navBar = document.querySelector(".navBar");
  if (!navBar) return;

  navBar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetSelector = link.getAttribute("href");
      if (!targetSelector || !targetSelector.startsWith("#")) return;

      const target = document.querySelector(targetSelector);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
      if (typeof window.__smoothScrollTo === "function") {
        window.__smoothScrollTo(top);
      } else {
        window.scrollTo({ top, left: 0, behavior: "smooth" });
      }
    });
  });
}
