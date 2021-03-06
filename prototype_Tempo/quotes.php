<?php
$urlimage = "";
$valid = 'invalid';
$quote = "";
$person = "";
$color = "";
require_once("includes/settings.php");
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);

if ($mysqli->connect_error) {
    printf("DB connect failed: %s\n", $mysqli->connect_error);
    exit;
}


if (isset($_POST["submit"])) {
    $color = $_POST['color'];
    $person = $_POST['name'];


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
    $name = pathinfo($_FILES['file_upload']['name'], PATHINFO_FILENAME);
    $ext = pathinfo($_FILES['file_upload']['name'], PATHINFO_EXTENSION);
    echo $ext;


    if ($_FILES['file_upload']['error'] > 0) {
        die('An error ocurred when uploading.');
    }

    if (!getimagesize($_FILES['file_upload']['tmp_name'])) {
        die('Please ensure you are uploading an image.');
    }

    // Check filesize
//    if ($_FILES['file_upload']['size'] > 500000) {
//        die('File uploaded exceeds maximum upload size.');
//    }
    $increment = '';
// Check if the file exists
    while (file_exists('upload/' . $name . $increment . '.' . $ext)) {
        $increment++;
    }
    echo $name;
    $image_path = 'upload/' . $name . $increment . '.' . $ext;


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
//    $str = chunk_split($text, 15, "\n\r");
    $str = wordwrap($text, 15, "\n\r", true);
    imagettftext($tmp, $font, 0, $x, $y, $text_color, $fonts, $str);

    imagejpeg($tmp, $image_path, 100);

// Free up memory
    imagedestroy($src);
    imagedestroy($tmp);

    echo "File uploaded successfully";

    $urlimage = $name . $increment . '.' . $ext;

    $query = "insert into quotes(imgurl, name,valid)
          VALUES ('$urlimage','$person ','$valid')";

    if (mysqli_query($mysqli, $query)) {
        echo "quote toegevoegd";
        echo '<script type="text/javascript">
           window.location = " upload.php"
      </script>';
        exit();
    } else {
        echo "Error: " . $query . " < br>" . mysqli_error($mysqli);
    }
    mysqli_close($mysqli);
}



