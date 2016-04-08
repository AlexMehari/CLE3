window.addEventListener('load', init);

//Global vars
var quoteGallery;

/**
 * Execute after DOM ready
 */
function init() {
    getRecipes();

    //Save quoteGallery in variable for later use & add event listener for images
    quoteGallery = document.getElementById('quotes');
}

/**
 * Get recipes to show in HTML
 */
function getRecipes() {
    ajaxRequest(showRecipes);
}

/**
 * Generic AJAX handler (to prevent $.ajax everywhere)
 *
 * @param ajaxSuccessHandler
 * @param [data]
 */
function ajaxRequest(ajaxSuccessHandler, data) {
    //Default ajax parameters
    var parameters = {
        dataType: 'json',
        url: 'includes/showQuotes.php'
    };

    //If data is passed, add it to the AJAX parameters
    if (data) {
        parameters.data = data;
    }

    //Actual AJAX call (only jQuery needed!)
    $.ajax(parameters).done(ajaxSuccessHandler);
}

/**
 * Show all the recipes on the screen
 *
 * @param data
 */
function showRecipes(data) {
    //Save quotes in variable
    var quotes = data.quotes;
    console.log(data.quotes);

    //Loop through all the quotes
    for (var i = 0; i < quotes.length; i++) {
        //create div
        var col = createDomElement({tagName: 'div', attributes: {class: 'col-xs-6 col-md-3'}});
        // create thumbnail
        var thumbnail = createDomElement({tagName: 'div', attributes: {class: 'thumbnail'}});
        col.appendChild(thumbnail);
        // create caption
        var caption = createDomElement({tagName: 'div', attributes: {class: 'caption'}});
        thumbnail.appendChild(caption);
        //Create  link
        var link = createDomElement({tagName: 'a', attributes: {href:'includes/details.php?id=' +quotes[i].id, class:''}});
        var name = createDomElement({tagName: 'h4', attributes: {}, content: quotes[i].person});
        //Create image
        var image = createDomElement({tagName: 'img', attributes: {class: 'quoteimg',src: "upload/"+quotes[i].name, id: quotes[i].name}});
        //Append image to link
        link.appendChild(image);
        //append name to caption
        caption.appendChild(name);
        // append link to thumbnail
        thumbnail.appendChild(link);


        //Append to the DOM
        quoteGallery.appendChild(col);
    }
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

