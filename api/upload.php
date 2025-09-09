<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Configuraci車n de directorio de uploads
$uploadDir = __DIR__ . '/uploads/';

// Crear directorio si no existe
if (!file_exists($uploadDir)) {
    if (!mkdir($uploadDir, 0777, true)) {
        http_response_code(500);
        echo json_encode(['error' => 'No se pudo crear el directorio de uploads']);
        exit;
    }
}

// Validar que se recibi車 un archivo
if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !isset($_FILES['file'])) {
    http_response_code(400);
    echo json_encode(['error' => 'No se recibi車 ning迆n archivo']);
    exit;
}

// Validar que no hubo errores en la subida
if ($_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['error' => 'Error al subir el archivo: ' . $_FILES['file']['error']]);
    exit;
}

// Validar tipo de archivo
$allowedExtensions = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png'];
$originalName = $_FILES['file']['name'];
$fileExtension = strtolower(pathinfo($originalName, PATHINFO_EXTENSION));

if (!in_array($fileExtension, $allowedExtensions)) {
    http_response_code(400);
    echo json_encode(['error' => 'Tipo de archivo no permitido']);
    exit;
}

// Generar nombre 迆nico para el archivo
$newFileName = uniqid() . '_' . time() . '.' . $fileExtension;
$targetPath = $uploadDir . $newFileName;

// Mover el archivo subido
if (move_uploaded_file($_FILES['file']['tmp_name'], $targetPath)) {
    echo json_encode([
        'success' => true,
        'file_name' => $newFileName,
        'original_name' => $originalName,
        'message' => 'Archivo subido correctamente'
    ]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al mover el archivo subido']);
}
?>