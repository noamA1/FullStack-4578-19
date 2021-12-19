import { Book } from "./Book.js";
import { Perfume } from "./Perfume.js";
import { Employee } from "./Employee.js";
// #1: books store

let arrayOfBooks: Book[];
const getVatButtonElement = document.getElementsByClassName("vat-button");

let bookOne = new Book(
  "What If It's Us",
  "Becky Albertalli, Adam Silvera",
  "HarperCollins Publishers",
  11.49
);
let bookTwo = new Book(
  "Game of Thrones (A Song of Ice and Fire #1)",
  "George R. R. Martin",
  "Random House Publishing Group",
  15.99
);
let bookThree = new Book(
  "Harry Potter and the Chamber of Secrets",
  "J. K. Rowling",
  "Scholastic, Inc.",
  9.99
);

arrayOfBooks = [bookOne, bookTwo, bookThree];

bookOne.displayBookDetails(arrayOfBooks);
for (const element of getVatButtonElement) {
  element.addEventListener("click", () => {
    let book = arrayOfBooks[element.id.substring(7)];
    let vatOfBook = book.getBookVat(book.price).toFixed(2);
    const vatTableDataElement = document.querySelector(
      `#vat-${arrayOfBooks.indexOf(book)}`
    );
    vatTableDataElement.innerHTML = `${vatOfBook}&#36;`;
  });
}

// #2: perfumes store

let arrayOfPerfumes: Perfume[];
const getPerfumeVatButtonElement =
  document.getElementsByClassName("perfume-vat-button");

let perfumeOne = new Perfume(
  "Alien Goddess Eau de Parfum",
  "Mugler",
  "100ML",
  true,
  135
);
let perfumeTwo = new Perfume("Eros", "Versace", "100ML", false, 92);

arrayOfPerfumes = [perfumeOne, perfumeTwo];

perfumeOne.displayPerfumDetails(arrayOfPerfumes);
for (const element of getPerfumeVatButtonElement) {
  element.addEventListener("click", () => {
    let perfume = arrayOfPerfumes[element.id.substring(15)];
    let vatOfPerfume = perfume.getPerfumeVat(perfume.price).toFixed(2);
    const vatTableDataElement = document.querySelector(
      `#perfume-vat-${arrayOfPerfumes.indexOf(perfume)}`
    );
    vatTableDataElement.innerHTML = `${vatOfPerfume}&#36;`;
  });
}

// #2.1: Employees

let employeeOne = new Employee(
  "Patricia",
  "Lebsack",
  {
    street: "Hoeger Mall",
    city: "South Elvis",
    zipcode: "53919-4257",
  },
  30000
);
let employeeTwo = new Employee(
  "Ervin",
  "Howell",
  {
    street: "Victor Plains",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
  },
  45000
);

employeeOne.displayEmployeeInfo();
employeeTwo.displayEmployeeInfo();

const getFirstTaxButtonElement = document.querySelector(
  `#tax-${employeeOne.firstName}`
);
const getSecondTaxButtonElement = document.querySelector(
  `#tax-${employeeTwo.firstName}`
);

getFirstTaxButtonElement.addEventListener("click", () => {
  let tax = employeeOne.getTax();
  const employeeCardList = document.querySelector(
    `#${employeeOne.firstName}-list`
  );
  let taxItem = document.createElement("li");
  taxItem.innerHTML = `<strong>Tax: </strong> ${tax} &#36;`;
  employeeCardList.appendChild(taxItem);
  getFirstTaxButtonElement.replaceWith("Done!");
});

getSecondTaxButtonElement.addEventListener("click", () => {
  let tax = employeeTwo.getTax();
  const employeeCardList = document.querySelector(
    `#${employeeTwo.firstName}-list`
  );
  let taxItem = document.createElement("li");
  taxItem.innerHTML = `<strong>Tax: </strong> ${tax} &#36;`;
  employeeCardList.appendChild(taxItem);
  getSecondTaxButtonElement.replaceWith("Done!");
});
