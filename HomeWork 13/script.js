// #1: number test

const numberFromInput = document.querySelector("#numberCheck");
const checkButton = document.querySelector("#testInput");

checkButton.addEventListener("click", function () {
  let inputText = numberFromInput.value,
    convertToNumber;
  try {
    convertToNumber = Number(inputText);
    if (isNaN(convertToNumber)) {
      throw "רק מספרים מותרים";
    }
  } catch (error) {
    alert(error);
  }
});

//#2: show name
const displayNameButton = document.querySelector("#clickToDisplayName");
const showNameElement = document.querySelector("#showName");

displayNameButton.addEventListener("click", function () {
  let name = getName(setName);
  showNameElement.innerHTML = name;
});

const setName = () => {
  return "Noam Amron :)";
};
const getName = (callback) => {
  return callback();
};

//#3: get and show a random number
const showRandomNumberElement = document.querySelector("#showRandomNumber");
const randomNumberButton = document.querySelector("#getNum");

randomNumberButton.addEventListener("click", function () {
  cool(getRandomNumber);
});

const getRandomNumber = () => {
  let number = Math.random() * 1000 + 1;
  if (number % 1 < 0.5) {
    number = Math.floor(number);
  } else {
    number = Math.ceil(number);
  }
  showRandomNumberElement.innerHTML = `Your lucky number this time is: ${number} 😏`;
};

function cool(callback) {
  callback();
}

// #4: display the given number
const showSecretNumberElement = document.querySelector("#showSecretNumber");
const secretNumberButton = document.querySelector("#getSecretNum");

secretNumberButton.addEventListener("click", function () {
  nice(showGivenNumber);
});

const showGivenNumber = (num) => {
  showSecretNumberElement.innerHTML = `The secret number is: ${num} 😋`;
};

function nice(callback) {
  callback(42);
}

// #5: get a random number from a given 5 numbers

const oneFromFiveNumberElement = document.querySelector("#showNumber");
const oneFromFiveNumberButton = document.querySelector("#clickToDisplayNumber");
const MIN = 1,
  MAX = 5;

oneFromFiveNumberButton.addEventListener("click", function () {
  amazing(getOneNumberFromFiveNumbers);
});

const getOneNumberFromFiveNumbers = (num1, num2, num3, num4, num5) => {
  let index = Math.random() * (MAX - MIN) + MIN;
  if (index % 1 < 0.5) {
    index = Math.floor(index);
  } else {
    index = Math.ceil(index);
  }
  switch (`num${index}`) {
    case "num1":
      return num1;

    case "num2":
      return num2;

    case "num3":
      return num3;

    case "num4":
      return num4;

    case "num5":
      return num5;
  }
};

function amazing(callback) {
  const num = callback(42, 128, 37, 81, 66);

  oneFromFiveNumberElement.innerHTML = `The lottery number is: ${num} 😂`;
}

// #6: background color by random color
const randomColorButton = document.querySelector("#getRandomColor");
const bodyElementForRandomBackgroundColor = document.querySelector("body");

randomColorButton.addEventListener("click", function () {
  cool2(paitBodyBackground);
});
const paitBodyBackground = () => {
  let redColor = Math.floor(Math.random() * 255 + 1);
  let greenColor = Math.floor(Math.random() * 255 + 1);
  let blueColor = Math.floor(Math.random() * 255 + 1);

  bodyElementForRandomBackgroundColor.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
};

function cool2(paintCallback) {
  paintCallback();
}

// #7: background color by given color
const givenColorButton = document.querySelector("#applyGivenColor");
const bodyElementBackgroundColor = document.querySelector("body");

givenColorButton.addEventListener("click", function () {
  nice2(paitBodyBackgroundByGivenColor);
});
const paitBodyBackgroundByGivenColor = (color) => {
  bodyElementBackgroundColor.style.backgroundColor = `${color}`;
};

function nice2(paintCallback) {
  paintCallback("Green");
}

// 8: background one random color from 5 given colors

const chooseOneColorFromThreeColorsButton = document.querySelector(
  "#chooseOneColorFromThreeColors"
);
const bodyElementBackgroundColorBy = document.querySelector("body");
const selectedColorElement = document.querySelector("#selectedColor");

