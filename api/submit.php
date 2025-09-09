<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require 'config.php';

// Establecer charset UTF-8 para evitar problemas con acentos
$conn->set_charset("utf8mb4");

// Manejar solicitud OPTIONS para CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Validar que se recibió una solicitud POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Solo se permiten solicitudes POST.']);
    exit;
}

// Obtener datos del cuerpo de la solicitud
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'No se enviaron datos válidos.', 'received_data' => $json]);
    exit;
}

// Función para obtener valores con posibles diferentes keys
function getValue($data, $keys) {
    foreach ($keys as $key) {
        if (isset($data[$key])) return $data[$key];
    }
    return null;
}

// Mapear datos recibidos con normalización de nombres
$university_id       = isset($data['university_id']) ? (int)$data['university_id'] : null;
$email               = $data['email'] ?? null;
$country             = $data['country'] ?? null;
$dni                 = $data['dni'] ?? null;
$passport            = $data['passport'] ?? null;
$first_name          = getValue($data, ['firstName', 'first_name']);
$middle_name         = getValue($data, ['middleName', 'middle_name']);
$last_name           = getValue($data, ['lastName', 'last_name']);
$second_last_name    = getValue($data, ['secondLastName', 'second_last_name']);
$phone               = $data['phone'] ?? null;
$area                = $data['area'] ?? null;
$participation_type  = getValue($data, ['participationType', 'participation_type']);
$topic               = $data['topic'] ?? null;
$abstract_file       = $data['abstract_file'] ?? null;
$payment_file        = $data['payment_file'] ?? null;

// Verificar campos obligatorios
$required_fields = [
    'university_id' => $university_id,
    'email' => $email,
    'country' => $country,
    'dni' => $dni,
    'firstName/first_name' => $first_name,
    'lastName/last_name' => $last_name,
    'phone' => $phone,
    'area' => $area,
    'participationType/participation_type' => $participation_type,
    'topic' => $topic,
    'abstract_file' => $abstract_file
];

$missing_fields = [];
foreach ($required_fields as $field => $value) {
    if (empty($value)) {
        $missing_fields[] = $field;
    }
}

if (!empty($missing_fields)) {
    http_response_code(400);
    echo json_encode([
        'error' => 'Faltan campos obligatorios.',
        'missing_fields' => $missing_fields,
        'received_data' => $data
    ]);
    exit;
}

// Insertar en la base de datos
try {
    $stmt = $conn->prepare("INSERT INTO crupe (
        university_id, email, country, dni, passport, first_name, middle_name, 
        last_name, second_last_name, phone, area, participation_type, topic, 
        abstract_file, payment_file, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())");

    if (!$stmt) {
        throw new Exception("Error en prepare(): " . $conn->error);
    }

    $stmt->bind_param(
        "issssssssssssss",
        $university_id, $email, $country, $dni, $passport, 
        $first_name, $middle_name, $last_name, $second_last_name,
        $phone, $area, $participation_type, $topic,
        $abstract_file, $payment_file
    );

    if ($stmt->execute()) {
        echo json_encode([
            'success' => true, 
            'message' => 'Formulario enviado con éxito.',
            'submission_id' => $stmt->insert_id,
            'data_received' => $data // Para depuración
        ]);
    } else {
        throw new Exception('Error al insertar: ' . $stmt->error);
    }
} catch (Exception $e) {
    error_log("Error SQL: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'error' => 'Error en el servidor',
        'details' => $e->getMessage(),
        'sql_error' => $conn->error ?? null,
        'received_data' => $data
    ]);
} finally {
    if (isset($stmt)) $stmt->close();
    $conn->close();
}
?>