// content data is stored in window.__focusContent set by appInit
export const render = function render() {
  const content = window.__focusContent;
  if (!content) return;

  const lang = window.__focusLang || localStorage.getItem('lang') || 'en';
  const container = document.querySelector('.lang-content');
  const previousLang = window.__focusPreviousLang || lang;
  const applyTransition = lang !== previousLang;

  if (applyTransition && container) {
    container.style.opacity = '0';
  }

  const applyBannerWave = window.__applyBannerTitleWave;

  setTimeout(() => {
    // Navbar
    const navLinks = document.querySelectorAll('.navBar a');
    const navKeys = ['service', 'about', 'contact'];
    const forceSafariKa = document.body.classList.contains('is-safari') && lang === 'ka';
    navLinks.forEach((el, i) => {
      if (content.navbar[lang] && navKeys[i]) {
        el.textContent = content.navbar[lang][navKeys[i]];
      }
      if (forceSafariKa) {
        el.style.fontFamily = "'BPG Square Banner Caps 2013 Safari', 'BPG Square Banner Caps 2013', sans-serif";
        el.style.fontWeight = '400';
        el.style.textTransform = 'none';
      } else {
        el.style.removeProperty('font-family');
        el.style.removeProperty('font-weight');
        el.style.removeProperty('text-transform');
      }
    });

    // Banner
    const bannerTitle = document.querySelector('.bannerTitle h1');
    const bannerSubtitle = document.querySelector('.bannerTitle h4');
    if (bannerTitle && content.banner[lang]) bannerTitle.textContent = content.banner[lang].title;
    if (bannerSubtitle && content.banner[lang]) bannerSubtitle.textContent = content.banner[lang].subtitle;
    if (typeof applyBannerWave === 'function') applyBannerWave();

    // Services
    const servicesTitle = document.querySelector('.services > h2, .services h2:first-child');
    if (servicesTitle && content.services[lang]) servicesTitle.textContent = content.services[lang].title;
    const serviceItems = (content.services[lang] && content.services[lang].items) || [];
    const serviceImages = document.querySelectorAll('.services .content .images .image');
    serviceImages.forEach((imageEl, i) => {
      const imagePath = serviceItems[i] && serviceItems[i].image;
      if (!imagePath) return;
      imageEl.dataset.imageSrc = imagePath;
      imageEl.style.backgroundImage = "url('" + imagePath + "')";
      imageEl.dataset.imageLoaded = '1';
    });
    if (typeof window.__refreshServiceContent === 'function') window.__refreshServiceContent();

    // Steps
    const stepsTitle = document.querySelector('.steps h2');
    if (stepsTitle && content.steps[lang]) stepsTitle.textContent = content.steps[lang].title;
    const stepsItems = document.querySelectorAll('.steps .circle .dot');
    if (stepsItems.length && content.steps[lang]) {
      const items = content.steps[lang].items;
      stepsItems.forEach((itemEl, i) => {
        const h3 = itemEl.querySelector('h3');
        const p = itemEl.querySelector('p');
        if (items[i]) {
          if (h3) h3.textContent = items[i].number;
          if (p) p.textContent = items[i].title;
        }
      });
    }

    // Team
    const teamTitle = document.querySelector('.team h2');
    if (teamTitle && content.team[lang]) teamTitle.textContent = content.team[lang].title;
    const moreButton = document.querySelector('.team .more');
    if (moreButton && content.team[lang]) moreButton.textContent = content.team[lang].more;
    const teamMembers = document.querySelectorAll('.team .teamMember');
    if (teamMembers.length && content.team[lang]) {
      const members = content.team[lang].members;
      const forceSafariKaTeam = document.body.classList.contains('is-safari') && lang === 'ka';
      teamMembers.forEach((memberEl, i) => {
        const roleEl = memberEl.querySelector('h6');
        const nameEl = memberEl.querySelector('h5');
        const imageEl = memberEl.querySelector('img');
        if (!members[i]) return;
        if (roleEl) {
          roleEl.textContent = members[i].role;
          if (forceSafariKaTeam) {
            roleEl.style.fontFamily = "'BPG Square Banner Caps 2013 Safari', 'BPG Square Banner Caps 2013', sans-serif";
            roleEl.style.fontWeight = '400';
            roleEl.style.textTransform = 'none';
          } else {
            roleEl.style.removeProperty('font-family');
            roleEl.style.removeProperty('font-weight');
            roleEl.style.removeProperty('text-transform');
          }
        }
        if (nameEl) nameEl.textContent = members[i].name;
        if (imageEl && members[i].image) imageEl.src = members[i].image;
      });
    }

    // Testimonial
    const testimonialTitle = document.querySelector('.testimonial .title h3');
    if (testimonialTitle && content.testimonial[lang]) testimonialTitle.textContent = content.testimonial[lang].title;
    const testimonialMessages = content.testimonial[lang] && content.testimonial[lang].messages;
    const messagesRoot = document.querySelector('.testimonial .messages');
    if (messagesRoot && testimonialMessages && testimonialMessages.length) {
      const allParagraphs = Array.from(messagesRoot.querySelectorAll('p'));
      const hasRealIndex = allParagraphs.some((p) => p.dataset.realIndex !== undefined);
      if (hasRealIndex) {
        allParagraphs.forEach((p, i) => {
          const idxRaw = p.dataset.realIndex;
          const idx = Number.isFinite(Number(idxRaw)) ? Number(idxRaw) : i;
          const source = testimonialMessages[idx % testimonialMessages.length];
          p.textContent = source.text;
          p.dataset.author = source.author;
        });
      } else {
        allParagraphs.forEach((p, i) => {
          const source = testimonialMessages[i % testimonialMessages.length];
          p.textContent = source.text;
          p.dataset.author = source.author;
        });
      }
      const currentActive = messagesRoot.querySelector('p.active');
      const focusAuthor = document.querySelector('.testimonial .focus h5');
      if (focusAuthor && currentActive && currentActive.dataset.author) {
        focusAuthor.textContent = currentActive.dataset.author;
      } else if (focusAuthor) {
        focusAuthor.textContent = testimonialMessages[0].author;
      }
    }

    // Footer / Contact
    const contactContent = content.contact && content.contact[lang];
    if (contactContent) {
      const footerTitle = document.querySelector('footer h2');
      if (footerTitle) footerTitle.textContent = contactContent.brand;
      const formLegend = document.querySelector('footer form legend');
      if (formLegend) formLegend.textContent = contactContent.form.legend;
      const nameInput = document.querySelector('footer form #name');
      const emailInput = document.querySelector('footer form #email');
      const messageInput = document.querySelector('footer form #message');
      const submitButton = document.querySelector("footer form button[type='submit']");
      if (nameInput) nameInput.placeholder = contactContent.form.namePlaceholder;
      if (emailInput) emailInput.placeholder = contactContent.form.emailPlaceholder;
      if (messageInput) messageInput.placeholder = contactContent.form.messagePlaceholder;
      if (submitButton) submitButton.textContent = contactContent.form.submit;
      const contactLabels = document.querySelectorAll('footer .contact h5');
      if (contactLabels[0]) contactLabels[0].textContent = contactContent.details.phoneLabel;
      if (contactLabels[1]) contactLabels[1].textContent = contactContent.details.emailLabel;
      if (contactLabels[2]) contactLabels[2].textContent = contactContent.details.socialLabel;
      const contactValues = document.querySelectorAll('footer .contact p');
      if (contactValues[0]) contactValues[0].textContent = contactContent.details.phone;
      if (contactValues[1]) contactValues[1].textContent = contactContent.details.email;
      const addressTitle = document.querySelector('footer .address hgroup h5');
      if (addressTitle) addressTitle.textContent = contactContent.address.title;
      const addressLines = document.querySelectorAll('footer .address hgroup p span');
      if (addressLines[0]) addressLines[0].textContent = contactContent.address.line1;
      if (addressLines[1]) addressLines[1].textContent = contactContent.address.line2;
      const footerParagraph = document.querySelector('footer > p');
      if (footerParagraph) {
        footerParagraph.textContent = contactContent.paragraph;
        if (typeof window.__textWave === 'function') window.__textWave(contactContent.paragraph);
      }
    }

    document.body.dataset.lang = lang;
    window.__focusPreviousLang = lang;

    if (applyTransition && container) {
      container.style.opacity = '1';
    }
  }, applyTransition ? 150 : 0);
};
