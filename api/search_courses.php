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

    $search = isset($_GET['q']) ? trim($_GET['q']) : '';
    $searchParam = '%' . $search . '%';

    $sql = "
        SELECT
            c.id AS course_id,
            c.fullname AS course_name,
            c.summary AS course_description,
            cat.name AS category,
            CONCAT(u.firstname, ' ', u.lastname) AS teacher_name,
            CONCAT('https://relaticpanama.org/_classroom/course/view.php?id=', c.id) AS course_url
        FROM mdl_course c
        LEFT JOIN mdl_course_categories cat ON c.category = cat.id
        LEFT JOIN mdl_context ctx ON ctx.instanceid = c.id AND ctx.contextlevel = 50
        LEFT JOIN mdl_role_assignments ra ON ra.contextid = ctx.id
        LEFT JOIN mdl_role r ON r.id = ra.roleid AND r.shortname = 'editingteacher'
        LEFT JOIN mdl_user u ON u.id = ra.userid
        WHERE 
            c.fullname LIKE :search OR
            c.summary LIKE :search OR
            u.firstname LIKE :search OR
            u.lastname LIKE :search
        GROUP BY c.id
        ORDER BY c.fullname
        LIMIT 100;
    ";

    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(':search', $searchParam, PDO::PARAM_STR);
    $stmt->execute();

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        'status' => 'success',
        'count' => count($results),
        'data' => $results
    ]);

} catch (PDOException $e) {
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}