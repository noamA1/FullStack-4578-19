const firstNameEl = document.getElementById("firstName");
const lastNameEl = document.getElementById("lastName");
const phoneEl = document.getElementById("userPhone");
const emailEl = document.getElementById("userEmail");
const messageEl = document.getElementById("userMessage");

firstNameEl.innerText = `First Name: ${localStorage.getItem("firstNmae")}`;
lastNameEl.innerText = `Last Name: ${localStorage.getItem("lastNmae")}`;
phoneEl.innerText = `Phone: ${localStorage.getItem("phone")}`;
emailEl.innerText = `Email: ${localStorage.getItem("email")}`;
messageEl.innerText = `Message: ${localStorage.getItem("message")}`;
