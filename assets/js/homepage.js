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
//$(currentWeatherCity).attr('id', 'cityName')
currentWeatherCity.classList.add("list-group-item");
currentWeatherEl.appendChild(currentWeatherCity);
var currentCityName = document.createElement('h3');
$(currentCityName).attr('id', 'cityName')
currentWeatherCity.appendChild(currentCityName);
//var currentCityName = document.createElement('h3')
//currentCityName.val()

// current temperature for listed city
var currentTemp = document.createElement('li');
currentTemp.classList.add("list-group-item");
currentWeatherEl.appendChild(currentTemp);
var currentCityTemp = document.createElement('div');
$(currentCityTemp).attr('id', 'cityTemp')
currentTemp.appendChild(currentCityTemp);

// current humidty for listed city
var currentHumidity = document.createElement('li');
currentHumidity.classList.add("list-group-item");
currentWeatherEl.appendChild(currentHumidity);
var currentCityHumidity = document.createElement('div');
$(currentCityHumidity).attr('id', 'cityHumidity')
currentHumidity.appendChild(currentCityHumidity);

// current wind speed for listed city
var currentWindSpeed = document.createElement('li');
currentWindSpeed.classList.add("list-group-item");
currentWeatherEl.appendChild(currentWindSpeed);
var currentCityWindSpeed = document.createElement('div');
$(currentCityWindSpeed).attr('id', 'cityWindSpeed')
currentWindSpeed.appendChild(currentCityWindSpeed);

// current UV index for listed city
var currentUvIndex = document.createElement('li');
currentUvIndex.classList.add("list-group-item");
currentWeatherEl.appendChild(currentUvIndex);
var currentCityUvIndex = document.createElement('div');
$(currentCityUvIndex).attr('id', 'cityUvIndex')
currentUvIndex.appendChild(currentCityUvIndex);

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
fiveDayForcastDays.appendChild(fiveDayForcastDayThree);

// list created for day three
var dayThreeDate = document.createElement('li');
dayThreeDate.classList.add("list-group-item");
fiveDayForcastDayThree.appendChild(dayThreeDate);

// add date time plus 3 day to forcast
dayThreeDate.textContent = dateTime.plus({ days: 3}).toLocaleString();


// create day four of five day forcast
var fiveDayForcastDayFour = document.createElement('div');
fiveDayForcastDayFour.classList.add("col");
fiveDayForcastDays.appendChild(fiveDayForcastDayFour);

// list created for day four
var dayFourDate = document.createElement('li');
dayFourDate.classList.add("list-group-item");
fiveDayForcastDayFour.appendChild(dayFourDate);

// add date time plus 4 day to forcast
dayFourDate.textContent = dateTime.plus({ days: 4}).toLocaleString();


// create day five of five day forcast
var fiveDayForcastDayFive = document.createElement('div');
fiveDayForcastDayFive.classList.add("col");
fiveDayForcastDays.appendChild(fiveDayForcastDayFive);

// list created for day five
var dayFiveDate = document.createElement('li');
dayFiveDate.classList.add("list-group-item");
fiveDayForcastDayFive.appendChild(dayFiveDate);

// add date time plus 5 day to forcast
dayFiveDate.textContent = dateTime.plus({ days: 5}).toLocaleString();
};

setTimeDate();

// when search button is clicked function
$('#clickToSearch').on( 'click', function() {
    // value searched
    var searchTermValue = document.querySelector('#searchValue').value;
    
    
   // var currentCityName = document.createElement('h3');
    //$('#cityName').append(currentCityName);
    var cityNameEl = document.querySelector('#cityName')
    var cityTemp = document.querySelector('#cityTemp')
    var cityHumidity = document.querySelector('#cityHumidity')
    var cityWindSpeed = document.querySelector('#cityWindSpeed')
    var cityUvIndex = document.querySelector('#cityUvIndex')

    fetch(
        // fetches current day information
        'https://api.openweathermap.org/data/2.5/weather?q=' + searchTermValue + '&appid=0acf12d8bd778cde56ecc4787ac0581a&units=imperial'
        //'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=0acf12d8bd778cde56ecc4787ac0581a'
    )
    .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response);
        // creates city name and date in current weather display
        cityNameEl.textContent = searchTermValue + ' ' + '(' + dateTime.toLocaleString() + ')';
        //cityTemp.textContent = 'Temperature:';
        cityTemp.textContent = 'Temperature: ' + ('src', response.main.temp); + '&#8457';
        cityHumidity.textContent = '1';
        cityWindSpeed.textContent = '2';
        cityUvIndex.textContent = '3'
        console.log(cityTemp)
      })
      
})
// var currentWeatherCity = document.createElement('li');
// $(currentWeatherCity).attr('id', 'cityName')
// currentWeatherCity.classList.add("list-group-item");
// currentWeatherEl.appendChild(currentWeatherCity);
//var currentCityName = document.createElement('h3')
//currentCityName.val()