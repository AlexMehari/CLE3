<?php
require_once("database.php");
$quote_id = $_GET['id'];

$query = "SELECT * FROM quotes WHERE id = $quote_id";

$res = mysqli_query($db, $query);

$quote = mysqli_fetch_assoc($res);

$file = '../upload/' . $quote['imgurl'];
unlink($file);

$query = "DELETE FROM quotes WHERE id = $quote_id";

mysqli_query($db, $query);

header("location: ../admin.php");
