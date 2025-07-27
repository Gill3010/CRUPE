<?php
header('Content-Type: application/json; charset=utf-8');

// Validar clave de acceso
$expectedKey = 'relatic2025json';
$providedKey = $_GET['key'] ?? '';

if ($providedKey !== $expectedKey) {
    http_response_code(403);
    echo json_encode(['error' => 'Acceso denegado']);
    exit;
}

// Conexi贸n
require_once __DIR__ . '/config.php';

if (!$conn) {
    http_response_code(500);
    echo json_encode(['error' => 'Error de conexi贸n: ' . mysqli_connect_error()]);
    exit;
}

// Set charset para caracteres especiales
mysqli_set_charset($conn, 'utf8mb4');

// Consulta (cambia 'inscriptions' por el nombre exacto de tu tabla)
$query = "SELECT * FROM inscriptions";
$result = mysqli_query($conn, $query);

if (!$result) {
    http_response_code(500);
    echo json_encode(['error' => 'Error en consulta: ' . mysqli_error($conn)]);
    exit;
}

$data = [];
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

// Salida JSON sin escapar caracteres unicode
echo json_encode($data, JSON_UNESCAPED_UNICODE);