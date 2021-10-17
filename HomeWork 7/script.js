// #1: conditions
// #1.1
// alert("please Enter 2 numbers");
// let firstNumber = prompt("Enter yor first number:");
// let secondNumber = prompt("Enter yor second number:");

// if (firstNumber > secondNumber) {
//   document.write(`${firstNumber} is bigger then ${secondNumber}`);
// } else if (firstNumber < secondNumber) {
//   document.write(`${secondNumber} is bigger then ${firstNumber}`);
// } else {
//   document.write(`${secondNumber} is equal to ${firstNumber}`);
// }

// 1.2
// let userGrade = +prompt("Please Enter your grade:");
// const PASS_GRADE = 60;
// if (userGrade < 0) {
//   userGrade = +prompt(`Your grade can't be negative, please try again:`);
//   console.log(userGrade);
// } else if (userGrade >= PASS_GRADE) {
//   alert(`Well done your grade is: ${userGrade}, you pass 🙂`);
// } else {
//   alert(`Too bad your grade is: ${userGrade}, you fail 😟`);
// }

// #1.3
// let userAge = +prompt("Please enter your age:");
// let LEGAL_AGE = 17;
// const drivingLicense = document.getElementById("driving-license");
// console.log(drivingLicense);
// if (userAge >= LEGAL_AGE) {
//   drivingLicense.innerHTML += `<p>#1.3: Congratulations you can get a driving license 🎊🎉 </p> `;
//   //   alert("Congratulations you can get a driving license 🎊🎉");
// } else {
//   drivingLicense.innerHTML = `<p>#1.3: Sorry you still can't get a driving license, you must wait ${
//     LEGAL_AGE - userAge
//   } years to get it </p>`;
//   //   alert(
//   //     `Sorry you still can't get a driving license, you must wait ${
//   //       LEGAL_AGE - userAge
//   //     } years to get it`
//   //   );
// }

// #1.4

// let number = +prompt(
//   "Please enter a number to chack if it is negative, positive or zero:"
// );
// const npNumber = document.getElementById("negative-positive");
// if (number < 0) {
//   npNumber.innerHTML = `<p>#1.4: ${number} is negative number</p> `;
//   // alert(`${number} is negative number`);
// } else if (number > 0) {
//   npNumber.innerHTML = `<p> #1.4: ${number} is positive number </p>`;
//   // alert(`${number} is positive number`);
// } else {
//   npNumber.innerHTML = `<p> #1.4: the number is zero</p>`;
//   // alert(`the number is zero`);
// }

// #1.5
// let numberForRange = +prompt("Please enter a number:");
// const numberRange = document.getElementById("number-range");

// switch (numberForRange) {
//   case numberForRange < 0 ? numberForRange : "":
//     numberRange.innerHTML = ` #1.5: The number is negative number`;
//     break;
//   case numberForRange === 0 ? 0 : "":
//     numberRange.innerHTML = ` #1.5: The number is zero`;
//     break;
//   case numberForRange >= 1 && numberForRange <= 100 ? numberForRange : "":
//     numberRange.innerHTML = ` #1.5: The number is between 1 to 100`;
//     break;
//   case numberForRange > 100 && numberForRange <= 1000 ? numberForRange : "":
//     numberRange.innerHTML = ` #1.5: The number is between 101 to 1000`;
//     break;
//   default:
//     numberRange.innerHTML = ` #1.5: The number is bigger then 1000`;
// }

// if (numberForRange < 0) {
//   numberRange.innerHTML = ` #1.5: The number is negative number`;
//   // alert(`The number is negative number`);
// } else if (numberForRange === 0) {
//   numberRange.innerHTML = ` #1.5: The number is zero`;
//   // alert(`The number is zero`);
// } else if (numberForRange >= 1 && numberForRange <= 100) {
//   numberRange.innerHTML = ` #1.5: The number is between 1 to 100`;
//   // alert(`The number is between 1 to 100`);
// } else if (numberForRange > 100 && numberForRange <= 1000) {
//   numberRange.innerHTML = ` #1.5: The number is between 1 to 100`;
//   // alert(`The number is between 101 to 1000`);
// } else {
//   numberRange.innerHTML = ` #1.5: The number is bigger then 1000`;
//   // alert(`The number is bigger then 1000`);
// }

// #1.6
// let grade = +prompt("Please enter your grade:");
// const gradeParagraph = document.getElementById("grade");

