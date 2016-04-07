<!DOCTYPE html>
<html lang="en">
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once '../includes/head.html';
require_once '../includes/detailquery.php'; ?>
<body>
<div class="container-fluid box">
    <div class="row">
        <div class="col-md-8">
            <div id="quotes">
            </div>
        </div>

    </div>
</div>
<div class="nav">
    <nav class="navbar navbar-default navbar-fixed-bottom">
        <div class="container-fluid">
            <div class="row">
                <div class="bottom">
                    <div class="col-md-12 col-xs-12">
                        <span class="glyphicon glyphicon-plus plusbutton" aria-hidden="true"></span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>
</body>
<?php include("../includes/navbar2.html"); ?>
</html>