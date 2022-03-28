const API_KEY = "36475a15d5367b98c24096bbd83374b5";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("no");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
