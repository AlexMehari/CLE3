<!DOCTYPE html>
<html lang="en">
<?php require_once 'includes/head.html'; ?>
<body>
<?php require_once 'includes/navbar.html'; ?>
<div class="container-fluid box content">
    <div class="row boxrow">
        <div class="col-md-12 col-xs-12">
            <form method='post' enctype="multipart/form-data" action='quotes.php'>
                kies een afbeelding: <input type='file' name='file_upload' class="form-control" placeholder="kies een afbeelding">
                <textarea name="quote" id="" cols="30" rows="10" class="form-control"></textarea>
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
