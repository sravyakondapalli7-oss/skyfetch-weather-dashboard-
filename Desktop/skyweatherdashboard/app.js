const API_KEY = "51ed2539fd3ad1e454aaa0dd312fd595";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

function getWeather(city) {
    const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    axios.get(url)
        .then(function(response) {
            displayWeather(response.data);
        })
        .catch(function(error) {
            document.getElementById("weather-display").innerHTML =
                "<p>Error fetching data</p>";
        });
}

function displayWeather(data) {
    const city = data.name;
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;

    const html = `
        <h2>${city}</h2>
        <div class="temperature">${temp}°C</div>
        <p>${description}</p>
    `;

    document.getElementById("weather-display").innerHTML = html;
}

getWeather("London");
