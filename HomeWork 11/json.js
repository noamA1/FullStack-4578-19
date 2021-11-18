// Helper functions:
const toStringFormat = (obj) => {
  return JSON.stringify(obj);
};

const toObjectFormat = (str) => {
  return JSON.parse(str);
};
// #1: books / items json
let books = [
  {
    id: 1,
    name: "Under the Whispering Door (B&N Exclusive Edition)",
    author: "TJ Klune",
    price: 21.99,
  },
  {
    id: 2,
    name: "Harlem Shuffle",
    author: "Colson Whitehead",
    price: 22.95,
  },
  {
    id: 3,
    name: "The Sentence",
    author: "Louise Erdrich",
    price: 22.99,
  },
];

// showing the array in string at alert
let booksString = toStringFormat(books);
// alert(booksString);

// return from string to object array
let items = toObjectFormat(booksString);

// print books and items to the console
console.log("Books: ", books);
console.log("Items: ", items);

// display the items array on the page
for (item of items) {
  const itemEl = document.querySelector(`.item-${item.id}`);
  //   console.log(itemEl);
  itemEl.innerHTML = `<p>Book ID: ${item.id}</p> <p>Book Name: ${item.name}</p> <p>Book Author: ${item.author}</p> <p>Book Price: ${item.price} &#36;</p>`;
}

// #2: Cat Object

let myCat = {
  name: "joly",
  age: 3,
  color: "redhead",
  isCastrated: false,
};

let catString = toStringFormat(myCat);
// alert(catString);

let yourCat = toObjectFormat(catString);

console.log("myCat: ", myCat);
console.log("yourCat: ", yourCat);

const catElement = document.querySelector(".cat");
catElement.innerHTML = `<p>Cat Name: ${yourCat.name}</p> <p>Cat Age: ${
  yourCat.age
}</p> <p>Cat color: ${yourCat.color}</p> <p>Cat Castrated?: ${
  yourCat.isCastrated ? "Yes" : "No"
}</p>`;
