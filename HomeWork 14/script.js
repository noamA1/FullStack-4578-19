// loacl variable to get time
let date = new Date();
const delayInSec = 3;

// #1:get time with synchronous code

const synchronousStratPElement = document.querySelector(
  ".synchronous-time__start"
);
const synchronousTimePElement = document.querySelector(
  ".synchronous-time__currntTime"
);
const synchronousEndPElement = document.querySelector(".synchronous-time__end");
const synchronousButton = document.querySelector(".synchronous-time__button");

synchronousButton.addEventListener("click", () => {
  let date = new Date();

  synchronousStratPElement.innerHTML = "Start";
  synchronousTimePElement.innerHTML = date.toTimeString().substring(0, 5);
  synchronousEndPElement.innerHTML = "End";
});

// #2: show time with 3 sec delay

const asynchronousStratElement = document.querySelector(
  ".asynchronous-time__start"
);
const asynchronousTimeElement = document.querySelector(
  ".asynchronous-time__currntTime"
);
const asynchronousEndElement = document.querySelector(
  ".asynchronous-time__end"
);
const asynchronousButtonElement = document.querySelector(
  ".asynchronous-time__button"
);

asynchronousButtonElement.addEventListener("click", () => {
  asynchronousStratElement.innerHTML = "Start";
  setTimeout(() => {
    let currentTime = new Date().toTimeString().substring(0, 5);
    asynchronousTimeElement.innerHTML = currentTime;
  }, delayInSec * 1000);
  asynchronousEndElement.innerHTML = "End";
});

// #3: the time that was 3 sec ago

const timeThreeSecAgoStartElement = document.querySelector(
  ".asynchronous-time-three-sec-ago__start"
);
const timeThreeSecAgoTimeElement = document.querySelector(
  ".asynchronous-time-three-sec-ago__time"
);
const timeThreeSecAgoEndElement = document.querySelector(
  ".asynchronous-time-three-sec-ago__end"
);
const timeThreeSecAgobuttonElement = document.querySelector(
  ".asynchronous-time-three-sec-ago__button"
);

timeThreeSecAgobuttonElement.addEventListener("click", () => {
  let timeThreeSecAgo = date.toTimeString().substring(0, 8);
  timeThreeSecAgoStartElement.innerHTML = "Start";
  setTimeout(() => {
    timeThreeSecAgoTimeElement.innerHTML = timeThreeSecAgo;
  }, 3000);
  timeThreeSecAgoEndElement.innerHTML = "End";
});

// #4: Generate random numbers after 3, 5 and 7 seconds
const randomNumberStart = document.querySelector(".random-numbers__start");
const randomNumberEnd = document.querySelector(".random-numbers__end");
const randomNumberButton = document.querySelector(".random-numbers__button");
const randomNumberAfterThreeSec = document.querySelector(
  ".random-numbers__after-three-seconds"
);
const randomNumberAfterFiveSec = document.querySelector(
  ".random-numbers__after-five-seconds"
);
const randomNumberAfterSevenSec = document.querySelector(
  ".random-numbers__after-seven-seconds"
);

const getRandomNumber = (max) => {
  let number = Math.random() * max;
  if (number % 1 < 0.5) {
    number = Math.floor(number);
  } else {
    number = Math.ceil(number);
  }
  return number;
};

randomNumberButton.addEventListener("click", () => {
  randomNumberStart.innerHTML = "Start";

  setTimeout(() => {
    randomNumberAfterThreeSec.innerHTML = `After 3 seconds.. the number is: ${getRandomNumber(
      100
    )}`;
  }, delayInSec * 1000);
  setTimeout(() => {
    randomNumberAfterFiveSec.innerHTML = `After 5 seconds.. the number is: ${getRandomNumber(
      100
    )}`;
  }, (delayInSec + 2) * 1000);
  setTimeout(() => {
    randomNumberAfterSevenSec.innerHTML = `After 7 seconds.. the number is: ${getRandomNumber(
      100
    )}`;
  }, (delayInSec + 4) * 1000);

  randomNumberEnd.innerHTML = "End";
});

// #5: Generate new random number between 0 to the given number every 1 second

const inputElement = document.querySelector("#random-number");
const randomNumberText = document.querySelector(".random-number__display");

setInterval(() => {
  let inputNumber = Number(inputElement.value);
  randomNumberText.innerHTML = `The random number is: ${getRandomNumber(
    inputNumber
  )}`;
}, 1000);

// #6: Change the element backgruond every sec

const cardElement = document.querySelector(".changeBackground");
setInterval(() => {
  let redColor = getRandomNumber(255);
  let greenColor = getRandomNumber(255);
  let blueColor = getRandomNumber(255);
  cardElement.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}, 1000);

// #7: Change the background color to green and show an alert

const getAlertButton = document.querySelector(".getAlert");
const greenColorCardElement = document.querySelector(".greenBackground");
getAlertButton.addEventListener("click", () => {
  greenColorCardElement.style.backgroundColor = "Green";
  setTimeout(() => {
    alert("Done");
  }, 2000);
});

// #8: desplay random number by callback

const randomNumberAfterDelayButton = document.querySelector(
  ".callbackRandomNumber__button"
);
const randomNumberAfterDelayText = document.querySelector(
  ".callbackRandomNumber"
);

randomNumberAfterDelayButton.addEventListener("click", () => {
  getRandomNumberAfterDelay((num) => {
    randomNumberAfterDelayText.innerHTML = `The number is: ${num} this time`;
  });
});

