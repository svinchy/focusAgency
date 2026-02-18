// 1) Split footer text into per-character spans.
// 2) Toggle wave-active class based on footer visibility.
export function textWave() {
  const paragraph = document.querySelector("footer > p");
  if (!paragraph) return;

  const source = paragraph.dataset.waveText || paragraph.textContent || "";
  paragraph.dataset.waveText = source;
  paragraph.textContent = "";

  const frag = document.createDocumentFragment();
  Array.from(source).forEach((ch, i) => {
    const span = document.createElement("span");
    span.className = "wave-char";
    span.style.setProperty("--char-index", String(i));
    span.textContent = ch === " " ? "\u00A0" : ch;
    frag.appendChild(span);
  });
  paragraph.appendChild(frag);

  const footer = document.querySelector("footer");
  if (!footer) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        footer.classList.toggle("is-wave-active", entry.isIntersecting);
      });
    },
    { threshold: 0.2 }
  );

  io.observe(footer);
}
