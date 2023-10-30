function getLocalTime(event) {
  let cityElement = document.querySelector("#main-city");
  let timeElement = document.querySelector("#current-time");
  let secondsElement = document.querySelector("#seconds");
  let suffixElement = document.querySelector("#suffix");
  let dateElement = document.querySelector("#date");
  let localTime = moment();
  let guessTimeZone = moment.tz.guess();
  let country = localTime.tz(guessTimeZone);
  let time = country.format("h[:]mm");
  let seconds = country.format("[:]ss");
  let suffix = country.format("a");
  let date = country.format("ddd[, ]Do MMM YYYY");

  cityElement.innerHTML = guessTimeZone.split("/")[1];
  timeElement.innerHTML = time;
  secondsElement.innerHTML = seconds;
  suffixElement.innerHTML = suffix;
  dateElement.innerHTML = date;
}

function updateCity(event) {
  let localTime = moment();
  let cityName = event.target.value.replace("_", " ").split("/")[1];
  let cityTimeZone = localTime.tz(event.target.value);
  let cityHtmlElement = document.querySelector("#cities");
  let hour = cityTimeZone.format("H");

  cityHtmlElement.innerHTML += ` 
  <div class="country-list">
    <div class="icon-container">
      <img class="icon" src="${switchIcon(hour)}" alt="">
    </div>
    <div class="world-clock">
      <div class="city">
        <h2>${cityName}</h2>
        <p class="date">${cityTimeZone.format("Do MMM YYYY")}</p>
      </div>
    </div>
    <h2 class="city-time">${cityTimeZone.format("hh[:]mm")}</h2>
        <p class="city-suffix">${cityTimeZone.format("a")}</p>
  </div>
  `;
}

function switchIcon(time) {
  if (time >= 19 || time <= 6) {
    return "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/756/original/5402400_dark_mode_moon_night_forecast_icon.png?1698116872";
  } else {
    return "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/755/original/9023993_sun_fill_icon.png?1698116867";
  }
}

let selectCityElement = document.querySelector("#city");
selectCityElement.addEventListener("change", updateCity);

setInterval(getLocalTime, 1000);
