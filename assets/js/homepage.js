var setTimeDate = function () {
    
    dateTime = luxon.DateTime.local();
    
    
    currentWeatherFunction(dateTime)
  };

// create current weather from search
var currentWeatherFunction = function(dateTime) {

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
var fiveDayForcast = document.createElement('div');
fiveDayForcast.classList.add("container");
currentWeather.appendChild(fiveDayForcast);


var fiveDayForcastHeaderEl = document.createElement('div');
fiveDayForcastHeaderEl.classList.add("row");
fiveDayForcast.appendChild(fiveDayForcastHeaderEl);

// five day forcast header text
var fiveDayForcastHeader = document.createElement('h3');
fiveDayForcastHeader.classList.add("col-8");
fiveDayForcastHeader.textContent = "5-Day Forecast:";
fiveDayForcast.appendChild(fiveDayForcastHeader);

// create row for five day forcast
var fiveDayForcastDays = document.createElement('div');
fiveDayForcastDays.classList.add("row");
fiveDayForcastDays.classList.add("justify-content-between");
fiveDayForcast.appendChild(fiveDayForcastDays);


// create day one of five day forcast
var fiveDayForcastDayOne = document.createElement('ul');
fiveDayForcastDayOne.classList.add("col");
fiveDayForcastDays.appendChild(fiveDayForcastDayOne);

// list created for day one 
var dayOneDate = document.createElement('li');
dayOneDate.classList.add("list-group-item");
fiveDayForcastDayOne.appendChild(dayOneDate);

// add date time plus 1 day to forcast
dayOneDate.textContent = dateTime.plus({ days: 1}).toLocaleString();


// create day two of five day forcast
var fiveDayForcastDayTwo = document.createElement('div');
fiveDayForcastDayTwo.classList.add("col");
fiveDayForcastDays.appendChild(fiveDayForcastDayTwo);

// list created for day two 
var dayTwoDate = document.createElement('li');
dayTwoDate.classList.add("list-group-item");
fiveDayForcastDayTwo.appendChild(dayTwoDate);

// add date time plus 2 day to forcast
dayTwoDate.textContent = dateTime.plus({ days: 2}).toLocaleString();


// create day three of five day forcast
var fiveDayForcastDayThree = document.createElement('div');
fiveDayForcastDayThree.classList.add("col");
fiveDayForcastDayThree.textContent = "test3";
fiveDayForcastDays.appendChild(fiveDayForcastDayThree);

// create day four of five day forcast
var fiveDayForcastDayFour = document.createElement('div');
fiveDayForcastDayFour.classList.add("col");
fiveDayForcastDayFour.textContent = "test4";
fiveDayForcastDays.appendChild(fiveDayForcastDayFour);

// create day five of five day forcast
var fiveDayForcastDayFive = document.createElement('div');
fiveDayForcastDayFive.classList.add("col");
fiveDayForcastDayFive.textContent = "test5";
fiveDayForcastDays.appendChild(fiveDayForcastDayFive);
};

//currentWeatherFunction();
setTimeDate();
