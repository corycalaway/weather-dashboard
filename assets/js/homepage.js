var list = JSON.parse(localStorage.getItem("saveTextList")) || [];

var setTimeDate = function () {
  dateTime = luxon.DateTime.local();

  //currentWeatherFunction(dateTime);
};

// create current weather from search
// var currentWeatherFunction = function (dateTime) {
//   var currentWeather = document.querySelector("#currentWeather");

//   //add list item for current weather
//   var currentWeatherEl = document.createElement("ul");
//   currentWeatherEl.classList.add("list-group");
//   currentWeather.appendChild(currentWeatherEl);

//   // City name and date
//   var currentWeatherCity = document.createElement("li");
//   //$(currentWeatherCity).attr('id', 'cityName')
//   currentWeatherCity.classList.add("list-group-item");
//   currentWeatherEl.appendChild(currentWeatherCity);
//   var currentCityName = document.createElement("h3");
//   $(currentCityName).attr("id", "cityName");
//   currentWeatherCity.appendChild(currentCityName);
//   //var currentCityName = document.createElement('h3')
//   //currentCityName.val()

//   // current temperature for listed city
//   var currentTemp = document.createElement("li");
//   currentTemp.classList.add("list-group-item");
//   currentWeatherEl.appendChild(currentTemp);
//   var currentCityTemp = document.createElement("div");
//   $(currentCityTemp).attr("id", "cityTemp");
//   currentTemp.appendChild(currentCityTemp);

//   // current humidty for listed city
//   var currentHumidity = document.createElement("li");
//   currentHumidity.classList.add("list-group-item");
//   currentWeatherEl.appendChild(currentHumidity);
//   var currentCityHumidity = document.createElement("div");
//   $(currentCityHumidity).attr("id", "cityHumidity");
//   currentHumidity.appendChild(currentCityHumidity);

//   // current wind speed for listed city
//   var currentWindSpeed = document.createElement("li");
//   currentWindSpeed.classList.add("list-group-item");
//   currentWeatherEl.appendChild(currentWindSpeed);
//   var currentCityWindSpeed = document.createElement("div");
//   $(currentCityWindSpeed).attr("id", "cityWindSpeed");
//   currentWindSpeed.appendChild(currentCityWindSpeed);

//   // current UV index for listed city
//   var currentUvIndex = document.createElement("li");
//   currentUvIndex.classList.add("list-group-item");
//   currentWeatherEl.appendChild(currentUvIndex);
//   var currentCityUvIndex = document.createElement("div");
//   $(currentCityUvIndex).attr("id", "cityUvIndex");
//   currentUvIndex.appendChild(currentCityUvIndex);

//   // add five day forcast
//   var fiveDayForcast = document.createElement("div");
//   fiveDayForcast.classList.add("container");
//   currentWeather.appendChild(fiveDayForcast);

//   var fiveDayForcastHeaderEl = document.createElement("div");
//   fiveDayForcastHeaderEl.classList.add("row");
//   fiveDayForcast.appendChild(fiveDayForcastHeaderEl);

//   // five day forcast header text
//   var fiveDayForcastHeader = document.createElement("h3");
//   fiveDayForcastHeader.classList.add("col-8");
//   fiveDayForcastHeader.textContent = "5-Day Forecast:";
//   fiveDayForcast.appendChild(fiveDayForcastHeader);

//   // create row for five day forcast
//   var fiveDayForcastDays = document.createElement("div");
//   fiveDayForcastDays.classList.add("row");
//   fiveDayForcastDays.classList.add("justify-content-between");
//   fiveDayForcast.appendChild(fiveDayForcastDays);

//   // create day one of five day forcast
//   var fiveDayForcastDayOne = document.createElement("ul");
//   fiveDayForcastDayOne.classList.add("col");
//   fiveDayForcastDays.appendChild(fiveDayForcastDayOne);

//   // list created for day one
//   var dayOneDate = document.createElement("li");
//   dayOneDate.classList.add("list-group-item");
//   fiveDayForcastDayOne.appendChild(dayOneDate);

