// 1) Build/measure loop track.
// 2) Run continuous vertical carousel motion.
// 3) Sync focus pulse + author text with active item peaks.
export const infiniteCarousel = () => {
  const section = document.querySelector(".testimonial");
  const list = document.querySelector(".testimonial .messages");
  const focus = document.querySelector(".testimonial .focus");
  const authorEl = document.querySelector(".testimonial .focus h5");
  if (!section || !list || !focus) return;

  let track = list.querySelector(".messagesTrack");
  if (!track) {
    track = document.createElement("div");
    track.className = "messagesTrack";
    const nodes = Array.from(list.querySelectorAll("p"));
    nodes.forEach((node) => track.appendChild(node));
    list.appendChild(track);
  }

  // Clean up previous cloned nodes if this initializer runs again.
  track.querySelectorAll("p[data-clone='true']").forEach((n) => n.remove());

  const originalItems = Array.from(track.querySelectorAll("p"));
  if (originalItems.length < 2) return;

  // Duplicate full set for seamless loop.
  originalItems.forEach((item, i) => {
    item.dataset.realIndex = String(i);
    const clone = item.cloneNode(true);
    clone.dataset.clone = "true";
    clone.dataset.realIndex = String(i);
    track.appendChild(clone);
  });

  const allItems = Array.from(track.querySelectorAll("p"));
  let cycleHeight = 0;
  let pos = 0;
  let rafId = null;
  let running = false;
  let lastTs = 0;
  let activeRealIndex = -1;
  let focusPulseTimer = null;
  let h5PulseTimer = null;
  let lastPulsedRealIndex = -1;
  let lastAuthorSyncedRealIndex = -1;
  let peakTrackIndex = -1;
  let prevActiveT = 0;
  const speedPxPerSec = 36;

  // Measure one full cycle height for seamless wrap.
  const measure = () => {
    // Exact wrap point: offsetTop of the first item in the second cycle.
    const secondCycleFirst = allItems[originalItems.length];
    if (secondCycleFirst) {
      cycleHeight = secondCycleFirst.offsetTop;
    } else {
      cycleHeight = track.scrollHeight / 2;
    }
    if (cycleHeight > 0) pos = pos % cycleHeight;
  };

  // Locate focus center relative to the scrolling list viewport.
  const getFocusOffsetInList = () => {
    const listRect = list.getBoundingClientRect();
    const focusRect = focus.getBoundingClientRect();
    return focusRect.top - listRect.top + focusRect.height / 2;
  };

  // Pick active real item nearest the focus center.
  const setActiveByCenter = () => {
    if (!cycleHeight) return;
    const focusOffset = getFocusOffsetInList();
    const center = (pos + focusOffset) % cycleHeight;
    let nextIndex = 0;
    let bestDist = Number.POSITIVE_INFINITY;

    // Pick the real item whose rendered center is nearest to focus center.
    // Uses actual layout positions, so it stays correct with custom gaps/heights.
    for (let i = 0; i < originalItems.length; i += 1) {
      const item = originalItems[i];
      const itemCenter = item.offsetTop + item.offsetHeight / 2;
      const direct = Math.abs(center - itemCenter);
      const wrap = cycleHeight - direct;
      const dist = Math.min(direct, wrap);
      if (dist < bestDist) {
        bestDist = dist;
        nextIndex = i;
      }
    }
    if (nextIndex === activeRealIndex) return;
    activeRealIndex = nextIndex;
  };

  // Trigger focus-card pulse effect.
  const triggerFocusPulse = () => {
    focus.classList.remove("is-pulse");
    void focus.offsetWidth;
    focus.classList.add("is-pulse");
    if (focusPulseTimer) window.clearTimeout(focusPulseTimer);
    focusPulseTimer = window.setTimeout(() => {
      focus.classList.remove("is-pulse");
    }, 520);
  };

  // Update focus author text for the active message.
  const syncAuthorWithActive = () => {
    if (!authorEl || activeRealIndex < 0) return;
    const author = originalItems[activeRealIndex].dataset.author || `Client ${activeRealIndex + 1}`;
    authorEl.textContent = author;
    authorEl.classList.remove("is-pulse");
    void authorEl.offsetWidth;
    authorEl.classList.add("is-pulse");
    if (h5PulseTimer) window.clearTimeout(h5PulseTimer);
    h5PulseTimer = window.setTimeout(() => {
      authorEl.classList.remove("is-pulse");
    }, 520);
  };

  // Apply opacity/scale falloff based on distance from focus.
  const updateItemVisuals = () => {
    const focusOffset = getFocusOffsetInList();
    const falloff = list.clientHeight * 0.38;
    let activeT = 0;

    allItems.forEach((item) => {
      // Position of this item center inside the masked viewport.
      let centerY = item.offsetTop - pos + item.offsetHeight / 2;
      const full = cycleHeight;

      // Wrap into visible range to keep continuity at loop boundary.
      while (centerY < -item.offsetHeight) centerY += full;
      while (centerY > list.clientHeight + item.offsetHeight) centerY -= full;

      const dist = Math.abs(centerY - focusOffset);
      const t = Math.max(0, 1 - dist / Math.max(1, falloff));
      const easedT = Math.pow(t, 1.8);
      const opacity = 0.04 + easedT * 0.96;
      const scale = 0.82 + t * 0.30;

      item.style.opacity = opacity.toFixed(3);
      item.style.transform = `scale(${scale.toFixed(3)})`;

      if (Number(item.dataset.realIndex) === activeRealIndex && t > activeT) {
        activeT = t;
      }
    });

    if (activeRealIndex !== peakTrackIndex) {
      peakTrackIndex = activeRealIndex;
      prevActiveT = 0;
    }

    // Peak trigger: when message was scaling up and starts scaling down.
    const hitPeak = activeRealIndex >= 0 && activeT >= 0.78 && activeT < prevActiveT;

    if (hitPeak && lastPulsedRealIndex !== activeRealIndex) {
      triggerFocusPulse();
      lastPulsedRealIndex = activeRealIndex;
    }

    // Change h5 exactly on the same peak timing as pulse.
    if (hitPeak && lastAuthorSyncedRealIndex !== activeRealIndex) {
      syncAuthorWithActive();
      lastAuthorSyncedRealIndex = activeRealIndex;
    }

    prevActiveT = activeT;
  };

  // Advance loop position and redraw each frame.
  const frame = (ts) => {
    if (!running) return;
    if (!lastTs) lastTs = ts;
    const dt = (ts - lastTs) / 1000;
    lastTs = ts;
    pos += speedPxPerSec * dt;
    if (cycleHeight > 0) {
      while (pos >= cycleHeight) pos -= cycleHeight;
      while (pos < 0) pos += cycleHeight;
    }
    track.style.transform = `translate3d(0, ${-pos}px, 0)`;
    setActiveByCenter();
    updateItemVisuals();
    rafId = requestAnimationFrame(frame);
  };

  // Start animation loop.
  const start = () => {
    if (running) return;
    running = true;
    lastTs = 0;
    rafId = requestAnimationFrame(frame);
  };

  // Stop animation loop.
  const stop = () => {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  };

  // Recalculate geometry after viewport changes.
  const onResize = () => {
    measure();
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) start();
        else stop();
      });
    },
    { threshold: 0.3 }
  );

  measure();
  // Re-measure after initial layout settles (fonts/gaps/render pass).
  requestAnimationFrame(() => measure());
  updateItemVisuals();
  setActiveByCenter();
  io.observe(section);
  window.addEventListener("resize", onResize);
  if (typeof ResizeObserver !== "undefined") {
    const ro = new ResizeObserver(() => measure());
    ro.observe(track);
    ro.observe(list);
  }
};

