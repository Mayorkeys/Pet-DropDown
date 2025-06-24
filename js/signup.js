const submitButton = document.getElementById("submit-btn");
const signupForm = document.getElementById("signupform");
const error = document.getElementById("error");
const success = document.getElementById("success");
signupForm.addEventListener("submit", function (e) {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("passWord").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const url = "https://my-buddydrop.onrender.com/api/users";

  e.preventDefault();
  error.textContent = "";
  success.textContent = "";


  // Validate first name
  if (firstName === "") {
    error.textContent = "First name is required.";
    return;
  }

  // Validate last name
  if (lastName === "") {
    error.textContent = "Last name is required.";
    return;
  }

  // Validate email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    error.textContent = "Enter a valid email address.";
    return;
  }

  // Validate password
  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    return;
  }

  // Validate phone number (must be digits only)
  const phonePattern = /^\d{10,15}$/; // Accepts 10 to 15 digits
  if (!phonePattern.test(phoneNumber)) {
    error.textContent = "Enter a valid phone number.";
    return;
  }
  const data = {
    name: `${firstName} ${lastName}`,
    email,
    phone: phoneNumber,
    password,
  };
  fetch(`${url}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Send JSON data
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        error.textContent = response.message
        throw new Error(response.message);
      }
      return response.json(); // Parse response body as JSON
    })
    .then((data) => {
        success.textContent = data.message
        window.location.href = "buddy login.html";
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
