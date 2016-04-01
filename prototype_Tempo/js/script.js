window.addEventListener('load', init);

function init() {
    getQuotes();
}

function getQuotes() {
    $.getJSON("getquotes.php").done(getQuotesCallback);
}

function getQuotesCallback(data) {
    console.log(data);
    $.each(data, function (index, val) {
        $('#quotes').append('<tr>' +
            '<td>' + val.id + '</td>' +
            '<td>' + '<img class="image" src="../upload/' + val.imgurl + '"/>' + '</td>' +
            '<td>' + '<a href="../php/update.php?id=' + val.id + '">' + '<img class="button" src="http://wpblogs.ru/wp-content/uploads/2015/02/affirmative-156538_640.png"/>' + '</a>' + '</td>' +
            '<td>' + '<a href="../php/remove.php?id=' + val.id + '">' + '<img class="button" src="https://pixabay.com/static/uploads/photo/2016/02/02/05/53/cancel-1174809_960_720.png"/>' + '</a>' + '</td>' +
            '</tr>');
    });
}
