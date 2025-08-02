<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$host = 'localhost';
$dbname = 'moodle_db';
$username = 'moodle_db2025';
$password = 'moodle_db_2025';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Total cursos
    $stmtCourses = $pdo->query("SELECT COUNT(*) FROM mdl_course");
    $totalCourses = (int)$stmtCourses->fetchColumn();

    // Total profesores distintos que son editingteachers asignados a algún curso
    $stmtTeachers = $pdo->query("
        SELECT COUNT(DISTINCT ra.userid) 
        FROM mdl_role_assignments ra
        JOIN mdl_role r ON r.id = ra.roleid
        WHERE r.shortname = 'editingteacher'
    ");
    $totalTeachers = (int)$stmtTeachers->fetchColumn();

    // En Moodle no hay campo fecha directamente en curso para saber rango años, omitimos o lo dejamos estático
    $firstYear = 2025; // Puedes cambiar o calcular si tienes otro campo
    $lastYear = 2025;

    echo json_encode([
        'status' => 'success',
        'data' => [
            'courses' => $totalCourses,
            'teachers' => $totalTeachers,
            'first_year' => $firstYear,
            'last_year' => $lastYear
        ]
    ]);
} catch (PDOException $e) {
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}
?>