var $$ = Dom7;
var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'Tracker',
  // App id
  id: 'net.peiryd.tracker',
});

var range = app.range.create({
  el: '.range-slider',
  min: 1,
  max: 300,
  step: 1,
  on: {
    change: intervalChanged
  }
});

var intervalInSeconds = 60;
var lblInterval = document.getElementById('interval');
var lblLongitude = document.getElementById('longitude');
var lblLatitude = document.getElementById('latitude');
var lblDate = document.getElementById('date-last-position');
var msMultiplier = 1000;

var interval = setInterval(intervalTick, intervalInSeconds * msMultiplier);
var longitude, latitude,googlemap, dt;
function intervalChanged() {
  intervalInSeconds = range.value;
  lblInterval.innerText = intervalInSeconds;

  clearInterval(interval);
  startInterval(intervalInSeconds * msMultiplier);

}

function intervalTick() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
  dt = new Date();
  displayDate();
}

function startInterval(_interval) {
  interval = setInterval(intervalTick, _interval);
}
var onSuccess = function (position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  openstreemap = `https://staticmap.openstreetmap.de/staticmap.php?center=${latitude},${longitude}&zoom=14&size=865x512&maptype=mapnik`;
  googlemap = `https://www.google.com/maps/@${latitude},${longitude}`
  lblLatitude.innerText = latitude.toFixed(2);
  lblLongitude.innerText = longitude.toFixed(2);
}

var onError = function (error) {
  alert(error);
}

function showMap(site) {
    window.open(googlemap);
}

function displayDate(){
  lblDate.innerText = `${dt.getDate()}.${dt.getMonth()+1}.${dt.getFullYear()} à ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`
}

intervalTick();

