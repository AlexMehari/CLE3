<?php
// retrieve the values that have been stored in the session
session_start();

//if logged in welcome the user, else send them back to index page
if ($_SESSION["status"] == 1) {
} else {
    header("location: login.php");
}
