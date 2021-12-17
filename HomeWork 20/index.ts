// #1: get clients
const firstClientText: Element = document.querySelector(".first-client-info");
const secondClientText: Element = document.querySelector(".second-client-info");
const firstClientButton: Element = document.querySelector(
  ".first-client-button"
);
const secondClientButton: Element = document.querySelector(
  ".second-client-button"
);

interface client {
  firstName: string;
  lastName: string;
  age: number;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

const displayClient = (infoElement: Element, client: client) => {
  infoElement.innerHTML = `<ul>
        <li>First name: ${client.firstName}</li>
        <li>Last name: ${client.lastName}</li>
        <li>Age: ${client.age}</li>
        <li>Address: 
            <ul>
                <li>Street: ${client.address.street}</li>
                <li>City: ${client.address.city}</li>
                <li>Zipcode: ${client.address.zipcode}</li>
            </ul>
        </li>
    </ul>`;
};
let clientOne: client = {
  firstName: "Bobi",
  lastName: "Golan",
  age: 40,
  address: {
    street: "Kulas Light",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
};
let clientTwo: client = {
  firstName: "Ervin",
  lastName: "Howell",
  age: 33,
  address: {
    street: "Victor Plain",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
  },
};

firstClientButton.addEventListener("click", () => {
  displayClient(firstClientText, clientOne);
});
secondClientButton.addEventListener("click", () => {
  displayClient(secondClientText, clientTwo);
});

// #2.1: random number function

const getRandomNumber = (min: number, max: number): number => {
  let number: number;
  number = Math.random() * (max - min) + min;
  if (number % 1 < 0.5) {
    number = Math.floor(number);
  } else {
    number = Math.ceil(number);
  }
  return number;
};

// 2.2: Get random numbers array

const getRandomNumbersArray = (size: number): number[] => {
  let randomArray: number[] = [];
  for (let index: number = 0; index < size; index++) {
    randomArray.push(getRandomNumber(100, 200));
  }
  return randomArray;
};

// 2.3: display numbers array
const randomArrayButton: Element = document.querySelector(".get-random-array");
const randomArrayText: Element = document.querySelector(".array-data");

const displayArray = (arrayData: number[]) => {
  let dataStr: string = "";
  arrayData.forEach((number: number) => {
    dataStr += `${number}, `;
  });
  randomArrayText.innerHTML = dataStr.substring(0, dataStr.length - 2);
};

randomArrayButton.addEventListener("click", () => {
  let arraySize: number;
  let randomArray: number[];
  arraySize = +prompt("Please enter a number: ");
  randomArray = getRandomNumbersArray(arraySize);
  displayArray(randomArray);
});

// #3: Enum for 5 colors

enum Color {
  white,
  green,
  yellow,
  blue,
  purple,
}

const itemButton: Element = document.querySelector(".get-random-item");
const itemText: Element = document.querySelector(".item-data");

const printColorItem = (color: Color) => {
  let item: string;
  switch (color) {
    case 0:
      item = "Snow";
      break;
    case 1:
      item = "Grass";
      break;
    case 2:
      item = "Banna";
      break;
    case 3:
      item = "Sky";
      break;
    case 4:
      item = "Grape";
      break;
  }
  itemText.innerHTML = `The item is: ${item}`;
};

itemButton.addEventListener("click", () => {
  printColorItem(Color.purple);
});
