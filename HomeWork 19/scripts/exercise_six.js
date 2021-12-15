$(document).ready(function () {
  const key = "7dd812a242d9af3bd1af545d3189f376";
  const weatherUrl = "http://api.weatherstack.com/current?access_key=";
  let cityName;

  $(".get-weather-button").click(() => {
    cityName = $("#selectCityFromList").val();
    $(".card-text").empty();
    $.get(`${weatherUrl}${key}&query=${cityName}`, (data) => {
      $(".card-text").append(`<ul >
      <li class = "weather-item"><img src = ${data.current.weather_icons[0]}></li>
      <li class = "weather-item"><strong> Temperature: </strong>${data.current.temperature}&#x2103;</li>
      <li class = "weather-item"><strong> Weather descriptions: </strong>${data.current.weather_descriptions[0]}</li>
      </ul>`);
    });
  });
});




 