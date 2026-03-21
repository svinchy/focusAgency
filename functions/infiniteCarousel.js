export const infiniteCarousel = function infiniteCarousel() {
  const section = document.querySelector('.testimonial');
  const list = document.querySelector('.testimonial .messages');
  const focus = document.querySelector('.testimonial .focus');
  const authorEl = document.querySelector('.testimonial .focus h5');
  if (!section || !list || !focus) return;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    const firstMessage = list.querySelector('p');
    if (authorEl && firstMessage && firstMessage.dataset.author) {
      authorEl.textContent = firstMessage.dataset.author;
    }
    return;
  }

  let track = list.querySelector('.messagesTrack');
  if (!track) {
    track = document.createElement('div');
    track.className = 'messagesTrack';
    const nodes = Array.from(list.querySelectorAll('p'));
    nodes.forEach((node) => track.appendChild(node));
    list.appendChild(track);
  }

  track.querySelectorAll("p[data-clone='true']").forEach((n) => n.remove());
  const originalItems = Array.from(track.querySelectorAll('p'));
  if (originalItems.length < 2) return;

  originalItems.forEach((item, i) => {
    item.dataset.realIndex = String(i);
    const clone = item.cloneNode(true);
    clone.dataset.clone = 'true';
    clone.dataset.realIndex = String(i);
    track.appendChild(clone);
  });

  const allItems = Array.from(track.querySelectorAll('p'));
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
  let focusOffset = 0;
  let listHeight = 0;
  let originalMetrics = [];
  let allMetrics = [];

  const normalizePos = () => {
    if (!(cycleHeight > 0)) { pos = 0; return; }
    pos = ((pos % cycleHeight) + cycleHeight) % cycleHeight;
  };

  const getFocusOffsetInList = () => {
    const listRect = list.getBoundingClientRect();
    const focusRect = focus.getBoundingClientRect();
    return focusRect.top - listRect.top + focusRect.height / 2;
  };

  const measure = () => {
    listHeight = list.clientHeight;
    focusOffset = getFocusOffsetInList();
    const styles = window.getComputedStyle(track);
    const parsedGap = Number.parseFloat(styles.rowGap || styles.gap || '0');
    const gap = Number.isFinite(parsedGap) ? parsedGap : 0;
    let cursor = 0;
    originalMetrics = originalItems.map((item, realIndex) => {
      const height = item.offsetHeight;
      const metric = { realIndex, top: cursor, height, center: cursor + height / 2 };
      cursor += height + gap;
      return metric;
    });
    cycleHeight = cursor > 0 ? cursor - gap : 0;
    allMetrics = [...originalMetrics, ...originalMetrics.map((m) => ({ ...m, top: m.top + cycleHeight, center: m.center + cycleHeight }))];
    if (!(cycleHeight > 0)) {
      const fallbackHeight = track.scrollHeight / 2;
      cycleHeight = fallbackHeight > 0 ? fallbackHeight : 0;
      allMetrics = [...originalMetrics, ...originalMetrics.map((m) => ({ ...m, top: m.top + cycleHeight, center: m.center + cycleHeight }))];
    }
    normalizePos();
  };

  const setActiveByCenter = () => {
    if (!(cycleHeight > 0) || !originalMetrics.length) return;
    const center = (pos + focusOffset) % cycleHeight;
    let nextIndex = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    for (let i = 0; i < originalMetrics.length; i++) {
      const metric = originalMetrics[i];
      const direct = Math.abs(center - metric.center);
      const wrap = cycleHeight - direct;
      const dist = Math.min(direct, wrap);
      if (dist < bestDist) { bestDist = dist; nextIndex = i; }
    }
    if (nextIndex === activeRealIndex) return;
    activeRealIndex = nextIndex;
    originalItems.forEach((item, index) => { item.classList.toggle('active', index === activeRealIndex); });
  };

  const triggerFocusPulse = () => {
    focus.classList.remove('is-pulse');
    void focus.offsetWidth;
    focus.classList.add('is-pulse');
    if (focusPulseTimer) window.clearTimeout(focusPulseTimer);
    focusPulseTimer = window.setTimeout(() => { focus.classList.remove('is-pulse'); }, 520);
  };

  const syncAuthorWithActive = ({ pulse = true } = {}) => {
    if (!authorEl || activeRealIndex < 0) return;
    const author = originalItems[activeRealIndex].dataset.author || ('Client ' + (activeRealIndex + 1));
    authorEl.textContent = author;
    if (!pulse) return;
    authorEl.classList.remove('is-pulse');
    void authorEl.offsetWidth;
    authorEl.classList.add('is-pulse');
    if (h5PulseTimer) window.clearTimeout(h5PulseTimer);
    h5PulseTimer = window.setTimeout(() => { authorEl.classList.remove('is-pulse'); }, 520);
  };

  const updateItemVisuals = () => {
    if (!(cycleHeight > 0) || !allMetrics.length) return;
    const falloff = listHeight * 0.38;
    let activeT = 0;
    allItems.forEach((item, index) => {
      const metric = allMetrics[index];
      if (!metric) return;
      let centerY = metric.center - pos;
      centerY -= Math.round((centerY - focusOffset) / cycleHeight) * cycleHeight;
      const dist = Math.abs(centerY - focusOffset);
      const t = Math.max(0, 1 - dist / Math.max(1, falloff));
      const easedT = Math.pow(t, 1.8);
      const opacity = 0.04 + easedT * 0.96;
      const scale = 0.82 + t * 0.30;
      item.style.opacity = opacity.toFixed(3);
      item.style.transform = 'scale(' + scale.toFixed(3) + ')';
      if (Number(item.dataset.realIndex) === activeRealIndex && t > activeT) { activeT = t; }
    });
    if (activeRealIndex !== peakTrackIndex) { peakTrackIndex = activeRealIndex; prevActiveT = 0; }
    const hitPeak = activeRealIndex >= 0 && activeT >= 0.78 && activeT < prevActiveT;
    if (hitPeak && lastPulsedRealIndex !== activeRealIndex) { triggerFocusPulse(); lastPulsedRealIndex = activeRealIndex; }
    if (hitPeak && lastAuthorSyncedRealIndex !== activeRealIndex) { syncAuthorWithActive(); lastAuthorSyncedRealIndex = activeRealIndex; }
    prevActiveT = activeT;
  };

  const frame = (ts) => {
    if (!running) return;
    if (!lastTs) lastTs = ts;
    const dt = (ts - lastTs) / 1000;
    lastTs = ts;
    if (!(cycleHeight > 0) || !allMetrics.length) { measure(); rafId = requestAnimationFrame(frame); return; }
    pos += speedPxPerSec * dt;
    normalizePos();
    track.style.transform = 'translate3d(0, ' + (-pos) + 'px, 0)';
    setActiveByCenter();
    updateItemVisuals();
    rafId = requestAnimationFrame(frame);
  };

  const start = () => { if (running) return; running = true; lastTs = 0; rafId = requestAnimationFrame(frame); };
  const stop = () => { running = false; if (rafId) cancelAnimationFrame(rafId); rafId = null; };

  const io = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) start(); else stop(); }); }, { threshold: 0.3 });

  measure();
  requestAnimationFrame(() => measure());
  setActiveByCenter();
  syncAuthorWithActive({ pulse: false });
  updateItemVisuals();
  io.observe(section);
  window.addEventListener('resize', () => measure());
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(() => measure()); }
  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(() => measure());
    ro.observe(track);
    ro.observe(list);
  }
};
