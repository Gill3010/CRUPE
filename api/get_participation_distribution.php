<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Ajusta la ruta de acuerdo a la ubicaci贸n real de config.php
require_once __DIR__ . '/../../api/config.php';

try {
    $stmt = $pdo->query("SELECT tipoParticipacion, COUNT(*) AS total FROM inscriptions GROUP BY tipoParticipacion");
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error en consulta: ' . $e->getMessage()]);
}