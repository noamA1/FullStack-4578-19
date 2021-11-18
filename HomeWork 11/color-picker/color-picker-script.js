const colorPickerElement = document.querySelector("#color-picker");
const bodyElement = document.getElementsByTagName("body");
console.log(bodyElement[0]);

let selectedColor;
colorPickerElement.addEventListener("click", function () {
  selectedColor = colorPickerElement.value;
  localStorage.setItem("bg-color", selectedColor);
  bodyElement[0].style.backgroundColor = selectedColor;
});

if (localStorage.getItem("bg-color") !== null) {
  selectedColor = localStorage.getItem("bg-color");
  bodyElement[0].style.backgroundColor = selectedColor;
  colorPickerElement.value = selectedColor;
} else {
  bodyElement[0].style.backgroundColor = "#fff";
  colorPickerElement.value = "none";
}
