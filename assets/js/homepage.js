

var currentWeatherFunction = function() {

var currentWeather = document.querySelector('#currentWeather');

var currentWeatherEl = document.createElement('h3');
currentWeatherEl.textContent = "testing";
currentWeather.appendChild(currentWeatherEl);
};

currentWeatherFunction();
