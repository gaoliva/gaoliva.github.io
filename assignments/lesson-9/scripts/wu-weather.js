var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', '//api.wunderground.com/api/77a2ddee5edb1323/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('weatherCon').innerHTML = weatherInfo.current_observation.weather;

    //document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;

    document.getElementById('weather_current').innerHTML = weatherInfo.current_observation.temp_f + "&deg;F" + " ";
    document.getElementById('weather_prec').innerHTML = weatherInfo.current_observation.precip_today_in;

    var icon_path = weatherInfo.current_observation.icon_url;
    var urlString = document.location.href;
    console.log(urlString);
    var found = urlString.indexOf("https");
    console.log(found);

    if (found >= 0) {
        icon_path = icon_path.replace("http", "https")
    }

    document.getElementById('weather_icon').src = weatherInfo.current_observation.icon_url;

}

