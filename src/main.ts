// ==============================================
// PORTFOLIO - TypeScript for Interactivity
// ==============================================

/**
 * Initialize the application
 */
function init(): void {
  console.log("Portfolio initializing...");

  setupMobileMenu();
  setupContactForm();

  console.log("Portfolio initialized! ✨");
}

/**
 * Setup mobile menu toggle
 * ✅ COMPLETE - This function is done for you!
 */
function setupMobileMenu(): void {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (!menuToggle || !navLinks) {
    console.warn("Menu elements not found");
    return;
  }

  // Toggle menu on button click
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking nav links
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * TODO: Validate email format
 *
 * Task: Check if email has valid format (something@something.something)
 * Hint: Use this regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 *
 * @param email - The email string to validate
 * @returns true if valid email format, false otherwise
 *
 * Examples:
 * validateEmail('test@example.com') → true
 * validateEmail('invalid-email') → false
 * validateEmail('no@domain') → false
 */
function validateEmail(_email: string): boolean {
  // TODO: Implement email validation using regex
  // Replace 'true' with actual validation logic
  return true;
}

/**
 * TODO: Validate required fields
 *
 * Task: Check if value is not empty after removing spaces
 * Hint: Use .trim() to remove spaces, then check if length > 0
 *
 * @param value - The string to validate
 * @returns true if not empty, false if empty
 *
 * Examples:
 * validateRequired('Hello') → true
 * validateRequired('') → false
 * validateRequired('   ') → false (only spaces)
 */
function validateRequired(_value: string): boolean {
  // TODO: Check if value is not empty after trimming
  // Replace 'true' with actual validation logic
  return true;
}

/**
 * TODO: Validate minimum length
 *
 * Task: Check if value has at least minLength characters
 * Hint: Use .trim() first, then check .length property
 *
 * @param value - The string to validate
 * @param minLength - Minimum required length
 * @returns true if meets minimum length, false otherwise
 *
 * Examples:
 * validateMinLength('Hello World', 5) → true
 * validateMinLength('Hi', 5) → false
 */
function validateMinLength(_value: string, _minLength: number): boolean {
  // TODO: Check if value length is >= minLength
  // Replace 'true' with actual validation logic
  return true;
}

/**
 * Setup contact form with validation
 * ✅ COMPLETE - This function is done, but it uses YOUR validation functions!
 */
function setupContactForm(): void {
  const form = document.getElementById("contact-form") as HTMLFormElement;
  const errorDiv = document.getElementById("form-error");

  if (!form || !errorDiv) {
    console.warn("Form elements not found");
    return;
  }

  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    // Get form values
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const messageInput = document.getElementById(
      "message",
    ) as HTMLTextAreaElement;

    const name = nameInput?.value || "";
    const email = emailInput?.value || "";
    const message = messageInput?.value || "";

    // Validate all fields using YOUR functions
    const errors: string[] = [];

    // Validate name
    if (!validateRequired(name)) {
      errors.push("Name is required");
    }

    // Validate email
    if (!validateRequired(email)) {
      errors.push("Email is required");
    } else if (!validateEmail(email)) {
      errors.push("Please enter a valid email");
    }

    // Validate message
    if (!validateRequired(message)) {
      errors.push("Message is required");
    } else if (!validateMinLength(message, 10)) {
      errors.push("Message must be at least 10 characters");
    }

    // Display errors or success
    if (errors.length > 0) {
      errorDiv.textContent = errors.join(". ");
      errorDiv.classList.add("show");
    } else {
      // Success!
      errorDiv.classList.remove("show");
      alert("Thank you for your message and remarks! your form is submitted");
      form.reset();
    }
  });
}

// Run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}