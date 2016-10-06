var temp;
var wind;
//var url = "http://api.openweathermap.org/data/2.5/weather?q=lisbon&appid=63c2929a676daa4a387e5e07f98fabe6&units=metric%22";

function updateByCity(city){
  var url="http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=63c2929a676daa4a387e5e07f98fabe6&units=metric%22";
  var city="lisbon";
sendRequest(url);
}

function sendRequest(url) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var data = JSON.parse(xmlhttp.responseText);
      var weather = {};
      weather.temp = data.main.temp;
      weather.wind = data.wind.speed;
      update(weather);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};

function update(weather) {
  wind.innerHTML = "Vento: " + weather.wind + " nós";
  temp.innerHTML = "Temperatura: "+ Math.floor(weather.temp-273.15)+" ºC";
}

window.onload = function () {
  temp = document.getElementById("temperatura");
  wind = document.getElementById("vento");   
  updateByCity("lisbon");
}

