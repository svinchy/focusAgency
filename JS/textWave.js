let footerWaveObserver = null;

// 1) Split footer text into per-character spans.
// 2) Toggle wave-active class based on footer visibility.
export function textWave(nextText) {
  const paragraph = document.querySelector("footer > p");
  if (!paragraph) return;

  const source =
    typeof nextText === "string"
      ? nextText
      : paragraph.textContent || paragraph.dataset.waveText || "";
  const alreadyRendered = paragraph.dataset.waveText === source && paragraph.querySelector(".wave-char");

  if (!alreadyRendered) {
    paragraph.dataset.waveText = source;
    paragraph.textContent = "";

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

    paragraph.appendChild(frag);
  }

  const footer = document.querySelector("footer");
  if (!footer) return;

  if (!footerWaveObserver) {
    footerWaveObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          footer.classList.toggle("is-wave-active", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    footerWaveObserver.observe(footer);
  }
}
