window.addEventListener('load', init);
var weather = "ferrodomerain";
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
            case "drizzle":
                weather = "ferrodomerain";
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
                var randNumber = Math.floor(Math.random() * 4) + 1;
                image += '<li><img src=' + data.data[randNumber].images.standard_resolution.url + ' class="photo"><a href=' + '>' + '</a></li>';
                $('#quotes').html(image);
                var content = document.getElementById("quotes")
            }
        });
    }
    myVar = setInterval(randomQuote, 5000);
    randomQuote();
}
