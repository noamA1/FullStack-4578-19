// global helper functions
// global function to Genrate random number
const getRandomNumber = (min, max) => {
  let number = Math.random() * (max - min) + min;
  if (String(number).substr(0, 1) === "0") {
    return min;
  }
  if (number % 1 < 0.5) {
    number = Math.floor(number);
  } else {
    number = Math.ceil(number);
  }

  return number;
};

// the funtion below change the message colors, green for success and red for failure
const setMessageTextColor = (element, flag) => {
  if (flag) {
    element.style.color = "#40c057";
  } else {
    element.style.color = "#e03131";
  }
};

// this function change the buttons text and shoing the loading spinner
const setLoadingSpinner = (element, isLoading, text) => {
  if (isLoading) {
    element.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true">
          </span>&#160;Loading...`;
    element.disabled = true;
  } else {
    element.disabled = false;
    element.innerHTML = text;
  }
};

// #4.1: get working day with time out

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const daysTimeOutButton = document.querySelector(".getDaySetTimeOut");
const daysTimeOutText = document.querySelector(".daySetTimeOut");

daysTimeOutButton.addEventListener("click", () => {
  daysTimeOutText.innerHTML = "";
  setLoadingSpinner(daysTimeOutButton, true, null);

  generateWorkingDayAfterDelayAsync()
    .then((day) => {
      daysTimeOutText.innerHTML = `You got ${day}, to work this time`;
      setMessageTextColor(daysTimeOutText, 1);
    })
    .catch(() => {
      daysTimeOutText.innerHTML = `Sorry you can't work on Friday or Saturday`;
      setMessageTextColor(daysTimeOutText, 0);
    })
    .then(() => {
      setLoadingSpinner(daysTimeOutButton, false, "Get your lucky day");
    });
});

const generateWorkingDayAfterDelayAsync = () => {
  let daysTimeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let index = getRandomNumber(0, days.length - 1);

      if (days[index] === "Friday" || days[index] === "Saturday") {
        reject();
      }
      resolve(days[index]);
    }, 1000);
  });

  return daysTimeoutPromise;
};

// #4.2: get working day with await

const daysAwaitButton = document.querySelector(".getDayAwait");
const daysAwaitText = document.querySelector(".dayAwait");

daysAwaitButton.addEventListener("click", async () => {
  daysAwaitText.innerHTML = "";
  try {
    let day = await generateWorkingDayAfterDelayAsync();
    daysAwaitText.innerHTML = `You got ${day}, to work this time`;
    setMessageTextColor(daysAwaitText, 1);
  } catch (e) {
    daysAwaitText.innerHTML = `Sorry you can't work on Friday or Saturday`;
    setMessageTextColor(daysAwaitText, 0);
  }
  //   call to toast function to display the toast element after the await
  $(".toast").toast("show");
});

// const generateWorkingDayAfterDelayAsyncAwait = () => {
//   let daysAwaitPromise = new Promise((resolve, reject) => {
//     let index = getRandomNumber(0, days.length - 1);

//     if (days[index] === "Friday" || days[index] === "Saturday") {
//       reject();
//     }
//     resolve(days[index]);
//   });
//   return daysAwaitPromise;
// };

// #5.1: Get array of random numbers with timeout

const randomArraySetTimeoutButton = document.querySelector(
  ".getArraySetTimeOut"
);
const randomArraySetTimeoutText = document.querySelector(
  ".randomArraySetTimeOut"
);

randomArraySetTimeoutButton.addEventListener("click", () => {
  randomArraySetTimeoutText.innerHTML = "";
  setLoadingSpinner(randomArraySetTimeoutButton, true, null);
  getArrayFromServerAsync(10)
    .then((arr) => {
      randomArraySetTimeoutText.innerHTML = `${[...arr]}`;
      setMessageTextColor(randomArraySetTimeoutText, 1);
    })
    .catch(() => {
      randomArraySetTimeoutText.innerHTML = `Sorry we could not get any array this time`;
      setMessageTextColor(randomArraySetTimeoutText, 0);
    })
    .then(() => {
      setLoadingSpinner(
        randomArraySetTimeoutButton,
        false,
        "Get your random array"
      );
    });
});

