import { content } from "../data.js";
import { getLanguage } from "./languageSwitcher.js";
import { refreshServiceContent } from "./scrollSwitcher.js";
import { applyBannerTitleWave } from "./bannerAnimations.js";
import { textWave } from "./textWave.js";

let previousLang = getLanguage(); // track the last rendered language

// 1) Read current language and transition state.
// 2) Update each section's localized DOM content.
// 3) Commit language UI state after rendering.
export function render() {
  const lang = getLanguage();
  const container = document.querySelector(".lang-content");
  if (!container) return;

  // --- Check if language actually changed ---
  const applyTransition = lang !== previousLang;

  if (applyTransition) {
    // Fade out + slide down
    container.style.opacity = 0;
  }

  setTimeout(() => {
    // --- Update navbar ---
    const navLinks = document.querySelectorAll(".navBar a");
    const navKeys = ["service", "about", "contact"];
    navLinks.forEach((el, i) => {
      el.textContent = content.navbar[lang][navKeys[i]];
    });


    // --- Update banner ---
    const bannerTitle = document.querySelector(".bannerTitle h1");
    const bannerSubtitle = document.querySelector(".bannerTitle h4");
    if (bannerTitle) bannerTitle.textContent = content.banner[lang].title;
    if (bannerSubtitle) bannerSubtitle.textContent = content.banner[lang].subtitle;
    applyBannerTitleWave();

    /* ---------- Services ---------- */
  const servicesTitle = document.querySelector("[data-services='title']");
  if (servicesTitle) {
    servicesTitle.textContent = content.services[lang].title;
  }
  refreshServiceContent();

  /* ---------- Steps ---------- */
  const stepsTitle = document.querySelector(".steps h2");
  if (stepsTitle) {
    stepsTitle.textContent = content.steps[lang].title;
  }
  const stepsItems = document.querySelectorAll(".steps .circle .dot");
  if (stepsItems.length) {
    const items = content.steps[lang].items;
    stepsItems.forEach((itemEl, i) => {
      const h3 = itemEl.querySelector("h3");
      const p = itemEl.querySelector("p");
      if (items[i]) {
        if (h3) h3.textContent = items[i].number;
        if (p) p.textContent = items[i].title;
      }
    });
  }

  /* ---------- Team ---------- */
  const teamTitle = document.querySelector(".team h2");
  if (teamTitle) {
    teamTitle.textContent = content.team[lang].title;
  }

  const moreButton = document.querySelector(".team .more");
  if (moreButton) {
    moreButton.textContent = content.team[lang].more;
  }

  const teamMembers = document.querySelectorAll(".team .teamMember");
  if (teamMembers.length) {
    const members = content.team[lang].members;
    teamMembers.forEach((memberEl, i) => {
      const roleEl = memberEl.querySelector("h6");
      const nameEl = memberEl.querySelector("h5");
      const imageEl = memberEl.querySelector("img");
      if (!members[i]) return;
      if (roleEl) roleEl.textContent = members[i].role;
      if (nameEl) nameEl.textContent = members[i].name;
      if (imageEl && members[i].image) imageEl.src = members[i].image;
    });
  }

  /* ---------- Testimonial ---------- */
  const testimonialTitle = document.querySelector(".testimonial .title h3");
  if (testimonialTitle) {
    testimonialTitle.textContent = content.testimonial[lang].title;
  }

  const testimonialMessages = content.testimonial[lang].messages;
  const messagesRoot = document.querySelector(".testimonial .messages");
  if (messagesRoot && testimonialMessages?.length) {
    const allParagraphs = Array.from(messagesRoot.querySelectorAll("p"));

    // If carousel already initialized, every item has data-real-index (including clones).
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
      // Before carousel init, map directly by DOM order.
      allParagraphs.forEach((p, i) => {
        const source = testimonialMessages[i % testimonialMessages.length];
        p.textContent = source.text;
        p.dataset.author = source.author;
      });
    }

    const currentActive = messagesRoot.querySelector("p.active");
    const focusAuthor = document.querySelector(".testimonial .focus h5");
    if (focusAuthor && currentActive?.dataset.author) {
      focusAuthor.textContent = currentActive.dataset.author;
    } else if (focusAuthor) {
      focusAuthor.textContent = testimonialMessages[0].author;
    }
  }

  /* ---------- Footer / Contact ---------- */
  const contactContent = content.contact?.[lang];
  if (contactContent) {
    const footerTitle = document.querySelector("footer h2");
    if (footerTitle) {
      footerTitle.textContent = contactContent.brand;
    }

    const formLegend = document.querySelector("footer form legend");
    if (formLegend) {
      formLegend.textContent = contactContent.form.legend;
    }

    const nameInput = document.querySelector("footer form #name");
    const emailInput = document.querySelector("footer form #email");
    const messageInput = document.querySelector("footer form #message");
    const submitButton = document.querySelector("footer form button[type='submit']");

    if (nameInput) nameInput.placeholder = contactContent.form.namePlaceholder;
    if (emailInput) emailInput.placeholder = contactContent.form.emailPlaceholder;
    if (messageInput) messageInput.placeholder = contactContent.form.messagePlaceholder;
    if (submitButton) submitButton.textContent = contactContent.form.submit;

    const contactLabels = document.querySelectorAll("footer .contact h5");
    if (contactLabels[0]) contactLabels[0].textContent = contactContent.details.phoneLabel;
    if (contactLabels[1]) contactLabels[1].textContent = contactContent.details.emailLabel;
    if (contactLabels[2]) contactLabels[2].textContent = contactContent.details.socialLabel;

    const contactValues = document.querySelectorAll("footer .contact p");
    if (contactValues[0]) contactValues[0].textContent = contactContent.details.phone;
    if (contactValues[1]) contactValues[1].textContent = contactContent.details.email;

    const addressTitle = document.querySelector("footer .address hgroup h5");
    if (addressTitle) {
      addressTitle.textContent = contactContent.address.title;
    }

    const addressLines = document.querySelectorAll("footer .address hgroup p span");
    if (addressLines[0]) addressLines[0].textContent = contactContent.address.line1;
    if (addressLines[1]) addressLines[1].textContent = contactContent.address.line2;

    const footerParagraph = document.querySelector("footer > p");
    if (footerParagraph) {
      footerParagraph.textContent = contactContent.paragraph;
      textWave(contactContent.paragraph);
    }
  }

    // --- Update body data-lang for font switching ---
    document.body.dataset.lang = lang;

    if (applyTransition) {
      // Fade in + slide up
      container.style.opacity = 1;
    }

    // Update previous language
    previousLang = lang;
  }, applyTransition ? 150 : 0);
}
