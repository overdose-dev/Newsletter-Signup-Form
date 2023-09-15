<<<<<<< HEAD
const emailInput = document.getElementById("email_input");
const invalidEmail = document.querySelector(".invalid");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (!email) {
    // If the email field is empty
    emailInput.style.border = "2px solid #ff5476";
    invalidEmail.style.display = "block";
  } else if (!isValidEmail(email)) {
    // If the email is not properly formatted
    emailInput.style.border = "2px solid #ff5476";
    invalidEmail.style.display = "block";
  } else {
    // If the email is valid
    emailInput.style.border = "2px solid silver";
    invalidEmail.style.display = "none";
    window.location.href = `success.html?email=${encodeURIComponent(email)}`;
  }
});

// Function to validate email format using a simple regex pattern
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
=======
const emailInput = document.getElementById("email_input");
const invalidEmail = document.querySelector(".invalid");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (!email) {
    // If the email field is empty
    emailInput.style.border = "2px solid #ff5476";
    invalidEmail.style.display = "block";
  } else if (!isValidEmail(email)) {
    // If the email is not properly formatted
    emailInput.style.border = "2px solid #ff5476";
    invalidEmail.style.display = "block";
  } else {
    // If the email is valid
    emailInput.style.border = "2px solid silver";
    invalidEmail.style.display = "none";
    window.location.href = `success.html?email=${encodeURIComponent(email)}`;
  }
});

// Function to validate email format using a simple regex patternHe
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
>>>>>>> f1e49b7 (changed comment)
