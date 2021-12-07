// global display data function
const displaySetDataAndSetSize = (sizElement, dataElement, dataSet) => {
  let dataStr = "";
  for (object of dataSet) {
    dataStr += `
          <ul>
              <li class="list-group-item list-group-item-action list-group-item-light">${object}</li>
          </ul>`;
  }
  dataElement.innerHTML = dataStr;
  sizElement.innerHTML = dataSet.size;
};
// global to add objects to set function
const addobjectToSet = (dataObject, setOfData) => {
  setOfData.add(dataObject);
};

// #1: set of emails

const setSizeElement = document.querySelector(".setSize");
const setDataElement = document.querySelector(".setData");
const setCardButtonElement = document.querySelector(".card-button");
const hasEmailResultElement = document.querySelector(".hasEmail");

const setOfEmails = new Set();
const emailToCheck = "moshe@gmail.com";

const addEmailsToSet = () => {
  addobjectToSet("noam@gmail.com", setOfEmails);
  addobjectToSet("tal@gmail.com", setOfEmails);
  addobjectToSet("david@gmail.com", setOfEmails);
  addobjectToSet("alon@gmail.com", setOfEmails);
  addobjectToSet("moshe@gmail.com", setOfEmails);
};

// const displayEmailsAndSetSize = () => {
//   let emailsStr = "";
//   for (email of setOfEmails) {
//     emailsStr += `
//         <ul>
//             <li class="list-group-item list-group-item-action list-group-item-light">${email}</li>
//         </ul>`;
//   }
//   setDataElement.innerHTML = emailsStr;
//   setSizeElement.innerHTML = setOfEmails.size;
// };

addEmailsToSet();
displaySetDataAndSetSize(setSizeElement, setDataElement, setOfEmails);

setCardButtonElement.addEventListener("click", () => {
  if (setOfEmails.has(emailToCheck)) {
    hasEmailResultElement.innerHTML = `Yay! ${emailToCheck} exist 😃`;
  } else {
    hasEmailResultElement.innerHTML = `Oh No! ${emailToCheck} does not exist 😞`;
  }
  hasEmailResultElement.removeAttribute("hidden");
});

// #2: Set of name from the user

const setSizeFromUserElement = document.querySelector(".setFromUserSize");
const setDataFromUserElement = document.querySelector(".setFromUserData");
const setCardFromUserButtonElement = document.querySelector(
  ".set-from-user-card__button"
);

const MAX_SET_SIZE = 5;
setCardFromUserButtonElement.addEventListener("click", () => {
  const setOfNames = new Set();
  let name;

  for (let i = 0; i < MAX_SET_SIZE; i++) {
    name = prompt(`please enter the ${i + 1} name`);
    addobjectToSet(name, setOfNames);
  }
  displaySetDataAndSetSize(
    setSizeFromUserElement,
    setDataFromUserElement,
    setOfNames
  );
});

//helper functions for #3 and #4:

const addItemToMap = (itemKey, itemValue, mapVariable) => {
  mapVariable.set(itemKey, itemValue);
};
const displayKeys = (keysArray, keysElment) => {
  let keysString = "";
  for (const key of keysArray) {
    keysString += `${key}, `;
  }
  keysElment.innerHTML = keysString.substring(0, keysString.length - 2);
};

const displayValues = (valuesArray, valuesElment, mapItemsType) => {
  let valuesString = "";
  for (const value of valuesArray) {
    if (mapItemsType === "products") {
      valuesString += `${value}, `;
      valuesElment.innerHTML = valuesString.substring(
        0,
        valuesString.length - 2
      );
    } else {
      valuesString += `<ul>
        <li class="list-group-item list-group-item-action list-group-item-light">
            <ul>
                <li class = "inner-list-item">manufacturer: ${value.manufacturer}</li>
                <li class = "inner-list-item">model: ${value.model}</li>
                <li class = "inner-list-item">color: ${value.color}</li>
            </ul>
        </li>
    </ul>`;
      valuesElment.innerHTML = valuesString;
    }
  }
};

const displayDataOfMap = (map, mapDisplayElement, mapItemsType) => {
  let mapString = "";
  for (const [key, value] of map) {
    if (mapItemsType === "products") {
      mapString += `
    <ul>
        <li class="list-group-item list-group-item-action list-group-item-light">${key}: ${value}</li>
    </ul>`;
    } else {
      mapString += `<ul>
          <li class="list-group-item list-group-item-action list-group-item-light"> ${key}:
              <ul>
                  <li class = "inner-list-item">manufacturer: ${value.manufacturer}</li>
                  <li class = "inner-list-item">model: ${value.model}</li>
                  <li class = "inner-list-item">color: ${value.color}</li>
              </ul>
          </li>
      </ul>`;
      //   valuesElment.innerHTML = valuesString;
    }
  }
  mapDisplayElement.innerHTML = mapString;
};

