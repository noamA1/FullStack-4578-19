/**
 * Some comment for testing
 **/

// Helper functions
const saveInLocalStorage = (key, value) => {
  //   userEmail = value;
  let message;
  if (value !== "") {
    localStorage.setItem(`${key}`, value);
  } else {
    switch (key) {
      case "userEmail":
        message = "Email address is required";
        break;
      case "userPhone":
        message = "Phone number is required";
        break;
    }
    alert(message);
  }
};

const loadFromLocalStorage = (key) => {
  //   console.log(localStorage.getItem(`${key}`));
  if (localStorage.getItem(`${key}`) === null) {
    switch (key) {
      case "userEmail":
        alert("Sorry, we can't find your email address");
        break;
      case "userPhone":
        alert("Sorry, we can't find your phone number");
        break;
    }
    return null;
  } else {
    return localStorage.getItem(`${key}`);
  }
};
// #1: email

const loadButton = document.getElementById("email__button-load");
const saveButton = document.getElementById("email__button-save");
const emailInput = document.getElementById("email__input");

let userEmail;
saveButton.addEventListener("click", function () {
  //   userEmail = emailInput.value;
  //   localStorage.setItem("userEmail", userEmail);
  saveInLocalStorage("userEmail", emailInput.value);
  emailInput.value = "";
});

loadButton.addEventListener("click", function () {
  //   if (localStorage.getItem("userEmail")) {
  // let emailFromStorage = localStorage.getItem("userEmail");
  let emailFromStorage = loadFromLocalStorage("userEmail");
  alert(`Your Email: ${emailFromStorage}`);
  //   }
});

// #2: Phone
const phoneLoadButton = document.getElementById("phone__button-load");
const phoneSaveButton = document.getElementById("phone__button-save");
const phoneInput = document.getElementById("phone__input");

let userPhone;
phoneSaveButton.addEventListener("click", function () {
  saveInLocalStorage("userPhone", phoneInput.value);
  phoneInput.value = "";
});

phoneLoadButton.addEventListener("click", function () {
  let phoneFromStorage = loadFromLocalStorage("userPhone");
  if (phoneFromStorage !== null) {
    alert(`Your Phone: ${phoneFromStorage}`);
  }
});

// #3: Full name, session storage

const firstNameElement = document.querySelector("#firstName__input");
const lastNameElement = document.querySelector("#lastName__input");
const fullNameButtonSave = document.getElementById("fullName__button-save");
const fullNameButtonLoad = document.getElementById("fullName__button-load");

fullNameButtonSave.addEventListener("click", function () {
  if (firstNameElement.value === "") {
    alert("first name is required");
  } else if (lastNameElement.value === "") {
    alert("last name is required");
  } else {
    sessionStorage.setItem("first-name", firstNameElement.value);
    firstNameElement.value = "";
    sessionStorage.setItem("last-name", lastNameElement.value);
    lastNameElement.value = "";
  }
});

fullNameButtonLoad.addEventListener("click", function () {
  let fullName;
  fullName = `Your full name: ${sessionStorage.getItem(
    "first-name"
  )} ${sessionStorage.getItem("last-name")}`;
  alert(fullName);
});

// #4: Full address

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
  error = document.getElementById(`${element.id}Feedback`);
  if (!valid) {
    error.removeAttribute("hidden");
    error.style.color = "red";
    element.style.borderColor = "red";
  } else {
    element.style.borderColor = "black";
    error.setAttribute("hidden", true);
  }
};

const fullAddressForm = document.getElementsByClassName("fullAddress");
// console.log(fullAddressForm);
const fullAddressButtonSaveElement = document.querySelector(
  "#fullAddress__button-save"
);
const fullAddressButtonLoadElement = document.querySelector(
  "#fullAddress__button-load"
);

let cityElement, streetElement, houseElement, zipElement;
let address;

fullAddressButtonSaveElement.addEventListener("click", function () {
  let isValid = true;
  for (element of fullAddressForm[0]) {
    if (element.type !== "button") {
      switch (element.id) {
        case `city__input`:
          validation(element)
            ? (cityElement = element.value)
            : (isValid = false);
          break;
        case `street__input`:
          validation(element)
            ? (streetElement = element.value)
            : (isValid = false);
          break;
        case `houseNumber__input`:
          validation(element)
            ? (houseElement = element.value)
            : (isValid = false);
          break;
        case `zipCode__input`:
          validation(element)
            ? (zipElement = element.value)
            : (isValid = false);
          break;
      }
      element.addEventListener("focus", function (e) {
        e.preventDefault();
        getErrorMessage(e.target, true);
      });
    }

    if (isValid) {
      localStorage.setItem(
        "address",
        JSON.stringify({
          city: cityElement,
          street: streetElement,
          houseNumber: houseElement,
          zipCode: zipElement,
        })
      );
    }
    element.value = "";
  }
});

fullAddressButtonLoadElement.addEventListener("click", function () {
  if (localStorage.getItem("address") !== null) {
    address = JSON.parse(localStorage.getItem("address"));
    //   console.log(address);
    for (element of fullAddressForm[0]) {
      switch (element.id) {
        case `city__input`:
          element.value = address.city;
          break;
        case `street__input`:
          element.value = address.street;
          break;
        case `houseNumber__input`:
          element.value = address.houseNumber;
          break;
        case `zipCode__input`:
          element.value = address.zipCode;
          break;
      }
    }
    //   dislplay the data from the local storage on the page
    const addressDataElement =
      document.getElementsByClassName("fullAddressOutput");

    const dataEl = document.getElementById("data");
    addressDataElement[0].removeAttribute("hidden");
    dataEl.innerHTML = `<p> <strong>City: </strong> ${address.city}</p> <p><strong>Street: </strong>${address.street}</p> <p><strong>House Number: </strong>${address.houseNumber}</p> <p><strong>Zip Code: </strong>${address.zipCode}</p>`;
  }
});
