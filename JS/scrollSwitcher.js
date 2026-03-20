import { content } from "../data.js";
import { getLanguage } from "./languageSwitcher.js";

let activeIndex = 0; // current service index (0..n)
const serviceKeys = [
  "socialMediaMarketing",
  "googleAnalytics",
  "webDevelopment",
  "videoProduction"
];
let titleSwapTimer = null;
let titleSwapInTimer = null;
let descSwapTimer = null;
let descSwapInTimer = null;
let cachedServiceImageEls = null;

// Render current service title/description and (optionally) its detail list.

// Render the currently selected item text/details.
const renderService = (index, { updateContent = true, immediate = false } = {}) => {
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

    const nextTitle = item.title || "";
    if (title.textContent !== nextTitle || immediate) {
      if (titleSwapTimer) clearTimeout(titleSwapTimer);
      if (titleSwapInTimer) clearTimeout(titleSwapInTimer);

      if (immediate) {
        title.textContent = nextTitle;
        title.classList.remove("swap-out");
        title.classList.remove("swap-in");
      } else {
        title.classList.add("swap-out");
        titleSwapTimer = setTimeout(() => {
          title.textContent = nextTitle;
          title.classList.remove("swap-out");
          title.classList.add("swap-in");
          titleSwapInTimer = setTimeout(() => title.classList.remove("swap-in"), 250);
        }, 160);
      }
    }
  }

  if (description) {
    const nextDescription = item.description || "";
    if (description.textContent !== nextDescription || immediate) {
      if (descSwapTimer) clearTimeout(descSwapTimer);
      if (descSwapInTimer) clearTimeout(descSwapInTimer);

      if (immediate) {
        description.textContent = nextDescription;
        description.classList.remove("swap-out");
        description.classList.remove("swap-in");
      } else {
        description.classList.add("swap-out");
        descSwapTimer = setTimeout(() => {
          description.textContent = nextDescription;
          description.classList.remove("swap-out");
          description.classList.add("swap-in");
          descSwapInTimer = setTimeout(() => description.classList.remove("swap-in"), 250);
        }, 180);
      }
    }
  }

  if (list && updateContent) {
    service.classList.add("updating");
    list.innerHTML = details.map(text => `<li>${text}</li>`).join("");
    requestAnimationFrame(() => {
      service.classList.remove("updating");
    });
  }
};

const getServiceImageEls = () => {
  if (!cachedServiceImageEls || !cachedServiceImageEls.length) {
    cachedServiceImageEls = Array.from(document.querySelectorAll(".services .content .images .image"));
  }
  return cachedServiceImageEls;
};

const ensureServiceImageLoaded = (index) => {
  if (!Number.isInteger(index) || index < 0) return;
  const imageEls = getServiceImageEls();
  const imageEl = imageEls[index];
  if (!imageEl) return;
  if (imageEl.dataset.imageLoaded === "1" && imageEl.style.backgroundImage) return;

  const imageSrc = imageEl.dataset.imageSrc;
  if (!imageSrc) return;

  imageEl.style.backgroundImage = `url('${imageSrc}')`;
  imageEl.dataset.imageLoaded = "1";
};

