const PIZZAS_ARRAY_LENGTH = 20;
// helper functions
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
const setRandomPizzasObjectsArray = () => {
  let array = [];
  for (let i = 0; i < PIZZAS_ARRAY_LENGTH; i++) {
    array.push({
      diameter: getRandomNumber(15, 80),
      slices: getRandomNumber(4, 8),
      toppings: getRandomNumber(0, 6),
      price: getRandomNumber(25, 120),
    });
  }
  return array;
};

const displayPizzasArray = (pizzasDataArray, pizzasTableElement) => {
  let pizzasTableRowStr = "";
  pizzasDataArray.forEach((pizza, index) => {
    pizzasTableRowStr += `
              <tr>
                <td><strong>${index + 1}</strong></td>
                <td>${pizza.diameter}</td>
                <td>${pizza.slices}</td>
                <td>${pizza.toppings}</td>
                <td>${pizza.price}</td>
              </tr>`;
  });

  pizzasTableElement.innerHTML = pizzasTableRowStr;
};
const displaySinglePizza = (pizzaObject, singlePizzaElemet) => {
  const pizzaStr = `<ul>
      <li class="list-group-item list-group-item-action list-group-item-light">Diameter: ${pizzaObject.diameter} </li>
      <li class="list-group-item list-group-item-action list-group-item-light">Slices: ${pizzaObject.slices} </li>
      <li class="list-group-item list-group-item-action list-group-item-light">Toppings: ${pizzaObject.toppings} </li>
      <li class="list-group-item list-group-item-action list-group-item-light">Price: ${pizzaObject.price} </li>
      </ul>`;
  singlePizzaElemet.innerHTML = pizzaStr;
};

// #3.1: display pizzas array
const pizzasArray = setRandomPizzasObjectsArray();
const pizzaTableBodyElement = document.querySelector(".pizza__table-body");
displayPizzasArray(pizzasArray, pizzaTableBodyElement);

// #3.2: the first pizza witout toppings
const pizzaWithoutToppingsText = document.querySelector(
  ".pizza-without-topping"
);
const pizzaWithoutToppings = pizzasArray.find((pizza) => pizza.toppings === 0);
try {
  if (pizzaWithoutToppings === undefined) {
    throw new Error();
  } else {
    displaySinglePizza(pizzaWithoutToppings, pizzaWithoutToppingsText);
  }
} catch (e) {
  pizzaWithoutToppingsText.innerHTML =
    "Sorry we do not have pizza without toppings";
}

// #3.3: the first pizza with price bigger then 30
const pizzaCheaperThenText = document.querySelector(".pizza-cheaper-than");
const pizzaCheaperThen = pizzasArray.find((pizza) => pizza.price < 30);

if (pizzaCheaperThen) {
  displaySinglePizza(pizzaCheaperThen, pizzaCheaperThenText);
} else {
  pizzaCheaperThenText.innerHTML = "Sorry we do not have pizza cheaper then 30";
}

// #3.4: the first pizza with price bigger then 30
const personalPizzaText = document.querySelector(
  ".personal-pizzas__table-body"
);
const personalPizzaTableHead = document.querySelector(
  ".personal-pizza-table-head"
);
const personalPizzaTable = document.querySelector(".personal-pizza-table");

const personalPizzas = pizzasArray.filter((pizza) => pizza.diameter <= 20);

try {
  if (personalPizzas.length === 0) {
    throw new Error();
  } else {
    displayPizzasArray(personalPizzas, personalPizzaText);
  }
} catch (error) {
  personalPizzaTable.innerHTML = "Sorry we don't have personal pizza this time";
}

// #3.5: display all the expensive pizzas
const expensivePizzasText = document.querySelector(
  ".expensive-pizzas__table-body"
);
const expensivePizzaTable = document.querySelector(".expensive-pizza-table");
const expensivePizzas = pizzasArray.filter((pizza) => pizza.price > 80);

try {
  if (expensivePizzas.length === 0) {
    throw new Error();
  } else {
    displayPizzasArray(expensivePizzas, expensivePizzasText);
  }
} catch (error) {
  expensivePizzaTable.innerHTML =
    "Sorry we don't have expensive pizza this time";
}

// #3.6: display all the none toppings pizzas
const noneToppingsPizzasText = document.querySelector(
  ".pizzas-without-toppings__table-body"
);
const noneToppingsPizzas = pizzasArray.filter((pizza) => pizza.toppings === 0);

try {
  if (noneToppingsPizzas.length === 0) {
    throw new Error();
  } else {
    displayPizzasArray(noneToppingsPizzas, noneToppingsPizzasText);
  }
} catch (error) {
  alert("Sorry we don't have pizza without toppings this time");
}

// #3.7: find the index of 6 slices pizza
const indexOfSixSlicesPizzaText = document.querySelector(
  ".pizza-six-slices-index"
);
const sixSlicesPizza = pizzasArray.findIndex((pizza) => pizza.slices === 6);
indexOfSixSlicesPizzaText.innerHTML = sixSlicesPizza;

// #3.8: all the pizzas raduises
const pizzaRaduisesText = document.querySelector(".pizza-radiuses");
let raduisesText = "";
pizzasArray.forEach((pizza, index) => {
  raduisesText += `${index + 1}: ${pizza.diameter / 2}, `;
});

pizzaRaduisesText.innerHTML = raduisesText;

// #3.9: set new object for price
const pizzaPriceObjectsElement = document.querySelector(
  ".pizza-price-object__table-body"
);
let priceObjectsArray = pizzasArray.map((pizza) => {
  return {
    pizzaId: pizzasArray.indexOf(pizza),
    price: pizza.price,
    vat: pizza.price * 0.17,
  };
});

const displayPricesObjectsArray = () => {
  let str = "";
  priceObjectsArray.forEach((element) => {
    str += `<tr>
                  <td><strong>${element.pizzaId + 1}</strong></td>
                  <td>${element.price}</td>
                  <td>${element.vat.toFixed(3)}</td>
              </tr>`;
  });
  pizzaPriceObjectsElement.innerHTML = str;
};

displayPricesObjectsArray();

// #3.10: sum of all pizzas prices
const sumOfPrices = () => {
  let sum = 0;
  pizzasArray.forEach((pizza) => {
    sum += pizza.price;
  });
  return sum;
};
const sumPizzasPricesElement = document.querySelector(".pizza-sum-prices");
let sumPrices = sumOfPrices();
sumPizzasPricesElement.innerHTML = sumPrices;

// #3.11: find the must expensive price

const findTheMostExpensivePrice = () => {
  let maxPrice = pizzasArray[0].price;
  pizzasArray.forEach((pizza) => {
    pizza.price > maxPrice ? (maxPrice = pizza.price) : maxPrice;
  });
  return maxPrice;
};
const pizzaMaxPriceElement = document.querySelector(".pizza-max-price");
const maximumPrice = findTheMostExpensivePrice();
pizzaMaxPriceElement.innerHTML = maximumPrice;

// #3.12: find the object of the most expensive pizza
const mostExpensivePizzaObjectElement = document.querySelector(
  ".pizza-max-price-object"
);
const pizzaMostExpensiveObject = pizzasArray.find(
  (pizza) => pizza.price === maximumPrice
);
displaySinglePizza(pizzaMostExpensiveObject, mostExpensivePizzaObjectElement);
