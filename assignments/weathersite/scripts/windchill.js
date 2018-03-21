//Parse numbers
var highTemp = parseFloat(document.getElementById('highTemp').value);
var lowTemp = parseFloat(document.getElementById('lowTemp').value);
var windSpeed = parseFloat(document.getElementById('windSpeed').value);

var temperature = (highTemp + lowTemp) / 2;



//Call logical function
var windChilled = windChill(temperature, windSpeed);
//Round Result

/*
LEFT OUT, OTHERWISE IT ROUNDS TO THE NEAREST INTEGER
var output = Math.round(windChilled) + " °F";
*/

// Round to two digits after the decimal.
var digits = 2;
var multiplier = Math.pow(10, digits);
windChilled = Math.round(windChilled * multiplier) / multiplier;

var output = "Wind Chill: " + windChilled + " °F";

//Display Result
document.getElementById('windchill').innerHTML = output;


//Logical Funtion
function windChill(temperature, windSpeed) {
    var wFactor = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    return wFactor;
}
