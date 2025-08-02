<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$host = 'localhost';
$dbname = 'YHWHjireh';
$username = 'YHWH25';
$password = 'YHWHjireh2025';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $search = isset($_GET['q']) ? trim($_GET['q']) : '';
    $searchParam = '%' . $search . '%';

    $sql = "
        SELECT 
            s.submission_id,
            ps.setting_value AS title,
            GROUP_CONCAT(
                DISTINCT NULLIF(TRIM(CONCAT_WS(' ', gn.setting_value, fn.setting_value)), '') 
                ORDER BY a.seq SEPARATOR ', '
            ) AS authors,
            abs.setting_value AS abstract,
            p.date_published,
            CONCAT('https://relaticpanama.org/_books/index.php/', pr.path, '/catalog/book/', s.submission_id) AS book_url
        FROM submissions s
        JOIN publications p ON s.current_publication_id = p.publication_id
        JOIN publication_settings ps ON p.publication_id = ps.publication_id AND ps.setting_name = 'title'
        LEFT JOIN publication_settings abs ON p.publication_id = abs.publication_id AND abs.setting_name = 'abstract'
        JOIN authors a ON p.publication_id = a.publication_id
        LEFT JOIN author_settings gn ON a.author_id = gn.author_id AND gn.setting_name = 'givenName'
        LEFT JOIN author_settings fn ON a.author_id = fn.author_id AND fn.setting_name = 'familyName'
        JOIN presses pr ON s.context_id = pr.press_id
        WHERE 
            ps.setting_value LIKE :search OR
            gn.setting_value LIKE :search OR
            fn.setting_value LIKE :search OR
            abs.setting_value LIKE :search
        GROUP BY s.submission_id
        ORDER BY p.date_published DESC
        LIMIT 100;
    ";

    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(':search', $searchParam);
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
?>