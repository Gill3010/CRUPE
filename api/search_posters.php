<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Configuración de conexión (ajusta según tu BD de carteles)
$host = 'localhost';
$dbname = 'YHWHshaddai';
$username = 'YHWH2025';
$password = 'YHWHshaddai2025';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Obtener término de búsqueda
    $search = isset($_GET['q']) ? trim($_GET['q']) : '';
    $searchParam = '%' . $search . '%';

    $sql = "
        SELECT 
            s.submission_id,
            st.setting_value AS title,
            GROUP_CONCAT(
                DISTINCT NULLIF(TRIM(CONCAT_WS(' ', given_name.setting_value, family_name.setting_value)), '') 
                ORDER BY a.seq
                SEPARATOR ', '
            ) AS authors,
            sr.setting_value AS abstract,
            js.setting_value AS journal_title,
            p.date_published,
            CONCAT('https://relaticpanama.org/_posters/index.php/', j.path, '/article/view/', s.submission_id) AS article_url
        FROM submissions s
        JOIN publications p ON s.current_publication_id = p.publication_id
        JOIN publication_settings st ON p.publication_id = st.publication_id AND st.setting_name = 'title'
        LEFT JOIN publication_settings sr ON p.publication_id = sr.publication_id AND sr.setting_name = 'abstract'
        JOIN authors a ON p.publication_id = a.publication_id
        LEFT JOIN author_settings given_name ON a.author_id = given_name.author_id AND given_name.setting_name = 'givenName'
        LEFT JOIN author_settings family_name ON a.author_id = family_name.author_id AND family_name.setting_name = 'familyName'
        JOIN journals j ON s.context_id = j.journal_id
        JOIN journal_settings js ON j.journal_id = js.journal_id AND js.setting_name = 'name'
        WHERE 
            st.setting_value LIKE :search OR
            given_name.setting_value LIKE :search OR
            family_name.setting_value LIKE :search
        GROUP BY s.submission_id
        ORDER BY p.date_published DESC
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