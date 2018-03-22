// Get current HTML page name (To be used for final project)
var path = window.location.pathname;
var page = path.split("/").pop();
//console.log(page);

//Initialize API request
var weatherConditions = new XMLHttpRequest();
// Determine city page
var conditionsAPIURL;
if(page == "franklin.html")
    {
        conditionsAPIURL = '//api.wunderground.com/api/77a2ddee5edb1323/conditions/q/MN/Franklin.json';
    }
else if (page == "greenville.html" )
    {
        conditionsAPIURL = '//api.wunderground.com/api/77a2ddee5edb1323/conditions/q/TX/Greenville.json';
    }
else if (page == "springfield.html")
    {
        conditionsAPIURL = '//api.wunderground.com/api/77a2ddee5edb1323/conditions/q/OR/Springfield.json';
    }

weatherConditions.open('GET', conditionsAPIURL, true);
weatherConditions.send();

// Get and display API data
weatherConditions.onload = function () {
    var conditionsInfo = JSON.parse(weatherConditions.responseText);
    //console.log(conditionsInfo);
    // Current weather condition e.g Overcast
    document.getElementById('weather_cond').innerHTML = conditionsInfo.current_observation.weather;
    // Current temperature in Fahrenheit
    document.getElementById('weather_current').innerHTML = conditionsInfo.current_observation.temp_f + "&deg;F" + " ";
    // Today's precipitation
    document.getElementById('weather_prec').innerHTML = conditionsInfo.current_observation.precip_today_in + "%";
    // Windchill
    document.getElementById('windchill').innerHTML = "Windchill: " + conditionsInfo.current_observation.windchill_f + "&deg;F";
    // Wind speed
    document.getElementById('windSpeed_display').innerHTML = conditionsInfo.current_observation.wind_mph + " MPH" + " " + conditionsInfo.current_observation.wind_dir;
    // Display weather icon with current condition
    var icon_path = conditionsInfo.current_observation.icon_url;
    var urlString = document.location.href;
    var found = urlString.indexOf("https");
    if (found >= 0) {
        icon_path = icon_path.replace("http", "https")
    }

    document.getElementById('weather_icon').src = icon_path;
}


var weatherForecast = new XMLHttpRequest();
// Determine city page
var forecastAPIURL;
if(page == "franklin.html")
{
    forecastAPIURL = '//api.wunderground.com/api/77a2ddee5edb1323/forecast/q/MN/Franklin.json';
}
else if (page == "greenville.html" )
{
    forecastAPIURL = '//api.wunderground.com/api/77a2ddee5edb1323/forecast/q/TX/Greenville.json';
}
else if (page == "springfield.html")
{
    forecastAPIURL = '//api.wunderground.com/api/77a2ddee5edb1323/forecast/q/OR/Springfield.json';
}

weatherForecast.open('GET', forecastAPIURL, true);
weatherForecast.send();

// Get and display API data
weatherForecast.onload = function () {
    var forecastInfo = JSON.parse(weatherForecast.responseText);
    //console.log(forecastInfo);
    // High temp
    document.getElementById('highTemp_display').innerHTML = forecastInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit + "&deg;F";
    // Low temp
    document.getElementById('lowTemp_display').innerHTML = forecastInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit + "&deg;F";
    // Forecast text description
    document.getElementById('weather_forecast').innerHTML = forecastInfo.forecast.txt_forecast.forecastday["0"].fcttext;
}


/************************************************************
*************************************************************
*** DISABLED DUE TO API USAGE RESTRICTIONS*******************
*************************************************************
*************************************************************


var weatherForecast10Day = new XMLHttpRequest();
// Determine city page
var forecast10DayAPIURL;
if(page == "franklin.html")
{
    forecast10DayAPIURL = '//api.wunderground.com/api/77a2ddee5edb1323/forecast10day/q/MN/Franklin.json';
}
else if (page == "greenville.html" )
{
    forecast10DayAPIURL = '//api.wunderground.com/api/77a2ddee5edb1323/forecast10day/q/TX/Greenville.json';
}
else if (page == "springfield.html")
{
    forecast10DayAPIURL = '//api.wunderground.com/api/77a2ddee5edb1323/forecast10day/q/OR/Springfield.json';
}

weatherForecast10Day.open('GET', forecast10DayAPIURL, true);
weatherForecast10Day.send();

// Get and display API data
weatherForecast10Day.onload = function () {
    var forecas10DaytInfo = JSON.parse(weatherForecast10Day.responseText);
    //console.log(forecas10DaytInfo);
    //Day 1
    document.getElementById('forecast_day1').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["0"].date.weekday_short;
    document.getElementById('fore_temp_day1').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit +  "&deg;F";
    //Day 2
    document.getElementById('forecast_day2').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["1"].date.weekday_short;
    document.getElementById('fore_temp_day2').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["1"].high.fahrenheit +  "&deg;F";
    //Day 3
    document.getElementById('forecast_day3').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["2"].date.weekday_short;
    document.getElementById('fore_temp_day3').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["2"].high.fahrenheit +  "&deg;F";
    //Day 4
    document.getElementById('forecast_day4').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["3"].date.weekday_short;
    document.getElementById('fore_temp_day4').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["3"].high.fahrenheit +  "&deg;F";
    //Day 5
    document.getElementById('forecast_day5').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["4"].date.weekday_short;
    document.getElementById('fore_temp_day5').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["4"].high.fahrenheit +  "&deg;F";
    //Day 6
    document.getElementById('forecast_day6').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["5"].date.weekday_short;
    document.getElementById('fore_temp_day6').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["5"].high.fahrenheit +  "&deg;F";
    //Day 7
    document.getElementById('forecast_day7').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["6"].date.weekday_short;
    document.getElementById('fore_temp_day7').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["6"].high.fahrenheit +  "&deg;F";
    //Day 8
    document.getElementById('forecast_day8').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["7"].date.weekday_short;
    document.getElementById('fore_temp_day8').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["7"].high.fahrenheit +  "&deg;F";
    //Day 9
    document.getElementById('forecast_day9').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["8"].date.weekday_short;
    document.getElementById('fore_temp_day9').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["8"].high.fahrenheit +  "&deg;F";
    //Day 10
    document.getElementById('forecast_day10').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["9"].date.weekday_short;
    document.getElementById('fore_temp_day10').innerHTML = forecas10DaytInfo.forecast.simpleforecast.forecastday["9"].high.fahrenheit +  "&deg;F";
}

*************************************************************/
