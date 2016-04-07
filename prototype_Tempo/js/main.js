window.addEventListener('load', init);

//Global vars
var quoteGallery;

/**
 * Execute after DOM ready
 */
function init() {
    getRecipes();

    //Save dishGallery in variable for later use & add event listener for images
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
    //Save dishes in variable
    var dishes = data.quotes;
    console.log(data.quotes);

    //Loop through all the dishes
    for (var i = 0; i < dishes.length; i++) {
        //Create image (with ID used for click handler) & append to div
        var image = createDomElement({tagName: 'img', attributes: {class: 'quoteimg',src: "upload/"+dishes[i].name, id: dishes[i].name}});

        //Create  link
        var link = createDomElement({tagName: 'a', attributes: {href:'includes/details.php?id=' +dishes[i].id}});

        //Append title to div
        link.appendChild(image);

        //Append to the DOM
        quoteGallery.appendChild(link);
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

