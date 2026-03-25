const form = document.querySelector("form");
const success = document.getElementById("success");
const invalid = document.getElementById("invalid");
const input = document.getElementById("email");
const user = document.getElementById("user-email");

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function showError(message) {
  invalid.textContent = message;
  invalid.classList.remove("hidden");
  input.classList.add("input-error");
}

function showSuccess(email) {
  form.classList.add("hidden");
  success.classList.remove("hidden");
  user.textContent = email;
}

function validateEmail(email) {
  if (!email.trim()) {
    return "Email cannot be empty";
  }
  if (!emailRegex.test(email)) {
    return "Valid email required";
  }
  return null;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = input.value;
  const error = validateEmail(email);

  if (error) {
    showError(error);
    return;
  }

  showSuccess(email);
});
