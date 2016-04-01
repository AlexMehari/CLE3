<?php
$url = 'localhost';
$username = 'root';
$password = '';
$database = 'ferro_test';

//create connection
$db = mysqli_connect($url, $username, $password, $database)
or die ('Error: ' .mysqli_connect_error());
