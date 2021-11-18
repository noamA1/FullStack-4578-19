"use strict";

// #1: LOOPS

// #1.1: display a random number between to numbers
const randomNumberEl = document.getElementById("rNumber");
let max = +prompt("Please enter the maximum number:"),
  min = +prompt("Please enter the minimum number:");
let randomNumber = Math.random() * (max - min) + min;
// console.log(randomNumber);
if (randomNumber % 1 >= 0.5) {
  randomNumber = Math.ceil(randomNumber);
} else {
  randomNumber = Math.floor(randomNumber);
}

// console.log(randomNumber);
randomNumberEl.innerHTML = `The random number between ${min} to ${max} is ${randomNumber}`;

// #1.2: display 100 random numbers
const hundredNumbersEl = document.getElementById("hundredNumbers");
let maxNew = +prompt("Please enter new maximum number:"),
  minNew = +prompt("Please enter new minimum number:");
const MAX_LENGTH = 100;
let str = "";

for (let i = 1; i <= MAX_LENGTH; i++) {
  let randomNumberInLoop = Math.random() * (maxNew - minNew) + minNew;
  if (randomNumberInLoop % 1 >= 0.5) {
    randomNumberInLoop = Math.ceil(randomNumberInLoop);
  } else {
    randomNumberInLoop = Math.floor(randomNumberInLoop);
  }
  if (i === MAX_LENGTH) {
    str += `${randomNumberInLoop}`;
  } else {
    str += `${randomNumberInLoop}, `;
  }
  if (i % 20 === 0) {
    str += "<br>";
  }
}

// console.log(randomNumberInLoop);
hundredNumbersEl.innerHTML = `${str}`;

// #1.3: array of random numbers
const listEl = document.getElementById("listOfNumbers");
let max3 = +prompt("Please enter new maximum number:"),
  min3 = +prompt("Please enter new minimum number:");
const MAX_ARRAY_LENGTH = 100;
let strOfNumbersArray = "",
  listSum = 0,
  averageOfAllNumbers;
let numbersListArray = [];

for (let i = 0; i < MAX_ARRAY_LENGTH; i++) {
  let randomNumberInLoop = Math.random() * (max3 - min3) + min3;
  if (randomNumberInLoop % 1 >= 0.5) {
    numbersListArray.push(Math.ceil(randomNumberInLoop));
  } else {
    numbersListArray.push(Math.floor(randomNumberInLoop));
  }
}

for (let i = 0; i < numbersListArray.length; i++) {
  listSum += numbersListArray[i];
  if (i === numbersListArray - 1) {
    strOfNumbersArray += `${numbersListArray[i]}`;
  } else {
    strOfNumbersArray += `${numbersListArray[i]}, `;
  }
  if (i % 20 === 0 && i > 0) {
    strOfNumbersArray += "<br>";
  }
}
averageOfAllNumbers = listSum / numbersListArray.length;
// console.log(listSum);
listEl.innerHTML = `${strOfNumbersArray} <br> <strong>The average of the numbers in the array is: </strong> ${averageOfAllNumbers}`;

// #2: FUNCTIONS
// the function below check if the functions gets the right type of parameter
const checkParameter = (parameter, type) => {
  switch (type) {
    case "array":
      if (Array.isArray(parameter)) {
        return true;
      } else {
        return false;
      }
    case "string":
      if (typeof parameter === "string") {
        return true;
      } else {
        return false;
      }
    case "number":
      if (typeof parameter === "number") {
        return true;
      } else {
        return false;
      }
    default:
      return false;
  }
};

// initialization arrays for all the functions

let numbersArray1 = [1, 2, 3, 1, 0, 15];
let numbersArray2 = [20, 15, 10, 25, 10, 12, 8, 30, 55, 60];
let numbersArray3 = [10, 12, 14, 16, 20, 26, 30, 36, 40, 54, 24, 11, 16, 5];

let stringsArray1 = ["avi", "google form", "bob", "loren", "Uta"];
let stringsArray2 = ["yolo", "gogo", "Romania", "Honololo Hawai"];
let stringsArray3 = [
  "Something get wrong",
  "Paola",
  "Moran",
  "kokokola",
  "volvo",
  "jojo",
];

// #2.1: average function

//the function need to return the average of numbres array.
const averageListEl = document.getElementById("averageOfArray-ul");
const getAveargeOfArray = (arr) => {
  let sumOfArray = 0,
    avgOfArray;
  if (checkParameter(arr, "array")) {
    for (let i = 0; i < arr.length; i++) {
      sumOfArray += arr[i];
    }
  } else {
    console.log("the parameter need to be an array");
    return;
  }
  avgOfArray = sumOfArray / arr.length;
  return avgOfArray;
};

