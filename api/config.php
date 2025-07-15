<?php
$host = 'localhost';
$db = 'Forms';
$user = 'Forms25';
$pass = 'Forms.2025';

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    http_response_code(500);
    echo json_encode(['error' => 'Error de conexi贸n: ' . mysqli_connect_error()]);
    exit;
}
?>