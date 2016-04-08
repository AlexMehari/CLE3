window.addEventListener("load", init);

//Global variables
var weather = "ferrodomerain";
var quoteGallery;
var apiKey = "1284e39dd53a1abebb1ba49e49a2dc74";
quoteGallery = document.getElementById('quotes');

/**
 * Initialize the application (after DOM ready)
 */
function init() {
    getAllRequests();
}

/**
 */
function getAllRequests() {
    ajaxRequest("http://api.openweathermap.org/data/2.5/weather?q=rotterdam&appid=" + apiKey, getWeather);
    ajaxRequest("https://api.instagram.com/v1/tags/" + weather + "/media/recent/?client_id=d8559577825a456e914c93b2c88e8100", showImages);
}

/**
 * Generic AJAX handler (to prevent $.ajax everywhere)
 *
 * @param url
 * @param ajaxSuccessHandler
 * @param [data]
 */
function ajaxRequest(url, ajaxSuccessHandler, data) {
    //Default ajax parameters
    var parameters = {
        dataType: 'jsonp',
        url: url
    };

    //If data is passed, add it to the AJAX parameters
    if (data) {
        parameters.data = data;
    }

    //Actual AJAX call (only jQuery needed!)
    $.ajax(parameters).done(ajaxSuccessHandler);
}


/**
 * Process the AJAX response from the server to show the movies
 *
 * @param data
 */
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
    //Store in global for later use
    //movieData = data;
}


function showImages(data) {
    //Store in global for later use
    console.log(data);
    var randNumber = Math.floor(Math.random() * 4) + 1;
    var imgUrl = data.data[randNumber].images.standard_resolution.url;
    var image = createDomElement({tagName: 'img', attributes: {class: 'photo', src: imgUrl}});
    //Append the image to the gallery
    quoteGallery.appendChild(image);
}


/**
 * Generic function to create new DOM elements
 *
 * @param properties
 * @returns {Element}
 */
function createDomElement(properties) {
    //Create the element
    var domElement = document.createElement(properties.tagName);

    //Loop through the attributes to set them on the element
    var attributes = properties.attributes;
    for (var prop in attributes) {
        domElement.setAttribute(prop, attributes[prop]);
    }

    //If any content, set the inner HTML
    if (properties.content) {
        domElement.innerHTML = properties.content;
    }

    //Return to use in other functions
    return domElement;
}
