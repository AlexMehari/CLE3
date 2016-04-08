<?php
require_once("database.php");
$id = $_GET['id'];
$query = "SELECT * FROM quotes WHERE id = $id";

$result = $db->query($query);
$quotes = array();

while ($quote = $result->fetch_array(MYSQLI_ASSOC)) {
    $quotes[] = $quote;
}

