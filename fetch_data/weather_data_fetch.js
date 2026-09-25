// 🔧 Task: Weather Data Fetch Simulation
// 📝 Objective:
// Build a simulation that:

// 1 Gets a city name from the user.

// 2 Simulates fetching weather data from a remote server (using Promise + setTimeout).

// 3 Uses async/await to handle the async behavior cleanly.

// 4 Logs the weather data or an error.

// 📦 Requirements:
// . Create a function getWeather(city) that:

// . Returns a Promise.

// . Resolves with weather data (e.g., temperature, humidity) after 2 seconds.

// . Rejects if city name is empty or not found.

// . Create an async function displayWeather() that:

// . Calls getWeather(city) using await.

// . Handles both success and failure using try...catch.


const WeatherDB = {
     "Delhi": { temperature: "32°C", humidity: "68%" },
    "Mumbai": { temperature: "30°C", humidity: "80%" },
    "Bangalore": { temperature: "25°C", humidity: "70%" }
}

function getWeather(city){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(!city || !WeatherDB[city]){
                reject("City not found");
            }
            else{
                resolve(WeatherDB[city]);
            }
        }, 2000);
    });
}

async function displayWeather(city){
    console.log(`Searching weather for ${city}...\n`);
    try{
         const weather = await getWeather(city);
        console.log(`🌡️ Temperature: ${weather.temperature}`);
        console.log(`💧 Humidity: ${weather.humidity}`);
    }catch (error) {
        console.error(`❌ Error: ${error}`);
    }
}

displayWeather("Mumbai"); 