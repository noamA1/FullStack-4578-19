$(document).ready(function () {
  $(".blue-boxes-button").click(() => {
    $(".blue-boxes-button").text((index, text) => {
      return text === "Fade Out Blue Squares"
        ? "Fade In Blue Squares"
        : "Fade Out Blue Squares";
    });
    $(".box-blue").fadeToggle(2000);
  });
  $(".red-boxes-button").click(() => {
    $(".red-boxes-button").text((index, text) => {
      return text === "Fade Out Red Squares"
        ? "Fade In Red Squares"
        : "Fade Out Red Squares";
    });
    $(".box-red").fadeToggle(2000);
  });
});
