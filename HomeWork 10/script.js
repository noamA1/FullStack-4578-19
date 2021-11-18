// const firstNameEl = document.querySelector("#firstName");
// console.log(firstNameEl);
// const buttonEl = document.getElementById("firstNameBtn");

// #1
// buttonEl.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(firstNameEl.value);
//   if (firstNameEl.value === "" || firstNameEl.value === null) {
//     alert("Error! you must enter your first name.");
//   } else {
//     alert(`The first name you entered is: ${firstNameEl.value}`);
//   }
// });

// #2
// buttonEl.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(firstNameEl.value);
//   if (firstNameEl.value === "" || firstNameEl.value === null) {
//     alert("Error! you must enter your first name.");
//     firstNameEl.style.borderColor = "red";
//   } else {
//     alert(`The first name you entered is: ${firstNameEl.value}`);
//     firstNameEl.value = "";
//     firstNameEl.style.borderColor = "black";
//   }
// });
// const inputFocus = () => {
//   if (firstNameEl.value !== "" || firstNameEl.value !== null) {
//     firstNameEl.style.borderColor = "black";
//   }
// };

// #3
// const errorEl = document.getElementById("error");
// buttonEl.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(firstNameEl.value);
//   if (firstNameEl.value === "" || firstNameEl.value === null) {
//     alert("Error! you must enter your first name.");
//     firstNameEl.style.borderColor = "red";
//     errorEl.style.display = "block";
//     errorEl.removeAttribute("hidden");
//   } else {
//     alert(`The first name you entered is: ${firstNameEl.value}`);
//     firstNameEl.value = "";
//   }
// });

// const inputFocus = () => {
//   if (firstNameEl.value !== "" || firstNameEl.value !== null) {
//     console.log("in if");
//     firstNameEl.style.borderColor = "black";
//     errorEl.style.display = "none";
//     errorEl.setAttribute("hidden", true);
//   }
// };

// global function for validations

const validation = (element) => {
  console.log(element.value.length);
  if (
    element.value === "" ||
    element.value === null ||
    element.value.length < 2 ||
    element.value.length > 30
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
    case "mail":
      if (el.value.length > 30) {
        message.innerText = `email must contain maximum 30 characters`;
      }
      break;
  }
};
// #4
// const formEl = document.getElementsByClassName("form");
// const submitBtn = document.getElementById("submit");
// const firstNameEl = document.getElementById("fName");
// const lastNameEl = document.getElementById("lName");
// let error;

// submitBtn.addEventListener("click", function () {

//   let firstNameValidation = validation(firstNameEl);
//   let lastNameValidation = validation(lastNameEl);
//   if (firstNameValidation && lastNameValidation) {
//     alert(`Hello ${firstNameEl.value} ${lastNameEl.value}`);
//   }
// });

// firstNameEl.addEventListener("focus", function (e) {
//   e.preventDefault();
//   getErrorMessage(e.target, true);
// });
// lastNameEl.addEventListener("focus", function (e) {
//   e.preventDefault();
//   getErrorMessage(e.target, true);
// });

// #5, #6

const formEl = document.getElementsByClassName("form");
const submitBtn = document.getElementById("submit");
let error;

submitBtn.addEventListener("click", function () {
  let str = "Hello",
    valid = true;
  for (element of formEl[0]) {
    if (element.type === "text" || element.type === "email") {
      switch (element.id) {
        case "fName":
          validation(element) ? (str += ` ${element.value} `) : (valid = false);
          break;
        case "lName":
          validation(element) ? (str += `${element.value} `) : (valid = false);
          break;
        case "mail":
          validation(element)
            ? (str += `your email: ${element.value} `)
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
    alert(str);
  }
});
