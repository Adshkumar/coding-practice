document.getElementById("searchBtn").addEventListener("click", getWeather);
document.getElementById("cityInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") getWeather();
});

function getWeather(){
    const city = document.getElementById("cityInput").value.trim();
    if(!city){
        alert("Please enter city name.");
        return;
    }
    fetchWeatherdata(city);
}

const apiKey = "6510c77e8295763d92eabab09e9d3393";

function fetchWeatherdata(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiurl)
    .then(response => {
        if(!response.ok){
            return response.json().then(err =>{
                throw new Error("City not found");
            });
        }
        return response.json();
    })
    .then(data => displayWeather(data))
    .catch(error => showError(error.message));
}
function displayWeather(data){
    let celsiusTemp = data.main.temp - 273.15;
    document.getElementById("temperature").innerText = `${celsiusTemp.toFixed(2)}°C`;
    document.getElementById("humidity").innerText = `${data.main.humidity}%`;
    document.getElementById("windSpeed").innerText = `${data.wind.speed} km/h`;
    document.getElementById("location").innerText = `${data.name}, ${data.sys.country}`;
    const now = new Date();
    document.getElementById("lastUpdated").innerText = `Last updated: ${now.toLocaleTimeString()}`;
}

function showError(msg) {
    alert("Error: " + msg);
}
