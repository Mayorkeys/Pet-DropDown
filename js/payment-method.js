const paymentAmount = document.getElementById("payment_amount").innerText;
//form value
const cardNumber = document.getElementById("cardNumber").value;
const userEmail = document.getElementById("userEmail").innerText;
const expDate = document.getElementById("expDate").value;
const cvc = document.getElementById("cvc").value;
//payment button
const payButton = document.getElementById("payButton");
const cancelButton = document.getElementById("cancelButton");
const form = document.getElementById("paymentForm");

payButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log({ paymentAmount: +paymentAmount * 1000 });
  var handler = PaystackPop.setup({
    key: "pk_test_xxxxxxxxxxxxxxxxxxxxxxxx", // ✅ Replace with your **public key**
    email: userEmail, // ✅ Dynamically use user's email
    amount: +paymentAmount * 1000,
    currency: "NGN",
    ref: "" + Math.floor(Math.random() * 1000000000 + 1), // Optional ref
    callback: function (response) {
      alert("Payment complete! Reference: " + response.reference);
    },
    onClose: function () {
      window.location.href = "payment-success.html";
    },
  });
  handler.open();
});
