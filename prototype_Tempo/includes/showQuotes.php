<?php
require_once("database.php");
$query = "SELECT * FROM quotes WHERE valid = 'valid' ORDER BY valid DESC";

$result = $db->query($query);
$quotes = array();

while ($quote = $result->fetch_array(MYSQLI_ASSOC)) {
    $quotes[] = $quote;
}

header("Content-type: application/json");
echo json_encode($quotes);