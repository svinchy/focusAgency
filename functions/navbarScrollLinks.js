export const navbarScrollLinks = function navbarScrollLinks() {
  const navLinks = document.querySelectorAll('.navBar a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2 + target.offsetHeight / 2;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    });
  });
};