let avgOfNumbersArray1 = getAveargeOfArray(numbersArray1);
let avgOfNumbersArray2 = getAveargeOfArray(numbersArray2);
let avgOfNumbersArray3 = getAveargeOfArray(numbersArray3);

averageListEl.innerHTML = ` <li>The average of the first array is: ${avgOfNumbersArray1.toFixed(
  2
)}</li><li>The average of the second array is: ${avgOfNumbersArray2.toFixed(
  2
)}</li><li>The average of the third array is: ${avgOfNumbersArray3.toFixed(
  2
)}</li> `;

// #2.2: minimum in array function

const minInArrayEl = document.getElementById("minInArray-ul");

const getMinInArray = (arr) => {
  if (checkParameter(arr, "array")) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  } else {
    console.log("the parameter need to be an array");
    return;
  }
};

let minInNumbersArray1 = getMinInArray(numbersArray1);
let minInNumbersArray2 = getMinInArray(numbersArray2);
let minInNumbersArray3 = getMinInArray(numbersArray3);

minInArrayEl.innerHTML = ` <li>The minimum in the first array is: ${minInNumbersArray1}</li><li>The minimum in the second array is: ${minInNumbersArray2}</li><li>The minimum in the third array is: ${minInNumbersArray3}</li> `;

// #2.3: the longest string in array function

const lengthOfStringEl = document.getElementById("theLongestStringNumber-ul");

// the function need to return the length of the longest string
const getLengthOfStringInArray = (arr) => {
  if (checkParameter(arr, "array")) {
    let maxLength = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > maxLength) {
        maxLength = arr[i].length;
      }
    }
    return maxLength;
  } else {
    console.log("the parameter need to be an array");
    return;
  }
};

let longestStringInArray1 = getLengthOfStringInArray(stringsArray1);
let longestStringInArray2 = getLengthOfStringInArray(stringsArray2);
let longestStringInArray3 = getLengthOfStringInArray(stringsArray3);

lengthOfStringEl.innerHTML = ` <li>The longest length of a string in the first array is: ${longestStringInArray1}</li><li>The longest length of a string in the second array is: ${longestStringInArray2}</li><li>The longest length of a string in the third array is: ${longestStringInArray3}</li> `;

// #2.4: the longest string in array function

const longestStringEl = document.getElementById("theLongestString-ul");

// the function need to return the longest string
const getLongestStringInArray = (arr) => {
  if (checkParameter(arr, "array")) {
    let maxString = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > maxString.length) {
        maxString = arr[i];
      }
    }
    return maxString;
  } else {
    console.log("the parameter need to be an array");
    return;
  }
};

let str1 = getLongestStringInArray(stringsArray1);
let str2 = getLongestStringInArray(stringsArray2);
let str3 = getLongestStringInArray(stringsArray3);

longestStringEl.innerHTML = ` <li>The longest string in the first array is: ${str1}</li><li>The longest string in the second array is: ${str2}</li><li>The longest string in the third array is: ${str3}</li> `;

// #2.5: count the numbers that bigger then the average in array function

const countNmubersBiggerThnAverageEl = document.getElementById(
  "countOverAverage-ul"
);

// the function need to return how many numbers bigger then the average
const getHowManyNumbersBiggerThenTheAverage = (arr) => {
  let counter = 0,
    averageNumber;
  if (checkParameter(arr, "array")) {
    averageNumber = Math.floor(getAveargeOfArray(arr));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > averageNumber) {
        counter++;
      }
    }
  } else {
    console.log("the parameter need to be an array");
    return;
  }
  return counter;
};

let numberOfOverAverage1 = getHowManyNumbersBiggerThenTheAverage(numbersArray1);
let numberOfOverAverage2 = getHowManyNumbersBiggerThenTheAverage(numbersArray2);
let numberOfOverAverage3 = getHowManyNumbersBiggerThenTheAverage(numbersArray3);

countNmubersBiggerThnAverageEl.innerHTML = ` <li>There are <strong>${numberOfOverAverage1}</strong> numbers over then the average in the first array </li><li>There are <strong>${numberOfOverAverage2}</strong> numbers over then the average in the second array</li><li>There are <strong>${numberOfOverAverage3}</strong> numbers over then the average in the third array.</li> `;

// #2.6: count the numbers that bigger then the average in array function

const indexOfMinimumEl = document.getElementById("indexOfMin-ul");

// the function need to return how many numbers bigger then the average
const getIndexOfTheMinimum = (arr) => {
  let indexOfMinInArray;

  if (checkParameter(arr, "array")) {
    let min = getMinInArray(arr);
    indexOfMinInArray = arr.indexOf(min);
    return [indexOfMinInArray, min];
  } else {
    console.log("the parameter need to be an array");
    return;
  }
};

