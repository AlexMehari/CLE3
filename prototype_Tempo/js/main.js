window.addEventListener('load', init);
var button = document.getElementById("upload");
//button.addEventListener('click', uploadImage);
function init() {
    getQuotes()
}

function getQuotes() {
    $.getJSON("php/showQuotes.php").done(getQuotesCallback);
}


function getQuotesCallback(data) {
    console.log(data);
    $.each(data, function (index, val) {
        $('#quotes').append('<ul>' + '<li>' +
            '<a href="php/details.php?id=' + val.id + '">' + '<img src=' + "upload/" + val.imgurl + '>' + '</a>' + '</li>' +
            '</ul>');
    });
}

function uploadImage() {
    event.preventDefault();
    $.post("upload.php", function () {
        alert("success");
    });
}