const getArrayFromServerAsync = (size) => {
  let randomNumberArray = [],
    n;
  let arrayPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      n = getRandomNumber(0, 100);
      if (n % 2 !== 0) {
        reject();
      } else {
        for (let i = 0; i < size; i++) {
          randomNumberArray.push(getRandomNumber(0, 100));
        }
        resolve(randomNumberArray);
      }
    }, 1000);
  });
  return arrayPromise;
};

// #5.2: Get array of random numbers with await

const randomArrayAwaitButton = document.querySelector(".getArrayAwait");
const randomArrayAwaitText = document.querySelector(".randomArrayAwait");
const arrayLength = 10;

randomArrayAwaitButton.addEventListener("click", async () => {
  randomArrayAwaitText.innerHTML = "";
  try {
    let array = await getArrayFromServerAsync(arrayLength);
    randomArrayAwaitText.innerHTML = `${[...array]}`;
    setMessageTextColor(randomArrayAwaitText, 1);
  } catch (error) {
    randomArrayAwaitText.innerHTML = `Sorry we could not get any array this time`;
    setMessageTextColor(randomArrayAwaitText, 0);
  }
  $(".toast").toast("show");
});

// const getArrayFromServerAsyncAwait = async (size) => {
//   let randomNumberArray = [],
//     n;
//   let arrayPromise = await new Promise((resolve, reject) => {
//     n = getRandomNumber(0, 100);
//     if (n % 2 !== 0) {
//       reject();
//     } else {
//       for (let i = 0; i < size; i++) {
//         randomNumberArray.push(getRandomNumber(0, 100));
//       }
//       resolve(randomNumberArray);
//     }
//   });
//   return arrayPromise;
// };

// #6.1: Get pizza from server with timeout
const pizzaFromServerButton = document.querySelector(
  ".getPizzaFromServerSetTimeOut"
);
const pizzaFromServerText = document.querySelector(
  ".pizzaFromServerSetTimeOut"
);

pizzaFromServerButton.addEventListener("click", () => {
  pizzaFromServerText.innerHTML = "";
  setLoadingSpinner(pizzaFromServerButton, true, null);
  getPizzaFromServerAsync()
    .then((pizza) => {
      pizzaFromServerText.innerHTML = `Your pizza 🍕: <ul>
            <li>
                <strong> pizza size: </strong> ${pizza.diameter}
            </li>
            <li>
            <strong> toppings: </strong> ${pizza.toppings}
            </li>
            <li>
            <strong> price: </strong> ${pizza.price}
            </li>
        </ul>`;
      setMessageTextColor(pizzaFromServerText, 1);
    })
    .catch(() => {
      pizzaFromServerText.innerHTML = `Sorry we could not make your pizza this time 😢`;
      setMessageTextColor(pizzaFromServerText, 0);
    })
    .then(() => {
      setLoadingSpinner(pizzaFromServerButton, false, "Get your pizza");
    });
});

const getPizzaFromServerAsync = () => {
  let nForPizza, pizzaObj;
  let pizzaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      nForPizza = getRandomNumber(0, 100);
      if (nForPizza % 2 !== 0) {
        reject();
      } else {
        pizzaObj = {
          diameter: getRandomNumber(10, 50),
          toppings: getRandomNumber(0, 4),
          price: getRandomNumber(20, 80),
        };
        resolve(pizzaObj);
      }
    }, 1000);
  });
  return pizzaPromise;
};

// #6.2: Get pizza from server with timeout
const pizzaFromServerAwaitButton = document.querySelector(
  ".getPizzaFromServerAwait"
);
const pizzaFromServerAwaitText = document.querySelector(
  ".pizzaFromServerAwait"
);

