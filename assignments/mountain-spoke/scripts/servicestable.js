var section = document.querySelector('tbody');
var requestURL = "/assignments/mountain-spoke/data/serviceData.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var cityData = request.response;
    showData(cityData);
}

function showData(jsonObj) {
    var towns = jsonObj['prices'];

    for (var i = 0; i < towns.length; i++) {
        if (i === 2) {
            continue;
        }
        var mytr = document.createElement('tr');
        //var myH2 = document.createElement('h2');
        var myTh1 = document.createElement('td');
        var myTh2 = document.createElement('td');
        var myTh3 = document.createElement('td');
        //var myPara4 = document.createElement('p');

        //var myImage = document.createElement('IMG');
        /*if (towns[i].name === "Franklin") {
            myImage.setAttribute("src", "/assignments/lesson-9/images/franklin-cropped_L9.jpeg");
            myImage.setAttribute("alt", towns[i].name);
        } else if (towns[i].name === "Greenville") {
            myImage.setAttribute("src", "/assignments/lesson-9/images/greenville_original_L9_v2.jpeg");
            myImage.setAttribute("alt", towns[i].name);
        } else if (towns[i].name === "Springfield") {
            myImage.setAttribute("src", "/assignments/lesson-9/images/springfield_original_L9_v2.jpeg");
            myImage.setAttribute("alt", towns[i].name);
        }*/


        //myH2.textContent = towns[i].name;
        myTh1.textContent = towns[i].service;
        myTh2.textContent = towns[i].price;
        myTh3.textContent = towns[i].completionTime;
        //myPara4.textContent = "Average Rainfall: " + towns[i].averageRainfall;

        //myArticle.appendChild(myH2);
        mytr.appendChild(myTh1);
        mytr.appendChild(myTh2);
        mytr.appendChild(myTh3);
        //myArticle.appendChild(myPara4);
        //myArticle.appendChild(myImage);


        section.appendChild(mytr);

    }
}
