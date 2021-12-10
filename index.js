let now = new Date();

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentHours = now.getHours();
  let currentMinutes = now.getMinutes();
  let currentDay = days[now.getDay()];
  let formattedDate = `It is ${currentDay}, ${currentHours}:${currentMinutes}`;
  return formattedDate;
}

let h2 = document.querySelector("h2");
h2.innerHTML = formatDate();

function displayWeather(response) {
  document.querySelector("#current-city-id").innerHTML = response.data.name;
  document.querySelector("#temperetureNumber").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(city) {
  let apiKey = "a8a010e48419f9831c5e6aad63bc06a3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function InputCity(event) {
  event.preventDefault();
  let city = document.querySelector("#exampleInputCity").value;
  searchCity(city);
}

let form = document.querySelector("form");
form.addEventListener("submit", InputCity);

searchCity("Zürich");

function fLinkClick(event) {
  event.preventDefault();
  let farenheit = document.querySelector("#temperetureNumber");
  farenheit.innerHTML = "56";
}

function cLinkClick(event) {
  event.preventDefault();
  let celsius = document.querySelector("#temperetureNumber");
  celsius.innerHTML = "13";
}

let fLink = document.querySelector("#f-id");
fLink.addEventListener("click", fLinkClick);

let cLink = document.querySelector("#c-id");
cLink.addEventListener("click", cLinkClick);