chooseOneColorFromThreeColorsButton.addEventListener("click", function () {
  amazing2(paitBodyBackgroundByOneOfThreeColors);
});

const paitBodyBackgroundByOneOfThreeColors = (color1, color2, color3) => {
  let index = Math.random() * (3 - 1) + 1;
  if (index % 1 < 0.5) {
    index = Math.floor(index);
  } else {
    index = Math.ceil(index);
  }
  switch (`color${index}`) {
    case "color1":
      bodyElementBackgroundColorBy.style.backgroundColor = `${color1}`;
      return color1;

    case "color2":
      bodyElementBackgroundColorBy.style.backgroundColor = `${color2}`;
      return color2;

    case "color3":
      bodyElementBackgroundColorBy.style.backgroundColor = `${color3}`;
      return color3;
  }
};

function amazing2(paintCallback) {
  const paintedColor = paintCallback("Red", "Green", "Blue");
  selectedColorElement.innerHTML = `The selected color is: ${paintedColor}`;
}

// 9: get random number every 1 sec.

const randomNumberSecButton = document.querySelector("#randomNumber");
const stopButton = document.querySelector("#stopInterval");
const cardTextForRandomNumber = document.querySelector(
  "#getRandomNumberIterval"
);

const MAX_NUMBER = 100,
  MIN_NUMBER = 1;
let intervalId;

const getNumber = () => {
  if (!intervalId) {
    intervalId = setInterval(getRandomNumberBetweenOneToHundred, 1000);
  }
};

const getRandomNumberBetweenOneToHundred = () => {
  let randomNumber = Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER;
  if (randomNumber % 1 < 0.5) {
    randomNumber = Math.floor(randomNumber);
  } else {
    randomNumber = Math.ceil(randomNumber);
  }
  cardTextForRandomNumber.innerHTML = randomNumber;
};

const stop = () => {
  clearInterval(intervalId);

  intervalId = null;
};

randomNumberSecButton.addEventListener("click", getNumber);
stopButton.addEventListener("click", stop);

// #10: change body background color every sec

const startPaintButton = document.querySelector("#startPaint");
const stopPaintButton = document.querySelector("#stopPaint");
let paintIntervalId;

const setStartPaintInterval = () => {
  if (!intervalId) {
    paintIntervalId = setInterval(paitBodyBackground, 1000);
  }
};

const stopPaint = () => {
  clearInterval(paintIntervalId);
  paintIntervalId = null;
};

startPaintButton.addEventListener("click", setStartPaintInterval);
stopPaintButton.addEventListener("click", stopPaint);

// #11: set array with 100 random numbers every 3 sec

const startNewArrayButton = document.querySelector("#startNewArray");
const stopGenerateArraysButton = document.querySelector("#stop");
const randomArrayTextElement = document.querySelector("#randomArray");
let arrayIntervalId;
const ARRAY_LENGTH = 100;

const getRandomArray = () => {
  if (!arrayIntervalId) {
    arrayIntervalId = setInterval(getRandomNumbersArray, 3000);
  }
};

const getRandomNumbersArray = () => {
  let randomArray = [],
    textToDisplay = "";
  for (let i = 0; i < ARRAY_LENGTH; i++) {
    let randomNumber = Math.random() * 1000;
    if (randomNumber % 1 < 0.5) {
      randomNumber = Math.floor(randomNumber);
    } else {
      randomNumber = Math.ceil(randomNumber);
    }
    randomArray.push(randomNumber);
  }

  for (let i = 0; i < randomArray.length; i++) {
    if (i === randomArray.length - 1) {
      textToDisplay += `${randomArray[i]}`;
    } else {
      textToDisplay += `${randomArray[i]}, `;
    }
    if (i % 9 === 0) {
      textToDisplay += "<br>";
    }
  }
  randomArrayTextElement.innerHTML = textToDisplay;
};

const stopGenerateArrays = () => {
  clearInterval(arrayIntervalId);
  arrayIntervalId = null;
};

startNewArrayButton.addEventListener("click", getRandomArray);
stopGenerateArraysButton.addEventListener("click", stopGenerateArrays);