// if (grade >= 0 && grade <= 59) {
//   gradeParagraph.innerHTML = `<p> #1.6: you fail </p>`;
//   // alert(`you fail`);
// } else if (grade >= 60 && grade <= 69) {
//   gradeParagraph.innerHTML = `<p> #1.6: Your grade is enough</p>`;
//   // alert(`Your grade is enough`);
// } else if (grade >= 70 && grade <= 79) {
//   gradeParagraph.innerHTML = `<p> #1.6: Your grade is almost good</p>`;
//   // alert(`Your grade is almost good`);
// } else if (grade >= 80 && grade <= 89) {
//   gradeParagraph.innerHTML = `<p> #1.6: Your grade is good</p>`;
//   // alert(`Your grade is good`);
// } else if (grade >= 90 && grade <= 99) {
//   gradeParagraph.innerHTML = `<p> #1.6: Your grade is very good</p>`;
//   // alert(`Your grade is very good`);
// } else {
//   gradeParagraph.innerHTML = `<p> #1.6: Your grade is excellent</p>`;
//   // alert(`Your grade is excellent`);
// }

// #1.7
// let firstNumber = +prompt("Enter yor first number:");
// let secondNumber = +prompt("Enter yor second number:");
// let thirdNumber = +prompt("Enter yor third number:");
// let max;

// if (firstNumber > secondNumber && firstNumber > thirdNumber) {
//   max = firstNumber;
// } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
//   max = secondNumber;
// } else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
//   max = thirdNumber;
// } else if (
//   (firstNumber > secondNumber && firstNumber < thirdNumber) ||
//   (firstNumber < secondNumber && secondNumber < thirdNumber)
// ) {
//   max = thirdNumber;
// }
// console.log(`The max number is: ${max}`);

// #2: loops

// #2.1
const MAX_NUMBER = 1000;
for (let i = MAX_NUMBER; i >= 1; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  // document.write(i + "<br>");
}

// #2.2
// let num = +prompt("please enter a number:");

// for (let i = 1; i <= num; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// #2.3
// console.log("-------------------------1 to num---------------------");
// let number = +prompt("please enter a number:");
// for (let i = 1; i <= number; i++) {
//   console.log(i);
// }
// console.log("-------------------------num to 1---------------------");
// for (let i = number; i >= 1; i--) {
//   console.log(i);
// }

// #2.4
// let num1 = +prompt("please enter your first number:"),
//   num2 = +prompt("please enter your second number:");

// for (let index = num2; index <= num1; index++) {
//   console.log(index);
// }

// #2.5
// let num1 = +prompt("please enter your first number:"),
//   num2 = +prompt("please enter your second number:");

// if (num1 === num2) {
//   console.log("the numbers are equal");
// } else if (num1 > num2) {
//   for (let index = num2; index <= num1; index++) {
//     console.log(index);
//   }
// } else {
//   for (let index = num1; index <= num2; index++) {
//     console.log(index);
//   }
// }

// #2.6: bonus
let num = +prompt("please enter sqeuar width :");
let starString = "";
const starsSqeuar = document.getElementById("sqeuar-stars");
for (let i = 0; i < num; i++) {
  for (let j = 1; j <= num; j++) {
    starString += " *";
  }
  starString += "<br>";
}
// starsSqeuar.innerHTML = `<p> The sqeuar of stars with length of ${num}: </p>`;
starsSqeuar.innerHTML += `<p>${starString}</p>`;
// console.log(starString);

// #2.7: bonus
let width = +prompt("please enter rectangle width:"),
  height = +prompt("please enter rectangle heigth:");
let starStringForRectangle = "";
const starsRectangle = document.getElementById("rectangle-stars");

for (let i = 0; i < height; i++) {
  for (let j = 1; j <= width; j++) {
    starStringForRectangle += " *";
  }
  starStringForRectangle += "<br>";
}
// starsRectangle.innerHTML = ` The stars rectangle with width of: ${width} and height of: ${height}: </p>`;
starsRectangle.innerHTML += `<p> ${starStringForRectangle}</p>`;
// console.log(starString);

// #3: objects

// #3.1

const rectangleObj = {
  width: 10,
  height: 5,
  color: "blue",
  x_position: 0,
  y_position: 10,
};

