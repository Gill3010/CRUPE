<?php
require 'config.php'; // conexión mysqli
header('Content-Type: application/json; charset=utf-8');
mysqli_set_charset($conn, "utf8mb4");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $comprobantePagoNombre = '';

    // Carpeta uploads dentro de /_events/
    $uploadDir = __DIR__ . '/../uploads_assistance/';
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0775, true);
    }

    if (isset($_FILES['comprobantePago']) && $_FILES['comprobantePago']['error'] === UPLOAD_ERR_OK) {
        $comprobantePagoNombre = uniqid() . '_' . basename($_FILES['comprobantePago']['name']);
        move_uploaded_file($_FILES['comprobantePago']['tmp_name'], $uploadDir . $comprobantePagoNombre);
    }

    // Escapar datos con mysqli_real_escape_string
    $email = mysqli_real_escape_string($conn, $_POST['email'] ?? '');
    $pais = mysqli_real_escape_string($conn, $_POST['pais'] ?? '');
    $cedula = mysqli_real_escape_string($conn, $_POST['cedula'] ?? '');
    $pasaporte = mysqli_real_escape_string($conn, $_POST['pasaporte'] ?? '');
    $primerNombre = mysqli_real_escape_string($conn, $_POST['primerNombre'] ?? '');
    $segundoNombre = mysqli_real_escape_string($conn, $_POST['segundoNombre'] ?? '');
    $primerApellido = mysqli_real_escape_string($conn, $_POST['primerApellido'] ?? '');
    $segundoApellido = mysqli_real_escape_string($conn, $_POST['segundoApellido'] ?? '');
    $celular = mysqli_real_escape_string($conn, $_POST['celular'] ?? '');
    $areaConocimiento = mysqli_real_escape_string($conn, $_POST['areaConocimiento'] ?? '');
    $tipoParticipacion = 'Asistente'; // valor fijo

    // Validación mínima para asistentes
    if (
        !$email || !$pais || !$cedula || !$primerNombre || !$primerApellido || 
        !$celular || !$areaConocimiento
    ) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Faltan campos obligatorios']);
        exit;
    }

    // Consulta sin tema ni resumen
    $sql = "INSERT INTO assistants (
        email, pais, cedula, pasaporte, primerNombre, segundoNombre,
        primerApellido, segundoApellido, celular, areaConocimiento,
        tipoParticipacion, comprobantePago
    ) VALUES (
        '$email', '$pais', '$cedula', '$pasaporte', '$primerNombre', '$segundoNombre',
        '$primerApellido', '$segundoApellido', '$celular', '$areaConocimiento',
        '$tipoParticipacion', '$comprobantePagoNombre'
    )";

    if (mysqli_query($conn, $sql)) {
        echo json_encode(['success' => true, 'message' => 'Inscripción guardada exitosamente.']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Error al guardar: ' . mysqli_error($conn)]);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido.']);
}

mysqli_close($conn);
?>