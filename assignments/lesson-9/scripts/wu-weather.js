var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL, true);
request.responseType = 'json';

request.send();

request.onload = function () {
    var franklinWeather = request.response;
    console.log(franklinWeather);

    populateStats(franklinWeather);



    /*

    document.getElementById('place').innerHTML = franklinWeather.current_observation.display_location.full;

    document.getElementById('currenttemp').innerHTML = franklinWeather.current_observation.temp_f;

    var icon_path = franklinWeather.current_observation.icon_url;
    var urlString = document.location.href;
    console.log(urlString);
    var found = urlString.indexOf("https");
    console.log(found);

    if (found >= 0) {
        icon_path = icon_path.replace("http", "https")
    }

    document.getElementById('weather_icon').src = franklinWeather.current_observation.icon_url;

    */
}
