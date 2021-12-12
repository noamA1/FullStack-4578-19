// global variable
const ARRAY_LENGTH = 20;
// global function
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

const setRandomNumberArray = () => {
  let array = [];
  for (let i = 0; i < ARRAY_LENGTH; i++) {
    array.push(getRandomNumber(1, 100));
  }
  return array;
};

const displayArrayData = (arrayData, arrayDataToDisplay) => {
  let dataStr = "";
  arrayData.forEach((number) => {
    dataStr += `${number}, `;
  });
  arrayDataToDisplay.innerHTML = dataStr.substring(0, dataStr.length - 2);
};
// #1.1: display random numbers array.

const arrayDataElement = document.querySelector(".arrayData");

let randomNumbersArray = setRandomNumberArray();
displayArrayData(randomNumbersArray, arrayDataElement);

// #1.2: display the first even number in array
const evenNumnerText = document.querySelector(".evenNumber");
const even = randomNumbersArray.find((num) => num % 2 === 0);
evenNumnerText.innerHTML = even;

// #1.3: find and display the first number that biggerthen fifty
const biggerThenFiftyText = document.querySelector(".biggerThenFifty");
const biggerThenFiftyNumer = randomNumbersArray.find((number) => number > 50);

biggerThenFiftyText.innerHTML = biggerThenFiftyNumer;

// #1.4: all the odd numbers in array
const oddNumnersText = document.querySelector(".oddNumbers");
const oddNumbers = randomNumbersArray.filter((num) => num % 2 !== 0);

displayArrayData(oddNumbers, oddNumnersText);

// #1.5: all the odd numbers in array
const biggerThenFiftyNumnersText = document.querySelector(
  ".biggerThenFiftyNumbers"
);
const biggerThenFiftyNumbersArray = randomNumbersArray.filter(
  (num) => num > 50
);

displayArrayData(biggerThenFiftyNumbersArray, biggerThenFiftyNumnersText);

// #1.6: the index of the first number bigger then fifty

const indexOfbiggerThenFiftyText = document.querySelector(
  ".indexOfBiggerThenFifty"
);
// i use the number i get from #1.3
const indexOfBiggerThenFifty = randomNumbersArray.indexOf(biggerThenFiftyNumer);
indexOfbiggerThenFiftyText.innerHTML = indexOfBiggerThenFifty;

//#1.7: display if the number is even or odd

const evenOrOddText = document.querySelector(".evenOrOdd");
const displayEvenOrOddFunction = () => {
  let tableString = `<table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Number</th>
        <th scope="col">odd / even</th>
      </tr>
    </thead>
    <tbody>`;

  let tableRowStr = "";
  randomNumbersArray.forEach((number, index) => {
    tableRowStr += `
      <tr>
        <td>${index}</td>
        <td>${number}</td>
        <td>${number % 2 === 0 ? "even" : "odd"}</td>
      </tr>`;
  });
  tableString += `${tableRowStr}</tbody></table>`;

  evenOrOddText.innerHTML = tableString;
};

displayEvenOrOddFunction();

// #1.8: the min number

const minNumberTextElement = document.querySelector(".minNumber");
const minNumber = randomNumbersArray.find(
  (min) => min === Math.min(...randomNumbersArray)
);

minNumberTextElement.innerHTML = minNumber;

// #1.9: the min number
const maxNumberTextElement = document.querySelector(".maxNumber");
const maxNumber = randomNumbersArray.find(
  (max) => max === Math.max(...randomNumbersArray)
);

maxNumberTextElement.innerHTML = maxNumber;

const setRandomObjectsArray = () => {
  let array = [];
  for (let i = 0; i < ARRAY_LENGTH; i++) {
    array.push({
      x: getRandomNumber(0, 100),
      y: getRandomNumber(0, 100),
    });
  }
  return array;
};

