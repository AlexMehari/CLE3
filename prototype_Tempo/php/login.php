<?php
// db connection
require_once("config.php");
// session data
session_start();

//make sure the password field is empty
$wachtwoord = '';

//check if password is submitted and put it in a var
if (isset($_POST["wachtwoord"])) {
    $wachtwoord = $_POST["wachtwoord"];
}

if (isset($_POST['submit'])) {

    $query = "SELECT * FROM users WHERE wachtwoord = '$wachtwoord'";

    $array = mysqli_query($db, $query);

    $users = mysqli_fetch_assoc($array);

    print_r($users);
    if ($users["wachtwoord"] == $_POST["wachtwoord"]) {
        $_SESSION["status"] = $users["status"];
        header("location: admin.php");
    }
}