pizzaFromServerAwaitButton.addEventListener("click", async () => {
  pizzaFromServerAwaitText.innerHTML = "";
  try {
    let pizza = await getPizzaFromServerAsync();
    pizzaFromServerAwaitText.innerHTML = `Your pizza 🍕: <ul>
              <li>
                  <strong> pizza size: </strong> ${pizza.diameter}
              </li>
              <li>
              <strong> toppings: </strong> ${pizza.toppings}
              </li>
              <li>
              <strong> price: </strong> ${pizza.price}
              </li>
          </ul>`;
    setMessageTextColor(pizzaFromServerAwaitText, 1);
  } catch (error) {
    pizzaFromServerAwaitText.innerHTML = `Sorry we could not make your pizza this time 😢`;
    setMessageTextColor(pizzaFromServerAwaitText, 0);
  }
  $(".toast").toast("show");
});

// const getPizzaFromServerAsyncAwait = async () => {
//   let nForPizza, pizzaObj;
//   let pizzaPromise = await new Promise((resolve, reject) => {
//     nForPizza = getRandomNumber(0, 100);
//     if (nForPizza % 2 !== 0) {
//       reject();
//     } else {
//       pizzaObj = {
//         diameter: getRandomNumber(10, 50),
//         toppings: getRandomNumber(0, 4),
//         price: getRandomNumber(20, 80),
//       };
//       resolve(pizzaObj);
//     }
//   });
//   return pizzaPromise;
// };

// #7: helper variables
const PASSWORD_MAX_LENGTH = 6;
let regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");

// #7.1: get strong random password with setTimeout

const randomPasswordText = document.querySelector(".randomPasswordSetTimeOut");
const randomPasswordButton = document.querySelector(
  ".getRandomPasswordSetTimeOut"
);

randomPasswordButton.addEventListener("click", () => {
  randomPasswordText.innerHTML = "";
  setLoadingSpinner(randomPasswordButton, true, null);
  generateStrongPasswordAsync()
    .then((password) => {
      randomPasswordText.innerHTML = `Your password is: <strong> ${password} </strong>`;
      setMessageTextColor(randomPasswordText, 1);
    })
    .catch(() => {
      randomPasswordText.innerHTML = `Sorry we could not genarte a strong password for you this time`;
      setMessageTextColor(randomPasswordText, 0);
    })
    .then(() => {
      setLoadingSpinner(
        randomPasswordButton,
        false,
        "Get your random strong password"
      );
    });
});

const generateStrongPasswordAsync = () => {
  let passwordPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let strongPassword = "",
        char;
      for (let i = 0; i < PASSWORD_MAX_LENGTH; i++) {
        char = String.fromCharCode(getRandomNumber(32, 126));
        strongPassword += char;
      }

      if (!regex.test(strongPassword)) {
        reject();
      }
      resolve(strongPassword);
    }, 1000);
  });
  return passwordPromise;
};

// #7.2: get strong random password with await
const randomPasswordAwaitText = document.querySelector(".randomPasswordAwait");
const randomPasswordAwaitButton = document.querySelector(
  ".getRandomPasswordAwait"
);

randomPasswordAwaitButton.addEventListener("click", async () => {
  randomPasswordAwaitText.innerHTML = "";
  try {
    let password = await generateStrongPasswordAsync();
    randomPasswordAwaitText.innerHTML = `Your password is: <strong> ${password} </strong>`;
    setMessageTextColor(randomPasswordAwaitText, 1);
  } catch (error) {
    randomPasswordAwaitText.innerHTML = `Sorry we could not genarte a strong password for you this time`;
    setMessageTextColor(randomPasswordAwaitText, 0);
  }
  $(".toast").toast("show");
});

// const generateStrongPasswordAsyncAwait = async () => {
//   let passwordPromise = await new Promise((resolve, reject) => {
//     let strongPassword = "",
//       char;
//     for (let i = 0; i < PASSWORD_MAX_LENGTH; i++) {
//       char = String.fromCharCode(getRandomNumber(32, 126));
//       strongPassword += char;
//     }

//     if (!regex.test(strongPassword)) {
//       reject();
//     }
//     resolve(strongPassword);
//   });
//   return passwordPromise;
// };
