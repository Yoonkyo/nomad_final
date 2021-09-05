const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "01557fb772ae481cf9d63faaecda97fe"

function onGeo(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `/ City: ${data.name}`;
      weather.innerText = `Weather: ${data.weather[0].main} / Temperature: ${data.main.temp}`;
    });
}

function onGeoerror() {
    console.log("fail");
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoerror);