<!--php file that checks is the user is permitted-->
<?php
require_once("includes/control.php");
 error_reporting(0);
error_reporting(E_ERROR | E_PARSE);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin page</title>
    <link href="css/stylesheet.css" type="text/css" rel="stylesheet">
</head>
<body>

<h1>Welcome admin!</h1>

<!--table that gets filled by ajax by id-->
<table>
    <thead>
    <tr>
        <th>Id</th>
        <th>Image</th>
        <th>Confirm</th>
        <th>Remove</th>
    </tr>
    </thead>
    <tbody id="quotes"></tbody>
</table>

<!--link to destroy session-->
<p><a href="includes/destroy.php">Log out</a></p>

<script src="js/script.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
</body>
</html>
