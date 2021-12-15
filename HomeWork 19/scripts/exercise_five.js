$(document).ready(function () {
  const getRandomNumber = () => {
    let number = Math.random();
    if (number % 1 < 0.5) {
      number = Math.floor(number);
    } else {
      number = Math.ceil(number);
    }
    return number;
  };

  let colorArray = ["#ff0000", "#0000ff"];
  let clickOnRedButtonCounter = 0,
    clickOnBlueButtonCounter = 0;

  $(".box").each(function () {
    let randomColorFromArray = colorArray[getRandomNumber()];
    if (randomColorFromArray === "#ff0000") {
      $(this).addClass("box-red");
    } else {
      $(this).addClass("box-blue");
    }
    $(this).css("color", "#fff");
    $(this).click(() => {
      alert(`The box number is: ${$(this).text()}`);
    });
    $(this).hover(
      () => {
        $(this).css("border-width", "5px");
        $(this).css("font-weight", "700");
        $(this).css("box-shadow", "0 15px 20px rgba(0, 0, 0, 0.25)");
      },
      () => {
        $(this).css("border-width", "1px");
        $(this).css("font-weight", "500");
        $(this).css("box-shadow", "none");
      }
    );
  });

  $(".blue-boxes-button").click(() => {
    $(".blue-boxes-button").text((index, text) => {
      return text === "Fade Out Blue Squares"
        ? "Fade In Blue Squares"
        : "Fade Out Blue Squares";
    });
    alert(
      `This is the ${++clickOnBlueButtonCounter} time you click on the Blue button`
    );
    $(".box-blue").fadeToggle(2000);
  });
  $(".red-boxes-button").click(() => {
    $(".red-boxes-button").text((index, text) => {
      return text === "Fade Out Red Squares"
        ? "Fade In Red Squares"
        : "Fade Out Red Squares";
    });
    alert(
      `This is the ${++clickOnRedButtonCounter} time you click on the Red button`
    );
    $(".box-red").fadeToggle(2000);
  });
});
