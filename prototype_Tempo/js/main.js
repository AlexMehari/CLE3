window.addEventListener('load', init);


function init() {
    getQuotes()
}

function getQuotes() {
    $.getJSON("includes/showQuotes.php").done(getQuotesCallback);
}

function getQuotesCallback(data) {
    $.each(data, function (index, val) {
        $('#quotes').append('<ul>' + '<li>' +
            '<a  class="quoteimg" href="includes/details.php?id=' + val.id + '">' + '<img src=' + "upload/" + val.imgurl + '>' + '</a>' + '</li>' +
            '</ul>');
    });
}