const preloadServiceImagesAround = (index) => {
  [index - 1, index, index + 1].forEach((i) => ensureServiceImageLoaded(i));
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const getScrollProgressPadding = () => {
  const itemsCount = content.services[getLanguage()].items.length;
  return itemsCount > 1 ? 0.5 / itemsCount : 0;
};

const getImageProgressFromScrollProgress = (scrollProgress) => {
  const padding = getScrollProgressPadding();
  const usableRange = 1 - (padding * 2);
  if (usableRange <= 0) return clamp(scrollProgress, 0, 1);
  return clamp((scrollProgress - padding) / usableRange, 0, 1);
};

const getScrollProgressFromImageProgress = (imageProgress) => {
  const padding = getScrollProgressPadding();
  const usableRange = 1 - (padding * 2);
  if (usableRange <= 0) return clamp(imageProgress, 0, 1);
  return clamp(padding + (clamp(imageProgress, 0, 1) * usableRange), 0, 1);
};

const getImageScrollTarget = (imagesWrap, index) => {
  if (!imagesWrap) return 0;
  const imageEls = getServiceImageEls();
  const imageEl = imageEls[index];
  if (!imageEl) return 0;
  const maxScroll = Math.max(0, imagesWrap.scrollHeight - imagesWrap.clientHeight);
  const centeredTop = imageEl.offsetTop - ((imagesWrap.clientHeight - imageEl.offsetHeight) / 2);
  return Math.max(0, Math.min(maxScroll, centeredTop));
};

const getClosestImageIndex = (imagesWrap, scrollTop = imagesWrap?.scrollTop ?? 0) => {
  if (!imagesWrap) return 0;
  const imageEls = getServiceImageEls();
  if (!imageEls.length) return 0;

  const viewportCenter = scrollTop + imagesWrap.clientHeight / 2;
  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  imageEls.forEach((imageEl, index) => {
    const imageCenter = imageEl.offsetTop + imageEl.offsetHeight / 2;
    const distance = Math.abs(imageCenter - viewportCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
};

// Update active index, UI text, dots, and optionally scroll images to the index.
// Apply active index state, then sync dots and image panel.
const setActiveIndex = (
  index,
  { scrollImage = true, forceScroll = false, imageBehavior = "smooth", immediateText = false } = {}
) => {
  const isSameIndex = index === activeIndex;
  const shouldRender = !isSameIndex || immediateText;

  if (isSameIndex) {
    preloadServiceImagesAround(index);
  } else {
    activeIndex = index;
    preloadServiceImagesAround(index);
  }

  if (shouldRender) {
    const service = document.querySelector(".service");
    const isActive = service ? service.classList.contains("active") : false;
    renderService(index, { updateContent: isActive, immediate: immediateText });
  }

  // scroll image on dot click
  const imagesWrap = document.querySelector(".content .images");
  if (imagesWrap && scrollImage && (!isSameIndex || forceScroll)) {
    imagesWrap.scrollTo({
      top: getImageScrollTarget(imagesWrap, index),
      behavior: imageBehavior
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
  const mobileServicesMedia = window.matchMedia("(max-width: 1180px), (hover: none) and (pointer: coarse)");
  let scrollTicking = false; // rAF throttle
  let touchStartY = 0;
  let pendingDotIndex = null;
  let pendingDotTop = null;
  let keepDotsVisibleUntilManualScroll = false;
  let isStaticLayout = mobileServicesMedia.matches;
  let manualServiceTouchStartY = 0;
  let manualServiceScrollStartTop = 0;
  let manualServiceScrollEl = null;
  let rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  let contentTopOffset = contentWrap
    ? parseFloat(getComputedStyle(contentWrap).top) || 0
    : 0;
  let contentFlowOffset = contentWrap ? contentWrap.offsetTop : 0;

  const isServiceScrollLocked = () => (
    !isStaticLayout &&
    document.body?.dataset.serviceScrollLock === "1"
  );
  const syncServiceScrollLock = (shouldLock) => {
    if (!document.body) return;
    document.body.dataset.serviceScrollLock =
      !isStaticLayout && shouldLock ? "1" : "0";
  };
  const holdDotsVisible = () => {
    keepDotsVisibleUntilManualScroll = true;
  };
  const releaseDotsVisibilityHold = () => {
    keepDotsVisibleUntilManualScroll = false;
  };
  const getActiveServiceScrollEl = () => {
    if (!isStaticLayout || !service?.classList.contains("active")) return null;
    const scrollEl = service.querySelector(".service-content");
    if (!scrollEl) return null;
    if (scrollEl.scrollHeight <= scrollEl.clientHeight + 1) return null;
    return scrollEl;
  };
  const resetManualServiceTouch = () => {
    manualServiceScrollEl = null;
    manualServiceTouchStartY = 0;
    manualServiceScrollStartTop = 0;
  };
  const onServiceTouchStart = (e) => {
    if (!isStaticLayout || !service?.classList.contains("active")) return;
    if (e.target instanceof Element && e.target.closest("button")) return;

    const touch = e.touches?.[0];
    const scrollEl = getActiveServiceScrollEl();
    if (!touch || !scrollEl) {
      resetManualServiceTouch();
      return;
    }

    manualServiceTouchStartY = touch.clientY;
    manualServiceScrollStartTop = scrollEl.scrollTop;
    manualServiceScrollEl = scrollEl;
  };
  const onServiceTouchMove = (e) => {
    if (!manualServiceScrollEl) return;
    const touch = e.touches?.[0];
    if (!touch) return;

    const maxScroll = Math.max(
      0,
      manualServiceScrollEl.scrollHeight - manualServiceScrollEl.clientHeight
    );
    const nextTop = manualServiceScrollStartTop + (manualServiceTouchStartY - touch.clientY);

    manualServiceScrollEl.scrollTop = clamp(nextTop, 0, maxScroll);
    e.preventDefault();
  };

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
    if (!isServiceScrollLocked()) return;
    if (canScrollInsideServiceContent(e.target, e.deltaY)) return;
    e.preventDefault();
  };

  const onDocumentTouchStartLock = (e) => {
    if (!isServiceScrollLocked()) return;
    const touch = e.touches?.[0];
    if (!touch) return;
    touchStartY = touch.clientY;
  };

  const onDocumentTouchMoveLock = (e) => {
    if (!isServiceScrollLocked()) return;
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
    if (typeof window.syncDocumentScrollLock === "function") {
      window.syncDocumentScrollLock();
      return;
    }

    const shouldLock =
      body.dataset.navScrollLock === "1" ||
      body.dataset.chatScrollLock === "1";

    body.classList.toggle("page-scroll-locked", shouldLock);
    html.classList.toggle("page-scroll-locked", shouldLock);
  };

  const applyServicesSectionHeight = () => {
    if (!servicesSection || !contentWrap) return;

    contentWrap.classList.toggle("is-static", isStaticLayout);
    if (isStaticLayout) {
      servicesSection.style.removeProperty("min-height");
      return;
    }

    const itemsCount = content.services[getLanguage()].items.length;
    const supportsSmallViewportUnit =
      typeof CSS !== "undefined" &&
      typeof CSS.supports === "function" &&
      CSS.supports("height", "1svh");
    const viewportUnit = supportsSmallViewportUnit ? "svh" : "vh";
    servicesSection.style.minHeight = `${itemsCount * 200}${viewportUnit}`;
  };

  const getStickyScrollBounds = () => {
    if (isStaticLayout) return null;
    if (!contentWrap || !servicesSection) return null;

    const sectionTop = servicesSection.offsetTop;
    const sectionHeight = servicesSection.offsetHeight;
    const contentHeight = contentWrap.offsetHeight;
    const stickyStart = sectionTop + contentFlowOffset - contentTopOffset;
    const sectionEnd = sectionTop + sectionHeight - contentHeight - contentTopOffset;

    return {
      stickyStart,
      sectionEnd,
    };
  };

  const syncContentFlowOffset = () => {
    if (isStaticLayout) return;
    if (!contentWrap || !servicesSection) return;

    const contentRect = contentWrap.getBoundingClientRect();
    const hasReachedSticky = contentRect.top <= contentTopOffset + 2;
    if (hasReachedSticky && contentFlowOffset > 0) return;

    const scrollY = window.scrollY || window.pageYOffset;
    contentFlowOffset = (scrollY + contentRect.top) - servicesSection.offsetTop;
  };

  const scrollPageToServiceIndex = (index) => {
    if (isStaticLayout) {
      setActiveIndex(index, { scrollImage: true, forceScroll: true });
      return null;
    }

    syncContentFlowOffset();
    const bounds = getStickyScrollBounds();
    if (!bounds) return null;

    const { stickyStart, sectionEnd } = bounds;
    const range = Math.max(0, sectionEnd - stickyStart);
    const maxImageScroll = imagesWrap
      ? Math.max(0, imagesWrap.scrollHeight - imagesWrap.clientHeight)
      : 0;
    const imageEl = getServiceImageEls()[index];
    const fallbackCount = Math.max(1, content.services[getLanguage()].items.length - 1);
    const fallbackProgress = fallbackCount > 0 ? index / fallbackCount : 0;
    const progress = imageEl && maxImageScroll > 0
      ? imageEl.offsetTop / maxImageScroll
      : fallbackProgress;
    const targetTop = stickyStart + (range * getScrollProgressFromImageProgress(progress));

    if (typeof window.__smoothScrollTo === "function") {
      window.__smoothScrollTo(targetTop);
      return targetTop;
    }

    window.scrollTo({
      top: targetTop,
      left: 0,
      behavior: "smooth"
    });
    return targetTop;
  };

  // Keep dots aligned next to the content container.
  const updateDotsPosition = () => {
    if (!contentWrap || !dotsWrap) return;
    if (isStaticLayout) {
      dotsWrap.style.removeProperty("left");
      dotsWrap.style.removeProperty("right");
      dotsWrap.style.removeProperty("top");
      dotsWrap.style.removeProperty("bottom");
      dotsWrap.style.removeProperty("transform");
      return;
    }

    const visualViewport = window.visualViewport || null;
    const contentRect = contentWrap.getBoundingClientRect();
    const dotsRect = dotsWrap.getBoundingClientRect();
    const gap = 1.5 * rootFontSize;
    const viewportW = visualViewport
      ? visualViewport.width
      : (window.innerWidth || document.documentElement.clientWidth);
    const viewportOffsetLeft = visualViewport ? visualViewport.offsetLeft : 0;

    // Mobile layout: keep dots centered under the content block.
    if (viewportW <= 560) {
      // Mobile fallback: fixed viewport anchor avoids drift/jump from sticky+address-bar viewport changes.
      const centerX = viewportOffsetLeft + viewportW / 2;

      dotsWrap.style.left = `${centerX}px`;
      dotsWrap.style.right = "auto";
      dotsWrap.style.top = "auto";
      dotsWrap.style.bottom = "calc(1.1em + var(--app-fixed-bottom-clearance, 0px))";
      dotsWrap.style.transform = "translateX(-50%)";
      return;
    }

    let left = contentRect.right + gap;
    const minLeft = viewportOffsetLeft + rootFontSize * 0.5;
    const maxLeft = viewportOffsetLeft + viewportW - dotsRect.width - rootFontSize * 0.5;
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
      if (isStaticLayout && !e.target.closest("button")) return;
      const isActive = service.classList.toggle("active");
      if (isActive && typeof window.__stopSmoothScroll === "function") {
        window.__stopSmoothScroll();
      }
      syncServiceScrollLock(isActive);
      applyPageScrollLock();
      resetManualServiceTouch();
      if (typeof window.__queueViewportMetricsSync === "function") {
        window.__queueViewportMetricsSync();
      }
      if (isActive) {
        renderService(activeIndex, { updateContent: true });
        setActiveIndex(activeIndex, {
          scrollImage: true,
          forceScroll: true,
          imageBehavior: isStaticLayout ? "auto" : "smooth"
        });
      }
    });
  }

  dots.forEach((dot, i) => {
    // Dot click switches service.
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      holdDotsVisible();
      if (isStaticLayout) {
        pendingDotIndex = null;
        pendingDotTop = null;
        setActiveIndex(i, { scrollImage: true, forceScroll: true });
        return;
      }
      if (service?.classList.contains("active")) {
        pendingDotIndex = null;
        pendingDotTop = null;
        setActiveIndex(i, { scrollImage: true, forceScroll: true });
        return;
      }
      pendingDotIndex = i;
      setActiveIndex(i, { scrollImage: false });
      pendingDotTop = scrollPageToServiceIndex(i);
      const scrollY = window.scrollY || window.pageYOffset;
      if (pendingDotTop === null || Math.abs(scrollY - pendingDotTop) <= 2) {
        pendingDotIndex = null;
        pendingDotTop = null;
      }
    });
  });

  // Make section tall enough for scroll-driven steps.
  applyServicesSectionHeight();
  syncContentFlowOffset();

  // Scroll handler: updates dots/title/description and scrolls images.
  // Map page scroll to active index and image progress.
  const handleScroll = () => {
    if (!service || !contentWrap || !servicesSection) return;
    updateDotsPosition();

    if (isStaticLayout) {
      if (dotsWrap) dotsWrap.classList.add("is-visible");
      return;
    }

    const contentRect = contentWrap.getBoundingClientRect();
    const viewportHeight = window.visualViewport
      ? window.visualViewport.height
      : (window.innerHeight || document.documentElement.clientHeight);
    const isContentVisible = contentRect.bottom > 0 && contentRect.top < viewportHeight;
    syncContentFlowOffset();

    const scrollY = window.scrollY || window.pageYOffset;
    const bounds = getStickyScrollBounds();
    if (!bounds) return;
    const { stickyStart, sectionEnd } = bounds;
    const progressStart = stickyStart;
    const progressEnd = sectionEnd;
    const denom = progressEnd - progressStart;
    if (denom <= 0) return;
    const progressRaw = (scrollY - progressStart) / denom;
    const scrollProgress = clamp(progressRaw, 0, 1);
    const dotsEnd = getScrollProgressFromImageProgress(1);
    const showDots = (keepDotsVisibleUntilManualScroll && isContentVisible) ||
      pendingDotIndex !== null ||
      (progressRaw >= 0 && progressRaw <= dotsEnd);
    if (dotsWrap) dotsWrap.classList.toggle("is-visible", showDots);

    if (service.classList.contains("active")) return;

    const imageProgress = getImageProgressFromScrollProgress(scrollProgress);
    const imageScrollTop = imagesWrap
      ? (imagesWrap.scrollHeight - imagesWrap.clientHeight) * imageProgress
      : 0;

    if (pendingDotIndex !== null) {
      setActiveIndex(pendingDotIndex, { scrollImage: false });
      if (imagesWrap) {
        imagesWrap.scrollTop = imageScrollTop;
      }
      if (pendingDotTop !== null && Math.abs(scrollY - pendingDotTop) <= 2) {
        pendingDotIndex = null;
        pendingDotTop = null;
      }
      return;
    }

    const itemsCount = content.services[getLanguage()].items.length;
    const fallbackIndex = Math.min(itemsCount - 1, Math.max(0, Math.floor(imageProgress * itemsCount)));
    const index = imagesWrap ? getClosestImageIndex(imagesWrap, imageScrollTop) : fallbackIndex;

    setActiveIndex(index, { scrollImage: false });

    if (imagesWrap) {
      // Scroll image stack based on scroll progress.
      imagesWrap.scrollTop = imageScrollTop;
    }
  };

  // Sync service index when user scrolls inside image container.
  // Map inner image-scroll progress back to active index.
  const handleImagesScroll = () => {
    if (!service || !imagesWrap) return;
    if (isStaticLayout) return;
    if (service.classList.contains("active")) return;
    if (pendingDotIndex !== null) return;

    const maxScroll = imagesWrap.scrollHeight - imagesWrap.clientHeight;
    if (maxScroll <= 0) return;

    const index = getClosestImageIndex(imagesWrap);
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

  const onResize = () => {
    isStaticLayout = mobileServicesMedia.matches;
    rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    if (isStaticLayout) {
      syncServiceScrollLock(false);
    } else if (service?.classList.contains("active")) {
      syncServiceScrollLock(true);
    }
    resetManualServiceTouch();
    applyServicesSectionHeight();
    contentTopOffset = contentWrap
      ? parseFloat(getComputedStyle(contentWrap).top) || 0
      : 0;
    if (imagesWrap) {
      imagesWrap.scrollTop = getImageScrollTarget(imagesWrap, activeIndex);
    }
    pendingDotIndex = null;
    pendingDotTop = null;
    syncContentFlowOffset();
    onScroll();
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("wheel", releaseDotsVisibilityHold, { passive: true });
  window.addEventListener("touchmove", releaseDotsVisibilityHold, { passive: true });
  window.addEventListener("services:dots-visibility-hold", holdDotsVisible);
  window.addEventListener("resize", onResize);
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", onResize);
  }
  document.addEventListener("wheel", onDocumentWheelLock, { passive: false });
  document.addEventListener("touchstart", onDocumentTouchStartLock, { passive: true });
  document.addEventListener("touchmove", onDocumentTouchMoveLock, { passive: false });
  if (service) {
    service.addEventListener("touchstart", onServiceTouchStart, { passive: true });
    service.addEventListener("touchmove", onServiceTouchMove, { passive: false });
    service.addEventListener("touchend", resetManualServiceTouch, { passive: true });
    service.addEventListener("touchcancel", resetManualServiceTouch, { passive: true });
  }
  if (imagesWrap) {
    imagesWrap.addEventListener("scroll", handleImagesScroll, { passive: true });
    imagesWrap.addEventListener("wheel", (e) => {
      if (isStaticLayout) return;
      e.preventDefault();
      if (typeof window.__smoothScrollBy === "function") {
        window.__smoothScrollBy(e.deltaY);
      } else {
        window.scrollBy({ top: e.deltaY, left: 0, behavior: "auto" });
      }
    }, { passive: false });
  }

  if (dots.length > 0) setActiveIndex(0);
  if (document.body) {
    syncServiceScrollLock(false);
    applyPageScrollLock();
  }
  updateDotsPosition();
  onScroll();
}
