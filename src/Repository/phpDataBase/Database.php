<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

$host_name = 'db5012110224.hosting-data.io';
$database = 'dbs10189365';
$user_name = 'dbu2464262';
$password = 'WinterIsComing300%';


// Connect to MySQL database
$connection = new mysqli('localhost', 'root', '', 'dbs10189365');

// $connection = new mysqli($host_name, $user_name, $password, $database);
if ($connection->connect_error) {
    die('Error connecting to database: ' . $connection->connect_error);
}

// Get Movies from MySQL database
$sql = 'SELECT * FROM movietable';
$result = $connection->query($sql);
if ($result->num_rows > 0) {
    $movie = array();
    while ($row = $result->fetch_assoc()) {
        array_push($movie, $row);
    }
    echo json_encode($movie);
} else {
    echo 'No movies found';
}

// Close MySQL connection
$connection->close();
?>