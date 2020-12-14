var list = JSON.parse(localStorage.getItem("saveTextList")) || [];
//var reversed = list.reverse();
var setTimeDate = function () {
  dateTime = luxon.DateTime.local();

  //currentWeatherFunction(dateTime);
};
//var searchTermValue = document.querySelector("#searchValue").value;

var searchFunction = function (searchTermValue) {
  // value searched
  if (list.length > 5) {
      list.pop();
  }

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
        "Temperature: " + ("src", response.main.temp) + " &#8457;";
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
          var uvIndexTitle = document.querySelector("#uvIndexTitle");
          uvIndexTitle.textContent = "UV Index: ";
          cityUvIndex.textContent = " " + ("src", data.value);
          console.log(cityUvIndex);
          if (("src", data.value) <= 3) {
            cityUvIndex.classList.remove("bg-danger");
            cityUvIndex.classList.remove("bg-warning");
            cityUvIndex.classList.add("bg-success");
          } else if (("src", data.value) > 3 && ("src", data.value) < 7) {
            cityUvIndex.classList.remove("bg-danger");
            cityUvIndex.classList.remove("bg-success");
            cityUvIndex.classList.add("bg-warning");
          } else {
            cityUvIndex.classList.remove("bg-warning");
            cityUvIndex.classList.remove("bg-success");
            cityUvIndex.classList.add("bg-danger");
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

              var dayOneVar = ("src", dataDayOne.daily[1].weather[0].icon);
              dayOne.innerHTML =
                "<img src='https://openweathermap.org/img/wn/" +
                dayOneVar +
                "@2x.png' />";

              var dayTwoVar = ("src", dataDayOne.daily[2].weather[0].icon);
              dayTwo.innerHTML =
                "<img src='https://openweathermap.org/img/wn/" +
                dayTwoVar +
                "@2x.png' />";

              var dayThreeVar = ("src", dataDayOne.daily[3].weather[0].icon);
              dayThree.innerHTML =
                "<img src='https://openweathermap.org/img/wn/" +
                dayThreeVar +
                "@2x.png' />";

              var dayFourVar = ("src", dataDayOne.daily[4].weather[0].icon);
              dayFour.innerHTML =
                "<img src='https://openweathermap.org/img/wn/" +
                dayFourVar +
                "@2x.png' />";

              var dayFiveVar = ("src", dataDayOne.daily[5].weather[0].icon);
              dayFive.innerHTML =
                "<img src='https://openweathermap.org/img/wn/" +
                dayFiveVar +
                "@2x.png' />";

              // five day forcast day one temp and humidity
              var dayOneTemperature = document.querySelector(
                "#dayOneTemperature"
              );
              dayOneTemperature.innerHTML =
                "Temp: " + dataDayOne.daily[1].temp.day + " &#8457;";
              var dayOneHumidity = document.querySelector("#dayOneHumidity");
              dayOneHumidity.textContent =
                "Humidity: " + dataDayOne.daily[1].humidity + " %";

              var dayTwoTemperature = document.querySelector(
                "#dayTwoTemperature"
              );
              dayTwoTemperature.innerHTML =
                "Temp: " + dataDayOne.daily[2].temp.day + " &#8457;";
              var dayTwoHumidity = document.querySelector("#dayTwoHumidity");
              dayTwoHumidity.textContent =
                "Humidity: " + dataDayOne.daily[2].humidity + " %";

              var dayThreeTemperature = document.querySelector(
                "#dayThreeTemperature"
              );
              dayThreeTemperature.innerHTML =
                "Temp: " + dataDayOne.daily[3].temp.day + " &#8457;";
              var dayThreeHumidity = document.querySelector(
                "#dayThreeHumidity"
              );
              dayThreeHumidity.textContent =
                "Humidity: " + dataDayOne.daily[3].humidity + " %";

              var dayFourTemperature = document.querySelector(
                "#dayFourTemperature"
              );
              dayFourTemperature.innerHTML =
                "Temp: " + dataDayOne.daily[4].temp.day + " &#8457;";
              var dayFourHumidity = document.querySelector("#dayFourHumidity");
              dayFourHumidity.textContent =
                "Humidity: " + dataDayOne.daily[4].humidity + " %";

              var dayFiveTemperature = document.querySelector(
                "#dayFiveTemperature"
              );
              dayFiveTemperature.innerHTML =
                "Temp: " + dataDayOne.daily[5].temp.day + " &#8457;";
              var dayFiveHumidity = document.querySelector("#dayFiveHumidity");
              dayFiveHumidity.textContent =
                "Humidity: " + dataDayOne.daily[5].humidity + " %";

              return saveCitySearch(searchTermValue);
            });
        });
    });
};
// var currentWeatherCity = document.createElement('li');
// $(currentWeatherCity).attr('id', 'cityName')
// currentWeatherCity.classList.add("list-group-item");
// currentWeatherEl.appendChild(currentWeatherCity);
//var currentCityName = document.createElement('h3')
//currentCityName.val()

// add icon for current day

// save data to local storage
var saveCitySearch = function (searchTermValue) {
  console.log(searchTermValue);
  var savedCityInfo = searchTermValue;

  console.log(savedCityInfo);
  list.unshift(savedCityInfo);
  localStorage.setItem("saveTextList", JSON.stringify(list));
  searchHistoryList(searchTermValue);
};

var searchHistoryList = function (searchTermValue) {
  console.log(list);

  // var addedForRemoval = document.querySelector("#addedForRemoval")
  // addedForRemoval.remove();
 // var reversed = list.reverse();
  // list = reversed
  var searchHistoryEl = document.querySelector("#searchHistoryEl");
  $(".removeSpaceEl").remove();
  var taskRowHistory = $("<ul>")
    .addClass("row removeSpaceEl")
    .attr("id", "addedForRemoval");
  $(searchHistoryEl).append(taskRowHistory);

  // removes previous saved results
  $(".removeEl").remove();
  $.each(list, function (index, value) {
    var taskHistoryLi = $("<li>")
      .addClass("col list-group-item removeEl")
      .attr("id", "clickElement" + index);
    $(searchHistoryEl).append(taskHistoryLi);
    taskHistoryLi.text(list[index]);

    // makes search buttons clickable
    $("#clickElement" + index).on("click", function () {
         
      searchTermValue = document.querySelector("#clickElement" + index).textContent;
     // $("#clickElement" + index).remove(); 
    console.log(index + 'here')
     list.splice(index, 1)
     //list.pop("#clickElement" + index);
     
     console.log(list)
      searchFunction(searchTermValue);
      console.log(searchTermValue)
      console.log('#clickElement' + index)
    });
  });
};

// when search button is clicked function
$("#clickToSearch").on("click", function (searchTermValue) {

 searchTermValue = document.querySelector("#searchValue").value;
 
  searchFunction(searchTermValue);
});

setTimeDate();
searchHistoryList();
// on click save value of input and create an unordered list
// save value to array
// push array to local storage
// retireve array from local storage
// insert array data into unordered list
// on click in unordered list insert value into funciton for data
