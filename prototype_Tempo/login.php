<!--php file which handles the login request-->
<?php
require_once("includes/login_check.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login page</title>
    <link href="css/stylesheet.css" type="text/css" rel="stylesheet">
</head>
<body>

<!--form for admin to insert password-->
<form method="post" action="">
    <label for="wachtwoord"> Wachtwoord:</label><br/>
    <input type="password" name="wachtwoord" id="wachtwoord"><br/>
    <input type="submit" value="inloggen" name="submit">
</form>

</body>
</html>
