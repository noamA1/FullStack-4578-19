// #1: get clients
var firstClientText = document.querySelector(".first-client-info");
var secondClientText = document.querySelector(".second-client-info");
var firstClientButton = document.querySelector(".first-client-button");
var secondClientButton = document.querySelector(".second-client-button");
var displayClient = function (infoElement, client) {
    infoElement.innerHTML = "<ul>\n        <li>First name: ".concat(client.firstName, "</li>\n        <li>Last name: ").concat(client.lastName, "</li>\n        <li>Age: ").concat(client.age, "</li>\n        <li>Address: \n            <ul>\n                <li>Street: ").concat(client.address.street, "</li>\n                <li>City: ").concat(client.address.city, "</li>\n                <li>Zipcode: ").concat(client.address.zipcode, "</li>\n            </ul>\n        </li>\n    </ul>");
};
var clientOne = {
    firstName: "Bobi",
    lastName: "Golan",
    age: 40,
    address: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: "92998-3874"
    }
};
var clientTwo = {
    firstName: "Ervin",
    lastName: "Howell",
    age: 33,
    address: {
        street: "Victor Plain",
        city: "Wisokyburgh",
        zipcode: "90566-7771"
    }
};
firstClientButton.addEventListener("click", function () {
    displayClient(firstClientText, clientOne);
});
secondClientButton.addEventListener("click", function () {
    displayClient(secondClientText, clientTwo);
});
// #2.1: random number function
var getRandomNumber = function (min, max) {
    var number;
    number = Math.random() * (max - min) + min;
    if (number % 1 < 0.5) {
        number = Math.floor(number);
    }
    else {
        number = Math.ceil(number);
    }
    return number;
};
// 2.2: Get random numbers array
var getRandomNumbersArray = function (size) {
    var randomArray = [];
    for (var index = 0; index < size; index++) {
        randomArray.push(getRandomNumber(100, 200));
    }
    return randomArray;
};
// 2.3: display numbers array
var randomArrayButton = document.querySelector(".get-random-array");
var randomArrayText = document.querySelector(".array-data");
var displayArray = function (arrayData) {
    var dataStr = "";
    arrayData.forEach(function (number) {
        dataStr += "".concat(number, ", ");
    });
    randomArrayText.innerHTML = dataStr.substring(0, dataStr.length - 2);
};
randomArrayButton.addEventListener("click", function () {
    var arraySize;
    var randomArray;
    arraySize = +prompt("Please enter a number: ");
    randomArray = getRandomNumbersArray(arraySize);
    displayArray(randomArray);
});
// #3: Enum for 5 colors
var Color;
(function (Color) {
    Color[Color["white"] = 0] = "white";
    Color[Color["green"] = 1] = "green";
    Color[Color["yellow"] = 2] = "yellow";
    Color[Color["blue"] = 3] = "blue";
    Color[Color["purple"] = 4] = "purple";
})(Color || (Color = {}));
var itemButton = document.querySelector(".get-random-item");
var itemText = document.querySelector(".item-data");
var printColorItem = function (color) {
    var item;
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
    itemText.innerHTML = "The item is: ".concat(item);
};
itemButton.addEventListener("click", function () {
    printColorItem(Color.purple);
});
