<?php
require_once("database.php");
$quote_id = $_GET['id'];

$query = "UPDATE quotes SET valid='valid' WHERE id = $quote_id";

mysqli_query($db, $query);

header("location: ../admin.php");
