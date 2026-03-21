export const contactForm = function contactForm() {
  const form = document.querySelector('footer form#contact');
  if (!form) return;
  const submitButton = form.querySelector("button[type='submit']");
  const statusElement = document.querySelector('#contact-status');

  form.addEventListener('submit', async (event) => {
    if (!submitButton || !statusElement) return;
    event.preventDefault();
    const defaultLabel = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'sending...';
    statusElement.hidden = false;
    statusElement.textContent = 'Sending your message...';
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Form submission failed');
      form.reset();
      statusElement.textContent = 'Message sent successfully.';
    } catch {
      statusElement.textContent = 'Something went wrong. Please try again.';
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = defaultLabel;
    }
  });
};
