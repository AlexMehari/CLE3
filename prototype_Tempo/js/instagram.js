window.addEventListener('load', init);
var weather = "";
var sunny = document.getElementById('sunny');
var cloudy = document.getElementById('cloudy');
var snow = document.getElementById('snow');
var rain = document.getElementById('rain');



function init() {

    var apiKey = "1284e39dd53a1abebb1ba49e49a2dc74";
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=rotterdam&appid=" + apiKey,
        dataType: 'jsonp',
        success: (getWeather)
    });

    function getWeather(data) {
        weather = data.weather[0].main;
        switch (weather) {
            case "Clouds":
                weather = "ferrodomecloudy";
                break;
            case "Clear":
                weather = "ferrodomesun";
                break;
            case "Snow":
                weather = "ferrodomesnow";
                break;
            case "Rain":
                weather = "ferrodomerain";
                break;
            case "Mist":
                weather = "ferrodomemist";
                break;
        }

        console.log(weather);
    }

    function randomQuote() {
        $.ajax({
            url: "https://api.instagram.com/v1/tags/" + weather + "/media/recent/?client_id=d8559577825a456e914c93b2c88e8100",
            dataType: 'jsonp',
            success: function (data) {
                var image = '';
                var randNumber = Math.floor(Math.random() * 5) + 1;
                // console.log(data.data[randNumber].images.standard_resolution.url);
                image += '<li><img src=' + data.data[randNumber].images.standard_resolution.url + '><a href=' + '>' + '</a></li>';
                $('ul').html(image);
            }
        });
    }

    myVar = setInterval(randomQuote, 1000);
    randomQuote();

}


sunny.addEventListener('click', function () {
    weather = "ferrodomesun";
    randomQuote();
    console.log(weather);
});

cloudy.addEventListener('click', function () {
    weather = "ferrodomecloudy";
    randomQuote();
    console.log(weather);
});

snow.addEventListener('click', function () {
    weather = "ferrodomesnow";
    randomQuote();
    console.log(weather);
});

rain.addEventListener('click', function () {
    weather = "ferrodomerain";
    randomQuote();
    console.log(weather);
});


//  url: "http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&lang=zh_cn&appid=1284e39dd53a1abebb1ba49e49a2dc74",

