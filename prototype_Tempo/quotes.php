<?php
$urlimage = "";
$valid = 'invalid';
$quote = "";
$color = "";
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once("settings.php");
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);

if ($mysqli->connect_error) {
    printf("DB connect failed: %s\n", $mysqli->connect_error);
    exit;
}


if (isset($_POST["submit"])) {
    $color = $_POST[color];


    function hex2rgb($hex)
    {
        $hex = str_replace("#", "", $hex);

        if (strlen($hex) == 3) {
            $r = hexdec(substr($hex, 0, 1) . substr($hex, 0, 1));
            $g = hexdec(substr($hex, 1, 1) . substr($hex, 1, 1));
            $b = hexdec(substr($hex, 2, 1) . substr($hex, 2, 1));
        } else {
            $r = hexdec(substr($hex, 0, 2));
            $g = hexdec(substr($hex, 2, 2));
            $b = hexdec(substr($hex, 4, 2));
        }
        $rgb = array($r, $g, $b);
        //return implode(",", $rgb); // returns the rgb values separated by commas
        return $rgb; // returns an array with the rgb values
    }

    $rgb = hex2rgb($color);

    $quote = $_POST["quote"];
    $uploadedFile = $_FILES['file_upload']['name'];
    $ext = end(explode(".", $uploadedFile));
    echo $ext;


    if ($_FILES['file_upload']['error'] > 0) {
        die('An error ocurred when uploading.');
    }

    if (!getimagesize($_FILES['file_upload']['tmp_name'])) {
        die('Please ensure you are uploading an image.');
    }

// Check filesize
    if ($_FILES['file_upload']['size'] > 500000) {
        die('File uploaded exceeds maximum upload size.');
    }

// Check if the file exists
    if (file_exists('upload/' . $uploadedFile)) {
        die('File with that name already exists.');
    }

    $image_path = 'upload/' . $uploadedFile;

// Upload file
    if (!move_uploaded_file($_FILES['file_upload']['tmp_name'], $image_path)) {
        die('Error uploading file - check destination is writeable.');
    }

    $src = imagecreatefromjpeg($image_path);
    list($width, $height) = getimagesize($image_path);
    $newwidth = 500;
    $newheight = 500;
    $tmp = imagecreatetruecolor($newwidth, $newheight);
    imagecopyresampled($tmp, $src, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);

    $text_color = imagecolorallocate($tmp, $rgb[0], $rgb[1], $rgb[2]);
    $font = 40;
    $x = 50;
    $y = 200;
    $fonts = "fonts/coolvetica rg.ttf";
    $text = $quote;
    $str = chunk_split($text, 15, "\n\r");
    imagettftext($tmp, $font, 0, $x, $y, $text_color, $fonts, $str);

    imagejpeg($tmp, "upload/" . $uploadedFile, 100);

// Free up memory
    imagedestroy($src);
    imagedestroy($tmp);

    echo "File uploaded successfully";

    $urlimage = $_FILES['file_upload']['name'];

    $query = "insert into quotes(imgurl, valid)
          VALUES ('$urlimage','$valid')";

    if (mysqli_query($mysqli, $query)) {
        echo "quote toegevoegd";
        header('Location: index.php');
    } else {
        echo "Error: " . $query . " < br>" . mysqli_error($mysqli);
    }
    mysqli_close($mysqli);
}




