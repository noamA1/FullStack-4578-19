// #1 Arrays

// #1.1
// let names = [];
// const MAX_NAMES = 5;

// for (let i = 0; i < MAX_NAMES; i++) {
//   names.push(prompt("Please enter a new name:"));
// }

// console.log(names);
// const flNamesEl = document.getElementById("firstLast");

// flNamesEl.innerHTML = `The first name in the array: ${
//   names[0]
// } and the last name in the array: ${names[names.length - 1]}`;

// flNamesEl.innerHTML = `The first name in the array: ${
//   names[0]
// }  <br> The last name in the array: ${names[names.length - 1]}`;

// let namesStr = "";
// const allNamesEl = document.getElementById("allNames");
// for (let i = names.length - 1; i >= 0; i--) {
//   namesStr += `<strong>${i + 1}</strong>: ${names[i]} <br>`;
// }
// allNamesEl.innerHTML = namesStr;

// #1.2
// let grades = [];
// const MAX_GRADES_NUMBER = 10;
// let illegalGradesStr = `These grades are illegal: `;
// const illegalGrades = document.getElementById("illegal");

// for (let i = 0; i < MAX_GRADES_NUMBER; i++) {
//   let garde = +prompt(`Please enter your ${i + 1} grade: `);
//   if (garde < 0 || garde > 100) {
//     illegalGradesStr += `<br> ${garde} `;
//   }
//   grades.push(garde);
// }
// if (illegalGradesStr === "These grades are illegal: ") {
//   console.log("in the if statment");
//   illegalGrades.innerHTML = "Well done! all your grades are legal";
// } else {
//   illegalGrades.innerHTML = illegalGradesStr;
// }

// #1.3: bonus

// generate a randome number between 0 to 100
const randomeNumber = () => {
  let num = Math.random() * MAX_NUMBER + 1;
  //   return Number(num.toFixed(2));

  if (num % 1 >= 0.5) {
    return Math.ceil(num);
  } else {
    return Math.floor(num);
  }
};

// get all the elements from the DOM
const printAllEl = document.getElementById("printAll");
const printAllReversEl = document.getElementById("printAllRevers");
const sumEl = document.getElementById("sum");
const averageEl = document.getElementById("average");
const minNumberEl = document.getElementById("minNumber");
const maxNumberEl = document.getElementById("maxNumber");
const indexOfMaxNumberEl = document.getElementById("indexOfMaxNumber");
const indexOfMinNumberEl = document.getElementById("indexOfMinNumber");
const overTheAverageEl = document.getElementById("overTheAverage");
const belowTheAverageEl = document.getElementById("belowTheAverage");
const equalToTheAverageEl = document.getElementById("equalToTheAverage");
const evenEl = document.getElementById("even");
const oddEl = document.getElementById("odd");
const countEvenEl = document.getElementById("countEven");
const dividedBySevenEl = document.getElementById("dividedBySeven");
const everageEvenEl = document.getElementById("everageEven");

let numbers = [];
const MAX_ARRAY_LENGTH = 100,
  MAX_NUMBER = 100;

for (let i = 0; i < MAX_ARRAY_LENGTH; i++) {
  numbers.push(randomeNumber());
}
// #1.3.1 - print all the numbers in the array

let printAllStr = "";
for (let i = 0; i < numbers.length; i++) {
  printAllStr += `${numbers[i]} | `;
}

printAllEl.innerHTML = ` ${printAllStr}`;

// #1.3.2 - print all the numbers in the array but in revers

let printAllReversStr = "";
for (let i = numbers.length - 1; i >= 0; i--) {
  printAllReversStr += `${numbers[i]} | `;
}
printAllReversEl.innerHTML = `${printAllReversStr}`;

// #1.3.3 - sum of the numbers in the array

const sum = (arr) => {
  let sumNumbers = 0;
  for (let i = 0; i < arr.length; i++) {
    sumNumbers += arr[i];
  }
  return sumNumbers;
};
// console.log()
sum(numbers);
sumEl.innerHTML = `The sum of all numbers: ${sum(numbers)}`;

// #1.3.4 - average of the numbers in the array

let avearge = Number((sum(numbers) / numbers.length).toFixed(2));
averageEl.innerHTML = `The average of all numbers: ${avearge}`;

// #1.3.5 - the max number in the numbers array
maxNumberEl.innerHTML = `The maximum number in the array: ${Math.max(
  ...numbers
)}`;

// #1.3.6 - the min number in the numbers array
minNumberEl.innerHTML = `The minimum number in the array: ${Math.min(
  ...numbers
)}`;

// #1.3.7 - the index of the max number in the array
indexOfMaxNumberEl.innerHTML = `The index of the maximum number in the array: ${numbers.indexOf(
  Math.max(...numbers)
)}`;

// #1.3.8 - the index of the min number in the array
indexOfMinNumberEl.innerHTML = `The index of the minimum number in the array: ${numbers.indexOf(
  Math.min(...numbers)
)}`;

// #1.3.9 - count the numbers that over then the average
let countOverTheEverage = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > avearge) {
    countOverTheEverage++;
  }
}
overTheAverageEl.innerHTML = `There are ${countOverTheEverage} numbers that bigger then the avearge`;

// #1.3.10 - count the numbers that below then the average
let countBelowTheEverage = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < avearge) {
    countBelowTheEverage++;
  }
}
belowTheAverageEl.innerHTML = `There are ${countBelowTheEverage} numbers that samller then the avearge`;

// #1.3.11 - count the numbers that equal to the average
let countEqualTheEverage = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === avearge) {
    countEqualTheEverage++;
  }
}
equalToTheAverageEl.innerHTML = `There are ${countEqualTheEverage} numbers that equal to the avearge`;

