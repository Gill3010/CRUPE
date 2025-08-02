<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$host = 'localhost';
$dbname = 'YHWHnissi';
$username = 'YHWH';
$password = 'YHWHnissi2025';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Consultas para métricas
    $totalJournals = $pdo->query("SELECT COUNT(*) FROM journals")->fetchColumn();
    
    $totalArticles = $pdo->query("
        SELECT COUNT(*) 
        FROM publications 
        WHERE status = 3 AND date_published IS NOT NULL
    ")->fetchColumn();

    $totalAuthors = $pdo->query("
        SELECT COUNT(DISTINCT author_id) FROM authors
    ")->fetchColumn();

    $years = $pdo->query("
        SELECT 
            MIN(YEAR(date_published)) AS first_year,
            MAX(YEAR(date_published)) AS last_year
        FROM publications
        WHERE date_published IS NOT NULL
    ")->fetch(PDO::FETCH_ASSOC);

    echo json_encode([
        'status' => 'success',
        'data' => [
            'journals' => (int)$totalJournals,
            'articles' => (int)$totalArticles,
            'authors' => (int)$totalAuthors,
            'first_year' => (int)$years['first_year'],
            'last_year' => (int)$years['last_year'],
        ]
    ]);
    
} catch (PDOException $e) {
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}
?>