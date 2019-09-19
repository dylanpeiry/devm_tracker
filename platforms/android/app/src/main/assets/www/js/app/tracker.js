var $$ = Dom7;
var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'Tracker',
  // App id
  id: 'net.peiryd.tracker',
});
var db = openDatabase('trackerdb', '1.0', 'Tracker_DB', 5 * 1024 * 1024);

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
var longitude, latitude, googlemap, dt;
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
  latitude = position.coords.latitude.toFixed(4);
  longitude = position.coords.longitude.toFixed(4);

  openstreemap = `https://staticmap.openstreetmap.de/staticmap.php?center=${latitude},${longitude}&zoom=14&size=865x512&maptype=mapnik`;
  googlemap = generateGmapLink(latitude, longitude);
  lblLatitude.innerText = latitude;
  lblLongitude.innerText = longitude;
  ts = Math.floor(dt.getTime() / 1000);
  insertData(latitude, longitude, ts);
  addToSelect(ts);
}

var onError = function (error) {
  alert(error);
}

function showMap(site) {
  window.open(googlemap);
}

function displayDate() {
  lblDate.innerText = formatDate(dt.getTime());
}

intervalTick();

function addToSelect(ts) {
  var select = document.getElementById('history_positions');
  var o = document.createElement('option');
  o.text = formatDate(ts * 1000);
  o.value = ts;
  select.prepend(o);
  select.selectedIndex = 0;
}
function formatDate(timestamp) {
  var d = new Date(timestamp);
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}

function generateGmapLink(latitude, longitude) {
  return `https://www.google.com/maps/@${latitude},${longitude},15z`;
}

$$('#history_positions').on('change', function (e) {
  var val = $$(e.target).val();
  getPosFromTimestamp(val);
})

