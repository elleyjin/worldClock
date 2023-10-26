function getTime(event) {
  let localTime = moment();
  let country = localTime.tz("Asia/Singapore");
  let timeZone = country.format("h[:]mm");
  let seconds = country.format("[:]ss");
  let suffix = country.format("a");
  let date = country.format("ddd[, ]Do MMM YYYY");

  let timeElement = document.querySelector("#current-time");
  timeElement.innerHTML = timeZone;

  let secondsElement = document.querySelector("#seconds");
  secondsElement.innerHTML = seconds;

  let suffixElement = document.querySelector("#suffix");
  suffixElement.innerHTML = suffix;

  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = date;

  let cityElement = document.querySelector("#main-city");
  cityElement.innerHTML = moment.tz.guess(true);
}

let cityName = document.querySelector("#city");
cityName.addEventListener("change", getTime);

setInterval(getTime, 1000);