//   var dayOneEl = document.createElement("div");
//   $(dayOneEl).attr("id", "dayOne");
//   fiveDayForcastDayOne.appendChild(dayOneEl);

//   // add date time plus 1 day to forcast
//   dayOneDate.textContent = dateTime.plus({ days: 1 }).toLocaleString();

//   // create day two of five day forcast
//   var fiveDayForcastDayTwo = document.createElement("div");
//   fiveDayForcastDayTwo.classList.add("col");
//   fiveDayForcastDays.appendChild(fiveDayForcastDayTwo);

//   // list created for day two
//   var dayTwoDate = document.createElement("li");
//   dayTwoDate.classList.add("list-group-item");
//   fiveDayForcastDayTwo.appendChild(dayTwoDate);

//   // add date time plus 2 day to forcast
//   dayTwoDate.textContent = dateTime.plus({ days: 2 }).toLocaleString();

//   // create day three of five day forcast
//   var fiveDayForcastDayThree = document.createElement("div");
//   fiveDayForcastDayThree.classList.add("col");
//   fiveDayForcastDays.appendChild(fiveDayForcastDayThree);

//   // list created for day three
//   var dayThreeDate = document.createElement("li");
//   dayThreeDate.classList.add("list-group-item");
//   fiveDayForcastDayThree.appendChild(dayThreeDate);

//   // add date time plus 3 day to forcast
//   dayThreeDate.textContent = dateTime.plus({ days: 3 }).toLocaleString();

//   // create day four of five day forcast
//   var fiveDayForcastDayFour = document.createElement("div");
//   fiveDayForcastDayFour.classList.add("col");
//   fiveDayForcastDays.appendChild(fiveDayForcastDayFour);

//   // list created for day four
//   var dayFourDate = document.createElement("li");
//   dayFourDate.classList.add("list-group-item");
//   fiveDayForcastDayFour.appendChild(dayFourDate);

//   // add date time plus 4 day to forcast
//   dayFourDate.textContent = dateTime.plus({ days: 4 }).toLocaleString();

//   // create day five of five day forcast
//   var fiveDayForcastDayFive = document.createElement("div");
//   fiveDayForcastDayFive.classList.add("col");
//   fiveDayForcastDays.appendChild(fiveDayForcastDayFive);

//   // list created for day five
//   var dayFiveDate = document.createElement("li");
//   dayFiveDate.classList.add("list-group-item");
//   fiveDayForcastDayFive.appendChild(dayFiveDate);

//   // add date time plus 5 day to forcast
//   dayFiveDate.textContent = dateTime.plus({ days: 5 }).toLocaleString();
// };

setTimeDate();

