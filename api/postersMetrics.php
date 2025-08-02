<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Configuración de conexión (ajusta si cambia algo)
$host = 'localhost';
$dbname = 'YHWHshaddai';
$username = 'YHWH2025';
$password = 'YHWHshaddai2025';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Total de carteles
    $cartelesStmt = $pdo->query("SELECT COUNT(*) FROM submissions");
    $carteles = (int) $cartelesStmt->fetchColumn();

    // Total de autores únicos
    $autoresStmt = $pdo->query("
        SELECT COUNT(DISTINCT CONCAT_WS(' ', 
            (SELECT setting_value FROM author_settings WHERE author_id = a.author_id AND setting_name = 'givenName' LIMIT 1),
            (SELECT setting_value FROM author_settings WHERE author_id = a.author_id AND setting_name = 'familyName' LIMIT 1)
        )) AS total
        FROM authors a
    ");
    $autores = (int) $autoresStmt->fetchColumn();

    // Año de la primera y última publicación
    $fechasStmt = $pdo->query("
        SELECT 
            MIN(YEAR(date_published)) AS first_year,
            MAX(YEAR(date_published)) AS last_year
        FROM publications
        WHERE date_published IS NOT NULL
    ");
    $fechas = $fechasStmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode([
        'status' => 'success',
        'data' => [
            'posters' => $carteles,
            'authors' => $autores,
            'first_year' => $fechas['first_year'],
            'last_year' => $fechas['last_year'],
        ]
    ]);
} catch (PDOException $e) {
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}