window.addEventListener('load', init);
var degrees = document.getElementById("degrees");
var weatherIcon = document.getElementById("weatherIcon");
var place = document.getElementById("place");
function init() {
    var cityw = "Rotterdam";
    var celsius;
    var weather = "ferrodomecloudy";
    var apiKey = "1284e39dd53a1abebb1ba49e49a2dc74";
    var city = document.getElementById("city");
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + "rotterdam" + "&appid=" + apiKey,
        dataType: 'jsonp',
        success: (function (data) {
            var kelvin = data.main.temp;
            celsius = kelvin - 273.15;
            celsius = Math.round(celsius);
            degrees.innerHTML = celsius + "&deg;";

        })
    });
    var searchCity = document.getElementById("searchCity");
    searchCity.addEventListener("click", function () {
        cityw = city.value;
        place.innerHTML = cityw;
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityw + "&appid=" + apiKey,
            dataType: 'jsonp',
            success: (getCityImages)
        });

    });

    function getCityImages(data) {
        var kelvin = data.main.temp;
        celsius = kelvin - 273.15;
        celsius = Math.round(celsius);
        degrees.innerHTML = celsius + "&deg;";
        weather = data.weather[0].main;
        switch (weather) {
            case "Clouds":
                weather = "ferrodomecloudy";
                weatherIcon.src = "img/cloud.png";
                break;
            case "Clear":
                weather = "ferrodomesun";
                weatherIcon.src = "img/sun.png";
                break;
            case "Snow":
                weather = "ferrodomesnow";
                weatherIcon.src = "img/snow.png";
                break;
            case "Rain":
                weather = "ferrodomerain";
                weatherIcon.src = "img/rain.png";
                break;
            case "Drizzle":
                weather = "ferrodomerain";
                weatherIcon.src = "img/rain.png";
                break;
            case "Mist":
                weather = "ferrodomemist";
                break;
        }
        console.log(weather);
        instacall();
    }

    function instacall() {
        //console.log(weather);
        $.ajax({
            url: "https://api.instagram.com/v1/tags/" + weather + "/media/recent/?client_id=d8559577825a456e914c93b2c88e8100",
            dataType: 'jsonp',
            success: function (data) {
                var image = '';
                var tag = data.data;
                for (var i in tag) {
                    if (i == 0) {
                        $class = "active";
                    }
                    else {
                        $class = "";
                    }
                    var t = tag[i];
                    image += '<div class="' + $class + ' item carouselimg"><img src=' + t.images.standard_resolution.url + ' class="photo"><a href=' + '>' + '</a></div>';
                    $('#imagebox').html(image);
                }
            }
        });
    }

    instacall();
}