// when search button is clicked function
$("#clickToSearch").on("click", function () {
  // value searched
  var searchTermValue = document.querySelector("#searchValue").value;

  // var currentCityName = document.createElement('h3');
  //$('#cityName').append(currentCityName);
  var cityNameEl = document.querySelector("#cityName");
  var cityTemp = document.querySelector("#cityTemp");
  var cityHumidity = document.querySelector("#cityHumidity");
  var cityWindSpeed = document.querySelector("#cityWindSpeed");
  var cityUvIndex = document.querySelector("#cityUvIndex");
  var dayOne = document.querySelector("#dayOne");
  var dayTwo = document.querySelector("#dayTwo");
  var dayThree = document.querySelector("#dayThree");
  var dayFour = document.querySelector("#dayFour");
  var dayFive = document.querySelector("#dayFive");
  var dateDayOneFiveDay = document.querySelector("#dateDayOneFiveDay");
  var dateDayTwoFiveDay = document.querySelector("#dateDayTwoFiveDay");
  var dateDayThreeFiveDay = document.querySelector("#dateDayThreeFiveDay");
  var dateDayFourFiveDay = document.querySelector("#dateDayFourFiveDay");
  var dateDayFiveFiveDay = document.querySelector("#dateDayFiveFiveDay");

  dateDayOneFiveDay.textContent = dateTime.plus({ days: 1 }).toLocaleString();
  dateDayTwoFiveDay.textContent = dateTime.plus({ days: 2 }).toLocaleString();
  dateDayThreeFiveDay.textContent = dateTime.plus({ days: 3 }).toLocaleString();
  dateDayFourFiveDay.textContent = dateTime.plus({ days: 4 }).toLocaleString();
  dateDayFiveFiveDay.textContent = dateTime.plus({ days: 5 }).toLocaleString();
  fetch(
    // fetches current day information
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      searchTermValue +
      "&appid=0acf12d8bd778cde56ecc4787ac0581a&units=imperial"
    //'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=0acf12d8bd778cde56ecc4787ac0581a'
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      // creates city name and date in current weather display
      cityNameEl.textContent =
        searchTermValue + " (" + dateTime.toLocaleString() + ")";
      //cityTemp.textContent = 'Temperature:';
      cityTemp.innerHTML =
        "Temperature: " + ("src", response.main.temp) + ' &#8457;';
      cityHumidity.textContent =
        "Humidity: " + ("src", response.main.humidity) + " %";
      cityWindSpeed.textContent =
        "Wind Speed: " + ("src", response.wind.speed) + " MPH";
      var cityLat = ("src", response.coord.lat);
      var cityLon = ("src", response.coord.lon);
      console.log(cityLat);
      console.log(cityLon);

      // api for uv index
      fetch(
        "https://api.openweathermap.org/data/2.5/uvi?lat=" +
          cityLat +
          "&lon=" +
          cityLon +
          "&appid=0acf12d8bd778cde56ecc4787ac0581a"
      )
        .then(function (data) {
          return data.json();
        })
        .then(function (data) {
          console.log(data);

          //0 to 3 green for favorable greater than 3 less 7 moderate greater than 7 severe
          var uvIndexTitle = document.querySelector('#uvIndexTitle');
          uvIndexTitle.textContent = "UV Index: "
          cityUvIndex.textContent = " " + ("src", data.value);
          console.log(cityUvIndex)
          if (("src", data.value) <= 3) {
            cityUvIndex.classList.remove('bg-danger')
            cityUvIndex.classList.remove('bg-warning')
            cityUvIndex.classList.add('bg-success')
        } else if (("src", data.value) > 3 && ("src", data.value) < 7) {
            cityUvIndex.classList.remove('bg-danger')
            cityUvIndex.classList.remove('bg-success')
            cityUvIndex.classList.add('bg-warning')
        } else {
            cityUvIndex.classList.remove('bg-warning')
            cityUvIndex.classList.remove('bg-success')
            cityUvIndex.classList.add('bg-danger')
        }

          fetch(
            // 'https://api.openweathermap.org/data/2.5/forecast?q='+ searchTermValue +'&appid=0acf12d8bd778cde56ecc4787ac0581a&units=imperial'

            "https://api.openweathermap.org/data/2.5/onecall?lat=" +
              cityLat +
              "&lon=" +
              cityLon +
              "&exclude=hourly&appid=0acf12d8bd778cde56ecc4787ac0581a&units=imperial"
          )
            .then(function (dataDayOne) {
              return dataDayOne.json();
            })
            .then(function (dataDayOne) {
              console.log(dataDayOne);
              // used time stamp converter to confirm date
              console.log(dataDayOne.daily[1].weather[0].id);
              console.log("Temp: " + dataDayOne.daily[1].temp.day);
              console.log("Humidity: " + dataDayOne.daily[1].humidity + "%");

                var dayOneVar = ("src", dataDayOne.daily[1].weather[0].icon)
              dayOne.innerHTML =
                "<img src='https://openweathermap.org/img/wn/" + dayOneVar + "@2x.png' />";

                var dayTwoVar = ("src", dataDayOne.daily[2].weather[0].icon)
              dayTwo.innerHTML =
                "<img src='https://openweathermap.org/img/wn/" + dayTwoVar + "@2x.png' />";

                var dayThreeVar = ("src", dataDayOne.daily[3].weather[0].icon)
              dayThree.innerHTML =
                "<img src='https://openweathermap.org/img/wn/" + dayThreeVar + "@2x.png' />";

                var dayFourVar = ("src", dataDayOne.daily[4].weather[0].icon)
              dayFour.innerHTML =
                "<img src='https://openweathermap.org/img/wn/" + dayFourVar + "@2x.png' />";

                var dayFiveVar = ("src", dataDayOne.daily[5].weather[0].icon)
              dayFive.innerHTML =
                "<img src='https://openweathermap.org/img/wn/" + dayFiveVar + "@2x.png' />";

            //   if (dataDayOne.daily[1].weather[0].id < 300) {
            //     dayOne.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/11d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[1].weather[0].id > 299 &&
            //     dataDayOne.daily[1].weather[0].id < 500
            //   ) {
            //     dayOne.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/09d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[1].weather[0].id > 499 &&
            //     dataDayOne.daily[1].weather[0].id < 600
            //   ) {
            //     dayOne.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/10d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[1].weather[0].id > 599 &&
            //     dataDayOne.daily[1].weather[0].id < 701
            //   ) {
            //     dayOne.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/13d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[1].weather[0].id > 700 &&
            //     dataDayOne.daily[1].weather[0].id < 800
            //   ) {
            //     dayOne.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/50d@2x.png' />";
            //   } else if (dataDayOne.daily[1].weather[0].id === 800) {
            //     dayOne.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/01d@2x.png' />";
            //   } else if (dataDayOne.daily[1].weather[0].id === 801) {
            //     dayOne.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/02d@2x.png' />";
            //   } else if (dataDayOne.daily[1].weather[0].id === 802) {
            //     dayOne.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/03d@2x.png' />";
            //   } else {
            //     dayOne.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/04d@2x.png' />";
            //   }

            //   if (dataDayOne.daily[2].weather[0].id < 300) {
            //     dayTwo.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/11d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[2].weather[0].id > 299 &&
            //     dataDayOne.daily[2].weather[0].id < 500
            //   ) {
            //     dayTwo.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/09d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[2].weather[0].id > 499 &&
            //     dataDayOne.daily[2].weather[0].id < 600
            //   ) {
            //     dayTwo.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/10d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[2].weather[0].id > 599 &&
            //     dataDayOne.daily[2].weather[0].id < 701
            //   ) {
            //     dayTwo.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/13d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[2].weather[0].id > 700 &&
            //     dataDayOne.daily[2].weather[0].id < 800
            //   ) {
            //     dayTwo.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/50d@2x.png' />";
            //   } else if (dataDayOne.daily[2].weather[0].id === 800) {
            //     dayTwo.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/01d@2x.png' />";
            //   } else if (dataDayOne.daily[2].weather[0].id === 801) {
            //     dayTwo.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/02d@2x.png' />";
            //   } else if (dataDayOne.daily[2].weather[0].id === 802) {
            //     dayTwo.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/03d@2x.png' />";
            //   } else {
            //     dayTwo.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/04d@2x.png' />";
            //   }

            //   if (dataDayOne.daily[3].weather[0].id < 300) {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/11d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[3].weather[0].id > 299 &&
            //     dataDayOne.daily[3].weather[0].id < 500
            //   ) {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/09d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[3].weather[0].id > 499 &&
            //     dataDayOne.daily[3].weather[0].id < 600
            //   ) {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/10d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[3].weather[0].id > 599 &&
            //     dataDayOne.daily[3].weather[0].id < 701
            //   ) {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/13d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[3].weather[0].id > 700 &&
            //     dataDayOne.daily[3].weather[0].id < 800
            //   ) {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/50d@2x.png' />";
            //   } else if (dataDayOne.daily[3].weather[0].id === 800) {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/01d@2x.png' />";
            //   } else if (dataDayOne.daily[3].weather[0].id === 801) {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/02d@2x.png' />";
            //   } else if (dataDayOne.daily[3].weather[0].id === 802) {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/03d@2x.png' />";
            //   } else {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/04d@2x.png' />";
            //   }

            //   if (dataDayOne.daily[3].weather[0].id < 300) {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/11d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[3].weather[0].id > 299 &&
            //     dataDayOne.daily[3].weather[0].id < 500
            //   ) {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/09d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[3].weather[0].id > 499 &&
            //     dataDayOne.daily[3].weather[0].id < 600
            //   ) {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/10d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[3].weather[0].id > 599 &&
            //     dataDayOne.daily[3].weather[0].id < 701
            //   ) {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/13d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[3].weather[0].id > 700 &&
            //     dataDayOne.daily[3].weather[0].id < 800
            //   ) {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/50d@2x.png' />";
            //   } else if (dataDayOne.daily[3].weather[0].id === 800) {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/01d@2x.png' />";
            //   } else if (dataDayOne.daily[3].weather[0].id === 801) {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/02d@2x.png' />";
            //   } else if (dataDayOne.daily[3].weather[0].id === 802) {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/03d@2x.png' />";
            //   } else {
            //     dayThree.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/04d@2x.png' />";
            //   }

            //   if (dataDayOne.daily[4].weather[0].id < 300) {
            //     dayFour.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/11d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[4].weather[0].id > 299 &&
            //     dataDayOne.daily[4].weather[0].id < 500
            //   ) {
            //     dayFour.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/09d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[4].weather[0].id > 499 &&
            //     dataDayOne.daily[4].weather[0].id < 600
            //   ) {
            //     dayFour.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/10d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[4].weather[0].id > 599 &&
            //     dataDayOne.daily[4].weather[0].id < 701
            //   ) {
            //     dayFour.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/13d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[4].weather[0].id > 700 &&
            //     dataDayOne.daily[4].weather[0].id < 800
            //   ) {
            //     dayFour.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/50d@2x.png' />";
            //   } else if (dataDayOne.daily[4].weather[0].id === 800) {
            //     dayFour.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/01d@2x.png' />";
            //   } else if (dataDayOne.daily[4].weather[0].id === 801) {
            //     dayFour.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/02d@2x.png' />";
            //   } else if (dataDayOne.daily[4].weather[0].id === 802) {
            //     dayFour.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/03d@2x.png' />";
            //   } else {
            //     dayFour.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/04d@2x.png' />";
            //   }

            //   if (dataDayOne.daily[5].weather[0].id < 300) {
            //     dayFive.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/11d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[5].weather[0].id > 299 &&
            //     dataDayOne.daily[5].weather[0].id < 500
            //   ) {
            //     dayFive.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/09d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[5].weather[0].id > 499 &&
            //     dataDayOne.daily[5].weather[0].id < 600
            //   ) {
            //     dayFive.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/10d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[5].weather[0].id > 599 &&
            //     dataDayOne.daily[5].weather[0].id < 701
            //   ) {
            //     dayFive.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/13d@2x.png' />";
            //   } else if (
            //     dataDayOne.daily[5].weather[0].id > 700 &&
            //     dataDayOne.daily[5].weather[0].id < 800
            //   ) {
            //     dayFive.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/50d@2x.png' />";
            //   } else if (dataDayOne.daily[5].weather[0].id === 800) {
            //     dayFive.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/01d@2x.png' />";
            //   } else if (dataDayOne.daily[5].weather[0].id === 801) {
            //     dayFive.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/02d@2x.png' />";
            //   } else if (dataDayOne.daily[5].weather[0].id === 802) {
            //     dayFive.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/03d@2x.png' />";
            //   } else {
            //     dayFive.innerHTML =
            //       "<img src='https://openweathermap.org/img/wn/04d@2x.png' />";
            //   }
              // dayOne.innerHTML = "<img src='https://openweathermap.org/img/wn/10d@2x.png' />"

              // five day forcast day one temp and humidity
              var dayOneTemperature = document.querySelector('#dayOneTemperature')
              dayOneTemperature.innerHTML = ("Temp: " + dataDayOne.daily[1].temp.day + ' &#8457;');
              var dayOneHumidity = document.querySelector('#dayOneHumidity');
              dayOneHumidity.textContent = ("Humidity: " + dataDayOne.daily[1].humidity + ' %');

              var dayTwoTemperature = document.querySelector('#dayTwoTemperature')
              dayTwoTemperature.innerHTML = ("Temp: " + dataDayOne.daily[2].temp.day + ' &#8457;');
              var dayTwoHumidity = document.querySelector('#dayTwoHumidity');
              dayTwoHumidity.textContent = ("Humidity: " + dataDayOne.daily[2].humidity + ' %');

              var dayThreeTemperature = document.querySelector('#dayThreeTemperature')
              dayThreeTemperature.innerHTML = ("Temp: " + dataDayOne.daily[3].temp.day + ' &#8457;');
              var dayThreeHumidity = document.querySelector('#dayThreeHumidity');
              dayThreeHumidity.textContent = ("Humidity: " + dataDayOne.daily[3].humidity + ' %');

              var dayFourTemperature = document.querySelector('#dayFourTemperature')
              dayFourTemperature.innerHTML = ("Temp: " + dataDayOne.daily[4].temp.day + ' &#8457;');
              var dayFourHumidity = document.querySelector('#dayFourHumidity');
              dayFourHumidity.textContent = ("Humidity: " + dataDayOne.daily[4].humidity + ' %');

              var dayFiveTemperature = document.querySelector('#dayFiveTemperature')
              dayFiveTemperature.innerHTML = ("Temp: " + dataDayOne.daily[5].temp.day + ' &#8457;');
              var dayFiveHumidity = document.querySelector('#dayFiveHumidity');
              dayFiveHumidity.textContent = ("Humidity: " + dataDayOne.daily[5].humidity + ' %');

              console.log(dataDayOne.daily[2].weather[0].id);
              console.log("Temp: " + dataDayOne.daily[2].temp.day);
              console.log("Humidity: " + dataDayOne.daily[2].humidity + "%");

              console.log(dataDayOne.daily[3].weather[0].id);
              console.log("Temp: " + dataDayOne.daily[3].temp.day);
              console.log("Humidity: " + dataDayOne.daily[3].humidity + "%");

              console.log(dataDayOne.daily[4].weather[0].id);
              console.log("Temp: " + dataDayOne.daily[4].temp.day);
              console.log("Humidity: " + dataDayOne.daily[4].humidity + "%");

              console.log(dataDayOne.daily[5].weather[0].id);
              console.log("Temp: " + dataDayOne.daily[5].temp.day);
              console.log("Humidity: " + dataDayOne.daily[5].humidity + "%");
              // console.log(dataDayOne.list[1].weather[0].id)

              // console.log(dataDayOne.list[1].main.temp)
              // console.log(dataDayOne.list[1].main.humidity)

              // console.log(dataDayOne.list[9].weather[0].main)
              // console.log(dataDayOne.list[9].main.temp)
              // console.log(dataDayOne.list[9].main.humidity)

              // console.log(dataDayOne.list[17].weather[0].main)
              // console.log(dataDayOne.list[17].main.temp)
              // console.log(dataDayOne.list[17].main.humidity)

              // console.log(dataDayOne.list[25].weather[0].main)
              // console.log(dataDayOne.list[25].main.temp)
              // console.log(dataDayOne.list[25].main.humidity)

              // console.log(dataDayOne.list[39].weather[0].main)
              // console.log(dataDayOne.list[39].main.temp)
              // console.log(dataDayOne.list[39].main.humidity)
              return saveCitySearch(searchTermValue)
            });
        });
    });
});
// var currentWeatherCity = document.createElement('li');
// $(currentWeatherCity).attr('id', 'cityName')
// currentWeatherCity.classList.add("list-group-item");
// currentWeatherEl.appendChild(currentWeatherCity);
//var currentCityName = document.createElement('h3')
//currentCityName.val()

//https://openweathermap.org/weather-conditions
// ask about deg f
// fix five day forcast box
// create saved history list
// add icon for current day
// color uv index
// conditions Snow Clouds Clear Rain

// save data to local storage
var saveCitySearch = function(searchTermValue) {
 console.log(searchTermValue);
 var savedCityInfo = searchTermValue
 
 console.log(savedCityInfo)
 list.push(savedCityInfo)
 localStorage.setItem("saveTextList", JSON.stringify(list))
    searchHistoryList()
}

var searchHistoryList = function() {
    console.log('starthere')
}

// on click save value of input and create an unordered list
// save value to array
// push array to local storage
// retireve array from local storage
// insert array data into unordered list
// on click in unordered list insert value into funciton for data