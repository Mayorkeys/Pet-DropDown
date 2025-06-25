const loginButton = document.getElementById("login_btn");
const loginForm = document.getElementById("loginForm");
const error = document.getElementById("error");
const success = document.getElementById("success");
loginForm.addEventListener("submit", function (e) {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const url = "https://my-buddydrop.onrender.com/api/users";
  let loading = false;
  e.preventDefault();
  error.textContent = "";
  success.textContent = "";

  // Validate email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    error.textContent = "Enter a valid email address.";
    return;
  }

  // Confirm password
  if (password.length < 6) {
    error.textContent = "Enter a valid password.";
    return;
  }

  const data = {
    email,
    password,
  };
  loginButton.textContent = "Loading...";

  fetch(`${url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response; // return the response so the next .then() can use it
    })
    .then((response) => {
      loginButton.textContent = "Login";
      if (!response.ok) {
        return response.json().then((err) => {
          throw new Error(err.message || "Login failed");
        });
      }
      return response.json();
    })
    .then((data) => {
      success.textContent = data.message;
      window.location.href = "schedule.html";
      console.log("Success:", data);
    })
    .catch((error) => {
      loginButton.textContent = "Login";
      error.textContent = error.message;
      console.error("Error:", error);
    });
});
function togglePassword() {
  // Get the input field and eye icon
  const input = document.getElementById("password");
  const eye = document.getElementById("icon");

  // Check if the input is currently a password type
  if (input.type === "password") {
    // Show password: change input type to text
    input.type = "text";
    // Change eye icon to slashed eye (password visible)
    eye.textContent = "👁️‍🗨️";
  } else {
    // Hide password: change input type back to password
    input.type = "password";
    // Change eye icon to regular eye (password hidden)
    eye.textContent = "👁️";
  }
}
