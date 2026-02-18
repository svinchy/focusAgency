// 1) Reveal section titles when they enter viewport.
// 2) Reveal generic components marked for scroll entry.
export function oneTimeScrollReveal() {
  const titles = document.querySelectorAll(".section-title");
  const items = document.querySelectorAll(".reveal-on-scroll");
  if (!titles.length && !items.length) return;

  if (titles.length) {
    const titlesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.4 }
    );
    titles.forEach((el) => titlesObserver.observe(el));
  }

  if (items.length) {
    const itemsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.25 }
    );
    items.forEach((el) => itemsObserver.observe(el));
  }
}
