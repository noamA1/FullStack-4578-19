// global variable
const DOTS_ARRAY_LENGTH = 20;
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

const setRandomObjectsArray = () => {
  let arrayOfDots = [];
  for (let i = 0; i < DOTS_ARRAY_LENGTH; i++) {
    arrayOfDots.push({
      x: getRandomNumber(0, 100),
      y: getRandomNumber(0, 100),
    });
  }
  return arrayOfDots;
};

// #2.1: set and display random objects array
const randomDotsArrayTableBody = document.querySelector(
  ".random-objects__table-body"
);
let dotsArray = [];

const displayDotsArray = (dotsDataArray, dotsTable) => {
  let dotsTableRowStr = "";
  dotsDataArray.forEach((dot, index) => {
    dotsTableRowStr += `
            <tr>
              <td><strong>${index + 1}</strong></td>
              <td>${dot.x}</td>
              <td>${dot.y}</td>
            </tr>`;
  });

  dotsTable.innerHTML = dotsTableRowStr;
};

dotsArray = setRandomObjectsArray();
displayDotsArray(dotsArray, randomDotsArrayTableBody);

// #2.2: find the first element that x bigger then y

const xBiggerThenYText = document.querySelector(".xBiggerThenY");
const dotOfXbiggerThenY = dotsArray.find((dot) => dot.x > dot.y);

xBiggerThenYText.innerHTML = `X: ${dotOfXbiggerThenY.x}, Y: ${dotOfXbiggerThenY.y}`;

// #2.3: find the dot object where Y is bigger then 50
const yBiggerThenFiftyText = document.querySelector(".yBiggerThenFifty");
const yBiggerThenFifty = dotsArray.find((dot) => dot.y > 50);

yBiggerThenFiftyText.innerHTML = `X: ${yBiggerThenFifty.x}, Y: ${yBiggerThenFifty.y}`;

// #2.4: find the dot objects where X is odd
const xOddsDotsTableBody = document.querySelector(".odd-x-dots__table-body");
const xOddsDotsArray = dotsArray.filter((dot) => dot.x % 2 !== 0);
displayDotsArray(xOddsDotsArray, xOddsDotsTableBody);

// #2.5: find the dot objects where Y bigger then 50
const yBiggerThenFiftyDotsTableBody = document.querySelector(
  ".y-bigger-then-fifty-dots__table-body"
);
const yBiggerThenFiftyDotsArray = dotsArray.filter((dot) => dot.y > 50);
displayDotsArray(yBiggerThenFiftyDotsArray, yBiggerThenFiftyDotsTableBody);

// #2.6: find the index of the dot that x bigger then 50

const indexOfObjectThereXBiggerThenFifty = document.querySelector(
  ".index-of-x-bigger-then-fifty"
);
const dotOfXBiggerThenFifty = dotsArray.find((dot) => dot.x > 50);
const indexOfObject = dotsArray.indexOf(dotOfXBiggerThenFifty);

indexOfObjectThereXBiggerThenFifty.innerHTML = indexOfObject;

// #2.7: display distance
const distanceTableBodyElement = document.querySelector(
  ".distance__table-body"
);
let distanceTableRowStr = "",
  distance;

dotsArray.forEach((dot, index) => {
  distance = Math.sqrt(Math.pow(dot.x, 2) + Math.pow(dot.y, 2));
  dot.distance = distance;
  distanceTableRowStr += `
      <tr>
          <td><strong>${index + 1}</strong></td>
          <td> ${dot.x} </td>
          <td> ${dot.y} </td>
          <td> ${dot.distance.toFixed(3)} </td>
      </tr>
    `;
});

distanceTableBodyElement.innerHTML = distanceTableRowStr;

// #2.8: find the minimal X

const findTheMinimalX = () => {
  let minX = dotsArray[0].x;
  dotsArray.forEach((dot) => {
    dot.x < minX ? (minX = dot.x) : minX;
  });
  return minX;
};

const minimalXTexElement = document.querySelector(".minimal-x");
let minimalX = findTheMinimalX();

minimalXTexElement.innerHTML = minimalX;

// #2.9: find the dot with the minimal x

const dotWithMinimalXElement = document.querySelector(".dot-with-minimal-x");
const dotWithMinX = dotsArray.find((dot) => dot.x === minimalX);
dotWithMinimalXElement.innerHTML = `X: ${dotWithMinX.x}, Y: ${dotWithMinX.y}`;
