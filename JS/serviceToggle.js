import { content } from "./data.js";
import { getLanguage } from "./languageSwitcher.js";

let activeIndex = 0; // current service index (0..n)
const serviceKeys = [
  "socialMediaMarketing",
  "googleAnalytics",
  "webDevelopment",
  "videoProduction"
];

// Render current service title/description and (optionally) its detail list.

const renderService = (index, { updateContent = true } = {}) => {
  const service = document.querySelector(".service");
  if (!service) return;
  const title = service.querySelector("h3");
  const description = service.querySelector("p");
  const list = service.querySelector(".service-content");

  const lang = getLanguage();
  const item = content.services[lang].items[index];
  const key = serviceKeys[index];
  const details = content.serviceContent[lang][key] || [];

  if (title) {
    title.classList.add("swap-out");
    setTimeout(() => {
      title.textContent = item.title;
      title.classList.remove("swap-out");
      title.classList.add("swap-in");
      setTimeout(() => title.classList.remove("swap-in"), 250);
    }, 160);
  }

  if (description) {
    description.classList.add("swap-out");
    setTimeout(() => {
      description.textContent = item.description;
      description.classList.remove("swap-out");
      description.classList.add("swap-in");
      setTimeout(() => description.classList.remove("swap-in"), 250);
    }, 180);
  }

  if (list && updateContent) {
    service.classList.add("updating");
    list.innerHTML = details.map(text => `<li>${text}</li>`).join("");
    requestAnimationFrame(() => {
      service.classList.remove("updating");
    });
  }
};

// Update active index, UI text, dots, and optionally scroll images to the index.
const setActiveIndex = (index, { scrollImage = true } = {}) => {
  activeIndex = index;
  const service = document.querySelector(".service");
  const isActive = service ? service.classList.contains("active") : false;
  renderService(index, { updateContent: isActive });

  // scroll image on dot click
  const imagesWrap = document.querySelector(".content .images");
  if (imagesWrap && scrollImage) {
    const imageHeight = imagesWrap.clientHeight;
    imagesWrap.scrollTo({
      top: imageHeight * index,
      behavior: "smooth"
    });
  }

  const dots = document.querySelectorAll(".navigationDots .dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
};

// Re-render current service content (used on language switch).
export function refreshServiceContent() {
  renderService(activeIndex);
}

export function initServiceToggle() {
  // DOM refs
  const service = document.querySelector(".service");
  const dots = document.querySelectorAll(".navigationDots .dot");
  const contentWrap = document.querySelector(".content");
  const servicesSection = document.querySelector(".services");
  const imagesWrap = document.querySelector(".content .images");
  let scrollTicking = false; // rAF throttle

  if (service) {
    // Toggle active state on service card click.
    service.addEventListener("click", () => {
      service.classList.toggle("active");
      if (service.classList.contains("active")) {
        renderService(activeIndex, { updateContent: true });
      }
    });
  }

  dots.forEach((dot, i) => {
    // Dot click switches service.
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      setActiveIndex(i);
    });
  });

  if (servicesSection) {
    // Make section tall enough for scroll-driven steps.
    const itemsCount = content.services[getLanguage()].items.length;
    servicesSection.style.minHeight = `${itemsCount * 200}vh`;
  }

  // Scroll handler: updates dots/title/description and scrolls images.
  const handleScroll = () => {
    if (!service || !contentWrap || !servicesSection) return;
    if (service.classList.contains("active")) return;

    const sectionTop = servicesSection.offsetTop;
    const sectionHeight = servicesSection.offsetHeight;
    const viewportH = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;

    const topOffset = parseFloat(getComputedStyle(contentWrap).top) || 0;
    const sectionStart = sectionTop - topOffset;
    const sectionEnd = sectionTop + sectionHeight - viewportH - topOffset;
    const contentRect = contentWrap.getBoundingClientRect();
    const contentAtTop = contentRect.top <= topOffset + 2;
    const inSection = scrollY >= sectionStart && scrollY <= sectionEnd;
    const showDots = inSection && contentAtTop;
    const dotsWrap = document.querySelector(".navigationDots");
    if (dotsWrap) dotsWrap.classList.toggle("is-visible", showDots);

    const buffer = viewportH * 0.25; // keep some breathing room
    const progressStart = sectionTop + buffer;
    const progressEnd = sectionTop + sectionHeight - viewportH - buffer;
    const denom = progressEnd - progressStart;
    if (denom <= 0) return;
    const progressRaw = (scrollY - progressStart) / denom;
    const progress = Math.min(1, Math.max(0, progressRaw));
    const itemsCount = content.services[getLanguage()].items.length;
    const index = Math.min(itemsCount - 1, Math.max(0, Math.floor(progress * itemsCount)));

    setActiveIndex(index, { scrollImage: false });

    if (imagesWrap) {
      // Scroll image stack based on scroll progress.
      const maxScroll = imagesWrap.scrollHeight - imagesWrap.clientHeight;
      imagesWrap.scrollTop = maxScroll * progress;
    }
  };

  // Sync service index when user scrolls inside image container.
  const handleImagesScroll = () => {
    if (!service || !imagesWrap) return;
    if (service.classList.contains("active")) return;

    const maxScroll = imagesWrap.scrollHeight - imagesWrap.clientHeight;
    if (maxScroll <= 0) return;

    const progress = imagesWrap.scrollTop / maxScroll;
    const itemsCount = content.services[getLanguage()].items.length;
    const index = Math.min(itemsCount - 1, Math.max(0, Math.floor(progress * itemsCount)));
    setActiveIndex(index, { scrollImage: false });
  };

  // rAF throttle for scroll events
  const onScroll = () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      scrollTicking = false;
      handleScroll();
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  if (imagesWrap) {
    imagesWrap.addEventListener("scroll", handleImagesScroll, { passive: true });
    imagesWrap.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        if (typeof window.__smoothScrollBy === "function") {
          window.__smoothScrollBy(e.deltaY);
        } else {
          window.scrollBy({ top: e.deltaY, left: 0, behavior: "auto" });
        }
      },
      { passive: false }
    );
  }

  if (dots.length > 0) setActiveIndex(0);
  onScroll();
}
