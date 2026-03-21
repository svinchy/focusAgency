export const toggleCrispChat = function toggleCrispChat() {
  const overlay = document.getElementById('crisp-chat-overlay');
  const chatBtn = document.querySelector('.chatButton');
  if (!overlay) return;

  const isOpen = overlay.classList.toggle('is-visible');
  if (chatBtn) chatBtn.classList.toggle('is-active', isOpen);
  document.body.classList.toggle('chat-panel-open', isOpen);
  if (chatBtn) chatBtn.setAttribute('aria-expanded', String(isOpen));

  if (isOpen) {
    overlay.removeAttribute('aria-hidden');
    overlay.removeAttribute('inert');
    const iframe = document.getElementById('crisp-chat-frame');
    if (iframe && iframe.dataset.src && !iframe.src) {
      iframe.src = iframe.dataset.src;
    }
    if (document.body) document.body.dataset.chatScrollLock = '1';
  } else {
    overlay.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('inert', '');
    if (document.body) document.body.dataset.chatScrollLock = '0';
  }
};