const displayHasKey = (
  key,
  hasKeyTitleElement,
  hasKeyResultElement,
  mapItems
) => {
  let result;
  if (mapItems.has(key)) {
    result = `Key number ${key} does exist 😃`;
  } else {
    result = `Key number ${key} does not exist 😞`;
  }
  hasKeyTitleElement.innerHTML = `Has key number ${key} result:`;
  hasKeyResultElement.innerHTML = result;
};
const displayOneItem = (
  key,
  oneItemTitleElement,
  oneItemResultElement,
  mapItems,
  mapItemsType
) => {
  let itemResult, item;
  item = mapItems.get(key);

  if (item) {
    if (mapItemsType === "products") {
      itemResult = `Item #${key}: ${item}`;
    } else {
      itemResult = `<ul>
        <li class="list-group-item list-group-item-action list-group-item-light"> ${key}:
            <ul>
                <li class = "inner-list-item">manufacturer: ${item.manufacturer}</li>
                <li class = "inner-list-item">model: ${item.model}</li>
                <li class = "inner-list-item">color: ${item.color}</li>
            </ul>
        </li>
    </ul>`;
    }
  } else {
    itemResult = `Item with key number: ${key} does not exist 😞`;
  }
  oneItemTitleElement.innerHTML = `Item number ${key} result:`;
  oneItemResultElement.innerHTML = itemResult;
};

// #3: Map of products
const mapProductsKeysElement = document.querySelector(".mapProductsKeys");
const mapProductsValuesElement = document.querySelector(".mapProductsValues");
const mapProductsDataElement = document.querySelector(".mapProductsData");
const mapProductsHasKeyElement = document.querySelector(".mapProductsHasKey");
const mapProductsHasKeyTitleElement = document.querySelector(
  ".mapProductsHasKeyTitle"
);
const mapOneProductTitleElement = document.querySelector(".mapOneProductTitle");
const mapOneProductResultElement = document.querySelector(".mapOneProduct");

const mapHasProductButtonElement = document.querySelector(
  ".card-button__has-key"
);
const mapOneProductButtonElement = document.querySelector(
  ".card-button__display-product"
);

const mapOfProducts = new Map();
let productsKeysArray, productsValuesArray;
const keyToCheck = 4,
  getProductKey = 8;

const addProductsToMap = () => {
  addItemToMap(1, "Table", mapOfProducts);
  addItemToMap(2, "Sofa", mapOfProducts);
  addItemToMap(3, "Computer", mapOfProducts);
  addItemToMap(4, "Smart Phone", mapOfProducts);
  addItemToMap(5, "TV", mapOfProducts);
};

addProductsToMap();

productsKeysArray = mapOfProducts.keys();
productsValuesArray = mapOfProducts.values();

displayKeys(productsKeysArray, mapProductsKeysElement);
displayValues(productsValuesArray, mapProductsValuesElement, "products");
displayDataOfMap(mapOfProducts, mapProductsDataElement, "products");

mapHasProductButtonElement.addEventListener("click", () => {
  displayHasKey(
    keyToCheck,
    mapProductsHasKeyTitleElement,
    mapProductsHasKeyElement,
    mapOfProducts
  );
});

mapOneProductButtonElement.addEventListener("click", () => {
  displayOneItem(
    getProductKey,
    mapOneProductTitleElement,
    mapOneProductResultElement,
    mapOfProducts,
    "products"
  );
});

// #4: Map of cars
const mapCarsKeysElement = document.querySelector(".mapCarsKeys");
const mapCarsValuesElement = document.querySelector(".mapCarsValues");
const mapCarsDataElement = document.querySelector(".mapCarsData");
const mapCarsHasKeyElement = document.querySelector(".mapCarsHasKey");
const mapCarsHasKeyTitleElement = document.querySelector(".mapCarsHasKeyTitle");
const mapOneCarTitleElement = document.querySelector(".mapOneCarTitle");
const mapOneCarResultElement = document.querySelector(".mapOneCar");

const mapHasCarButtonElement = document.querySelector(
  ".card-button__has-key-car"
);
const mapOneCarButtonElement = document.querySelector(
  ".card-button__display-car"
);

const mapOfCars = new Map();
let carsKeysArray, carsValuesArray;
const keyOfCarToCheck = "1005070",
  getCarKey = "5009876";

const addCarsToMap = () => {
  addItemToMap(
    "7490314",
    { model: "Cx-3", color: "white", manufacturer: "Mazda" },
    mapOfCars
  );
  addItemToMap(
    "5477748",
    { model: "Juke", color: "black", manufacturer: "Nissan" },
    mapOfCars
  );
  addItemToMap(
    "1278834",
    { model: "S model", color: "blue", manufacturer: "Tesla" },
    mapOfCars
  );
  addItemToMap(
    "5689013",
    { model: "Civic", color: "gray", manufacturer: "Honda" },
    mapOfCars
  );
  addItemToMap(
    "5009876",
    { model: "Corolla", color: "black", manufacturer: "Toyota" },
    mapOfCars
  );
};

addCarsToMap();

carsKeysArray = mapOfCars.keys();
carsValuesArray = mapOfCars.values();

displayKeys(carsKeysArray, mapCarsKeysElement);
displayValues(carsValuesArray, mapCarsValuesElement, "cars");
displayDataOfMap(mapOfCars, mapCarsDataElement, "cars");

mapHasCarButtonElement.addEventListener("click", () => {
  displayHasKey(
    keyOfCarToCheck,
    mapCarsHasKeyTitleElement,
    mapCarsHasKeyElement,
    mapOfCars
  );
});

mapOneCarButtonElement.addEventListener("click", () => {
  displayOneItem(
    getCarKey,
    mapOneCarTitleElement,
    mapOneCarResultElement,
    mapOfCars,
    "cars"
  );
});