const rectangle = document.getElementById("rectangle");
const rectangleInLoop = document.getElementById("rectangle-in-loop");
const rectangleUl = document.getElementById("rectangle-in-loop__ul");

// console.log("--------- without for-in loop: ---------- ");

rectangle.innerHTML = `<p> without for-in loop:</p>
<ul>
<li>width: ${rectangleObj.width}</li>
<li>height: ${rectangleObj.height}</li>
<li>color: ${rectangleObj.color}</li>
<li>x position: ${rectangleObj.x_position}</li>
<li>y position: ${rectangleObj.y_position}</li>
</ul>`;
// console.log(`rectangle parmeters:
// width: ${rectangle.width},
// height: ${rectangle.height},
// color: ${rectangle.color},
// x position: ${rectangle.x_position},
// y position: ${rectangle.y_position}`);

// console.log("--------- with for-in loop: ---------- ");
// rectangleInLoop.innerHTML = `<p> --------- with for-in loop: ---------- </p>`;

for (property in rectangleObj) {
  rectangleUl.innerHTML += `<li> ${property}: ${rectangleObj[property]}</li>`;
  // console.log(`${property}: ${rectangleObj[property]}`);
}

// #3.2
const employee = document.getElementById("employee");
const employeeInLoop = document.getElementById("employee-in-loop");
const employeeUl = document.getElementById("employee-in-loop__ul");
const employeeObj = {
  firstName: "Avi",
  lastName: "choen",
  salary: "15,000 &#8362;",
  email: "avi@gmail.com",
  phoneNumber: "052-5566776",
};

employee.innerHTML = `<p> without for-in loop: </p>
<ul>
<li>firt name: ${employeeObj.firstName}</li>
<li>last name: ${employeeObj.lastName}</li>
<li>salary: ${employeeObj.salary}</li>
<li>email: ${employeeObj.email}</li>
<li>phone number: ${employeeObj.phoneNumber}</li>
</ul>`;
// document.write("--------- without for-in loop: ---------- <br>");
// document.write(`employeeObj parmeters:  <br>
//   firstName: ${employeeObj.firstName}, <br>
//   lastName: ${employeeObj.lastName}, <br>
//   salary: ${employeeObj.salary}, <br>
//   email: ${employeeObj.email}, <br>
//   phoneNumber: ${employeeObj.phoneNumber} <br>`);

// document.write("--------- with for-in loop: ---------- <br>");
for (property in employeeObj) {
  employeeUl.innerHTML += `<li> ${property}: ${employeeObj[property]}</li>`;
  // document.write(`${property}: ${employeeObj[property]} <br>`);
}

//  #3.3: bonus
// const clothing_itemObj = {
//   manufacturer: String,
//   size: String,
//   color: String,
//   price: String,
// };

// let clothing_item = new clothing_itemObj();
const clothing_item = {
  manufacturer: "Renuar",
  size: "L",
  color: "black",
  price: "150 &#8362;",
};

const item = document.getElementById("clothing-item");
const itemInLoop = document.getElementById("clothing-item-in-loop");
const itemUl = document.getElementById("clothing-item-in-loop__ul");

item.innerHTML = `<p> without for-in loop: </p>
<ul>
<li>manufacturer: ${clothing_item.manufacturer}</li>
<li>size: ${clothing_item.size}</li>
<li>color: ${clothing_item.color}</li>
<li>price: ${clothing_item.price}</li>
</ul>`;

// document.write("--------- without for-in loop: ---------- <br>");
// document.write(`manufacturer: ${clothing_item.manufacturer}, <br>
//     size: ${clothing_item.size}, <br>
//     color: ${clothing_item.color}, <br>
//     price: ${clothing_item.price}, <br>`);

// document.write("--------- with for-in loop: ---------- <br>");
for (property in clothing_item) {
  itemUl.innerHTML += `<li> ${property}: ${clothing_item[property]}</li>`;
  // document.write(`${property}: ${clothing_item[property]}, <br>`);
}

// User item

// let manufacturer = prompt("please enter the colth manufacturer:"),
//   size = prompt("please enter the colth size:"),
//   color = prompt("please enter the colth color:"),
//   price = prompt("please enter the colth price:") + " &#8362;";

// clothing_item.manufacturer = manufacturer;
// clothing_item.size = size;
// clothing_item.color = color;
// clothing_item.price = price;

