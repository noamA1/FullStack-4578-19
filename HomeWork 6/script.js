// General function for questions number 1 and 2

// hold the max number that can be genarate at the randome function
const maxNumber = 100;

// generate a randome number between 0 to 100
const randomeNumber = () => {
  let num = Math.random() * maxNumber + 1;

  if (num % 1 >= 0.5) {
    return Math.ceil(num);
  } else {
    return Math.floor(num);
  }
};

// create new array with randome numbers
const createNewArrayOfNumbers = (arr, arrayLength) => {
  for (let i = 0; i < arrayLength; i++) {
    arr.push(randomeNumber());
  }
};

// #1

let arrayOfIntegerNumbers = [];
let sumOfEvens = 0,
  evenCounter = 0;

createNewArrayOfNumbers(arrayOfIntegerNumbers, 100);
for (let j = 0; j < arrayOfIntegerNumbers.length; j++) {
  if (arrayOfIntegerNumbers[j] % 2 === 0) {
    sumOfEvens += arrayOfIntegerNumbers[j];
    evenCounter++;
  }
}

console.log("The total sum of evens: ", sumOfEvens);
console.log(
  "The average sum of evens: ",
  (sumOfEvens / evenCounter).toFixed(3)
);

// #2
function sumOfNumbersInArray(array) {
  for (let i = 0; i < array.length; i++) {
    sumOf60Numbers += array[i];
  }
}

function findIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === twoLastDigitsOfSum) {
      arr[i] = sumOf60Numbers - arr[i];

      return i;
    }
  }
}

let sumOf60Numbers = 0;
let arrayOf60RandomesIntegerNumbers = [];

// test array
let arrayOf60IntegerNumbers = [
  1, 2, 4, 6, 49, 18, 4, 10, 20, 5, 7, 6, 8, 12, 14, 16, 27, 6, 5, 8, 2, 22, 50,
  43, 23, 5, 98, 52, 9, 12, 6, 2, 4, 42, 8, 12, 17, 20, 30, 18, 22, 28, 52, 60,
  10, 26, 68, 19, 13, 3, 8, 9, 1, 5, 7, 4, 6, 5, 9, 10,
];

createNewArrayOfNumbers(arrayOf60RandomesIntegerNumbers, 60);

sumOfNumbersInArray(arrayOf60RandomesIntegerNumbers);
// sumOfNumbersInArray(arrayOf60IntegerNumbers);

let twoLastDigitsOfSum = sumOf60Numbers % 100;

let index = findIndex(arrayOf60RandomesIntegerNumbers);
// let index = findIndex(arrayOf60IntegerNumbers);

// show the result, if there is such a number or not
if (index === undefined) {
  console.log(
    "There is no such a number in the array that equal to the sum of all the other numbers"
  );
} else {
  console.log("The index of the sum of all other numbers is: ", index);
}

// #3:

const checkHoures = (hour) => {
  if (hour < 0) {
    return "It is a negative hour! try again";
  } else if (hour > 24) {
    return `try again, the hour can't be over then 24`;
  } else if (hour < 10) {
    return "0" + hour;
  }
  return hour;
};

const checkMinutesAndSeconds = (number) => {
  if (number < 0) {
    return "It is a negative minutes or seconds! try again";
  } else if (number > 60) {
    return `try again, minutes or seconds can't be over then 60`;
  } else if (number < 10) {
    return "0" + number;
  }
  return number;
};

const hour = 11,
  minute = 22,
  second = 5;
let timeString = `${checkHoures(hour)}:${checkMinutesAndSeconds(
  minute
)}:${checkMinutesAndSeconds(second)}`;
console.log(timeString);