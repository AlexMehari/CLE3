$(function () {
    myTimer();
    myVar = setInterval(myTimer, 1000);
    var weather = "";

    var apiKey = "1284e39dd53a1abebb1ba49e49a2dc74";
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=mekka,SA&appid=" + apiKey,
        dataType: 'jsonp',
        success: (getWeather)
    });

    function getWeather(data) {
        // Print Title On the Page
        weather = data.weather[0].main;
        if (weather == "Clouds") {
            weather = "cloudyquotes";
        }

        if (weather == "Clear") {
            weather = "sunnyquote";
        }

        console.log(weather);
    }

    function myTimer() {
        var apiKey = "LvX5XS75lg2giWHMRGJszxdMRJ0kn9a2yv3A300E67Q821U1zU";
        $.ajax({
            url: "https://api.tumblr.com/v2/tagged?tag=" + weather + "&api_key=" + apiKey,
            dataType: 'jsonp',
            success: function (data) {
                var tag = data.response;
                for (var i in tag) {
                    var randNumber = Math.floor(Math.random() * 40) + 1;
                    var t = tag[randNumber];
                    var image = '';
                    var photo = t.photos;
                    if (typeof photo != "undefined") {
                        // console.log(data.response[randNumber].photos[0].original_size.url);
                        image += '<li><img src=' + data.response[randNumber].photos[0].original_size.url + '><a href=' + t.post_url + '>' + '</a></li>';
                        $('ul').html(image);
                    }
                }
            }
        });
    }
});

//  url: "http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&lang=zh_cn&appid=1284e39dd53a1abebb1ba49e49a2dc74",