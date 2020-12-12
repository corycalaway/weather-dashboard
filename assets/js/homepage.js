
// create current weather from search
var currentWeatherFunction = function() {

var currentWeather = document.querySelector('#currentWeather');

//add list item for current weather
var currentWeatherEl = document.createElement('ul');
currentWeatherEl.classList.add("list-group");
currentWeather.appendChild(currentWeatherEl);

// City name and date
var currentWeatherCity = document.createElement('li');
currentWeatherCity.classList.add("list-group-item");
currentWeatherEl.appendChild(currentWeatherCity);

// current temperature for listed city
var currentTemp = document.createElement('li');
currentTemp.classList.add("list-group-item");
currentWeatherEl.appendChild(currentTemp);

// current humidty for listed city
var currentHumidty = document.createElement('li');
currentHumidty.classList.add("list-group-item");
currentWeatherEl.appendChild(currentHumidty);

// current wind speed for listed city
var currentWindSpeed = document.createElement('li');
currentWindSpeed.classList.add("list-group-item");
currentWeatherEl.appendChild(currentWindSpeed);

// current UV index for listed city
var currentUvIndex = document.createElement('li');
currentUvIndex.classList.add("list-group-item");
currentWeatherEl.appendChild(currentUvIndex);


// add five day forcast
var fiveDayForcast = document.createElement('h3');
fiveDayForcast.textContent = "testing2";
currentWeather.appendChild(fiveDayForcast);
};

currentWeatherFunction();
