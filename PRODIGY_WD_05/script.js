const apiKey = 'f00c38e0279b7bc85480c3fe775d518c'; // Replace with your API key
const url = 'https://api.openweathermap.org/data/2.5/weather';

$(document).ready(function () {
    $('#city-input-btn').click(function () {
        const cityName = $('#city-input').val().trim();
        if (cityName) {
            weatherFn(cityName);
        } else {
            alert('Please enter a city name.');
        }
    });
});

async function weatherFn(cName) {
    const fullUrl = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(fullUrl);
        const data = await res.json();
        if (res.ok) {
            weatherShowFn(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function weatherShowFn(data) {
    $('#city-name').text(data.name);
    $('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    $('#temperature').html(`${data.main.temp}°C`);
    $('#description').text(data.weather[0].description);
    $('#wind-speed').html(`Wind Speed: ${data.wind.speed} m/s`);
    $('#humidity').html(`Humidity: ${data.main.humidity}%`);
    $('#weather-icon').attr('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    $('#weather-info').fadeIn();
}
