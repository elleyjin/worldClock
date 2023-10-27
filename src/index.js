function getLocalTime(event) {
  let localTime = moment();
  let country = localTime.tz("Asia/Singapore");
  let timeZone = country.format("h[:]mm");
  let seconds = country.format("[:]ss");
  let suffix = country.format("a");
  let date = country.format("ddd[, ]Do MMM YYYY");
  let cityElement = document.querySelector("#main-city");
  cityElement.innerHTML = moment.tz.guess();

  let timeElement = document.querySelector("#current-time");
  timeElement.innerHTML = timeZone;

  let secondsElement = document.querySelector("#seconds");
  secondsElement.innerHTML = seconds;

  let suffixElement = document.querySelector("#suffix");
  suffixElement.innerHTML = suffix;

  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = date;
}

function getCountryTime() {
  // paris time
  let localTime = moment();
  let parisElement = document.querySelector("#paris");
  let cityDateElement = parisElement.querySelector(".date");
  let parisTimeElement = document.querySelector("#paris-time");
  let parisSuffixElement = document.querySelector("#paris-suffix");
  let parisTimeZone = localTime.tz("Europe/Paris");

  cityDateElement.innerHTML = parisTimeZone.format("Do MMM YYYY");
  parisTimeElement.innerHTML = parisTimeZone.format("hh[:]mm");
  parisSuffixElement.innerHTML = parisTimeZone.format("a");

  // seoul time
  let seoulElement = document.querySelector("#seoul");
  let seoulTimeZone = localTime.tz("Asia/Seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = document.querySelector("#seoul-time");
  let seoulSuffixElement = document.querySelector("#seoul-suffix");

  seoulDateElement.innerHTML = seoulTimeZone.format("Do MMM YYYY");
  seoulTimeElement.innerHTML = seoulTimeZone.format("hh[:]mm");
  seoulSuffixElement.innerHTML = seoulTimeZone.format("a");
}

let localTime = moment();

let cityName = document.querySelector("#city");
cityName.addEventListener("change", getLocalTime);

getCountryTime();
setInterval(getLocalTime, 1000);
