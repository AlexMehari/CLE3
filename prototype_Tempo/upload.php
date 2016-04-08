<!DOCTYPE html>
<html lang="en">
<?php require_once 'includes/head.html'; ?>
<body>
<script>(function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v2.5";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
<?php require_once 'includes/navbar.html'; ?>
<div class="container-fluid box content">
    <div class="row boxrow">
        <div class="col-md-12 col-xs-12">
            <form method='post' enctype="multipart/form-data" action='quotes.php'>
                kies een afbeelding: <input type='file' name='file_upload' class="form-control" placeholder="kies een afbeelding">
                <input type="text" name="name" class="form-control" placeholder="vul je naam in">
                <textarea name="quote" id="" cols="30" rows="10" class="form-control" placeholder="type hier je quote"></textarea>
                <span>kies een tekstkleur</span><input type="color" name="color" value="#ff0000">
                <input type='submit' name="submit" class="btn btn-default">
            </form>
            <h2>Alle quotes</h2>
            <div class="row" id="quotes">
            </div>
        </div>
    </div>
</div>
</div>
<script src="js/main.js"></script>
</body>
</html>
