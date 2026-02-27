import { content } from "../data.js";
import { getLanguage } from "./languageSwitcher.js";

let activeIndex = 0; // current service index (0..n)
const serviceKeys = [
  "socialMediaMarketing",
  "googleAnalytics",
  "webDevelopment",
  "videoProduction"
];

// Render current service title/description and (optionally) its detail list.

// Render the currently selected item text/details.
const renderService = (index, { updateContent = true } = {}) => {
  const service = document.querySelector(".service");
  if (!service) return;
  const title = service.querySelector("h3");
  const description = service.querySelector("p");
  const list = service.querySelector(".service-content");

  const lang = getLanguage();
  const forceSafariKaServiceTitle =
    document.body.classList.contains("is-safari") && lang === "ka";
  const item = content.services[lang].items[index];
  const key = serviceKeys[index];
  const details = content.serviceContent[lang][key] || [];

  if (title) {
    if (forceSafariKaServiceTitle) {
      title.style.fontFamily = "'BPG Square Banner Caps 2013 Safari', 'BPG Square Banner Caps 2013', sans-serif";
      title.style.fontWeight = "400";
      title.style.textTransform = "none";
    } else {
      title.style.removeProperty("font-family");
      title.style.removeProperty("font-weight");
      title.style.removeProperty("text-transform");
    }

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
// Apply active index state, then sync dots and image panel.
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

// 1) Bind service/dot interactions.
// 2) Sync active content with page/image scroll.
// 3) Keep dots position/visibility updated.
export function scrollSwitcher() {
  // DOM refs
  const service = document.querySelector(".service");
  const dots = document.querySelectorAll(".navigationDots .dot");
  const contentWrap = document.querySelector(".content");
  const servicesSection = document.querySelector(".services");
  const imagesWrap = document.querySelector(".content .images");
  const dotsWrap = document.querySelector(".navigationDots");
  let scrollTicking = false; // rAF throttle
  const isSafari = !!document.body?.classList.contains("is-safari");
  let touchStartY = 0;

  const isServiceScrollLocked = () => document.body?.dataset.serviceScrollLock === "1";

  // Allow native scrolling only when touch/wheel happens inside service-content
  // and that inner container can still scroll in the requested direction.
  const canScrollInsideServiceContent = (target, deltaY) => {
    if (!(target instanceof Element)) return false;
    const nested = target.closest(".service-content");
    if (!nested) return false;

    const maxScroll = nested.scrollHeight - nested.clientHeight;
    if (maxScroll <= 1) return false;

    if (deltaY > 0) {
      return nested.scrollTop + nested.clientHeight < nested.scrollHeight - 1;
    }
    if (deltaY < 0) {
      return nested.scrollTop > 0;
    }
    return false;
  };

  const onDocumentWheelLock = (e) => {
    if (!isSafari || !isServiceScrollLocked()) return;
    if (canScrollInsideServiceContent(e.target, e.deltaY)) return;
    e.preventDefault();
  };

  const onDocumentTouchStartLock = (e) => {
    if (!isSafari || !isServiceScrollLocked()) return;
    const touch = e.touches?.[0];
    if (!touch) return;
    touchStartY = touch.clientY;
  };

  const onDocumentTouchMoveLock = (e) => {
    if (!isSafari || !isServiceScrollLocked()) return;
    const touch = e.touches?.[0];
    if (!touch) return;

    const deltaY = touchStartY - touch.clientY;
    if (canScrollInsideServiceContent(e.target, deltaY)) {
      touchStartY = touch.clientY;
      return;
    }

    e.preventDefault();
    touchStartY = touch.clientY;
  };

  // Lock page scrolling whenever service card is active.
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

  // Keep dots aligned next to the content container.
  const updateDotsPosition = () => {
    if (!contentWrap || !dotsWrap) return;
    const contentRect = contentWrap.getBoundingClientRect();
    const dotsRect = dotsWrap.getBoundingClientRect();
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    const gap = 1.5 * rootFontSize;
    const viewportW = window.innerWidth || document.documentElement.clientWidth;
    const viewportH = window.innerHeight || document.documentElement.clientHeight;

    // Mobile layout: keep dots centered under the content block.
    if (viewportW <= 560) {
      const centerX = contentRect.left + contentRect.width / 2;
      const topFromContent = contentRect.bottom + rootFontSize; // 1em gap
      const maxTop = viewportH - dotsRect.height - rootFontSize * 0.4;
      const top = Math.min(topFromContent, maxTop);

      dotsWrap.style.left = `${centerX}px`;
      dotsWrap.style.right = "auto";
      dotsWrap.style.top = `${top}px`;
      dotsWrap.style.bottom = "auto";
      dotsWrap.style.transform = "translateX(-50%)";
      return;
    }

    let left = contentRect.right + gap;
    const minLeft = rootFontSize * 0.5;
    const maxLeft = viewportW - dotsRect.width - rootFontSize * 0.5;
    left = Math.max(minLeft, Math.min(maxLeft, left));

    dotsWrap.style.left = `${left}px`;
    dotsWrap.style.right = "auto";
    dotsWrap.style.top = "50%";
    dotsWrap.style.bottom = "auto";
    dotsWrap.style.transform = "translateY(-50%)";
  };

  if (service) {
    // Toggle active state on service card click.
    service.addEventListener("click", (e) => {
      // Keep list interactions/scroll from collapsing the card on touch devices.
      if (e.target.closest(".service-content")) return;
      const isActive = service.classList.toggle("active");
      document.body.dataset.serviceScrollLock = isActive ? "1" : "0";
      applyPageScrollLock();
      if (isActive && typeof window.__stopSmoothScroll === "function") {
        window.__stopSmoothScroll();
      }
      if (isActive) {
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
  // Map page scroll to active index and image progress.
  const handleScroll = () => {
    if (!service || !contentWrap || !servicesSection) return;
    updateDotsPosition();
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
  // Map inner image-scroll progress back to active index.
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
  // Throttle scroll work to one animation frame.
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
  document.addEventListener("wheel", onDocumentWheelLock, { passive: false });
  document.addEventListener("touchstart", onDocumentTouchStartLock, { passive: true });
  document.addEventListener("touchmove", onDocumentTouchMoveLock, { passive: false });
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
  if (document.body) {
    document.body.dataset.serviceScrollLock = "0";
    applyPageScrollLock();
  }
  updateDotsPosition();
  onScroll();
}
