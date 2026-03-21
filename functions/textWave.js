export const textWave = function textWave(text) {
  const footerP = document.querySelector('footer > p');
  if (!footerP) return;
  const source = text || footerP.textContent || '';
  if (!source.trim()) return;
  footerP.textContent = '';
  const frag = document.createDocumentFragment();
  let charIndex = 0;
  const tokens = source.split(/(\s+)/);
  tokens.forEach((token) => {
    if (!token) return;
    if (/^\s+$/.test(token)) { frag.appendChild(document.createTextNode(token)); return; }
    const word = document.createElement('span');
    word.className = 'wave-word';
    Array.from(token).forEach((ch) => {
      const span = document.createElement('span');
      span.className = 'wave-char';
      span.style.setProperty('--char-index', String(charIndex));
      span.textContent = ch;
      word.appendChild(span);
      charIndex += 1;
    });
    frag.appendChild(word);
  });
  footerP.appendChild(frag);
  footerP.classList.add('is-wave-active');
  window.__textWave = textWave;
};
