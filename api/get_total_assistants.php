<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Ajusta la ruta si config.php está en /api (dos niveles arriba)
require_once __DIR__ . '/../../api/config.php';

try {
    $stmt = $pdo->query("SELECT COUNT(*) AS total FROM assistants");
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode(['total' => (int)$row['total']]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error en consulta: ' . $e->getMessage()]);
}