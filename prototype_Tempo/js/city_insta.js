window.addEventListener('load', init);
function init() {
    var cityw = "Rotterdam";
    var weather = "ferrodomecloudy";
    var apiKey = "1284e39dd53a1abebb1ba49e49a2dc74";
    var city = document.getElementById("city");
    var searchCity = document.getElementById("searchCity");
    searchCity.addEventListener("click", function () {
        console.log(city.value);
        cityw = city.value;
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityw + "&appid=" + apiKey,
            dataType: 'jsonp',
            success: (getCityImages)
        });

    });

    function getCityImages(data) {
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
            case "Drizzle":
                weather = "ferrodomerain";
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
                    var t = tag[i];
                    image += '<li><img src=' + t.images.standard_resolution.url + '><a href=' + '>' + '</a></li>';
                    $('ul').html(image);
                }
            }
        });
    }

    instacall();
}