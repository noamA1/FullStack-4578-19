// global function for validations

const validation = (element) => {
  console.log(element.value);
  if (
    element.value === "" ||
    element.value === null ||
    element.value.length < 2 ||
    element.value.length > 30 ||
    element.value.length > 500
  ) {
    getErrorMessage(element, false);
    return false;
  }

  return true;
};

// the function below set the red color for the error message and the input border after clicking on the button
const getErrorMessage = (element, valid) => {
  error = document.getElementById(`${element.id}Feedback`);
  console.log(element.value.length > 10);
  setMessage(element, error);
  if (!valid) {
    error.removeAttribute("hidden");
    error.style.color = "red";
    element.style.borderColor = "red";
  } else {
    element.style.borderColor = "black";
    error.setAttribute("hidden", true);
  }
};

// the function below changes the error message depends on the length of the input value, this for Ex.6.
const setMessage = (el, message) => {
  switch (el.id) {
    case "fName":
      if (el.value.length > 0 && el.value.length < 2) {
        message.innerText = `first name must contain at last 2 characters`;
      } else if (el.value.length > 30) {
        message.innerText = `first name must contain maximum 30 characters`;
      }
      break;
    case "lName":
      if (el.value.length > 0 && el.value.length < 2) {
        message.innerText = `last name must contain at last 2 characters`;
      } else if (el.value.length > 30) {
        message.innerText = `last name must contain maximum 30 characters`;
      }
      break;
    case "phone":
      if (el.value.length > 0 && el.value.length < 2) {
        message.innerText = `phone must contain at last 2 characters`;
      } else if (el.value.length > 30) {
        message.innerText = `phone must contain maximum 30 characters`;
      }
      break;
    case "mail":
      if (el.value.length > 30) {
        message.innerText = `email must contain maximum 30 characters`;
      }
      break;
    case "messageText":
      if (el.value.length > 0 && el.value.length < 2) {
        message.innerText = `message must contain at last 2 characters`;
      } else if (el.value.length > 500) {
        message.innerText = `message must contain maximum 500 characters`;
      }
      break;
  }
};

// #7: bonus

const formEl = document.getElementsByClassName("form");
const submitBtn = document.getElementById("submit");
let error;

submitBtn.addEventListener("click", function () {
  let str = "Hello",
    valid = true;
  for (element of formEl[0]) {
    if (element.type !== "submit") {
      switch (element.id) {
        case "fName":
          validation(element)
            ? localStorage.setItem("firstNmae", `${element.value}`)
            : (valid = false);
          break;
        case "lName":
          validation(element)
            ? localStorage.setItem("lastNmae", `${element.value}`)
            : (valid = false);
          break;
        case "phone":
          validation(element)
            ? localStorage.setItem("phone", `${element.value}`)
            : (valid = false);
          break;
        case "mail":
          validation(element)
            ? localStorage.setItem("email", `${element.value}`)
            : (valid = false);
          break;
        case "messageText":
          validation(element)
            ? localStorage.setItem("message", `${element.value}`)
            : (valid = false);
          break;
      }

      element.addEventListener("focus", function (e) {
        e.preventDefault();
        getErrorMessage(e.target, true);
      });
    }
  }
  if (valid) {
    window.location.href = "userDetails.html";
  }
});

// for user details page
// const firstNameEl = document.getElementById("firstName");
// const lastNameEl = document.getElementById("lastName");
// const phoneEl = document.getElementById("userPhone");
// const emailEl = document.getElementById("userEmail");
// const messageEl = document.getElementById("userMessage");

// firstNameEl.innerText = `First Name: ${localStorage.getItem("firstNmae")}`;
// lastNameEl.innerText = `Last Name: ${localStorage.getItem("lastNmae")}`;
// phoneEl.innerText = `Phone: ${localStorage.getItem("phone")}`;
// emailEl.innerText = `Email: ${localStorage.getItem("email")}`;
// messageEl.innerText = `Message: ${localStorage.getItem("message")}`;
