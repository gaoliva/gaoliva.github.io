// Get current HTML page name (To be used for final project)
var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);

/****************************************
 * Query data from the weather conditions
 * page
 ****************************************/
//Initialize API request
var weatherConditions = new XMLHttpRequest();
weatherConditions.open('GET', '//api.wunderground.com/api/77a2ddee5edb1323/conditions/q/MN/Franklin.json', true);
weatherConditions.send();

// Get and display API data
weatherConditions.onload = function () {
    var conditionsInfo = JSON.parse(weatherConditions.responseText);
    console.log(conditionsInfo);

    // Current weather condition e.g Overcast
    document.getElementById('weather_cond').innerHTML = conditionsInfo.current_observation.weather;
    // Current temperature in Fahrenheit
    document.getElementById('weather_current').innerHTML = conditionsInfo.current_observation.temp_f + "&deg;F" + " ";
    // Today's precipitation
    document.getElementById('weather_prec').innerHTML = conditionsInfo.current_observation.precip_today_in + "%";
    // Wind speed
    document.getElementById('windSpeed_display').innerHTML = conditionsInfo.current_observation.wind_mph + " MPH" + " " + conditionsInfo.current_observation.wind_dir;
    // Display weather icon with current condition
    document.getElementById('weather_icon').src = conditionsInfo.current_observation.icon_url;
}

/****************************************
 * Query data from the weather forecast
 * page
 ****************************************/
var weatherForecast = new XMLHttpRequest();
weatherForecast.open('GET', '//api.wunderground.com/api/77a2ddee5edb1323/forecast/q/MN/Franklin.json', true);
weatherForecast.send();

// Get and display API data
weatherForecast.onload = function () {
    var forecastInfo = JSON.parse(weatherForecast.responseText);
    console.log(forecastInfo);

    // High temp
    document.getElementById('highTemp_display').innerHTML = forecastInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit + "&deg;F";
    // Low temp
    document.getElementById('lowTemp_display').innerHTML = forecastInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit + "&deg;F";
    // Forecast text description
    document.getElementById('weather_forecast').innerHTML = forecastInfo.forecast.txt_forecast.forecastday["0"].fcttext;
}
