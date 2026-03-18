// 1) Bind submit handler to footer contact form.
// 2) Show in-flight/success/error status to the user.
// 3) Restore button state after request finishes.
export function initContactForm() {
  const contactForm = document.querySelector("footer form#contact");
  if (!contactForm) return;

  const submitButton = contactForm.querySelector("button[type='submit']");
  const statusElement = document.querySelector("#contact-status");

  contactForm.addEventListener("submit", async (event) => {
    if (!submitButton || !statusElement) return;

    event.preventDefault();

    const defaultButtonLabel = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "sending...";

    statusElement.hidden = false;
    statusElement.textContent = "Sending your message...";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Form submission failed");

      contactForm.reset();
      statusElement.textContent = "Message sent successfully.";
    } catch {
      statusElement.textContent = "Something went wrong. Please try again.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = defaultButtonLabel;
    }
  });
}
