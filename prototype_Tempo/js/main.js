window.addEventListener('load', init);
var button = document.getElementById("upload");
//button.addEventListener('click', uploadImage);
function init() {
    getQuotes()
}

function getQuotes() {
    $.getJSON("showQuotes.php").done(getQuotesCallback);
}


function getQuotesCallback(data) {
    console.log(data);
    $.each(data, function (index, val) {
        $('#quotes').append('<ul>' + '<li>' +
            '<img src=' + "upload/" + val.imgurl + '>' + '<' +
            'a href=' + '>' + '</a></li>' +
            '</ul>');
    });
}

function uploadImage() {
    event.preventDefault();
    $.post("upload.php", function () {
        alert("success");
    });
}