const getRandomNumberAfterDelay = (callback) => {
  let randomNumber = getRandomNumber(100);
  setTimeout(() => {
    callback(randomNumber);
  }, (delayInSec + 2) * 1000);
};

// #9: desplay random number by callback with argument

const callbackRandomNumberButton = document.querySelector(
  ".callbackRandomNumberWithArgument__button"
);
const callbackRandomNumberText = document.querySelector(
  ".callbackRandomNumberWithArgument"
);

callbackRandomNumberButton.addEventListener("click", () => {
  //   callbackRandomNumberAfterDelay(null);
  getRandomNumberAfterDelayWithArgument((num) => {
    callbackRandomNumberText.innerHTML = `The number is: ${num} this time`;
  }, 20);
});

const getRandomNumberAfterDelayWithArgument = (callback, limit) => {
  let randomNumber = getRandomNumber(limit);
  setTimeout(() => {
    callback(randomNumber);
  }, (delayInSec + 2) * 1000);
};

// #10: desplay random number by callback with two argument

const callbackBetweenButton = document.querySelector(
  ".callbackRandomNumberbetween__button"
);
const callbackBetweenText = document.querySelector(
  ".callbackRandomNumberBetween"
);

callbackBetweenButton.addEventListener("click", () => {
  callbackRandomNumberAfterDelay(null);
});

const callbackRandomNumberAfterDelay = (num) => {
  if (num !== null) {
    callbackBetweenText.innerHTML = `The number is: ${num} this time`;
  } else {
    getRandomNumberAfterDelayBetween(callbackRandomNumberAfterDelay, 10, 30);
  }
};

const getRandomNumberAfterDelayBetween = (callback, first, last) => {
  let number = getRandomNumberBetweenMinAndMaxNumbers(100, 350);
  setTimeout(() => {
    callback(number);
  }, (delayInSec + 2) * 1000);
};

// #11: desplay random an even number by callback with two argument
const callbackEvenButton = document.querySelector(
  ".callbackRandomEvenNumber__button"
);
const callbackEvenText = document.querySelector(".callbackRandomEvenNumber");

callbackEvenButton.addEventListener("click", () => {
  getEvenRandomNumberAfterDelay(
    (randomNum) => {
      callbackEvenText.innerHTML = `The number is: ${randomNum}`;
    },
    10,
    115
  );
});

const getEvenRandomNumberAfterDelay = (callback, first, last) => {
  let num;
  while (num % 2 !== 0) {
    num = getRandomNumberBetweenMinAndMaxNumbers(first, last);
  }
  setTimeout(() => {
    callback(num);
  }, (delayInSec + 2) * 1000);
};

const getRandomNumberBetweenMinAndMaxNumbers = (min, max) => {
  let number = Math.random() * (max - min) + min;
  if (number % 1 < 0.5) {
    number = Math.floor(number);
  } else {
    number = Math.ceil(number);
  }
  return number;
};

// #12: get user from "server"
const getUserTextElement = document.querySelector(".getUser");
const getUserButtonElement = document.querySelector(".getUser__button");

getUserButtonElement.addEventListener("click", () => {
  getUserFromServer((user) => {
    getUserTextElement.innerHTML = `<ul>
        <li>Fisrt name: ${user.firstName}</li>
        <li>Last name: ${user.lastName}</li>
    </ul>`;
  });
});

function getUserFromServer(callback) {
  setTimeout(() => {
    const user = { firstName: "Moishe", lastName: "Ufnik" };
    callback(user);
  }, 4000);
}

// #13: get grades from "server"

const getGradesTextElement = document.querySelector(".getGrades");
const getGradesButtonElement = document.querySelector(".getGrades__button");

getGradesButtonElement.addEventListener("click", () => {
  getGradesFromServer((gradesFromServer) => {
    let gradesStr = "[ ";
    for (let grade = 0; grade < gradesFromServer.length; grade++) {
      if (grade === gradesFromServer.length - 1) {
        gradesStr += `${gradesFromServer[grade]} ]`;
      } else {
        gradesStr += `${gradesFromServer[grade]}, `;
      }
    }
    getGradesTextElement.innerHTML = gradesStr;
  });
});

function getGradesFromServer(gradrdCallback) {
  setTimeout(() => {
    const grades = [100, 98, 75, 80, 100, 87];
    gradrdCallback(grades);
  }, 7000);
}

// #14: get user location

const getLocationButtonElement = document.querySelector(".getLocation__button");
const getLatitudeTextElement = document.querySelector(".getLocation__latitude");
const getLongitudeTextElement = document.querySelector(
  ".getLocation__longitude"
);

getLocationButtonElement.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
});

const successFunction = (position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  getLongitudeTextElement.innerHTML = `Your longitude: ${long.toFixed(3)}`;
  getLatitudeTextElement.innerHTML = `Your latitude: ${lat.toFixed(3)}`;
};

const errorFunction = () => {
  alert("Geocoder failed");
};

// #15: show clock

const clockElement = document.querySelector(".clock");

setInterval(() => {
  let time = new Date().toTimeString().substring(0, 8);
  let clockRedColor, clockGreenColor, clockBlueColor;
  clockRedColor = getRandomNumber(255);
  clockGreenColor = getRandomNumber(255);
  clockBlueColor = getRandomNumber(255);
  clockElement.innerHTML = time;
  clockElement.style.color = `rgb(${clockRedColor}, ${clockGreenColor}, ${clockBlueColor})`;
  clockElement.style.borderColor = `rgb(${clockRedColor}, ${clockGreenColor}, ${clockBlueColor})`;
}, 1000);