// function to count evens and odds
function printEvensOrOdds(flag) {
  let numbersString = "",
    evenArray = [];
  for (let index = 0; index < numbers.length; index++) {
    if (flag === "even" ? numbers[index] % 2 === 0 : numbers[index] % 2 !== 0) {
      numbersString += `${numbers[index]}, `;
      evenArray.push(numbers[index]);
    }
  }
  if (flag === "even") {
    return [numbersString, evenArray];
  }
  return numbersString;
}

// #1.3.12 - show all the even numbers

let [evenNumbers, allEvenNumbersArray] = printEvensOrOdds("even");

evenEl.innerHTML = `The even numbers: ${evenNumbers}`;

// #1.3.13 - show all the odd numbers

let oddNumbers = printEvensOrOdds("odd");

oddEl.innerHTML = `The odd numbers ${oddNumbers}`;

// #1.3.14 - count all the even numbers
let countEven = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    countEven++;
  }
}

countEvenEl.innerHTML = `There are ${countEven} even numbers`;

// #1.3.15 - count all the numbers that end or divided in 7
let sevenCounter = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 7 === 0 || numbers[i] / 10 === 7) {
    sevenCounter++;
  }
}

dividedBySevenEl.innerHTML = `There are ${sevenCounter} numbers that end with or divided by 7`;

// #1.3.16 - the everage of the even numbers
let sumEven = 0;
for (let i = 0; i < allEvenNumbersArray.length; i++) {
  sumEven += allEvenNumbersArray[i];
}

everageEvenEl.innerHTML = `The average of the even numbers: ${(
  sumEven / allEvenNumbersArray.length
).toFixed(2)}`;

// #1.4: challenge
let products = [
  {
    productCode: 112334,
    productName: "Table",
    price: "7580 &#8362;",
    unitsInStock: 5,
  },
  {
    productCode: 121244,
    productName: "Chair",
    price: "150 &#8362;",
    unitsInStock: 10,
  },
  {
    productCode: 131522,
    productName: "Dresser",
    price: "3500 &#8362;",
    unitsInStock: 3,
  },
];

const productsEl = document.getElementById("products");

let productsString = "";

for (let i = 1; i <= products.length; i++) {
  const productList = document.getElementById(`product-${i}`);
  productList.innerHTML = `<li> Product Code: ${
    products[i - 1].productCode
  }</li> <li>Product Name: ${products[i - 1].productName}</li> <li>price: ${
    products[i - 1].price
  } </li> <li>Stock: ${products[i - 1].unitsInStock} </li>`;
}

// ------------With for-in loop -------------------

for (let i = 0; i < products.length; i++) {
  const productList2 = document.getElementById(`productUl-${i + 1}`);

  for (const product in products[i]) {
    // console.log(products[i][product]);
    productList2.innerHTML += `<li> ${product}: ${products[i][product]}</li> `;
  }
}

// #2: Loops
// 2.1
// let num = +prompt("Please enter a number:");
// let starString = "";
// const satrsEl = document.getElementById("stars");

// for (let i = num; i >= 0; i--) {
//   for (let j = 1; j <= i; j++) {
//     starString += "*";
//   }
//   starString += "<br>";
// }

// satrsEl.innerHTML = starString;

// 2.2
// let num2 = +prompt("Please enter a second number:");
// let triangularOfNumbersString = "";
// const triangularOfNumbersEl = document.getElementById("TriangularOfNumber");

// for (let i = 1; i <= num2; i++) {
//   for (let j = 1; j <= i; j++) {
//     triangularOfNumbersString += `${j}`;
//   }
//   triangularOfNumbersString += "<br>";
// }

// triangularOfNumbersEl.innerHTML = triangularOfNumbersString;

// 2.3
// let num3 = +prompt("Please enter a third number:");
// let squareOfNumbersString = "";
// const squareOfNumbersEl = document.getElementById("squareOfNumber");

// for (let i = 1; i <= num3; i++) {
//   for (let j = num3; j >= 1; j--) {
//     squareOfNumbersString += `${j}`;
//   }
//   squareOfNumbersString += "<br>";
// }

// squareOfNumbersEl.innerHTML = squareOfNumbersString;

// 2.4

let numberStr = "",
  numDifferentFromZero;
let array = [];
// const numbersEl = document.getElementById("numbersUntilZero");
// while (true) {
//   numDifferentFromZero = +prompt("Please enter a number");
//   if (numDifferentFromZero < 0 || numDifferentFromZero === 0) {
//     break;
//   } else {
//     for (let i = numDifferentFromZero; i >= 1; i--) {
//       if (i === 1) {
//         numberStr += `${i}`;
//       } else {
//         numberStr += `${i}, `;
//       }
//     }
//     numberStr += "<br>";
//   }
// }

// numbersEl.innerHTML = numberStr;

// #3 functions
// 3.1 Display message
const MAX_TIMES = 10;
const displayMessage = document.getElementById("message");
const showMessage = (timeNumber) => {
  displayMessage.innerHTML += `Hello user, this is message #${timeNumber} <br>`;
};

for (let i = 0; i < MAX_TIMES; i++) {
  showMessage(i + 1);
}

// 3.2 Find the max number between two numbers
const testNumber1 = 17,
  testNumber2 = 7;
const maxNumber = document.getElementById("maxBetweenTwoNumbers");
const findMax = (number1, number2) => {
  if (number1 > number2) {
    return number1;
  } else {
    return number2;
  }
};
maxNumber.innerHTML = `the maximum number between ${testNumber1} to ${testNumber2} is ${findMax(
  testNumber1,
  testNumber2
)}`;
