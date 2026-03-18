// 1) Attach banner scroll translation.
// 2) Throttle updates with rAF.
// 3) Enable wave-ready state class.
export function bannerAnimations() {
  const banner = document.querySelector(".bannerTitle, .titleBanner");
  if (!banner) return;

  banner.style.willChange = "transform";
  banner.style.transform = "translate3d(0, 0px, 0)";

  let ticking = false;
  let lastOffset = Number.NaN;
  // Update banner position using current scroll offset.
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY || window.pageYOffset;
      const offset = Math.round(y * 0.6 * 100) / 100;
      if (offset !== lastOffset) {
        banner.style.transform = `translate3d(0, ${offset}px, 0)`;
        lastOffset = offset;
      }
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();

  // Enable per-letter wave (same behavior style as footer text wave).
  banner.classList.add("is-wave-active");
}

// Build per-character spans so the banner title can animate as a wave.
export function applyBannerTitleWave() {
  const title = document.querySelector(".bannerTitle h1, .titleBanner h1");
  if (!title) return;

  const source = title.textContent || "";
  if (!source.trim()) return;

  // Prevent rebuilding if already applied for the same text.
  if (title.dataset.waveText === source && title.querySelector(".wave-char")) return;

  title.dataset.waveText = source;
  title.textContent = "";

  const frag = document.createDocumentFragment();
  let charIndex = 0;
  const tokens = source.split(/(\s+)/);
  tokens.forEach((token) => {
    if (!token) return;
    if (/^\s+$/.test(token)) {
      frag.appendChild(document.createTextNode(token));
      return;
    }

    const word = document.createElement("span");
    word.className = "wave-word";

    Array.from(token).forEach((ch) => {
      const span = document.createElement("span");
      span.className = "wave-char";
      span.style.setProperty("--char-index", String(charIndex));
      span.textContent = ch;
      word.appendChild(span);
      charIndex += 1;
    });

    frag.appendChild(word);
  });

  title.appendChild(frag);
}
