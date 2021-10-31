// global function for validations
const validation = (element) => {
  if (element.value === "") {
    getErrorMessage(element, false);
    return false;
  }
  return true;
};

// the function below set the red color for the error message and the input border after clicking on the button
const getErrorMessage = (element, valid) => {
  error = document.getElementById("error");
  if (!valid) {
    error.removeAttribute("hidden");
    error.innerHTML = `<strong>Error!</strong> ${element.name} is required.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>`;
    error.style.color = "red";
    element.style.borderColor = "red";
    element.style.backgroundColor = "#ff6b6b";
  } else {
    element.style.borderColor = "black";
    error.setAttribute("hidden", true);
    element.style.backgroundColor = "#fff";
  }
};

// the function below clear and set to defult thr value of all form elements
const clearForm = (el) => {
  if (el.type !== "button") {
    if (el.type === "select-one") {
      el.value = "none";
    } else if (el.type === "radio") {
      el.checked = false;
    } else {
      el.value = "";
    }
  }
};

// variables for the HTML elements
const formElement = document.getElementsByClassName("contectUs");
const sendButton = document.querySelector(".send");
const clearButton = document.querySelector(".clear");

// helper variables
let firstNameElement,
  lastNameElement,
  genderElement,
  cityElement,
  messageElement;
let customerInfo = {};

sendButton.addEventListener("click", function () {
  let isValid = true;
  for (element of formElement[0]) {
    if (element.type !== "button") {
      switch (element.id) {
        case `firstName`:
          validation(element)
            ? (firstNameElement = element.value)
            : (isValid = false);
          break;
        case `lastName`:
          validation(element)
            ? (lastNameElement = element.value)
            : (isValid = false);
          break;
        case `message`:
          validation(element)
            ? (messageElement = element.value)
            : (isValid = false);
          break;
        case `maleRadio`:
          element.checked ? (genderElement = element.value) : "";
          break;
        case `femaleRadio`:
          element.checked ? (genderElement = element.value) : "";
          break;
        case `city`:
          cityElement = element.value;
          break;
      }
      element.addEventListener("focus", function (e) {
        e.preventDefault();
        getErrorMessage(e.target, true);
      });
    }
    if (isValid) {
      customerInfo = {
        firstName: firstNameElement,
        lastName: lastNameElement,
        gender: genderElement,
        city: cityElement,
        message: messageElement,
      };
      sessionStorage.setItem("customerInfo", JSON.stringify(customerInfo));
      window.location.href = "save.html";
    }
  }
});

clearButton.addEventListener("click", function () {
  for (element of formElement[0]) {
    if (element.type !== "button") {
      clearForm(element);
    }
  }
});
