var section = document.querySelector('.gridCities');
var requestURL = '//byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var cityData = request.response;
    showData(cityData);
}

function showData(jsonObj) {
    var towns = jsonObj['towns'];

    for (var i = 0; i < towns.length; i++) {
        if (i === 2) { continue; }
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');

        var myImage = document.createElement('IMG');
        if (towns[i].name === "Franklin"){
            myImage.setAttribute("src", "/assignments/lesson-9/images/franklin-cropped_L9.jpeg");
            myImage.setAttribute("alt", towns[i].name);
        }
        else if (towns[i].name === "Greenville"){
            myImage.setAttribute("src", "/assignments/lesson-9/images/greenville_original_L9_v2.jpeg");
            myImage.setAttribute("alt", towns[i].name);
        }
        else if (towns[i].name === "Springfield"){
            myImage.setAttribute("src", "/assignments/lesson-9/images/springfield_original_L9_v2.jpeg");
            myImage.setAttribute("alt", towns[i].name);
        }


        myH2.textContent = towns[i].name;
        myPara1.textContent = towns[i].motto;
        myPara2.textContent = "Founded: " + towns[i].yearFounded;
        myPara3.textContent = "Population: " + towns[i].currentPopulation;
        myPara4.textContent = "Average Rainfall: " + towns[i].averageRainfall;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myImage);


        section.appendChild(myArticle);

    }
}




