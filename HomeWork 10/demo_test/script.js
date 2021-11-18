// let userNameEl = document.getElementById("userName-box");

// const login = () => {
//   console.log(userNameEl.value);
// };

let carsList = [];
const manufacturerEl = document.getElementById("manufacturer");
const modelEl = document.getElementById("model");
const tableEl = document.getElementById("tableBody");

const addCar = () => {
  if (manufacturerEl.value !== "" && modelEl.value !== "") {
    carsList.push({
      manufacturer: manufacturerEl.value,
      model: modelEl.value,
    });
  }

  manufacturerEl.value = "";
  modelEl.value = "";
  tableEl.innerHTML = "";
  for (let i = 0; i < carsList.length; i++) {
    tableEl.innerHTML += `<tr> <th> ${i + 1}</th> <th>${
      carsList[i].manufacturer
    } </th> <th> ${carsList[i].model}</th></tr>`;
  }
};
