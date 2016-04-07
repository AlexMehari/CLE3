<?php
require_once("database.php");
//Set the header so the client will know what to expect.
header("Content-Type: application/json");


//Build query depending on parameter state
$query = "SELECT * FROM quotes";

//Execute query & fetch result
$result = $db->query($query);

//Meta information about the returnData
$returnData['meta'] = [
    "query" => $query,
    "row_count" => $result->num_rows
];

//Merge the data from the database with the images from flickr into the newly created returnData
while ($row = $result->fetch_assoc()) {
    $returnData['quotes'][] = [
        "id" => $row['id'],
        "name" => $row['imgurl']
    ];
}

//Free the results and the connection
$result->close();
$db->close();

//Output JSON to the outside world
echo json_encode($returnData);
exit;
