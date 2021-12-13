$(document).ready(function () {
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

  const getRandomColor = () => {
    let redColor = getRandomNumber(0, 255);
    let greenColor = getRandomNumber(0, 255);
    let blueColor = getRandomNumber(0, 255);
    return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
  };

  const displayNumbersAndColorOnBox = () => {
    let randomColor, randomNumber;
    $(".box").each(function (index) {
      randomNumber = getRandomNumber(0, 100);
      randomColor = getRandomColor();
      $(this).css("background-color", `${randomColor}`);
      $(this).text(randomNumber);
    });

    // for (let index = 1; index <= 15; index++) {
    //   randomNumber = getRandomNumber(0, 100);
    //   randomColor = getRandomColor();
    //   $(`.box-number-${index}`).css("background-color", randomColor);
    //   $(`.box-number-${index}`).text(randomNumber);
    // }
  };
  $(".random-number-color-button").click(() => {
    displayNumbersAndColorOnBox();
  });
});
