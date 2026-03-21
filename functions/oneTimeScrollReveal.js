export const oneTimeScrollReveal = function oneTimeScrollReveal() {
  const targets = document.querySelectorAll('.services h2, .steps h2, .team h2, .testimonial h3, .services .content');
  if (!targets.length) return;
  if (typeof IntersectionObserver === 'undefined') {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });
  targets.forEach((el) => io.observe(el));
};
