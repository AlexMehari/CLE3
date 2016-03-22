<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>FerroTempo</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<section>
    <div class="images">
        <form method='post' enctype="multipart/form-data" action='quotes.php'>
            File: <input type='file' name='file_upload'>
            <input type='submit' name="submit">
            <textarea name="quote" id="" cols="30" rows="10"></textarea>
            <input type="color" name="color" value="#ff0000">
        </form>
        <div id="quotes">
        </div>
    </div>
</section>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>
