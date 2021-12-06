const selectedCityElement = document.querySelector("#selectCityFromList");
const getCityWeaterButton = document.querySelector(".getCityWeather__button");
const weatherCardElement = document.querySelector(".selectedCityCard");
const key = "7dd812a242d9af3bd1af545d3189f376";
const weatherUrl = "http://api.weatherstack.com/current?access_key=";
let weatherObj, cityName;

getCityWeaterButton.addEventListener("click", () => {
  cityName = selectedCityElement.value;
  //   console.log(cityName);
  const ajax = new XMLHttpRequest();

  ajax.onreadystatechange = () => {
    if (ajax.readyState === 4 && ajax.status === 200) {
      weatherObj = JSON.parse(ajax.responseText);
      console.log(weatherObj);
      displayCityWeather();
    }
  };

  ajax.open("GET", `${weatherUrl}${key}&query=${cityName}`);
  ajax.send();
});

const displayCityWeather = () => {
  weatherCardElement.innerHTML = `<div class="card">
        <div class="card-body">
          <h5 class="card-title">Current weather in ${cityName}</h5>
          <p class="card-text">
            <ul >
            <li class = "weather-item"><img src = ${weatherObj.current.weather_icons[0]}></li>
            <li class = "weather-item"><strong> Temperature: </strong>${weatherObj.current.temperature}</li>
            <li class = "weather-item"><strong> Weather descriptions: </strong>${weatherObj.current.weather_descriptions[0]}</li>
            </ul>
          </p>
    
        </div>
      </div>`;
};