// document.write("--------- user values without for-in loop: ---------- <br>");
// document.write(`manufacturer: ${clothing_item.manufacturer}, <br>
//     size: ${clothing_item.size}, <br>
//     color: ${clothing_item.color}, <br>
//     price: ${clothing_item.price}, <br>`);

// document.write("--------- user values with for-in loop: ---------- <br>");
// for (property in clothing_item) {
//   document.write(`${property}: ${clothing_item[property]}, <br>`);
// }

// const userItem = document.getElementById("user-clothing-item");
// const userItemInLoop = document.getElementById("user-clothing-item-in-loop");
// const userItemUl = document.getElementById("user-clothing-item-in-loop__ul");

// let manufacturerNew = prompt("please enter the colth manufacturer:"),
//   sizeNew = prompt("please enter the colth size:"),
//   colorNew = prompt("please enter the colth color:"),
//   priceNew = prompt("please enter the colth price:") + " &#8362;";

// userClothing_item = {
//   manufacturer: manufacturerNew,
//   size: sizeNew,
//   color: colorNew,
//   price: priceNew,
// };

// userItem.innerHTML = `<p> --------- user values without for-in loop: ----------</p>
// <ul>
// <li>manufacturer: ${userClothing_item.manufacturer}</li>
// <li>size: ${userClothing_item.size}</li>
// <li>color: ${userClothing_item.color}</li>
// <li>price: ${userClothing_item.price}</li>
// </ul>`;
// // document.write("--------- with for-in loop: ---------- <br>");
// for (property in userClothing_item) {
//   userItemUl.innerHTML += `<li> ${property}: ${userClothing_item[property]}</li>`;
//   // document.write(`${property}: ${clothing_item[property]}, <br>`);
// }

// #3.4: bonus
const clientObj = {
  firstName: "Avi",
  lastName: "choen",
  email: "avi@gmail.com",
  phoneNumber: "052-5566776",
  creditCard: {
    type: "visa",
    number: "4580 5614 4828 8391",
    validity: "05/25",
    securityNumber: 542,
  },
};

const client = document.getElementById("client");
const clientInLoop = document.getElementById("client-in-loop");
const clientUl = document.getElementById("client-in-loop__ul");

client.innerHTML = `<p> without for-in loop: </p>
<ul>
<lifirst name: ${clientObj.lastName}</li>
<li>last name: ${clientObj.email}</li>
<li>email: ${clientObj.email}</li>
<li>phone number: ${clientObj.phoneNumber}</li>
<li>credit card:
  <ul> 
         <li> credit type: ${clientObj.creditCard.type}</li>
         <li>credit number: ${clientObj.creditCard.number}</li>
         <li>credit validity: ${clientObj.creditCard.validity}</li>
         <li>credit security number: ${clientObj.creditCard.securityNumber}</li>
       </ul>
  </li>

</ul>`;

for (property in clientObj) {
  if (property !== "creditCard") {
    clientUl.innerHTML += `<li>${property}: ${clientObj[property]}</li>`;
  }
  if (property === "creditCard") {
    clientUl.innerHTML += `<li> credit card:`;
    for (innerProperty in clientObj[property]) {
      clientUl.innerHTML += `<ul> <li> ${innerProperty}: ${clientObj[property][innerProperty]}`;
    }
    clientUl.innerHTML += `</ul> </li>`;
  }
}

// document.write("--------- without for-in loop: ---------- <br>");
// document.write(`manufacturer: ${client.firstName}, <br>
//       first name: ${client.lastName}, <br>
//       last name: ${client.email}, <br>
//       email: ${client.email}, <br>
//       phone number: ${client.phoneNumber}, <br>
//       credit card:{ <br>
//         credit type: ${client.creditCard.type}, <br>
//         credit number: ${client.creditCard.number}, <br>
//         credit validity: ${client.creditCard.validity}, <br>
//         credit security number: ${client.creditCard.securityNumber}, <br>
//       }  <br>`);

// document.write("--------- with for-in loop: ---------- <br>");
// for (property in client) {
//   if (property !== "creditCard") {
//     document.write(`${property}: ${client[property]}, <br>`);
//   }
//   if (property === "creditCard") {
//     document.write(`credit card:{ <br>`);
//     for (innerProperty in client[property]) {
//       document.write(
//         `${innerProperty}: ${client[property][innerProperty]}, <br>`
//       );
//     }
//     document.write("}");
//   }
// }
