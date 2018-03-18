var d = new Date();

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var monthOfYear = new Array(12);
monthOfYear[0] = "January";
monthOfYear[1] = "February";
monthOfYear[2] = "March";
monthOfYear[3] = "April";
monthOfYear[4] = "May";
monthOfYear[5] = "June";
monthOfYear[6] = "July";
monthOfYear[7] = "August";
monthOfYear[8] = "September";
monthOfYear[9] = "October";
monthOfYear[10] = "November";
monthOfYear[11] = "December";

var n = ' ' + weekday[d.getDay()] + ', ' + d.getDate() + ' ' + monthOfYear[d.getMonth()] + ' ' + d.getFullYear();

/*eslint-env browser*/
document.getElementById('currentdate').innerHTML = n;
