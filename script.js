var temp;
var wind;
var appid = "63c2929a676daa4a387e5e07f98fabe6";
var url;

function updateByCity(city) {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&" + "APPID=" + appid + "&units=metric%22";
  var city;
  console.log(url);
  sendRequest(url);
}


function sendRequest() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp == 200) {
      var data = JSON.parse(xmlhttp.responseText);
      var weather = {};
      weather.temp = data.main.temp;
      weather.wind = data.wind.speed;
      update(weather);
    }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};

function update(weather) {
  temp.innerhtml = weather.temp;
  wind.innerhtml = weather.wind;
}

window.onload = function () {
  temp = document.getElementById("temperatura");
  wind = document.getElementById("vento");
  updateByCity("lisbon");
}


