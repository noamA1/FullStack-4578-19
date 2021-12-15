$(document).ready(function () {
  // #1: copy from text input
  let firstInputElement = $("#first-input");
  let secondInputElement = $("#second-input");

  $(".first-copy-button").click(() => {
    $(".first-result").text(firstInputElement.val());
    firstInputElement.remove();
  });
  $(".second-input-button").click(() => {
    $(".second-result").text(secondInputElement.val());
    secondInputElement.remove();
  });

  //   #2: List of numbers
  let firstNumberElement = $("#first-number-list-input");
  let secondNumberElement = $("#second-number-list-input");

  $(".number-list-container").hide();
  $(".number-list-button").click(() => {
    $("#number-list").empty();
    let firstNumber = firstNumberElement.val();
    let secondNumber = secondNumberElement.val();
    $("#number-list").append(setOptionsToSelect(firstNumber, secondNumber));
    $(".number-list-container").show();
  });

  const setOptionsToSelect = (firstNum, secondNum) => {
    let optionsStr = "";
    for (let i = firstNum; i <= secondNum; i++) {
      optionsStr += `<option value="${i}">${i}</option>`;
    }
    return optionsStr;
  };
});
