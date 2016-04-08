<!DOCTYPE html>
<html lang="en">
<?php
require_once '../includes/head.html';
require_once '../includes/detailquery.php'; ?>
<head>
<!--    <meta property="og:image" content="http://178.62.195.6/prototype_Tempo/upload/--><?//= $quotes[0]['imgurl']; ?><!--"/>-->
    <meta property="og:title" content="Title of the page" />
    <!-- NEXT LINE Even if page is dynamically generated and URL contains query parameters -->
    <meta property="og:url" content="http://google.com" />
    <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/a/a3/Giant_prominence_on_the_sun_erupted.jpg" />
</head>

<body>
<div id="fb-root"></div>
<script>(function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v2.5";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
<div class="container-fluid box">
    <div class="row">
        <div class="col-md-8">
            <div id="quotes">
            </div>
        </div>

    </div>
</div>
<img class="detail_img" src="../upload/<?= $quotes[0]['imgurl']; ?>"/><br>
<div class="fb-share-button"
     data-href="http://178.62.195.6/prototype_Tempo/includes/details.php?id=<?= $quotes[0]['id']; ?>"
     data-layout="button_count"></div>
</body>
<?php include("../includes/navbar2.html"); ?>
</html>