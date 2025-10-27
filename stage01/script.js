function updateTime() {
  const timeElement = document.getElementById("user-time");
  timeElement.textContent = Date.now();
}
updateTime();

setInterval(updateTime, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return; // Only run on contact page

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const successMessage = document.querySelector(
    '[data-testid="test-contact-success"]'
  );

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    // Reset all error messages
    document
      .querySelectorAll(".error-message")
      .forEach((el) => (el.textContent = ""));

    // Validate Full Name
    if (!nameInput.value.trim()) {
      isValid = false;
      document.querySelector(
        '[data-testid="test-contact-error-name"]'
      ).textContent = "Full name is required.";
    }

    // Validate Email
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailInput.value.trim()) {
      isValid = false;
      document.querySelector(
        '[data-testid="test-contact-error-email"]'
      ).textContent = "Email is required.";
    } else if (!emailPattern.test(emailInput.value)) {
      isValid = false;
      document.querySelector(
        '[data-testid="test-contact-error-email"]'
      ).textContent = "Enter a valid email (e.g., name@example.com).";
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      isValid = false;
      document.querySelector(
        '[data-testid="test-contact-error-subject"]'
      ).textContent = "Subject is required.";
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      isValid = false;
      document.querySelector(
        '[data-testid="test-contact-error-message"]'
      ).textContent = "Message is required.";
    } else if (messageInput.value.length < 10) {
      isValid = false;
      document.querySelector(
        '[data-testid="test-contact-error-message"]'
      ).textContent = "Message must be at least 10 characters.";
    }

    // Success handling
    if (isValid) {
      successMessage.hidden = false;
      form.reset();
    } else {
      successMessage.hidden = true;
    }
  });
});
