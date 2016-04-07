<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once("database.php");
$id = $_GET['id'];
$query = "SELECT imgurl FROM quotes WHERE id = $id";

$result = $db->query($query);
$quotes = array();

while ($quote = $result->fetch_array(MYSQLI_ASSOC)) {
    $quotes[] = $quote;
}

echo json_encode($quotes);
