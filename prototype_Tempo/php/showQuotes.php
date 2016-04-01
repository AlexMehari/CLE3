<?php
require_once("settings.php");
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);

if ($mysqli->connect_error) {
    printf("DB connect failed: %s\n", $mysqli->connect_error);
    exit;
}


$query = "select * from quotes WHERE valid = 'valid'";


$res = $mysqli->query($query);
$quotes = array();

while ($quote = $res->fetch_array(MYSQLI_ASSOC)) {
    $quotes[] = $quote;
}

header('Content-type: application/json');
echo json_encode($quotes);