let [minIndex1, minInArray1] = getIndexOfTheMinimum(numbersArray1);
let [minIndex2, minInArray2] = getIndexOfTheMinimum(numbersArray2);
let [minIndex3, minInArray3] = getIndexOfTheMinimum(numbersArray3);

indexOfMinimumEl.innerHTML = ` <li>The index of <strong> ${minInArray1} </strong> in the first array is: <strong> ${minIndex1}</strong> </li><li>The index of <strong> ${minInArray2} </strong> in the second array is: <strong> ${minIndex2}</strong> </li><li>The index of <strong> ${minInArray3} </strong> in the third array is: <strong> ${minIndex3}</strong></li> `;

// #2.7: check if the number is a prime number function

// the function below need to return true if the number is prime number else false

const primeNumberEl = document.getElementById("primeNumber");
const testNumber = 11;
const checkPrimeNumber = (num) => {
  if (checkParameter(num, "number")) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  } else {
    console.log("the parameter need to be a number");
    return;
  }
  return true;
};

primeNumberEl.innerHTML = `${
  checkPrimeNumber(testNumber)
    ? `The given number: ${testNumber} is a prime number`
    : `Sorry the given number: ${testNumber} is not a prime number`
}`;

// #2.8: check if all the numbers in given array are prime numbers function

// the function below need to return true if all the numbers are prime number else false

const primeNumbersArrayEl = document.getElementById("primeNumbersArray");
const testArray = [1, 3, 5, 7, 19, 17];
const checkIfAllNumbersArePrime = (arr) => {
  if (checkParameter(arr, "array")) {
    for (let i = 0; i < arr.length; i++) {
      if (!checkPrimeNumber(arr[i])) {
        return false;
      }
    }
  } else {
    console.log("the parameter need to be an array");
    return;
  }
  return true;
};

primeNumbersArrayEl.innerHTML = `${
  checkIfAllNumbersArePrime(numbersArray1)
    ? `The given array: [${numbersArray1}] containing only prime numbers`
    : `Sorry the given array: [${numbersArray1}] not containing only a prime numbers`
}`;

// #2.9: get a random number function

const functionRandomNumberEl = document.getElementById("randomNumber-ul");
const testMaxNumber1 = 10,
  testMinNumber1 = 1,
  testMaxNumber2 = 60,
  testMinNumber2 = 20,
  testMaxNumber3 = 6,
  testMinNumber3 = 1;

const getRandomNumber = (min, max) => {
  let functionRandomNum = Math.random() * (max - min) + min;
  if (functionRandomNum % 1 >= 0.5) {
    functionRandomNum = Math.ceil(functionRandomNum);
  } else {
    functionRandomNum = Math.floor(functionRandomNum);
  }
  return functionRandomNum;
};

functionRandomNumberEl.innerHTML = ` <li>The first random number between <strong> ${testMinNumber1}</strong> is : <strong> ${getRandomNumber(
  testMinNumber1,
  testMaxNumber1
)}</strong> </li> <li>The second random number between <strong> ${testMinNumber2}</strong> to <strong> ${testMaxNumber2}</strong> is : <strong> ${getRandomNumber(
  testMinNumber2,
  testMaxNumber2
)}</strong></li> <li>The third random number between <strong> ${testMinNumber3}</strong> to <strong> ${testMaxNumber3}</strong> is : <strong> ${getRandomNumber(
  testMinNumber3,
  testMaxNumber3
)}</strong></li> `;

// #2.10: get an array full with random numbers function

const listOfRandomNumbersEl = document.getElementById(
  "arrayOfRandomNumbers-ul"
);
const testNumber1 = 10,
  testNumber2 = 15,
  testNumber3 = 25;
const MAX_NUMBER = 100,
  MIN_NUMBER = 1;

const getArrayOfRandomNumbers = (arrayLength) => {
  let randomNumbersArray = [];
  for (let i = 0; i < arrayLength; i++) {
    randomNumbersArray.push(getRandomNumber(MIN_NUMBER, MAX_NUMBER));
  }
  return randomNumbersArray;
};
// console.log(getArrayOfRandomNumbers(testNumber1));
listOfRandomNumbersEl.innerHTML = ` <li>The first random numbers array with length of <strong> ${testNumber1}</strong> is : <strong> [${getArrayOfRandomNumbers(
  testNumber1
)}]</strong> </li> <li>The second random number with length of <strong> ${testNumber2}</strong> is : <strong> [${getArrayOfRandomNumbers(
  testNumber2
)}]</strong></li> <li>The third random number with length of <strong> ${testNumber3}</strong> is : <strong> [${getArrayOfRandomNumbers(
  testNumber3
)}]</strong></li> `;
